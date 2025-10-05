/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark/light mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5",
        secondary: "#393E46",
      },
    },
  },
  plugins: [],
};
