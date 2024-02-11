import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import clsx from "clsx";
import { client, queryProjectLink, queryMenu } from "@/sanity/utils";
import type { ProjectData, InternalLinkData } from "@/models";
import {
  Layout,
  TitlePage,
  AllProjectsProjectListsWithTitle,
  Menu,
} from "@/components";
import { returnProjectOrArticleYear } from "@/utils";

// is used to get the title of the page
// if nothing is returned, it means that the path in the CMS is wrong
const pageHref = "/all-projects";

export const getStaticProps = async () => {
  const dataMenu = await client.fetch(groq`*[_type == "componentMenu"]{
    ${queryMenu}
  }`);

  const dataTitle = dataMenu[0].internalLinks.find(
    (internalLink: InternalLinkData) => internalLink.href === pageHref,
  );

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
        menu: {
          ...dataMenu[0],
          internalLinks: dataMenu[0].internalLinks.filter(
            (link: InternalLinkData) => link.href !== pageHref,
          ),
        },
        title: dataTitle,
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
  return (
    <Layout title={data.title.text}>
      <Menu
        internalLinks={data.menu.internalLinks}
        socialMedias={data.menu.socialMedias}
        colorPrimary={colorPrimary}
        colorSecondary={colorSecondary}
      />
      <main className={clsx(colorPrimary, "all-projects-all-articles-pb")}>
        <TitlePage
          emoji={data.title.emoji}
          text={data.title.text}
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
