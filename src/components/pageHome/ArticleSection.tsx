import Section from "./Section";
import { ArticleList } from "@/components";
import { ArticleData } from "@/models";

const colorTitle = "bg-blue-800";

const ArticleSection = ({
  emoji,
  title,
  articles,
}: {
  emoji: string;
  title: string;
  articles: ArticleData[];
}) => {
  return (
    <Section
      emoji={emoji}
      title={title}
      color={colorTitle}
      margin="medium"
      link={{ href: "/all-articles", text: "See all articles" }}
      customClass="bg-blue-950 pointer-events-auto"
    >
      <ArticleList color={colorTitle} articles={articles} />
    </Section>
  );
};

export default ArticleSection;
