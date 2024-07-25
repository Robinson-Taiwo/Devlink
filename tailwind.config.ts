import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#633CFF",
        hover: "#BEADFF",
        lightPurple: "#EFEBFF",
        darkGrey: "#333333",
        grey: "#737373",
        border: "#D9D9D9",
        lightGrey: "#FAFAFA",
        red: "#FF3939",
      },

      fontSize: {
        base: "1rem", // 12px
        normal: "1.33rem", // 16px
        big: "2.67rem", // 32px
      },
      screens: {
        sphone: { max: "320px" },
        phone: "320px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;