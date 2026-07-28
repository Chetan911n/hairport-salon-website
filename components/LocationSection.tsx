'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import { MapPin, Phone, Clock, Star, Navigation } from 'lucide-react';
import { branches } from '@/data/site';

export default function LocationSection() {
  const branch = branches.find((b) => b.status === 'verified') || branches[0]!;

  return (
    <section className="border-t border-[#FACC15]/20 bg-transparent py-24 md:py-36 text-white" id="contact">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-[#FACC15]">Visit Our Salon</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold">
            Flagship Location in <span className="text-[#FACC15] italic font-serif">Nashik Road.</span>
          </h2>
          <p className="mt-4 text-[#F8FAFC] text-base md:text-lg font-medium leading-relaxed">
            Located conveniently near Taran Talav Rd &amp; Datta Mandir stop with easy parking and unhurried service.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Main Location Card (Box Fill: Deep Navy Blue #0F172A/90) */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-[#FACC15]/40 bg-[#0F172A]/90 p-8 md:p-10 shadow-2xl h-full flex flex-col justify-between backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between border-b border-[#FACC15]/30 pb-6 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#FACC15]">
                      {branch.name}
                    </h3>
                    <p className="text-sm font-bold text-[#FDE047] mt-1">
                      Landmark: {branch.landmark || 'Near Datta Mandir Stop & Taran Talav Rd'}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-[#FACC15] bg-[#1E293B] px-3.5 py-1.5 text-xs font-bold text-[#FACC15] shadow-lg">
                    <Star size={14} className="fill-[#FACC15]" />
                    <span>4.5★ (181+ Reviews)</span>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-[#F8FAFC]">
                  <div className="flex items-start gap-3.5">
                    <MapPin size={22} className="text-[#FACC15] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase font-bold text-[#FACC15] tracking-wider mb-1">Full Address</strong>
                      <span className="text-base font-semibold text-[#F8FAFC] leading-relaxed block">{branch.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone size={22} className="text-[#FACC15] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase font-bold text-[#FACC15] tracking-wider mb-1">Direct Phone Line</strong>
                      <a href={`tel:${branch.phone}`} className="text-base font-bold text-[#FACC15] hover:text-[#FDE047] transition-colors block">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock size={22} className="text-[#FACC15] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase font-bold text-[#FACC15] tracking-wider mb-1">Operating Hours</strong>
                      <span className="text-base font-semibold text-[#F8FAFC] block">{branch.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#FACC15]/30 flex flex-col sm:flex-row gap-4">
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
                  className="btn-royal-outline text-xs py-3.5 px-6 flex items-center justify-center gap-2 font-bold"
                >
                  Call Salon Desk
                </a>
              </div>
            </div>
          </Reveal>

          {/* Luxury Dark Gold Location Map Card */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="rounded-2xl border border-[#FACC15]/40 bg-[#0F172A]/90 p-8 shadow-2xl h-full flex flex-col justify-between backdrop-blur-md">
              <div>
                <span className="eyebrow text-[#FACC15]">Interactive Location Map</span>
                <h4 className="mt-2 font-display text-2xl font-bold text-[#FACC15]">
                  Nashik Road Salon Map
                </h4>

                {/* Styled Dark Gold Map Preview */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mt-6 block overflow-hidden rounded-xl border border-[#FACC15]/40 shadow-xl"
                >
                  <Image
                    src="/images/hairport_nashik_map.jpg"
                    alt="THE HAIRPORT Nashik Road Map Location"
                    width={600}
                    height={340}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0F172A]/40 transition-opacity group-hover:bg-[#0F172A]/20 flex items-center justify-center">
                    <span className="btn-royal-gold text-xs py-2.5 px-5 shadow-2xl flex items-center gap-1.5 font-bold">
                      <Navigation size={14} /> Open Live Google Map
                    </span>
                  </div>
                </a>
              </div>

              <div className="mt-6 rounded-xl bg-[#1E293B] border border-[#FACC15]/40 p-5 shadow-lg text-xs text-[#F8FAFC]">
                <strong className="block text-[#FACC15] font-bold text-sm mb-1.5">Accessibility Landmark:</strong>
                <span className="font-semibold leading-relaxed block text-[#F8FAFC]">
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
