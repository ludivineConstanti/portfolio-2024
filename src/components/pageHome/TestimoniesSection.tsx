import Section from "./Section";
import { Tooltip } from "..";

const TestimoniesSection = ({
  emoji,
  title,
  id,
  colorSecondary,
}: {
  emoji: string;
  title: string;
  colorSecondary: string;
  id: string;
}) => {
  return (
    <Section
      id={id}
      emoji={emoji}
      title={title}
      color={colorSecondary}
      customClass="bg-blue-950 pointer-events-auto"
    >
      <div className="home-max-w flex w-full flex-col items-center">
        <blockquote
          className="text-h4 relative px-8 sm:px-0 xl:max-w-[50rem]"
          cite="https://www.linkedin.com/in/ludivine-constanti"
        >
          <span className="absolute -translate-x-full -translate-y-1/4 text-[5rem] leading-none sm:text-[7.5rem] xl:text-[10rem]">
            “
          </span>
          Ludivine is one of the most talented and dedicated people I have had
          the opportunity to work with. She is constantly working to improve and
          sharpen her skills in various fields of digital creativity, ranging
          from UI-/UX-design, real-time 3D, 3D - sculpting, to even programming.
          Ludivine was always able to solve complex tasks and adapted to new
          situations quickly, being a significant help to our efforts in many
          projects. It was an absolute pleasure working with her, and I hope our
          paths will cross one day again.
          <span className="absolute -bottom-2 translate-y-3/4 text-[5rem] leading-none sm:bottom-0 sm:text-[7.5rem] xl:text-[10rem]">
            ”
          </span>
        </blockquote>
        <div className="mt-20 flex items-center gap-4 self-end sm:gap-5 xl:gap-6">
          <div className="flex flex-col items-end">
            <p className="text-h4">Karsten Weil</p>
            <p className="text-h6">Co-Founder of Ufomammoot</p>
          </div>
          <a
            href="https://ufomammoot.de/en/"
            target="_blank"
            className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-current bg-black p-4 transition-transform hover:scale-110 active:scale-125 xl:h-18 xl:w-18 xl:p-6"
          >
            <svg
              width="100%"
              viewBox="0 0 18 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.03139 13.0158L17.8878 0.420166L11.2383 11.4813L16.0336 12.3764L0.113281 24.7802L6.82667 13.8469L2.03139 13.0158Z"
                fill="currentColor"
              />
            </svg>
            <Tooltip text="Ufomammoot website ↗️" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default TestimoniesSection;
