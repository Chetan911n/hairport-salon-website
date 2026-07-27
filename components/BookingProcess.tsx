'use client';

import Link from 'next/link';
import Reveal from './Reveal';
import { Scissors, UserCheck, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Choose Service',
    description: 'Select your precision cut, beard sculpt, hair colour, or skin therapy from our menu.',
    icon: Scissors
  },
  {
    step: '02',
    title: 'Select Barber',
    description: 'Pick your preferred master barber or choose any available specialist.',
    icon: UserCheck
  },
  {
    step: '03',
    title: 'Pick Date & Time',
    description: 'Choose a convenient unhurried time slot that suits your daily schedule.',
    icon: Calendar
  },
  {
    step: '04',
    title: 'Confirm Appointment',
    description: 'Receive instant confirmation via SMS & WhatsApp with location pin.',
    icon: CheckCircle2
  }
];

export default function BookingProcess() {
  return (
    <section className="border-t border-border bg-bg py-24 md:py-36">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Seamless Reservation</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
            Four Steps To Your <span className="gold-text italic">Signature Look.</span>
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg">
            Reserve your chair online in under 60 seconds with instant booking confirmation.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.step} delay={index * 0.1}>
                <div className="relative h-full flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-gold">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl font-bold text-gold/40">
                        {s.step}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/30">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h3 className="mt-6 font-display text-xl text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4} className="mt-14 text-center">
          <Link href="/book" className="btn-royal-gold inline-flex items-center gap-2">
            Start Booking Now <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
