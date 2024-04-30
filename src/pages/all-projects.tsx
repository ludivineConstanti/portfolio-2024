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
  returnVisibleSkillBadges,
} from "@/utils";
import { useAppSelector } from "@/store";

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

  const filteredProjects = projects.filter((project: ProjectData) => {
    return project.visible && project.shownInProjectPage;
  });

  const skillsFilter = returnSkillsForFilter({
    data: skills,
    projects: filteredProjects,
    articles,
    showEmoji: false,
  });

  const dataProjects = filteredProjects.map((e: ProjectData) => ({
    ...e,
    skillBadges: returnVisibleSkillBadges(e.skillBadges),
  }));

  return {
    props: {
      data: {
        projects: dataProjects,
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
  const { selectedSkillsFilter } = useAppSelector((state) => state.system);

  const projects: { [key: string]: ProjectData[] } = {};

  const initialProjectsData =
    selectedSkillsFilter.length === 0
      ? data.projects
      : returnDataBasedOnFilterState(data.projects, selectedSkillsFilter);

  initialProjectsData.forEach((project: ProjectData) => {
    const year = returnProjectOrArticleYear(project.dateEnd);

    if (projects[year]) {
      projects[year].push(project);
    } else {
      projects[year] = [project];
    }
  });

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
      projects={data.projects}
      articles={data.articles}
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
