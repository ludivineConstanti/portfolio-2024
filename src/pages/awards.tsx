import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import clsx from "clsx";
import { client } from "@/sanity/utils";
import { Layout, TitlePage } from "@/components";
import { internalLinks, InternalLinksIds } from "@/models";

interface AwardData {
  _id: string;
  category: { emoji: string; text: string };
  project: { title: string; dateEnd: Date };
  href: string;
}

export const getStaticProps = async () => {
  const data = await client.fetch(groq`*[_type == "award"]{
    _id,
    category->{emoji,text},
    project->{title,dateEnd},
    href, 
    }`);

  const sortedData = data.sort((a: AwardData, b: AwardData) => {
    if (
      a.project.dateEnd > b.project.dateEnd ||
      (!a.project.dateEnd && b.project.dateEnd)
    ) {
      return -1;
    }
    if (
      a.project.dateEnd < b.project.dateEnd ||
      (a.project.dateEnd && !b.project.dateEnd)
    ) {
      return 1;
    }
    return 0;
  });

  return {
    props: {
      data: {
        awards: sortedData,
      },
    },
  };
};

const colorPrimary = "bg-fuchsia-950";
const colorSecondary = "bg-fuchsia-800";
const pageId = InternalLinksIds.awards;
const pageData = internalLinks[pageId];

const AllProjectsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout
      title={pageData.text}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
      pageId={pageId}
    >
      <main className={clsx(colorPrimary, "all-projects-all-articles-pb")}>
        <TitlePage
          emoji={pageData.emoji}
          text={pageData.text}
          color={colorSecondary}
        />
        <div className="all-projects-all-articles-pt flex justify-center">
          <ul className="flex flex-col gap-2 sm:gap-0.5">
            {data.awards.map((award: AwardData) => {
              return (
                <li
                  key={`award-${award._id}`}
                  className="flex items-center gap-1"
                >
                  <span className="text-[2.75rem] sm:text-[3.5rem] xl:text-[4.5rem]">
                    {award.category.emoji}
                  </span>{" "}
                  <span className="text-body flex flex-col">
                    <span className="text-body">{award.category.text}:</span>
                    <a className="text-h5" href={award.href} target="_blank">
                      <span className="text-link">{award.project.title}</span>{" "}
                      <span className="external-link-emoji-cta">↗️</span>
                    </a>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default AllProjectsPage;
