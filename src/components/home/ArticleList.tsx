import Article from "./Article";

const dummyArticles = [
  { emoji: "🌠", text: "Creating a workshop on accessibility" },
  { emoji: "🌠", text: "Communicating with the design team" },
  { emoji: "🌠", text: "Processing assets with Node.js" },
];

const ArticleList = () => {
  return (
    <section>
      <h3 className="text-h3 mb-4 xl:mb-6">🌠 Project improvements</h3>
      <ul className="home-max-w flex flex-col gap-4">
        {dummyArticles.map((e) => (
          <Article
            key={`article-home-${e.emoji}`}
            emoji={e.emoji}
            text={e.text}
          />
        ))}
      </ul>
    </section>
  );
};

export default ArticleList;
