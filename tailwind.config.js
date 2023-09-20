/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-mode-el": "#2b3945",
        "dark-mode-bg": "#202c37",
        "light-mode-text": "#111517",
        "light-mode-input": "#858585",
        "light-mode-bg": "#fafafa",
        "light-mode-el": "#ffffff",
      },
    },
  },
  plugins: [],
};
