'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import CTABlock from '@/components/CTABlock';
import HeroSection from '@/components/HeroSection';
import { technicalServicesData } from '@/data/technical-services';
import { ShoppingCart, Globe, Monitor, Settings } from 'lucide-react';

const serviceIcons: Record<string, any> = {
  'pos-system-setup': ShoppingCart,
  'wordpress-development': Globe,
  'custom-web-application': Monitor,
  'suitecrm-customization': Settings,
};

export default function TechnicalServicesPageClient() {
  const services = Object.entries(technicalServicesData).map(([slug, data]) => ({
    slug,
    ...data,
  }));

  return (
    <>
      <HeroSection
        subtitle="Technical Solutions"
        title="Modern Technical Services for Your Business"
        description="Custom software development, POS systems, and digital solutions designed for SMBs and SMEs in the UAE."
        ctaText="View Services"
        ctaHref="#services"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
        backgroundGradient="from-secondary-500 to-primary-500"
      />

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for small and medium-sized businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <ServiceCard
                  title={service.seo.h1}
                  description={service.seo.metaDescription}
                  href={`/technical-services/${service.slug}`}
                  category="technical"
                  icon={serviceIcons[service.slug]}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Modern Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {['React', 'Next.js', 'WordPress', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-lg font-semibold text-gray-900">{tech}</div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Our Technical Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMB Focused</h3>
              <p className="text-gray-600">
                Solutions designed specifically for small and medium businesses
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Tech</h3>
              <p className="text-gray-600">
                Latest frameworks and best practices for optimal performance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Full Support</h3>
              <p className="text-gray-600">
                Ongoing maintenance and technical support after delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Ready to Transform Your Business?"
        description="Let's discuss your technical requirements and build a solution that works for you."
        buttonText="Start Your Project"
        buttonHref="/contact"
        variant="secondary"
      />
    </>
  );
}
