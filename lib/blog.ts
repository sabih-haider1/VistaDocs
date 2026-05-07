import { ObjectId, type Db, type Document } from 'mongodb';
import sanitizeHtml from 'sanitize-html';
import { z } from 'zod';
import { connectToDatabase } from '@/lib/mongodb';
import type { BlogPost, BlogStatus } from '@/types/blog';

export const blogCategories = ['technical', 'regulatory', 'case-study', 'analysis'] as const;

const allowedTags = [
  'p', 'br', 'strong', 'em', 'u', 's', 'blockquote', 'code', 'pre', 'a',
  'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'img', 'figure',
  'figcaption', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'div', 'span',
  'sup', 'sub', 'mark'
];

const allowedAttributes = {
  a: ['href', 'name', 'target', 'rel'],
  img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
  td: ['colspan', 'rowspan'],
  th: ['colspan', 'rowspan', 'scope'],
  '*': ['class', 'data-align', 'style'],
};

const allowedStyles = {
  '*': {
    'text-align': [/^left$/, /^right$/, /^center$/, /^justify$/],
  },
};

export const blogFormSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(5).max(180),
  slug: z.string().min(3).max(180),
  metaDescription: z.string().min(50).max(170),
  h1: z.string().min(5).max(180),
  excerpt: z.string().min(40).max(280),
  category: z.enum(blogCategories),
  tags: z.array(z.string().min(1)).default([]),
  content: z.string().min(1),
  contentJson: z.string().optional(),
  coverImage: z.string().url().optional().or(z.literal('')),
  status: z.enum(['draft', 'published']).default('draft'),
  featured: z.boolean().default(false),
  readTime: z.number().int().min(1).max(60).optional(),
  canonicalUrl: z.string().url().optional().or(z.literal('')),
  noindex: z.boolean().default(false),
  relatedServices: z.array(z.string().min(1)).default([]),
  ogTitle: z.string().optional().or(z.literal('')),
  ogDescription: z.string().optional().or(z.literal('')),
  ogImage: z.string().url().optional().or(z.literal('')),
  authorName: z.string().min(2).max(120),
  authorRole: z.string().min(2).max(120),
  authorBio: z.string().optional().or(z.literal('')),
});

type BlogDocument = Document & {
  _id: ObjectId;
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  publishedAt?: Date | string;
  updatedAt?: Date | string;
  createdAt?: Date | string;
  category: BlogPost['category'];
  tags?: string[];
  content: string;
  contentJson?: unknown;
  excerpt: string;
  author: BlogPost['author'];
  seo?: BlogPost['seo'] & {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };
  featured?: boolean;
  readTime?: number;
  coverImage?: string;
  status?: BlogStatus;
};

let indexesReady = false;

function normalizeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, ' ');
}

export function calculateReadTime(content: string) {
  const words = stripHtml(content)
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 220));
}

export function sanitizeBlogContent(content: string) {
  return sanitizeHtml(content, {
    allowedTags,
    allowedAttributes,
    allowedStyles,
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer nofollow' }),
    },
    allowedSchemes: ['http', 'https', 'mailto'],
  });
}

function normalizePostDocument(document: BlogDocument): BlogPost {
  const status = document.status ?? 'published';
  const seo = document.seo ?? { noindex: false, relatedServices: [] };

  return {
    _id: document._id.toString(),
    slug: document.slug,
    title: document.title,
    metaDescription: document.metaDescription,
    h1: document.h1,
    publishedAt: (document.publishedAt ? new Date(document.publishedAt) : new Date()) as Date,
    updatedAt: document.updatedAt ? new Date(document.updatedAt) : undefined,
    createdAt: document.createdAt ? new Date(document.createdAt) : undefined,
    category: document.category,
    tags: document.tags ?? [],
    content: document.content,
    contentJson: document.contentJson,
    excerpt: document.excerpt,
    author: document.author,
    seo: {
      canonicalUrl: seo.canonicalUrl,
      noindex: seo.noindex ?? false,
      relatedServices: seo.relatedServices ?? [],
      ogTitle: seo.ogTitle,
      ogDescription: seo.ogDescription,
      ogImage: seo.ogImage,
    },
    featured: Boolean(document.featured),
    readTime: document.readTime ?? calculateReadTime(document.content),
    coverImage: document.coverImage,
    status,
  };
}

