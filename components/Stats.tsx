'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { target: 15, suffix: '+', label: 'Years Salon Legacy' },
  { target: 25000, suffix: '+', label: 'Happy Clients Served' },
  { target: 4.5, isRating: true, suffix: '★', label: 'Google Rating (181+ Reviews)' },
  { target: 1, suffix: '', label: 'Flagship Nashik Location' }
];

const easeLuxury = [0.22, 1, 0.36, 1];

export default function Stats() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-20 bg-[#0F172A] text-white overflow-hidden">
      {/* Solid Dark Luxury Surface with Subtle Gold Accent Lines */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0C0C0C] via-[#0F172A] to-[#0C0C0C]" />

      <div className="relative z-10 container-luxury">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: easeLuxury }}
              className="text-center"
            >
              <div className="group rounded-2xl border border-[#FACC15]/40 bg-[#1E293B]/90 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#FACC15] hover:shadow-[0_0_25px_rgba(250,204,21,0.2)]">
                <div className="font-display text-4xl font-bold text-[#FACC15] md:text-5xl">
                  {s.isRating ? (
                    <span>4.5★</span>
                  ) : (
                    <AnimatedCounter target={s.target} suffix={s.suffix} duration={2.0} />
                  )}
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
                  {s.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
