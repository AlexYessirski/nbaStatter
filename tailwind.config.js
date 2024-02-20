/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html",
            "./build/index.html"],
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"]
}

