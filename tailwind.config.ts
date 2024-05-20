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
      "light-primary": "#D92414",
      "light-on-primary": "#FFF8F7",
      "light-primary-container": "#D92414",
      "light-on-primary-container": "#FFF8F7",
      "light-on-primary-surface": "#FFF8F7",

      "light-orange":"#FA5E36",
      "light-red":"#D92414",
      "light-brown":"#BF7534",
      "light-beige":"#EFBE86",
      "light-blue":"#84C1D9",

      "dark-orange":"#730707",
      "dark-red":"#73262C",
      "dark-brown":"#8C4318",
      "dark-beige":"#F7C08A",
      "dark-blue":"#364A5E",
      "white":"#FFFFFF",
      "black":"#000000",

      "dark-primary": "#FFF8F7",
      "dark-on-primary": "#D92414",
      "dark-primary-container": "#D92414",
      "dark-on-primary-container": "#D92414",
      "dark-on-primary-surface": "#D92414",

      "green-primary": "#025951",
      "green-accent": "#0CF25D"
      
    },
    screen:{
      'sm': '640px',
      'md': '800px',
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
      }
      
    },
  },
  plugins: [],
};

export default config;
