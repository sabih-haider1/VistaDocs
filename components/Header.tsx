'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, BriefcaseBusiness, Sparkles } from 'lucide-react';

const servicesNavigation = [
  {
    label: 'Visa Services',
    href: '/visa-services',
    children: [
      { label: 'Employment Visa Dubai', href: '/visa-services/employment-visa-uae', description: 'Work permits and residence visas' },
      { label: 'UAE Golden Visa', href: '/visa-services/golden-visa-uae', description: 'Long-term residence permits' },
      { label: 'Family Visa UAE', href: '/visa-services/family-visa-uae', description: 'Sponsor your family members' },
      { label: 'Tourist Visa UAE', href: '/visa-services/tourist-visa-uae', description: 'Short-term visit permits' },
    ],
  },
  {
    label: 'Business Setup',
    href: '/visa-services/company-formation-uae',
    children: [
      { label: 'Company Formation Dubai', href: '/visa-services/company-formation-uae', description: 'Launch a compliant UAE company' },
      { label: 'Mainland Company Setup', href: '/visa-services/mainland-company-setup', description: 'Operate across the UAE market' },
      { label: 'Free Zone Business Setup', href: '/visa-services/free-zone-business-setup', description: '100% foreign ownership routes' },
      { label: 'Offshore Company Setup', href: '/visa-services/offshore-company-setup', description: 'International holding structures' },
    ],
  },
  {
    label: 'Operations',
    href: '/visa-services/pro-services-uae',
    children: [
      { label: 'PRO Services Dubai', href: '/visa-services/pro-services-uae', description: 'Government liaison and compliance' },
      { label: 'Document Attestation UAE', href: '/visa-services/document-attestation-uae', description: 'Certificate legalization support' },
      { label: 'Emirates ID Services', href: '/visa-services/medical-emirates-id-uae', description: 'Medical and biometric coordination' },
    ],
  },
  {
    label: 'Digital Systems',
    href: '/technical-services',
    children: [
      { label: 'POS Systems UAE', href: '/technical-services/pos-system-setup', description: 'Retail and F&B POS implementation' },
      { label: 'CRM Solutions UAE', href: '/technical-services/suitecrm-customization', description: 'Lead management and automation' },
      { label: 'WordPress Development UAE', href: '/technical-services/wordpress-development', description: 'Corporate sites and lead funnels' },
    ],
  },
];

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', children: servicesNavigation.flatMap((group) => group.children || []) },
  { label: 'Visa Services', href: '/visa-services', children: servicesNavigation[0].children },
  { label: 'Digital Systems', href: '/technical-services', children: servicesNavigation[3].children },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
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
          ? 'backdrop-blur-md shadow-sm border-b'
          : 'backdrop-blur-sm'
      }`}
      style={{ background: 'rgba(255,255,255,0.9)', borderColor: 'var(--border)' }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
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
                width={230} 
                height={98}
                sizes="(max-width: 640px) 131px, 230px"
                className="h-14 w-auto object-contain rounded-lg"
                priority
                style={{ maxWidth: 'none' }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-[var(--text-700)] hover:text-[var(--text-900)] font-medium transition-colors flex items-center gap-1 text-sm"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full left-0 mt-2 w-80 overflow-hidden max-h-[70vh] overflow-y-auto"
                    >
                      <div className="card">
                        <div className="space-y-2">
                          {item.children.map((child, idx) => (
                            <Link
                              key={`${child.href}-${idx}`}
                              href={child.href}
                              className="block px-3 py-3 hover:bg-[var(--muted-surface)] transition-colors rounded-md"
                            >
                              <div className="font-medium text-[var(--text-900)] text-sm">{child.label}</div>
                              {child.description && <div className="text-sm text-[var(--muted-text)] mt-1">{child.description}</div>}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="btn btn-primary text-sm px-4 py-2 inline-flex items-center gap-2"
                aria-label="Book consultation"
              >
                <BriefcaseBusiness className="w-4 h-4" />
                Book Consultation
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 text-slate-700 hover:text-slate-950 active:bg-slate-100 rounded-lg transition-colors"
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
              className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
            >
              <div className="py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {navigation.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                        className="block px-4 py-4 text-base text-[var(--text-700)] hover:bg-[var(--muted-surface)] font-medium active:bg-[var(--muted-surface)] transition-colors"
                      onClick={() => !item.children && setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-1 bg-slate-50/60">
                        {item.children.map((child) => (
                          <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-[var(--text-700)] hover:bg-[var(--muted-surface)] active:bg-[var(--muted-surface)] transition-colors rounded-md"
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
                    className="block w-full px-6 py-4 bg-slate-950 text-white text-center rounded-full font-medium shadow-lg active:scale-95 transition-transform inline-flex items-center justify-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Sparkles className="w-4 h-4" />
                    Book Consultation
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
