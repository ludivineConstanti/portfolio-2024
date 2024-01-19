import { TitlePage, AllProjectsProjectList } from "@/components";

const colorBackgroundTitle = "bg-blue-800";

const AllProjects = () => {
  return (
    <main className="all-projects-all-articles-pb">
      <TitlePage emoji="🕰️" text="All Projects" color={colorBackgroundTitle} />
      <AllProjectsProjectList color={colorBackgroundTitle} />
      <AllProjectsProjectList color={colorBackgroundTitle} />
      <AllProjectsProjectList color={colorBackgroundTitle} />
    </main>
  );
};

export default AllProjects;
