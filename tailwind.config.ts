import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFBF7",
        beige: "#F5EFE6",
        blush: "#F8D7D5",
        blushDeep: "#E8AFAF",
        brown: "#2C211E",
        charcoal: "#1E1E1E",
        gold: "#C8A96A",
        goldLight: "#E8D9B0",
        cream: "#FFF8F0",
        borderSoft: "#EDE5DA"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 30px rgba(44,33,30,0.06)",
        premium: "0 20px 60px rgba(44,33,30,0.10)",
        card: "0 4px 24px rgba(44,33,30,0.06)"
      }
    }
  },
  plugins: []
};
export default config;
