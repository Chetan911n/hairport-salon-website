'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Star, Scissors } from 'lucide-react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-bg">
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg/30 via-transparent to-bg pointer-events-none" />

      <div className="relative z-10 container-luxury flex flex-col items-center text-center pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-surface/80 px-4 py-1.5 backdrop-blur-md mb-8"
        >
          <div className="flex items-center text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="fill-gold" />
            ))}
          </div>
          <span className="text-xs font-semibold text-white tracking-wide">
            4.4★ Rated Barber Shop in Nashik
          </span>
        </motion.div>

        <h1 className="font-display text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] leading-[1.02] text-white tracking-tight">
          <span className="split-line">
            <motion.span
              initial={shouldReduceMotion ? false : { y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              Precision. <span className="gold-text italic">Style.</span> Confidence.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-2xl text-balance text-lg text-muted md:text-xl font-light"
        >
          Premium Barber Experience in Nashik. Tailored precision haircuts, skin fades, hot towel razor shaves, and grooming rituals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row items-center justify-center"
        >
          <Link href="/book" className="btn-royal-gold">
            Book Appointment
          </Link>
          <a href="#services" className="btn-royal-outline">
            Explore Services
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50"
        aria-hidden="true"
      >
        <ChevronDown className="animate-bounce" size={22} />
      </motion.div>
    </section>
  );
}
