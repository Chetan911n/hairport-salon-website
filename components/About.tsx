'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import { CheckCircle2, Award } from 'lucide-react';

const highlights = [
  'Senior Barbers Trained by Celebrity Stylist Alim Hakim',
  'Unhurried, Private Consultation & Custom Styling',
  'Warm & Cold Water Hair Wash Available Everyday',
  'Separate Sections for Men & Women with Full Privacy'
];

export default function About() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 text-white overflow-hidden" id="about">
      {/* Image 3 Background for About Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image3_about_team_bg.jpg"
          alt="THE HAIRPORT Image 3 Barber Wall Background"
          fill
          priority
          className="object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 container-luxury">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Overlapping Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden border border-[#FACC15]/40 shadow-2xl bg-black/80 backdrop-blur-md">
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                  alt="THE HAIRPORT Salon Interior Nashik"
                  width={600}
                  height={450}
                  className="w-full h-[400px] object-cover opacity-90"
                />
              </div>
            </Reveal>

            {/* Overlapping Floating Badge */}
            <Reveal delay={0.2} className="absolute -bottom-8 -right-4 sm:right-6 max-w-xs">
              <div className="rounded-2xl border border-[#FACC15] bg-black/90 p-5 shadow-2xl backdrop-blur-md flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FACC15] text-[#0F172A]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-[#FACC15]">Alim Hakim Trained</h4>
                  <p className="text-xs text-[#F8FAFC] font-medium">Senior Barbers with 10+ Years Experience</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="rounded-3xl border border-[#FACC15]/40 bg-black/85 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
                <span className="eyebrow text-[#FACC15]">Our Barber Heritage</span>
                <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold">
                  15+ Years of Master Barber <span className="text-[#FACC15] italic font-serif">Craftsmanship.</span>
                </h2>
                <p className="mt-6 text-[#F8FAFC] text-base md:text-lg leading-relaxed font-medium">
                  At <strong className="text-[#FACC15]">THE HAIRPORT</strong>, we believe grooming is an art form. Founded by Prashant Sir, our salon brings celebrity-grade haircut precision, tailored skin fades, and traditional hot towel razor shaves to Nashik Road.
                </p>

                <ul className="mt-8 space-y-4 text-sm font-semibold text-[#F8FAFC]">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#FACC15] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link href="/about" className="btn-royal-gold px-8 py-3.5 shadow-xl font-bold">
                    Read Our Full Story
                  </Link>
                  <Link href="/book" className="btn-royal-outline px-8 py-3.5 font-bold">
                    Book A Service
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