async function ensureBlogIndexes(db: Db) {
  if (indexesReady) {
    return;
  }

  await Promise.all([
    db.collection('posts').createIndex({ slug: 1 }, { unique: true }),
    db.collection('posts').createIndex({ status: 1, publishedAt: -1 }),
    db.collection('posts').createIndex({ updatedAt: -1 }),
    db.collection('users').createIndex({ email: 1 }, { unique: true }),
    db.collection('users').createIndex({ role: 1 }),
  ]);

  indexesReady = true;
}

export async function getPublishedBlogPostBySlug(slug: string) {
  const { db } = await connectToDatabase();
  await ensureBlogIndexes(db);

  const post = await db.collection('posts').findOne<BlogDocument>({
    slug,
    $or: [{ status: 'published' }, { status: { $exists: false } }],
    'seo.noindex': { $ne: true },
  });

  return post ? normalizePostDocument(post) : null;
}

export async function getAdminBlogPostById(id: string) {
  const { db } = await connectToDatabase();
  await ensureBlogIndexes(db);

  if (!ObjectId.isValid(id)) {
    return null;
  }

  const post = await db.collection('posts').findOne<BlogDocument>({ _id: new ObjectId(id) });
  return post ? normalizePostDocument(post) : null;
}

export async function getPublicBlogPosts(page = 1, postsPerPage = 12) {
  const { db } = await connectToDatabase();
  await ensureBlogIndexes(db);

  const skip = (page - 1) * postsPerPage;
  const query = {
    $or: [{ status: 'published' }, { status: { $exists: false } }],
    'seo.noindex': { $ne: true },
  };

  const [posts, total] = await Promise.all([
    db.collection('posts')
      .find(query)
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(postsPerPage)
      .project({
        slug: 1,
        title: 1,
        metaDescription: 1,
        excerpt: 1,
        publishedAt: 1,
        category: 1,
        author: 1,
        readTime: 1,
        coverImage: 1,
        status: 1,
      })
      .toArray(),
    db.collection('posts').countDocuments(query),
  ]);

  return {
    posts: posts.map((post) => normalizePostDocument(post as BlogDocument)),
    total,
    totalPages: Math.max(1, Math.ceil(total / postsPerPage)),
  };
}

