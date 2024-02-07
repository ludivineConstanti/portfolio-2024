import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import { client, queryArticleLink } from "@/sanity/utils";
import { sortAlphabetically, returnProjectOrArticleYear } from "@/utils";
import type { ArticleData } from "@/models";
import { TitlePage, AllArticlesArticleListPerYear, Layout } from "@/components";

export const getStaticProps = async () => {
  const data = await client.fetch(groq`*[_type == "article"] | order(date desc){
    ${queryArticleLink}
  }`);

  const sortedData: { [key: string]: { [key: string]: ArticleData[] } } = {};

  data.forEach((article: ArticleData) => {
    const year = returnProjectOrArticleYear(article.date);
    const skillBadges = article.skillBadges
      ? sortAlphabetically(article.skillBadges)
      : [];
    const currentArticle = { ...article, skillBadges };

    let key = "";
    if (currentArticle.category._type === "project") {
      key = `Project: ${currentArticle.category.title}`;
    }
    if (currentArticle.category._type === "articleCategory") {
      key = currentArticle.category.text;
    }

    if (sortedData[year]) {
      if (sortedData[year][key]) {
        sortedData[year][key].push(currentArticle);
      } else {
        sortedData[year][key] = [currentArticle];
      }
    } else {
      sortedData[year] = {};
      sortedData[year][key] = [currentArticle];
    }
  });

  return {
    props: {
      data: sortedData,
    },
  };
};

const colorTitle = "bg-violet-900";

const AllArticlesPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <main className="all-projects-all-articles-pb bg-violet-950">
        <TitlePage emoji="📰" text="All Articles" color={colorTitle} />
        <AllArticlesArticleListPerYear articles={data} color={colorTitle} />
      </main>
    </Layout>
  );
};

export default AllArticlesPage;
