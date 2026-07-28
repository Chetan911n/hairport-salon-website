'use client';

import Reveal from './Reveal';

const stats = [
  { value: '15+', label: 'Years Salon Legacy' },
  { value: '25,000+', label: 'Happy Clients Served' },
  { value: '4.5★', label: 'Google Rating (181+ Reviews)' },
  { value: '1', label: 'Flagship Nashik Location' }
];

export default function Stats() {
  return (
    <section className="border-t border-[#FACC15]/20 bg-[#0F172A] py-16 text-white">
      <div className="container-luxury">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="rounded-2xl border border-[#FACC15]/40 bg-[#1E293B] p-6 shadow-2xl transition-all hover:border-[#FACC15]">
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
