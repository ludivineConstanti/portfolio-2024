import Section from "./Section";
import WorkExperience from "./WorkExperience";
import { WorkExperienceData } from "@/models";

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
    <Section id={id} emoji={emoji} title={title} color={colorSecondary}>
      {workExperiences.map((workExperience) => (
        <WorkExperience
          {...workExperience}
          key={`work-experience-${workExperience._id}`}
        />
      ))}
    </Section>
  );
};

export default WorkExperienceSection;
