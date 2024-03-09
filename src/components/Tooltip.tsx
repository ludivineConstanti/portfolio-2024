import React from "react";
import clsx from "clsx";

const Tooltip = ({
  side = "top",
  sideSm = "top",
  text,
  customClass,
}: {
  side?: "top" | "left";
  sideSm?: "top" | "left";
  text: string;
  customClass?: string;
}) => {
  return (
    <p
      className={clsx(
        customClass,
        {
          "bottom-[calc(100%+1rem)] left-1/2 origin-bottom -translate-x-2/4":
            side === "top",
          "left-0 top-2/4 origin-right -translate-y-2/4 translate-x-[calc(-100%-1.5rem)]":
            side === "left",
          "sm:bottom-[calc(100%+1rem)] sm:left-1/2 sm:top-auto sm:origin-bottom sm:-translate-x-2/4 sm:translate-y-0":
            sideSm === "top",
          "sm:bottom-auto sm:left-0 sm:top-2/4 sm:origin-right sm:-translate-y-2/4 sm:translate-x-[calc(-100%-1.5rem)]":
            sideSm === "left",
        },
        "text-h6 pointer-events-none absolute block min-w-full rounded-3xl bg-neutral-50 px-2 py-2 text-center text-blue-950 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100 sm:min-w-fit sm:whitespace-nowrap sm:px-5",
      )}
    >
      <span
        className={clsx(
          {
            "bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%]":
              side === "top",
            "right-0 top-[50%] translate-x-[0.25rem] translate-y-[-50%]":
              side === "left",
            "sm:bottom-auto sm:left-auto sm:right-0 sm:top-2/4 sm:-translate-y-2/4 sm:translate-x-[0.25rem]":
              sideSm === "left",
            "top-auto sm:bottom-0 sm:left-1/2 sm:right-auto sm:translate-x-[-50%] sm:translate-y-[50%]":
              sideSm === "top",
          },
          "absolute h-4  w-4 rotate-45 bg-neutral-50",
        )}
      ></span>
      {text}
    </p>
  );
};

export default Tooltip;
