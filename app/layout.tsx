import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VistaDocs Center | UAE Business Launch & Growth Partner",
  description: "Premium UAE business services for visas, company formation, PRO work, attestation, Emirates ID, POS, CRM, and WordPress development.",
  keywords: ["uae business services", "dubai visa services", "company formation dubai", "pro services dubai", "pos systems uae", "crm solutions uae"],
  icons: {
    icon: '/site_identity.png',
    shortcut: '/site_identity.png',
    apple: '/site_identity.png',
  },
  metadataBase: new URL('https://vistadocscenter.com'),
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://vistadocscenter.com',
    siteName: 'VistaDocs Center',
    title: 'VistaDocs Center | UAE Business Launch & Growth Partner',
    description: 'Premium UAE business services for visas, company formation, PRO work, and digital systems.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
    name: 'VistaDocs Center',
    description: 'UAE business launch and growth partner for visas, company formation, PRO services, attestation, Emirates ID, POS, CRM, and WordPress development.',
    url: 'https://vistadocscenter.com',
    logo: 'https://vistadocscenter.com/site_identity.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    telephone: '+971507354640',
    email: 'vistadocscenter@gmail.com',
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    sameAs: [
      'https://web.facebook.com/profile.php?id=61586774744438',
      'https://www.linkedin.com/in/vistadocs-center-b4988b3a0/',
      'https://instagram.com/vistadocs',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VistaDocs Center',
    url: 'https://vistadocscenter.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://vistadocscenter.com/blog?query={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
