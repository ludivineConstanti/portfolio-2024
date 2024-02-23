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
    <li className=" transition-transform hover:scale-110 active:scale-125">
      <Link className={clsx(color, "menu-link")} href={href}>
        {text}
        <span className="w-3.5">
          <ArrowForward />
        </span>
      </Link>
    </li>
  );
};

export default InternalLink;
