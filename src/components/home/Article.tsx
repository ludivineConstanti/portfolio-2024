import SkillBadgeList from "../SkillBadgeList";

const Article = ({ emoji, text }: { emoji: string; text: string }) => {
  return (
    <li className="flex flex-col gap-2">
      <a className="text-h4">
        <span className="mr-1">{emoji}</span>
        {text}
      </a>
      <SkillBadgeList size="small" />
    </li>
  );
};

export default Article;
