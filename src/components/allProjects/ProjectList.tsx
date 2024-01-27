import React from "react";
import { TitleYear } from "@/components";
import type { ProjectData } from "@/models";
import Project from "./Project";

const ProjectList = ({
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
            <ul className="flex flex-col gap-4 xl:gap-8">
              {projects[key].map((project) => (
                <Project key={`project-${project._id}`} {...project} />
              ))}
            </ul>
          </React.Fragment>
        ))}
    </section>
  );
};

export default ProjectList;
