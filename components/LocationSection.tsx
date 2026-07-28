'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';

const easeLuxury = [0.22, 1, 0.36, 1];

export default function LocationSection() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 text-white overflow-hidden" id="location">
      {/* 100% Bright Visible Parallax Image 5 Background */}
      <ParallaxBackground
        src="/images/image5_products_location_cta_footer_bg.jpg"
        alt="THE HAIRPORT Image 5 Location Background"
        opacity={100}
      />

      <div className="relative z-10 container-luxury">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Address Info slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: easeLuxury }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl border border-[#FACC15]/40 bg-black/85 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
              <span className="eyebrow text-[#FACC15]">Visit Our Salon</span>
              <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold">
                Flagship Salon in <span className="text-[#FACC15] italic font-serif">Nashik Road.</span>
              </h2>
              <p className="mt-4 text-[#F8FAFC] text-base leading-relaxed font-medium">
                Located in the heart of Nashik Road, our salon offers a quiet luxury sanctuary with full climate control, Chesterfield seating, and complimentary warm beverage.
              </p>

              <div className="mt-8 space-y-6 text-sm text-[#F8FAFC]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FACC15] text-[#0F172A]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FACC15]">Address</h4>
                    <p className="mt-0.5 text-xs text-[#F8FAFC]">
                      Shop No. 4, Ground Floor, Royal Regency, Near Datta Mandir Signal, Nashik Road, Nashik, Maharashtra 422101
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FACC15] text-[#0F172A]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FACC15]">Opening Hours</h4>
                    <p className="mt-0.5 text-xs text-[#F8FAFC]">
                      Monday – Sunday: 9:00 AM – 9:00 PM (Open Everyday)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FACC15] text-[#0F172A]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FACC15]">Direct Phone &amp; WhatsApp</h4>
                    <p className="mt-0.5 text-xs font-mono text-[#F8FAFC]">
                      +91 98224 45566
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-royal-gold px-6 py-3 text-xs font-bold shadow-xl inline-flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Navigation size={16} /> Get Google Maps Directions
                </a>
                <Link
                  href="/book"
                  className="btn-royal-outline px-6 py-3 text-xs font-bold text-center transition-all hover:scale-105"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Map Card slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: easeLuxury }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#FACC15]/40 bg-black/85 p-4 shadow-2xl backdrop-blur-md">
              <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-[#FACC15]/30">
                <Image
                  src="/images/hairport_nashik_map.jpg"
                  alt="THE HAIRPORT Nashik Road Map Location"
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Pop Pin Card Animation */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: easeLuxury }}
                  className="absolute bottom-6 left-6 right-6 rounded-xl border border-[#FACC15] bg-black/90 p-4 backdrop-blur-md"
                >
                  <span className="text-[10px] uppercase font-bold text-[#FACC15]">
                    Nashik Road Landmark
                  </span>
                  <h4 className="mt-0.5 font-display text-base font-bold text-white">
                    Near Datta Mandir Signal, Nashik Road
                  </h4>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
