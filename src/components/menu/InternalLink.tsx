import Link from "next/link";
import clsx from "clsx";
import React from "react";
import { ArrowForward } from "../icons";
import { useAppSelector } from "@/store";
import { internalLinks } from "@/models";

const InternalLink = ({
  text,
  href,
  color,
}: {
  text: string;
  href: string;
  color: string;
}) => {
  const {
    selectedSkillsFilter,
    howManyArticlesAreVisible,
    howManyProjectsAreVisible,
  } = useAppSelector((state) => state.system);

  let textContent = text;

  if (selectedSkillsFilter.length > 0) {
    if (href === internalLinks.allProjects.href) {
      textContent = `${howManyProjectsAreVisible} Project${howManyProjectsAreVisible > 1 ? "s" : ""}`;
    } else if (href === internalLinks.allArticles.href) {
      textContent = `${howManyArticlesAreVisible} Article${howManyArticlesAreVisible > 1 ? "s" : ""}`;
    }
  }

  return (
    <li>
      <Link className={clsx(color, "menu-link gap-2")} href={href}>
        {textContent}
        <span className="w-3.5">
          <ArrowForward />
        </span>
      </Link>
    </li>
  );
};

export default InternalLink;
