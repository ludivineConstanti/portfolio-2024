import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity/utils";
import { TitlePage, AllArticlesArticleListPerYear, Layout } from "@/components";

export const getStaticProps = async () => {
  const data = await client.fetch(groq`*[_type == "article"]{
    _id,
    category->{...},
    emoji,
    text,
    href,
    skillBadges[]->{...},
    date
  }`);

  return {
    props: {
      data,
    },
  };
};

const colorTitle = "bg-violet-900";

const AllArticles = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <main className="all-projects-all-articles-pb bg-violet-950">
        <TitlePage emoji="🕰️" text="All Articles" color={colorTitle} />
        <AllArticlesArticleListPerYear
          articles={data}
          year="2024"
          color={colorTitle}
        />
        <AllArticlesArticleListPerYear
          articles={data}
          year="2024"
          color={colorTitle}
        />
      </main>
    </Layout>
  );
};

export default AllArticles;
