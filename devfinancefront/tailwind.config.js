/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primaryColor": "#2D4A22",
      "depositColor": "#49AA26",
      "outflowColor": "#E92929",
      "titleColor": "#363F5F",
      "textColor": "#969CB2",
      'white': '#ffffff'
    },
  },
  plugins: [],
}