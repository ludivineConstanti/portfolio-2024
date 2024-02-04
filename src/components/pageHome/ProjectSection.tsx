import Section from "./Section";
import { ProjectLinkList } from "@/components";
import type { ProjectData } from "@/models";

const ProjectSection = ({
  emoji,
  title,
  projects,
}: {
  emoji: string;
  title: string;
  projects: ProjectData[];
}) => {
  return (
    <Section
      emoji={emoji}
      title={title}
      color="bg-indigo-800"
      link={{ href: "/all-projects", text: "See all projects" }}
    >
      <ProjectLinkList projects={projects} />
    </Section>
  );
};

export default ProjectSection;
