'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import { ShoppingBag, ArrowUpRight, Sparkles } from 'lucide-react';

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

export default function GroomingProducts() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 text-white overflow-hidden" id="products">
      {/* 100% Bright Visible Image 5 Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image5_products_location_cta_footer_bg.jpg"
          alt="THE HAIRPORT Image 5 Grooming Products Background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      <div className="relative z-10 container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto bg-black/80 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md mb-16">
          <span className="eyebrow text-[#FACC15]">Barber Essentials</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold drop-shadow-lg">
            Professional Grooming <span className="text-[#FACC15] italic font-serif">Products.</span>
          </h2>
          <p className="mt-4 text-[#F8FAFC] text-base md:text-lg font-medium drop-shadow-md">
            Hand-selected, salon-grade hair pomades, beard oils, and scalp therapies available in-store at Nashik Road.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#FACC15]/40 bg-black/85 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#FACC15]">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
