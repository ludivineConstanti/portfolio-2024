const Section = ({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <section>
      <h2
        className={`text-h1 bg-${color} flex items-center justify-center py-8 xl:py-16`}
      >
        {title}
      </h2>
      <div className="mx-section flex flex-col py-8 xl:py-16 gap-8 xl:gap-16 items-center">
        {children}
      </div>
    </section>
  );
};

export default Section;
