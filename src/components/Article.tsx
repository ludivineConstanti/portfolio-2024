import { SkillBadgeList } from "@/components";
import { ArticleData } from "@/models";

interface ArticleProps extends ArticleData {
  color: string;
}

const Article = ({ color, emoji, text, href, skillBadges }: ArticleProps) => {
  return (
    <li className="grid grid-cols-[3rem_auto] sm:grid-cols-[4.5rem_auto]">
      <span className="justify-self-center text-[1.75rem] sm:text-[2.75rem]">
        {emoji}
      </span>
      <div className="flex flex-col gap-2">
        <a className="text-h6" target="_blank" href={href}>
          <span className="underline decoration-1 underline-offset-4">
            {text}
          </span>
          <span className="ml-1.5 no-underline">↗️</span>
        </a>
        <SkillBadgeList size="small" color={color} skillBadges={skillBadges} />
      </div>
    </li>
  );
};

export default Article;