export async function getAdminBlogPosts(params: {
  page?: number;
  limit?: number;
  query?: string;
  status?: BlogStatus | 'all';
}) {
  const { db } = await connectToDatabase();
  await ensureBlogIndexes(db);

  const page = params.page ?? 1;
  const limit = params.limit ?? 12;
  const skip = (page - 1) * limit;
  const filters: Document[] = [];

  if (params.query) {
    const search = new RegExp(params.query, 'i');
    filters.push({
      $or: [
        { title: search },
        { slug: search },
        { excerpt: search },
        { tags: search },
      ],
    });
  }

  if (params.status && params.status !== 'all') {
    filters.push({ status: params.status });
  }

  const query = filters.length > 0 ? { $and: filters } : {};

  const [posts, total] = await Promise.all([
    db.collection('posts')
      .find(query)
      .sort({ updatedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray(),
    db.collection('posts').countDocuments(query),
  ]);

  return {
    posts: posts.map((post) => normalizePostDocument(post as BlogDocument)),
    total,
    totalPages: Math.max(1, Math.ceil(total / limit)),
  };
}

export async function getBlogDashboardStats() {
  const { db } = await connectToDatabase();
  await ensureBlogIndexes(db);

  const [drafts, published, featured, total] = await Promise.all([
    db.collection('posts').countDocuments({ status: 'draft' }),
    db.collection('posts').countDocuments({ $or: [{ status: 'published' }, { status: { $exists: false } }] }),
    db.collection('posts').countDocuments({ featured: true }),
    db.collection('posts').countDocuments({}),
  ]);

  return { drafts, published, featured, total };
}

function splitTags(tags: string[]) {
  return tags.map((tag) => tag.trim()).filter(Boolean);
}

function splitCsv(value: string | undefined) {
  if (!value) {
    return [];
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export function parseBlogPayload(formData: FormData) {
  const raw = {
    id: formData.get('id')?.toString() || undefined,
    title: formData.get('title')?.toString() || '',
    slug: normalizeSlug(formData.get('slug')?.toString() || ''),
    metaDescription: formData.get('metaDescription')?.toString() || '',
    h1: formData.get('h1')?.toString() || '',
    excerpt: formData.get('excerpt')?.toString() || '',
    category: formData.get('category')?.toString() || 'technical',
    tags: splitCsv(formData.get('tags')?.toString()),
    content: formData.get('content')?.toString() || '',
    contentJson: formData.get('contentJson')?.toString() || undefined,
    coverImage: formData.get('coverImage')?.toString() || '',
    status: (formData.get('status')?.toString() || 'draft') as BlogStatus,
    featured: formData.get('featured') === 'on',
    readTime: formData.get('readTime') ? Number(formData.get('readTime')) : undefined,
    canonicalUrl: formData.get('canonicalUrl')?.toString() || '',
    noindex: formData.get('noindex') === 'on',
    relatedServices: splitCsv(formData.get('relatedServices')?.toString()),
    ogTitle: formData.get('ogTitle')?.toString() || '',
    ogDescription: formData.get('ogDescription')?.toString() || '',
    ogImage: formData.get('ogImage')?.toString() || '',
    authorName: formData.get('authorName')?.toString() || '',
    authorRole: formData.get('authorRole')?.toString() || '',
    authorBio: formData.get('authorBio')?.toString() || '',
  };

  const parsed = blogFormSchema.safeParse(raw);

  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message || 'Invalid blog form data');
  }

  return parsed.data;
}

export async function upsertBlogPost(formData: FormData, sessionUser: { name?: string | null; email?: string | null }) {
  const { db } = await connectToDatabase();
  await ensureBlogIndexes(db);

  const data = parseBlogPayload(formData);
  const id = data.id;
  const now = new Date();
  const content = sanitizeBlogContent(data.content);
  const readTime = data.readTime ?? calculateReadTime(content);
  const document = {
    slug: data.slug,
    title: data.title,
    metaDescription: data.metaDescription,
    h1: data.h1,
    updatedAt: now,
    category: data.category,
    tags: splitTags(data.tags),
    content,
    contentJson: data.contentJson ? JSON.parse(data.contentJson) : undefined,
    excerpt: data.excerpt,
    author: {
      name: data.authorName || sessionUser.name || 'VistaDocs Editorial',
      role: data.authorRole || 'Content Editor',
      bio: data.authorBio || undefined,
    },
    seo: {
      canonicalUrl: data.canonicalUrl || undefined,
      noindex: data.noindex || data.status === 'draft',
      relatedServices: data.relatedServices,
      ogTitle: data.ogTitle || undefined,
      ogDescription: data.ogDescription || undefined,
      ogImage: data.ogImage || undefined,
    },
    featured: data.featured,
    readTime,
    coverImage: data.coverImage || undefined,
    status: data.status,
  };

  if (id && ObjectId.isValid(id)) {
    const existing = await db.collection('posts').findOne({ _id: new ObjectId(id) });

    if (!existing) {
      throw new Error('Blog post not found');
    }

    await db.collection('posts').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...document,
          createdAt: existing.createdAt || now,
          publishedAt: existing.publishedAt || (data.status === 'published' ? now : undefined),
        },
      }
    );

    return id;
  }

  const insertResult = await db.collection('posts').insertOne({
    ...document,
    createdAt: now,
    publishedAt: data.status === 'published' ? now : undefined,
  });

  return insertResult.insertedId.toString();
}

export async function deleteBlogPostById(id: string) {
  const { db } = await connectToDatabase();
  await ensureBlogIndexes(db);

  if (!ObjectId.isValid(id)) {
    throw new Error('Invalid blog post id');
  }

  await db.collection('posts').deleteOne({ _id: new ObjectId(id) });
}

export async function toggleBlogPostStatus(id: string, status: BlogStatus) {
  const { db } = await connectToDatabase();
  await ensureBlogIndexes(db);

  if (!ObjectId.isValid(id)) {
    throw new Error('Invalid blog post id');
  }

  const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });

  if (!post) {
    throw new Error('Blog post not found');
  }

  await db.collection('posts').updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        status,
        publishedAt: status === 'published' ? (post.publishedAt || new Date()) : post.publishedAt,
        updatedAt: new Date(),
        'seo.noindex': status !== 'published',
      },
    }
  );
}