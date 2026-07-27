'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { Sliders } from 'lucide-react';

export default function BeforeAfterGallery() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80', title: 'Royal Hot Towel Shave', tag: 'Razor Shave' },
    { src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80', title: 'Nashik Road Salon Interior', tag: 'Lounge' },
    { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80', title: 'Beard Contour & Edge Lines', tag: 'Beard Sculpting' },
    { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80', title: 'Classic Texture Styling', tag: 'Hair Craft' }
  ];

  return (
    <section className="border-t border-border bg-surface/40 py-24 md:py-36" id="gallery">
      <div className="container-luxury">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Transformation Showcase</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
            Before &amp; After <span className="gold-text italic">Artistry.</span>
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg">
            Slide the interactive comparison bar to reveal the precision and detail of our master barbers.
          </p>
        </Reveal>

        {/* Interactive Comparison Slider */}
        <Reveal delay={0.2} className="mt-14 max-w-4xl mx-auto">
          <div 
            className="relative h-[400px] md:h-[500px] w-full select-none overflow-hidden rounded-2xl border-2 border-gold/40 shadow-gold"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              handleMove(e.clientX, rect);
            }}
            onTouchMove={(e) => {
              if (e.touches[0]) {
                const rect = e.currentTarget.getBoundingClientRect();
                handleMove(e.touches[0].clientX, rect);
              }
            }}
          >
            {/* After Image (Full width background) */}
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80"
              alt="After Barber Transformation"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4 rounded-full border border-gold/50 bg-bg/80 px-4 py-1.5 text-xs font-bold text-gold backdrop-blur-md z-10">
              AFTER (Precision Cut &amp; Beard Trim)
            </div>

            {/* Before Image (Clipped width) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <Image
                src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80"
                alt="Before Barber Transformation"
                fill
                className="object-cover w-full max-w-none"
              />
              <div className="absolute top-4 left-4 rounded-full border border-white/40 bg-bg/80 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-md z-10">
                BEFORE (Initial Growth)
              </div>
            </div>

            {/* Slider Drag Line & Button */}
            <div 
              className="absolute top-0 bottom-0 z-20 w-1 bg-gold cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-bg text-gold shadow-gold">
                <Sliders size={18} />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Masonry Image Gallery */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card h-64">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold">
                    {img.tag}
                  </span>
                  <h4 className="font-display text-lg text-white">
                    {img.title}
                  </h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
