import { SkillBadgeList } from "@/components";
import { SkillBadgeData } from "@/models";

interface ArticleProps {
  emoji: string;
  text: string;
  href: string;
  skillBadges: SkillBadgeData[];
  color: string;
}

const Article = ({ color, emoji, text, href, skillBadges }: ArticleProps) => {
  return (
    <li className="grid grid-cols-[3.5rem_auto] sm:grid-cols-[4.75rem_auto]">
      <span className="justify-self-center text-[1.75rem] sm:text-[3rem]">
        {emoji}
      </span>
      <div className="flex flex-col gap-2 xl:gap-3">
        <a className="text-h6 group" target="_blank" href={href}>
          <span className="text-link">{text}</span>
          <span className="external-link-emoji-cta relative ml-1.5 no-underline">
            ↗️
          </span>
        </a>
        <SkillBadgeList size="small" color={color} skillBadges={skillBadges} />
      </div>
    </li>
  );
};

export default Article;
