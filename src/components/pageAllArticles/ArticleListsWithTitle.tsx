import { ArticleList } from "@/components";
import { ArticleData } from "@/models";
import { sortAlphabetically } from "@/utils";

const ArticleListsWithTitle = ({
  color,
  articles,
}: {
  color: string;
  articles: { [key: string]: ArticleData[] };
}) => {
  return (
    <div className="col-start-2 flex flex-col gap-10 xl:gap-20">
      {Object.keys(articles).map((key) => (
        <section key={`article-category-${key}`}>
          <h3 className="text-h2 mb-6 leading-none sm:mb-8 xl:mb-10">{key}</h3>
          <ArticleList
            color={color}
            articles={sortAlphabetically(articles[key])}
          />
        </section>
      ))}
    </div>
  );
};

export default ArticleListsWithTitle;
