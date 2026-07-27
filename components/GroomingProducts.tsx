'use client';

import Reveal from './Reveal';
import { Sparkles, Info, ShieldCheck } from 'lucide-react';

const products = [
  {
    name: 'Matte Finish Hair Pomade',
    category: 'Hair Styling',
    description: 'High hold with a zero-shine natural matte finish. Ideal for textured crops and quiffs.',
    size: '100g Jar',
    benefit: 'Pliable all-day control'
  },
  {
    name: 'Texturizing Hair Wax',
    category: 'Hair Styling',
    description: 'Medium hold wax formula enriched with natural beeswax for effortless reworkable volume.',
    size: '80g Jar',
    benefit: 'Adds volume & separation'
  },
  {
    name: 'Organic Cedarwood Beard Oil',
    category: 'Beard Care',
    description: 'Cold-pressed jojoba & argan oil infused with cedarwood for deep beard softness & scalp relief.',
    size: '50ml Dropper',
    benefit: 'Eliminates itch & hydrates'
  },
  {
    name: 'Nourishing Hair & Scalp Serum',
    category: 'Hair Therapy',
    description: 'Lightweight serum packed with Keratin proteins to repair split ends and restore shine.',
    size: '100ml Bottle',
    benefit: 'Heat & humidity protection'
  },
  {
    name: 'Scalp Revitalizing Shampoo',
    category: 'Daily Care',
    description: 'Sulfate-free tea tree & peppermint cleanser that clarifies pores and stimulates hair follicles.',
    size: '250ml Bottle',
    benefit: 'Refreshing mint cooling'
  }
];

export default function GroomingProducts() {
  return (
    <section className="border-t border-border bg-surface/40 py-24 md:py-36">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold mb-4">
            <Info size={13} />
            <span>Salon Experience Line — Information Only (In-Store Usage)</span>
          </div>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
            Grooming Essentials Used <span className="gold-text italic">In Our Chairs.</span>
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg">
            We curate and formulate high-performance grooming products to maintain your signature cut at home.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.07}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-gold">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                    {product.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg text-white group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/50 pt-4">
                  <div className="flex items-center justify-between text-[11px] text-white">
                    <span className="font-medium text-gold/90">{product.size}</span>
                    <span className="flex items-center gap-1 text-muted"><ShieldCheck size={12} className="text-gold" /> {product.benefit}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
