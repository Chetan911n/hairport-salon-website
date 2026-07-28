'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import { Instagram, ExternalLink } from 'lucide-react';

const feedPosts = [
  {
    id: '1',
    title: 'Master Haircut & Skin Fade',
    tag: '#MasterFade',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    title: 'Hot Towel Beard Sculpting',
    tag: '#BeardCraft',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    title: 'Warm Water Wash & Hair Spa',
    tag: '#HairTherapy',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '4',
    title: 'Salon Interior Nashik Road',
    tag: '#HairportVibes',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80'
  }
];

export default function InstagramFeed() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 text-white overflow-hidden" id="instagram">
      {/* 100% Bright Visible Image 4 Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image4_booking_reviews_feed_bg.jpg"
          alt="THE HAIRPORT Image 4 Instagram Feed Background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      <div className="relative z-10 container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto bg-black/80 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md mb-16">
          <span className="eyebrow text-[#FACC15]">@thehairport_nashik</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold drop-shadow-lg">
            Follow Our Craft On <span className="text-[#FACC15] italic font-serif">Instagram.</span>
          </h2>
          <p className="mt-4 text-[#F8FAFC] text-base md:text-lg font-medium drop-shadow-md">
            Daily transformation videos, haircuts, beard trims, and salon highlights.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {feedPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.08}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl border border-[#FACC15]/40 bg-black shadow-2xl backdrop-blur-md"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center justify-between text-[#FACC15]">
                    <Instagram size={24} />
                    <ExternalLink size={18} />
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-white">
                    {post.title}
                  </h4>
                  <span className="mt-1 text-xs text-[#FACC15] font-bold">
                    {post.tag}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
