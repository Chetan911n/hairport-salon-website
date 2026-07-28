'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';

const products = [
  {
    name: 'Master Styling Clay & Pomade',
    category: 'Hair Styling',
    price: '₹450',
    description: 'Matte finish, flexible strong hold clay formula for natural texture and volume.',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Organic Beard Nourishing Oil',
    category: 'Beard Care',
    price: '₹350',
    description: 'Infused with argan & jojoba oil for soft, hydrated beard hair and healthy skin.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Scalp Reviving Shampoo & Conditioner',
    category: 'Hair Care',
    price: '₹550',
    description: 'Sulfate-free invigorating tea tree shampoo for deep scalp therapy & shine.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80'
  }
];

const easeLuxury = [0.22, 1, 0.36, 1];

export default function GroomingProducts() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 text-white overflow-hidden" id="products">
      {/* 100% Bright Visible Parallax Image 5 Background */}
      <ParallaxBackground
        src="/images/image5_products_location_cta_footer_bg.jpg"
        alt="THE HAIRPORT Image 5 Grooming Products Background"
        opacity={100}
      />

      <div className="relative z-10 container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.0, ease: easeLuxury }}
          className="text-center max-w-2xl mx-auto bg-black/80 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md mb-16"
        >
          <span className="eyebrow text-[#FACC15]">Barber Essentials</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold drop-shadow-lg">
            Professional Grooming <span className="text-[#FACC15] italic font-serif">Products.</span>
          </h2>
          <p className="mt-4 text-[#F8FAFC] text-base md:text-lg font-medium drop-shadow-md">
            Hand-selected, salon-grade hair pomades, beard oils, and scalp therapies available in-store at Nashik Road.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: easeLuxury }}
              whileHover={{ rotate: 0, y: -6, transition: { duration: 0.3 } }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#FACC15]/40 bg-black/85 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#FACC15] hover:shadow-[0_10px_30px_rgba(250,204,21,0.25)]"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden rounded-xl border border-[#FACC15]/30">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <span className="absolute top-3 right-3 rounded-full border border-[#FACC15] bg-black/95 px-3 py-1 text-xs font-bold text-[#FACC15]">
                    {product.price}
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#FACC15] font-bold">
                    {product.category}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-white group-hover:text-[#FACC15] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#F8FAFC] font-medium">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-[#FACC15]/30 pt-4 flex items-center justify-between">
                <span className="font-display text-lg font-bold text-[#FACC15]">
                  {product.price}
                </span>
                <Link
                  href="/contact"
                  className="btn-royal-gold text-xs py-2 px-4 font-bold shadow-lg flex items-center gap-1"
                >
                  Inquire In Salon <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
