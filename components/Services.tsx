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
    icon: Scissors
  },
  {
    slug: 'skin-fade',
    title: 'Skin Fade',
    category: 'Precision Cut',
    description: 'Seamless gradient fade from zero skin, detailed hair line shape-up and texture styling.',
    icon: Sparkles
  },
  {
    slug: 'beard-trim',
    title: 'Beard Trim & Sculpt',
    category: 'Beard Care',
    description: 'Sharp razor lines, length trimming, hot oil massage and beard balm conditioning.',
    icon: Flame
  },
  {
    slug: 'royal-shave',
    title: 'Royal Shave',
    category: 'Hot Towel Ritual',
    description: 'Traditional straight razor shave with essential pre-shave oils, steam, and cold towel finish.',
    icon: ShieldCheck
  },
  {
    slug: 'hair-spa',
    title: 'Restorative Hair Spa',
    category: 'Scalp & Hair Therapy',
    description: 'Deep conditioning scalp massage, steam treatment, keratin rebuilding and scalp nourishment.',
    icon: Droplets
  },
  {
    slug: 'hair-colour',
    title: 'Hair Colour (Global & Highlights)',
    category: 'Colour Artistry',
    description: 'Ammonia-free global colour coverage or hand-crafted highlight streaks for rich dimension.',
    icon: Palette
  },
  {
    slug: 'facial',
    title: 'Signature Facial',
    category: 'Skin Therapy',
    description: 'Deep pore cleansing, exfoliation, face massage, and clarifying mask for healthy radiant skin.',
    icon: Sparkles
  },
  {
    slug: 'kids-haircut',
    title: 'Kids Haircut',
    category: 'Junior Styling',
    description: 'Patient, gentle styling experience for young gents with neat cut and fun styling.',
    icon: Smile
  }
];

export default function Services() {
  return (
    <section className="border-t border-[#DDD4C6] bg-[#F8F6F2] py-24 md:py-36" id="services">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Barbershop Services</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl">
            Precision Crafts. <span className="text-[#A87444] italic font-serif">Unmatched Distinction.</span>
          </h2>
          <p className="mt-4 text-[#6E6A63] text-base md:text-lg">
            Each service includes a personal consultation, hot towel refresh, and premium grooming finish.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredServicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DDD4C6] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-[#A87444]">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFE8DE] text-[#A87444] border border-[#DDD4C6]">
                        <Icon size={22} />
                      </div>
                    </div>

                    <span className="mt-5 block text-xs tracking-wider uppercase text-[#A87444] font-semibold">
                      {service.category}
                    </span>
                    <h3 className="mt-1 font-display text-xl text-[#2B2B2B] group-hover:text-[#A87444] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#6E6A63]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-end border-t border-[#DDD4C6]/60 pt-4">
                    <Link
                      href="/book"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase text-[#A87444] transition-all hover:translate-x-1"
                    >
                      Book Service <ArrowUpRight size={14} />
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
