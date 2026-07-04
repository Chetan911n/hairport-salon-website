import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import BookingCTA from '@/components/BookingCTA';

export const metadata: Metadata = {
  title: 'Hair',
  description: "Precision cutting and styling for every texture, tailored to face, lifestyle and occasion.",
};

const items = [
  { name: "Signature Cut & Finish", desc: "A considered cut, shaped to face and lifestyle, finished by hand." },
  { name: "Blow-Dry & Styling", desc: "Salon-finish styling for everyday wear or a specific occasion." },
  { name: "Texture & Smoothing", desc: "Treatments to manage frizz and texture, matched to your hair type." }
];

export default function HairPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services / Hair"
        title="Hair"
        goldWord=""
        description="Precision cutting and styling for every texture, tailored to face, lifestyle and occasion."
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
