import type { Config } from "tailwindcss";
const customColors = {
  custom1: "#FEFEFB",
  custom2: "#5B6097",
  custom3: "#54C1AD",
  custm4: "#FDBF46",
  custom5: "#F06A6D",
  // Add more custom colors as needed
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: customColors,
      textColor: {
        A3A3B9: "#A3A3B9",
      },
      borderColor: {
        "5B6097": "#5B6097",
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
export default config;
