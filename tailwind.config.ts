import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#07080a",
          card: "#0d0f14",
          cardHover: "#13161f",
          border: "#1a1d26",
          borderLight: "#2a2e3d",
        },
        brand: {
          accent: "#00f59b",     // Electric Mint / Jade
          accentHover: "#00d989",
          gold: "#ffb703",       // Signal Amber
          dark: "#07080a",
        }
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
