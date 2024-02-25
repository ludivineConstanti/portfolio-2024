import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /bg-(slate|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(700|800|900|950)/,
    },
  ],
  theme: {
    extend: {
      spacing: {
        "18": "4.5rem",
        "19": "4.75rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
    transform: true,
  },
};
export default config;
