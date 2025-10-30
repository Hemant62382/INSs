/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ensure tumhare JSX/React files cover ho rahe hain
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)", borderRadius: "50%" },
          "25%": { transform: "translate(30px,-40px) scale(1.1)", borderRadius: "40% 60% 60% 40%" },
          "50%": { transform: "translate(-20px,20px) scale(0.9)", borderRadius: "60% 40% 50% 50%" },
          "75%": { transform: "translate(20px,-20px) scale(1)", borderRadius: "50% 50% 60% 40%" },
        },
      },
      animation: {
        blob: "blob 8s infinite",
      },
    },
  },
  plugins: [],
};
