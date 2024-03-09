import Article from "./Article";
import { ArticleData, ArticleProcessedData } from "@/models";

const ArticleList = ({
  color,
  articles,
}: {
  color: string;
  articles: (ArticleData | ArticleProcessedData)[];
}) => {
  return (
    <ul className="flex flex-col gap-6 xl:gap-8">
      {articles.map((e) => (
        <Article key={`article-home-${e._id}`} {...e} color={color} />
      ))}
    </ul>
  );
};

export default ArticleList;
