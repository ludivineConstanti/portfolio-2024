import clsx from "clsx";

const Section = ({
  title,
  text,
  images,
  textAlign = "right",
  className,
}: {
  title: string;
  text: JSX.Element;
  images: JSX.Element;
  textAlign?: "left" | "right";
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "px-custom grid min-h-[calc(100vh-13rem)] grid-rows-[auto_auto] items-center gap-40 py-40 2xl:grid-cols-[1fr_1fr] 2xl:gap-0",
        className,
      )}
    >
      <section
        className={clsx("row-start-1 lg:mx-32 xl:mx-60 2xl:mx-40", {
          "2xl:col-start-2": textAlign === "right",
          "2xl:col-start-1": textAlign === "left",
        })}
      >
        <h2 className="text-h3 mb-6">{title}</h2>
        <div className="text-body [&>ul]:list-disc [&>ul]:pl-6">{text}</div>
      </section>
      <div
        className={clsx(
          "row-start-1 row-start-2 grid place-items-center 2xl:row-start-1",
          {
            "2xl:col-start-1": textAlign === "right",
            "2xl:col-start-2": textAlign === "left",
          },
        )}
      >
        {images}
      </div>
    </div>
  );
};

export default Section;
