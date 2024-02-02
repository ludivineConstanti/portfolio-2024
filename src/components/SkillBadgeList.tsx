import clsx from "clsx";
import { SkillBadgeData } from "@/models";
import SkillBadge from "./SkillBadge";

const SkillBadgeList = ({
  customClass,
  color = "bg-blue-800",
  size,
  skillBadges,
}: {
  customClass?: string;
  color?: string;
  size?: "small" | "medium";
  skillBadges: SkillBadgeData[];
}) => {
  return (
    <ul className={clsx("flex flex-wrap gap-2", customClass)}>
      {skillBadges.map((e) => (
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
