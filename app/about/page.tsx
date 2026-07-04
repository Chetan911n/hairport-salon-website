import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story, philosophy and standards behind Hairport, a premium unisex salon in Nashik.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Hairport"
        title="A salon built on"
        goldWord="craft."
        description="Founded in Nashik, Hairport brings a considered, modern approach to hair and beauty — precision over trend, and attention over speed."
      />

      <section className="py-24 md:py-32">
        <div className="container-luxury grid gap-16 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl text-white">Our philosophy</h2>
            <p className="mt-6 leading-relaxed text-muted">
              Every guest arrives with a different hair texture, skin type
              and idea of what &ldquo;great&rdquo; looks like on them. Our stylists
              begin with a real consultation, not a script — understanding
              face shape, lifestyle and hair history before a single cut
              is made.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              That same care carries through colour, spa and bridal
              services: fewer shortcuts, more consideration, and products
              chosen for long-term hair and skin health rather than a
              quick finish.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-display text-3xl text-white">Standards we hold</h2>
            <ul className="mt-6 space-y-4 text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Hygiene-first tools and station practices for every guest.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Unhurried appointment scheduling — one guest, full attention.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Ongoing technique training across cutting, colour and skin.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Honest guidance — we recommend what suits you, not the
                most expensive option.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
