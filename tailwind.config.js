/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        13: "13px",
        20: "20px",
        26: "26px",
        36: "36px",
      },
    },
    fontFamily: {
      poppin: ["Poppins"],
    },
  },
  plugins: [],
};
