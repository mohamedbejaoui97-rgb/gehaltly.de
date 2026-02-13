import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          50: '#E8EDF3',
          100: '#D1DBE7',
          200: '#A3B7CF',
          300: '#7593B7',
          400: '#476F9F',
          500: '#1E3A5F',
          600: '#182E4C',
          700: '#122339',
          800: '#0C1726',
          900: '#060B13',
        },
        accent: {
          positive: '#10B981',
          warning: '#F59E0B',
          negative: '#EF4444',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
