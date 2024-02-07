import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import { client, queryProjectLink } from "@/sanity/utils";
import type { ProjectData } from "@/models";
import {
  Layout,
  TitlePage,
  AllProjectsProjectListsWithTitle,
} from "@/components";
import { returnProjectOrArticleYear } from "@/utils";

const colorBackgroundTitle = "bg-blue-800";

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
      data: sortedData,
    },
  };
};

const AllProjectsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <main className="all-projects-all-articles-pb bg-blue-950">
        <TitlePage
          emoji="🕰️"
          text="All Projects"
          color={colorBackgroundTitle}
        />
        <AllProjectsProjectListsWithTitle
          color={colorBackgroundTitle}
          projects={data}
        />
      </main>
    </Layout>
  );
};

export default AllProjectsPage;
