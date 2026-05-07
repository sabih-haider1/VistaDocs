'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import HeroSection from '@/components/HeroSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPageClient() {
  return (
    <>
      <HeroSection
        title="Get in Touch"
        description="Have questions? We're here to help. Contact us for a free consultation."
        ctaText="Book Consultation"
        ctaHref="/contact"
      />

      {/* Contact Information & Form */}
      <section className="section">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-[var(--text-900)] mb-4">Contact Information</h2>

              <div className="space-y-4">
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--muted-surface)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-900)] mb-1">Address</h3>
                      <p className="text-[var(--text-700)]">Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--muted-surface)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-900)] mb-1">Phone</h3>
                      <a href="tel:+971507354640" className="text-[var(--brand-strong)] hover:underline">+971 50 735 4640</a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--muted-surface)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-900)] mb-1">Email</h3>
                      <a href="mailto:vistadocscenter@gmail.com" className="text-[var(--brand-strong)] hover:underline">vistadocscenter@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--muted-surface)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-900)] mb-1">Business Hours</h3>
                      <p className="text-[var(--text-700)]">Sunday - Thursday: 9:00 AM - 6:00 PM<br/>Friday - Saturday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 card">
                  <h3 className="font-semibold text-[var(--text-900)] mb-2">Quick Response Time</h3>
                  <p className="text-[var(--text-700)]">We typically respond to all inquiries within 24 hours during business days.</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
