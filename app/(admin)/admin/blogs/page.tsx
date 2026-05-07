import Link from 'next/link';
import { ChevronLeft, ChevronRight, Eye, Filter, PencilLine, Plus, Search, ToggleLeft, Trash2 } from 'lucide-react';
import { deleteBlogPostAction, toggleBlogPostStatusAction } from './actions';
import { getAdminBlogPosts } from '@/lib/blog';

export default async function AdminBlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string; status?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page || '1');
  const query = params.q || '';
  const status = params.status || 'all';
  const { posts, totalPages } = await getAdminBlogPosts({
    page,
    query: query || undefined,
    status: status as 'all' | 'draft' | 'published',
  });

  const buildHref = (nextPage: number) => {
    const search = new URLSearchParams();
    if (query) search.set('q', query);
    if (status && status !== 'all') search.set('status', status);
    search.set('page', String(nextPage));
    return `/admin/blogs?${search.toString()}`;
  };

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Blog management</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Manage editorial content</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Search, filter, publish, edit, and delete posts from one secured surface.
            </p>
          </div>

          <Link href="/admin/blogs/new" className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15">
            <Plus className="h-4 w-4" />
            New post
          </Link>
        </div>

        <form className="mt-6 grid gap-3 lg:grid-cols-[1.2fr_0.8fr_auto]" action="/admin/blogs" method="get">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              name="q"
              defaultValue={query}
              placeholder="Search posts by title, slug, excerpt, or tags"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
            />
          </label>

          <label className="relative block">
            <Filter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <select
              name="status"
              defaultValue={status}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
            >
              <option value="all">All statuses</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>

          <button type="submit" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Search
          </button>
        </form>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Dates</th>
                <th className="px-6 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-16 text-center text-slate-500">
                    No posts match your current filters.
                  </td>
                </tr>
              ) : (
                posts.map((post) => {
                  const nextStatus = post.status === 'published' ? 'draft' : 'published';

                  return (
                    <tr key={post._id} className="align-top">
                      <td className="px-6 py-5">
                        <div className="space-y-1">
                          <Link href={`/admin/blogs/${post._id}/edit`} className="block text-base font-semibold text-slate-950 hover:text-cyan-700">
                            {post.title}
                          </Link>
                          <p className="text-xs text-slate-500">/{post.slug}</p>
                          <p className="max-w-xl text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${post.status === 'published' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                          {post.status || 'published'}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-slate-500">
                        <div>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                        <div className="mt-1 text-xs">Updated {post.updatedAt ? new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}</div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex flex-wrap gap-2">
                          <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
                            <Eye className="h-3.5 w-3.5" />
                            Preview
                          </Link>
                          <Link href={`/admin/blogs/${post._id}/edit`} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
                            <PencilLine className="h-3.5 w-3.5" />
                            Edit
                          </Link>
                          <form action={toggleBlogPostStatusAction}>
                            <input type="hidden" name="id" value={post._id} />
                            <input type="hidden" name="status" value={nextStatus} />
                            <button type="submit" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
                              <ToggleLeft className="h-3.5 w-3.5" />
                              {post.status === 'published' ? 'Unpublish' : 'Publish'}
                            </button>
                          </form>
                          <form action={deleteBlogPostAction}>
                            <input type="hidden" name="id" value={post._id} />
                            <button type="submit" className="inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700 hover:bg-rose-100">
                              <Trash2 className="h-3.5 w-3.5" />
                              Delete
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </section>

      {totalPages > 1 && (
        <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
          <Link href={page > 1 ? buildHref(page - 1) : '#'} aria-disabled={page <= 1} className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium ${page > 1 ? 'border-slate-200 text-slate-700 hover:bg-slate-50' : 'pointer-events-none border-slate-100 text-slate-300'}`}>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Link>
          <div className="text-sm text-slate-500">
            Page <span className="font-semibold text-slate-950">{page}</span> of {totalPages}
          </div>
          <Link href={page < totalPages ? buildHref(page + 1) : '#'} aria-disabled={page >= totalPages} className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium ${page < totalPages ? 'border-slate-200 text-slate-700 hover:bg-slate-50' : 'pointer-events-none border-slate-100 text-slate-300'}`}>
            Next
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}