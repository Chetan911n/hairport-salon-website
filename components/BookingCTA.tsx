import Link from 'next/link';
import Reveal from './Reveal';

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface py-28 md:py-36">
      <div className="absolute inset-0 bg-gold-glow opacity-40" aria-hidden="true" />
      <div className="container-luxury relative text-center">
        <Reveal>
          <span className="eyebrow">Reserve Your Chair</span>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-tight text-white md:text-6xl">
            Your next great look starts with a <span className="gold-text italic">booking.</span>
          </h2>
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-block rounded-full bg-gold px-10 py-4 text-sm font-medium tracking-wide text-bg transition-all hover:shadow-gold hover:brightness-110"
            >
              Book Appointment
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
