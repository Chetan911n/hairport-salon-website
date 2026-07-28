'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { branches } from '@/data/site';

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services & Rates' },
  { href: '/branches', label: 'Nashik Road' },
  { href: '/colour-guide', label: 'Colour Guide' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const verifiedBranch = branches.find((b) => b.status === 'verified') || branches[0]!;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3.5 bg-black/90 backdrop-blur-md border-b border-[#FACC15]/30 shadow-2xl' : 'py-6 bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <nav className="container-luxury flex items-center justify-between" aria-label="Primary">
        <Link href="/" className="font-display text-xl sm:text-2xl tracking-widest2 text-white flex items-center gap-2 drop-shadow-md font-bold">
          HAIR<span className="text-[#FACC15] font-serif">PORT</span>
          <span className="text-[10px] tracking-widest text-[#FACC15] border border-[#FACC15]/40 bg-black/80 px-2.5 py-0.5 rounded-full uppercase font-sans font-bold hidden sm:inline-block">
            Est. 2018
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-xs tracking-wider uppercase font-bold text-white hover:text-[#FACC15] transition-colors group py-1 drop-shadow-sm"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#FACC15] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${verifiedBranch.phone}`}
            className="flex items-center gap-2 text-xs font-bold text-[#FACC15] hover:text-[#FDE047] transition-colors"
          >
            <Phone size={14} />
            <span>{verifiedBranch.phone}</span>
          </a>
          <Link href="/book" className="btn-royal-gold text-xs py-2 px-5 font-bold shadow-lg flex items-center gap-1.5">
            <Calendar size={14} />
            <span>Book Chair</span>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#FACC15] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden overflow-hidden bg-black/95 border-b border-[#FACC15]/30 shadow-2xl backdrop-blur-lg">
          <ul className="container-luxury py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-bold tracking-wider uppercase text-white hover:text-[#FACC15]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-[#FACC15]/20 flex flex-col gap-3">
              <a
                href={`tel:${verifiedBranch.phone}`}
                className="flex items-center gap-2 text-sm font-bold text-[#FACC15]"
              >
                <Phone size={16} />
                <span>{verifiedBranch.phone}</span>
              </a>
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="btn-royal-gold text-xs py-3 text-center font-bold"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
