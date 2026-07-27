'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import { Star, Scissors, Award } from 'lucide-react';

export const teamMembers = [
  {
    name: 'Vikram Sharma',
    role: 'Master Barber & Founder',
    experience: '12+ Years Exp',
    speciality: 'Precision Fades & Beard Sculpting',
    rating: '4.9★',
    image: '/hero.jpg'
  },
  {
    name: 'Rahul Verma',
    role: 'Senior Grooming Specialist',
    experience: '9+ Years Exp',
    speciality: 'Royal Hot Towel Shave & Facials',
    rating: '4.8★',
    image: '/about.jpg'
  },
  {
    name: 'Amit Patil',
    role: 'Color & Texture Specialist',
    experience: '8+ Years Exp',
    speciality: 'Global Hair Colour & Restorative Spa',
    rating: '4.9★',
    image: '/hero.jpg'
  }
];

export default function Team() {
  return (
    <section className="border-t border-border bg-bg py-24 md:py-36" id="team">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Meet Our Artisans</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
            Master Barbers Behind <span className="gold-text italic">The Chair.</span>
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg">
            Our team brings years of dedicated craftsmanship, attention to detail, and passion to every cut and trim.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2.5 hover:border-gold/60 hover:shadow-gold">
                {/* Image Container with 3D Zoom Effect */}
                <div className="relative h-72 w-full overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-gold/40 bg-bg/80 px-3 py-1 text-xs font-semibold text-gold backdrop-blur-md">
                    <Star size={12} className="fill-gold" />
                    <span>{member.rating}</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-bg/70 px-3 py-1 text-xs text-white backdrop-blur-md">
                    <Award size={13} className="text-gold" />
                    <span>{member.experience}</span>
                  </div>
                </div>

                {/* Barber Info */}
                <div className="mt-6">
                  <h3 className="font-display text-2xl text-white group-hover:text-gold transition-colors">
                    {member.name}
                  </h3>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-gold">
                    {member.role}
                  </span>
                  <p className="mt-3 text-xs text-muted leading-relaxed">
                    <strong className="text-white font-medium">Speciality:</strong> {member.speciality}
                  </p>

                  <div className="mt-6 border-t border-border/50 pt-4">
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
