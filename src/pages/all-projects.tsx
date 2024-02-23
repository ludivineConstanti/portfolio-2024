import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import clsx from "clsx";
import { client, queryProjectLink } from "@/sanity/utils";
import type { ProjectData } from "@/models";
import {
  Layout,
  TitlePage,
  AllProjectsProjectListsWithTitle,
} from "@/components";
import { internalLinks, InternalLinksIds } from "@/models";
import { returnProjectOrArticleYear } from "@/utils";

export const getStaticProps = async () => {
  const data =
    await client.fetch(groq`*[_type == "project"] | order(dateEnd desc){
    ${queryProjectLink}  
    }`);

  const sortedData: { [key: string]: ProjectData[] } = {};

  data.forEach((project: ProjectData) => {
    const year = returnProjectOrArticleYear(project.dateEnd);

    const skillBadges = project.skillBadges
      ? project.skillBadges.sort((a, b) => (a.text > b.text ? 1 : -1))
      : [];
    const currentProject = { ...project, skillBadges };

    if (sortedData[year]) {
      sortedData[year].push(currentProject);
    } else {
      sortedData[year] = [currentProject];
    }
  });

  return {
    props: {
      data: {
        projects: sortedData,
      },
    },
  };
};

const colorPrimary = "bg-blue-950";
const colorSecondary = "bg-blue-800";

const AllProjectsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const pageId = InternalLinksIds.allProjects;
  const pageData = internalLinks[pageId];
  return (
    <Layout
      title={pageData.text}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
      pageId={pageId}
    >
      <main className={clsx(colorPrimary, "all-projects-all-articles-pb")}>
        <TitlePage
          emoji={pageData.emoji}
          text={pageData.text}
          color={colorSecondary}
        />
        <AllProjectsProjectListsWithTitle
          color={colorSecondary}
          projects={data.projects}
        />
      </main>
    </Layout>
  );
};

export default AllProjectsPage;
