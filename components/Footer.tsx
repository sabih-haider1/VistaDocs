import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 gradient-text">VistaDocs</h3>
            <p className="text-sm mb-4">
              Your trusted partner for visa services and technical solutions in the UAE.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/profile.php?id=61586774744438" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/vistadocs-center-b4988b3a0/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/vistadocs" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visa Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Visa Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/visa-services/employment-visa-uae" className="hover:text-primary-400 transition-colors">
                  Employment Visa
                </Link>
              </li>
              <li>
                <Link href="/visa-services/family-visa-uae" className="hover:text-primary-400 transition-colors">
                  Family Visa
                </Link>
              </li>
              <li>
                <Link href="/visa-services/golden-visa-uae" className="hover:text-primary-400 transition-colors">
                  Golden Visa
                </Link>
              </li>
              <li>
                <Link href="/visa-services/tourist-visa-uae" className="hover:text-primary-400 transition-colors">
                  Tourist Visa
                </Link>
              </li>
              <li>
                <Link href="/visa-services/visa-renewal-uae" className="hover:text-primary-400 transition-colors">
                  Visa Renewal
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Business Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/visa-services/company-formation-uae" className="hover:text-primary-400 transition-colors">
                  Company Formation
                </Link>
              </li>
              <li>
                <Link href="/visa-services/pro-services-uae" className="hover:text-primary-400 transition-colors">
                  PRO Services
                </Link>
              </li>
              <li>
                <Link href="/visa-services/labour-immigration-uae" className="hover:text-primary-400 transition-colors">
                  Labour & Immigration
                </Link>
              </li>
              <li>
                <Link href="/visa-services/document-attestation-uae" className="hover:text-primary-400 transition-colors">
                  Document Attestation
                </Link>
              </li>
              <li>
                <Link href="/visa-services/medical-emirates-id-uae" className="hover:text-primary-400 transition-colors">
                  Medical & Emirates ID
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Technical Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/technical-services/pos-system-setup" className="hover:text-primary-400 transition-colors">
                  POS System Setup
                </Link>
              </li>
              <li>
                <Link href="/technical-services/wordpress-development" className="hover:text-primary-400 transition-colors">
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link href="/technical-services/custom-web-application" className="hover:text-primary-400 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/technical-services/suitecrm-customization" className="hover:text-primary-400 transition-colors">
                  CRM Customization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+971507354640" className="hover:text-primary-400 transition-colors">
                  +971 50 735 4640
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:vistadocscenter@gmail.com" className="hover:text-primary-400 transition-colors">
                  vistadocscenter@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center md:flex md:justify-between md:items-center">
          <p>&copy; {currentYear} VistaDocs Center. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-primary-400 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-primary-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
