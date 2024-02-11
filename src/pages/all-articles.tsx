import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import clsx from "clsx";
import { client, queryArticleLink, queryMenu } from "@/sanity/utils";
import { sortAlphabetically, returnProjectOrArticleYear } from "@/utils";
import type { ArticleData, InternalLinkData } from "@/models";
import {
  TitlePage,
  AllArticlesArticleListPerYear,
  Layout,
  Menu,
} from "@/components";

// is used to get the title of the page
// if nothing is returned, it means that the path in the CMS is wrong
const pageHref = "/all-articles";

export const getStaticProps = async () => {
  const dataMenu = await client.fetch(groq`*[_type == "componentMenu"]{
    ${queryMenu}
  }`);

  const dataTitle = dataMenu[0].internalLinks.find(
    (internalLink: InternalLinkData) => internalLink.href === pageHref,
  );
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
        menu: {
          ...dataMenu[0],
          internalLinks: dataMenu[0].internalLinks.filter(
            (link: InternalLinkData) => link.href !== pageHref,
          ),
        },
        title: dataTitle,
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
        <AllArticlesArticleListPerYear
          articles={data.articles}
          color={colorSecondary}
        />
      </main>
    </Layout>
  );
};

export default AllArticlesPage;
