/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1120px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        bhblue: "#082dc2",
        bhyell: "#fad20a",
      },
    },
  },
  plugins: [],
};
