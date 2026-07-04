import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Skin',
  description: "Facials and skin therapies designed around your skin, not a menu.",
};

const items = [
  { name: "Signature Facial", desc: "A tailored facial for your skin's current needs." },
  { name: "Brightening Treatment", desc: "A treatment focused on tone and radiance." },
  { name: "De-Tan & Cleanup", desc: "A quick refresh treatment for everyday skin maintenance." }
];

export default function SkinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services / Skin"
        title="Skin"
        goldWord=""
        description="Facials and skin therapies designed around your skin, not a menu."
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
