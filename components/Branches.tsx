'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Star } from 'lucide-react';
import Reveal from './Reveal';
import { branches } from '@/data/site';

export default function Branches() {
  const [active, setActive] = useState(0);
  const branch = branches[active] ?? branches[0];
  if (!branch) return null;

  return (
    <section className="border-t border-border bg-surface py-28 md:py-40" id="branches">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Branches</span>
          <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
            Find your <span className="gold-text italic">nearest</span> Hairport.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-3">
          {branches.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-all ${
                active === i
                  ? 'border-gold bg-gold text-bg'
                  : 'border-border text-muted hover:border-gold/50 hover:text-white'
              }`}
            >
              {b.area}
              {b.status === 'placeholder' && <span className="ml-2 text-[10px] opacity-70">(placeholder)</span>}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid gap-8 overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2"
          >
            <div className="p-8 md:p-10">
              {branch.status === 'placeholder' && (
                <p className="mb-4 inline-block rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
                  Placeholder — unverified branch, replace before launch
                </p>
              )}
              <h3 className="font-display text-2xl text-white">{branch.name}</h3>

              <div className="mt-6 flex items-start gap-3 text-muted">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <p>
                  {branch.address}
                  {branch.pincode !== '—' && <>, {branch.pincode}</>}
                </p>
              </div>

              <div className="mt-4 flex items-start gap-3 text-muted">
                <Clock size={18} className="mt-0.5 shrink-0 text-gold" />
                <p>{branch.hours}</p>
              </div>

              {branch.rating && (
                <div className="mt-4 flex items-center gap-2 text-muted">
                  <Star size={16} className="text-gold" fill="#C8A552" />
                  <p>
                    {branch.rating} · {branch.reviewCount} reviews
                  </p>
                </div>
              )}
            </div>

            <div className="h-64 md:h-full">
              <iframe
                title={`Map — ${branch.name}`}
                className="h-full w-full grayscale invert-[0.92] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.mapsQuery)}&z=15&output=embed`}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
