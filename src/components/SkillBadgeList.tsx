import clsx from "clsx";
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
}: {
  customClass?: string;
  color?: string;
  size?: "small" | "medium";
}) => {
  return (
    <ul className={clsx("m-0 flex flex-wrap gap-2", customClass)}>
      {dummyData.map((e) => (
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
