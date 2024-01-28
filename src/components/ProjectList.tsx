import React from "react";
import { Project } from "@/components";
import type { ProjectData } from "@/models";

const ProjectListsWithTitle = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <ul className="flex flex-col gap-4 xl:gap-8">
      {projects.map((project) => (
        <Project key={`project-${project._id}`} {...project} />
      ))}
    </ul>
  );
};

export default ProjectListsWithTitle;
