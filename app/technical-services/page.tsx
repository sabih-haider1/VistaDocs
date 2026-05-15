import { Metadata } from 'next';
import TechnicalServicesPageClient from './TechnicalServicesPageClient';

export const metadata: Metadata = {
  title: 'POS Systems, CRM & WordPress Development | Digital Solutions UAE',
  description: 'Professional digital systems for UAE businesses: POS setup with payment integration, CRM customization, inventory management, and WordPress web development for Dubai and UAE businesses.',
  keywords: ['pos system dubai', 'pos systems uae', 'crm solutions uae', 'wordpress development dubai', 'crm software dubai', 'restaurant pos uae', 'retail pos system', 'web development uae'],
  alternates: {
    canonical: '/technical-services',
  },
  openGraph: {
    title: 'POS Systems, CRM & WordPress Development | VistaDocs',
    description: 'End-to-end digital system implementation for UAE retail, hospitality, and service businesses.',
    url: 'https://vistadocscenter.com/technical-services',
    type: 'website',
  },
};

export default function TechnicalServicesPage() {
  return <TechnicalServicesPageClient />;
}
