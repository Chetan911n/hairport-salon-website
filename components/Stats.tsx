'use client';

import Image from 'next/image';
import Reveal from './Reveal';

const stats = [
  { value: '15+', label: 'Years Salon Legacy' },
  { value: '25,000+', label: 'Happy Clients Served' },
  { value: '4.5★', label: 'Google Rating (181+ Reviews)' },
  { value: '1', label: 'Flagship Nashik Location' }
];

export default function Stats() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-20 text-white overflow-hidden">
      {/* User Uploaded Image 1 Background for Statistics Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image1_hero_stats_bg.jpg"
          alt="THE HAIRPORT Statistics Background"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 container-luxury">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="rounded-2xl border border-[#FACC15]/50 bg-black/85 p-6 shadow-2xl backdrop-blur-md transition-all hover:border-[#FACC15]">
                <div className="font-display text-4xl font-bold text-[#FACC15] md:text-5xl">
                  {s.value}
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
