import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { InternalLinkData } from "@/models";

interface InternalLinkProps extends InternalLinkData {
  color: string;
}

const InternalLink = ({ text, href, color }: InternalLinkProps) => {
  return (
    <li
      className={clsx(
        color,
        "text-body pointer-events-auto w-fit rounded-full border-2 border-solid border-white px-3 py-1",
      )}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default InternalLink;
