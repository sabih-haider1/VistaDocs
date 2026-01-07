import { Metadata } from 'next';
import VisaServicesPageClient from './VisaServicesPageClient';

export const metadata: Metadata = {
  title: 'Visa Services in Dubai & UAE - VistaDocs Center',
  description: 'Complete visa processing services in UAE. Employment visas, family visas, golden visas, and visa renewals. Professional and reliable service.',
  keywords: ['visa services uae', 'dubai visa', 'employment visa', 'family visa', 'golden visa'],
};

export default function VisaServicesPage() {
  return <VisaServicesPageClient />;
}
