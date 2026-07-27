'use client';

import Reveal from './Reveal';
import { Star, Quote, CheckCircle } from 'lucide-react';

const reviews = [
  {
    name: 'Siddharth Deshmukh',
    role: 'Regular Client',
    rating: 5,
    comment: 'Best haircut and beard shaping experience in Nashik Road! Vikram is exceptionally skilled and pays attention to every single detail.',
    date: 'Verified Google Review'
  },
  {
    name: 'Anand Kulkarni',
    role: 'Executive',
    rating: 5,
    comment: 'The Royal Hot Towel Shave is a game changer. Super relaxed ambiance, polite staff, and top tier hygiene. Highly recommended!',
    date: 'Verified Google Review'
  },
  {
    name: 'Pranav Joshi',
    role: 'Groom',
    rating: 5,
    comment: 'Booked my entire bridal and pre-wedding grooming package here. Flawless hair styling and skin treatment. Hairport is unmatched.',
    date: 'Verified Google Review'
  }
];

export default function Testimonials() {
  return (
    <section className="border-t border-border bg-surface/40 py-24 md:py-36" id="reviews">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold mb-4">
            <Star size={13} className="fill-gold" />
            <span>4.4★ Rated on Google (189+ Reviews)</span>
          </div>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
            Words From Our <span className="gold-text italic">Gentlemen.</span>
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg">
            Real guest reviews and experiences from our barbershop community in Nashik.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
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

                  <p className="text-sm leading-relaxed text-white font-light italic">
                    &ldquo;{r.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-8 border-t border-border/50 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-base font-semibold text-white">
                      {r.name}
                    </h4>
                    <span className="text-xs text-muted">
                      {r.role}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gold/80">
                    <CheckCircle size={12} /> {r.date}
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
