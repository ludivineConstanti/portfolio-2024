"use client";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React from "react";
import {
  SearchBarComponentProps,
  ArticleData,
  ProjectData,
  SelectedSkillsFilterProps,
  InternalLinksIds,
} from "@/models";
import type { CSSObjectWithLabel } from "react-select";
import { useAppDispatch, useAppSelector } from "@/store";
import { setSkillsFilterSettings } from "@/store/slices/system";
import { returnDataBasedOnFilterState } from "@/utils";

const Select = dynamic(() => import("react-select"));

// has to be set with JavaScript to override the default styles
const styles = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    minHeight: 0,
  }),
};

const SearchBar = ({
  skillsFilter,
  projects,
  articles,
  pageId,
}: {
  skillsFilter: SearchBarComponentProps;
  projects: ProjectData[];
  articles: ArticleData[];
  pageId?: InternalLinksIds;
}) => {
  const dispatch = useAppDispatch();
  const { selectedSkillsFilter } = useAppSelector((state) => state.system);
  const ariaLabel = `Filter ${pageId === InternalLinksIds.allProjects ? "Projects" : "Articles"} by skills (React...)`;

  return (
    <Select
      aria-label={ariaLabel}
      id="react-select-menu-search-bar"
      placeholder={ariaLabel}
      options={skillsFilter}
      isSearchable={true}
      isMulti={true}
      unstyled={true}
      value={selectedSkillsFilter}
      onChange={(v) => {
        const selectedSkills = v as SelectedSkillsFilterProps;
        const numberOfProjects = returnDataBasedOnFilterState(
          projects,
          selectedSkills,
        ).length;
        const numberOfArticles = returnDataBasedOnFilterState(
          articles,
          selectedSkills,
        ).length;
        dispatch(
          setSkillsFilterSettings({
            selectedSkills,
            projects: numberOfProjects,
            articles: numberOfArticles,
          }),
        );
      }}
      styles={styles}
      className="z-10"
      classNames={{
        container: () =>
          "outline-2 outline-white text-body min-h-fit text-blue-950 border-solid sm:max-w-52 max-w-[calc(100vw-10rem)] xl:max-w-[40rem] border-2 border-blue-950 px-2 bg-white rounded-2xl pointer-events-auto",
        dropdownIndicator: (e) =>
          clsx(
            { "rotate-180": e.selectProps.menuIsOpen },
            "transition-transform [&>svg>path]:fill-blue-800 cursor-pointer",
          ),
        placeholder: () => "text-gray-500 min-w-60",
        // dropdown
        menuList: () => "-bottom-2 -left-2 rounded-lg py-2 bg-white",
        // the absolute position should only be present when there's no skills inside of the dropdown
        // (otherwise, the text will appear on top of the selected skills)
        input: (e) => {
          return clsx({
            "z-10 absolute top-0 left-0":
              selectedSkillsFilter.length === 0 && e.value === "",
            "min-w-60": selectedSkillsFilter.length === 0,
          });
        },
        option: () => "cursor-pointer hover:bg-blue-100 bg-white px-2 py-0.5",
        // selected values
        valueContainer: () => "gap-1.5 flex py-1",
        multiValue: () => "bg-blue-200 rounded-sm px-1 flex gap-0.5",
      }}
    />
  );
};

export default SearchBar;
