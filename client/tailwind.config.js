import flowbite from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'black',
        primaryLight: '#e3f1f5',
        accent: '#14b8a6',
        success: '#22c55e',
        dark: '#090d13',
      },
    },
  },
  plugins: [
    flowbite,
  ],
}
