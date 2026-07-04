'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

const faqs = [
  {
    q: 'Do I need an appointment, or can I walk in?',
    a: 'Appointments are recommended to guarantee your preferred time and stylist. Walk-ins may be accommodated depending on availability — please confirm with the salon directly.',
  },
  {
    q: 'Is Hairport a unisex salon?',
    a: 'Yes, Hairport offers hair and beauty services for all guests.',
  },
  {
    q: 'How far in advance should I book for a bridal appointment?',
    a: 'We recommend booking bridal trials several weeks ahead of the event to allow time for a trial and any adjustments.',
  },
  {
    q: 'What are your current opening hours?',
    a: 'Hours vary slightly by branch and day. Please check the Branches page or contact the salon directly to confirm current timing before visiting.',
  },
  {
    q: 'Can I reschedule or cancel a booking made through this website?',
    a: 'This website\'s booking form currently sends a request rather than an instant confirmation. Contact the salon directly for changes to an existing appointment.',
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHeader eyebrow="FAQ" title="Frequently asked" goldWord="questions." />
      <section className="pb-28 pt-4 md:pb-40">
        <div className="container-luxury max-w-3xl">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="border-b border-border">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-display text-lg text-white md:text-xl">{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gold transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid overflow-hidden transition-all duration-300 ${
                    open === i ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="min-h-0 text-sm leading-relaxed text-muted">{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
