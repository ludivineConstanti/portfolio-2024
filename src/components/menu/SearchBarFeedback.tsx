import React from "react";
import clsx from "clsx";
import { InternalLinksIds } from "@/models";
import { useAppSelector } from "@/store";

const allProjectsPageId = InternalLinksIds.allProjects;

const SearchBarFeedback = ({
  pageId,
  color,
}: {
  pageId?: string;
  color: string;
}) => {
  const {
    selectedSkillsFilter,
    howManyArticlesAreVisible,
    howManyProjectsAreVisible,
  } = useAppSelector((state) => state.system);

  const number =
    pageId === allProjectsPageId
      ? howManyProjectsAreVisible
      : howManyArticlesAreVisible;
  const text = pageId === allProjectsPageId ? "Project" : "Article";
  return (
    <>
      {selectedSkillsFilter.length > 0 && (
        <p className={clsx(color, "text-body rounded-2xl px-3 py-1")}>
          {number} {text}
          {number > 1 ? "s" : ""}
        </p>
      )}
    </>
  );
};

export default SearchBarFeedback;
