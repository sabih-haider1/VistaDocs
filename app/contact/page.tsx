import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact VistaDocs Center | UAE Business Services',
  description: 'Contact VistaDocs Center for UAE visa services, company formation, PRO support, and digital systems.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
