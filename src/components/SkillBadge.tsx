const SkillBadge = ({ emoji, text }: { emoji?: string; text: string }) => {
  return (
    <li className="text-label flex items-center rounded-full bg-blue-800 px-3 py-1.5">
      {emoji && <span className="mr-1">{emoji}</span>}
      {text}
    </li>
  );
};

export default SkillBadge;
