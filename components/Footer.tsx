'use client';

import Link from 'next/link';
import { branches } from '@/data/site';

export default function Footer() {
  const verifiedBranch = branches.find((b) => b.status === 'verified') || branches[0]!;

  return (
    <footer className="border-t border-[#DDD4C6] bg-[#F8F6F2] py-16 text-[#2B2B2B]">
      <div className="container-luxury grid gap-12 lg:grid-cols-12">
        {/* Brand Info */}
        <div className="lg:col-span-5">
          <Link href="/" className="font-display text-2xl tracking-widest2 text-[#2B2B2B] flex items-center gap-2 font-bold">
            HAIR<span className="text-[#A87444] font-serif">PORT</span>
          </Link>
          <p className="mt-4 text-xs leading-relaxed text-[#2B2B2B] font-medium max-w-sm">
            THE HAIRPORT is a 4.5★ rated premium unisex salon in Nashik Road, Maharashtra. Precision haircuts by Prashant Sir, Tejas &amp; Kunal, hair spa, separate ladies section &amp; warm water hair wash.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 space-y-3 text-xs">
          <strong className="block text-sm font-display text-[#2B2B2B] font-bold uppercase tracking-wider mb-2">Quick Links</strong>
          <ul className="space-y-2.5 font-semibold text-[#2B2B2B]">
            <li><Link href="/#about" className="hover:text-[#A87444] transition-colors">About Us</Link></li>
            <li><Link href="/#services" className="hover:text-[#A87444] transition-colors">Services &amp; Pricing</Link></li>
            <li><Link href="/#team" className="hover:text-[#A87444] transition-colors">Master Barbers</Link></li>
            <li><Link href="/#reviews" className="hover:text-[#A87444] transition-colors">Verified Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-[#A87444] transition-colors">Contact Salon</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-4 space-y-3 text-xs">
          <strong className="block text-sm font-display text-[#2B2B2B] font-bold uppercase tracking-wider mb-2">Salon Info</strong>
          <p className="leading-relaxed"><strong className="text-[#A87444] font-bold">Address:</strong> <span className="font-semibold">{verifiedBranch.address}</span></p>
          <p className="leading-relaxed"><strong className="text-[#A87444] font-bold">Landmark:</strong> <span className="font-semibold">{verifiedBranch.landmark || 'Near Datta Mandir Stop & Taran Talav Rd'}</span></p>
          <p className="leading-relaxed"><strong className="text-[#A87444] font-bold">Phone:</strong> <a href={`tel:${verifiedBranch.phone}`} className="font-bold text-[#2B2B2B] hover:text-[#A87444]">{verifiedBranch.phone}</a></p>
          <p className="leading-relaxed"><strong className="text-[#A87444] font-bold">Hours:</strong> <span className="font-semibold">{verifiedBranch.hours}</span></p>
        </div>
      </div>

      <div className="container-luxury mt-12 pt-8 border-t border-[#DDD4C6] flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-[#2B2B2B]">
        <p>© {new Date().getFullYear()} THE HAIRPORT Nashik Road. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 text-[#A87444] font-bold">Warm Editorial Luxury Experience</p>
      </div>
    </footer>
  );
}
