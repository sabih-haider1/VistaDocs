import { redirect } from 'next/navigation';
import BlogForm from '@/components/admin/BlogForm';
import { saveBlogPostAction } from '../actions';
import { requireAdminSession } from '@/lib/admin-auth';

export default async function NewBlogPage() {
  const session = await requireAdminSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Create blog</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">New post</h2>
      </div>

      <BlogForm
        mode="create"
        action={saveBlogPostAction}
        submitLabel="Create post"
        initialValues={{
          status: 'draft',
          authorName: session.user.name || 'VistaDocs Editorial',
          authorRole: 'Content Editor',
          featured: false,
          noindex: false,
        }}
      />
    </div>
  );
}