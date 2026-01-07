'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, LucideIcon, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  category: 'visa' | 'technical';
}

export default function ServiceCard({ title, description, href, icon: Icon, category }: ServiceCardProps) {
  const CategoryIcon = Icon || Sparkles;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      className="group h-full"
    >
      <Link href={href} className="block h-full">
        <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 overflow-hidden relative">
          {/* Decorative background gradient */}
          <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full blur-3xl ${
            category === 'visa' 
              ? 'bg-primary-500' 
              : 'bg-secondary-500'
          }`} />
          
          {/* Top accent bar */}
          <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r transition-all duration-300 ${
            category === 'visa' 
              ? 'from-primary-500 via-primary-600 to-primary-500 group-hover:h-2' 
              : 'from-secondary-500 via-secondary-600 to-secondary-500 group-hover:h-2'
          }`} />
          
          {/* Icon with enhanced styling */}
          <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
            category === 'visa' 
              ? 'bg-gradient-to-br from-primary-50 to-primary-100 group-hover:from-primary-100 group-hover:to-primary-200' 
              : 'bg-gradient-to-br from-secondary-50 to-secondary-100 group-hover:from-secondary-100 group-hover:to-secondary-200'
          } shadow-md group-hover:shadow-lg group-hover:scale-110`}>
            <CategoryIcon className={`w-8 h-8 ${
              category === 'visa' ? 'text-primary-600' : 'text-secondary-600'
            }`} />
          </div>

          {/* Content */}
          <h3 className={`text-2xl font-bold text-gray-900 mb-4 transition-colors ${
            category === 'visa' ? 'group-hover:text-primary-600' : 'group-hover:text-secondary-600'
          }`}>
            {title}
          </h3>
          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* CTA with enhanced styling */}
          <div className={`flex items-center font-semibold transition-all ${
            category === 'visa' ? 'text-primary-600 group-hover:text-primary-700' : 'text-secondary-600 group-hover:text-secondary-700'
          }`}>
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-3 transition-transform duration-300" />
          </div>
          
          {/* Corner decoration */}
          <div className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-full transition-opacity opacity-0 group-hover:opacity-10 ${
            category === 'visa' ? 'bg-primary-500' : 'bg-secondary-500'
          }`} />
        </div>
      </Link>
    </motion.div>
  );
}
