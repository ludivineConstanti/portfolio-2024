import React from "react";
import clsx from "clsx";
import { SocialMediaData } from "@/models";
import { Tooltip } from "@/components";

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
          "group pointer-events-auto relative outline-none",
        )}
        target="_blank"
      >
        <span
          className={clsx(
            color,
            "block h-12 w-12 rounded-full border-2 border-solid border-white p-3 outline-none transition-transform hover:scale-125 active:scale-150 group-focus-visible:outline-2 group-focus-visible:outline-white sm:h-9 sm:w-9 sm:p-2",
          )}
        >
          <img className="h-full w-full" src={icon.asset.url} alt="" />
        </span>
        <Tooltip text={`${text}`} side="left" />
      </a>
    </li>
  );
};

export default SocialMedia;
