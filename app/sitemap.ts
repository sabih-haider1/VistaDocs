import { MetadataRoute } from 'next';
import { connectToDatabase } from '@/lib/mongodb';

export const revalidate = 86400; // Revalidate daily

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://vistadocs.ae';
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/visa-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/technical-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // Service pages
  const { visaServicesData } = await import('@/data/visa-services');
  const { technicalServicesData } = await import('@/data/technical-services');
  
  const visaServicePages: MetadataRoute.Sitemap = Object.keys(visaServicesData).map((slug) => ({
    url: `${baseUrl}/visa-services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const technicalServicePages: MetadataRoute.Sitemap = Object.keys(technicalServicesData).map((slug) => ({
    url: `${baseUrl}/technical-services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog posts from MongoDB
  let blogPages: MetadataRoute.Sitemap = [];
  
  try {
    const { db } = await connectToDatabase();
    const posts = await db
      .collection('posts')
      .find({ 'seo.noindex': { $ne: true } })
      .project({ slug: 1, updatedAt: 1, publishedAt: 1 })
      .toArray();

    blogPages = posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt || post.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    // Return empty array if MongoDB is not connected yet
  }

  return [
    ...staticPages,
    ...visaServicePages,
    ...technicalServicePages,
    ...blogPages,
  ];
}
