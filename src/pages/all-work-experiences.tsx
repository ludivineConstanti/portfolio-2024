import type { InferGetStaticPropsType } from "next";
import clsx from "clsx";
import { groq } from "next-sanity";
import { client } from "@/sanity/utils";
import { sortAlphabetically, sortByDateEnd } from "@/utils";
import { Layout, WorkExperience, TitlePage } from "@/components";
import type { WorkExperienceData, ProjectTeaserData } from "@/models";
import { internalLinks, InternalLinksIds } from "@/models";
import { querySkillBadges } from "@/sanity/utils";

export const getStaticProps = async () => {
  const data = await client.fetch(groq`{
      "dataWorkExperiences": *[_type == "workExperience"] | order(dateStart desc){
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
        },
        ${querySkillBadges}
      },
      "dataProjects": *[_type == "project" && workExperience != null] | order(dateEnd desc){
        _id,
        visible,
        workExperience,
        client,
        title,
        dateEnd,
        slug,
        emoji,
        image{
          'url': asset->url,
          alt
        },
      }
    }`);

  const { dataWorkExperiences, dataProjects } = data;

  const dataWorkExperiencesWithProjects = dataWorkExperiences.map(
    (workExperience: WorkExperienceData) => {
      const workExperienceProjects = dataProjects.filter(
        (project: ProjectTeaserData) =>
          project.workExperience._ref === workExperience._id && project.visible,
      );
      return {
        ...workExperience,
        skillBadges: sortAlphabetically(workExperience.skillBadges),
        projects: sortByDateEnd(workExperienceProjects),
      };
    },
  );

  return {
    props: {
      data: {
        workExperiences: sortByDateEnd(dataWorkExperiencesWithProjects),
      },
    },
  };
};

const colorPrimary = "bg-blue-950";
const colorSecondary = "bg-blue-800";
const pageId = InternalLinksIds.workExperiences;
const pageData = internalLinks[pageId];

const WorkExperiencesPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        <ul className="px-custom flex w-full flex-col items-center gap-8 pt-individual-page xl:gap-16 xl:pt-individual-page-xl">
          {data.workExperiences.map((workExperience: WorkExperienceData) => (
            <WorkExperience
              key={`work-experience-${workExperience._id}`}
              {...workExperience}
            />
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default WorkExperiencesPage;
