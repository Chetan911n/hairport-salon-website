'use client';

import Reveal from './Reveal';

const products = [
  { name: 'Matte Finish Styling Pomade', desc: 'Strong hold, zero shine pomade for clean texture & scalp care.', volume: '100g' },
  { name: 'Nourishing Beard & Mustache Oil', desc: 'Enriched with natural Argan & Jojoba oil for soft beard growth.', volume: '50ml' },
  { name: 'Traditional Shaving Cream & Lather Soap', desc: 'Rich eucalyptus lather for smooth glide & razor bump protection.', volume: '150g' },
  { name: 'Deep Cleansing Hair Shampoo', desc: 'Sulfate-free clarifying shampoo for scalp health & volume.', volume: '250ml' }
];

export default function GroomingProducts() {
  return (
    <section className="border-t border-[#FACC15]/20 bg-[#0F172A] py-24 md:py-36 text-white">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-[#FACC15]">Professional Formulas</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold">
            In-Chair Grooming <span className="text-[#FACC15] italic font-serif">Essentials.</span>
          </h2>
          <p className="mt-4 text-[#F8FAFC] text-base md:text-lg font-medium">
            We use premium professional formulas during haircuts, hair spas, and beard services for optimal scalp care.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="rounded-2xl border border-[#FACC15]/40 bg-[#1E293B] p-6 shadow-2xl h-full flex flex-col justify-between hover:border-[#FACC15] transition-all">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FACC15] border border-[#FACC15]/40 bg-[#0F172A] px-2.5 py-1 rounded-full">
                    {p.volume}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-[#FACC15]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#F8FAFC] font-medium">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
