import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const serviceGroups = [
  {
    title: 'Visa Services',
    links: [
      { label: 'Employment Visa Dubai', href: '/visa-services/employment-visa-uae' },
      { label: 'UAE Golden Visa', href: '/visa-services/golden-visa-uae' },
      { label: 'Family Visa UAE', href: '/visa-services/family-visa-uae' },
      { label: 'Tourist Visa UAE', href: '/visa-services/tourist-visa-uae' },
    ],
  },
  {
    title: 'Business Operations',
    links: [
      { label: 'Company Formation Dubai', href: '/visa-services/company-formation-uae' },
      { label: 'PRO Services Dubai', href: '/visa-services/pro-services-uae' },
      { label: 'Document Attestation UAE', href: '/visa-services/document-attestation-uae' },
      { label: 'Emirates ID Services', href: '/visa-services/medical-emirates-id-uae' },
    ],
  },
  {
    title: 'Digital Systems',
    links: [
      { label: 'POS Systems UAE', href: '/technical-services/pos-system-setup' },
      { label: 'CRM Solutions UAE', href: '/technical-services/suitecrm-customization' },
      { label: 'WordPress Development UAE', href: '/technical-services/wordpress-development' },
      { label: 'Custom Web Applications', href: '/technical-services/custom-web-application' },
    ],
  },
];

const locationLinks = [
  { label: 'Dubai', href: '/locations/dubai' },
  { label: 'Abu Dhabi', href: '/locations/abu-dhabi' },
  { label: 'Sharjah', href: '/locations/sharjah' },
  { label: 'Ajman', href: '/locations/ajman' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8" style={{ background: 'transparent' }}>
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          <div>
            <h3 className="text-[var(--text-900)] text-lg font-bold mb-2 font-display">VistaDocs Center</h3>
            <p className="text-sm mb-4 text-[var(--muted-text)] leading-6">
              Your UAE business launch and growth partner for visas, company setup, PRO operations, attestation, and digital systems.
            </p>
            <div className="flex space-x-3">
              <a href="https://web.facebook.com/profile.php?id=61586774744438" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-text)] hover:text-[var(--text-900)] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/vistadocs-center-b4988b3a0/" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-text)] hover:text-[var(--text-900)] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/vistadocs" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-text)] hover:text-[var(--text-900)] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {serviceGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-[var(--text-900)] font-semibold mb-2 text-sm">{group.title}</h4>
              <ul className="space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[var(--muted-text)] hover:text-[var(--text-900)] transition-colors inline-flex items-center gap-2">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[var(--text-900)] font-semibold mb-2 text-sm">Locations</h4>
            <ul className="space-y-2 text-sm mb-4">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--muted-text)] hover:text-[var(--text-900)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-[var(--text-900)] font-semibold mb-2 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-[var(--muted-text)] hover:text-[var(--text-900)] transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-[var(--muted-text)] hover:text-[var(--text-900)] transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-[var(--muted-text)] hover:text-[var(--text-900)] transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="text-[var(--muted-text)] hover:text-[var(--text-900)] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-[var(--muted-text)] hover:text-[var(--text-900)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--text-900)] font-semibold mb-2 text-sm">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-[var(--muted-text)]">
                <MapPin className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--muted-text)]">
                <Phone className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0" />
                <a href="tel:+971507354640" className="hover:text-[var(--text-900)] transition-colors">
                  +971 50 735 4640
                </a>
              </li>
              <li className="flex items-center gap-2 text-[var(--muted-text)]">
                <Mail className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0" />
                <a href="mailto:vistadocscenter@gmail.com" className="hover:text-[var(--text-900)] transition-colors">
                  vistadocscenter@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-sm text-[var(--muted-text)] flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p>&copy; {currentYear} VistaDocs Center. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="hover:text-[var(--text-900)] transition-colors">About</Link>
            <Link href="/services" className="hover:text-[var(--text-900)] transition-colors">Services</Link>
            <Link href="/blog" className="hover:text-[var(--text-900)] transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-[var(--text-900)] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
