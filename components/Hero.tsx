'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Star, Award, ShieldCheck } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const easeLuxury = [0.22, 1, 0.36, 1];

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Gentle Parallax Image 1 Background */}
      <ParallaxBackground
        src="/images/image1_hero_stats_bg.jpg"
        alt="THE HAIRPORT Luxury Vintage Barbershop Hero Background"
        opacity={100}
        priority
      />

      <div className="relative z-10 container-luxury flex flex-col items-center text-center max-w-4xl mx-auto pt-16">
        
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeLuxury }}
          className="inline-flex items-center gap-2 rounded-full border border-[#FACC15]/80 bg-black/85 px-5 py-2 shadow-2xl mb-6 backdrop-blur-md"
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

        {/* Hero Title - Opacity: 0 -> 1, Y: 40px -> 0, Duration: 1s */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: easeLuxury }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.04] text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] font-bold"
        >
          Precision. <span className="text-[#FACC15] italic font-serif">Style.</span> Confidence.
        </motion.h1>

        {/* Hero Subtitle - Starts 0.2s after headline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: easeLuxury }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white font-semibold leading-relaxed text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-black/75 px-6 py-2.5 rounded-2xl backdrop-blur-md border border-[#FACC15]/30"
        >
          Premium Barber Experience in Nashik. Tailored precision haircuts, skin fades, hot towel razor shaves, and unhurried grooming rituals by Prashant Sir &amp; team.
        </motion.p>

        {/* Buttons - Appear 0.3s later */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5, ease: easeLuxury }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/book"
              className="btn-royal-gold px-8 py-3.5 shadow-2xl font-bold transition-all hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
            >
              Book Appointment
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#services"
              className="btn-royal-outline px-8 py-3.5 shadow-xl font-bold transition-all hover:border-[#FACC15] hover:bg-[#FACC15]/10"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>

        {/* Feature Highlights Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-[#FACC15]/80 bg-black/85 px-5 py-2.5 shadow-2xl backdrop-blur-md">
            <Award size={18} className="text-[#FACC15]" />
            <span className="text-xs font-bold text-[#FACC15] tracking-wide">
              Alim Hakim Trained Senior Barbers
            </span>
          </div>

          <div className="flex items-center gap-2.5 rounded-full border border-[#FACC15]/80 bg-black/85 px-5 py-2.5 shadow-2xl backdrop-blur-md">
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
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-[#FACC15]"
        aria-hidden="true"
      >
        <ChevronDown className="animate-bounce" size={22} />
      </motion.div>
    </section>
  );
}
