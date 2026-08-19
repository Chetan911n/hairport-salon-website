'use client';

import PageHeader from '@/components/PageHeader';
import BookingCTA from '@/components/BookingCTA';
import { motion } from 'framer-motion';
import { Palette, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const colourSwatches = [
  {
    name: 'Espresso Dark Brown',
    tone: 'Cool Natural',
    description: 'Rich deep brown shade designed to seamlessly cover grey hair while enhancing natural shine.',
    code: '1.0 / Dark Neutral',
    swatchColor: 'bg-[#1C1613]'
  },
  {
    name: 'Royal Velvet Black',
    tone: 'Deep Jet',
    description: 'Ammonia-free jet black coverage offering intense luster and scalp conditioning.',
    code: '2.0 / Intense Jet',
    swatchColor: 'bg-[#0F0F11]'
  },
  {
    name: 'Warm Mocha Chestnut',
    tone: 'Warm Golden',
    description: 'Warm golden chestnut accents perfect for textured haircuts & sun-lit dimension.',
    code: '4.35 / Warm Bronze',
    swatchColor: 'bg-[#3D2314]'
  },
  {
    name: 'Beard Natural Blend Colour',
    tone: 'Subtle Matte',
    description: 'Fast 10-minute targeted beard grey blending formula maintaining natural salt & pepper balance.',
    code: 'Beard Blend',
    swatchColor: 'bg-[#2B231F]'
  }
];

const easeLuxury = [0.22, 1, 0.36, 1];

export default function ColourGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Colour Artistry"
        title="Ammonia-Free Hair &amp;"
        italicTitle="Beard Colouring."
        description="Discover custom ammonia-free hair and beard colouring formulas designed for natural shade match, rich shine, and zero scalp irritation."
        imageSrc="/images/image1_hero_stats_bg.jpg"
        imageAlt="THE HAIRPORT Colour Guide Background"
        breadcrumbs={[
          { label: 'Home', href: '/' }
        ]}
      />

      <section className="py-24 bg-[#0C0C0C] text-white">
        <div className="container-luxury">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeLuxury }}
            className="text-center max-w-2xl mx-auto mb-16 bg-[#1E293B]/80 p-8 rounded-3xl border border-[#FACC15]/40 backdrop-blur-md"
          >
            <span className="eyebrow text-[#FACC15]">Signature Formula Swatches</span>
            <h2 className="mt-4 font-display text-4xl font-bold">
              Precision Shades for <span className="text-[#FACC15] italic font-serif">Every Gentleman.</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#F8FAFC]">
              Our senior colourists evaluate your scalp health, hair porosity, and skin undertone before applying custom blended formulas.
            </p>
          </motion.div>

          {/* Swatches Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {colourSwatches.map((swatch, i) => (
              <motion.div
                key={swatch.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeLuxury }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl border border-[#FACC15]/40 bg-[#1E293B]/80 p-6 shadow-2xl backdrop-blur-md transition-all hover:border-[#FACC15]"
              >
                <div className={`h-24 w-full rounded-xl ${swatch.swatchColor} border border-[#FACC15]/30 flex items-end justify-between p-3 shadow-inner`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-[#FACC15] bg-black/80 px-2 py-0.5 rounded">
                    {swatch.code}
                  </span>
                  <Palette size={18} className="text-[#FACC15]" />
                </div>

                <div className="mt-6">
                  <span className="text-[10px] uppercase font-bold text-[#FACC15]">
                    {swatch.tone}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-white group-hover:text-[#FACC15] transition-colors">
                    {swatch.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#F8FAFC]">
                    {swatch.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#FACC15]/30 pt-4">
                  <Link
                    href="/book"
                    className="btn-royal-gold w-full text-xs py-2.5 font-bold shadow-xl block text-center"
                  >
                    Consult Colourist
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <BookingCTA />
    </>
  );
}
