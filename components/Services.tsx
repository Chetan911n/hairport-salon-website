import Link from 'next/link';
import { ArrowUpRight, Scissors, Palette, Droplets, Sparkle, Gem } from 'lucide-react';
import Reveal from './Reveal';
import { serviceCategories } from '@/data/site';

const icons: Record<string, React.ComponentType<any>> = {
  hair: Scissors,
  'hair-colour': Palette,
  'hair-spa': Droplets,
  skin: Sparkle,
  bridal: Gem,
};

export default function Services() {
  return (
    <section className="border-t border-border bg-bg py-28 md:py-40" id="services">
      <div className="container-luxury">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Services</span>
          <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
            Five disciplines,
            <br />
            <span className="gold-text italic">one standard.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service, i) => {
            const Icon = icons[service.slug] ?? Scissors;
            return (
              <Reveal key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-gold"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute inset-0 bg-gold-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <Icon size={28} className="text-gold" />
                    <h3 className="mt-6 font-display text-2xl text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Discover <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}

          <Reveal delay={serviceCategories.length * 0.08}>
            <Link
              href="/services"
              className="flex h-full min-h-[220px] flex-col items-start justify-between rounded-2xl border border-gold/30 bg-transparent p-8 transition-all duration-500 hover:bg-gold/5"
            >
              <span className="eyebrow">All Services</span>
              <span className="font-display text-2xl text-white">
                View the full menu <ArrowUpRight className="ml-1 inline text-gold" size={20} />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
