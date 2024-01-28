import React from "react";
import { TitleYear } from "@/components";
import ArticleListsWithTitle from "./ArticleListsWithTitle";
import { ArticleData } from "@/models";

const ArticleListPerYear = ({
  color,
  articles,
}: {
  color: string;
  articles: { [key: string]: { [key: string]: ArticleData[] } };
}) => {
  return (
    <div className="mx-custom grid grid-cols-[1fr_auto_1fr]">
      {Object.keys(articles)
        .reverse()
        .map((key) => (
          <section
            key={`all-articles-${key}`}
            className="col-start-2 flex max-w-[40rem] flex-col xl:max-w-[46.5rem]"
          >
            <TitleYear text={key} color={color} customClass="self-center" />
            <ArticleListsWithTitle color={color} articles={articles[key]} />
          </section>
        ))}
    </div>
  );
};

export default ArticleListPerYear;
