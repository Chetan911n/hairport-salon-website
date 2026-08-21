'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';

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
          ? 'h-[72px] bg-[#0C0C0C]/85 backdrop-blur-[20px] border-b border-[#FACC15]/40 shadow-2xl'
          : 'h-[90px] bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-luxury flex h-full items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <Image
              src="/images/pn_hairport_logo_light.png"
              alt="PN HAIRPORT hair n beauty lounge"
              width={220}
              height={50}
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-md"
              priority
            />
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
            href="tel:+919922338669"
            className="flex items-center gap-2 text-xs font-bold text-[#FACC15] hover:text-white transition-colors"
          >
            <Phone size={14} />
            <span className="font-mono">099223 38669</span>
          </a>

          <Link
            href="/book"
            className="btn-royal-gold inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider"
          >
            <Calendar size={14} />
            Book Chair
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FACC15]/40 text-[#FACC15] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-[#FACC15]/40 bg-[#0C0C0C]/95 backdrop-blur-2xl md:hidden overflow-hidden"
          >
            <div className="container-luxury py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-wider text-white hover:text-[#FACC15] py-2 border-b border-white/10"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="tel:+919922338669"
                  className="flex items-center gap-2 text-sm font-bold text-[#FACC15]"
                >
                  <Phone size={16} />
                  <span>099223 38669</span>
                </a>

                <Link
                  href="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-royal-gold text-center py-3 text-xs font-bold uppercase tracking-wider"
                >
                  Book Barber Chair
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
