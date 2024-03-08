import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import clsx from "clsx";
import { client, queryArticleLink } from "@/sanity/utils";
import {
  sortAlphabetically,
  returnProjectOrArticleYear,
  returnDataBasedOnFilterState,
  returnSkillsForFilter,
  returnVisibleSkillBadges,
} from "@/utils";
import type { ArticleData } from "@/models";
import { internalLinks, InternalLinksIds } from "@/models";
import {
  TitlePage,
  AllArticlesArticleListPerYear,
  Layout,
  NoArticlesOrProjectsFound,
} from "@/components";
import { useAppSelector } from "@/store";

export const getStaticProps = async () => {
  const data = await client.fetch(groq`{
      "projects": *[_type == "project"] | order(dateEnd desc){
        skillBadges[]->{_id}  
      },
      "articles": *[_type == "article"] | order(date desc){
        ${queryArticleLink}
      },
      "skills": *[_type == "skillBadge"]{
        _id,
        text,
      }
    }`);

  const { projects, skills, articles } = data;

  const skillsFilter = returnSkillsForFilter({
    data: skills,
    projects,
    articles,
    showEmoji: false,
  });

  const articlesData = articles.map((e: ArticleData) => ({
    ...e,
    skillBadges: returnVisibleSkillBadges(e.skillBadges, 3),
  }));

  return {
    props: {
      data: {
        projects,
        skillsFilter,
        articles: articlesData,
      },
    },
  };
};

const colorPrimary = "bg-violet-950";
const colorSecondary = "bg-violet-800";
const pageId = InternalLinksIds.allArticles;
const pageData = internalLinks[InternalLinksIds.allArticles];

const AllArticlesPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { selectedSkillsFilter } = useAppSelector((state) => state.system);

  const initialArticlesData =
    selectedSkillsFilter.length === 0
      ? data.articles
      : returnDataBasedOnFilterState(data.articles, selectedSkillsFilter);

  const articles: { [key: string]: { [key: string]: ArticleData[] } } = {};

  initialArticlesData.forEach((article: ArticleData) => {
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

    if (articles[year]) {
      if (articles[year][key]) {
        articles[year][key].push(currentArticle);
      } else {
        articles[year][key] = [currentArticle];
      }
    } else {
      articles[year] = {};
      articles[year][key] = [currentArticle];
    }
  });

  return (
    <Layout
      title={pageData.text}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
      pageId={pageId}
      bottomNavigationLinks={Object.keys(articles)
        .reverse()
        .map((year) => ({
          href: year,
          text: year,
        }))}
      skillsFilter={data.skillsFilter}
      projects={data.projects}
      articles={data.articles}
    >
      <main
        className={clsx(
          colorPrimary,
          "min-h-[100vh] pb-individual-page xl:pb-individual-page-xl",
        )}
      >
        <TitlePage
          emoji={pageData.emoji}
          text={pageData.text}
          color={colorSecondary}
        />
        {Object.keys(articles).length > 0 ? (
          <AllArticlesArticleListPerYear
            articles={articles}
            color={colorSecondary}
          />
        ) : (
          <NoArticlesOrProjectsFound
            linksToArticlesOrProjects="projects"
            color={colorSecondary}
          />
        )}
      </main>
    </Layout>
  );
};

export default AllArticlesPage;
