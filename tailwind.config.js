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
        'dark-gradient': 'linear-gradient(to right,rgb(255 255 255),rgb(222 214 254)); ',
      },
      colors: {
        'light-text': 'rgb(255, 255, 255)',
        'dark-text': 'rgb(1, 1, 1)',
      }
    },
  },
  plugins: [],
}
