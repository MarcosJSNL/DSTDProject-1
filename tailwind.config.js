/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ivory: '#F7F5F0',
        champagne: '#C8A45D',
        navy: {
          DEFAULT: '#0B1F3A',
          deep: '#081627',
          light: '#13294B',
        },
        graphite: '#1C232B',
        burgundy: '#5E2129',
      },
      boxShadow: {
        premium: '0 20px 60px -20px rgba(11, 31, 58, 0.25)',
        'premium-lg': '0 30px 80px -24px rgba(11, 31, 58, 0.35)',
      },
    },
  },
  plugins: [],
}
