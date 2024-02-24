import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import clsx from "clsx";
import { client, queryArticleLink } from "@/sanity/utils";
import { sortAlphabetically, returnProjectOrArticleYear } from "@/utils";
import type { ArticleData } from "@/models";
import { internalLinks, InternalLinksIds } from "@/models";
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
      data: {
        articles: sortedData,
      },
    },
  };
};

const colorPrimary = "bg-violet-950";
const colorSecondary = "bg-violet-800";

const AllArticlesPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const pageId = InternalLinksIds.allArticles;
  const pageData = internalLinks[InternalLinksIds.allArticles];
  return (
    <Layout
      title={pageData.text}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
      pageId={pageId}
      bottomNavigationLinks={Object.keys(data.articles)
        .reverse()
        .map((year) => ({
          href: year,
          text: year,
        }))}
    >
      <main className={clsx(colorPrimary, "all-projects-all-articles-pb")}>
        <TitlePage
          emoji={pageData.emoji}
          text={pageData.text}
          color={colorSecondary}
        />
        <AllArticlesArticleListPerYear
          articles={data.articles}
          color={colorSecondary}
        />
      </main>
    </Layout>
  );
};

export default AllArticlesPage;
