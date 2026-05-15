import { Metadata } from 'next';
import FAQPageClient from './FAQPageClient';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // Visa FAQs
    {
      '@type': 'Question',
      name: 'How long does visa processing take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Processing times vary by visa type. Employment visas typically take 7-14 working days, family visas 7-14 days, golden visas 14-30 days, tourist visas 3-5 days, and visa renewals 5-10 working days. These timelines assume all documents are complete and correct.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for an employment visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For an employment visa, you need: passport copies (6 months validity), passport-size photos, educational certificates (attested), employment contract, company trade license copy, and medical fitness test results. Additional documents may be required based on your specific case.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I sponsor my family on my employment visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can sponsor your spouse and children if you meet the minimum salary requirements: AED 4,000/month for spouse only, or AED 10,000/month for spouse and children. You also need a tenancy contract or accommodation letter.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Golden Visa and who qualifies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Golden Visa is a long-term residence permit (5 or 10 years) for investors, entrepreneurs, specialized talents, researchers, and outstanding students. Qualification criteria include: investors with property worth AED 2M+, business investment of AED 2M+, or specialized professionals in science, medicine, engineering, etc.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle document attestation for employment visas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide complete document attestation services including educational certificates, marriage certificates, birth certificates, and commercial documents. We handle the entire process from notary attestation to MOFA attestation in UAE, typically completed in 15-25 working days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with tourist visa extensions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we process tourist visa extensions from inside UAE. 30-day visas can be extended once for 30 days, and 90-day visas can be extended twice (30 days each). Extensions must be applied before visa expiry and typically take 2-3 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the medical fitness test and when is it required?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medical fitness test is a mandatory health screening for all residence visa applicants, including tests for tuberculosis, HIV, Hepatitis B & C. It\'s required for employment visas, family visas, visa renewals, and golden visas. Results are available in 24-48 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Emirates ID processing take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emirates ID processing typically takes 7-10 working days from biometric enrollment. You must apply within 60 days of entry to avoid fines. The card is valid for the same duration as your residence visa.',
      },
    },
    // Technical FAQs
    {
      '@type': 'Question',
      name: 'What technologies do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialize in modern web technologies including React, Next.js, WordPress, Node.js, Python, and PostgreSQL. We also work with various POS systems and CRM platforms like SuiteCRM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide ongoing support after project completion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer maintenance and support packages for all our technical projects. This includes bug fixes, updates, security patches, and feature enhancements as needed.',
      },
    },
    // General FAQs
    {
      '@type': 'Question',
      name: 'Can you help with company formation in UAE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We handle mainland company formation, free zone setup (DMCC, JAFZA, etc.), offshore company formation, and branch office establishment. Our services include trade license processing, MOA drafting, visa quota allocation, and bank account opening support.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'FAQ | Common Questions About UAE Visa, Business Setup & Services',
  description: 'Quick answers to frequently asked questions about UAE employment visas, company formation, PRO services, document attestation, POS systems, CRM, and WordPress development.',
  keywords: ['uae business faq', 'visa faq dubai', 'company formation questions', 'pro services questions', 'business services faq uae'],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ | VistaDocs Center - Common Questions Answered',
    description: 'Find answers to your UAE business, visa, and digital services questions.',
    url: 'https://vistadocscenter.com/faq',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageClient />
    </>
  );
}
