import SkillBadgeList from "../SkillBadgeList";
import { ArrowOpenNewWindow } from "..";

const dummyArticles = [
  { emoji: "🌠", text: "A 3D tool to explore the night sky", href: "" },
  { emoji: "✏️", text: "UX improvements for the 3D tool", href: "" },
  { emoji: "🏷️", text: "Adding 2D labels to a 3D scene", href: "" },
  { emoji: "🎥", text: "3D render order", href: "" },
  { emoji: "🗂️", text: "How Craft CMS manages the tool’s content", href: "" },
  { emoji: "💾", text: "Using Node.js to process data", href: "" },
  { emoji: "🐞", text: "Improving HTML semantic solves bugs", href: "" },
];

const Article = ({
  emoji,
  text,
  href,
}: {
  emoji: string;
  text: string;
  href: string;
}) => {
  return (
    <li className="mb-1">
      <a
        href={href}
        target="_blank"
        className="text-body relative flex items-center text-current no-underline"
      >
        <span className="mr-1 text-[1.25em]">{emoji}</span>
        <p className="underline underline-offset-4">{text}</p>
        <div className="ml-2 flex h-3.5">
          <ArrowOpenNewWindow />
        </div>
      </a>
    </li>
  );
};

const StudyCase = () => {
  return (
    <article className="home-article-wrapper bg-blue-900">
      <div className="home-article-padding-x home-article-padding-t home-article-padding-small-b">
        <h3 className="text-h2">Heavens of Mankind</h3>
        <p className="text-h4">My role: Frontend + backend</p>
      </div>
      <div className="w-full bg-white pb-[56%]" />
      <SkillBadgeList customClass="home-article-padding-small-y home-article-padding-x bg-blue-700 justify-center" />
      <div className="home-article-padding-x home-article-padding-b home-article-padding-small-t">
        <div className="home-article-text-content">
          <section>
            <h4>🔎 Overview</h4>
            <p>
              Heavens of Mankind visualize stories about constellations from
              fourteen cultures around the world, linking them to background
              information, and making them available to everyone.
            </p>
            <a className="flex max-w-fit gap-1 rounded-full border-2 border-solid border-current bg-blue-700 px-3 py-1.5">
              Learn more
              <div className="ml-1 h-3">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.863 0.758586C10.4009 1.22072 10.4009 1.97694 10.863 2.43907L13.0392 4.61531L1.26125 4.6153C0.605858 4.6153 0.0765037 5.14466 0.0765037 5.80005C0.0765037 6.45544 0.605857 6.98479 1.26125 6.98479L13.0392 6.98479L10.863 9.16102C10.4009 9.62316 10.4009 10.3794 10.863 10.8415C11.3251 11.3036 12.0814 11.3036 12.5435 10.8415L16.7447 6.64029C17.2069 6.17816 17.2069 5.42194 16.7447 4.9598L12.5435 0.758586C12.0814 0.296452 11.3251 0.296453 10.863 0.758586Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
          </section>
          <section>
            <h4>📰 Articles</h4>
            <ul>
              {dummyArticles.map((article) => (
                <Article
                  key={`study-case-article-${article.emoji}`}
                  {...article}
                />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
};

export default StudyCase;
