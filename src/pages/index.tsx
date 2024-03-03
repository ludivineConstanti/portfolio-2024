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
  HomeAwardSection,
  HomeClientSection,
  Canvas,
  HomeTestimoniesSection,
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
      workExperiences[]->{
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
      },
      projects[]->{${queryProjectLink}},
      articles[]->{${queryArticleLink}},
    }`);

  const projects = dataHomePage[0].projects.map((project: ProjectData) => ({
    ...project,
    skillBadges: sortAlphabetically(project.skillBadges),
  }));

  const articles = dataHomePage[0].articles.map((article: ArticleData) => ({
    ...article,
    skillBadges: sortAlphabetically(article.skillBadges),
  }));

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

  const dataWorkExperiencesWithProjects = dataHomePage[0].workExperiences.map(
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
    workExperiences,
    projects,
    articles,
    clients,
  };

  return {
    props: {
      data,
    },
  };
};

// CONSTANTS

const workExperienceLink = {
  emoji: internalLinks.workExperiences.emoji,
  text: internalLinks.workExperiences.text,
  href: "workExperience",
};
const projectsLink = {
  emoji: internalLinks.allProjects.emoji,
  text: "Projects",
  href: "projects",
};
const articlesLink = {
  emoji: internalLinks.allArticles.emoji,
  text: "Articles",
  href: "articles",
};
const awardsLink = {
  emoji: internalLinks.awards.emoji,
  text: internalLinks.awards.text,
  href: "awards",
};
const clientsLink = {
  emoji: "📔",
  text: "Clients",
  href: "clients",
};
const testimoniesLink = {
  emoji: "📖",
  text: "Testimonial",
  href: "testimonial",
};
const bottomNavigationLinks = [
  workExperienceLink,
  projectsLink,
  articlesLink,
  awardsLink,
  clientsLink,
  testimoniesLink,
];

const colorPrimary = "bg-blue-950";
const colorSecondary = "bg-blue-800";
const pageId = InternalLinksIds.home;
const pageData = internalLinks[pageId];

const HomePage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout
      title={pageData.text}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
      pageId={pageId}
      bottomNavigationLinks={bottomNavigationLinks}
    >
      <Canvas />
      <main className="z-1 pointer-events-none relative">
        <HomeHero />
        <HomeWorkExperienceSection
          emoji={workExperienceLink.emoji}
          title={workExperienceLink.text}
          id={workExperienceLink.href}
          colorSecondary={colorSecondary}
          workExperiences={data.workExperiences}
        />
        <HomeProjectSection
          emoji={projectsLink.emoji}
          title={projectsLink.text}
          id={projectsLink.href}
          colorSecondary={colorSecondary}
          projects={data.projects}
        />
        <HomeArticleSection
          emoji={articlesLink.emoji}
          title={articlesLink.text}
          id={articlesLink.href}
          colorSecondary={colorSecondary}
          articles={data.articles}
        />
        <HomeAwardSection
          emoji={awardsLink.emoji}
          title={awardsLink.text}
          id={awardsLink.href}
          colorSecondary={colorSecondary}
        />
        <HomeClientSection
          emoji={clientsLink.emoji}
          title={clientsLink.text}
          id={clientsLink.href}
          colorSecondary={colorSecondary}
          clients={data.clients}
        />
        <HomeTestimoniesSection
          emoji={testimoniesLink.emoji}
          title={testimoniesLink.text}
          id={testimoniesLink.href}
          colorSecondary={colorSecondary}
        />
      </main>
    </Layout>
  );
};

export default HomePage;
