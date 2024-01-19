import Article from "./Article";

const dummyArticles = [
  { emoji: "🌠", text: "Creating a workshop on accessibility" },
  { emoji: "🌠", text: "Communicating with the design team" },
  { emoji: "🌠", text: "Processing assets with Node.js" },
];

const ArticleList = ({ color }: { color: string }) => {
  return (
    <section>
      <h3 className="text-h2 mb-4 xl:mb-8">🌠 Project improvements</h3>
      <ul className="home-max-w flex flex-col gap-6">
        {dummyArticles.map((e) => (
          <Article
            key={`article-home-${e.emoji}`}
            emoji={e.emoji}
            text={e.text}
            color={color}
          />
        ))}
      </ul>
    </section>
  );
};

export default ArticleList;
