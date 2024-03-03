import Section from "./Section";
import { WorkExperience } from "..";
import { WorkExperienceData, internalLinks } from "@/models";

const WorkExperienceSection = ({
  emoji,
  title,
  id,
  colorSecondary,
  workExperiences,
}: {
  emoji: string;
  title: string;
  colorSecondary: string;
  id: string;
  workExperiences: WorkExperienceData[];
}) => {
  return (
    <Section
      id={id}
      emoji={emoji}
      title={title}
      color={colorSecondary}
      link={{
        href: internalLinks.workExperiences.href,
        text: "See all Work Experiences",
      }}
    >
      <ul className="flex flex-col gap-8 xl:gap-16">
        {workExperiences.map((workExperience) => (
          <WorkExperience
            {...workExperience}
            key={`work-experience-${workExperience._id}`}
          />
        ))}
      </ul>
    </Section>
  );
};

export default WorkExperienceSection;
