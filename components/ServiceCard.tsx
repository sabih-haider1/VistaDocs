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
        <div className="h-full card hover:shadow-2xl transition-all duration-300 p-6 overflow-hidden relative">
          {/* Decorative background gradient */}
          <div className={`absolute top-0 right-0 w-28 h-28 opacity-6 rounded-full blur-3xl ${
            category === 'visa' 
              ? 'bg-[var(--brand-primary)]' 
              : 'bg-[var(--brand-accent)]'
          }`} />
          
          {/* Top accent bar */}
          <div className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 ${category === 'visa' ? 'bg-[var(--brand-primary)] group-hover:h-2' : 'bg-[var(--brand-accent)] group-hover:h-2'}`} />
          
          {/* Icon with enhanced styling */}
          <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${category === 'visa' ? 'bg-[var(--muted-surface)]' : 'bg-[var(--muted-surface)]'} shadow-sm group-hover:shadow-md group-hover:scale-105`}>
            <CategoryIcon className={`w-7 h-7 ${category === 'visa' ? 'text-[var(--brand-primary)]' : 'text-[var(--brand-accent)]'}`} />
          </div>

          {/* Content */}
          <h3 className={`text-xl font-semibold text-[var(--text-900)] mb-3 transition-colors ${category === 'visa' ? 'group-hover:text-[var(--brand-primary)]' : 'group-hover:text-[var(--brand-accent)]'}`}>
            {title}
          </h3>
          <p className="text-[var(--muted-text)] mb-6 line-clamp-3 leading-relaxed text-sm">
            {description}
          </p>

          {/* CTA with enhanced styling */}
          <div className="flex items-center font-semibold transition-all text-[var(--brand-primary)]">
            <span className="text-sm">Learn more</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
          
          {/* Corner decoration */}
          <div className={`absolute bottom-0 right-0 w-20 h-20 rounded-tl-full transition-opacity opacity-0 group-hover:opacity-8 ${category === 'visa' ? 'bg-[var(--brand-primary)]' : 'bg-[var(--brand-accent)]'}`} />
        </div>
      </Link>
    </motion.div>
  );
}
