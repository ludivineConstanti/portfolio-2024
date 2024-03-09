import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import { client, queryProjectLink } from "@/sanity/utils";
import {
  sortAlphabetically,
  sortByDateEnd,
  returnVisibleSkillBadges,
} from "@/utils";
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
  HomeSkillsSearchSection,
} from "@/components";
import type {
  ProjectData,
  ArticleData,
  WorkExperienceData,
  ProjectTeaserData,
  SkillBadgeData,
} from "@/models";
import { internalLinks, InternalLinksIds } from "@/models";
import { querySkillBadges } from "@/sanity/utils";
import { returnSkillsForFilter } from "@/utils";

export const getStaticProps = async () => {
  const data = await client.fetch(groq`{
    "dataHomePage": *[_type == "pageHome"] {
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
      articles[]->{
        _id,
        emoji,
        text,
        href,
        date,
        ${querySkillBadges}
      },
    },
    "dataClients": *[_type == "client"] {
      _id,
      id,
      text,
      href,
      developer,
      role->{text},
      workExperience->{emoji, title},
      colorPrimary,
    },
    "dataProjects": *[_type == "project"] | order(dateEnd desc) {
      _id,
      emoji,
      workExperience,
      client,
      title,
      dateEnd,
      slug,
      image{
        'url': asset->url,
        alt
      },
      skillBadges[]->{
        _id,
      }
    },
    "dataArticles": *[_type == "article"] {
      skillBadges[]->{
        _id,
      }
    },
    "dataSkills": *[_type == "skillBadge"] | order(text asc){
        _id,
        emoji,
        text,
      }
  }`);

  const { dataHomePage, dataClients, dataProjects, dataSkills, dataArticles } =
    data;

  const projects = dataHomePage[0].projects.map((project: ProjectData) => ({
    ...project,
    skillBadges: returnVisibleSkillBadges(project.skillBadges),
  }));

  const articles = dataHomePage[0].articles.map((article: ArticleData) => ({
    ...article,
    skillBadges: returnVisibleSkillBadges(article.skillBadges, 5),
  }));

  const allProjects = dataProjects.map(
    (e: { skillBadges: SkillBadgeData[] }) => {
      return {
        skillBadges: e.skillBadges.map((e) => {
          return { _id: e._id };
        }),
      };
    },
  );

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

  const skillsFilter = returnSkillsForFilter({
    data: dataSkills,
    projects,
    articles,
    showEmoji: true,
  });

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

  return {
    props: {
      data: {
        ...dataHomePage[0],
        workExperiences,
        skillsFilter,
        projects,
        allProjects,
        articles,
        allArticles: dataArticles,
        clients,
      },
    },
  };
};

// CONSTANTS

const workExperienceLink = {
  emoji: internalLinks.workExperiences.emoji,
  text: "Work Experiences",
  href: "workExperience",
};
const skillsFilterLink = {
  emoji: "⭐",
  text: "Skills",
  href: "skills",
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
  text: "Awards",
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
  skillsFilterLink,
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
      <main className="z-1 pointer-events-none relative overflow-x-hidden">
        <HomeHero />
        <HomeWorkExperienceSection
          emoji={workExperienceLink.emoji}
          title={workExperienceLink.text}
          id={workExperienceLink.href}
          colorSecondary={colorSecondary}
          workExperiences={data.workExperiences}
        />
        <HomeSkillsSearchSection
          emoji={skillsFilterLink.emoji}
          title={skillsFilterLink.text}
          id={skillsFilterLink.href}
          allProjects={data.allProjects}
          allArticles={data.allArticles}
          colorSecondary={colorSecondary}
          skillsFilter={data.skillsFilter}
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
