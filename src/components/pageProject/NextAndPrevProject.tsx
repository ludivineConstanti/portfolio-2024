import Link from "next/link";
import clsx from "clsx";
import { ArrowForward, ArrowBack } from "..";

const Emoji = ({ emoji }: { emoji: string }) => {
  return <span className="text-[2rem] xl:text-[2.75rem]">{emoji}</span>;
};

interface ProjectProps {
  slug: { current: string };
  title: string;
  emoji: string;
}

const ProjectLink = ({
  type,
  project,
  color,
}: {
  type: "previous" | "next";
  project: ProjectProps;
  color: string;
}) => {
  return (
    <li
      className={clsx({
        "mr-auto": type === "previous",
        "ml-auto": type === "next",
      })}
    >
      <Link
        href={`/${project.slug.current}`}
        className={clsx(
          color,
          "text-body group flex min-h-full flex-col gap-2 rounded-2xl p-4 transition-transform hover:scale-110 active:scale-125 sm:max-w-80 sm:p-8 xl:min-w-80 xl:max-w-96",
        )}
      >
        <span
          className={clsx(
            { "justify-end": type === "previous" },
            "flex items-center gap-2",
          )}
        >
          {type === "next" && <Emoji emoji={project.emoji} />}
          <span className={clsx({ "text-right": type === "previous" })}>
            {type === "previous" ? "Previous" : "Next"} Project
            <br />
            <span className="text-h6 text-link-group">{project.title}</span>
          </span>
          {type === "previous" && <Emoji emoji={project.emoji} />}
        </span>
        <span
          className={clsx(
            { "self-start": type === "previous", "self-end": type === "next" },
            "h-4 sm:h-5",
          )}
        >
          {type === "previous" ? <ArrowBack /> : <ArrowForward />}
        </span>
      </Link>
    </li>
  );
};

const NextAndPrevProject = ({
  previousProject,
  nextProject,
  colorSecondary,
}: {
  previousProject: ProjectProps;
  nextProject: ProjectProps;
  colorSecondary: string;
}) => {
  return (
    <nav className="flex w-full  justify-center pb-8 xl:pb-20">
      <ul className="mx-custom project-max-w flex w-full flex-col flex-wrap gap-8 sm:flex-row">
        {previousProject && (
          <ProjectLink
            project={previousProject}
            color={colorSecondary}
            type="previous"
          />
        )}
        {nextProject && (
          <ProjectLink
            project={nextProject}
            color={colorSecondary}
            type="next"
          />
        )}
      </ul>
    </nav>
  );
};

export default NextAndPrevProject;
