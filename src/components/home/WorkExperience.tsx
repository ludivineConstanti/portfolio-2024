import clsx from "clsx";
import SkillBadgeList from "../SkillBadgeList";
import ProjectThumbnail from "../ProjectThumbnail";

const WorkExperience = ({
  colorBackground = "bg-violet-900",
  colorTitle = "bg-violet-700",
  colorSkillBadge = "bg-violet-700",
}: {
  colorBackground: string;
  colorTitle: string;
  colorSkillBadge?: string;
}) => {
  return (
    <article className={clsx("home-article-wrapper", colorBackground)}>
      <div
        className={clsx("home-article-padding flex gap-4 xl:gap-6", colorTitle)}
      >
        <div className="border-3 h-14 rounded-full border-solid border-current xl:h-[6.25rem]">
          <svg
            className="h-full"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1851_43655)">
              <circle cx="128" cy="128" r="128" fill="#642DFF" />
              <path
                d="M166.616 99.993H150.795V214.759H166.616V99.993ZM166.616 46.5332H150.795V90.1743H166.616V46.5332Z"
                fill="#F0F00A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M115.645 41.2408C101.166 41.2408 89.3828 53.0257 89.3828 67.5027V214.749H105.204V150.531H130.526V135.692H105.204V66.9567C105.204 61.1963 109.884 56.0799 115.645 56.0799C121.405 56.0799 126.085 61.1963 126.085 66.9567V118.912H141.907V67.5027C141.907 53.0237 130.122 41.2408 115.645 41.2408Z"
                fill="#F0F00A"
              />
            </g>
          </svg>
        </div>
        <div>
          <h3 className="text-h2">🌟 DEVELOPER 🌟 Figures</h3>
          <p className="text-h4">2021 - Present 📆 Remote 🌍</p>
        </div>
      </div>
      <div className="home-article-padding">
        <div className="home-article-text-content home-article-padding-small-b">
          <section>
            <h4>🔎 OVERVIEW</h4>
            <p>
              My role at Figures is to deliver high-quality code for digital
              information visualization. Being one of the two developers in the
              agency, I was able to get mentorship, as well as take ownership of
              projects, and see them through from start to finish. Being part of
              an international team, I communicated daily, both in English and
              German.
            </p>
            <h4>👩‍💻 MY ROLE</h4>
            <p>
              I got to craft custom experiences, bring the design team’s
              concepts to life, and work with them closely, communicating how we
              could have the best workflow. More recently, I gave a workshop on
              how to improve our skills in accessibility.
            </p>
          </section>
          <section>
            <h4>🖻 PROJECTS</h4>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              <ProjectThumbnail color={colorBackground} />
              <ProjectThumbnail color={colorBackground} />
              <ProjectThumbnail color={colorBackground} />
              <ProjectThumbnail color={colorBackground} />
              <ProjectThumbnail color={colorBackground} />
              <ProjectThumbnail color={colorBackground} />
              <ProjectThumbnail color={colorBackground} />
              <ProjectThumbnail color={colorBackground} />
              <ProjectThumbnail color={colorBackground} />
              <ProjectThumbnail color={colorBackground} />
            </div>
          </section>
        </div>
        <SkillBadgeList color={colorSkillBadge || colorTitle} />
      </div>
    </article>
  );
};

export default WorkExperience;
