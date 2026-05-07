import { Metadata } from 'next';
import TechnicalServicesPageClient from './TechnicalServicesPageClient';

export const metadata: Metadata = {
  title: 'Digital Systems UAE | POS, CRM & WordPress Development | VistaDocs Center',
  description: 'Professional digital systems for UAE businesses. POS setup, CRM customization, WordPress development, and web applications.',
  keywords: ['web development dubai', 'wordpress development uae', 'pos systems uae', 'crm solutions uae'],
};

export default function TechnicalServicesPage() {
  return <TechnicalServicesPageClient />;
}
