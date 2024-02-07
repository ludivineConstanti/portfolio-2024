import clsx from "clsx";
import { PortableText } from "@portabletext/react";
import { SkillBadgeList } from "@/components";
import ProjectThumbnail from "../ProjectThumbnail";
import type { WorkExperienceData } from "@/models";
import { returnProjectOrArticleYear } from "@/utils";

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
  const start = new Date(dateStart).getFullYear();
  const end = returnProjectOrArticleYear(dateEnd, true);
  return (
    <article className={clsx("home-article-wrapper", colorPrimary)}>
      <div
        className={clsx(
          "home-article-padding-x home-article-padding-t flex gap-4 pb-4 sm:pb-8",
          colorSecondary,
        )}
      >
        <a
          href={href}
          target="_blank"
          className={clsx(
            "border-3 hidden shrink-0 rounded-full border-solid border-current sm:flex sm:h-10 sm:w-10 sm:p-3 xl:p-4",
            colorLogo,
          )}
        >
          <img
            className={clsx("relative h-full w-full", {
              "left-[0.13rem]": _id === "69a580b9-6c3a-495b-a047-e5d077809ae3",
            })}
            src={logo.asset.url}
            alt={`${title} logo`}
          />
        </a>
        <div>
          <h3 className="text-h3">
            {role} {title}
          </h3>
          <p className="text-h6">
            📆 {start} - {end} 📆 {location}
          </p>
        </div>
      </div>
      <div className="home-article-padding-x home-article-padding-b pt-4 sm:pt-8">
        <div className="[&>section>h4]:text-h5 [&>section>p]:text-body home-article-padding-small-b grid gap-[var(--home-article-padding-small-base)] sm:gap-[var(--home-article-padding-small-sm)] xl:grid-cols-2 xl:gap-[var(--home-article-padding-small-xl)] [&>section>h4]:mb-3 xl:[&>section>h4]:mb-4 [&>section>p:not(:last-child)]:mb-6">
          <section>
            <PortableText value={text} />
          </section>
          <section>
            <h4>⚗️ Project{projects.length > 1 && "s"}</h4>
            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 xl:gap-4">
              {projects.map((project) => (
                <ProjectThumbnail
                  key={`project-teaser-${title}-${project._id}`}
                  image={project.image}
                  href={project.slug.current}
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
  );
};

export default WorkExperience;
