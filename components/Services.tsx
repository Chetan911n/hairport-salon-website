'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Scissors, Sparkles, Flame, Droplets, Palette, Smile, ShieldCheck } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';

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

const easeLuxury = [0.22, 1, 0.36, 1];

export default function Services() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 text-white overflow-hidden" id="services">
      {/* 100% Bright Visible Parallax Image 2 Background */}
      <ParallaxBackground
        src="/images/image2_services_bg.jpg"
        alt="THE HAIRPORT Image 2 Barber Tools Background"
        opacity={100}
      />

      <div className="relative z-10 container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.0, ease: easeLuxury }}
          className="max-w-2xl bg-black/80 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md mb-12"
        >
          <span className="eyebrow text-[#FACC15]">Barbershop Services &amp; Pricing</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold drop-shadow-lg">
            Precision Crafts. <span className="text-[#FACC15] italic font-serif">Verified Rates.</span>
          </h2>
          <p className="mt-4 text-[#F8FAFC] text-base md:text-lg font-medium leading-relaxed drop-shadow-md">
            Transparent pricing sourced directly from our salon register. Each service includes personal consultation &amp; hot towel finish.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredServicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: easeLuxury }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#FACC15]/40 bg-black/85 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#FACC15] hover:shadow-[0_10px_30px_rgba(250,204,21,0.25)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-[#FACC15] border border-[#FACC15]/40 group-hover:scale-105 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full border border-[#FACC15]/50 bg-black px-3.5 py-1 text-xs font-bold text-[#FACC15]">
                      {service.price}
                    </span>
                  </div>

                  <span className="mt-5 block text-xs tracking-wider uppercase text-[#FACC15] font-bold">
                    {service.category}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-[#FACC15] group-hover:text-[#FDE047] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#F8FAFC] font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#FACC15]/30 pt-4">
                  <span className="font-display text-lg font-bold text-[#FACC15]">
                    {service.price}
                  </span>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase text-[#FACC15] transition-all hover:translate-x-1"
                  >
                    Book Service <ArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
