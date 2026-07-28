'use client';

import Link from 'next/link';
import Reveal from './Reveal';

export default function BookingCTA() {
  return (
    <section className="border-t border-[#FACC15]/20 bg-[#0F172A] py-24 text-white">
      <div className="container-luxury text-center">
        <Reveal>
          <div className="rounded-3xl border border-[#FACC15]/40 bg-[#1E293B] p-12 md:p-16 shadow-2xl">
            <span className="eyebrow text-[#FACC15]">Reserve Your Chair</span>
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight text-white font-bold md:text-5xl">
              Your next great look starts with a <span className="text-[#FACC15] italic font-serif">booking.</span>
            </h2>
            <div className="pt-6">
              <Link
                href="/book"
                className="btn-royal-gold px-8 py-3.5 shadow-xl font-bold"
              >
                Reserve Barbershop Service
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
