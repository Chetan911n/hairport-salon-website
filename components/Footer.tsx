'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { brand, branches } from '@/data/site';

export default function Footer() {
  const verifiedBranch = (branches.find((b) => b.status === 'verified') || branches[0])!;

  return (
    <footer className="border-t border-border bg-bg pt-20 pb-12 text-muted">
      <div className="container-luxury grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        {/* Col 1: Brand & Bio */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <Link href="/" className="font-display text-2xl tracking-widest2 text-white flex items-center gap-2">
              HAIR<span className="gold-text font-serif">PORT</span>
              <span className="text-[10px] tracking-widest text-gold/80 border border-gold/40 px-2 py-0.5 rounded-full uppercase font-sans">
                Est. 2018
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted">
              Nashik’s premier unisex barbershop and salon. Crafting timeless precision cuts, skin fades, razor shaves, and grooming rituals.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-4 text-white">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-gold hover:border-gold hover:bg-gold hover:text-bg transition-all">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-gold hover:border-gold hover:bg-gold hover:text-bg transition-all">
              <Facebook size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-gold hover:border-gold hover:bg-gold hover:text-bg transition-all">
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Navigation
          </h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-xs">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-gold transition-colors">Featured Services</Link></li>
            <li><Link href="/#gallery" className="hover:text-gold transition-colors">Transformation Gallery</Link></li>
            <li><Link href="/#team" className="hover:text-gold transition-colors">Meet Our Barbers</Link></li>
            <li><Link href="/book" className="hover:text-gold transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Col 3: Contact Info */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Barbershop Info
          </h4>
          <ul className="mt-4 flex flex-col gap-3 text-xs">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
              <span>{verifiedBranch.address}, {verifiedBranch.area}, Nashik - {verifiedBranch.pincode}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-gold shrink-0" />
              <span>Open Daily until 10:00 PM</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-gold shrink-0" />
              <span>reception@hairport.com</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter Signup */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Grooming Journal
          </h4>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Subscribe for grooming tips, slot openings, and exclusive salon updates.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-xs text-white placeholder-muted focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="btn-royal-gold w-full text-[11px] py-2.5"
            >
              Subscribe Newsletter
            </button>
          </form>
        </div>
      </div>

      <div className="container-luxury mt-16 border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-muted gap-4">
        <p>© {new Date().getFullYear()} {brand.name} Unisex Salon. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
