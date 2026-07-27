'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Certified Master Barbers & Grooming Specialists',
  'Unhurried, Private Consultation & Custom Styling',
  'Premium Imported Hair & Beard Care Formulations',
  'Strict Hygiene Standards & Sterilized Tools'
];

export default function About() {
  return (
    <section className="border-t border-border bg-surface/40 py-24 md:py-36" id="about">
      <div className="container-luxury">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Overlapping Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-card">
                <Image
                  src="/hero.jpg"
                  alt="Hairport Barber Crafting Precision Haircut"
                  width={600}
                  height={700}
                  className="w-full object-cover h-[450px] md:h-[550px] transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
              </div>
            </Reveal>

            <Reveal delay={0.2} className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 max-w-[280px]">
              <div className="rounded-2xl overflow-hidden border-2 border-gold bg-bg p-2 shadow-gold">
                <Image
                  src="/about.jpg"
                  alt="Luxury Barbershop Interior"
                  width={300}
                  height={350}
                  className="w-full object-cover h-[180px] md:h-[220px] rounded-xl"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">About Hairport</span>
              <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
                Crafting timeless styles with <span className="gold-text italic">modern precision.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg font-light">
                Established with a vision for refined men’s and unisex grooming, Hairport brings a signature blend of traditional barbering mastery and modern luxury aesthetic to Nashik Road.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs md:text-sm text-white">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10">
                <Link href="/about" className="btn-royal-gold inline-flex items-center gap-2 text-xs">
                  Learn More Story <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
