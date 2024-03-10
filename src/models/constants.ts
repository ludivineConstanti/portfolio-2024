import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ludivine Constanti",
  description:
    "This is the portfolio of Ludivine Constanti, a Full Stack developer, currently using TypeScript and React for her main Tech Stack.",
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export enum storageKey {
  alreadyUsedFilter = "alreadyUsedFilter",
}
