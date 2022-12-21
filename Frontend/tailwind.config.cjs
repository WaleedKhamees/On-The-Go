/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      RedPrimary: "#C4141C",
      RedSecondary: "#FFB4B7",
      GreenPrimary: "#066B29",
      GreenSecondary: "#9DFFBF",
      White: "#FEFEFE",
      Headings: "#000000",
      Body: "#333333",
      Small: "#989898",
      Link: "#0067C5",
      Yellow: "#FFD800",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [
  ],
};
