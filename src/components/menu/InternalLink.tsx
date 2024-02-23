import Link from "next/link";
import clsx from "clsx";
import React from "react";
import { ArrowForward } from "../icons";

const InternalLink = ({
  text,
  href,
  color,
}: {
  text: string;
  href: string;
  color: string;
}) => {
  return (
    <li>
      <Link
        className={clsx(
          color,
          "menu-link text-link-interactive gap-2 underline-offset-[3px] outline-offset-4 hover:underline hover:decoration-1",
        )}
        href={href}
      >
        {text}
        <span className="w-3.5">
          <ArrowForward />
        </span>
      </Link>
    </li>
  );
};

export default InternalLink;
