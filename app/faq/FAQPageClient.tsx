'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import FAQSection from '@/components/FAQSection';
import CTABlock from '@/components/CTABlock';
import { HelpCircle, FileText, Clock, DollarSign, Users, Code } from 'lucide-react';

export default function FAQPageClient() {
  const visaFAQs = [
    {
      question: 'How long does visa processing take?',
      answer: 'Processing times vary by visa type. Employment visas typically take 7-14 working days, family visas 7-14 days, golden visas 14-30 days, tourist visas 3-5 days, and visa renewals 5-10 working days. These timelines assume all documents are complete and correct.',
    },
    {
      question: 'What documents do I need for an employment visa?',
      answer: 'For an employment visa, you need: passport copies (6 months validity), passport-size photos, educational certificates (attested), employment contract, company trade license copy, and medical fitness test results. Additional documents may be required based on your specific case.',
    },
    {
      question: 'Can I sponsor my family on my employment visa?',
      answer: 'Yes, you can sponsor your spouse and children if you meet the minimum salary requirements: AED 4,000/month for spouse only, or AED 10,000/month for spouse and children. You also need a tenancy contract or accommodation letter.',
    },
    {
      question: 'What is a Golden Visa and who qualifies?',
      answer: 'The Golden Visa is a long-term residence permit (5 or 10 years) for investors, entrepreneurs, specialized talents, researchers, and outstanding students. Qualification criteria include: investors with property worth AED 2M+, business investment of AED 2M+, or specialized professionals in science, medicine, engineering, etc.',
    },
    {
      question: 'Do you handle document attestation for employment visas?',
      answer: 'Yes, we provide complete document attestation services including educational certificates, marriage certificates, birth certificates, and commercial documents. We handle the entire process from notary attestation to MOFA attestation in UAE, typically completed in 15-25 working days.',
    },
    {
      question: 'Can you help with tourist visa extensions?',
      answer: 'Yes, we process tourist visa extensions from inside UAE. 30-day visas can be extended once for 30 days, and 90-day visas can be extended twice (30 days each). Extensions must be applied before visa expiry and typically take 2-3 days.',
    },
    {
      question: 'What is the medical fitness test and when is it required?',
      answer: 'Medical fitness test is a mandatory health screening for all residence visa applicants, including tests for tuberculosis, HIV, Hepatitis B & C. It\'s required for employment visas, family visas, visa renewals, and golden visas. Results are available in 24-48 hours.',
    },
    {
      question: 'How long does Emirates ID processing take?',
      answer: 'Emirates ID processing typically takes 7-10 working days from biometric enrollment. You must apply within 60 days of entry to avoid fines. The card is valid for the same duration as your residence visa.',
    },
  ];

  const technicalFAQs = [
    {
      question: 'What technologies do you work with?',
      answer: 'We specialize in modern web technologies including React, Next.js, WordPress, Node.js, Python, and PostgreSQL. We also work with various POS systems and CRM platforms like SuiteCRM.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer maintenance and support packages for all our technical projects. This includes bug fixes, updates, security patches, and feature enhancements as needed.',
    },
    {
      question: 'How long does a typical web development project take?',
      answer: 'Project timelines vary based on complexity. A basic WordPress website takes 2-4 weeks, a custom web application 6-12 weeks, and POS system setup 2-3 weeks. We provide detailed timelines during project planning.',
    },
    {
      question: 'Can you integrate third-party services into my application?',
      answer: 'Absolutely! We have experience integrating payment gateways, shipping providers, accounting software, CRM systems, and various APIs. We ensure seamless integration with your existing tools.',
    },
    {
      question: 'Do you offer training for the systems you build?',
      answer: 'Yes, we provide comprehensive training for all our technical solutions. This includes user manuals, video tutorials, and hands-on training sessions to ensure your team can effectively use the systems.',
    },
  ];

  const generalFAQs = [
    {
      question: 'What are your payment terms?',
      answer: 'For visa services, we typically require 50% upfront and 50% upon completion. For technical projects, payment is structured in milestones: 30% to start, 40% mid-project, and 30% upon delivery. We accept bank transfers and credit cards.',
    },
    {
      question: 'Do you serve clients outside Dubai?',
      answer: 'Yes, we serve clients across all Emirates in the UAE. Our visa services cover the entire UAE, and our technical solutions are available nationwide. Remote consultations are available for clients who prefer virtual meetings.',
    },
    {
      question: 'How do I get started with your services?',
      answer: 'Simply contact us through our website, email (vistadocscenter@gmail.com), or phone (+971 50 735 4640). We\'ll schedule a free consultation to understand your requirements, provide a detailed quote, and outline the next steps.',
    },
    {
      question: 'What makes VistaDocs different from competitors?',
      answer: 'We offer a unique combination of visa services and technical solutions under one roof. Our personalized attention, competitive pricing, and comprehensive service coverage (visa processing, PRO services, company formation, document attestation, and web development) make us a complete business partner for SMBs and SMEs.',
    },
    {
      question: 'Do you provide PRO services for businesses?',
      answer: 'Yes, we offer comprehensive PRO services including trade license renewals, visa processing, labour card management, municipality approvals, and government liaison services. We offer both pay-as-you-go and monthly retainer packages.',
    },
    {
      question: 'Can you help with company formation in UAE?',
      answer: 'Absolutely! We handle mainland company formation, free zone setup (DMCC, JAFZA, etc.), offshore company formation, and branch office establishment. Our services include trade license processing, MOA drafting, visa quota allocation, and bank account opening support.',
    },
    {
      question: 'Do you handle labour and MOHRE services?',
      answer: 'Yes, we provide complete labour and immigration services including labour card processing, work permits, employment contract registration, WPS setup and compliance, quota management, and absconding case resolution.',
    },
    {
      question: 'What is your success rate for visa applications?',
      answer: 'We maintain a 95%+ success rate for visa applications. Our experienced team ensures all applications are thoroughly reviewed and complete before submission, minimizing rejection risks. We also provide guidance on eligibility before you commit.',
    },
  ];

  const categories = [
    {
      title: 'Visa Services',
      icon: FileText,
      faqs: visaFAQs,
      color: 'primary',
    },
    {
      title: 'Technical Services',
      icon: Code,
      faqs: technicalFAQs,
      color: 'secondary',
    },
    {
      title: 'General Questions',
      icon: HelpCircle,
      faqs: generalFAQs,
      color: 'purple',
    },
  ];

  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about our visa services, technical solutions, and processes."
        ctaText="Contact Us"
        ctaHref="/contact"
      />

      {/* Quick Stats */}
      <section className="py-8">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center card">
              <div className="w-10 h-10 bg-[var(--muted-surface)] rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-5 h-5 text-[var(--brand-accent)]" />
              </div>
              <div className="text-lg font-semibold text-[var(--text-900)]">7-14 Days</div>
              <div className="text-sm text-[var(--text-700)]">Avg. Processing Time</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center card">
              <div className="w-10 h-10 bg-[var(--muted-surface)] rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-5 h-5 text-[var(--brand-accent)]" />
              </div>
              <div className="text-lg font-semibold text-[var(--text-900)]">500+</div>
              <div className="text-sm text-[var(--text-700)]">Clients Served</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center card">
              <div className="w-10 h-10 bg-[var(--muted-surface)] rounded-full flex items-center justify-center mx-auto mb-2">
                <FileText className="w-5 h-5 text-[var(--brand-accent)]" />
              </div>
              <div className="text-lg font-semibold text-[var(--text-900)]">95%+</div>
              <div className="text-sm text-[var(--text-700)]">Success Rate</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center card">
              <div className="w-10 h-10 bg-[var(--muted-surface)] rounded-full flex items-center justify-center mx-auto mb-2">
                <DollarSign className="w-5 h-5 text-[var(--brand-accent)]" />
              </div>
              <div className="text-lg font-semibold text-[var(--text-900)]">Competitive</div>
              <div className="text-sm text-[var(--text-700)]">Pricing</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      {categories.map((category, index) => (
        <section key={category.title} className={`py-12 ${index % 2 === 0 ? '' : ''}`}>
          <div className="container-xl">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-[var(--muted-surface)] flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-[var(--brand-accent)]" />
                </div>
                <h2 className="text-2xl font-semibold text-[var(--text-900)]">{category.title}</h2>
              </div>
              <FAQSection faqs={category.faqs} />
            </motion.div>
          </div>
        </section>
      ))}

      {/* Still Have Questions */}
      <section className="section">
        <div className="container-xl text-center">
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <HelpCircle className="w-12 h-12 text-[var(--brand-accent)] mx-auto mb-3" />
            <h2 className="text-2xl font-semibold text-[var(--text-900)] mb-3">Still Have Questions?</h2>
            <p className="text-[var(--text-700)] mb-6">Can&apos;t find the answer you&apos;re looking for? Our team is here to help. Contact us and we&apos;ll get back to you as soon as possible.</p>
          </motion.div>
        </div>
      </section>

      <CTABlock
        title="Ready to Get Started?"
        description="Contact us today for a free consultation and let our experts guide you through the process."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
