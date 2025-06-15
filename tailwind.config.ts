
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          100: "#b0e9cf",
          500: "#2ecc80",
          900: "#215432",
        },
        earth: "#e6dac5",
        sky: "#25b0ed",
        deepblue: "#213c51",
        sand: "#f5efde",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "Lato", "sans-serif"],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        }
      },
      animation: {
        "fade-in": "fade-in 0.7s cubic-bezier(.37,.93,.38,.98)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
