import type { InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity/utils";
import type { ProjectData } from "@/models";
import { Layout, TitlePage, AllProjectsProjectList } from "@/components";

const colorBackgroundTitle = "bg-blue-800";

export const getStaticProps = async () => {
  const data =
    await client.fetch(groq`*[_type == "project"] | order(dateEnd desc){
      _id,
      emoji,
      title,
      slug,
      role->{text},
      dateStart,
      dateEnd,
      workExperience->{title},
      skillBadges[]->{...},
      colorPrimary,
      colorSecondary,
      colorSkillBadge,
      image{
        'url': asset->url,
        alt
      },
    }`);

  const sortedData: { [key: string]: ProjectData[] } = {};

  data.forEach((project: ProjectData) => {
    const year =
      project.dateEnd !== undefined
        ? new Date(project.dateEnd).getFullYear()
        : new Date(Date.now()).getFullYear();
    const skillBadges = project.skillBadges
      ? project.skillBadges.sort((a, b) => (a.text > b.text ? 1 : -1))
      : [];
    const currentProject = { ...project, skillBadges };

    if (sortedData[year]) {
      sortedData[year].push(currentProject);
    } else {
      sortedData[year] = [currentProject];
    }
  });

  return {
    props: {
      data: sortedData,
    },
  };
};

const AllProjects = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <main className="all-projects-all-articles-pb bg-blue-950">
        <TitlePage
          emoji="🕰️"
          text="All Projects"
          color={colorBackgroundTitle}
        />
        <AllProjectsProjectList color={colorBackgroundTitle} projects={data} />
      </main>
    </Layout>
  );
};

export default AllProjects;
