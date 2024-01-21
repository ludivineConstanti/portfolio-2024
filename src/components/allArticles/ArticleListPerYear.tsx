import { ArticleList, TitleYear } from "@/components";
import { ArticleData } from "@/models";

const ArticleListPerYear = ({
  year,
  color,
  articles,
}: {
  year: string;
  color: string;
  articles: ArticleData[];
}) => {
  return (
    <section className="mx-custom flex flex-col items-center">
      <TitleYear text={year} color={color} />
      <div className="all-projects-all-articles-gap flex flex-col items-center">
        <ArticleList color={color} articles={articles} />
        <ArticleList color={color} />
      </div>
    </section>
  );
};

export default ArticleListPerYear;
