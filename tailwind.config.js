// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js,jsx,ts,tsx}'

  ],
  
  theme: {
    
      extend: {
        // ... altre estensioni
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(-20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          }
        },
        animation: {
          fadeIn: 'fadeIn 0.3s ease-out forwards',
        }
      },
      
    extend: {
      fontFamily: {
        sans: ['var(--font-primary)', 'sans-serif'],
        serif: ['var(--font-secondary)', 'serif'],
        display: ['var(--font-display)', 'serif'],
      },
      colors: {
        // Colori principali del brand
        primary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2d9e4',
          300: '#a8b8cb',
          400: '#7a92ae',
          500: '#576e8a', // Colore principale
          600: '#455772',
          700: '#364559',
          800: '#2a3645',
          900: '#1e2732',
        },
        // Accento
        accent: {
          50: '#fdf6ef',
          100: '#f9e8d7',
          200: '#f2d0ae',
          300: '#eab77f',
          400: '#e39d4e', // Colore accento
          500: '#d68529',
          600: '#b46c22',
          700: '#91561c',
          800: '#724419',
          900: '#593617',
        },
        // Grigi neutri
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#c9c9c9',
          400: '#adadad',
          500: '#8c8c8c',
          600: '#6a6a6a',
          700: '#5d5d5d',
          800: '#3f3f3f',
          900: '#292929',
        },
      },
      fontSize: {
        // Font size personalizzati
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      // Overlay
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'overlay-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))',
      },
    },
  },
  plugins: [],
}