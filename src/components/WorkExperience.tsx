import clsx from "clsx";
import { PortableText } from "@portabletext/react";
import { SkillBadgeList, Tooltip } from "@/components";
import ProjectThumbnail from "./ProjectThumbnail";
import type { WorkExperienceData } from "@/models";
import {
  returnProjectOrArticleYear,
  returnDiffInYearsAndMonths,
} from "@/utils";

const WorkExperience = ({
  _id,
  title,
  role,
  location,
  text,
  dateStart,
  dateEnd,
  skillBadges,
  projects,
  href,
  logo,
  colorPrimary,
  colorSecondary,
  colorLogo,
  colorSkillBadge,
}: WorkExperienceData) => {
  const yearStart = new Date(dateStart).getFullYear();
  const yearEnd = returnProjectOrArticleYear(dateEnd, true);
  const period = returnDiffInYearsAndMonths(
    new Date(dateStart),
    dateEnd ? new Date(dateEnd) : new Date(Date.now()),
  );
  return (
    <li>
      <article
        className={clsx(
          "pointer-events-auto max-w-home rounded-2xl xl:max-w-home-xl xl:rounded-[2rem]",
          colorPrimary,
        )}
      >
        <header
          className={clsx(
            "flex gap-4 rounded-t-2xl px-home-article pb-4 pt-home-article sm:px-home-article-sm sm:pb-8 sm:pt-home-article-sm xl:rounded-t-[2rem] xl:px-home-article-xl xl:pt-home-article-xl",
            colorSecondary,
          )}
        >
          <a
            href={href}
            target="_blank"
            className="group relative hidden shrink-0 rounded-full outline-none transition-transform hover:scale-110 active:scale-125 sm:block"
          >
            <span
              className={clsx(
                colorLogo,
                "block rounded-full border-2 border-solid border-current outline-offset-2 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-current sm:flex sm:h-19 sm:w-19 sm:p-4",
              )}
            >
              <img
                className={clsx("relative h-full w-full", {
                  "left-[0.13rem]":
                    _id === "69a580b9-6c3a-495b-a047-e5d077809ae3",
                })}
                src={logo.asset.url}
                alt={`${title} logo`}
              />
            </span>
            <Tooltip
              text={`${title} website ↗️`}
              customClass="group-hover:scale-[0.9] group-active:scale-[0.8]"
            />
          </a>
          <div>
            <h3 className="text-h3">
              {role} {title}
            </h3>
            <p className="text-h6">
              📆 {yearStart} {yearStart !== yearEnd ? `- ${yearEnd} ` : ""}(
              {period}) 📆 {location}
            </p>
          </div>
        </header>
        <div className="px-home-article pb-home-article pt-4 sm:px-home-article-sm sm:pb-home-article-sm sm:pt-8 xl:px-home-article-xl xl:pb-home-article-xl">
          <div
            className={clsx(
              { "xl:grid-cols-2": projects.length > 0 },
              "[&>section>h4]:text-h5 [&>section>p]:text-body grid gap-4 pb-4 sm:gap-8 sm:pb-8 [&>section>h4]:mb-3 xl:[&>section>h4]:mb-4 [&>section>p:not(:last-child)]:mb-6",
            )}
          >
            <section
              className={clsx(
                { "xl:columns-2 xl:gap-8": projects.length === 0 },
                "[&>p>a]:text-link [&>ul>li]:text-body [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6",
              )}
            >
              <PortableText value={text} />
            </section>
            {projects && projects.length > 0 && (
              <section>
                <h4>⚗️ Project{projects.length > 1 && "s"}</h4>
                <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 xl:gap-4">
                  {projects.map((project) => (
                    <ProjectThumbnail
                      _id={project._id}
                      key={`project-teaser-${title}-${project._id}`}
                      image={project.image}
                      href={project.slug.current}
                      title={project.title}
                      emoji={project.emoji}
                      color={colorPrimary}
                    />
                  ))}
                </ul>
              </section>
            )}
          </div>
          <SkillBadgeList
            color={colorSkillBadge || colorSecondary}
            skillBadges={skillBadges}
          />
        </div>
      </article>
    </li>
  );
};

export default WorkExperience;
