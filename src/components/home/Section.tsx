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
    <section>
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
        <div
          className={clsx(classNameMarginTitle, "flex justify-center", color)}
        >
          <Link
            href={link.href}
            className="text-h4 flex items-center gap-2 sm:gap-3 xl:gap-4"
          >
            {link.text}
            <div className="flex h-2 w-2 rounded-full border-[2px] border-solid border-white p-1 sm:h-4 sm:w-4 xl:h-6 xl:w-6 xl:border-2 xl:p-2">
              <ArrowForward />
            </div>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Section;
