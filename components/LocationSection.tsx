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
          <p className="mt-4 text-[#6E6A63] text-base md:text-lg">
            Located conveniently near Taran Talav Rd &amp; Datta Mandir stop with easy parking and unhurried service.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Main Location Card */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-[#DDD4C6] bg-white p-8 md:p-10 shadow-card h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#DDD4C6]/60 pb-6 mb-6">
                  <div>
                    <h3 className="font-display text-2xl text-[#2B2B2B]">
                      {branch.name}
                    </h3>
                    <p className="text-xs text-[#6E6A63] mt-1">{branch.landmark}</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-[#DDD4C6] bg-[#EFE8DE] px-3 py-1 text-xs font-bold text-[#A87444]">
                    <Star size={13} className="fill-[#A87444]" />
                    <span>4.5★ (181+ Reviews)</span>
                  </div>
                </div>

                <div className="space-y-5 text-sm text-[#2B2B2B]">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-[#A87444] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs uppercase text-[#A87444] tracking-wider mb-0.5">Address</strong>
                      <span>{branch.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-[#A87444] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs uppercase text-[#A87444] tracking-wider mb-0.5">Direct Line</strong>
                      <a href={`tel:${branch.phone}`} className="hover:text-[#A87444] transition-colors font-medium">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-[#A87444] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs uppercase text-[#A87444] tracking-wider mb-0.5">Operating Hours</strong>
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#DDD4C6]/60 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal-gold text-xs py-3 px-6 flex items-center justify-center gap-2"
                >
                  <Navigation size={15} /> Get Driving Directions
                </a>
                <a
                  href={`tel:${branch.phone}`}
                  className="btn-royal-outline text-xs py-3 px-6 flex items-center justify-center gap-2"
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
                <h4 className="mt-3 font-display text-2xl text-[#2B2B2B]">
                  Comfort &amp; Privacy
                </h4>
                <ul className="mt-6 space-y-4 text-xs md:text-sm text-[#6E6A63]">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#A87444]" />
                    Separate Men &amp; Women Styling Sections
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#A87444]" />
                    Warm Water &amp; Cold Water Hair Wash
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#A87444]" />
                    Senior Hairstylists Trained by Alim Hakim
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#A87444]" />
                    Wheelchair Accessible Entry &amp; Parking
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-xl bg-white border border-[#DDD4C6] p-4 text-xs text-[#2B2B2B]">
                <strong className="block text-[#A87444] font-semibold mb-1">Accessibility Landmark:</strong>
                Shop No. 3-5 Laxman Villa, Near Swimming Pool &amp; Datta Mandir Stop, Nashik Road.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
