'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Certified Master Barbers & Prashant Sir Team',
  'Unhurried, Private Consultation & Custom Styling',
  'Warm & Cold Water Hair Wash Available Everyday',
  'Separate Sections for Men & Women with Full Privacy'
];

export default function About() {
  return (
    <section className="border-t border-[#DDD4C6] bg-[#EFE8DE]/50 py-24 md:py-36" id="about">
      <div className="container-luxury">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Overlapping Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden border border-[#DDD4C6] shadow-card bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                  alt="THE HAIRPORT Salon Craft"
                  width={600}
                  height={700}
                  className="w-full object-cover h-[450px] md:h-[550px] transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>

            <Reveal delay={0.2} className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 max-w-[280px]">
              <div className="rounded-2xl overflow-hidden border-2 border-[#A87444] bg-white p-2 shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80"
                  alt="THE HAIRPORT Salon Interior"
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
              <span className="eyebrow">About THE HAIRPORT</span>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl">
                Crafting timeless styles with <span className="text-[#A87444] italic font-serif">modern precision.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#6E6A63] md:text-lg font-light">
                Located near Datta Mandir stop in Laxman Villa, THE HAIRPORT brings a signature blend of Alim Hakim-trained barbering mastery, warm water washes, and separate sections to Nashik Road.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs md:text-sm text-[#2B2B2B]">
                    <CheckCircle2 size={16} className="text-[#A87444] shrink-0 mt-0.5" />
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
