'use client';

import Reveal from './Reveal';
import Link from 'next/link';

const steps = [
  { num: '01', title: 'Choose Service', desc: 'Select from precision haircuts, skin fades, beard sculpts or hair spa.' },
  { num: '02', title: 'Select Barber', desc: 'Book directly with Prashant Sir, Tejas, or Kunal based on your preference.' },
  { num: '03', title: 'Pick Date & Time', desc: 'Choose a convenient slot that fits your schedule without long wait times.' },
  { num: '04', title: 'Confirm & Enjoy', desc: 'Arrive at Laxman Villa, Nashik Road and experience unhurried luxury grooming.' }
];

export default function BookingProcess() {
  return (
    <section className="border-t border-[#DDD4C6] bg-[#EFE8DE]/50 py-24 md:py-36">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Seamless Experience</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl">
            How Appointment <span className="text-[#A87444] italic font-serif">Booking Works.</span>
          </h2>
          <p className="mt-4 text-[#6E6A63] text-base md:text-lg">
            Four simple steps to secure your dedicated chair time with our senior master barbers.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-[#DDD4C6] bg-white p-8 shadow-card flex flex-col justify-between transition-transform hover:-translate-y-1">
                <div>
                  <span className="font-display text-4xl font-bold text-[#A87444]">
                    {s.num}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-[#2B2B2B]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6E6A63]">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-14 text-center">
          <Link href="/book" className="btn-royal-gold">
            Reserve Your Appointment Now
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
