import { useEffect, startTransition } from "react";
import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import clsx from "clsx";
import { client, queryArticleLink } from "@/sanity/utils";
import {
  sortAlphabetically,
  returnProjectOrArticleYear,
  returnDataBasedOnFilterState,
  returnSkillsForFilter,
} from "@/utils";
import type { ArticleData } from "@/models";
import { internalLinks, InternalLinksIds } from "@/models";
import {
  TitlePage,
  AllArticlesArticleListPerYear,
  Layout,
  NoArticlesOrProjectsFound,
} from "@/components";
import { useAppSelector, useAppDispatch } from "@/store";
import { setHowManyArticlesAndProjectsAreVisible } from "@/store/slices/system";

export const getStaticProps = async () => {
  const data = await client.fetch(groq`{
      "projects": *[_type == "project"] | order(dateEnd desc){
        skillBadges[]->{_id}  
      },
      "articles": *[_type == "article"] | order(date desc){
        ${queryArticleLink}
      },
      "skills": *[_type == "skillBadge"] | order(text asc){
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

  return {
    props: {
      data: {
        projects,
        skillsFilter,
        articles,
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
  const dispatch = useAppDispatch();

  const { selectedSkillsFilter } = useAppSelector((state) => state.system);

  const projectsLength = returnDataBasedOnFilterState(
    data.projects,
    selectedSkillsFilter,
  ).length;

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

  useEffect(() => {
    startTransition(() => {
      dispatch(
        setHowManyArticlesAndProjectsAreVisible({
          projects: projectsLength,
          articles: initialArticlesData.length,
        }),
      );
    });
  }, [dispatch, initialArticlesData, projectsLength]);

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
    >
      <main
        className={clsx(
          colorPrimary,
          "pb-individual-page xl:pb-individual-page-xl min-h-[100vh]",
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
