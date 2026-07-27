import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgba(7, 17, 30, 0.65)',
        surface: 'rgba(13, 27, 46, 0.85)',
        card: 'rgba(20, 38, 62, 0.65)',
        royal: {
          navy: '#07111E',
          deep: '#0F223D',
          crimson: '#7A1C2E'
        },
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#E2C067',
          deep: '#B8860B'
        },
        border: 'rgba(212, 175, 55, 0.22)',
        muted: '#A2B5CD'
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif']
      },
      letterSpacing: {
        widest2: '0.35em'
      },
      backgroundImage: {
        'gold-glow': 'radial-gradient(circle at 50% 50%, rgba(200,165,82,0.18), transparent 70%)',
        'grain': "url('/images/grain.png')"
      },
      boxShadow: {
        gold: '0 0 40px rgba(200,165,82,0.25)',
        card: '0 8px 40px rgba(0,0,0,0.5)'
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards',
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
