'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';

const easeLuxury = [0.22, 1, 0.36, 1];

export default function BookingCTA() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 text-white overflow-hidden" id="booking-cta">
      {/* Full-Width Cinematic Next.js Image with object-cover (No CSS background-repeat) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/image5_products_location_cta_footer_bg.jpg"
          alt="THE HAIRPORT Image 5 Final CTA Background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 container-luxury">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.0, ease: easeLuxury }}
          className="text-center max-w-3xl mx-auto bg-black/85 p-10 sm:p-14 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md shadow-2xl"
        >
          <span className="eyebrow text-[#FACC15]">Reserve Your Chair</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-white font-bold drop-shadow-lg">
            Experience Unhurried <span className="text-[#FACC15] italic font-serif">Salon Luxury.</span>
          </h2>
          <p className="mt-6 text-[#F8FAFC] text-base md:text-lg font-medium leading-relaxed drop-shadow-md max-w-xl mx-auto">
            Book your appointment with Prashant Sir &amp; team at Nashik Road. Walk out feeling refreshed, sharp, and confident.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 10px rgba(250,204,21,0.2)',
                  '0 0 25px rgba(250,204,21,0.5)',
                  '0 0 10px rgba(250,204,21,0.2)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="rounded-xl overflow-hidden"
            >
              <Link
                href="/book"
                className="btn-royal-gold px-8 py-4 text-sm font-bold shadow-2xl flex items-center gap-2 transition-all hover:scale-105"
              >
                <Calendar size={18} /> Book Appointment Online
              </Link>
            </motion.div>

            <a
              href="tel:+919822445566"
              className="btn-royal-outline px-8 py-4 text-sm font-bold shadow-xl flex items-center gap-2 transition-all hover:scale-105"
            >
              <Phone size={18} /> Call +91 98224 45566
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
