'use client';

import Reveal from './Reveal';
import { realGoogleReviews } from '@/data/site';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="border-t border-[#DDD4C6] bg-[#F8F6F2] py-24 md:py-36" id="reviews">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-[#A87444]">Verified Guest Feedback</span>
          <h2 className="font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl font-bold">
            Real Reviews From <span className="text-[#A87444] italic font-serif">Google Business.</span>
          </h2>
          <p className="mt-4 text-[#2B2B2B] text-base md:text-lg font-medium">
            Read what our clients say about Prashant Sir, Tejas, Kunal, and our Nashik Road salon experience.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {realGoogleReviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#C5A059]/40 bg-[#2B2B2B] p-8 shadow-2xl transition-all duration-300 hover:border-[#E2C067]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#E2C067]">
                      {[...Array(r.rating)].map((_, idx) => (
                        <Star key={idx} size={15} className="fill-[#E2C067]" />
                      ))}
                    </div>
                    <Quote size={22} className="text-[#E2C067]/40" />
                  </div>
                  <p className="text-sm leading-relaxed text-[#F4EFE6] font-medium italic">
                    &ldquo;{r.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-6 border-t border-[#C5A059]/30 pt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-[#F8F6F2]">
                      {r.name}
                    </h3>
                    <span className="text-xs text-[#F4EFE6]/70 font-sans font-medium">
                      {r.role || 'Google Verified Guest'}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2C067] border border-[#C5A059]/40 bg-[#1E293B] px-2.5 py-1 rounded-full">
                    {r.date}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
