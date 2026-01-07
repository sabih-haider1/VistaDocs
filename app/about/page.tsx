import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us - VistaDocs Center',
  description: 'Learn about VistaDocs Center - your trusted partner for visa services and technical solutions in Dubai, UAE.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
