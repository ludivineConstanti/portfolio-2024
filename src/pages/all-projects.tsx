import { useEffect, startTransition } from "react";
import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import clsx from "clsx";
import { client, queryProjectLink } from "@/sanity/utils";
import type { ProjectData } from "@/models";
import {
  Layout,
  TitlePage,
  AllProjectsProjectListsWithTitle,
  NoArticlesOrProjectsFound,
} from "@/components";
import { internalLinks, InternalLinksIds } from "@/models";
import {
  returnProjectOrArticleYear,
  returnDataBasedOnFilterState,
  returnSkillsForFilter,
} from "@/utils";
import { useAppSelector, useAppDispatch } from "@/store";
import { setHowManyArticlesAndProjectsAreVisible } from "@/store/slices/system";

export const getStaticProps = async () => {
  const data = await client.fetch(groq`{
      "projects": *[_type == "project"] | order(dateEnd desc) {
        ${queryProjectLink}  
      },
      "articles": *[_type == "article"] {
        skillBadges[]->{_id} 
      },
      "skills": *[_type == "skillBadge"] | order(text asc){
        _id,
        text,
      }
    }`);

  const { projects, skills, articles } = data;

  const skillsFilter = returnSkillsForFilter({
    data: skills,
    projects,
    articles,
    showEmoji: false,
  });

  return {
    props: {
      data: {
        projects,
        articles,
        skillsFilter,
      },
    },
  };
};

const colorPrimary = "bg-indigo-950";
const colorSecondary = "bg-indigo-800";
const pageId = InternalLinksIds.allProjects;
const pageData = internalLinks[pageId];

const AllProjectsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useAppDispatch();

  const { selectedSkillsFilter } = useAppSelector((state) => state.system);

  const projects: { [key: string]: ProjectData[] } = {};

  const articlesLength = returnDataBasedOnFilterState(
    data.articles,
    selectedSkillsFilter,
  ).length;

  const initialProjectsData =
    selectedSkillsFilter.length === 0
      ? data.projects
      : returnDataBasedOnFilterState(data.projects, selectedSkillsFilter);

  initialProjectsData.forEach((project: ProjectData) => {
    const year = returnProjectOrArticleYear(project.dateEnd);

    const skillBadges = project.skillBadges
      ? project.skillBadges.sort((a, b) => (a.text > b.text ? 1 : -1))
      : [];
    const currentProject = { ...project, skillBadges };

    if (projects[year]) {
      projects[year].push(currentProject);
    } else {
      projects[year] = [currentProject];
    }
  });

  useEffect(() => {
    startTransition(() => {
      dispatch(
        setHowManyArticlesAndProjectsAreVisible({
          projects: initialProjectsData.length,
          articles: articlesLength,
        }),
      );
    });
  }, [dispatch, initialProjectsData, articlesLength]);

  return (
    <Layout
      title={pageData.text}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
      pageId={pageId}
      bottomNavigationLinks={Object.keys(projects)
        .reverse()
        .map((year) => ({
          href: year,
          text: year,
        }))}
      skillsFilter={data.skillsFilter}
    >
      <main
        className={clsx(
          colorPrimary,
          "flex min-h-[100vh] flex-col pb-individual-page xl:pb-individual-page-xl",
        )}
      >
        <TitlePage
          emoji={pageData.emoji}
          text={pageData.text}
          color={colorSecondary}
        />
        {Object.keys(projects).length > 0 ? (
          <AllProjectsProjectListsWithTitle
            color={colorSecondary}
            projects={projects}
          />
        ) : (
          <NoArticlesOrProjectsFound
            linksToArticlesOrProjects="articles"
            color={colorSecondary}
          />
        )}
      </main>
    </Layout>
  );
};

export default AllProjectsPage;
