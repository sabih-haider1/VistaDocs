'use client';

import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABlock from '@/components/CTABlock';
import FAQSection from '@/components/FAQSection';
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

  const breadcrumbItems = [
    { name: category === 'visa' ? 'Visa Services' : 'Technical Services', url: `/${category}-services` },
    { name: service.seo.h1, url: `/${category}-services/${service.slug}` },
  ];

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
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.seo.h1}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {service.seo.metaDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {service.content.sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <div className={`rounded-2xl p-6 sm:p-8 border-2 shadow-lg ${
                  index % 2 === 0 
                    ? 'bg-gradient-to-br from-white to-gray-50 border-gray-200' 
                    : 'bg-gradient-to-br from-secondary-50/30 to-white border-secondary-100'
                }`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      section.id.includes('requirement') ? 'bg-blue-100' :
                      section.id.includes('timeline') || section.id.includes('processing') ? 'bg-green-100' :
                      section.id.includes('deliverable') || section.id.includes('what-you-get') ? 'bg-purple-100' :
                      'bg-secondary-100'
                    }`}>
                      {section.id.includes('requirement') && <FileText className="w-6 h-6 text-blue-600" />}
                      {(section.id.includes('timeline') || section.id.includes('processing')) && <Clock className="w-6 h-6 text-green-600" />}
                      {(section.id.includes('deliverable') || section.id.includes('what-you-get')) && <CheckCircle className="w-6 h-6 text-purple-600" />}
                      {!section.id.includes('requirement') && !section.id.includes('timeline') && !section.id.includes('processing') && !section.id.includes('deliverable') && !section.id.includes('what-you-get') && (
                        <AlertCircle className="w-6 h-6 text-secondary-600" />
                      )}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-1">
                      {section.heading}
                    </h2>
                  </div>
                  <div
                    className="prose prose-lg max-w-none prose-h3:text-secondary-700 prose-li:before:text-secondary-500 prose-a:text-secondary-600 hover:prose-a:text-secondary-700 [&_ul]:list-none [&_ul]:pl-6 [&_ul_li]:before:content-['✓'] [&_ul_li]:before:mr-2 [&_ul_li]:before:font-bold"
                    dangerouslySetInnerHTML={parseHTML(section.content)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {service.linking?.relatedServices && service.linking.relatedServices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {service.linking.relatedServices.slice(0, 3).map((relatedSlug) => (
                <motion.a
                  key={relatedSlug}
                  href={`/${category}-services/${relatedSlug}`}
                  whileHover={{ y: -4 }}
                  className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {relatedSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn more about this service →
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <FAQSection faqs={sampleFAQs} />

      {/* CTA */}
      <CTABlock
        title="Ready to Get Started?"
        description="Contact us today for a free consultation and let us help you with your requirements."
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
