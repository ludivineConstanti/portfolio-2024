"use client";

import dynamic from "next/dynamic";
import React from "react";
import { SearchBarComponentProps } from "@/models";
import type { CSSObjectWithLabel } from "react-select";
import { useAppDispatch } from "@/store";
import { setSelectedSkillsFilter } from "@/store/slices/system";
import { useAppSelector } from "@/store";

const Select = dynamic(() => import("react-select"));

const styles = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    minHeight: 0,
  }),
};

const SearchBar = ({
  skillsFilter,
}: {
  skillsFilter: SearchBarComponentProps;
}) => {
  const dispatch = useAppDispatch();
  const { selectedSkillsFilter } = useAppSelector((state) => state.system);
  return (
    <Select
      id="react-select-menu-search-bar"
      placeholder="Filter by skills"
      options={skillsFilter}
      isSearchable={true}
      isMulti={true}
      unstyled={true}
      value={selectedSkillsFilter}
      onChange={(v) => {
        dispatch(setSelectedSkillsFilter(v));
      }}
      styles={styles}
      classNames={{
        container: () =>
          "outline-2 outline-white text-body min-h-fit text-blue-950 border-solid min-w-44 sm:max-w-52 max-w-[calc(100vw-10rem)] xl:max-w-[40rem] border-2 border-blue-950 min-w-30 px-2 bg-white rounded-2xl pointer-events-auto",
        dropdownIndicator: () => "[&>svg>path]:fill-blue-800 cursor-pointer",
        placeholder: () => "text-gray-500",
        // dropdown
        menuList: () => "-bottom-2 -left-2 rounded-lg py-2 bg-white",
        option: () => "cursor-pointer hover:bg-blue-100 bg-white px-2 py-0.5",
        // selected values
        valueContainer: () => "gap-1.5 flex py-1",
        multiValue: () => "bg-blue-200 rounded-sm px-1 flex gap-0.5",
      }}
    />
  );
};

export default SearchBar;
