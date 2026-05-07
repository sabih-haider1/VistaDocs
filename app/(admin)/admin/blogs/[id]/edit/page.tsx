import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { ArrowLeft, Trash2 } from 'lucide-react';
import BlogForm from '@/components/admin/BlogForm';
import { deleteBlogPostAction, saveBlogPostAction } from '../../actions';
import { getAdminBlogPostById } from '@/lib/blog';
import { requireAdminSession } from '@/lib/admin-auth';

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await requireAdminSession();

  if (!session) {
    redirect('/login');
  }

  const { id } = await params;
  const post = await getAdminBlogPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link href="/admin/blogs" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" />
            Back to posts
          </Link>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Edit post</h2>
          <p className="mt-2 text-sm text-slate-500">Update content, metadata, and publication state.</p>
        </div>

        <form action={deleteBlogPostAction}>
          <input type="hidden" name="id" value={post._id} />
          <button type="submit" className="inline-flex items-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 hover:bg-rose-100">
            <Trash2 className="h-4 w-4" />
            Delete post
          </button>
        </form>
      </div>

      <BlogForm
        mode="edit"
        action={saveBlogPostAction}
        submitLabel="Save changes"
        initialValues={{
          id: post._id,
          originalSlug: post.slug,
          title: post.title,
          slug: post.slug,
          metaDescription: post.metaDescription,
          h1: post.h1,
          excerpt: post.excerpt,
          category: post.category,
          tags: post.tags.join(', '),
          content: post.content,
          coverImage: post.coverImage,
          status: post.status || 'published',
          featured: post.featured,
          readTime: post.readTime,
          canonicalUrl: post.seo.canonicalUrl,
          noindex: post.seo.noindex,
          relatedServices: post.seo.relatedServices.join(', '),
          ogTitle: post.seo.ogTitle,
          ogDescription: post.seo.ogDescription,
          ogImage: post.seo.ogImage,
          authorName: post.author.name,
          authorRole: post.author.role,
          authorBio: post.author.bio,
        }}
      />
    </div>
  );
}