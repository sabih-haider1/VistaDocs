import { Metadata } from 'next';
import VisaServicesPageClient from './VisaServicesPageClient';

export const metadata: Metadata = {
  title: 'Visa & Document Services Dubai UAE - VistaDocs Center',
  description: 'Complete visa processing, document attestation, company formation, and PRO services in UAE. Employment visas, golden visas, tourist visas, and business setup solutions.',
  keywords: ['visa services uae', 'dubai visa', 'employment visa', 'family visa', 'golden visa', 'tourist visa', 'document attestation', 'company formation uae', 'pro services dubai'],
};

export default function VisaServicesPage() {
  return <VisaServicesPageClient />;
}
