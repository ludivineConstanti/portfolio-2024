import React from "react";
import clsx from "clsx";
import { SocialMediaData } from "@/models";

interface SocialMediaProps extends SocialMediaData {
  color: string;
}

const SocialMedia = ({ text, href, icon, color }: SocialMediaProps) => {
  return (
    <li>
      <a
        href={href}
        className={clsx(
          color,
          "pointer-events-auto block h-12 w-12 rounded-full border-2 border-solid border-white p-3 sm:h-9 sm:w-9 sm:p-2",
        )}
        target="_blank"
      >
        <span className="sr-only">{text}</span>
        <img className="h-full w-full" src={icon.asset.url} alt="" />
      </a>
    </li>
  );
};

export default SocialMedia;
