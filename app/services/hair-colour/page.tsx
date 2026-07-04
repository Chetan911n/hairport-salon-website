import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Hair Colour',
  description: "Global colour, balayage and correction using considered, low-damage techniques.",
};

const items = [
  { name: "Global Colour", desc: "Full-head colour in a shade built around your skin tone." },
  { name: "Balayage & Highlights", desc: "Hand-painted dimension for a natural grow-out." },
  { name: "Colour Correction", desc: "Careful correction for colour that hasn't gone to plan elsewhere." }
];

export default function HairColourPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services / Hair Colour"
        title="Hair"
        goldWord="Colour"
        description="Global colour, balayage and correction using considered, low-damage techniques."
      />

      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <p className="mb-10 max-w-xl text-sm text-muted">
            Treatment names below are illustrative examples of what this
            category typically covers. Please confirm the exact, current
            menu and duration with the salon directly.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold">
                  <h2 className="font-display text-xl text-white">{item.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
