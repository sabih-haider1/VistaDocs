'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

// Breadcrumbs component with structured data for SEO
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vistadocs.ae',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `https://vistadocs.ae${item.url}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-2 text-sm text-white/80 mb-6"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4" />
              {!isLast ? (
                <Link href={item.url} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-white font-medium">{item.name}</span>
              )}
            </div>
          );
        })}
      </motion.nav>
    </>
  );
}
