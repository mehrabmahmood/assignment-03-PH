/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  module.exports = {
    theme: {
      // ...
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      // ...
    ],
  }