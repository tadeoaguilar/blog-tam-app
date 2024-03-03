import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "light-primary": "#DD2C41",
      "light-on-primary": "#FFFFFF",
      "light-primary-container": "#DD2C41",
      "light-on-primary-container": "#FFFFFF",
      "light-on-primary-surface": "#FFF8F7",

      "dark-primary": "#FFFFFF",
      "dark-on-primary": "#DD2C41",
      "dark-primary-container": "#DD2C41",
      "dark-on-primary-container": "#DD2C41",
      "dark-on-primary-surface": "#DD2C41",
      
    },
    screen:{
      'sm': '599px',
      'md': '1239px',
      'lg': '1440px',      
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
     
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
