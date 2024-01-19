import { TitleYear } from "@/components";
import Project from "./Project";

const ProjectList = ({ color }: { color: string }) => {
  return (
    <section className="mx-custom flex flex-col items-center">
      <TitleYear text="2024" color={color} />
      <ul className="flex flex-col gap-4 xl:gap-8">
        <Project />
        <Project />
        <Project />
      </ul>
    </section>
  );
};

export default ProjectList;
