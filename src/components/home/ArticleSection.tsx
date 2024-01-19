import Section from "./Section";
import { ArticleList } from "@/components";

const colorTitle = "bg-violet-800";

const ArticleSection = () => {
  return (
    <Section
      title="📰 Articles"
      color={colorTitle}
      margin="medium"
      link={{ href: "/all-articles", text: "See all articles" }}
    >
      <ArticleList color={colorTitle} />
      <ArticleList color={colorTitle} />
      <ArticleList color={colorTitle} />
    </Section>
  );
};

export default ArticleSection;
