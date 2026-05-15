import { Metadata } from 'next';
import FAQPageClient from './FAQPageClient';

export const metadata: Metadata = {
  title: 'FAQ | VistaDocs Center',
  description: 'Answers to common questions about UAE visa services, company formation, PRO support, and digital systems.',
  keywords: ['faq', 'visa questions', 'company formation faq', 'pro services faq', 'uae business services'],
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  return <FAQPageClient />;
}
