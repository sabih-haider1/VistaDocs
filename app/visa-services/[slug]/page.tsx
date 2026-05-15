import { Metadata } from 'next';
import { visaServicesData } from '@/data/visa-services';
import { notFound } from 'next/navigation';
import ServicePageClient from './ServicePageClient';
import type { Service } from '@/types/services';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(visaServicesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = visaServicesData[slug];

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.metaDescription,
    keywords: [service.seo.primaryKeyword, ...service.seo.secondaryKeywords],
    openGraph: {
      title: service.seo.title,
      description: service.seo.metaDescription,
      type: 'website',
    },
    alternates: {
      canonical: `/visa-services/${slug}`,
    },
  };
}

export default async function VisaServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = visaServicesData[slug];

  if (!service) {
    notFound();
  }

  const fullService: Service = {
    ...service,
    slug,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vistadocscenter.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Visa Services',
        item: 'https://vistadocscenter.com/visa-services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.seo.title,
        item: `https://vistadocscenter.com/visa-services/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePageClient service={fullService} category="visa" />
    </>
  );
}