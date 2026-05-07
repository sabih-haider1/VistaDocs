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
  const gradient =
    variant === 'primary'
      ? 'linear-gradient(90deg, rgba(15,118,110,0.95), rgba(3,105,161,0.95))'
      : 'linear-gradient(90deg, rgba(3,105,161,0.95), rgba(15,118,110,0.95))';

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl overflow-hidden`}>
          <div className="card text-center" style={{ background: gradient }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-white/90 mb-6 max-w-2xl mx-auto"
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
                className="btn btn-ghost"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
