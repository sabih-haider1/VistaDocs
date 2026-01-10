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
    { label: category === 'visa' ? 'Visa Services' : 'Technical Services', href: `/${category}-services` },
    { label: service.seo.h1 },
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
                    : 'bg-gradient-to-br from-primary-50/30 to-white border-primary-100'
                }`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      section.id.includes('requirement') ? 'bg-blue-100' :
                      section.id.includes('timeline') || section.id.includes('processing') ? 'bg-green-100' :
                      section.id.includes('deliverable') || section.id.includes('what-you-get') ? 'bg-purple-100' :
                      'bg-primary-100'
                    }`}>
                      {section.id.includes('requirement') && <FileText className="w-6 h-6 text-blue-600" />}
                      {(section.id.includes('timeline') || section.id.includes('processing')) && <Clock className="w-6 h-6 text-green-600" />}
                      {(section.id.includes('deliverable') || section.id.includes('what-you-get')) && <CheckCircle className="w-6 h-6 text-purple-600" />}
                      {!section.id.includes('requirement') && !section.id.includes('timeline') && !section.id.includes('processing') && !section.id.includes('deliverable') && !section.id.includes('what-you-get') && (
                        <AlertCircle className="w-6 h-6 text-primary-600" />
                      )}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-1">
                      {section.heading}
                    </h2>
                  </div>
                  <div
                    className="prose prose-lg max-w-none 
                      prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-4
                      prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary-700
                      prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-gray-800
                      prose-p:!text-gray-900 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-lg
                      prose-ul:my-4 prose-ul:space-y-2
                      prose-li:!text-gray-900 prose-li:text-lg prose-li:leading-relaxed
                      prose-li:pl-2 prose-li:relative prose-li:before:absolute prose-li:before:left-0
                      prose-li:before:text-primary-500 prose-li:before:font-bold
                      prose-strong:text-gray-900 prose-strong:font-semibold
                      prose-a:text-primary-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-primary-700 hover:prose-a:underline
                      [&_ul]:list-none [&_ul]:pl-6
                      [&_ul_li]:before:content-['✓'] [&_ul_li]:before:-left-6
                      [&_ol]:pl-6 [&_ol]:space-y-2
                      [&_ol_li]:!text-gray-900 [&_ol_li]:text-lg [&_ol_li]:leading-relaxed"
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
