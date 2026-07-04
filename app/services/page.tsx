import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Scissors, Palette, Droplets, Sparkle, Gem } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import BookingCTA from '@/components/BookingCTA';
import { serviceCategories } from '@/data/site';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Hair, colour, spa, skin and bridal services at Hairport, Nashik.',
};

const icons: Record<string, React.ComponentType<any>> = {
  hair: Scissors,
  'hair-colour': Palette,
  'hair-spa': Droplets,
  skin: Sparkle,
  bridal: Gem,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Every service, one"
        goldWord="standard."
        description="Explore each discipline below. Exact treatment names and pricing shown across the site are illustrative — please confirm the live menu directly with the salon."
      />

      <section className="py-24 md:py-32">
        <div className="container-luxury grid gap-5 md:grid-cols-2">
          {serviceCategories.map((s, i) => {
            const Icon = icons[s.slug] ?? Scissors;
            return (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
                >
                  <div className="flex items-center gap-5">
                    <Icon size={26} className="text-gold" />
                    <div>
                      <h2 className="font-display text-2xl text-white">{s.title}</h2>
                      <p className="mt-1 max-w-sm text-sm text-muted">{s.description}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
