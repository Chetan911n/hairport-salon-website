'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

// Placeholder editorial photography (Unsplash) — replace with real,
// licensed Hairport salon and work photography before launch.
const images = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80', alt: 'Placeholder — stylist finishing a haircut in a modern salon' },
  { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80', alt: 'Placeholder — hair colour application close-up' },
  { src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80', alt: 'Placeholder — salon interior with modern styling chairs' },
  { src: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?w=1200&q=80', alt: 'Placeholder — bridal hairstyling detail' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80', alt: 'Placeholder — hair spa treatment' },
  { src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c1?w=1200&q=80', alt: 'Placeholder — salon tools and styling products' },
  { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&q=80', alt: 'Placeholder — finished haircut styling result' },
  { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=80', alt: 'Placeholder — skin facial treatment' },
];

export default function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <Reveal key={img.src} delay={(i % 4) * 0.06} className="mb-5 break-inside-avoid">
            <button
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={1000}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && images[openIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 p-6"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpenIndex(null)}
          >
            <button
              className="absolute right-6 top-6 text-white/70 hover:text-gold"
              onClick={() => setOpenIndex(null)}
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-4 text-white/70 hover:text-gold md:left-10"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
            <motion.img
              key={openIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 text-white/70 hover:text-gold md:right-10"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
              }}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
