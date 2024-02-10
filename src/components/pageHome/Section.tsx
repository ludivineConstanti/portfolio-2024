import Link from "next/link";
import clsx from "clsx";
import { ArrowForward } from "@/components";

const classNameMarginTitle = "py-8 xl:py-16";

const Section = ({
  emoji,
  title,
  color,
  children,
  margin = "small",
  link,
}: {
  emoji: string;
  title: string;
  color: string;
  children: JSX.Element | JSX.Element[];
  margin?: "small" | "medium";
  link?: { text: string; href: string };
}) => {
  return (
    <section className="flex flex-col">
      <h2
        className={clsx(
          classNameMarginTitle,
          "text-h1 flex items-center justify-center",
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
      {link && (
        <Link
          href={link.href}
          className="text-h3 align-center mb-16 flex max-w-fit items-center justify-center gap-3 self-center sm:mb-20 sm:gap-4 xl:mb-32 xl:gap-6"
        >
          {link.text}
          <div
            className={clsx(
              color,
              "flex h-4 w-4 rounded-full border-[2px] border-solid border-white p-2 sm:h-12 sm:w-12 sm:p-3 xl:h-16 xl:w-16 xl:border-2 xl:p-4",
            )}
          >
            <ArrowForward />
          </div>
        </Link>
      )}
    </section>
  );
};

export default Section;
