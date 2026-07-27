'use client';

import Reveal from './Reveal';
import { realGoogleReviews } from '@/data/site';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="border-t border-[#DDD4C6] bg-[#F8F6F2] py-24 md:py-36" id="reviews">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Verified Guest Feedback</span>
          <h2 className="font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl">
            Real Reviews From <span className="text-[#A87444] italic font-serif">Google Business.</span>
          </h2>
          <p className="mt-4 text-[#6E6A63] text-base md:text-lg">
            Read what our clients say about Prashant Sir, Tejas, Kunal, and our Nashik Road salon experience.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {realGoogleReviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#DDD4C6] bg-white p-8 shadow-card transition-all duration-300 hover:border-[#A87444]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#A87444]">
                      {[...Array(r.rating)].map((_, idx) => (
                        <Star key={idx} size={15} className="fill-[#A87444]" />
                      ))}
                    </div>
                    <Quote size={20} className="text-[#DDD4C6]" />
                  </div>
                  <p className="text-sm leading-relaxed text-[#6E6A63] italic">
                    &ldquo;{r.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-6 border-t border-[#DDD4C6]/60 pt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-[#2B2B2B]">
                      {r.name}
                    </h3>
                    <span className="text-[11px] text-[#6E6A63] font-sans">
                      {r.role || 'Google Verified Guest'}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#A87444] border border-[#DDD4C6] bg-[#F8F6F2] px-2.5 py-1 rounded-full">
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
