import { SkillBadgeList, ArrowOpenNewWindow } from "@/components";

const Article = ({
  color,
  emoji,
  text,
}: {
  color: string;
  emoji: string;
  text: string;
}) => {
  return (
    <li className="flex flex-col gap-2">
      <a className="text-h4 flex">
        <span className="mr-1">{emoji}</span>
        <span className="underline decoration-1 underline-offset-4">
          {text}
        </span>
        <div className="ml-2 h-5">
          <ArrowOpenNewWindow />
        </div>
      </a>
      <SkillBadgeList size="small" color={color} />
    </li>
  );
};

export default Article;
