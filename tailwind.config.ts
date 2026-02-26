import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cloud-dancer': 'var(--color-cloud-dancer)',
        'deep-ocean': 'var(--color-deep-ocean)',
        'sky': 'var(--color-sky)',
        'clouds': 'var(--color-clouds)',
        'ivoire': 'var(--color-ivoire)',
        'gris': 'var(--color-gris)',
      },
      fontFamily: {
        'display': ['var(--font-playfair)'],
        'body': ['var(--font-inter)'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '3rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      opacity: {
        '8': '0.08',
        '12': '0.12',
      },
    },
  },
  plugins: [],
};

export default config;