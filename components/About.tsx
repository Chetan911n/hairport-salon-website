import Reveal from './Reveal';

export default function About() {
  return (
    <section className="relative border-t border-border bg-surface py-28 md:py-40" id="about">
      <div className="container-luxury grid gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <span className="eyebrow">The House of Hairport</span>
          <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
            Craft, patience,
            <br />
            and a <span className="gold-text italic">quiet luxury.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Hairport is a unisex hair and beauty destination in Nashik, built
            around precision and unhurried attention. Every visit is treated
            as a considered piece of work rather than a quick service —
            from a first consultation through to the final finish.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            Our stylists work across cutting, colour, restorative spa
            treatments, skin therapies and bridal artistry, using
            techniques suited to Indian hair and skin, in a calm, modern
            setting.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <p className="font-display text-3xl text-gold">2018</p>
              <p className="mt-1 text-sm text-muted">Est. in Nashik</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">4.4★</p>
              <p className="mt-1 text-sm text-muted">Guest rating, Nashik Road</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
