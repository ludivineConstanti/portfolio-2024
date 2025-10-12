import clsx from "clsx";
import React from "react";

const Quote = ({
  text,
  author,
  className,
}: {
  text: string;
  author: string;
  className?: string;
}) => {
  return (
    <div className={clsx("text-h3 flex justify-center p-8 md:p-16", className)}>
      <div className="flex flex-col items-end">
        <blockquote className="relative">
          <span className="absolute -translate-x-full -translate-y-1/4 text-[2rem] leading-none md:text-[5rem]">
            “
          </span>
          {text}
          <span className="absolute -bottom-2 translate-y-3/4 text-[2rem] leading-none md:text-[5rem]">
            ”
          </span>
        </blockquote>
        <p className="text-h6 relative top-[-0.5rem] mr-1">{author}</p>
      </div>
    </div>
  );
};

export default Quote;
