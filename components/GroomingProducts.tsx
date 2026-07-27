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
    <section className="border-t border-[#DDD4C6] bg-[#EFE8DE]/50 py-24 md:py-36">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Professional Formulas</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl">
            In-Chair Grooming <span className="text-[#A87444] italic font-serif">Essentials.</span>
          </h2>
          <p className="mt-4 text-[#6E6A63] text-base md:text-lg">
            We use premium professional formulas during haircuts, hair spas, and beard services for optimal scalp care.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#DDD4C6] bg-white p-6 shadow-card transition-all duration-300 hover:border-[#A87444]">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFE8DE] text-[#A87444]">
                    <Sparkles size={20} />
                  </div>
                  <span className="mt-4 block text-[10px] uppercase font-bold tracking-wider text-[#A87444]">
                    {p.volume}
                  </span>
                  <h3 className="mt-1 font-display text-lg text-[#2B2B2B]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6E6A63]">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#DDD4C6]/60 pt-3 flex items-center gap-1.5 text-[11px] text-[#6E6A63]">
                  <Info size={13} className="text-[#A87444]" />
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
