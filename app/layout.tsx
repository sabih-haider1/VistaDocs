import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VistaDocs Center - Visa & Technical Services in UAE",
  description: "Professional visa processing and technical services in Dubai, UAE. Employment visas, family visas, web development, and business solutions.",
  keywords: ["visa services uae", "dubai visa", "web development dubai", "technical services uae"],
  icons: {
    icon: '/site_identity.png',
    shortcut: '/site_identity.png',
    apple: '/site_identity.png',
  },
  metadataBase: new URL('https://vistadocs.ae'),
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://vistadocs.ae',
    siteName: 'VistaDocs Center',
    title: 'VistaDocs Center - Visa & Technical Services in UAE',
    description: 'Professional visa processing and technical services in Dubai, UAE.',
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
  // Organization structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'VistaDocs Center',
    description: 'Professional visa processing and technical services in Dubai, UAE',
    url: 'https://vistadocs.ae',
    logo: 'https://vistadocs.ae/site_identity.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
