/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        serif: ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
