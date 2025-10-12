import clsx from "clsx";

const TitleSection = ({
  emoji,
  text,
  color,
  className,
}: {
  emoji: string;
  text: string;
  color: string;
  className?: string;
}) => {
  return (
    <h2
      className={clsx(
        "text-h1 pointer-events-auto flex justify-center gap-2 px-8 py-8 sm:items-center xl:py-16",
        color,
        className,
      )}
    >
      <span>{emoji}</span>
      {text}
    </h2>
  );
};

export default TitleSection;
