/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F7F3EB',
          200: '#EFE6D8',
          300: '#DFD2BE',
          400: '#CCAFA2',
        },
        chocolate: {
          950: '#1D0F08',
          900: '#2A170F',
          800: '#3D2318',
          700: '#523223',
          600: '#6C4533',
          500: '#8A5B45',
          400: '#AB7B63',
          200: '#D7BCAE',
        },
        caramel: {
          50: '#FDF7F3',
          100: '#FAEDE5',
          200: '#F4D8C8',
          500: '#C76336',
          600: '#B04F26',
          700: '#8E3D1B',
          800: '#723115',
        },
        gingham: {
          border: '#D9896A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
