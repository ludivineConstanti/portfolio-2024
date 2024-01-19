import clsx from "clsx";
import { LinkCTA, SkillBadgeList, ArrowOpenNewWindow } from "@/components";

const ProjectLink = ({ emoji, text }: { emoji?: string; text: string }) => {
  return (
    <li className="mr-4">
      <a className="text-h5 flex">
        {emoji && <span>{emoji}</span>}
        {text}
        <div className="ml-2 h-5">
          <ArrowOpenNewWindow />
        </div>
      </a>
    </li>
  );
};

const classNameTextWork = "flex items-end gap-2 xl:flex-col xl:gap-0";

const Project = () => {
  return (
    <li className="home-max-w relative flex flex-col gap-6 rounded-2xl bg-blue-700 p-4 xl:flex-row xl:gap-8 xl:px-6 xl:py-8">
      <div className="flex min-w-[12rem] flex-col xl:items-end xl:text-right">
        <a className="flex gap-3 xl:mb-6">
          <div className={classNameTextWork}>
            <span className="text-h5">Figures</span>
            <span className="text-body">2017 - Present</span>
          </div>
          <div className="hidden rounded-full border-2 border-solid border-current xl:block xl:h-12 xl:w-12">
            <svg
              className="h-full w-full"
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
        </a>
        <p className={clsx(classNameTextWork, "mb-2")}>
          <span className="text-h5">My role:</span>
          <span className="text-body">Frontend + Backend</span>
        </p>
        <LinkCTA />
      </div>
      <div className="h-[10.7rem] min-w-[19rem] rounded-lg bg-white" />
      <div>
        <ul className="mb-4 flex flex-wrap">
          <ProjectLink emoji="🌟" text="Heavens of Mankind" />
          <ProjectLink emoji="📰" text="Articles" />
          <ProjectLink emoji="🐱" text="GitHub" />
        </ul>
        <SkillBadgeList />
      </div>
    </li>
  );
};

export default Project;
