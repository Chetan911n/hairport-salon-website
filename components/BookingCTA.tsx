import Link from 'next/link';
import Reveal from './Reveal';

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-[#DDD4C6] bg-[#F8F6F2] py-24 md:py-32">
      <div className="container-luxury relative">
        <Reveal>
          <div className="rounded-3xl border border-[#C5A059]/40 bg-[#2B2B2B] p-10 md:p-16 text-center shadow-2xl space-y-6">
            <span className="eyebrow text-[#E2C067]">Reserve Your Chair</span>
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight text-[#F8F6F2] font-bold md:text-5xl">
              Your next great look starts with a <span className="text-[#E2C067] italic font-serif">booking.</span>
            </h2>
            <div className="pt-4">
              <Link
                href="/book"
                className="btn-royal-gold px-8 py-3.5 shadow-xl font-bold"
              >
                Reserve Barbershop Service
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
