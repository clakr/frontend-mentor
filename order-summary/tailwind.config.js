const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        paleBlue: "var(--paleBlue)",
        brightBlue: "var(--brightBlue)",
        veryPaleBlue: "var(--veryPaleBlue)",
        desaturatedBlue: "var(--desaturatedBlue)",
        darkBlue: "var(--darkBlue)",
      },
    },
  },
}
