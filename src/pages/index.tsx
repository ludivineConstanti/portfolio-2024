import { useState } from "react";
import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import { client, queryProjectLink, queryArticleLink } from "@/sanity/utils";
import { sortAlphabetically, sortByDateEnd } from "@/utils";
import {
  Layout,
  HomeHero,
  HomeWorkExperienceSection,
  HomeProjectSection,
  HomeArticleSection,
  HomeClientSection,
  Menu,
  Canvas,
} from "@/components";
import type {
  ProjectData,
  ArticleData,
  WorkExperienceData,
  ProjectTeaserData,
} from "@/models";
import { internalLinks, InternalLinksIds } from "@/models";
import { querySkillBadges } from "@/sanity/utils";

export const getStaticProps = async () => {
  const dataHomePage = await client.fetch(groq`*[_type == "pageHome"]{
      title,
      sectionProjects{emoji,title,projects[]->{${queryProjectLink}}},
      sectionArticles{emoji,title,articles[]->{${queryArticleLink}}},
    }`);

  const sectionProjects = {
    ...dataHomePage[0].sectionProjects,
    projects: dataHomePage[0].sectionProjects.projects.map(
      (project: ProjectData) => ({
        ...project,
        skillBadges: sortAlphabetically(project.skillBadges),
      }),
    ),
  };

  const sectionArticles = {
    ...dataHomePage[0].sectionArticles,
    articles: dataHomePage[0].sectionArticles.articles.map(
      (article: ArticleData) => ({
        ...article,
        skillBadges: sortAlphabetically(article.skillBadges),
      }),
    ),
  };

  const dataWorkExperiences =
    await client.fetch(groq`*[_type == "workExperience"] | order(dateEnd desc){
    _id,
    title,
    role,
    text,
    location,
    dateStart,
    dateEnd,
    href,
    colorPrimary,
    colorSecondary,
    colorLogo,
    colorSkillBadge,
    logo {
      asset->{
        url
      }
    },
    ${querySkillBadges}
  }`);

  const dataProjects =
    await client.fetch(groq`*[_type == "project"] | order(dateEnd desc){
  _id,
  workExperience,
  client,
  title,
  dateEnd,
  slug,
  image{
    'url': asset->url,
    alt
  },
}`);

  const dataWorkExperiencesWithProjects = dataWorkExperiences.map(
    (workExperience: WorkExperienceData) => {
      const workExperienceProjects = dataProjects.filter(
        (project: ProjectTeaserData) =>
          project.workExperience &&
          project.workExperience._ref === workExperience._id,
      );
      return {
        ...workExperience,
        skillBadges: sortAlphabetically(workExperience.skillBadges),
        projects: sortByDateEnd(workExperienceProjects),
      };
    },
  );

  const dataClients = await client.fetch(groq`*[_type == "client"]{
    _id,
    id,
    text,
    href,
    developer,
    role->{text},
    workExperience->{emoji, title},
    colorPrimary,
  }`);

  const clientsWithProjects = dataClients.map((client: any) => {
    const hasProject =
      dataProjects.filter(
        (e: { client?: { _ref: string } }) =>
          e.client && e.client._ref === client._id,
      ).length > 0;
    return { ...client, hasProject: hasProject || null };
  });

  interface ClientSortingProps {
    hasProject: true | null;
    developer: true | null;
  }

  const clients = clientsWithProjects.sort(
    (a: ClientSortingProps, b: ClientSortingProps) => {
      // clients with no projects should be at the end
      if (a.hasProject && b.hasProject === null) return -1;
      if (a.hasProject === null && b.hasProject) return 1;

      // developer experience should be at the beginning
      if (a.developer && b.developer === null) return -1;
      if (a.developer === null && b.developer) return 1;

      return 0;
    },
  );

  const workExperiences = sortByDateEnd(dataWorkExperiencesWithProjects);
  const data = {
    ...dataHomePage[0],
    sectionWorkExperiences: {
      workExperiences,
    },
    ...sectionProjects,
    ...sectionArticles,
    clients,
  };

  return {
    props: {
      data,
    },
  };
};

const colorPrimary = "bg-blue-950";
const colorSecondary = "bg-blue-800";

const HomePage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const pageId = InternalLinksIds.home;
  const pageData = internalLinks[pageId];

  return (
    <Layout title={pageData.text}>
      <Menu
        colorPrimary={colorPrimary}
        colorSecondary={colorSecondary}
        pageId={pageId}
      />
      <Canvas />
      <main className="z-1 pointer-events-none relative">
        <HomeHero />
        <HomeWorkExperienceSection
          workExperiences={data.sectionWorkExperiences.workExperiences}
        />
        <HomeProjectSection
          emoji={data.sectionProjects.emoji}
          title={data.sectionProjects.title}
          projects={data.sectionProjects.projects}
        />
        <HomeArticleSection
          emoji={data.sectionArticles.emoji}
          title={data.sectionArticles.title}
          articles={data.sectionArticles.articles}
        />
        <HomeClientSection clients={data.clients} />
      </main>
    </Layout>
  );
};

export default HomePage;
