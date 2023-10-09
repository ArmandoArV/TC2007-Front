import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set "Ruda" as the default font
        sans: ["Ruda", "sans"],
      },
      colors: {
        ventana: {
          white: "#F3F3F3",
          blue: "#00887D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
