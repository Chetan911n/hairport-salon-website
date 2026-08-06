'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Menu, X, Phone, Calendar } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/branches', label: 'Nashik Location' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'h-[72px] bg-[#0C0C0C]/75 backdrop-blur-[20px] border-b border-[#FACC15]/40 shadow-2xl'
          : 'h-[90px] bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-luxury flex h-full items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-[#FACC15] border border-[#FACC15]/50 shadow-md group-hover:border-[#FACC15]"
          >
            <Scissors size={20} className="transition-transform group-hover:rotate-12" />
          </motion.div>
          
          <motion.div
            animate={{ scale: isScrolled ? 0.92 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col origin-left"
          >
            <span className="font-display text-xl font-bold tracking-widest text-[#FACC15] drop-shadow-sm">
              THE HAIRPORT
            </span>
            <span className="text-[9px] tracking-widest uppercase text-[#F8FAFC] font-semibold -mt-1">
              NASHIK ROAD
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#FACC15] group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FACC15] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+919822445566"
            className="flex items-center gap-2 text-xs font-bold text-[#FACC15] hover:text-white transition-colors"
          >
            <Phone size={14} />
            <span className="font-mono">+91 98224 45566</span>
          </a>

          <Link
            href="/book"
            className="btn-royal-gold text-xs py-2.5 px-5 font-bold shadow-lg"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-black border border-[#FACC15]/40 text-[#FACC15]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#FACC15]/40 bg-[#0C0C0C]/95 backdrop-blur-2xl px-6 py-6"
          >
            <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-[#F8FAFC]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#FACC15] transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="tel:+919822445566"
                  className="flex items-center gap-2 text-xs font-bold text-[#FACC15]"
                >
                  <Phone size={14} /> +91 98224 45566
                </a>
                <Link
                  href="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-royal-gold w-full text-center text-xs py-3 font-bold"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
