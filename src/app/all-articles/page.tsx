import { TitlePage, AllArticlesArticleListPerYear } from "@/components";

const colorTitle = "bg-violet-900";

const AllArticles = () => {
  return (
    <main className="all-projects-all-articles-pb bg-violet-950">
      <TitlePage emoji="🕰️" text="All Articles" color={colorTitle} />
      <AllArticlesArticleListPerYear color={colorTitle} />
      <AllArticlesArticleListPerYear color={colorTitle} />
      <AllArticlesArticleListPerYear color={colorTitle} />
    </main>
  );
};

export default AllArticles;
