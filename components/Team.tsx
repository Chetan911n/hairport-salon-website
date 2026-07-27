'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import { Star, Award } from 'lucide-react';

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

export default function Team() {
  return (
    <section className="border-t border-[#DDD4C6] bg-[#F8F6F2] py-24 md:py-36" id="team">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-[#A87444]">Meet Our Artisans</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl font-bold">
            Master Hairstylists Behind <span className="text-[#A87444] italic font-serif">The Chair.</span>
          </h2>
          <p className="mt-4 text-[#2B2B2B] text-base md:text-lg font-medium">
            Our expert team brings years of dedicated salon mastery, attention to detail, and precision to every cut and trim.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-[#C5A059]/40 bg-[#2B2B2B] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#E2C067]">
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden rounded-xl border border-[#C5A059]/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-[#C5A059] bg-[#0A1628]/90 px-3 py-1 text-xs font-bold text-[#E2C067] shadow-lg backdrop-blur-md">
                    <Star size={12} className="fill-[#E2C067]" />
                    <span>{member.rating}</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-[#C5A059] bg-[#0A1628]/90 px-3 py-1 text-xs font-bold text-[#F8F6F2] shadow-lg backdrop-blur-md">
                    <Award size={13} className="text-[#E2C067]" />
                    <span>{member.experience}</span>
                  </div>
                </div>

                {/* Barber Info */}
                <div className="mt-6">
                  <h3 className="font-display text-2xl font-bold text-[#F8F6F2] group-hover:text-[#E2C067] transition-colors">
                    {member.name}
                  </h3>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-[#E2C067]">
                    {member.role}
                  </span>
                  <p className="mt-3 text-xs text-[#F4EFE6]/80 leading-relaxed font-medium">
                    <strong className="text-[#F8F6F2] font-bold">Speciality:</strong> {member.speciality}
                  </p>

                  <div className="mt-6 border-t border-[#C5A059]/30 pt-4">
                    <Link
                      href="/book"
                      className="btn-royal-gold w-full text-xs py-2.5 font-bold shadow-xl"
                    >
                      Book With {member.name.split(' ')[0]}
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
