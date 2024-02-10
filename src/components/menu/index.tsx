"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { MenuComponentProps } from "@/models";
import InternalLink from "./InternalLink";
import SocialMedia from "./SocialMedia";
import ButtonClose from "./ButtonClose";

const Menu = ({
  internalLinks,
  socialMedias,
  colorPrimary,
  colorSecondary,
}: MenuComponentProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <header className="pointer-events-none fixed z-10 grid h-full w-full grid-rows-[1fr_auto] sm:mt-6 sm:block xl:mt-7">
      <ButtonClose menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <nav
        className={clsx(
          { "hidden sm:flex": !menuIsOpen },
          colorPrimary,
          "flex w-full justify-center sm:bg-[rgba(255,255,255,0)]",
        )}
      >
        <ul className="flex flex-col items-center justify-center gap-8 p-16 sm:flex-row sm:p-0">
          {internalLinks.map((data) => (
            <InternalLink
              color={colorPrimary}
              key={`internal-link-${data._id}`}
              {...data}
            />
          ))}
        </ul>
      </nav>
      <ul
        className={clsx(
          { "hidden sm:flex": !menuIsOpen },
          colorSecondary,
          "flex h-full flex-wrap justify-center gap-8 px-12 py-16 sm:absolute sm:right-6 sm:top-0 sm:flex-col sm:bg-[rgba(255,255,255,0)] sm:p-0 xl:right-7",
        )}
      >
        {socialMedias.map((data) => (
          <SocialMedia
            key={`social-media-${data._id}`}
            color={colorPrimary}
            {...data}
          />
        ))}
      </ul>
    </header>
  );
};

export default Menu;
