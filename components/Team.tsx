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
          <span className="eyebrow">Meet Our Artisans</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#2B2B2B] md:text-5xl">
            Master Hairstylists Behind <span className="text-[#A87444] italic font-serif">The Chair.</span>
          </h2>
          <p className="mt-4 text-[#6E6A63] text-base md:text-lg">
            Our expert team brings years of dedicated salon mastery, attention to detail, and precision to every cut and trim.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-[#DDD4C6] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-[#A87444]">
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-[#DDD4C6] bg-white/90 px-3 py-1 text-xs font-semibold text-[#A87444] shadow-subtle backdrop-blur-md">
                    <Star size={12} className="fill-[#A87444]" />
                    <span>{member.rating}</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-[#DDD4C6] bg-white/90 px-3 py-1 text-xs text-[#2B2B2B] shadow-subtle backdrop-blur-md">
                    <Award size={13} className="text-[#A87444]" />
                    <span>{member.experience}</span>
                  </div>
                </div>

                {/* Barber Info */}
                <div className="mt-6">
                  <h3 className="font-display text-2xl text-[#2B2B2B] group-hover:text-[#A87444] transition-colors">
                    {member.name}
                  </h3>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-[#A87444]">
                    {member.role}
                  </span>
                  <p className="mt-3 text-xs text-[#6E6A63] leading-relaxed">
                    <strong className="text-[#2B2B2B] font-medium">Speciality:</strong> {member.speciality}
                  </p>

                  <div className="mt-6 border-t border-[#DDD4C6]/60 pt-4">
                    <Link
                      href="/book"
                      className="btn-royal-gold w-full text-xs py-2.5"
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
