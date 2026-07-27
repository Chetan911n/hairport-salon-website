'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

const headline = ['Where hair', 'meets craft.'];

export default function Hero() {
  const [ready, setReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const sceneVisible = useRef(false);

  useEffect(() => {
    // Small delay lets the entrance sequence feel intentional rather
    // than instant — the 3D scene fades in once type has settled.
    const t = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-bg">
      <div className="absolute inset-0 z-0 opacity-80">
        {ready && <HeroScene />}
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg/10 via-transparent to-bg pointer-events-none" />

      <div className="relative z-10 container-luxury flex flex-col items-center text-center pt-24">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow mb-6"
        >
          Nashik — Unisex Hair &amp; Beauty
        </motion.span>

        <h1 className="font-display text-[13vw] leading-[0.95] text-white sm:text-[9vw] md:text-[6.5vw] lg:text-[5.5vw]">
          {headline.map((line, i) => (
            <span key={line} className="split-line">
              <motion.span
                initial={shouldReduceMotion ? false : { y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {i === 1 ? <span className="gold-text italic">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-xl text-balance text-base text-muted md:text-lg"
        >
          A considered, unhurried salon experience — precision cuts, colour,
          spa and bridal artistry, in the heart of Nashik.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/book"
            className="btn-royal-gold"
          >
            Book Barbershop Ritual
          </Link>
          <Link
            href="/services"
            className="btn-royal-outline"
          >
            Explore Grooming Menu
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50"
        aria-hidden="true"
      >
        <ChevronDown className="animate-bounce" size={22} />
      </motion.div>
    </section>
  );
}
