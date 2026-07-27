'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Star, Award, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-bg pt-28 pb-16">
      <div className="relative z-10 container-luxury grid gap-12 lg:grid-cols-12 lg:items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#DDD4C6] bg-white px-4 py-1.5 shadow-subtle mb-6"
          >
            <div className="flex items-center text-[#A87444]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-[#A87444]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#2B2B2B] tracking-wide">
              4.5★ Rated Barber Shop in Nashik Road
            </span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06] text-[#2B2B2B] tracking-tight">
            Precision. <span className="text-[#A87444] italic font-serif">Style.</span> Confidence.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-[#6E6A63] font-light leading-relaxed"
          >
            Premium Barber Experience in Nashik. Tailored precision haircuts, skin fades, hot towel razor shaves, and unhurried grooming rituals by Prashant Sir &amp; team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Link href="/book" className="btn-royal-gold">
              Book Appointment
            </Link>
            <a href="#services" className="btn-royal-outline">
              Explore Services
            </a>
          </motion.div>

          {/* Highlights Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 pt-6 border-t border-[#DDD4C6]/80 flex items-center gap-6 text-xs text-[#6E6A63]"
          >
            <div className="flex items-center gap-2">
              <Award size={16} className="text-[#A87444]" />
              <span>Alim Hakim Trained</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#A87444]" />
              <span>Warm Water Hair Wash</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-Resolution Unsplash Barber Showcase Image */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden border-2 border-[#DDD4C6] bg-white p-2 shadow-card"
          >
            <div className="relative h-[420px] sm:h-[500px] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85"
                alt="THE HAIRPORT Barber Craft in Action"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/80 via-transparent to-transparent" />
              
              {/* Image Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 p-3.5 backdrop-blur-md border border-[#DDD4C6] shadow-subtle">
                <div>
                  <h4 className="font-display text-sm font-bold text-[#2B2B2B]">Master Barbering Craft</h4>
                  <p className="text-[11px] text-[#6E6A63]">Shop No. 3-5 Laxman Villa, Nashik Road</p>
                </div>
                <span className="rounded-full bg-[#EFE8DE] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#A87444] border border-[#DDD4C6]">
                  Verified
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-[#6E6A63]"
        aria-hidden="true"
      >
        <ChevronDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}
