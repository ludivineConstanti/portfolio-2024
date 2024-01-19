import { ArticleList, TitleYear } from "@/components";

const ArticleListPerYear = ({ color }: { color: string }) => {
  return (
    <section className="mx-custom flex flex-col items-center">
      <TitleYear text="2024" color={color} />
      <div className="all-projects-all-articles-gap flex flex-col items-center">
        <ArticleList color={color} />
        <ArticleList color={color} />
      </div>
    </section>
  );
};

export default ArticleListPerYear;
