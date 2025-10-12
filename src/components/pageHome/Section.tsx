import clsx from "clsx";
import { LinkCTA } from "@/components";
import TitleSection from "../TitleSection";

const Section = ({
  id,
  emoji,
  title,
  color,
  children,
  margin = "small",
  link,
  customClass,
}: {
  id: string;
  emoji: string;
  title: string;
  color: string;
  children: JSX.Element | JSX.Element[];
  margin?: "small" | "medium";
  link?: { text: string; href: string };
  customClass?: string;
}) => {
  return (
    <section id={id} className={clsx(customClass, "flex flex-col")}>
      <TitleSection emoji={emoji} text={title} color={color} />

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
