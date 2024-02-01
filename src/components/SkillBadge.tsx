import clsx from "clsx";

const SkillBadge = ({
  emoji,
  text,
  color = "bg-blue-800",
  size = "medium",
}: {
  emoji?: string;
  text: string;
  color: string;
  size?: "small" | "medium";
}) => {
  return (
    <li
      className={clsx(
        "text-label flex items-center rounded-full",
        {
          "px-2.5 py-[0.25rem]": size === "medium",
          "px-2 py-1": size === "small",
        },
        color,
      )}
    >
      {emoji && <span className="mr-1 text-[1.5em]">{emoji}</span>}
      {text}
    </li>
  );
};

export default SkillBadge;
