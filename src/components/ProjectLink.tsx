import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { ProjectData } from "@/models";
import { SkillBadgeList, ArrowForward } from "@/components";
import { returnProjectOrArticleYear } from "@/utils";

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
  slug,
}: ProjectData) => {
  const start = new Date(dateStart).getFullYear();
  const end = returnProjectOrArticleYear(dateEnd, true);

  return (
    <li>
      <Link
        href={`/${slug.current}`}
        className={clsx(
          colorPrimary,
          "home-max-w group pointer-events-auto relative flex flex-col gap-6 rounded-2xl p-4 outline-offset-4 transition-transform hover:scale-[1.03] active:scale-105 sm:hover:scale-105 sm:active:scale-110 xl:flex-row xl:gap-8 xl:p-6",
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
              : " 🔥 personal project"}
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
            "absolute right-8 top-8 flex h-8 w-8 origin-top-right rounded-full border-[2px] border-solid border-current p-1 transition-transform group-hover:scale-150 xl:right-6 xl:top-6 xl:h-10 xl:w-10 xl:border-2 xl:p-2",
          )}
        >
          <ArrowForward />
        </div>
      </Link>
    </li>
  );
};

export default Project;
