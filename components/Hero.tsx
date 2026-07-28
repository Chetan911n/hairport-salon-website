'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Star, Award, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#0F172A] pt-24 pb-16">
      {/* Full-Bleed Bright Minimalist Barber Styling Station Background Image (Option 6 - NO BLUE TINT) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1920&q=90"
          alt="THE HAIRPORT Bright Minimalist Barber Styling Station"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
        {/* Minimal Bottom Transition Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#0F172A]" />
      </div>

      <div className="relative z-10 container-luxury flex flex-col items-center text-center max-w-4xl mx-auto pt-16">
        
        {/* Rating Badge (Box Fill: Deep Navy Blue #0F172A, Text: Vibrant Yellow #FACC15) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#FACC15]/80 bg-[#0F172A]/90 px-5 py-2 shadow-2xl mb-6 backdrop-blur-md"
        >
          <div className="flex items-center text-[#FACC15]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#FACC15]" />
            ))}
          </div>
          <span className="text-xs font-bold text-[#FACC15] tracking-wide">
            4.5★ Rated Barber Shop in Nashik Road (181+ Reviews)
          </span>
        </motion.div>

        {/* Hero Title */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.04] text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] font-bold">
          Precision. <span className="text-[#FACC15] italic font-serif">Style.</span> Confidence.
        </h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white font-semibold leading-relaxed text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-[#0F172A]/60 px-6 py-2 rounded-2xl backdrop-blur-sm"
        >
          Premium Barber Experience in Nashik. Tailored precision haircuts, skin fades, hot towel razor shaves, and unhurried grooming rituals by Prashant Sir &amp; team.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link href="/book" className="btn-royal-gold px-8 py-3.5 shadow-2xl">
            Book Appointment
          </Link>
          <a href="#services" className="btn-royal-outline px-8 py-3.5 shadow-xl">
            Explore Services
          </a>
        </motion.div>

        {/* Feature Highlights Pills (Box Fill: Deep Navy Blue #0F172A, Text: Vibrant Yellow #FACC15) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-[#FACC15]/80 bg-[#0F172A]/90 px-5 py-2.5 shadow-2xl backdrop-blur-md">
            <Award size={18} className="text-[#FACC15]" />
            <span className="text-xs font-bold text-[#FACC15] tracking-wide">
              Alim Hakim Trained Senior Barbers
            </span>
          </div>

          <div className="flex items-center gap-2.5 rounded-full border border-[#FACC15]/80 bg-[#0F172A]/90 px-5 py-2.5 shadow-2xl backdrop-blur-md">
            <ShieldCheck size={18} className="text-[#FACC15]" />
            <span className="text-xs font-bold text-[#FACC15] tracking-wide">
              Warm &amp; Cold Water Hair Wash
            </span>
          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-[#FACC15]"
        aria-hidden="true"
      >
        <ChevronDown className="animate-bounce" size={22} />
      </motion.div>
    </section>
  );
}
