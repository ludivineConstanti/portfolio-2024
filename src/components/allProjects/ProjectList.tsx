import clsx from "clsx";
import Project from "./Project";

const ProjectList = ({ color }: { color: string }) => {
  return (
    <section className="mb-16 flex flex-col items-center">
      <h2
        className={clsx(
          "text-h2 mb-16 inline-block rounded-2xl px-10 py-5",
          color,
        )}
      >
        2024
      </h2>
      <ul className="flex flex-col gap-4 xl:gap-8">
        <Project />
        <Project />
        <Project />
      </ul>
    </section>
  );
};

export default ProjectList;
