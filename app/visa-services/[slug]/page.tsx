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

  return <ServicePageClient service={fullService} category="visa" />;
}