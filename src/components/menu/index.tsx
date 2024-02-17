"use client";

import React, { useState } from "react";
import clsx from "clsx";
import InternalLink from "./InternalLink";
import SocialMedia from "./SocialMedia";
import ButtonClose from "./ButtonClose";
import {
  internalLinks,
  InternalLinksIds,
  socialMedias,
  SocialMediaIds,
} from "@/models";

const Menu = ({
  colorPrimary,
  colorSecondary,
  pageId,
}: {
  colorPrimary: string;
  colorSecondary: string;
  pageId?: InternalLinksIds;
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  /* useEffect(() => {
    if (document && window) {
      if (menuIsOpen && window.innerWidth > 640) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [menuIsOpen]); */

  const internalLinksKeys = Object.keys(internalLinks) as InternalLinksIds[];
  const socialMediasKeys = Object.keys(socialMedias) as SocialMediaIds[];
  return (
    <header className="pointer-events-none fixed z-10 grid h-full w-full grid-rows-[1fr_auto] sm:mt-6 sm:block xl:mt-7">
      <ButtonClose
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        color={colorPrimary}
      />
      <nav
        className={clsx(
          { "hidden sm:flex": !menuIsOpen },
          colorPrimary,
          "flex w-full justify-center sm:bg-[rgba(255,255,255,0)]",
        )}
      >
        <ul className="flex flex-col items-center justify-center gap-8 p-16 sm:flex-row sm:p-0">
          {internalLinksKeys
            .filter((internalLinkKey) => internalLinkKey !== pageId)
            .map((internalLinkKey) => (
              <InternalLink
                color={colorPrimary}
                key={`internal-link-${internalLinkKey}`}
                {...internalLinks[internalLinkKey]}
              />
            ))}
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
    </header>
  );
};

export default Menu;
