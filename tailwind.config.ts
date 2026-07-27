import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F8F6F2',
        surface: '#EFE8DE',
        card: '#FFFFFF',
        gold: {
          DEFAULT: '#A87444',
          soft: '#C48B57',
          deep: '#8A5C33'
        },
        accent: {
          DEFAULT: '#A87444',
          soft: '#C48B57',
          deep: '#8A5C33'
        },
        border: '#DDD4C6',
        muted: '#6E6A63',
        white: '#FFFFFF',
        charcoal: '#2B2B2B'
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif']
      },
      letterSpacing: {
        widest2: '0.35em'
      },
      backgroundImage: {
        'editorial-gradient': 'linear-gradient(180deg, #F8F6F2 0%, #EFE8DE 100%)',
        'paper-grain': "url('https://www.transparenttextures.com/patterns/handmade-paper.png')"
      },
      boxShadow: {
        gold: '0 8px 30px rgba(168, 116, 68, 0.15)',
        card: '0 4px 25px rgba(43, 43, 43, 0.06)',
        subtle: '0 2px 12px rgba(43, 43, 43, 0.04)'
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
