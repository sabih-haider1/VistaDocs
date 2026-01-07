import { Metadata } from 'next';
import FAQPageClient from './FAQPageClient';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - VistaDocs Center',
  description: 'Find answers to common questions about visa services, technical solutions, and our processes at VistaDocs Center.',
  keywords: ['faq', 'visa questions', 'technical services help', 'dubai visa faq'],
};

export default function FAQPage() {
  return <FAQPageClient />;
}
