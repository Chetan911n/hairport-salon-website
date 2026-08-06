'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ParallaxBackgroundProps {
  src: string;
  alt: string;
  opacity?: number;
  priority?: boolean;
}

export default function ParallaxBackground({
  src,
  alt,
  opacity = 100,
  priority = false
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // 5% to 10% gentle parallax movement
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ['0%', '0%'] : ['-5%', '5%']);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden">
      <motion.div style={{ y }} className="relative h-[115%] w-full -top-[7.5%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-center"
          style={{ opacity: opacity / 100 }}
        />
      </motion.div>
    </div>
  );
}
