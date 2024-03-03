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
  const dataWorkExperiences =
    await client.fetch(groq`*[_type == "workExperience"] | order(dateEnd desc){
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
  }`);

  const dataProjects =
    await client.fetch(groq`*[_type == "project"] | order(dateEnd desc){
  _id,
  workExperience,
  client,
  title,
  dateEnd,
  slug,
  image{
    'url': asset->url,
    alt
  },
}`);

  const dataWorkExperiencesWithProjects = dataWorkExperiences.map(
    (workExperience: WorkExperienceData) => {
      const workExperienceProjects = dataProjects.filter(
        (project: ProjectTeaserData) =>
          project.workExperience &&
          project.workExperience._ref === workExperience._id,
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
      <main className={clsx(colorPrimary, "all-projects-all-articles-pb")}>
        <TitlePage
          emoji={pageData.emoji}
          text={pageData.text}
          color={colorSecondary}
        />
        <ul className="px-custom all-projects-all-articles-pt flex w-full flex-col items-center gap-8 xl:gap-16">
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
