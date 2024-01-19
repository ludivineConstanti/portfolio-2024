import Section from "./Section";
import StudyCase from "./StudyCase";

const WorkExperienceSection = () => {
  return (
    <Section
      title="🔬 Study cases"
      color="bg-indigo-800"
      link={{ href: "/all-projects", text: "See all projects" }}
    >
      <StudyCase />
      <StudyCase />
      <StudyCase />
    </Section>
  );
};

export default WorkExperienceSection;
