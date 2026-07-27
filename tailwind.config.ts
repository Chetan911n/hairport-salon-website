import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        surface: '#1C1C1C',
        card: 'rgba(28, 28, 28, 0.85)',
        gold: {
          DEFAULT: '#C9A227',
          soft: '#DFBB48',
          deep: '#9B7B16'
        },
        border: 'rgba(201, 162, 39, 0.22)',
        muted: '#888888',
        white: '#F8F8F8'
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif']
      },
      letterSpacing: {
        widest2: '0.35em'
      },
      backgroundImage: {
        'gold-glow': 'radial-gradient(circle at 50% 50%, rgba(201, 162, 39, 0.18), transparent 70%)',
        'grain': "url('/images/grain.png')"
      },
      boxShadow: {
        gold: '0 0 35px rgba(201, 162, 39, 0.3)',
        card: '0 8px 30px rgba(0, 0, 0, 0.7)'
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
