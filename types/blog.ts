export interface BlogAuthor {
  name: string;
  role: string;
  bio?: string;
}

export interface BlogSEO {
  canonicalUrl?: string;
  noindex: boolean;
  relatedServices: string[]; // Service slugs
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export type BlogStatus = 'draft' | 'published';

export interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  publishedAt: Date;
  updatedAt?: Date;
  category: 'technical' | 'regulatory' | 'case-study' | 'analysis';
  tags: string[];
  content: string; // HTML content
  contentJson?: unknown;
  excerpt: string; // For blog index cards
  author: BlogAuthor;
  seo: BlogSEO;
  featured: boolean;
  readTime: number; // In minutes
  coverImage?: string;
  status?: BlogStatus;
  createdAt?: Date;
}

export interface BlogIndexPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: Date;
  category: BlogPost['category'];
  author: BlogAuthor;
  readTime: number;
  coverImage?: string;
}
