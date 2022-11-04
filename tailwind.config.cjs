/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "commander-home-pattern": "url('public/assets/imgs/magicLogo.png')",
      },
    },
  },
  plugins: [],
};
