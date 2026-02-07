import { Metadata } from 'next';
import { connectToDatabase } from '@/lib/mongodb';
import { BlogIndexPost } from '@/types/blog';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | VistaDocs Center - Technical Insights & Visa Guides',
  description: 'In-depth guides on UAE visa processing, Next.js development, and technical implementation strategies from our team.',
  openGraph: {
    title: 'VistaDocs Blog - Technical Insights & Visa Guides',
    description: 'In-depth guides on UAE visa processing, Next.js development, and technical implementation strategies.',
    url: 'https://vistadocs.ae/blog',
    type: 'website',
  },
};

async function getBlogPosts(page: number = 1, postsPerPage: number = 12) {
  const { db } = await connectToDatabase();
  
  const skip = (page - 1) * postsPerPage;
  
  const [posts, total] = await Promise.all([
    db.collection('posts')
      .find({ 'seo.noindex': { $ne: true } })
      .sort({ publishedAt: -1 })
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
      })
      .toArray(),
    db.collection('posts').countDocuments({ 'seo.noindex': { $ne: true } })
  ]);

  return {
    posts: posts as unknown as BlogIndexPost[],
    total,
    totalPages: Math.ceil(total / postsPerPage),
  };
}

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || '1');
  const { posts, total, totalPages } = await getBlogPosts(page);

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Technical insights, implementation guides, and regulatory updates from our team.
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {post.coverImage && (
                    <div className="aspect-video bg-gray-100">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
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
                        className="hover:text-blue-600 transition-colors"
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
                        className="text-blue-600 hover:text-blue-700 font-medium"
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
