/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0597F2",
        secondary: "#022e51",
        alt: {
          100: "#F2F2F2",
          200: "#0D0D0D",
        },
      },
    },
  },
  plugins: [],
};

