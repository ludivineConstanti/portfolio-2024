import clsx from "clsx";
import { SkillBadgeData } from "@/models";
import SkillBadge from "./SkillBadge";

const dummyData = [
  { emoji: "🤖", text: "AI" },
  { emoji: "🌐", text: "DApp" },
  { emoji: "💻", text: "Code Sample" },
  { emoji: "🐱", text: "Public on GitHub" },
  { emoji: "⏳", text: "Asynchronous" },
  { emoji: "🍱", text: "Web Components" },
  { emoji: "📦", text: "NPM Package" },
  { emoji: "📄", text: "Documentation" },
  { emoji: "📝", text: "Technical Writing" },
  { emoji: "📊", text: "Data Visualization" },
];

const SkillBadgeList = ({
  customClass,
  color = "bg-blue-800",
  size,
  skillBadges = dummyData,
}: {
  customClass?: string;
  color?: string;
  size?: "small" | "medium";
  skillBadges?: SkillBadgeData[];
}) => {
  return (
    <ul className={clsx("flex flex-wrap gap-2", customClass)}>
      {skillBadges.map((e) => (
        <SkillBadge
          key={`skill-badge-${e.emoji}-${e.text}`}
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
