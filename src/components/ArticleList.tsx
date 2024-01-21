import Article from "./Article";
import { ArticleData } from "@/models";

const dummySkills = [
  { emoji: "🤖", text: "AI" },
  { emoji: "🌐", text: "DApp" },
  { emoji: "💻", text: "Code Sample" },
  { emoji: "🐱", text: "Public on GitHub" },
  { emoji: "⏳", text: "Asynchronous" },
  { emoji: "🍱", text: "Web Components" },
  { emoji: "📦", text: "NPM Package" },
  { emoji: "📄", text: "Documentation" },
  { emoji: "📝", text: "Technical Writing" },
  { emoji: "📊", text: "Data Visualization" },
];

const dummyArticles = [
  {
    id: "1",
    emoji: "🌠",
    text: "Creating a workshop on accessibility",
    href: "/",
    skillBadges: dummySkills,
  },
  {
    id: "2",
    emoji: "🌠",
    text: "Communicating with the design team",
    href: "/",
    skillBadges: dummySkills,
  },
  {
    id: "3",
    emoji: "🌠",
    text: "Processing assets with Node.js",
    href: "/",
    skillBadges: dummySkills,
  },
];

const ArticleList = ({
  color,
  articles = dummyArticles,
}: {
  color: string;
  articles: ArticleData[];
}) => {
  return (
    <section className="max-w-[40rem] xl:max-w-[46.5rem]">
      <h3 className="text-h2 mb-6 leading-none sm:mb-8 xl:mb-12">
        Project improvements
      </h3>
      <ul className="flex flex-col gap-6 xl:gap-8">
        {articles.map((e) => (
          <Article key={`article-home-${e.id}`} {...e} color={color} />
        ))}
      </ul>
    </section>
  );
};

export default ArticleList;
