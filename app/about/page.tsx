import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About VistaDocs Center | UAE Business Launch & Growth Partner',
  description: 'Learn how VistaDocs Center supports UAE business launch, residency, operations, and digital systems.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
