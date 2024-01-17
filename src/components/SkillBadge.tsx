const SkillBadge = ({ emoji, text }: { emoji?: string; text: string }) => {
  return (
    <li className="bg-blue-800 rounded-full flex py-1.5 px-3 text-label items-center">
      {emoji && <span className="mr-1">{emoji}</span>}
      {text}
    </li>
  );
};

export default SkillBadge;
