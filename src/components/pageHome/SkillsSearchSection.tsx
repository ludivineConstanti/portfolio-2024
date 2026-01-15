import dynamic from "next/dynamic";
import clsx from "clsx";
import Section from "./Section";
import type {
  SearchBarComponentProps,
  SelectedSkillsFilterProps,
} from "@/models";
import { LinkCTA } from "..";
import { internalLinks } from "@/models";
import { returnDataBasedOnFilterState } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/store";
import { setSkillsFilterSettings } from "@/store/slices/system";

const Select = dynamic(() => import("react-select"), { ssr: false });

const SkillsSearchSection = ({
  id,
  emoji,
  title,
  colorSecondary,
  skillsFilter,
  allProjects,
  allArticles,
}: {
  id: string;
  emoji: string;
  title: string;
  colorSecondary: string;
  skillsFilter: SearchBarComponentProps;
  allProjects: { skillBadges: { _id: string }[] }[];
  allArticles: { skillBadges: { _id: string }[] }[];
}) => {
  const dispatch = useAppDispatch();
  const {
    selectedSkillsFilter,
    howManyArticlesAreVisible,
    howManyProjectsAreVisible,
  } = useAppSelector((state) => state.system);

  return (
    <Section
      id={id}
      emoji={emoji}
      title={title}
      color={colorSecondary}
      customClass="bg-blue-950 pointer-events-auto"
    >
      <div className="py-20 xl:py-0">
        <Select
          aria-label="Choose a skill (TypeScript, React, Node.js...) to filter projects and articles, on the All Personal Projects and All Article pages"
          id="react-select-search-bar-home-page"
          placeholder="Choose a skill (TypeScript, React, Node.js...)"
          options={skillsFilter}
          isSearchable={true}
          isMulti={true}
          unstyled={true}
          value={selectedSkillsFilter}
          onChange={(v) => {
            const selectedSkills = v as SelectedSkillsFilterProps;
            const numberOfProjects = returnDataBasedOnFilterState(
              allProjects,
              selectedSkills,
            ).length;
            const numberOfArticles = returnDataBasedOnFilterState(
              allArticles,
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
          classNames={{
            container: () =>
              "text-h5 min-w-[calc(100vw-4rem)] max-w-[calc(100vw-4rem)] outline-2 rounded-2xl outline-white text-blue-950 border-solid border-2 border-blue-700 px-2 bg-white pointer-events-auto sm:min-h-16 sm:p-2 sm:min-w-min sm:w-[40rem] xl:w-[48rem] xl:rounded-[3rem]",
            dropdownIndicator: (e) =>
              clsx(
                { "rotate-180": e.selectProps.menuIsOpen },
                "transition-transform [&>svg>path]:fill-blue-700 [&:hover>svg>path]:fill-blue-800 [&:active>svg>path]:fill-blue-950 cursor-pointer [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-10 sm:[&>svg]:h-10",
              ),
            clearIndicator: () =>
              "transition-color [&>svg>path]:fill-blue-700 [&:hover>svg>path]:fill-blue-800 [&:active>svg>path]:fill-blue-950 cursor-pointer [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-10 sm:[&>svg]:h-10",
            control: () => "px-1 sm:px-3",
            placeholder: () => "text-gray-500",
            // the absolute position should only be present when there's no skills inside of the dropdown
            // (otherwise, the text will appear on top of the selected skills)
            input: () =>
              clsx({
                "z-10 absolute top-0 left-0": selectedSkillsFilter.length === 0,
              }),
            // dropdown
            menuList: () =>
              "-bottom-2 -left-2 rounded-lg py-2 bg-white [&>svg>path]:fill-blue-700 [&>svg]:h-24 [&>svg]:w-24 sm:py-4 sm:[&>svg]:h-40 sm:[&>svg]:w-40",
            option: () =>
              "cursor-pointer text-h6 hover:bg-blue-100 bg-white px-2 sm:px-6 py-1",
            // selected values
            valueContainer: () => "gap-1.5 flex py-1 min-h-6 sm:min-h-8",
            multiValue: () =>
              "bg-blue-100 text-h6 rounded-sm px-1 flex gap-0.5",
            multiValueRemove: () =>
              "transition-color [&>svg]:w-5 [&>svg]:h-5 [&>svg>path]:fill-blue-700 [&:hover>svg>path]:fill-blue-800 [&:active>svg>path]:fill-blue-950",
          }}
        />
        <>
          {selectedSkillsFilter && selectedSkillsFilter.length > 0 && (
            <nav className="mt-12 sm:mt-20">
              <ul className="flex flex-wrap justify-center gap-8 sm:gap-20 xl:gap-24">
                {howManyProjectsAreVisible > 0 && (
                  <li>
                    <LinkCTA
                      href={internalLinks.allProjects.href}
                      text={`${howManyProjectsAreVisible} Project${howManyProjectsAreVisible > 1 ? "s" : ""}`}
                      color={colorSecondary}
                      marginBottom="none"
                    />
                  </li>
                )}
                {howManyArticlesAreVisible > 0 && (
                  <li>
                    <LinkCTA
                      href={internalLinks.allArticles.href}
                      text={`${howManyArticlesAreVisible} Article${howManyArticlesAreVisible > 1 ? "s" : ""}`}
                      color={colorSecondary}
                      marginBottom="none"
                    />
                  </li>
                )}
              </ul>
            </nav>
          )}
        </>
      </div>
    </Section>
  );
};

export default SkillsSearchSection;
