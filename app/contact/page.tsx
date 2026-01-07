import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us - VistaDocs Center',
  description: 'Get in touch with VistaDocs for visa services and technical solutions in Dubai, UAE. Free consultation available.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
