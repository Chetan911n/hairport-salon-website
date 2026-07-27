'use client';

import Reveal from './Reveal';
import { realGoogleReviews } from '@/data/site';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="border-t border-[#E2E8F0] bg-[#FFFFFF] py-24 md:py-36" id="reviews">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-[#EAB308]">Verified Guest Feedback</span>
          <h2 className="font-display text-4xl leading-tight text-[#1F2937] md:text-5xl font-bold">
            Real Reviews From <span className="text-[#EAB308] italic font-serif">Google Business.</span>
          </h2>
          <p className="mt-4 text-[#1F2937] text-base md:text-lg font-medium">
            Read what our clients say about Prashant Sir, Tejas, Kunal, and our Nashik Road salon experience.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {realGoogleReviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              {/* Box Fill: Deep Navy Blue #0F172A, Box Text: Vibrant Yellow #FACC15 */}
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#FACC15]/40 bg-[#0F172A] p-8 shadow-2xl transition-all duration-300 hover:border-[#FACC15]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#FACC15]">
                      {[...Array(r.rating)].map((_, idx) => (
                        <Star key={idx} size={15} className="fill-[#FACC15]" />
                      ))}
                    </div>
                    <Quote size={22} className="text-[#FACC15]/40" />
                  </div>
                  <p className="text-sm leading-relaxed text-[#F8FAFC] font-medium italic">
                    &ldquo;{r.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-6 border-t border-[#FACC15]/30 pt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-[#FACC15]">
                      {r.name}
                    </h3>
                    <span className="text-xs text-[#F8FAFC]/80 font-sans font-medium">
                      {r.role || 'Google Verified Guest'}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FACC15] border border-[#FACC15]/40 bg-[#1E293B] px-2.5 py-1 rounded-full">
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
