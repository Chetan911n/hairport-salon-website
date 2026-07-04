import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0B',
        surface: '#161616',
        card: 'rgba(255,255,255,0.05)',
        gold: {
          DEFAULT: '#C8A552',
          soft: '#D9C084',
          deep: '#A9863E'
        },
        border: 'rgba(255,255,255,0.08)',
        muted: '#BDBDBD'
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
