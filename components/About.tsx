'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';

const highlights = [
  'Senior Barbers Trained by Celebrity Stylist Alim Hakim',
  'Unhurried, Private Consultation & Custom Styling',
  'Warm & Cold Water Hair Wash Available Everyday',
  'Separate Sections for Men & Women with Full Privacy'
];

const easeLuxury = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 bg-[#0F172A] text-white overflow-hidden" id="about">
      <div className="container-luxury">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Image 3 Large Editorial Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: easeLuxury }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden border border-[#FACC15]/40 shadow-2xl">
              <Image
                src="/images/image3_about_team_bg.jpg"
                alt="THE HAIRPORT Chesterfield Lounge Interior"
                fill
                className="object-cover object-center opacity-100 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeLuxury }}
              className="absolute -bottom-8 -right-4 sm:right-6 max-w-xs"
            >
              <div className="rounded-2xl border border-[#FACC15] bg-black/95 p-5 shadow-2xl backdrop-blur-md flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FACC15] text-[#0F172A]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-[#FACC15]">Alim Hakim Trained</h4>
                  <p className="text-xs text-[#F8FAFC] font-medium">Senior Barbers with 10+ Years Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Heritage Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: easeLuxury }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl border border-[#FACC15]/40 bg-[#1E293B]/90 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
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
                <Link href="/about" className="btn-royal-gold px-8 py-3.5 shadow-xl font-bold transition-all hover:scale-[1.02]">
                  Read Our Full Story
                </Link>
                <Link href="/book" className="btn-royal-outline px-8 py-3.5 font-bold transition-all hover:scale-[1.02]">
                  Book A Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
