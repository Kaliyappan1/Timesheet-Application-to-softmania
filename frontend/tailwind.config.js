/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "dark-green" : "#0C1C17",
      "light-green" : "#0d840b",
      "light-green-50": "#004201",
    },
  },
  plugins: [],
}

