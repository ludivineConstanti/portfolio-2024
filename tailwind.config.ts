import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-white",
    // red
    "bg-red-950",
    "bg-red-900",
    "bg-red-800",
    "bg-red-700",
    // orange
    "bg-orange-950",
    "bg-orange-900",
    "bg-orange-800",
    "bg-orange-700",
    // amber
    "bg-amber-950",
    "bg-amber-900",
    "bg-amber-800",
    "bg-amber-700",
    // yellow
    "bg-yellow-950",
    "bg-yellow-900",
    "bg-yellow-800",
    "bg-yellow-700",
    // lime
    "bg-lime-950",
    "bg-lime-900",
    "bg-lime-800",
    "bg-lime-700",
    // green
    "bg-green-950",
    "bg-green-900",
    "bg-green-800",
    "bg-green-700",
    // emerald
    "bg-emerald-950",
    "bg-emerald-900",
    "bg-emerald-800",
    "bg-emerald-700",
    // teal
    "bg-teal-950",
    "bg-teal-900",
    "bg-teal-800",
    "bg-teal-700",
    // cyan
    "bg-cyan-950",
    "bg-cyan-900",
    "bg-cyan-800",
    "bg-cyan-700",
    // sky
    "bg-sky-950",
    "bg-sky-900",
    "bg-sky-800",
    "bg-sky-700",
    // blue
    "bg-blue-950",
    "bg-blue-900",
    "bg-blue-800",
    "bg-blue-700",
    // indigo
    "bg-indigo-950",
    "bg-indigo-900",
    "bg-indigo-800",
    "bg-indigo-700",
    // violet
    "bg-violet-950",
    "bg-violet-900",
    "bg-violet-800",
    "bg-violet-700",
    // purple
    "bg-purple-950",
    "bg-purple-900",
    "bg-purple-800",
    "bg-purple-700",
    // fuchsia
    "bg-fuchsia-950",
    "bg-fuchsia-900",
    "bg-fuchsia-800",
    "bg-fuchsia-700",
    // pink
    "bg-pink-950",
    "bg-pink-900",
    "bg-pink-800",
    "bg-pink-700",
    // rose
    "bg-rose-950",
    "bg-rose-900",
    "bg-rose-800",
    "bg-rose-700",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
