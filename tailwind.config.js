/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Fira: ["Fira Sans", "sans-serif"],
        Sigmar: ["Sigmar", "sans-serif"],
        Acme: ["Acme", "sans-serif"],
      },
    },
  },
  plugins: [],
};
