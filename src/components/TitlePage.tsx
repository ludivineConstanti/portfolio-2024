import clsx from "clsx";

const Emoji = ({
  emoji,
  customClass,
}: {
  emoji: string;
  customClass?: string;
}) => {
  return <span className={clsx(customClass, "mr-2")}>{emoji}</span>;
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
    <h1
      className={clsx(
        "text-h1 p-8 pt-[4.25rem] text-center sm:pt-18 xl:p-16 xl:pt-22",
        color,
      )}
    >
      <Emoji emoji={emoji} />
      {text}
      {doubleEmoji && <Emoji emoji={emoji} customClass="hidden sm:inline" />}
    </h1>
  );
};

export default TitlePage;
