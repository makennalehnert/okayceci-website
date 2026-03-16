/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bitcount: ["Bitcount", "sans-serif"], // Step 2
        barlow: ["Barlow, sans-serif"],
    },
  },
  plugins: [],
}
}