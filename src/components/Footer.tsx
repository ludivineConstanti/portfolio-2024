import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { internalLinks, InternalLinksIds } from "@/models";

const internalLinksKeys = Object.keys(internalLinks) as InternalLinksIds[];
const footerLinksKeys = internalLinksKeys.filter(
  (e) => internalLinks[e].showInMenu !== true,
);

const Footer = ({ colorSecondary }: { colorSecondary: string }) => {
  return (
    <footer
      className={clsx(colorSecondary, "z-9 pointer-events-auto relative")}
    >
      <ul className="flex justify-center gap-8 p-8 pb-16 xl:p-12 xl:pb-20">
        {footerLinksKeys.map((e) => (
          <li
            key={`footer-link-${internalLinks[e].text}`}
            className="text-body"
          >
            <Link
              href={internalLinks[e].href}
              className="flex items-center gap-1"
            >
              <span className="text-[1.25em]">{internalLinks[e].emoji}</span>
              <span className="text-link">{internalLinks[e].text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
