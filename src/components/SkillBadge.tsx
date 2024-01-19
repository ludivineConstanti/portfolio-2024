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
          "px-3 py-1.5": size === "medium",
          "px-2 py-1": size === "small",
        },
        color,
      )}
    >
      {emoji && (
        <span className={clsx("mr-1", { "text-[1.25em]": size === "medium" })}>
          {emoji}
        </span>
      )}
      {text}
    </li>
  );
};

export default SkillBadge;
