import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import { client, queryProject, queryArticle } from "@/sanity/utils";
import { sortAlphabetically } from "@/utils";
import {
  Layout,
  HomeHero,
  HomeWorkExperienceSection,
  HomeProjectSection,
  HomeArticleSection,
} from "@/components";
import type {
  ProjectData,
  ArticleData,
  WorkExperienceData,
  ProjectTeaserData,
} from "@/models";
import { querySkillBadges } from "@/sanity/utils";

export const getStaticProps = async () => {
  const dataHomePage = await client.fetch(groq`*[_type == "pageHome"]{
      title,
      sectionProjects{emoji,title,projects[]->{${queryProject}}},
      sectionArticles{emoji,title,articles[]->{${queryArticle}}},
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
    }
    ${querySkillBadges}
  }`);

  const dataProjects =
    await client.fetch(groq`*[_type == "project"] | order(dateEnd desc){
  _id,
  workExperience,
  dateEnd,
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

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <main>
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

export default Home;
