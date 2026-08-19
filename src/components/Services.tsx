'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Scissors, Sparkles, Flame, Droplets, Palette, Smile, ShieldCheck, Zap } from 'lucide-react';

export const featuredServicesList = [
  {
    slug: 'classic-haircut',
    title: 'Classic Haircut & Styling',
    category: 'Hair Cut & Wash',
    description: 'Precision scissor and clipper work tailored to your head shape, finished with warm water hair wash & hot towel.',
    price: '₹200',
    icon: Scissors
  },
  {
    slug: 'hair-colour',
    title: 'Hair Colour (Men & Women)',
    category: 'Colour Artistry',
    description: 'Ammonia-free hair colour coverage or beard grey blending for a rich, natural shade.',
    price: '₹300',
    icon: Palette
  },
  {
    slug: 'skin-cleansing-scrub',
    title: 'Deep Cleansing, Scrub & De-Tan',
    category: 'Skin & Facial Therapy',
    description: 'Deep pore facial cleansing, exfoliating scrub, de-tan pack, and soothing face steam.',
    price: '₹400',
    icon: Sparkles
  },
  {
    slug: 'blue-tox-treatment',
    title: 'Blue Tox Hair Therapy',
    category: 'Hair Treatment',
    description: 'Advanced Bluetox hair restructuring treatment for intense shine, repair, and zero frizz.',
    price: '₹2000+',
    icon: Zap
  },
  {
    slug: 'nano-plastia',
    title: 'Nano Plastia Treatment',
    category: 'Hair Treatment',
    description: 'Organic Nanoplastia hair alignment and smoothing for glossy, silky smooth locks.',
    price: '₹2500+',
    icon: Sparkles
  },
  {
    slug: 'keratin-smoothing',
    title: 'Keratin & Smoothing Treatment',
    category: 'Hair Treatment',
    description: 'Protein-infused Keratin therapy for smooth, manageable hair and long-lasting straight alignment.',
    price: '₹2000+',
    icon: Droplets
  },
  {
    slug: 'perming-treatment',
    title: 'Perming Treatment',
    category: 'Hair Treatment',
    description: 'Professional texturizing perm therapy for long-lasting bounce, curls, and volume.',
    price: '₹1800+',
    icon: Flame
  },
  {
    slug: 'beard-trim-sculpt',
    title: 'Beard Trim & Sculpting',
    category: 'Beard Care',
    description: 'Sharp razor lines, length trimming, hot oil massage and beard balm conditioning.',
    price: '₹100',
    icon: ShieldCheck
  }
];

const easeLuxury = [0.22, 1, 0.36, 1];

export default function Services() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 bg-[#0C0C0C] text-white overflow-hidden" id="services">
      <div className="container-luxury">
        
        {/* Editorial Side Feature Header with Image 2 Showcase Card */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: easeLuxury }}
            className="lg:col-span-6"
          >
            <span className="eyebrow text-[#FACC15]">Barbershop Services &amp; Pricing</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold">
              Precision Crafts. <span className="text-[#FACC15] italic font-serif">Verified Rates.</span>
            </h2>
            <p className="mt-4 text-[#F8FAFC] text-base md:text-lg font-medium leading-relaxed">
              Transparent pricing sourced directly from our salon register. Featuring specialized Male &amp; Female sections, Hair Treatments, Skin Cleansing &amp; Steam.
            </p>
          </motion.div>

          {/* Floating Editorial Barber Tools Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: easeLuxury }}
            className="lg:col-span-6 relative h-64 sm:h-80 w-full overflow-hidden rounded-3xl border border-[#FACC15]/40 shadow-2xl"
          >
            <Image
              src="/images/image2_services_bg.jpg"
              alt="THE HAIRPORT Barber Tools Flatlay"
              fill
              className="object-cover object-center opacity-100 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                Master Barber Toolkit
              </span>
              <span className="text-[10px] text-white/80 uppercase font-semibold">
                8K Precision Craft
              </span>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
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
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#FACC15]/40 bg-[#1E293B]/80 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#FACC15] hover:shadow-[0_10px_30px_rgba(250,204,21,0.25)]"
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
