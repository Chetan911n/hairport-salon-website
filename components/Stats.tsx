'use client';

import Reveal from './Reveal';
import { Award, Users, Star, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
    description: 'Precision haircutting & salon craft'
  },
  {
    icon: Users,
    value: '25,000+',
    label: 'Happy Clients',
    description: 'Trusted in Nashik Road since 2018'
  },
  {
    icon: Star,
    value: '4.5★',
    label: 'Google Rating',
    description: 'Based on 181+ verified Google reviews'
  },
  {
    icon: MapPin,
    value: '1 Prime',
    label: 'Nashik Road Location',
    description: 'Shop 3-5 Laxman Villa, Nr Taran Talav Rd'
  }
];

export default function Stats() {
  return (
    <section className="border-y border-border bg-surface/60 py-16 backdrop-blur-md">
      <div className="container-luxury">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 hover:bg-card/40 border border-transparent hover:border-gold/20">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/30">
                    <Icon size={22} />
                  </div>
                  <span className="font-display text-4xl font-bold text-white md:text-5xl">
                    <span className="gold-text">{stat.value}</span>
                  </span>
                  <span className="mt-2 text-sm font-semibold uppercase tracking-wider text-white">
                    {stat.label}
                  </span>
                  <span className="mt-1 text-xs text-muted">
                    {stat.description}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
