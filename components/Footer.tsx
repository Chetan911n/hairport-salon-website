'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-[#FACC15]/30 pt-20 pb-12 text-white overflow-hidden" id="footer">
      {/* 100% Bright Visible Image 5 Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image5_products_location_cta_footer_bg.jpg"
          alt="THE HAIRPORT Image 5 Footer Background"
          fill
          className="object-cover object-center opacity-100"
        />
      </div>

      <div className="relative z-10 container-luxury">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-[#FACC15]/30">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 bg-black/85 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold tracking-widest text-[#FACC15]">
                THE HAIRPORT
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-[#F8FAFC]">
                NASHIK ROAD • MASTER BARBER SALON
              </span>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-[#F8FAFC] font-medium">
              Nashik Road’s premier master barber destination. Precision haircuts, skin fades, hot towel razor shaves, and hair spa rituals by Prashant Sir &amp; team.
            </p>
            
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FACC15]/40 bg-black text-[#FACC15] transition-colors hover:bg-[#FACC15] hover:text-[#0F172A]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FACC15]/40 bg-black text-[#FACC15] transition-colors hover:bg-[#FACC15] hover:text-[#0F172A]"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 bg-black/85 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#FACC15]">
              Quick Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs font-semibold text-[#F8FAFC]">
              <li><Link href="/" className="hover:text-[#FACC15] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#FACC15] transition-colors">Services &amp; Pricing</Link></li>
              <li><Link href="/about" className="hover:text-[#FACC15] transition-colors">Our Barber Heritage</Link></li>
              <li><Link href="/gallery" className="hover:text-[#FACC15] transition-colors">Salon Gallery</Link></li>
              <li><Link href="/branches" className="hover:text-[#FACC15] transition-colors">Nashik Location</Link></li>
              <li><Link href="/book" className="hover:text-[#FACC15] transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-4 bg-black/85 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#FACC15]">
              Salon Contact &amp; Hours
            </h4>
            
            <div className="mt-4 space-y-3 text-xs text-[#F8FAFC]">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#FACC15] shrink-0 mt-0.5" />
                <span>Shop No. 4, Royal Regency, Near Datta Mandir Signal, Nashik Road, Maharashtra 422101</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#FACC15] shrink-0" />
                <span className="font-mono">+91 98224 45566</span>
              </div>
            </div>

            <div className="mt-6 border-t border-[#FACC15]/30 pt-4">
              <span className="text-[10px] uppercase font-bold text-[#FACC15]">Working Hours</span>
              <p className="mt-1 text-xs text-white font-bold">
                Monday – Sunday: 9:00 AM – 9:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F8FAFC] font-medium bg-black/85 p-4 rounded-2xl border border-[#FACC15]/30 backdrop-blur-md">
          <p>© {new Date().getFullYear()} THE HAIRPORT Nashik Road. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#FACC15]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#FACC15]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
