import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { connectToDatabase } from '@/lib/mongodb';
import { BlogPost } from '@/types/blog';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

async function getPost(slug: string): Promise<BlogPost | null> {
  const { db } = await connectToDatabase();
  
  const post = await db.collection('posts').findOne({ slug });
  
  if (!post) return null;
  
  return post as unknown as BlogPost;
}

async function getRelatedServices(serviceSlugs: string[]) {
  // Import service data dynamically
  const { visaServicesData } = await import('@/data/visa-services');
  const { technicalServicesData } = await import('@/data/technical-services');
  
  const services = serviceSlugs.map((slug) => {
    // Check visa services first
    if (visaServicesData[slug]) {
      return {
        slug,
        title: visaServicesData[slug].seo.title,
        category: 'visa-services',
      };
    }
    // Then technical services
    if (technicalServicesData[slug]) {
      return {
        slug,
        title: technicalServicesData[slug].seo.title,
        category: 'technical-services',
      };
    }
    return null;
  }).filter(Boolean);
  
  return services;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: new Date(post.publishedAt).toISOString(),
      modifiedTime: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
      authors: [post.author.name],
      url: `https://vistadocs.ae/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
    alternates: {
      canonical: post.seo.canonicalUrl || `/blog/${post.slug}`,
    },
  };
}

// Revalidate every 24 hours
export const revalidate = 86400;

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  
  if (!post || post.seo.noindex) {
    notFound();
  }

  const relatedServices = await getRelatedServices(post.seo.relatedServices);

  // Structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: post.updatedAt
      ? new Date(post.updatedAt).toISOString()
      : new Date(post.publishedAt).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'VistaDocs Center',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vistadocs.ae/site_identity.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Blog', url: '/blog' },
              { name: post.title, url: `/blog/${post.slug}` },
            ]}
          />

          {/* Article Header */}
          <article className="mt-8">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                  {post.category.replace('-', ' ')}
                </span>
                <span className="text-gray-400">•</span>
                <time
                  dateTime={new Date(post.publishedAt).toISOString()}
                  className="text-sm text-gray-500"
                >
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">{post.readTime} min read</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.h1}
              </h1>

              <p className="text-xl text-gray-600 mb-6">{post.metaDescription}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div>
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.role}</p>
                </div>
              </div>
            </header>

            {/* Cover Image */}
            {post.coverImage && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Updated Date */}
            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">
                Last updated:{' '}
                {new Date(post.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            )}

            {/* Author Bio */}
            {post.author.bio && (
              <aside className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  About {post.author.name}
                </h2>
                <p className="text-gray-700">{post.author.bio}</p>
              </aside>
            )}

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <aside className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Related Services
                </h2>
                <div className="space-y-3">
                  {relatedServices.map((service: any) => (
                    <Link
                      key={service.slug}
                      href={`/${service.category}/${service.slug}`}
                      className="block p-4 bg-white rounded-md border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-medium text-gray-900 hover:text-blue-600">
                        {service.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </aside>
            )}
          </article>
        </div>
      </div>
    </>
  );
}
