import Link from "next/link";
import clsx from "clsx";
import React from "react";
import { InternalLinkData } from "@/models";

interface InternalLinkProps extends InternalLinkData {
  color: string;
}

const InternalLink = ({ text, href, color }: InternalLinkProps) => {
  return (
    <li className="transition-transform hover:scale-110 active:scale-125">
      <Link
        className={clsx(
          color,
          "text-link-interactive text-body pointer-events-auto rounded-full border-2 border-solid border-white px-2 py-1 underline-offset-[3px] outline-offset-4 hover:underline hover:decoration-1 focus-visible:outline-1 focus-visible:outline-white",
        )}
        href={href}
      >
        {text}
      </Link>
    </li>
  );
};

export default InternalLink;
