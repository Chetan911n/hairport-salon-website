import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgba(10, 22, 40, 0.75)',
        surface: 'rgba(18, 34, 56, 0.92)',
        card: 'rgba(27, 38, 59, 0.75)',
        royal: {
          navy: '#0A1628',
          deep: '#122238',
          crimson: '#7A1C2E',
          gold: '#C5A059'
        },
        gold: {
          DEFAULT: '#C5A059',
          soft: '#E2C067',
          deep: '#B8860B'
        },
        border: 'rgba(197, 160, 89, 0.28)',
        muted: '#94A3B8'
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
