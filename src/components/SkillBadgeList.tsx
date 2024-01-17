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

const SkillBadgeList = () => {
  return (
    <ul className="m-0 flex flex-wrap gap-2">
      {dummyData.map((e) => (
        <SkillBadge
          key={`skill-badge-${e.emoji}-${e.text}`}
          emoji={e.emoji}
          text={e.text}
        />
      ))}
    </ul>
  );
};

export default SkillBadgeList;
