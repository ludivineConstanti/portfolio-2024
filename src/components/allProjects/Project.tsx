import clsx from "clsx";
import Image from "next/image";
import type { ProjectData } from "@/models";
import { SkillBadgeList, ArrowForward } from "@/components";

const Project = ({
  workExperience,
  emoji,
  role,
  title,
  skillBadges,
  colorPrimary,
  colorSkillBadge,
  dateStart,
  dateEnd,
  image,
}: ProjectData) => {
  const start = new Date(dateStart).getFullYear();
  const end = dateEnd ? new Date(dateEnd).getFullYear() : "Present";

  return (
    <li
      className={clsx(
        colorPrimary,
        "home-max-w relative flex flex-col gap-6 rounded-2xl p-4 xl:flex-row xl:gap-8 xl:p-6",
      )}
    >
      {image && (
        <div className="flex w-full flex-shrink-0 overflow-hidden rounded-lg xl:w-[33%]">
          <Image
            className="h-full w-full object-cover"
            src={image.url}
            alt={image.alt}
            width={672}
            height={378}
          />
        </div>
      )}
      <div>
        <h3 className="text-h5 mb-1">
          {emoji && <span className="mr-1 text-[1.5em]">{emoji}</span>}
          {title}
        </h3>
        <p className="text-h6 mb-2 xl:mb-4">
          {role.text}
          {workExperience
            ? ` at ${workExperience.title}`
            : " (personal project)"}
          {` | ${start} ${start !== end ? `- ${end}` : ""}`}
        </p>
        <SkillBadgeList
          size="small"
          color={colorSkillBadge}
          skillBadges={skillBadges}
        />
      </div>
      <div
        className={clsx(
          colorPrimary,
          "absolute right-6 top-6 flex h-5 w-5 rounded-full border-[2px] border-solid border-white p-1 sm:right-8 sm:top-8 sm:h-6 sm:w-6 xl:right-6 xl:top-6 xl:h-5 xl:w-5 xl:border-2 xl:p-2",
        )}
      >
        <ArrowForward />
      </div>
    </li>
  );
};

export default Project;
