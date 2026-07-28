'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviewsList = [
  {
    name: 'Siddharth R.',
    service: 'Skin Fade & Beard Sculpt',
    rating: 5,
    text: 'Prashant Sir is hands down the best barber in Nashik. The attention to detail, warm water hair wash, and sharp fade precision are unmatched.',
    date: '2 weeks ago',
    verified: true
  },
  {
    name: 'Aniket Deshmukh',
    service: 'Classic Haircut & Hair Spa',
    rating: 5,
    text: 'The Chesterfield lounge atmosphere makes you feel like a VIP. No rush, clean towels, and expert advice on haircut suited for my face structure.',
    date: '1 month ago',
    verified: true
  },
  {
    name: 'Rahul Wagh',
    service: 'Royal Shave & Skin Cleanup',
    rating: 5,
    text: 'Great experience! The hot towel razor shave and beard balm massage felt super relaxing. Highly recommended salon in Nashik Road.',
    date: '3 weeks ago',
    verified: true
  }
];

export default function Testimonials() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 text-white overflow-hidden" id="testimonials">
      {/* 100% Bright Visible Image 4 Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image4_booking_reviews_feed_bg.jpg"
          alt="THE HAIRPORT Image 4 Google Reviews Background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      <div className="relative z-10 container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto bg-black/80 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md mb-16">
          <span className="eyebrow text-[#FACC15]">Client Testimonials</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold drop-shadow-lg">
            4.5★ Google Verified <span className="text-[#FACC15] italic font-serif">Reviews.</span>
          </h2>
          <p className="mt-4 text-[#F8FAFC] text-base md:text-lg font-medium drop-shadow-md">
            Over 181+ verified client reviews on Google Maps for our Nashik Road salon.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {reviewsList.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#FACC15]/40 bg-black/85 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#FACC15]">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#FACC15]">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} size={16} className="fill-[#FACC15]" />
                      ))}
                    </div>
                    <Quote size={24} className="text-[#FACC15]/40" />
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-[#F8FAFC] font-medium italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="mt-8 border-t border-[#FACC15]/30 pt-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 font-display text-base font-bold text-[#FACC15]">
                      <span>{review.name}</span>
                      {review.verified && (
                        <CheckCircle2 size={14} className="text-[#FACC15]" />
                      )}
                    </div>
                    <span className="text-xs text-[#F8FAFC] font-medium">{review.service}</span>
                  </div>
                  <span className="text-[10px] text-[#F8FAFC]/70 font-semibold">{review.date}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
