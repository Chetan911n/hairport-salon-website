'use client';

import Reveal from './Reveal';
import { MapPin, Phone, Clock, Star, Navigation } from 'lucide-react';
import { branches } from '@/data/site';

export default function LocationSection() {
  const branch = branches.find((b) => b.status === 'verified') || branches[0]!;

  return (
    <section className="border-t border-[#DDD4C6] bg-[#F8F6F2] py-24 md:py-36" id="contact">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Visit Our Salon</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl">
            Flagship Location in <span className="text-[#A87444] italic font-serif">Nashik Road.</span>
          </h2>
          <p className="mt-4 text-[#2B2B2B] text-base md:text-lg font-medium">
            Located conveniently near Taran Talav Rd &amp; Datta Mandir stop with easy parking and unhurried service.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Main Location Card */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-[#DDD4C6] bg-white p-8 md:p-10 shadow-card h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#DDD4C6]/80 pb-6 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#2B2B2B]">
                      {branch.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#A87444] mt-1">
                      Landmark: {branch.landmark || 'Near Datta Mandir Stop & Taran Talav Rd'}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-[#DDD4C6] bg-[#EFE8DE] px-3.5 py-1.5 text-xs font-bold text-[#A87444] shadow-subtle">
                    <Star size={14} className="fill-[#A87444]" />
                    <span>4.5★ (181+ Reviews)</span>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-[#2B2B2B]">
                  <div className="flex items-start gap-3.5">
                    <MapPin size={22} className="text-[#A87444] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase font-bold text-[#A87444] tracking-wider mb-1">Full Address</strong>
                      <span className="text-base font-semibold text-[#2B2B2B] leading-relaxed block">{branch.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone size={22} className="text-[#A87444] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase font-bold text-[#A87444] tracking-wider mb-1">Direct Phone Line</strong>
                      <a href={`tel:${branch.phone}`} className="text-base font-bold text-[#2B2B2B] hover:text-[#A87444] transition-colors block">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock size={22} className="text-[#A87444] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase font-bold text-[#A87444] tracking-wider mb-1">Operating Hours</strong>
                      <span className="text-base font-semibold text-[#2B2B2B] block">{branch.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#DDD4C6]/80 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal-gold text-xs py-3.5 px-6 flex items-center justify-center gap-2 font-bold"
                >
                  <Navigation size={16} /> Get Driving Directions
                </a>
                <a
                  href={`tel:${branch.phone}`}
                  className="btn-royal-outline text-xs py-3.5 px-6 flex items-center justify-center gap-2 font-bold"
                >
                  Call Salon Desk
                </a>
              </div>
            </div>
          </Reveal>

          {/* Quick Info Box */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="rounded-2xl border border-[#DDD4C6] bg-[#EFE8DE] p-8 shadow-card h-full flex flex-col justify-between">
              <div>
                <span className="eyebrow">Salon Features</span>
                <h4 className="mt-3 font-display text-2xl font-bold text-[#2B2B2B]">
                  Comfort &amp; Privacy
                </h4>
                <ul className="mt-6 space-y-4 text-xs md:text-sm font-semibold text-[#2B2B2B]">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#A87444] shrink-0" />
                    Separate Men &amp; Women Styling Sections
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#A87444] shrink-0" />
                    Warm Water &amp; Cold Water Hair Wash
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#A87444] shrink-0" />
                    Senior Hairstylists Trained by Alim Hakim
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#A87444] shrink-0" />
                    Wheelchair Accessible Entry &amp; Parking
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-xl bg-white border border-[#DDD4C6] p-5 shadow-subtle text-xs text-[#2B2B2B]">
                <strong className="block text-[#A87444] font-bold text-sm mb-1.5">Accessibility Landmark:</strong>
                <span className="font-semibold leading-relaxed block">
                  Shop No. 3-5 Laxman Villa, Near Swimming Pool &amp; Datta Mandir Stop, Nashik Road.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
