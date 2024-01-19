import clsx from "clsx";

const SkillBadge = ({
  emoji,
  text,
  color = "bg-blue-800",
}: {
  emoji?: string;
  text: string;
  color: string;
}) => {
  return (
    <li
      className={clsx(
        "text-label flex items-center rounded-full px-3 py-1.5",
        color,
      )}
    >
      {emoji && <span className="mr-1 text-[1.25em]">{emoji}</span>}
      {text}
    </li>
  );
};

export default SkillBadge;
