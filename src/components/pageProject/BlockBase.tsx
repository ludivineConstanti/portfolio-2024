import clsx from "clsx";

const BlockBase = ({
  children,
  color,
}: {
  children: JSX.Element[] | JSX.Element;
  color: string;
}) => {
  return (
    <section
      className={clsx(
        "[&>h3]:text-h3 [&>p]:text-body justify-self-start rounded-2xl p-4 sm:p-8 xl:p-16 [&>h3]:mb-3 xl:[&>h3]:mb-4 [&>p:not(:last-child)]:mb-6 [&>p>a]:underline [&>p>a]:underline-offset-4",
        color,
      )}
    >
      {children}
    </section>
  );
};

export default BlockBase;
