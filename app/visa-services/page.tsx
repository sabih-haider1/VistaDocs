import { Metadata } from 'next';
import VisaServicesPageClient from './VisaServicesPageClient';

export const metadata: Metadata = {
  title: 'UAE Visa Services | Employment, Family, Golden Visa & Company Formation Dubai',
  description: 'Fast-track UAE visa sponsorship (7-14 days), company formation, PRO services, and document attestation for entrepreneurs and SMEs in Dubai, Abu Dhabi, and across UAE.',
  keywords: ['uae visa services', 'dubai employment visa', 'uae family visa', 'golden visa uae', 'company formation dubai', 'pro services dubai', 'visa sponsorship', 'document attestation uae'],
  alternates: {
    canonical: '/visa-services',
  },
  openGraph: {
    title: 'UAE Visa Services | Employment, Family & Company Formation',
    description: 'Complete UAE visa and business services for expats and entrepreneurs.',
    url: 'https://vistadocscenter.com/visa-services',
    type: 'website',
  },
};

export default function VisaServicesPage() {
  return <VisaServicesPageClient />;
}
