import { Metadata } from 'next';
import VisaServicesPageClient from './VisaServicesPageClient';

export const metadata: Metadata = {
  title: 'Visa & Business Services Dubai UAE | VistaDocs Center',
  description: 'Complete UAE visa, company formation, document attestation, and PRO services for entrepreneurs, investors, and SMEs.',
  keywords: ['visa services uae', 'dubai visa', 'employment visa dubai', 'family visa uae', 'golden visa uae', 'document attestation uae', 'company formation dubai', 'pro services dubai'],
  alternates: {
    canonical: '/visa-services',
  },
};

export default function VisaServicesPage() {
  return <VisaServicesPageClient />;
}
