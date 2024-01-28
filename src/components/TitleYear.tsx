import clsx from "clsx";

const TitleYear = ({
  text,
  color,
  customClass,
}: {
  text: string;
  color: string;
  customClass?: string;
}) => {
  return (
    <h2
      className={clsx(
        customClass,
        "text-h2 all-projects-all-articles-my inline-block rounded-2xl px-10 py-5",
        color,
      )}
    >
      {text}
    </h2>
  );
};

export default TitleYear;
