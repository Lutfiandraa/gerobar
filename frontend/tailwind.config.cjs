/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansita: ["'Sansita Swashed'", "cursive"],
        lexend: ["'Lexend Zetta'", "sans-serif"],
        poppins: ["Poppins"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drip: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15px)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1.2s ease-out forwards",
        drip: "drip 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}