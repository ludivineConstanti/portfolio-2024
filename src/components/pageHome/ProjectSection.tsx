import Section from "./Section";
import { ProjectLinkList } from "@/components";
import type { ProjectData } from "@/models";
import { internalLinks } from "@/models";

const ProjectSection = ({
  id,
  emoji,
  title,
  projects,
  colorSecondary,
}: {
  id: string;
  emoji: string;
  title: string;
  colorSecondary: string;
  projects: ProjectData[];
}) => {
  return (
    <Section
      id={id}
      emoji={emoji}
      title={title}
      color={colorSecondary}
      link={{ href: internalLinks.allProjects.href, text: "See all projects" }}
    >
      <ProjectLinkList projects={projects} />
    </Section>
  );
};

export default ProjectSection;
