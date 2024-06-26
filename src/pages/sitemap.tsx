import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import clsx from "clsx";
import { client } from "@/sanity/utils";
import { Layout, TitlePage, SitemapListOfLinks, LinkCTA } from "@/components";
import { internalLinks, InternalLinksIds } from "@/models";

export const getStaticProps = async () => {
  const data = await client.fetch(groq`{
    "projectsData": *[_type == "project"] | order(dateEnd desc){
      visible,
      _id,
      emoji,
      title,
      slug,  
    },
    "articlesData": *[_type == "article"] | order(date desc){
      _id,
      emoji,
      category->{text, title},
      text,
      href,  
    },
    // "awardsData": *[_type == "award"] | order(dateEnd desc){
    //   _id,
    //   category->{emoji,text},
    //   project->{title},
    //   href,  
    // }
  }`);

  const {
    projectsData,
    articlesData,
    // awardsData
  } = data;

  const projectsDataFiltered = projectsData.filter(
    (e: { visible?: boolean }) => e.visible,
  );

  const articles = articlesData.map(
    (article: {
      emoji: string;
      category: { title?: string };
      text: string;
      href: string;
    }) => ({
      emoji: article.emoji,
      text: article.category.title
        ? `Project ${article.category.title} | ${article.text}`
        : article.text,
      href: article.href,
    }),
  );

  /* const awards = awardsData.map(
    (award: {
      category: { emoji: string; text: string };
      project: { title: string };
      href: string;
    }) => ({
      emoji: award.category.emoji,
      text: `${award.category.text}: ${award.project.title}`,
      href: award.href,
    }),
  ); */

  return {
    props: {
      data: {
        projects: projectsDataFiltered,
        articles,
        // awards,
      },
    },
  };
};

const colorPrimary = "bg-green-950";
const colorSecondary = "bg-green-800";
const pageId = InternalLinksIds.sitemap;
const pageData = internalLinks[pageId];
const pageHomeData = internalLinks[InternalLinksIds.home];
const pageWorkExperiencesData = internalLinks[InternalLinksIds.workExperiences];
const pageImprintData = internalLinks[InternalLinksIds.imprint];
const pagePrivacyData = internalLinks[InternalLinksIds.privacyPolicy];

const Sitemap = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout
      title={pageData.text}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
    >
      <main
        className={clsx(
          colorPrimary,
          "pb-individual-page xl:pb-individual-page-xl",
        )}
      >
        <TitlePage
          emoji={pageData.emoji}
          text={pageData.text}
          color={colorSecondary}
        />
        <div className="mx-custom flex justify-center py-4 sm:py-8 xl:py-16">
          <ul className="max-width-home flex flex-col gap-8 xl:gap-16">
            <li>
              <LinkCTA
                text={pageHomeData.text}
                href={pageHomeData.href}
                color={colorSecondary}
                alignCenter={false}
                marginBottom="none"
              />
            </li>
            <li>
              <LinkCTA
                text={pageWorkExperiencesData.text}
                href={pageWorkExperiencesData.href}
                color={colorSecondary}
                alignCenter={false}
                marginBottom="none"
              />
            </li>
            <SitemapListOfLinks
              data={data.projects}
              mainLink={internalLinks[InternalLinksIds.allProjects]}
            />
            <SitemapListOfLinks
              data={data.articles}
              mainLink={internalLinks[InternalLinksIds.allArticles]}
            />
            {/* <SitemapListOfLinks
              data={data.awards}
              mainLink={internalLinks[InternalLinksIds.awards]}
            /> */}
            <li>
              <LinkCTA
                text={pageImprintData.text}
                href={pageImprintData.href}
                color={colorSecondary}
                alignCenter={false}
                marginBottom="none"
              />
            </li>
            <li>
              <LinkCTA
                text={pagePrivacyData.text}
                href={pagePrivacyData.href}
                color={colorSecondary}
                alignCenter={false}
                marginBottom="none"
              />
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default Sitemap;
