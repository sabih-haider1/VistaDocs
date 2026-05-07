import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPublicBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | VistaDocs Center',
  description: 'Practical UAE guides on visas, company formation, business operations, POS systems, CRM, and WordPress development.',
  openGraph: {
    title: 'VistaDocs Blog | UAE Business Guides',
    description: 'Practical UAE guides on visas, company formation, business operations, POS systems, CRM, and WordPress development.',
    url: 'https://vistadocscenter.com/blog',
    type: 'website',
  },
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || '1');
  const { posts, totalPages } = await getPublicBlogPosts(page);

  return (
    <div className="pt-24">
      <div className="container-xl py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[var(--text-900)] mb-2">Blog</h1>
          <p className="text-[var(--text-700)] max-w-3xl">Technical insights, implementation guides, and regulatory updates from our team.</p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="card overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {post.coverImage && (
                    <div className="aspect-video bg-gray-100 relative">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                        {post.category.replace('-', ' ')}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">
                        {post.readTime} min read
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-[var(--brand-accent)] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[var(--brand-accent)] hover:text-[var(--brand-strong)] font-medium"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                {page > 1 && (
                  <Link
                    href={`/blog?page=${page - 1}`}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Previous
                  </Link>
                )}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={`/blog?page=${p}`}
                      className={`px-4 py-2 border rounded-md ${
                        p === page
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {p}
                    </Link>
                  ))}
                </div>
                {page < totalPages && (
                  <Link
                    href={`/blog?page=${page + 1}`}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Next
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
