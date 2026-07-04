'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/branches', label: 'Branches' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="container-luxury flex items-center justify-between" aria-label="Primary">
        <Link href="/" className="font-display text-xl tracking-widest2 text-white">
          HAIR<span className="gold-text">PORT</span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-sm tracking-wide text-muted hover:text-white transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/book"
            className="rounded-full border border-gold/60 px-6 py-2.5 text-sm tracking-wide text-gold transition-all hover:bg-gold hover:text-bg hover:shadow-gold"
          >
            Book Appointment
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden glass"
          >
            <ul className="container-luxury flex flex-col gap-1 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block py-3 text-lg text-white/90">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/book"
                  className="inline-block rounded-full border border-gold px-6 py-2.5 text-sm text-gold"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
