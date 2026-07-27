'use client';

import Reveal from './Reveal';
import { Star, Quote, CheckCircle } from 'lucide-react';

const realGoogleReviews = [
  {
    name: 'Paresh Chitnis',
    role: 'Local Guide · 95 Reviews',
    rating: 5,
    comment: 'Prashant is a senior hairstylist. He is a very softspoken and gentleman. PN Hairport is located at an accessible location. Very convenient place and good locality. The salon is very clean and professionally run.',
    source: 'Google Verified Review'
  },
  {
    name: 'Siddharth Pareek',
    role: 'Local Guide · 73 Reviews',
    rating: 5,
    comment: 'I never go to any other saloon for haircut... Special mention to Akshay for giving wonderful haircut and beard.',
    source: 'Google Verified Review'
  },
  {
    name: 'Vishal Chandanshiv',
    role: 'Local Guide · 135 Reviews',
    rating: 5,
    comment: 'The shop was good one. Even there is a separate section for ladies to have the hair cut. What I liked the most is that they even have hair wash available everyday with warm/cold water.',
    source: 'Google Verified Review'
  },
  {
    name: 'Shruti Rawal',
    role: 'Local Guide · 86 Reviews',
    rating: 5,
    comment: 'Went for haircut for self and my daughter... Amazing experience... Highly recommended... Best in Nasik road.',
    source: 'Google Verified Review'
  },
  {
    name: 'Harshal Raut',
    role: 'Local Guide · 14 Reviews',
    rating: 5,
    comment: 'Nice shop, excellent customer service. Perfectly trained, always ready for customer service, well educated staff. Lovely waiting room.',
    source: 'Google Verified Review'
  },
  {
    name: 'Immanuel Barse',
    role: '2 Reviews',
    rating: 5,
    comment: 'Excellent! Thrilled with the service... Good going Hairport!',
    source: 'Google Verified Review'
  }
];

export default function Testimonials() {
  return (
    <section className="border-t border-border bg-surface/40 py-24 md:py-36" id="reviews">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold mb-4">
            <Star size={13} className="fill-gold" />
            <span>4.5★ Verified Rating on Google (181+ Reviews)</span>
          </div>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
            Real Reviews From <span className="gold-text italic">Google Business.</span>
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg">
            Read what our clients say about Prashant Sir, Akshay, Kavita, and our Nashik Road salon experience.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {realGoogleReviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/50 hover:shadow-gold">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-gold">
                      {[...Array(r.rating)].map((_, idx) => (
                        <Star key={idx} size={15} className="fill-gold" />
                      ))}
                    </div>
                    <Quote size={20} className="text-gold/40" />
                  </div>

                  <p className="text-xs md:text-sm leading-relaxed text-white font-light italic">
                    &ldquo;{r.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-8 border-t border-border/50 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-base font-semibold text-white">
                      {r.name}
                    </h4>
                    <span className="text-[11px] text-muted">
                      {r.role}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gold/90">
                    <CheckCircle size={12} /> {r.source}
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
