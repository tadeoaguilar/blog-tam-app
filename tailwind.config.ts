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
      
      "white":"#FFFFFF",
      "black":"#000000",
      "grape":"#0d0219",
      "cyan":"#00FFFF",
      "orange":"#F7931E",
      "red":"#C1272D",
      "blue":"#0071BC",
      "green-primary": "#025951",
      "green-accent": "#0CF25D"


      
    },
    screen:{
      'sm': '845px',
      'md': '1024px',
      'lg': '1440px',
      'ls': {'raw': '(min-height: 300px)'}      
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
      }
      
    },
  },
  plugins: [],
};

export default config;
