/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        zuriOrange: "#D8494E",
        zuriBrown: "#410703",
      },
    },
  },
  plugins: [],
};
