import clsx from "clsx";

const TitleYear = ({
  text,
  color,
  customClass,
  id,
}: {
  text: string;
  color: string;
  customClass?: string;
  id?: string;
}) => {
  return (
    <h2
      className={clsx(
        customClass,
        "text-h2 my-individual-page xl:my-individual-page-xl inline-block rounded-2xl px-10 py-5",
        color,
      )}
      id={id}
    >
      {text}
    </h2>
  );
};

export default TitleYear;
