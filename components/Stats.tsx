'use client';

import Reveal from './Reveal';

const stats = [
  { value: '15+', label: 'Years Salon Legacy' },
  { value: '25,000+', label: 'Happy Clients' },
  { value: '4.5★', label: 'Google Rating (181+ Reviews)' },
  { value: '1', label: 'Prime Nashik Location' }
];

export default function Stats() {
  return (
    <section className="border-t border-[#DDD4C6] bg-[#EFE8DE]/40 py-16">
      <div className="container-luxury">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-4xl font-bold text-[#A87444] md:text-5xl">
                {s.value}
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#6E6A63]">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
