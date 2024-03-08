import clsx from "clsx";
import { VisibleSkillBadgeData, SkillBadgeSizeOptions } from "@/models";
import SkillBadge from "./SkillBadge";

const SkillBadgeList = ({
  customClass,
  color = "bg-blue-800",
  size,
  skillBadges,
}: {
  customClass?: string;
  color?: string;
  size?: SkillBadgeSizeOptions;
  skillBadges: VisibleSkillBadgeData[];
}) => {
  return (
    <ul
      className={clsx(
        "flex flex-wrap",
        { "gap-2": size !== "big", "gap-3": size === "big" },
        customClass,
      )}
    >
      {skillBadges
        .filter((e) => e.visible !== false)
        .map((e) => (
          <SkillBadge
            key={`skill-badge-${e._id}`}
            emoji={e.emoji}
            text={e.text}
            color={color}
            size={size}
          />
        ))}
    </ul>
  );
};

export default SkillBadgeList;
