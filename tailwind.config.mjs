import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0b0d12',
          elevated: '#12151c',
          surface: '#181c26',
        },
        ink: {
          DEFAULT: '#ece9e3',
          muted: '#9498a2',
          faint: '#5c6068',
        },
        copper: {
          light: '#d69660',
          DEFAULT: '#c6844f',
          dark: '#a26738',
        },
        slate: {
          DEFAULT: '#5c7285',
        },
        line: {
          DEFAULT: '#23262f',
          muted: '#1a1c23',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#9498a2',
            a: {
              color: '#c6844f',
              '&:hover': {
                color: '#d69660',
              },
            },
            h1: { color: '#ece9e3', fontFamily: '"Fraunces", Georgia, serif' },
            h2: { color: '#ece9e3', fontFamily: '"Fraunces", Georgia, serif' },
            h3: { color: '#ece9e3', fontFamily: '"Fraunces", Georgia, serif' },
            strong: { color: '#ece9e3' },
            code: {
              color: '#c6844f',
              backgroundColor: '#12151c',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#12151c',
              border: '1px solid #23262f',
              color: '#ece9e3',
            },
            blockquote: {
              borderLeftColor: '#c6844f',
              color: '#9498a2',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
