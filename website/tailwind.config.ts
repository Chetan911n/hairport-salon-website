import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        mainText: '#1F2937',
        surface: '#F8FAFC',
        card: '#0F172A', // Color Y: Deep Navy Blue
        navy: {
          DEFAULT: '#0F172A',
          dark: '#020617',
          light: '#1E293B'
        },
        yellow: {
          DEFAULT: '#FACC15', // Color X: Vibrant Yellow
          soft: '#FDE047',
          deep: '#EAB308'
        },
        gold: {
          DEFAULT: '#FACC15',
          soft: '#FDE047',
          deep: '#EAB308'
        },
        border: '#E2E8F0',
        muted: '#64748B',
        white: '#FFFFFF',
        charcoal: '#1F2937'
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif']
      },
      letterSpacing: {
        widest2: '0.35em'
      },
      boxShadow: {
        navy: '0 10px 30px rgba(15, 23, 42, 0.15)',
        card: '0 8px 30px rgba(15, 23, 42, 0.12)',
        subtle: '0 2px 12px rgba(15, 23, 42, 0.06)'
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 3s linear infinite'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    }
  },
  plugins: []
};

export default config;
