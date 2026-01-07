import { Metadata } from 'next';
import TechnicalServicesPageClient from './TechnicalServicesPageClient';

export const metadata: Metadata = {
  title: 'Technical Services Dubai - Web Development & Business Solutions',
  description: 'Professional technical services in UAE. WordPress development, custom web applications, POS systems, and CRM solutions for SMBs.',
  keywords: ['web development dubai', 'wordpress dubai', 'pos system uae', 'crm customization'],
};

export default function TechnicalServicesPage() {
  return <TechnicalServicesPageClient />;
}
