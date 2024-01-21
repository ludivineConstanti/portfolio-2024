import { SkillBadgeList, ArrowOpenNewWindow } from "@/components";
import { ArticleData } from "@/models";

interface ArticleProps extends ArticleData {
  color: string;
}

const Article = ({ color, emoji, text, href, skillBadges }: ArticleProps) => {
  return (
    <li className="flex gap-2">
      <span className="text-[2rem] sm:text-[2.75rem]">{emoji}</span>
      <div className="flex flex-col gap-2">
        <a className="text-h6 flex" target="_blank" href={href}>
          <span className="underline decoration-1 underline-offset-4">
            {text}
          </span>
          <div className="ml-2 h-5">
            <ArrowOpenNewWindow />
          </div>
        </a>
        <SkillBadgeList size="small" color={color} skillBadges={skillBadges} />
      </div>
    </li>
  );
};

export default Article;
