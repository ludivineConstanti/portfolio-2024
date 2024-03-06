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
      maxWidth: {
        home: "40rem",
        "home-xl": "68.75rem",
        project: "42rem",
      },
      padding: {
        "home-article": "1rem",
        "home-article-sm": "2rem",
        "home-article-xl": "4rem",
      },
      spacing: {
        "18": "4.5rem",
        "19": "4.75rem",
        "22": "5.5rem",
        "individual-page": "5rem",
        "individual-page-xl": "8rem",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%) translateX(-50%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0) translateX(-50%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    transform: true,
  },
};
export default config;
