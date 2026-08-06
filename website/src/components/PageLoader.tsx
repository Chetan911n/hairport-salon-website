'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if loader has already run in current session
    const hasLoaded = sessionStorage.getItem('hairport_intro_loaded');
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hairport_intro_loaded', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0C0C0C] text-white"
        >
          {/* Logo Fade In */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <span className="font-display text-3xl font-bold tracking-[0.2em] text-[#FACC15] sm:text-4xl">
              THE HAIRPORT
            </span>
            <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.3em] text-[#F8FAFC]">
              Nashik Road • Master Barber
            </span>
          </motion.div>

          {/* Thin Gold Line Growing Across */}
          <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
              className="h-full w-full bg-[#FACC15] shadow-[0_0_12px_#FACC15]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
