'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABlock from '@/components/CTABlock';
import HeroSection from '@/components/HeroSection';
import { visaServicesData } from '@/data/visa-services';
import { Briefcase, Users, Award, RefreshCw, Plane, FileCheck, Building2, Briefcase as BriefcaseIcon, Scale, HeartPulse } from 'lucide-react';

const serviceIcons: Record<string, any> = {
  'employment-visa-uae': Briefcase,
  'family-visa-uae': Users,
  'golden-visa-uae': Award,
  'visa-renewal-uae': RefreshCw,
  'tourist-visa-uae': Plane,
  'document-attestation-uae': FileCheck,
  'company-formation-uae': Building2,
  'pro-services-uae': BriefcaseIcon,
  'labour-immigration-uae': Scale,
  'medical-emirates-id-uae': HeartPulse,
};

export default function VisaServicesPageClient() {
  const services = Object.entries(visaServicesData).map(([slug, data]) => ({
    slug,
    ...data,
  }));

  return (
    <>
      <HeroSection
        subtitle="Visa & Document Solutions"
        title="Complete Visa & Business Services in UAE"
        description="Professional visa processing, document attestation, company formation, and PRO services. Fast, reliable, and hassle-free service across all Emirates."
        ctaText="View All Services"
        ctaHref="#services"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
      />

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Visa & Document Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From visa processing to company formation, we handle all your UAE documentation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                  href={`/visa-services/${service.slug}`}
                  category="visa"
                  icon={serviceIcons[service.slug]}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose VistaDocs for Visa Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Processing</h3>
              <p className="text-gray-600">
                Quick turnaround times without compromising quality or compliance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">High Success Rate</h3>
              <p className="text-gray-600">
                Proven track record of successful visa applications
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated team to guide you through every step
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Need Help with Your Visa Application?"
        description="Contact us today for a free consultation and let our experts guide you through the process."
        buttonText="Get Started"
        buttonHref="/contact"
      />
    </>
  );
}
