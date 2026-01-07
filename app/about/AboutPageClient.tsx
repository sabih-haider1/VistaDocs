'use client';

import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABlock from '@/components/CTABlock';
import { Target, Eye, Award, Users } from 'lucide-react';

export default function AboutPageClient() {
  const values = [
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Your success is our priority. We tailor our services to meet your specific needs and goals.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every service we deliver, ensuring quality and reliability.',
    },
    {
      icon: Users,
      title: 'Transparency',
      description: 'Clear communication and honest guidance throughout your journey with us.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We stay ahead with modern solutions and best practices in our field.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About VistaDocs Center
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Your trusted partner for visa services and technical solutions in the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To simplify visa processing and provide cutting-edge technical solutions that empower 
                small and medium businesses in the UAE to thrive. We combine expertise, efficiency, 
                and personalized service to deliver results that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the most trusted and innovative service provider in the UAE, known for 
                excellence in visa processing and technical implementations that help businesses 
                grow and succeed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Serve</h2>
              <p className="text-lg text-gray-600 mb-4">
                VistaDocs Center specializes in serving small and medium-sized businesses (SMBs and SMEs) 
                across the UAE. We understand the unique challenges faced by growing businesses and provide 
                services tailored to your scale and requirements.
              </p>
              <p className="text-lg text-gray-600">
                Whether you need visa processing for your team, technical solutions to streamline operations, 
                or both, we're here to support your business journey with professional, reliable service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary-50 rounded-xl p-6 border border-primary-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visa Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Employment visa processing</li>
                  <li>• Family visa sponsorship</li>
                  <li>• Golden visa applications</li>
                  <li>• Visa renewal services</li>
                  <li>• Document attestation</li>
                  <li>• Emirates ID processing</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary-50 rounded-xl p-6 border border-secondary-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• POS system setup & integration</li>
                  <li>• WordPress website development</li>
                  <li>• Custom web applications</li>
                  <li>• CRM customization (SuiteCRM)</li>
                  <li>• E-commerce solutions</li>
                  <li>• Technical consulting</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title="Ready to Work Together?"
        description="Let's discuss how we can help your business succeed. Contact us for a free consultation."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
