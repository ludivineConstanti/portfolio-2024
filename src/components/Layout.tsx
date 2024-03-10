import Head from "next/head";
import { useEffect } from "react";
import { Lexend } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  metadata as metaDataConstants,
  MenuComponentProps,
  storageKey,
} from "@/models";
import "@/styles/globals.css";
import { Menu } from "@/components";
import Footer from "./Footer";
import { useAppDispatch } from "@/store";
import { setAlreadyUsedFilter } from "@/store/slices/system";

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
  skillsFilter,
  projects,
  articles,
}: LayoutProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      const filterWasAlreadyUsed = localStorage.getItem(
        storageKey.alreadyUsedFilter,
      );
      if (filterWasAlreadyUsed === "true") {
        dispatch(setAlreadyUsedFilter());
      }
    }
  }, []);

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
      <Menu
        colorPrimary={colorPrimary}
        colorSecondary={colorSecondary}
        pageId={pageId}
        bottomNavigationLinks={bottomNavigationLinks}
        skillsFilter={skillsFilter}
        projects={projects}
        articles={articles}
      />
      {children}
      <Footer colorSecondary={colorSecondary} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default Layout;
