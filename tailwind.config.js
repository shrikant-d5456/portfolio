/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-gradient': 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
        'dark-gradient': 'radial-gradient(ellipse at bottom, #ffffff 0%, #ffffff 100%)',
      },
      colors: {
        'light-text': 'rgb(255, 255, 255)',
        'dark-text': 'rgb(1, 1, 1)',
      }
    },
  },
  plugins: [],
}
