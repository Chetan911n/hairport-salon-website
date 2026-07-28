'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const posts = [
  { image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80', likes: '342', comments: '28', tag: '#PrecisionFade' },
  { image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80', likes: '489', comments: '42', tag: '#RoyalShave' },
  { image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80', likes: '298', comments: '19', tag: '#NashikRoad' },
  { image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80', likes: '512', comments: '63', tag: '#BeardSculpting' }
];

export default function InstagramFeed() {
  return (
    <section className="border-t border-[#FACC15]/20 bg-[#0F172A] py-20 text-white">
      <div className="container-luxury">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="eyebrow text-[#FACC15]">Social Feed</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-white">
              Follow Us <span className="text-[#FACC15] italic font-serif">@hairport_nashik</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FACC15] hover:text-white transition-colors"
          >
            <Instagram size={18} /> Join The Community
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {posts.map((post, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group relative h-64 w-full overflow-hidden rounded-2xl border border-[#FACC15]/40 bg-[#1E293B] shadow-2xl">
                <Image
                  src={post.image}
                  alt={`Instagram Post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                />
                <div className="absolute inset-0 bg-[#0F172A]/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center gap-3">
                  <span className="text-xs font-bold text-[#FACC15] tracking-widest uppercase">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-4 text-xs font-bold text-[#F8FAFC]">
                    <span className="flex items-center gap-1"><Heart size={14} className="fill-[#FACC15] text-[#FACC15]" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle size={14} className="text-[#F8FAFC]" /> {post.comments}</span>
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
