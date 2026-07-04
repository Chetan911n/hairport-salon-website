import Link from 'next/link';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { branches, contact } from '@/data/site';

const verifiedBranch = branches.find((b) => b.status === 'verified')!;

const explore = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/branches', label: 'Branches' },
];

const legal = [
  { href: '/faq', label: 'FAQ' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg pb-10 pt-20">
      <div className="container-luxury grid gap-12 md:grid-cols-4">
        <div>
          <Link href="/" className="font-display text-xl tracking-widest2 text-white">
            HAIR<span className="gold-text">PORT</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            A premium unisex hair and beauty salon in Nashik, Maharashtra.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              aria-label="Instagram (placeholder — link unverified)"
              className="rounded-full border border-border p-2.5 text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram size={17} />
            </a>
            <a
              href="#"
              aria-label="Facebook (placeholder — link unverified)"
              className="rounded-full border border-border p-2.5 text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook size={17} />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3">
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Legal</p>
          <ul className="mt-5 space-y-3">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Visit / Contact</p>
          <ul className="mt-5 space-y-4 text-sm text-muted">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{verifiedBranch.address}, {verifiedBranch.pincode}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{contact.phonePlaceholder} <em className="text-xs not-italic opacity-60">(placeholder)</em></span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{contact.emailPlaceholder} <em className="text-xs not-italic opacity-60">(placeholder)</em></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-luxury mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted/70 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Hairport, Nashik. All rights reserved.</p>
        <p>Built with care. Contact details marked &ldquo;placeholder&rdquo; require verification before launch.</p>
      </div>
    </footer>
  );
}
