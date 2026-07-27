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
    <section className="border-t border-[#DDD4C6] bg-[#F8F6F2] py-16">
      <div className="container-luxury">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="rounded-2xl border border-[#C5A059]/40 bg-[#2B2B2B] p-6 shadow-2xl transition-all hover:border-[#E2C067]">
                <div className="font-display text-4xl font-bold text-[#E2C067] md:text-5xl">
                  {s.value}
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#F8F6F2]">
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
