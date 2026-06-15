import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2B2118",
        bark: "#5B351F",
        timber: "#B8763C",
        linen: "#F7EFE3",
        paper: "#FFFAF0",
        stone: "#D8C5AD",
        moss: "#51683E",
        sage: "#E7E9D9",
        steel: "#62584B",
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 16px 48px rgba(36, 33, 29, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
