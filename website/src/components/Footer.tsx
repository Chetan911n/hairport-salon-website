'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-[#FACC15]/30 pt-20 pb-12 bg-[#0C0C0C] text-white overflow-hidden" id="footer">
      <div className="container-luxury">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-[#FACC15]/30">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 bg-[#1E293B]/90 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-black border border-[#FACC15]/50 shadow-md group-hover:border-[#FACC15]">
                <Image
                  src="/images/pn_hairport_logo.jpg"
                  alt="PN HAIRPORT Logo"
                  width={48}
                  height={48}
                  className="object-cover object-center"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-widest text-[#FACC15] block">
                  PN HAIRPORT
                </span>
                <span className="block text-[10px] tracking-widest uppercase text-[#F8FAFC]">
                  NASHIK ROAD • UNISEX SALON &amp; BARBERSHOP
                </span>
              </div>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-[#F8FAFC] font-medium">
              Nashik Road’s premier master barber destination. Precision haircuts, skin fades, hot towel razor shaves, Bluetox, Nanoplastia, and hair spa rituals by Prashant Sir &amp; team.
            </p>
            
            <div className="mt-6 flex items-center gap-4">
              <motion.a
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FACC15]/40 bg-black text-[#FACC15] transition-colors hover:bg-[#FACC15] hover:text-[#0F172A]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FACC15]/40 bg-black text-[#FACC15] transition-colors hover:bg-[#FACC15] hover:text-[#0F172A]"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold tracking-wider uppercase text-[#FACC15]">
              Quick Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#F8FAFC]">
              <li>
                <Link href="/" className="hover:text-[#FACC15] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FACC15] transition-colors">
                  Services &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FACC15] transition-colors">
                  Barber Heritage &amp; Team
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#FACC15] transition-colors">
                  Haircut Transformation Gallery
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-[#FACC15] transition-colors">
                  Nashik Road Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FACC15] transition-colors">
                  Contact &amp; Map
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-[#FACC15] transition-colors">
                  Book Chair Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-sm font-bold tracking-wider uppercase text-[#FACC15]">
              Salon Information
            </h4>
            <div className="flex items-start gap-3 text-xs text-[#F8FAFC]">
              <MapPin size={16} className="text-[#FACC15] shrink-0 mt-0.5" />
              <span>
                Shop No. 3-5 Laxman Villa, Nr Taran Talav Rd, Gayakhe Colony, Nashik Road, Nashik, Maharashtra 422101
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#F8FAFC]">
              <Phone size={16} className="text-[#FACC15] shrink-0" />
              <a href="tel:+919922338669" className="hover:text-[#FACC15] transition-colors font-mono">
                099223 38669 / +91 99223 38669
              </a>
            </div>
            <p className="text-[11px] text-[#FACC15] font-semibold pt-2">
              Hours: Open Daily • 10:00 AM – 9:00 PM
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F8FAFC]">
          <p>© {new Date().getFullYear()} PN HAIRPORT — Nashik Road. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#FACC15] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FACC15] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
