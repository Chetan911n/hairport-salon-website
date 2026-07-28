'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';

export const teamMembers = [
  {
    name: 'Prashant Sir',
    role: 'Senior Master Hairstylist',
    experience: '12+ Years Exp',
    speciality: 'Precision Haircuts & Style Architecture (Alim Hakim Trained)',
    rating: '4.9★',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Tejas',
    role: 'Master Barber & Fade Specialist',
    experience: '9+ Years Exp',
    speciality: 'Skin Fades, Beard Sculpting & Custom Texture',
    rating: '4.9★',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Kunal',
    role: 'Grooming & Hair Spa Specialist',
    experience: '8+ Years Exp',
    speciality: 'Warm Water Hair Wash, Hair Spa & Beard Styling',
    rating: '4.8★',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80'
  }
];

const easeLuxury = [0.22, 1, 0.36, 1];

export default function Team() {
  return (
    <section className="relative border-t border-[#FACC15]/30 py-24 md:py-36 text-white overflow-hidden" id="team">
      {/* 100% Bright Visible Parallax Image 3 Background */}
      <ParallaxBackground
        src="/images/image3_about_team_bg.jpg"
        alt="THE HAIRPORT New Image 3 Barber Wall Background"
        opacity={100}
      />

      <div className="relative z-10 container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.0, ease: easeLuxury }}
          className="text-center max-w-2xl mx-auto bg-black/80 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md mb-12"
        >
          <span className="eyebrow text-[#FACC15]">Meet Our Artisans</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl font-bold drop-shadow-lg">
            Master Hairstylists Behind <span className="text-[#FACC15] italic font-serif">The Chair.</span>
          </h2>
          <p className="mt-4 text-[#F8FAFC] text-base md:text-lg font-medium drop-shadow-md">
            Our expert team brings years of dedicated salon mastery, attention to detail, and precision to every cut and trim.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: easeLuxury }}
              whileHover={{ y: -6, rotate: 1, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl border border-[#FACC15]/40 bg-black/85 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#FACC15] hover:shadow-[0_10px_30px_rgba(250,204,21,0.25)]"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden rounded-xl border border-[#FACC15]/30">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-[#FACC15] bg-black/95 px-3 py-1 text-xs font-bold text-[#FACC15] shadow-lg backdrop-blur-md">
                  <Star size={12} className="fill-[#FACC15]" />
                  <span>{member.rating}</span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-[#FACC15] bg-black/95 px-3 py-1 text-xs font-bold text-[#F8FAFC] shadow-lg backdrop-blur-md">
                  <Award size={13} className="text-[#FACC15]" />
                  <span>{member.experience}</span>
                </div>
              </div>

              {/* Barber Info */}
              <div className="mt-6">
                <h3 className="font-display text-2xl font-bold text-[#FACC15] group-hover:text-[#FDE047] transition-colors">
                  {member.name}
                </h3>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                  {member.role}
                </span>
                <p className="mt-3 text-xs text-[#F8FAFC] leading-relaxed font-medium">
                  <strong className="text-[#FACC15] font-bold">Speciality:</strong> {member.speciality}
                </p>

                <div className="mt-6 border-t border-[#FACC15]/30 pt-4">
                  <Link
                    href="/book"
                    className="btn-royal-gold w-full text-xs py-2.5 font-bold shadow-xl block text-center"
                  >
                    Book With {member.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
