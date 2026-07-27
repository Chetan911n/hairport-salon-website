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
    price: '₹200',
    icon: Scissors
  },
  {
    slug: 'skin-fade',
    title: 'Skin Fade & Precision Cut',
    category: 'Precision Cut',
    description: 'Seamless gradient fade from zero skin, detailed hair line shape-up and texture styling.',
    price: '₹250',
    icon: Sparkles
  },
  {
    slug: 'beard-trim',
    title: 'Beard Trim & Sculpt',
    category: 'Beard Care',
    description: 'Sharp razor lines, length trimming, hot oil massage and beard balm conditioning.',
    price: '₹100',
    icon: Flame
  },
  {
    slug: 'royal-shave',
    title: 'Royal Clean Shave',
    category: 'Hot Towel Ritual',
    description: 'Traditional straight razor shave with essential pre-shave oils, steam, and cold towel finish.',
    price: '₹100',
    icon: ShieldCheck
  },
  {
    slug: 'hair-spa',
    title: 'Warm Water Wash & Hair Spa',
    category: 'Scalp & Hair Therapy',
    description: 'Deep conditioning scalp massage, warm water hair wash, and scalp nourishment.',
    price: '₹300',
    icon: Droplets
  },
  {
    slug: 'hair-colour',
    title: 'Hair & Beard Colour',
    category: 'Colour Artistry',
    description: 'Ammonia-free global colour coverage or beard colouring for rich natural shade.',
    price: '₹300',
    icon: Palette
  },
  {
    slug: 'facial',
    title: 'Skin Cleanup & Facial',
    category: 'Skin Therapy',
    description: 'Deep pore cleansing, exfoliation, face massage, and clarifying mask for healthy skin.',
    price: '₹400',
    icon: Sparkles
  },
  {
    slug: 'kids-haircut',
    title: 'Kids & Junior Haircut',
    category: 'Junior Styling',
    description: 'Patient, gentle styling experience for young gents with neat cut and fun styling.',
    price: '₹200',
    icon: Smile
  }
];

export default function Services() {
  return (
    <section className="border-t border-[#DDD4C6] bg-[#F8F6F2] py-24 md:py-36" id="services">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-[#A87444]">Barbershop Services &amp; Pricing</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl font-bold">
            Precision Crafts. <span className="text-[#A87444] italic font-serif">Verified Rates.</span>
          </h2>
          <p className="mt-4 text-[#2B2B2B] text-base md:text-lg font-medium">
            Transparent pricing sourced directly from our salon register. Each service includes personal consultation &amp; hot towel finish.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredServicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#C5A059]/40 bg-[#2B2B2B] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#E2C067]">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E293B] text-[#E2C067] border border-[#C5A059]/40">
                        <Icon size={22} />
                      </div>
                      <span className="rounded-full border border-[#C5A059]/50 bg-[#1E293B] px-3.5 py-1 text-xs font-bold text-[#E2C067]">
                        {service.price}
                      </span>
                    </div>

                    <span className="mt-5 block text-xs tracking-wider uppercase text-[#E2C067] font-bold">
                      {service.category}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-[#F8F6F2] group-hover:text-[#E2C067] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#F4EFE6]/80 font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#C5A059]/30 pt-4">
                    <span className="font-display text-lg font-bold text-[#F8F6F2]">
                      {service.price}
                    </span>
                    <Link
                      href="/book"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase text-[#E2C067] transition-all hover:translate-x-1"
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
