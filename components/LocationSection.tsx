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
          <span className="eyebrow text-[#A87444]">Visit Our Salon</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl font-bold">
            Flagship Location in <span className="text-[#A87444] italic font-serif">Nashik Road.</span>
          </h2>
          <p className="mt-4 text-[#2B2B2B] text-base md:text-lg font-medium">
            Located conveniently near Taran Talav Rd &amp; Datta Mandir stop with easy parking and unhurried service.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Main Location Card (Dark Charcoal Box with Creamy White Font) */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-[#C5A059]/40 bg-[#2B2B2B] p-8 md:p-10 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-6 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#F8F6F2]">
                      {branch.name}
                    </h3>
                    <p className="text-sm font-bold text-[#E2C067] mt-1">
                      Landmark: {branch.landmark || 'Near Datta Mandir Stop & Taran Talav Rd'}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-[#C5A059] bg-[#0A1628]/90 px-3.5 py-1.5 text-xs font-bold text-[#E2C067] shadow-lg">
                    <Star size={14} className="fill-[#E2C067]" />
                    <span>4.5★ (181+ Reviews)</span>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-[#F8F6F2]">
                  <div className="flex items-start gap-3.5">
                    <MapPin size={22} className="text-[#E2C067] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase font-bold text-[#E2C067] tracking-wider mb-1">Full Address</strong>
                      <span className="text-base font-semibold text-[#F8F6F2] leading-relaxed block">{branch.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone size={22} className="text-[#E2C067] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase font-bold text-[#E2C067] tracking-wider mb-1">Direct Phone Line</strong>
                      <a href={`tel:${branch.phone}`} className="text-base font-bold text-[#F8F6F2] hover:text-[#E2C067] transition-colors block">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock size={22} className="text-[#E2C067] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase font-bold text-[#E2C067] tracking-wider mb-1">Operating Hours</strong>
                      <span className="text-base font-semibold text-[#F8F6F2] block">{branch.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#C5A059]/30 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal-gold text-xs py-3.5 px-6 flex items-center justify-center gap-2 font-bold shadow-xl"
                >
                  <Navigation size={16} /> Get Driving Directions
                </a>
                <a
                  href={`tel:${branch.phone}`}
                  className="btn-royal-outline text-xs py-3.5 px-6 flex items-center justify-center gap-2 font-bold bg-[#0A1628]/90 text-white border-[#C5A059]"
                >
                  Call Salon Desk
                </a>
              </div>
            </div>
          </Reveal>

          {/* Quick Info Box (Dark Charcoal Box with Creamy White Font) */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="rounded-2xl border border-[#C5A059]/40 bg-[#2B2B2B] p-8 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <span className="eyebrow text-[#E2C067]">Salon Features</span>
                <h4 className="mt-3 font-display text-2xl font-bold text-[#F8F6F2]">
                  Comfort &amp; Privacy
                </h4>
                <ul className="mt-6 space-y-4 text-xs md:text-sm font-semibold text-[#F4EFE6]">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2C067] shrink-0" />
                    Separate Men &amp; Women Styling Sections
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2C067] shrink-0" />
                    Warm Water &amp; Cold Water Hair Wash
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2C067] shrink-0" />
                    Senior Hairstylists Trained by Alim Hakim
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2C067] shrink-0" />
                    Wheelchair Accessible Entry &amp; Parking
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-xl bg-[#1E293B] border border-[#C5A059]/40 p-5 shadow-lg text-xs text-[#F8F6F2]">
                <strong className="block text-[#E2C067] font-bold text-sm mb-1.5">Accessibility Landmark:</strong>
                <span className="font-semibold leading-relaxed block text-[#F4EFE6]">
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
