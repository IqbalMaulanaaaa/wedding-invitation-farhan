/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F4',
          100: '#E7EFE6',
          200: '#D2DFD1',
          300: '#B4C8B2',
          400: '#8FA88D',
          500: '#728C70',
          600: '#5A7258',
          700: '#485B46',
          800: '#3A4938',
          900: '#303D2F',
        },
        ivory: {
          50: '#FAF9F6',
          100: '#F5F3ED',
          200: '#EAE6DC',
          300: '#DDD7C7',
          400: '#CFC5AF',
        },
        champagne: {
          100: '#F7F3EB',
          200: '#EDE4D2',
          300: '#DDCFB4',
          400: '#C5A880',
          500: '#B38F5C',
          600: '#947245',
        },
        charcoal: {
          800: '#2C2B29',
          900: '#1F1E1D',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 14s linear infinite',
        'sway': 'sway 6s ease-in-out infinite',
        'sway-reverse': 'swayReverse 7s ease-in-out infinite',
        'wreath-sway': 'wreathSway 7s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg) translateY(0)' },
          '50%': { transform: 'rotate(4deg) translateY(-5px)' },
        },
        swayReverse: {
          '0%, 100%': { transform: 'rotate(3deg) translateY(0)' },
          '50%': { transform: 'rotate(-4deg) translateY(-6px)' },
        },
        wreathSway: {
          '0%, 100%': { transform: 'rotate(-2.5deg) scale(1)' },
          '50%': { transform: 'rotate(2.5deg) scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.98)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};
