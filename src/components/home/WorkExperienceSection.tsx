import Section from "./Section";
import WorkExperience from "./WorkExperience";

const WorkExperienceSection = () => {
  return (
    <Section title="🗃️ Work experience" color="bg-blue-900">
      <WorkExperience
        colorBackground="bg-purple-900"
        colorTitle="bg-purple-700"
      />
      <WorkExperience
        colorBackground="bg-violet-900"
        colorTitle="bg-violet-700"
        colorSkillBadge="bg-violet-800"
      />
      <WorkExperience
        colorBackground="bg-violet-900"
        colorTitle="bg-violet-700"
      />
    </Section>
  );
};

export default WorkExperienceSection;
