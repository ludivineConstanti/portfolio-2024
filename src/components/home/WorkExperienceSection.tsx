import Section from "./Section";
import WorkExperience from "./WorkExperience";
import { WorkExperienceData } from "@/models";

const WorkExperienceSection = ({
  workExperiences,
}: {
  workExperiences: WorkExperienceData[];
}) => {
  return (
    <Section emoji="🗃️" title="Work experience" color="bg-blue-800">
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
