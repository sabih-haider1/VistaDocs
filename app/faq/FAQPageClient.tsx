'use client';

import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import CTABlock from '@/components/CTABlock';
import { HelpCircle, FileText, Clock, DollarSign, Users, Code } from 'lucide-react';

export default function FAQPageClient() {
  const visaFAQs = [
    {
      question: 'How long does visa processing take?',
      answer: 'Processing times vary by visa type. Employment visas typically take 7-14 working days, family visas 7-14 days, golden visas 2-3 months, and visa renewals 3-5 working days. These timelines assume all documents are complete and correct.',
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
      answer: 'The Golden Visa is a long-term residence permit (5 or 10 years) for investors, entrepreneurs, specialized talents, researchers, and outstanding students. Qualification criteria include: investors with property worth AED 2M+, entrepreneurs with projects worth AED 500K+, or specialized professionals in science, medicine, engineering, etc.',
    },
    {
      question: 'Do you offer refunds if my visa application is rejected?',
      answer: 'Government fees are non-refundable in case of rejection. Our service fees may be partially refundable depending on the stage of processing when the rejection occurs. We work diligently to ensure all applications are complete and accurate to minimize rejection risks.',
    },
    {
      question: 'Can you help with visa cancellation and change?',
      answer: 'Yes, we assist with visa cancellations, status changes, and transfers. We handle all documentation and coordinate with immigration authorities to ensure smooth transitions.',
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
      answer: 'Simply contact us through our website, email, or phone. We\'ll schedule a free consultation to understand your requirements, provide a detailed quote, and outline the next steps.',
    },
    {
      question: 'What makes VistaDocs different from competitors?',
      answer: 'We specialize in serving SMBs and SMEs with personalized attention, competitive pricing, and modern solutions. Our unique combination of visa services and technical expertise allows us to support your complete business needs under one roof.',
    },
    {
      question: 'Do you have physical offices I can visit?',
      answer: 'Yes, we have offices in Dubai. Please contact us to schedule an appointment so we can ensure the right team member is available to assist you.',
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
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Find answers to common questions about our visa services, technical solutions, and processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">7-14 Days</div>
              <div className="text-sm text-gray-600">Avg. Processing Time</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-secondary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Clients Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">95%+</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Competitive</div>
              <div className="text-sm text-gray-600">Pricing</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      {categories.map((category, index) => (
        <section
          key={category.title}
          className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>
              <FAQSection faqs={category.faqs} />
            </motion.div>
          </div>
        </section>
      ))}

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <HelpCircle className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find the answer you're looking for? Our team is here to help. 
              Contact us and we'll get back to you as soon as possible.
            </p>
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
