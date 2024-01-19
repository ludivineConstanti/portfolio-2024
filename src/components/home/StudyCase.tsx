import { SkillBadgeList, ArrowOpenNewWindow, LinkCTA } from "@/components";

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
      <div className="w-full bg-white pt-[56%]" />
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
            <LinkCTA />
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
