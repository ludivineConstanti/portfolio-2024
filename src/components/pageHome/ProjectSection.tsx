import Section from "./Section";
import { ProjectLinkList } from "@/components";
import type { ProjectData } from "@/models";
import { internalLinks } from "@/models";

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
      color="bg-blue-800"
      link={{ href: internalLinks.allProjects.href, text: "See all projects" }}
    >
      <ProjectLinkList projects={projects} />
    </Section>
  );
};

export default ProjectSection;
