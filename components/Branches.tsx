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
    <section className="border-t border-[#DDD4C6] bg-[#F8F6F2] py-28 md:py-40" id="branches">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-[#A87444]">Locations</span>
          <h2 className="mt-6 font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl font-bold">
            Find your <span className="text-[#A87444] italic font-serif">nearest</span> Hairport.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-3">
          {branches.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all cursor-pointer ${
                active === i
                  ? 'border-[#A87444] bg-[#A87444] text-white shadow-lg'
                  : 'border-[#DDD4C6] bg-white text-[#2B2B2B] hover:border-[#A87444]'
              }`}
            >
              {b.area}
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
            className="mt-10 grid gap-8 overflow-hidden rounded-2xl border border-[#C5A059]/40 bg-[#2B2B2B] shadow-2xl md:grid-cols-2"
          >
            <div className="p-8 md:p-10 space-y-4 text-[#F8F6F2]">
              <h3 className="font-display text-2xl font-bold text-[#F8F6F2]">{branch.name}</h3>

              <div className="flex items-start gap-3 text-sm text-[#F4EFE6] font-medium">
                <MapPin size={20} className="mt-0.5 shrink-0 text-[#E2C067]" />
                <p>
                  {branch.address}
                  {branch.pincode !== '—' && <>, {branch.pincode}</>}
                </p>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#F4EFE6] font-medium">
                <Clock size={20} className="mt-0.5 shrink-0 text-[#E2C067]" />
                <p>{branch.hours}</p>
              </div>

              {branch.rating && (
                <div className="flex items-center gap-2 text-sm text-[#E2C067] font-bold">
                  <Star size={18} className="fill-[#E2C067]" />
                  <p>
                    {branch.rating} · {branch.reviewCount} verified reviews
                  </p>
                </div>
              )}
            </div>

            <div className="h-64 md:h-full overflow-hidden border-t md:border-t-0 md:border-l border-[#C5A059]/30">
              <iframe
                title={`Map — ${branch.name}`}
                className="h-full w-full"
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
