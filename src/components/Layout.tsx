import type { Metadata } from "next";
import Head from "next/head";
import { Lexend } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Ludivine Constanti",
  description:
    "This is the portfolio of Ludivine Constanti, a Full Stack developer, who specializes in writing websites in TypeScript and React and is experienced in UI and UX design.",
};

export default function RootLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className={lexend.className}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
