/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FBF7F2',   // Main Background (Eggshell)
          gold: '#E6B65C',    // Primary CTA & Accents
          black: '#1F1F1F',   // Headings
          gray: '#6B6B6B',    // Subtext
          green: '#3A7D44',   // Trust/Freshness Badges
          red: '#C84C4C',     // Date Stamp Alerts
        }, // <--- Make sure this comma is here
      },
      fontFamily: {
        // Use 'sans' to override the default Tailwind font
        sans: ['Inter', 'sans-serif'],
        // Custom key for your serif font
        heading: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}