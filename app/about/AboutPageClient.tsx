'use client';

import { motion } from 'framer-motion';
import CTABlock from '@/components/CTABlock';
import HeroSection from '@/components/HeroSection';
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
      <HeroSection
        title="About VistaDocs Center"
        description="Your trusted partner for visa services and technical solutions in the UAE."
        ctaText="Book Consultation"
        ctaHref="/contact"
      />

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-xl">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--muted-surface)] flex items-center justify-center shadow-sm">
                    <Target className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-[var(--text-900)] mt-1">Our Mission</h2>
                </div>
                <p className="text-[var(--text-700)] leading-relaxed">
                  To simplify visa processing and provide cutting-edge technical solutions that empower 
                  small and medium businesses in the UAE to thrive. We combine expertise, efficiency, 
                  and personalized service to deliver results that matter.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--muted-surface)] flex items-center justify-center shadow-sm">
                    <Eye className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-[var(--text-900)] mt-1">Our Vision</h2>
                </div>
                <p className="text-[var(--text-700)] leading-relaxed">
                  To be the most trusted and innovative service provider in the UAE, known for 
                  excellence in visa processing and technical implementations that help businesses 
                  grow and succeed.
                </p>
              </div>
            </motion.div>

            {/* Who We Serve */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--muted-surface)] flex items-center justify-center shadow-sm">
                    <Users className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-[var(--text-900)] mt-1">Who We Serve</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-[var(--text-700)] leading-relaxed">
                    VistaDocs Center specializes in serving small and medium-sized businesses (SMBs and SMEs) 
                    across the UAE. We understand the unique challenges faced by growing businesses and provide 
                    services tailored to your scale and requirements.
                  </p>
                  <p className="text-[var(--text-700)] leading-relaxed">
                    Whether you need visa processing for your team, technical solutions to streamline operations, 
                    or both, we&apos;re here to support your business journey with professional, reliable service.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[var(--text-900)]">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="card"
              >
                <div className="w-10 h-10 bg-[var(--muted-surface)] rounded-lg flex items-center justify-center mb-3">
                  <value.icon className="w-5 h-5 text-[var(--brand-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-2">{value.title}</h3>
                <p className="text-[var(--text-700)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="container-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[var(--text-900)]">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card">
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-3">Visa Services</h3>
                <ul className="space-y-2 text-[var(--text-700)] list-disc pl-4">
                  <li>Employment visa processing</li>
                  <li>Family visa sponsorship</li>
                  <li>Golden visa applications</li>
                  <li>Visa renewal services</li>
                  <li>Document attestation</li>
                  <li>Emirates ID processing</li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card">
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-3">Technical Services</h3>
                <ul className="space-y-2 text-[var(--text-700)] list-disc pl-4">
                  <li>POS system setup & integration</li>
                  <li>WordPress website development</li>
                  <li>Custom web applications</li>
                  <li>CRM customization (SuiteCRM)</li>
                  <li>E-commerce solutions</li>
                  <li>Technical consulting</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        title="Ready to Work Together?"
        description="Let&apos;s discuss how we can help your business succeed. Contact us for a free consultation."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
