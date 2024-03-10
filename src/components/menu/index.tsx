"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";

import InternalLink from "./InternalLink";
import SocialMedia from "./SocialMedia";
import ButtonClose from "./ButtonClose";
import SearchBar from "./SearchBar";
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
import { setWidthAndHeight } from "@/store/slices/system";
import { useAppDispatch } from "@/store";
import SearchBarFeedback from "./SearchBarFeedback";
import SearchBarTutorial from "./SearchBarTutorial";

const internalLinksKeys = Object.keys(internalLinks) as InternalLinksIds[];
const socialMediasKeys = Object.keys(socialMedias) as SocialMediaIds[];

const menuLinksKeys = internalLinksKeys.filter(
  (e) => internalLinks[e].showInMenu,
);

const classNameMenuGap = "gap-8 sm:gap-4 xl:gap-8";

const Menu = ({
  colorPrimary,
  colorSecondary,
  pageId,
  bottomNavigationLinks,
  skillsFilter,
  projects,
  articles,
}: MenuComponentProps) => {
  const dispatch = useAppDispatch();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  useResizeObserver(ref.current, ({ clientWidth, clientHeight }) => {
    if (window) {
      const width = clientWidth || window.innerWidth;
      setWidth(width);
      dispatch(
        setWidthAndHeight({
          width,
          height: clientHeight || window.innerHeight,
        }),
      );
    }
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
    <>
      <header
        className="pointer-events-none fixed z-20 grid h-full w-full grid-rows-[1fr_auto]"
        ref={ref}
      >
        <ButtonClose
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
          color={colorPrimary}
        />
        <div
          className={clsx(
            classNameMenuGap,
            "z-10 flex w-full justify-center sm:absolute sm:top-6 sm:mx-4 sm:items-start xl:top-7",
          )}
        >
          <div
            className={clsx(
              { hidden: !menuIsOpen },
              colorPrimary,
              classNameMenuGap,
              "flex w-full flex-col flex-wrap items-center justify-center p-16 sm:flex sm:w-fit sm:flex-row sm:bg-[rgba(255,255,255,0)] sm:p-0",
            )}
          >
            <nav>
              <ul
                className={clsx(
                  classNameMenuGap,
                  "flex flex-col flex-wrap items-center justify-center sm:flex-row",
                )}
              >
                {menuLinksKeys
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
          </div>
          {skillsFilter && projects && articles && menuIsOpen === false && (
            <div className="relative top-5 flex flex-col flex-wrap items-center gap-2 sm:top-0 sm:flex-row sm:items-start ">
              <SearchBar
                skillsFilter={skillsFilter}
                projects={projects}
                articles={articles}
                pageId={pageId}
              />
              <SearchBarFeedback pageId={pageId} color={colorSecondary} />
              <SearchBarTutorial pageId={pageId} />
            </div>
          )}
        </div>
        <ul
          className={clsx(
            { "hidden sm:flex": !menuIsOpen },
            colorSecondary,
            "z-20 flex h-full flex-wrap justify-center gap-6 p-12 sm:absolute sm:right-6 sm:top-0 sm:flex-col sm:bg-[rgba(255,255,255,0)] sm:p-0 xl:right-7",
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
      {bottomNavigationLinks && menuIsOpen === false && (
        <BottomNavigation
          colorPrimary={colorPrimary}
          bottomNavigationLinks={bottomNavigationLinks}
        />
      )}
    </>
  );
};

export default Menu;
