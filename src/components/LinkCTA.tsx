import Link from "next/link";
import clsx from "clsx";
import { ArrowForward } from "@/components";

const LinkCTA = ({
  href,
  text,
  color,
  alignCenter = true,
  marginBottom = "big",
}: {
  href: string;
  text: string;
  color: string;
  alignCenter?: boolean;
  marginBottom?: "small" | "big" | "none";
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        {
          "self-center": alignCenter,
          "mb-16 sm:mb-20 xl:mb-32": marginBottom === "big",
          "mb-4 xl:mb-8": marginBottom === "small",
        },
        "text-h3 text-link-interactive group pointer-events-auto flex max-w-fit items-center justify-center  gap-3 underline-offset-8 outline-offset-4 hover:underline hover:decoration-1 sm:gap-4 xl:gap-6",
      )}
    >
      {text}
      <span
        className={clsx(
          color,

          "flex h-8 w-8 origin-[center_left] rounded-full border-[2px] border-solid border-current p-2 transition-transform group-hover:scale-125 group-active:scale-150 sm:h-12 sm:w-12 sm:p-3 xl:h-14 xl:w-14 xl:border-2 xl:p-3.5",
        )}
      >
        <ArrowForward />
      </span>
    </Link>
  );
};

export default LinkCTA;
