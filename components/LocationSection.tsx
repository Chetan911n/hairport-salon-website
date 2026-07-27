'use client';

import Link from 'next/link';
import Reveal from './Reveal';
import { MapPin, Clock, Phone, Navigation, Star, ArrowUpRight } from 'lucide-react';
import { branches } from '@/data/site';

export default function LocationSection() {
  const verifiedBranch = (branches.find((b) => b.status === 'verified') || branches[0])!;

  return (
    <section className="border-t border-border bg-bg py-24 md:py-36" id="contact">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Visit THE HAIRPORT</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
            Nashik Road <span className="gold-text italic">Location &amp; Hours.</span>
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg">
            Located conveniently near Datta Mandir stop with dedicated sections for men and women, warm/cold water hair wash &amp; air-conditioned waiting room.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16 max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl border border-gold/40 bg-surface/90 p-8 md:p-12 shadow-card grid gap-10 md:grid-cols-12 items-center">
            {/* Left Info Column */}
            <div className="md:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold">
                  Verified Google Listing
                </span>
                <span className="flex items-center gap-1 text-xs text-white">
                  <Star size={13} className="fill-gold text-gold" /> {verifiedBranch.rating}★ ({verifiedBranch.reviewCount} Reviews)
                </span>
              </div>

              <h3 className="font-display text-3xl text-white">
                {verifiedBranch.name}
              </h3>

              <div className="flex flex-col gap-4 text-sm text-muted">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-white font-light leading-relaxed">
                    {verifiedBranch.address}, {verifiedBranch.area}, Nashik - {verifiedBranch.pincode}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-gold shrink-0" />
                  <span className="text-white font-light">
                    {verifiedBranch.hours}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-gold shrink-0" />
                  <a href={`tel:${verifiedBranch.phone}`} className="text-gold hover:underline font-semibold text-base">
                    {verifiedBranch.phone}
                  </a>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <Link href="/book" className="btn-royal-gold text-xs py-3 px-6">
                  Book Appointment Now
                </Link>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(verifiedBranch.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal-outline text-xs py-3 px-6 inline-flex items-center gap-2"
                >
                  <Navigation size={14} /> Get Directions <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Visual Card Column */}
            <div className="md:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-gold/30 bg-bg p-6 flex flex-col justify-between">
              <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Open Daily</span>
                </div>
                <span className="text-xs font-mono text-gold">Closes 9 PM</span>
              </div>

              <div className="relative z-10 text-center my-auto">
                <MapPin size={36} className="text-gold mx-auto animate-bounce mb-2" />
                <h4 className="font-display text-xl text-white">THE HAIRPORT</h4>
                <p className="text-xs text-muted mt-1">Shop No. 3-5 Laxman Villa, Nr Taran Talav Rd</p>
                <span className="mt-2 inline-block text-[11px] font-mono text-gold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/30">
                  Tel: 099223 38669
                </span>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(verifiedBranch.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 rounded-xl bg-gold/10 border border-gold/40 py-2.5 text-center text-xs font-bold uppercase text-gold hover:bg-gold hover:text-bg transition-colors"
              >
                Open Google Maps Navigation
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
