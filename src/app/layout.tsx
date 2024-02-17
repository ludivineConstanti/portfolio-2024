import Head from "next/head";
import { Lexend } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";
import { metadata as metaDataConstants } from "@/models/constants";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  ...metaDataConstants,
  icons: {
    icon: "/favicon.png",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Head>
          <meta charSet="utf-8" />
          <title>Ludi</title>
          {/* appears in search results */}
          <meta
            name="description"
            content={metaDataConstants.description as string}
          />
          <link rel="icon" href="/favicon.png" />
          {/* open graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`Ludivine Constanti`} />
          <meta
            property="og:description"
            content={metaDataConstants.description as string}
          />
          <meta property="og:image" content="/opengraph-image.jpg" />
          {/* twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={`Ludivine Constanti`} />
          <meta
            property="twitter:description"
            content={metaDataConstants.description as string}
          />
          <meta property="twitter:image" content="/opengraph-image.jpg" />
        </Head>
        <div className={lexend.className}>
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
};

export default Layout;
