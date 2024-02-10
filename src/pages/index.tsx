import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import clsx from "clsx";
import {
  client,
  queryProjectLink,
  queryArticleLink,
  queryMenu,
} from "@/sanity/utils";
import { sortAlphabetically } from "@/utils";
import {
  Layout,
  HomeHero,
  HomeWorkExperienceSection,
  HomeProjectSection,
  HomeArticleSection,
  Menu,
} from "@/components";
import type {
  ProjectData,
  ArticleData,
  WorkExperienceData,
  ProjectTeaserData,
  InternalLinkData,
} from "@/models";
import { querySkillBadges } from "@/sanity/utils";

// is used to get the title of the page
// if nothing is returned, it means that the path in the CMS is wrong
const pageHref = "/";

export const getStaticProps = async () => {
  const dataMenu = await client.fetch(groq`*[_type == "componentMenu"]{
    ${queryMenu}
  }`);

  const dataHomePage = await client.fetch(groq`*[_type == "pageHome"]{
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
    await client.fetch(groq`*[_type == "workExperience"]{
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
  dateEnd,
  slug,
  image{
    'url': asset->url,
    alt
  },
}`);

  const dataWorkExperiencesWithProjects = dataWorkExperiences.map(
    (workExperience: WorkExperienceData) => ({
      ...workExperience,
      skillBadges: sortAlphabetically(workExperience.skillBadges),
      projects: dataProjects
        .filter(
          (project: ProjectTeaserData) =>
            project.workExperience &&
            project.workExperience._ref === workExperience._id,
        )
        .sort((a: ProjectTeaserData, b: ProjectTeaserData) => {
          if (a.dateEnd === undefined && b.dateEnd !== undefined) {
            return -1;
          } else if (a.dateEnd !== undefined && b.dateEnd === undefined) {
            return 1;
          }
          return 0;
        }),
    }),
  );

  const data = {
    menu: {
      ...dataMenu[0],
      internalLinks: dataMenu[0].internalLinks.filter(
        (link: InternalLinkData) => link.href !== pageHref,
      ),
    },
    ...dataHomePage[0],
    ...sectionProjects,
    ...sectionArticles,
    sectionWorkExperiences: {
      workExperiences: dataWorkExperiencesWithProjects,
    },
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
  return (
    <Layout>
      <Menu
        internalLinks={data.menu.internalLinks}
        socialMedias={data.menu.socialMedias}
        colorPrimary={colorPrimary}
        colorSecondary={colorSecondary}
      />
      <main className={clsx(colorPrimary)}>
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
      </main>
    </Layout>
  );
};

export default HomePage;
