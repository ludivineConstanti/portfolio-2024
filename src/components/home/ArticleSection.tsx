import Section from "./Section";
import ArticleList from "./ArticleList";

const ArticleSection = () => {
  return (
    <Section title="📰 Articles" color="bg-violet-800">
      <ArticleList />
      <ArticleList />
      <ArticleList />
    </Section>
  );
};

export default ArticleSection;
