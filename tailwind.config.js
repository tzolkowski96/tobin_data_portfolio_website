/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Pure minimalist palette
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        black: '#000000',
        white: '#FFFFFF',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, #e5e5e5 1px, transparent 0)",
      },
      backgroundSize: {
        'grid-pattern': '40px 40px',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'large': ['1.125rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};