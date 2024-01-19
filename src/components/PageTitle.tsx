import clsx from "clsx";

const PageTitle = ({
  emoji,
  text,
  color,
}: {
  emoji: string;
  text: string;
  color: string;
}) => {
  return (
    <h1 className={clsx("text-h1 mb-16 p-8 text-center xl:p-16", color)}>
      <span className="mr-2">{emoji}</span>
      {text}
    </h1>
  );
};

export default PageTitle;
