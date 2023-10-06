/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: "'Titillium Web', 'sans-serif'",
      },
      colors: {
        dark: "#212121",
        accent: "#868E96",
        shade: "#B8151C",
        brand: "#E61A23",
        tint: "EB484F",
        light: "F5F5F5",
      },
    },
  },
  plugins: [],
};