import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import { client, queryProject, queryArticle } from "@/sanity/utils";
import {
  Layout,
  HomeHero,
  HomeWorkExperienceSection,
  HomeProjectSection,
  HomeArticleSection,
} from "@/components";

export const getStaticProps = async () => {
  const data = await client.fetch(groq`*[_type == "pageHome"]{
      title,
      sectionProjects{emoji,title,projects[]->{${queryProject}}},
      sectionArticles{emoji,title,articles[]->{${queryArticle}}},
    }`);

  return {
    props: {
      data: data[0],
    },
  };
};

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <main className="bg-blue-950">
        <HomeHero />
        <HomeWorkExperienceSection />
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
