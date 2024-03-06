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
          "max-w-home xl:max-w-home-xl pointer-events-auto rounded-2xl xl:rounded-[2rem]",
          colorPrimary,
        )}
      >
        <header
          className={clsx(
            "px-home-article sm:px-home-article-sm xl:px-home-article-xl pt-home-article sm:pt-home-article-sm xl:pt-home-article-xl flex gap-4 rounded-t-2xl pb-4 sm:pb-8 xl:rounded-t-[2rem]",
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
            <Tooltip text={`${title} website ↗️`} />
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
        <div className="px-home-article sm:px-home-article-sm xl:px-home-article-xl pb-home-article sm:pb-home-article-sm xl:pb-home-article-xl pt-4 sm:pt-8">
          <div className="[&>section>h4]:text-h5 [&>section>p]:text-body grid gap-4 pb-4 sm:gap-8 sm:pb-8 xl:grid-cols-2 [&>section>h4]:mb-3 xl:[&>section>h4]:mb-4 [&>section>p:not(:last-child)]:mb-6">
            <section className="[&>p>a]:text-link">
              <PortableText value={text} />
            </section>
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
                    color={colorPrimary}
                  />
                ))}
              </ul>
            </section>
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
