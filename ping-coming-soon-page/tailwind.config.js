/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        blue: "var(--blue)",
        paleBlue: "var(--paleBlue)",
        lightRed: "var(--lightRed)",
        gray: "var(--gray)",
        veryDarkBlue: "var(--veryDarkBlue)",
      },
      fontSize: {
        xxs: ".5rem",
      },
    },
  },
  plugins: [],
}
