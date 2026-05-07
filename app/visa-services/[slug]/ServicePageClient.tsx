"use client";

import { motion } from 'framer-motion';
import CTABlock from '@/components/CTABlock';
import FAQSection from '@/components/FAQSection';
import HeroSection from '@/components/HeroSection';
import type { Service } from '@/types/services';
import { CheckCircle, Clock, FileText, AlertCircle } from 'lucide-react';

interface ServicePageClientProps {
  service: Service;
  category: 'visa' | 'technical';
}

export default function ServicePageClient({ service, category }: ServicePageClientProps) {
  // Parse HTML content safely
  const parseHTML = (html: string) => {
    return { __html: html };
  };

  // Sample FAQs - in production, these should come from the service data
  const sampleFAQs = [
    {
      question: 'How long does the process take?',
      answer: 'Processing times vary by service type. Check the timeline section above for specific details.',
    },
    {
      question: 'What documents do I need?',
      answer: 'Required documents are listed in the requirements section. Additional documents may be needed based on your specific case.',
    },
    {
      question: 'Do you offer refunds if the application is rejected?',
      answer: 'Government fees are non-refundable. Our service fees may be partially refundable depending on the stage of processing.',
    },
  ];

  return (
    <>
      <HeroSection
        title={service.seo.h1}
        description={service.seo.metaDescription}
        ctaText="Book Consultation"
        ctaHref="/contact"
        subtitle={undefined}
      />

      <section className="section">
        <div className="container-xl">
          <div className="max-w-4xl mx-auto">
            {service.content.sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="mb-10 last:mb-0"
              >
                <div className="card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--muted-surface)]">
                      {section.id.includes('requirement') && <FileText className="w-6 h-6 text-[var(--brand-accent)]" />}
                      {(section.id.includes('timeline') || section.id.includes('processing')) && <Clock className="w-6 h-6 text-[var(--brand-accent)]" />}
                      {(section.id.includes('deliverable') || section.id.includes('what-you-get')) && <CheckCircle className="w-6 h-6 text-[var(--brand-accent)]" />}
                      {!section.id.includes('requirement') && !section.id.includes('timeline') && !section.id.includes('processing') && !section.id.includes('deliverable') && !section.id.includes('what-you-get') && (
                        <AlertCircle className="w-6 h-6 text-[var(--brand-accent)]" />
                      )}
                    </div>
                    <h2 className="text-2xl font-semibold text-[var(--text-900)] mt-1">
                      {section.heading}
                    </h2>
                  </div>
                  <div className="prose max-w-none text-[var(--text-700)]" dangerouslySetInnerHTML={parseHTML(section.content)} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {service.linking?.relatedServices && service.linking.relatedServices.length > 0 && (
        <section className="section bg-[var(--muted-surface)]">
          <div className="container-xl">
            <h2 className="text-2xl font-semibold text-center mb-8 text-[var(--text-900)]">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {service.linking.relatedServices.slice(0, 3).map((relatedSlug) => (
                <motion.a
                  key={relatedSlug}
                  href={`/${category}-services/${relatedSlug}`}
                  whileHover={{ y: -4 }}
                  className="block card hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-semibold text-[var(--text-900)] mb-2">
                    {relatedSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </h3>
                  <p className="text-sm text-[var(--muted-text)]">
                    Learn more about this service →
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={sampleFAQs} />

      <CTABlock
        title="Ready to Get Started?"
        description="Contact us today for a free consultation and let us help you with your requirements."
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
