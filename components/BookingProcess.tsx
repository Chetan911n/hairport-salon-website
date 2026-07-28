'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, UserCheck, Scissors, Sparkles } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';

const steps = [
  {
    number: '01',
    title: 'Select Your Service & Master Barber',
    description: 'Choose your desired precision haircut, beard sculpt, skin cleanup, or hair spa therapy with Prashant Sir or team.',
    icon: Scissors
  },
  {
    number: '02',
    title: 'Pick Preferred Date & Time Slot',
    description: 'Select your preferred unhurried appointment slot with instant WhatsApp booking confirmation.',
    icon: Calendar
  },
  {
    number: '03',
    title: 'Private Barber Consultation',
    description: 'Arrive at our Nashik Road salon, enjoy a complimentary beverage, and consult on your face shape & style goals.',
    icon: UserCheck
  },
  {
    number: '04',
    title: 'Experience Master Grooming',
    description: 'Relax in our Chesterfield leather lounge, enjoy warm water hair wash, and leave looking sharp & confident.',
    icon: Sparkles
  }
];

const easeLuxury = [0.22, 1, 0.36, 1];

export default function BookingProcess() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 text-white overflow-hidden" id="booking-process">
      {/* 100% Bright Visible Parallax Image 4 Background */}
      <ParallaxBackground
        src="/images/image4_booking_reviews_feed_bg.jpg"
        alt="THE HAIRPORT Image 4 Booking Process Background"
        opacity={100}
      />

      <div className="relative z-10 container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.0, ease: easeLuxury }}
          className="text-center max-w-2xl mx-auto bg-black/80 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md mb-16"
        >
          <span className="eyebrow text-[#FACC15]">Seamless Experience</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold drop-shadow-lg">
            How Your Appointment <span className="text-[#FACC15] italic font-serif">Unfolds.</span>
          </h2>
          <p className="mt-4 text-[#F8FAFC] text-base md:text-lg font-medium drop-shadow-md">
            Four simple steps from booking to leaving our salon chair with a master cut.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: easeLuxury }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#FACC15]/40 bg-black/85 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#FACC15] hover:shadow-[0_10px_30px_rgba(250,204,21,0.2)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-[#FACC15]">
                      {step.number}
                    </span>
                    
                    {/* Circle Scale Animation */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.12 + 0.2, ease: easeLuxury }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-[#FACC15] border border-[#FACC15]/40 group-hover:scale-110 transition-transform"
                    >
                      <Icon size={20} />
                    </motion.div>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-white group-hover:text-[#FACC15] transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#F8FAFC] font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#FACC15]/30 pt-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#FACC15] font-bold">
                    Step {step.number} of 04
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeLuxury }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-[#FACC15] bg-black/90 px-8 py-5 shadow-2xl backdrop-blur-md">
            <span className="text-sm font-bold text-[#F8FAFC]">
              Ready for your master haircut experience?
            </span>
            <Link href="/book" className="btn-royal-gold px-6 py-2.5 text-xs font-bold shadow-xl transition-all hover:scale-105">
              Book Online Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
