import Link from 'next/link';
import { Phone, MapPin, Clock, Instagram, Star } from 'lucide-react';
import { branches, brand } from '@/data/site';

export default function Footer() {
  const verifiedBranch = branches.find((b) => b.status === 'verified') || branches[0]!;

  return (
    <footer className="border-t border-[#FACC15]/30 bg-transparent py-16 text-[#F8FAFC]">
      <div className="container-luxury">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <Link href="/" className="font-display text-2xl font-bold tracking-tight text-[#FACC15]">
              {brand.name}
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-[#F8FAFC] font-medium">
              {brand.tagline}. Unhurried luxury grooming, Alim Hakim trained hairstylists, and premium barbershop care in Nashik.
            </p>
            <div className="mt-6 flex items-center gap-1.5 text-xs text-[#FACC15] font-bold">
              <Star size={14} className="fill-[#FACC15]" />
              <span>4.5★ Google Rating (181+ Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#FACC15]">
              Quick Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs font-semibold">
              <li>
                <Link href="/about" className="text-[#F8FAFC] hover:text-[#FACC15] transition-colors">
                  About Our Salon
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#F8FAFC] hover:text-[#FACC15] transition-colors">
                  Services &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="/branches" className="text-[#F8FAFC] hover:text-[#FACC15] transition-colors">
                  Nashik Road Location
                </Link>
              </li>
              <li>
                <Link href="/colour-guide" className="text-[#F8FAFC] hover:text-[#FACC15] transition-colors">
                  Hair Colour Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#F8FAFC] hover:text-[#FACC15] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#FACC15]">
              Flagship Address
            </h4>
            <ul className="mt-4 space-y-3 text-xs font-semibold text-[#F8FAFC]">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#FACC15] shrink-0 mt-0.5" />
                <span>{verifiedBranch.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#FACC15] shrink-0" />
                <a href={`tel:${verifiedBranch.phone}`} className="hover:text-[#FACC15] transition-colors">
                  {verifiedBranch.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={16} className="text-[#FACC15] shrink-0" />
                <span>{verifiedBranch.hours}</span>
              </li>
            </ul>
          </div>

          {/* Book CTA */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#FACC15]">
              Reserve Your Chair
            </h4>
            <p className="mt-4 text-xs text-[#F8FAFC] font-medium leading-relaxed">
              Experience unhurried luxury grooming. Book your appointment online in under 60 seconds.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/book"
                className="btn-royal-gold text-xs py-3 text-center font-bold shadow-xl"
              >
                Book Appointment
              </Link>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Hairport Salon on Instagram"
                className="btn-royal-outline text-xs py-2.5 flex items-center justify-center gap-2 font-bold"
              >
                <Instagram size={14} /> Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#FACC15]/30 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8FAFC]/80 font-medium">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex gap-6">
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
