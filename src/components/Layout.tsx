import Head from "next/head";
import { Lexend } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { metadata as metaDataConstants } from "@/models/constants";
import "@/styles/globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = metaDataConstants;

const RootLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className={lexend.className}>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Ludi | ${title}`}</title>
        {/* appears in search results */}
        <meta
          name="description"
          content={metaDataConstants.description as string}
        />
        <link rel="icon" href="/favicon.png" />
        {/* open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Ludivine Constanti | ${title}`} />
        <meta
          property="og:description"
          content={metaDataConstants.description as string}
        />
        <meta property="og:image" content="/opengraph-image.jpg" />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={`Ludivine Constanti | ${title}`}
        />
        <meta
          property="twitter:description"
          content={metaDataConstants.description as string}
        />
        <meta property="twitter:image" content="/opengraph-image.jpg" />
      </Head>
      {children}
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default RootLayout;
