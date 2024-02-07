import clsx from "clsx";

const Emoji = ({ emoji }: { emoji: string }) => {
  return <span className="mr-2">{emoji}</span>;
};

const TitlePage = ({
  emoji,
  text,
  color,
  doubleEmoji = false,
}: {
  emoji: string;
  text: string;
  color: string;
  doubleEmoji?: boolean;
}) => {
  return (
    <h1 className={clsx("text-h1 p-8 text-center xl:p-16", color)}>
      <Emoji emoji={emoji} />
      {text}
      {doubleEmoji && <Emoji emoji={emoji} />}
    </h1>
  );
};

export default TitlePage;
