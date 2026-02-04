
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D99142',   // The copper/gold from the needle and 'apparels'
          silver: '#A6A6A6', // The grey from the 'Ayman' script
          dark: '#000000',   // The primary background
          white: '#FFFFFF',  // Used for 'MADE IN NIGERIA'
        },
      },
      fontFamily: {
        // 'Dancing Script' matches the elegant, flowing feel of 'Ayman'
        script: ['"Dancing Script"', 'cursive'],
        // Geist as the main sans-serif font
        sans: ['"Geist Sans"', 'sans-serif'],
        // Geist Mono for monospace
        mono: ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
