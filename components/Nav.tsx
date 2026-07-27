'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#team', label: 'Team' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#contact', label: 'Contact' },
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
        scrolled ? 'py-3.5 bg-[#F8F6F2]/95 backdrop-blur-md border-b border-[#DDD4C6] shadow-md' : 'py-6 bg-gradient-to-b from-[#0A1628]/80 to-transparent'
      }`}
    >
      <nav className="container-luxury flex items-center justify-between" aria-label="Primary">
        <Link href="/" className="font-display text-xl sm:text-2xl tracking-widest2 text-white flex items-center gap-2 drop-shadow-md">
          HAIR<span className="text-[#E2C067] font-serif">PORT</span>
          <span className="text-[10px] tracking-widest text-[#E2C067] border border-[#C5A059]/40 bg-[#0A1628]/80 px-2.5 py-0.5 rounded-full uppercase font-sans font-bold hidden sm:inline-block">
            Est. 2018
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative text-xs tracking-wider uppercase font-bold transition-colors group py-1 drop-shadow-sm ${
                  scrolled ? 'text-[#2B2B2B] hover:text-[#A87444]' : 'text-white hover:text-[#E2C067]'
                }`}
              >
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-[#A87444]' : 'bg-[#E2C067]'}`} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/book" className="btn-royal-gold text-xs py-2.5 px-6 shadow-lg font-bold">
            Book Appointment
          </Link>
        </div>

        <button
          className={`lg:hidden ${scrolled ? 'text-[#2B2B2B]' : 'text-white'}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-[#F8F6F2] border-b border-[#DDD4C6] shadow-xl"
          >
            <ul className="container-luxury flex flex-col gap-1 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block py-2.5 text-base font-bold text-[#2B2B2B] hover:text-[#A87444] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/book"
                  className="btn-royal-gold w-full text-xs text-center block py-3 font-bold"
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
