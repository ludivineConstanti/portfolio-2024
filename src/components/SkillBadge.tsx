import clsx from "clsx";
import { SkillBadgeSizeOptions } from "@/models";

const SkillBadge = ({
  emoji,
  text,
  color = "bg-blue-800",
  size = "medium",
}: {
  emoji?: string;
  text: string;
  color: string;
  size?: SkillBadgeSizeOptions;
}) => {
  return (
    <li
      className={clsx(
        "flex items-center rounded-full",
        {
          "px-2 py-1": size === "small",
          "px-2.5 py-[0.25rem]": size === "medium",
          "text-label": size !== "big",
          "text-label-big px-3 py-[0.3rem]": size === "big",
        },
        color,
      )}
    >
      {emoji && (
        <span
          className={clsx("mr-1", {
            "text-[1.5em]": size !== "big",
            "text-[1.8em]": size === "big",
          })}
        >
          {emoji}
        </span>
      )}
      {text}
    </li>
  );
};

export default SkillBadge;
