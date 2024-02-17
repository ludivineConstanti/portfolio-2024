import React from "react";
import clsx from "clsx";
import { Tooltip } from "@/components";
import SocialMediaIcon from "./SocialMediaIcon";
import { SocialMediaIds } from "@/models";

const SocialMedia = ({
  text,
  href,
  id,
  color,
}: {
  text: string;
  href: string;
  id: SocialMediaIds;
  color: string;
}) => {
  return (
    <li>
      <a
        href={href}
        className={clsx(
          color,
          "group pointer-events-auto relative text-white outline-none",
        )}
        target="_blank"
      >
        <span
          className={clsx(
            color,
            "flex h-12 w-12 items-center justify-center rounded-full border-2 border-solid border-current p-3 outline-none transition-transform hover:scale-125 active:scale-150 group-focus-visible:outline-2 group-focus-visible:outline-white sm:h-9 sm:w-9 sm:p-2",
          )}
        >
          <SocialMediaIcon id={id} />
        </span>
        <Tooltip text={`${text} ↗️`} side="left" />
      </a>
    </li>
  );
};

export default SocialMedia;
