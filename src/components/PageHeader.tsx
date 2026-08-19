'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  italicTitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumbs?: { label: string; href: string }[];
}

const easeLuxury = [0.22, 1, 0.36, 1];

export default function PageHeader({
  eyebrow,
  title,
  italicTitle,
  description,
  imageSrc,
  imageAlt,
  breadcrumbs = [{ label: 'Home', href: '/' }]
}: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[50svh] w-full items-center justify-center overflow-hidden pt-32 pb-20 text-white">
      {/* Unique Subpage Hero Image with object-cover and subtle 10-15% vignette overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0C0C0C]" />
      </div>

      <div className="relative z-10 container-luxury text-center max-w-4xl mx-auto">
        {/* Breadcrumbs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeLuxury }}
          className="inline-flex items-center gap-2 rounded-full border border-[#FACC15]/50 bg-black/80 px-4 py-1.5 text-xs font-semibold text-[#F8FAFC] backdrop-blur-md mb-6"
        >
          {breadcrumbs.map((crumb, idx) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <Link href={crumb.href} className="hover:text-[#FACC15] transition-colors">
                {crumb.label}
              </Link>
              {idx < breadcrumbs.length && <ChevronRight size={12} className="text-[#FACC15]" />}
            </span>
          ))}
          <span className="text-[#FACC15] font-bold">{eyebrow}</span>
        </motion.div>

        {/* Eyebrow Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeLuxury }}
          className="block eyebrow text-[#FACC15] uppercase tracking-widest text-xs font-bold"
        >
          {eyebrow}
        </motion.span>

        {/* Luxury Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: easeLuxury }}
          className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg"
        >
          {title}{' '}
          {italicTitle && (
            <span className="text-[#FACC15] italic font-serif">{italicTitle}</span>
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: easeLuxury }}
          className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#F8FAFC] font-medium leading-relaxed drop-shadow-md bg-black/60 px-6 py-3 rounded-2xl backdrop-blur-md border border-[#FACC15]/30"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
