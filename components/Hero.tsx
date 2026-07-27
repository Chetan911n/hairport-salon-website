'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Star, Award, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#0A1628] pt-24 pb-16">
      {/* Full-Bleed Vivid Barbershop Background Image (No White Obstruction) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=90"
          alt="THE HAIRPORT Luxury Barbershop Atmosphere"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        {/* Subtle Dark Vignette Tint Only (No White Tint Layer) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/40 to-[#0A1628]/85" />
      </div>

      <div className="relative z-10 container-luxury flex flex-col items-center text-center max-w-4xl mx-auto pt-16">
        
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#0A1628]/80 px-4.5 py-1.5 shadow-lg mb-6 backdrop-blur-md"
        >
          <div className="flex items-center text-[#E2C067]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#E2C067]" />
            ))}
          </div>
          <span className="text-xs font-semibold text-white tracking-wide">
            4.5★ Rated Barber Shop in Nashik Road (181+ Reviews)
          </span>
        </motion.div>

        {/* Hero Title */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.04] text-white tracking-tight drop-shadow-md">
          Precision. <span className="text-[#E2C067] italic font-serif">Style.</span> Confidence.
        </h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[#F8FAFC] font-light leading-relaxed text-balance drop-shadow"
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
          <Link href="/book" className="btn-royal-gold px-8 py-3.5 shadow-xl">
            Book Appointment
          </Link>
          <a href="#services" className="btn-royal-outline px-8 py-3.5 bg-[#0A1628]/60 text-white border-[#C5A059] backdrop-blur-md">
            Explore Services
          </a>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-white/90"
        >
          <div className="flex items-center gap-2">
            <Award size={16} className="text-[#E2C067]" />
            <span>Alim Hakim Trained Senior Barbers</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#E2C067]" />
            <span>Warm &amp; Cold Water Hair Wash</span>
          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-white/70"
        aria-hidden="true"
      >
        <ChevronDown className="animate-bounce" size={22} />
      </motion.div>
    </section>
  );
}
