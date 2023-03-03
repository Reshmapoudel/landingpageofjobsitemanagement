/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0B2E4A",
        "primary-green": "#00A9AE",
        "text-light-green": "#76FBFF",
        "dar-blue": "#222222",
        "light-green": "#D9F2F3",
        "dark-green": "#049296",
        "gradiant-r": "#FF16E8",
        "gardiant-l": "#5648EA",
      },
    },
  },
  plugins: [],
};
