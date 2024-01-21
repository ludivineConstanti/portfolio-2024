import { client } from "@/sanity/utils";
import { TitlePage, AllArticlesArticleListPerYear } from "@/components";
import { groq } from "next-sanity";

const colorTitle = "bg-violet-900";

const AllArticles = async () => {
  const data = await client.fetch(groq`*[_type == "article"]{
    _id,
    category->{...},
    emoji,
    text,
    href,
    skillBadges[]->{...},
    date
  }`);

  return (
    <main className="all-projects-all-articles-pb bg-violet-950">
      <TitlePage emoji="🕰️" text="All Articles" color={colorTitle} />
      <AllArticlesArticleListPerYear
        articles={data}
        year="2024"
        color={colorTitle}
      />
      <AllArticlesArticleListPerYear
        articles={data}
        year="2024"
        color={colorTitle}
      />
    </main>
  );
};

export default AllArticles;
