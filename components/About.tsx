import Image from 'next/image';
import Reveal from './Reveal';

export default function About() {
  return (
    <section className="relative border-t border-border bg-surface/70 backdrop-blur-md py-28 md:py-40" id="about">
      <div className="container-luxury grid gap-14 lg:grid-cols-12 lg:gap-20 items-center">
        
        {/* Left Column: Brand Story */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow">The House of Hairport</span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
              Craft, patience,
              <br />
              and a <span className="gold-text italic">quiet luxury.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">
              Hairport is Nashik’s premier unisex hair and beauty destination, built around absolute precision and unhurried attention. We treat grooming as a high-end craft, dedicating time to perfect every cut, global shade, and bridal look.
            </p>
            <p className="mt-6 text-base leading-relaxed text-gold/90 md:text-lg font-medium font-serif italic">
              &ldquo;Where Precision Meets Premium Luxury&rdquo; — our tagline is our vow to you.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Our master stylists work across advanced cutting, rich Igora colours, restorative deep spas, skin treatments, and customized bridal grooming in a calm, ultra-modern sanctuary.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="font-display text-3xl text-gold">2018</p>
                <p className="mt-1 text-sm text-muted">Est. in Nashik</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">4.4★</p>
                <p className="mt-1 text-sm text-muted">189+ Reviews, Nashik Road</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: overlapping luxury image grid */}
        <div className="lg:col-span-6 relative mt-10 lg:mt-0 flex justify-center w-full">
          <Reveal delay={0.3} className="relative w-full max-w-[450px] aspect-[4/5] sm:aspect-[3/4]">
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-[80%] h-[80%] overflow-hidden rounded-2xl border border-border shadow-2xl">
              <Image 
                src="/images/hero.jpg"
                alt="Luxury salon styling session at Hairport"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>
            {/* Overlapping Detail Image */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] overflow-hidden rounded-2xl border border-gold/30 shadow-2xl shadow-gold/10">
              <Image 
                src="/images/about.jpg"
                alt="Gold hairdressing tools resting on black marble"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
