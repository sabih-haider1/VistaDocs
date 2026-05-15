import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Get Free Consultation | VistaDocs Center UAE Business Services',
  description: 'Book your free consultation with VistaDocs. Expert guidance on UAE visa sponsorship, company formation, PRO services, and digital systems for your business.',
  keywords: ['free consultation uae', 'business consultation dubai', 'visa consultation uae', 'company formation consultation'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Get Free Consultation | VistaDocs Center',
    description: 'Book your free consultation with VistaDocs. Expert guidance on UAE business services.',
    url: 'https://vistadocscenter.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
