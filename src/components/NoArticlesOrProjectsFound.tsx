import React from "react";
import LinkCTA from "./LinkCTA";
import { internalLinks } from "../models/constantsMenu";
import { useAppSelector } from "@/store";

const NoArticlesOrProjectsFound = ({
  linksToArticlesOrProjects,
  color,
}: {
  linksToArticlesOrProjects: "articles" | "projects";
  color: string;
}) => {
  const {
    selectedSkillsFilter,
    howManyArticlesAreVisible,
    howManyProjectsAreVisible,
  } = useAppSelector((state) => state.system);
  const number =
    linksToArticlesOrProjects === "projects"
      ? howManyProjectsAreVisible
      : howManyArticlesAreVisible;
  const text =
    linksToArticlesOrProjects === "projects"
      ? `Project${howManyProjectsAreVisible > 1 ? "s" : ""}`
      : `Article${howManyArticlesAreVisible > 1 ? "s" : ""}`;
  return (
    <div className="mx-custom pt-individual-page xl:pt-individual-page-xl flex h-full grow items-center justify-center">
      <div className="flex max-w-[50rem] flex-col gap-16">
        <p className="text-h3">
          There are currently no{" "}
          {linksToArticlesOrProjects === "projects" ? "Articles" : "Projects"}{" "}
          matching{" "}
          {selectedSkillsFilter.length > 1 ? "these skills" : "this skill"}, but
          you can find {number} {text}{" "}
          {linksToArticlesOrProjects === "projects" ? "using it" : "about it"}{" "}
          on the {text} page
        </p>
        <LinkCTA
          href={
            linksToArticlesOrProjects === "projects"
              ? internalLinks.allProjects.href
              : internalLinks.allArticles.href
          }
          text={`${number} ${text}`}
          color={color}
          alignCenter={false}
          marginBottom="none"
        />
      </div>
    </div>
  );
};

export default NoArticlesOrProjectsFound;
