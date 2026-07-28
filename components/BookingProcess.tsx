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
    <section className="border-t border-[#FACC15]/20 bg-transparent py-24 md:py-36 text-white">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-[#FACC15]">Seamless Experience</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold drop-shadow-lg">
            How Appointment <span className="text-[#FACC15] italic font-serif">Booking Works.</span>
          </h2>
          <p className="mt-4 text-[#F8FAFC] text-base md:text-lg font-medium drop-shadow-md">
            Four simple steps to secure your dedicated chair time with our senior master barbers.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              {/* Frosted Dark Navy Box Fill over continuous background */}
              <div className="relative h-full rounded-2xl border border-[#FACC15]/40 bg-[#0F172A]/90 p-8 shadow-2xl backdrop-blur-md flex flex-col justify-between transition-transform hover:-translate-y-1 hover:border-[#FACC15]">
                <div>
                  <span className="font-display text-4xl font-bold text-[#FACC15]">
                    {s.num}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-[#FACC15]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#F8FAFC] font-medium">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-14 text-center">
          <Link href="/book" className="btn-royal-gold px-8 py-3.5 shadow-xl font-bold">
            Reserve Your Appointment Now
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
