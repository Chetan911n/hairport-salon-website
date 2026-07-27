'use client';

import Reveal from './Reveal';
import { Sparkles, Info } from 'lucide-react';

const products = [
  { name: 'Matte Finish Styling Pomade', desc: 'Strong hold, zero shine pomade for classic textured cuts.', volume: '100g' },
  { name: 'Nourishing Beard Oil', desc: 'Argan and cedarwood essential blend for soft, non-greasy beard growth.', volume: '50ml' },
  { name: 'Restorative Hair Serum', desc: 'Heat protection & frizz control serum for daily styling finish.', volume: '100ml' },
  { name: 'Deep Cleansing Hair Shampoo', desc: 'Sulfate-free clarifying shampoo for scalp health & volume.', volume: '250ml' }
];

export default function GroomingProducts() {
  return (
    <section className="border-t border-[#DDD4C6] bg-[#F8F6F2] py-24 md:py-36">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-[#A87444]">Professional Formulas</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl font-bold">
            In-Chair Grooming <span className="text-[#A87444] italic font-serif">Essentials.</span>
          </h2>
          <p className="mt-4 text-[#2B2B2B] text-base md:text-lg font-medium">
            We use premium professional formulas during haircuts, hair spas, and beard services for optimal scalp care.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#C5A059]/40 bg-[#2B2B2B] p-6 shadow-2xl transition-all duration-300 hover:border-[#E2C067]">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E293B] text-[#E2C067] border border-[#C5A059]/40">
                    <Sparkles size={20} />
                  </div>
                  <span className="mt-4 block text-[10px] uppercase font-bold tracking-wider text-[#E2C067]">
                    {p.volume}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-[#F8F6F2]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#F4EFE6]/80 font-medium">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#C5A059]/30 pt-3 flex items-center gap-1.5 text-[11px] text-[#F4EFE6]/80 font-medium">
                  <Info size={13} className="text-[#E2C067]" />
                  <span>In-Salon Application Only</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
