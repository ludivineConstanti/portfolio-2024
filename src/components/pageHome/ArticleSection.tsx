import Section from "./Section";
import { ArticleList } from "@/components";
import { ArticleData, internalLinks } from "@/models";

const ArticleSection = ({
  emoji,
  title,
  articles,
  id,
  colorSecondary,
}: {
  emoji: string;
  title: string;
  articles: ArticleData[];
  id: string;
  colorSecondary: string;
}) => {
  return (
    <Section
      emoji={emoji}
      title={title}
      color={colorSecondary}
      id={id}
      margin="medium"
      link={{ href: internalLinks.allArticles.href, text: "See all articles" }}
      customClass="bg-blue-950 pointer-events-auto"
    >
      <ArticleList color={colorSecondary} articles={articles} />
    </Section>
  );
};

export default ArticleSection;
