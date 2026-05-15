import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About VistaDocs Center | Expert UAE Business & Visa Services Since 2024',
  description: 'Discover how VistaDocs Center helps entrepreneurs launch UAE businesses with visa sponsorship, company formation, PRO services, and digital systems integration.',
  keywords: ['uae business consultant', 'visa consultant dubai', 'company formation expert', 'business services provider uae'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About VistaDocs Center | UAE Business Services Expert',
    description: 'We help entrepreneurs and SMEs launch and grow in the UAE with comprehensive visa, compliance, and digital solutions.',
    url: 'https://vistadocscenter.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
