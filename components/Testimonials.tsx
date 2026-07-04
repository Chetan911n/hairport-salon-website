'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

// NOTE: Individual review quotes below are illustrative placeholders,
// not scraped or attributed real reviews — we do not have verified,
// individually-sourced testimonials to publish under real names.
// The 4.4★ / 189-review aggregate on the Homepage About section IS
// a verified figure from the salon's public Justdial listing.
// Replace these cards with real, permissioned guest reviews before launch.
const testimonials = [
  {
    name: 'Guest review — placeholder',
    text: 'A calm, considered salon experience — the kind of detail you notice after you leave, not just while you’re in the chair.',
    rating: 5,
  },
  {
    name: 'Guest review — placeholder',
    text: 'Booked in for a colour appointment and the consultation alone felt more thorough than most full services elsewhere.',
    rating: 5,
  },
  {
    name: 'Guest review — placeholder',
    text: 'The hair spa treatment was genuinely restorative rather than just a quick add-on. Will be back before the next big event.',
    rating: 4,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="border-t border-border bg-bg py-28 md:py-40" id="testimonials">
      <div className="container-luxury">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="eyebrow">Testimonials</span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
              What guests <span className="gold-text italic">say.</span>
            </h2>
          </Reveal>
          <div className="hidden gap-3 md:flex">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="rounded-full border border-border p-3 text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="rounded-full border border-border p-3 text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_60%] lg:flex-[0_0_38%]">
                <div className="glass h-full rounded-2xl p-8">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} size={16} className="text-gold" fill="#C8A552" />
                    ))}
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-white/90">“{t.text}”</p>
                  <p className="mt-6 text-sm text-muted">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-2 md:hidden">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                selected === i ? 'w-6 bg-gold' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
