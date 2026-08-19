'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion || !ref.current) return;

    const el = ref.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    let raf: number;
    const animate = () => {
      curX += (x - curX) * 0.12;
      curY += (y - curY) * 0.12;
      el.style.transform = `translate3d(${curX - 200}px, ${curY - 200}px, 0)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 hidden md:block h-[400px] w-[400px] rounded-full opacity-[0.15] blur-[80px]"
      style={{ background: 'radial-gradient(circle, #C8A552, transparent 70%)' }}
    />
  );
}
