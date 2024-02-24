import Head from "next/head";
import { Lexend } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider } from "react-redux";
import { metadata as metaDataConstants, MenuComponentProps } from "@/models";
import "@/styles/globals.css";
import { Menu } from "@/components";
import Footer from "./Footer";
import store from "@/store";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = metaDataConstants;

interface LayoutProps extends MenuComponentProps {
  children: React.ReactNode;
  title: string;
  colorPrimary: string;
  colorSecondary: string;
}

const Layout = ({
  children,
  title,
  colorPrimary,
  colorSecondary,
  pageId,
  bottomNavigationLinks,
}: LayoutProps) => {
  return (
    <Provider store={store}>
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
        <Menu
          colorPrimary={colorPrimary}
          colorSecondary={colorSecondary}
          pageId={pageId}
          bottomNavigationLinks={bottomNavigationLinks}
        />
        {children}
        <Footer colorSecondary={colorSecondary} />
        <Analytics />
        <SpeedInsights />
      </div>
    </Provider>
  );
};

export default Layout;
