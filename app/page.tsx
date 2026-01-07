'use client';

import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import CTABlock from '@/components/CTABlock';
import { FileText, Code, Users, Award, Clock, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroSection
        title={
          <>
            Your Trusted Partner for{' '}
            <span className="block mt-2">Visa & Technical Services</span>
          </>
        }
        description="Streamline your visa processing and empower your business with cutting-edge technical solutions in the UAE."
        ctaText="Explore Services"
        ctaHref="#services"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose VistaDocs?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver professional, reliable, and efficient services tailored to SMBs and SMEs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trusted & Reliable',
                description: 'Years of experience serving businesses across the UAE with proven results.',
              },
              {
                icon: Clock,
                title: 'Fast Processing',
                description: 'Quick turnaround times without compromising on quality or compliance.',
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: 'Personalized assistance from consultation to completion.',
              },
              {
                icon: Award,
                title: 'Professional Excellence',
                description: 'High standards in every service we deliver, ensuring client satisfaction.',
              },
              {
                icon: FileText,
                title: 'Clear Documentation',
                description: 'Transparent processes with detailed guidance at every step.',
              },
              {
                icon: Code,
                title: 'Modern Solutions',
                description: 'Cutting-edge technology and best practices for technical services.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Visa Services */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Visa & Document Services
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Complete visa processing, document attestation, and business setup solutions in UAE.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                title="Employment Visa"
                description="Work permits and residence visas for UAE employment. Complete processing with labour card registration."
                href="/visa-services/employment-visa-uae"
                category="visa"
              />
              <ServiceCard
                title="Family Visa"
                description="Sponsor your family members to UAE. Complete residence visa processing for spouse and children."
                href="/visa-services/family-visa-uae"
                category="visa"
              />
              <ServiceCard
                title="Golden Visa"
                description="Long-term residence permits (5-10 years) for investors, entrepreneurs, and skilled professionals."
                href="/visa-services/golden-visa-uae"
                category="visa"
              />
              <ServiceCard
                title="Tourist Visa"
                description="30-day and 90-day tourist visas for UAE. Fast processing with express options available."
                href="/visa-services/tourist-visa-uae"
                category="visa"
              />
              <ServiceCard
                title="Document Attestation"
                description="Certificate legalization and attestation services. Educational, commercial, and personal documents."
                href="/visa-services/document-attestation-uae"
                category="visa"
              />
              <ServiceCard
                title="Company Formation"
                description="Business setup in UAE. Mainland, free zone, and offshore company registration with trade licenses."
                href="/visa-services/company-formation-uae"
                category="visa"
              />
              <ServiceCard
                title="PRO Services"
                description="Government liaison and document processing. License renewals, visa processing, and compliance."
                href="/visa-services/pro-services-uae"
                category="visa"
              />
              <ServiceCard
                title="Labour & Immigration"
                description="Labour cards, work permits, MOHRE services, and WPS compliance for UAE businesses."
                href="/visa-services/labour-immigration-uae"
                category="visa"
              />
            </div>
          </div>

          {/* Technical Services */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Technical Services
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Custom software solutions and technical implementations for SMBs and SMEs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                title="POS System Setup"
                description="Point of sale installation for retail and F&B. Hardware setup, payment integration, and training."
                href="/technical-services/pos-system-setup"
                category="technical"
              />
              <ServiceCard
                title="WordPress Development"
                description="Custom websites and theme development. WooCommerce setup for online stores."
                href="/technical-services/wordpress-development"
                category="technical"
              />
              <ServiceCard
                title="Web Applications"
                description="Bespoke web-based software for your business. CRM, booking systems, and internal tools."
                href="/technical-services/custom-web-application"
                category="technical"
              />
              <ServiceCard
                title="CRM Customization"
                description="SuiteCRM implementation and customization. Workflow automation and integrations."
                href="/technical-services/suitecrm-customization"
                category="technical"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        title="Ready to Get Started?"
        description="Contact us today for a free consultation and discover how we can help your business succeed."
        buttonText="Contact Us Now"
        buttonHref="/contact"
      />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '500+', label: 'Visas Processed' },
              { number: '200+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

