import Link from 'next/link';
import { ArrowUpRight, BookOpen, FilePenLine, Sparkles, TrendingUp } from 'lucide-react';
import { getAdminBlogPosts, getBlogDashboardStats } from '@/lib/blog';

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export default async function AdminDashboardPage() {
  const [stats, recentPosts] = await Promise.all([
    getBlogDashboardStats(),
    getAdminBlogPosts({ page: 1, limit: 5 }),
  ]);

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
              <Sparkles className="h-3.5 w-3.5" />
              Admin overview
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Content operations dashboard</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Create posts, manage publication state, and keep metadata aligned with the public blog without changing the public rendering layer.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/admin/blogs/new" className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15">
              <FilePenLine className="h-4 w-4" />
              New post
            </Link>
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <BookOpen className="h-4 w-4" />
              View public blog
            </Link>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total posts" value={stats.total} icon={TrendingUp} />
        <StatCard label="Published" value={stats.published} icon={ArrowUpRight} />
        <StatCard label="Drafts" value={stats.drafts} icon={FilePenLine} />
        <StatCard label="Featured" value={stats.featured} icon={Sparkles} />
      </div>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-950">Recent posts</h3>
            <p className="mt-1 text-sm text-slate-500">Latest editorial changes from the same collection used by the public blog.</p>
          </div>
          <Link href="/admin/blogs" className="text-sm font-medium text-cyan-700 hover:text-cyan-800">
            View all
          </Link>
        </div>

        <div className="space-y-3">
          {recentPosts.posts.map((post) => (
            <div key={post._id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  <span>{post.status || 'published'}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>
                <Link href={`/admin/blogs/${post._id}/edit`} className="mt-2 block text-base font-semibold text-slate-950 hover:text-cyan-700">
                  {post.title}
                </Link>
                <p className="mt-1 text-sm text-slate-500">/{post.slug}</p>
              </div>
              <div className="text-sm text-slate-500">
                {new Date(post.updatedAt || post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}