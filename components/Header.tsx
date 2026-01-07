'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Visa Services',
    href: '/visa-services',
    children: [
      { label: 'Employment Visa', href: '/visa-services/employment-visa-uae', description: 'Work permits and residence visas' },
      { label: 'Family Visa', href: '/visa-services/family-visa-uae', description: 'Sponsor your family members' },
      { label: 'Golden Visa', href: '/visa-services/golden-visa-uae', description: 'Long-term residence permits' },
      { label: 'Tourist Visa', href: '/visa-services/tourist-visa-uae', description: 'Short-term visit permits' },
      { label: 'Visa Renewal', href: '/visa-services/visa-renewal-uae', description: 'Extend your residence permit' },
      { label: 'Medical & Emirates ID', href: '/visa-services/medical-emirates-id-uae', description: 'Health screening and ID' },
    ],
  },
  {
    label: 'Business Services',
    href: '/visa-services',
    children: [
      { label: 'Company Formation', href: '/visa-services/company-formation-uae', description: 'Business setup in UAE' },
      { label: 'PRO Services', href: '/visa-services/pro-services-uae', description: 'Government liaison services' },
      { label: 'Labour & Immigration', href: '/visa-services/labour-immigration-uae', description: 'Labour cards and MOHRE' },
      { label: 'Document Attestation', href: '/visa-services/document-attestation-uae', description: 'Certificate legalization' },
    ],
  },
  {
    label: 'Technical Services',
    href: '/technical-services',
    children: [
      { label: 'POS System Setup', href: '/technical-services/pos-system-setup', description: 'Point of sale solutions' },
      { label: 'WordPress Development', href: '/technical-services/wordpress-development', description: 'Custom websites and themes' },
      { label: 'Web Applications', href: '/technical-services/custom-web-application', description: 'Bespoke software solutions' },
      { label: 'CRM Customization', href: '/technical-services/suitecrm-customization', description: 'SuiteCRM implementation' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-14 w-auto"
            >
              <Image 
                src="/logo.png" 
                alt="VistaDocs" 
                width={280} 
                height={60}
                className="h-14 w-auto object-contain rounded-lg"
                priority
                style={{ maxWidth: 'none' }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden max-h-[70vh] overflow-y-auto"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 hover:bg-primary-50 transition-colors border-b border-gray-100 last:border-0"
                        >
                          <div className="font-medium text-gray-900">{child.label}</div>
                          {child.description && (
                            <div className="text-sm text-gray-500 mt-1">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 text-gray-700 hover:text-primary-600 active:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {navigation.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block px-4 py-4 text-base text-gray-700 hover:bg-primary-50 font-medium active:bg-primary-100 transition-colors"
                      onClick={() => !item.children && setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-1 bg-gray-50/50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-600 hover:bg-primary-50 active:bg-primary-100 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 pb-2">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center rounded-lg font-medium shadow-lg active:scale-95 transition-transform"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
