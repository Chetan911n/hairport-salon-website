'use client';

import Link from 'next/link';
import { ArrowUpRight, Scissors, Sparkles, Flame, Droplets, Palette, Smile, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

export const featuredServicesList = [
  {
    slug: 'classic-haircut',
    title: 'Classic Haircut',
    category: 'Hair Cut & Styling',
    description: 'Precision scissor and clipper work tailored to your head shape, finished with styling & hot towel.',
    duration: '45 mins',
    price: '₹350',
    icon: Scissors
  },
  {
    slug: 'skin-fade',
    title: 'Skin Fade',
    category: 'Precision Cut',
    description: 'Seamless gradient fade from zero skin, detailed hair line shape-up and texture styling.',
    duration: '45 mins',
    price: '₹400',
    icon: Sparkles
  },
  {
    slug: 'beard-trim',
    title: 'Beard Trim & Sculpt',
    category: 'Beard Care',
    description: 'Sharp razor lines, length trimming, hot oil massage and beard balm conditioning.',
    duration: '30 mins',
    price: '₹250',
    icon: Flame
  },
  {
    slug: 'royal-shave',
    title: 'Royal Shave',
    category: 'Hot Towel Ritual',
    description: 'Traditional straight razor shave with essential pre-shave oils, steam, and cold towel finish.',
    duration: '35 mins',
    price: '₹300',
    icon: ShieldCheck
  },
  {
    slug: 'hair-spa',
    title: 'Restorative Hair Spa',
    category: 'Scalp & Hair Therapy',
    description: 'Deep conditioning scalp massage, steam treatment, keratin rebuilding and scalp nourishment.',
    duration: '50 mins',
    price: '₹600',
    icon: Droplets
  },
  {
    slug: 'hair-colour',
    title: 'Hair Colour (Global & Highlights)',
    category: 'Colour Artistry',
    description: 'Ammonia-free global colour coverage or hand-crafted highlight streaks for rich dimension.',
    duration: '60 mins',
    price: '₹800+',
    icon: Palette
  },
  {
    slug: 'facial',
    title: 'Signature Facial',
    category: 'Skin Therapy',
    description: 'Deep pore cleansing, exfoliation, face massage, and clarifying mask for healthy radiant skin.',
    duration: '45 mins',
    price: '₹700',
    icon: Sparkles
  },
  {
    slug: 'kids-haircut',
    title: 'Kids Haircut',
    category: 'Junior Styling',
    description: 'Patient, gentle styling experience for young gents with neat cut and fun styling.',
    duration: '30 mins',
    price: '₹250',
    icon: Smile
  }
];

export default function Services() {
  return (
    <section className="border-t border-border bg-bg py-24 md:py-36" id="services">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Barbershop Services</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
            Precision Crafts. <span className="gold-text italic">Unmatched Distinction.</span>
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg">
            Each service includes a personal consultation, hot towel refresh, and premium grooming finish.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredServicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-gold">
                  <div className="absolute inset-0 bg-gold-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/30">
                        <Icon size={22} />
                      </div>
                      <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                        {service.duration}
                      </span>
                    </div>

                    <span className="mt-5 block text-xs tracking-wider uppercase text-gold font-semibold">
                      {service.category}
                    </span>
                    <h3 className="mt-1 font-display text-xl text-white group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                    <span className="font-display text-lg font-bold text-white">
                      {service.price}
                    </span>
                    <Link
                      href="/book"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase text-gold transition-all hover:translate-x-1"
                    >
                      Book <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
