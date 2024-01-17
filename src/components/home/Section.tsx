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
      <div className="mx-section flex flex-col items-center gap-8 py-8 xl:gap-16 xl:py-16">
        {children}
      </div>
    </section>
  );
};

export default Section;
