/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1c449b',
        'secondary': '#f05b29',
        'thirdary': '#febe16',
        'fourth': '#0e224e',
        'link-color': '#655b9e',
      },
      textshadow: {
        'sm': '1px 1px 3px rgb(36 37 47 / 25%)',
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [],
}