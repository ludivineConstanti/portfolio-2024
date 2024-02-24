"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";
import InternalLink from "./InternalLink";
import SocialMedia from "./SocialMedia";
import ButtonClose from "./ButtonClose";
import { ArrowDownload } from "..";
import {
  internalLinks,
  InternalLinksIds,
  socialMedias,
  SocialMediaIds,
  breakpoints,
  MenuComponentProps,
} from "@/models";
import { useResizeObserver } from "@/hooks";
import BottomNavigation from "./BottomNavigation";

const internalLinksKeys = Object.keys(internalLinks) as InternalLinksIds[];
const socialMediasKeys = Object.keys(socialMedias) as SocialMediaIds[];

const menuLinksKeys = internalLinksKeys.filter(
  (e) => internalLinks[e].showInMenu,
);

const Menu = ({
  colorPrimary,
  colorSecondary,
  pageId,
  bottomNavigationLinks,
}: MenuComponentProps) => {
  const [width, setWidth] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useResizeObserver(ref.current, ({ clientWidth }) => {
    setWidth(window ? window.innerWidth : clientWidth);
  });

  useEffect(() => {
    if (document) {
      if (menuIsOpen && width < breakpoints.sm) {
        document.body.style.overflow = "hidden";
      } else {
        if (width >= breakpoints.sm) {
          setMenuIsOpen(false);
        }
        document.body.style.overflow = "auto";
      }
    }
  }, [menuIsOpen, width]);

  return (
    <header
      className="pointer-events-none fixed z-10 grid h-full w-full grid-rows-[1fr_auto]"
      ref={ref}
    >
      <ButtonClose
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        color={colorPrimary}
      />
      <nav
        className={clsx(
          { "hidden sm:flex": !menuIsOpen },
          colorPrimary,
          "flex w-full justify-center sm:absolute sm:top-6 sm:block sm:bg-[rgba(255,255,255,0)] xl:top-7",
        )}
      >
        <ul className="flex flex-col items-center justify-center gap-8 p-16 sm:flex-row sm:p-0">
          {menuLinksKeys
            .filter((internalLinkKey) => internalLinkKey !== pageId)
            .map((internalLinkKey) => (
              <InternalLink
                color={colorPrimary}
                key={`internal-link-${internalLinkKey}`}
                {...internalLinks[internalLinkKey]}
              />
            ))}
          <a
            href="/resume_Ludivine_Constanti.pdf"
            className={clsx(colorPrimary, "menu-link gap-1.5")}
            download
          >
            Resume
            <span className="w-[0.55rem]">
              <ArrowDownload />
            </span>
          </a>
        </ul>
      </nav>
      <ul
        className={clsx(
          { "hidden sm:flex": !menuIsOpen },
          colorSecondary,
          "flex h-full flex-wrap justify-center gap-6 px-12 py-16 sm:absolute sm:right-6 sm:top-0 sm:flex-col sm:bg-[rgba(255,255,255,0)] sm:p-0 xl:right-7",
        )}
      >
        {socialMediasKeys.map((socialMediaKey) => (
          <SocialMedia
            key={`social-media-${socialMediaKey}`}
            color={colorPrimary}
            {...socialMedias[socialMediaKey]}
          />
        ))}
      </ul>
      {bottomNavigationLinks && menuIsOpen === false && (
        <nav className="absolute bottom-0 left-0 w-full">
          <BottomNavigation
            colorPrimary={colorPrimary}
            bottomNavigationLinks={bottomNavigationLinks}
          />
        </nav>
      )}
    </header>
  );
};

export default Menu;
