'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTABlockProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'primary' | 'secondary';
}

export default function CTABlock({
  title,
  description,
  buttonText = 'Get Started',
  buttonHref = '/contact',
  variant = 'primary',
}: CTABlockProps) {
  const gradientClass = variant === 'primary'
    ? 'from-primary-500 to-secondary-500'
    : 'from-secondary-500 to-primary-500';

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-gradient-to-br ${gradientClass} rounded-2xl shadow-2xl overflow-hidden`}>
          <div className="px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
              >
                {buttonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
