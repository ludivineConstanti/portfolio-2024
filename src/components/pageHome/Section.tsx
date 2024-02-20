import Link from "next/link";
import clsx from "clsx";
import { ArrowForward, LinkCTA } from "@/components";

const classNameMarginTitle = "py-8 xl:py-16";

const Section = ({
  emoji,
  title,
  color,
  children,
  margin = "small",
  link,
  customClass,
}: {
  emoji: string;
  title: string;
  color: string;
  children: JSX.Element | JSX.Element[];
  margin?: "small" | "medium";
  link?: { text: string; href: string };
  customClass?: string;
}) => {
  return (
    <section className={clsx(customClass, "flex flex-col")}>
      <h2
        className={clsx(
          classNameMarginTitle,
          "text-h1 pointer-events-auto flex justify-center gap-2 px-8 sm:items-center",
          color,
        )}
      >
        <span>{emoji}</span>
        {title}
      </h2>
      <div
        className={clsx(
          "mx-section flex flex-col items-center py-16 xl:py-32",
          {
            "gap-8 xl:gap-16": margin === "small",
            "gap-16  xl:gap-32 ": margin === "medium",
          },
        )}
      >
        {children}
      </div>
      {link && <LinkCTA href={link.href} text={link.text} color={color} />}
    </section>
  );
};

export default Section;
