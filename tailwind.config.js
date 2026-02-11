/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Next.js App Router ke liye ye path zaroori hai
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Aapka specific folder cover karne ke liye
    "./app/HomePage/**/*.{js,ts,jsx,tsx,mdx}",
    // Baki paths safety ke liye
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FBF7F2',   // Main Background
          gold: '#E6B65C',    // Primary Accents
          black: '#1F1F1F',   // Headings
          gray: '#6B6B6B',    // Subtext
          green: '#3A7D44',   // Trust Badges
          red: '#C84C4C',     // Alerts
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}