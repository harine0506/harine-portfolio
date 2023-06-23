/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#eb344f",
        customYellow: "#ffff00",
        // Add more custom colors here
      },
    },
  },
  plugins: [],
};
