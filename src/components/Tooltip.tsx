import React from "react";
import clsx from "clsx";

const Tooltip = ({
  side = "top",
  text,
}: {
  side?: "top" | "left";
  text: string;
}) => {
  return (
    <p
      className={clsx(
        {
          "left-1/2 top-[-1rem] -translate-x-2/4 -translate-y-full":
            side === "top" || side === "left",
          "sm:left-0 sm:top-2/4 sm:-translate-y-2/4 sm:translate-x-[calc(-100%-1rem)]":
            side === "left",
        },
        "text-label pointer-events-none absolute block min-w-full rounded-xl bg-blue-100 px-3 py-1 text-center text-blue-950 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100 sm:min-w-fit sm:whitespace-nowrap",
      )}
    >
      <span
        className={clsx(
          {
            "bottom-0 left-1/2 h-2 w-2 translate-x-[-50%] translate-y-[50%]":
              side === "top" || side === "left",
            "sm:bottom-auto sm:left-auto sm:right-0 sm:top-2/4 sm:h-1.5 sm:w-1.5 sm:-translate-y-2/4 sm:translate-x-[0.125rem]":
              side === "left",
          },
          "absolute rotate-45 bg-blue-100",
        )}
      ></span>
      {text}
    </p>
  );
};

export default Tooltip;
