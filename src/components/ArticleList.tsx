import Article from "./Article";
import { ArticleData } from "@/models";

const ArticleList = ({
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
          <h3 className="text-h2 mb-6 leading-none sm:mb-8 xl:mb-12">{key}</h3>
          <ul className="flex flex-col gap-6 xl:gap-8">
            {articles[key]
              .sort((a, b) => (a.text > b.text ? 1 : -1))
              .map((e) => (
                <Article key={`article-home-${e._id}`} {...e} color={color} />
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default ArticleList;
