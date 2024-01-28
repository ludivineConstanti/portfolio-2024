import React from "react";
import { ProjectList, TitleYear } from "@/components";
import type { ProjectData } from "@/models";

const ProjectListsWithTitle = ({
  projects,
  color,
}: {
  projects: { [key: string]: ProjectData[] };
  color: string;
}) => {
  return (
    <section className="mx-custom flex flex-col items-center">
      {Object.keys(projects)
        .reverse()
        .map((key) => (
          <React.Fragment key={`project-section-${key}`}>
            <TitleYear text={key} color={color} />
            <ProjectList projects={projects[key]} />
          </React.Fragment>
        ))}
    </section>
  );
};

export default ProjectListsWithTitle;
