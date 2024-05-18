/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        online: "calc(100% - 3.5rem)",
      },
    },
    fontFamily: { roboto: ["Roboto", "sans-serif"] },
  },
  plugins: [],
};
