import React from "react";
import clsx from "clsx";
import { Tooltip } from "..";
import { BottomNavigationComponentProps } from "@/models";

const BottomNavigation = ({
  bottomNavigationLinks,
  colorPrimary,
}: {
  bottomNavigationLinks: BottomNavigationComponentProps;
  colorPrimary: string;
}) => {
  return (
    <nav className="fixed bottom-0 left-0 z-20 w-full">
      <ul className="flex flex-wrap justify-center p-2">
        {bottomNavigationLinks.map((link) => (
          <li key={`bottom-link-${link.href}`}>
            <a
              className="group pointer-events-auto flex items-center justify-center p-3.5 transition-transform hover:scale-150 active:scale-125 sm:p-4 xl:p-5"
              href={`#${link.href}`}
            >
              <span
                className={clsx(
                  colorPrimary,
                  "relative h-4 w-4 rounded-full border-2 border-current",
                )}
              >
                <Tooltip
                  text={link.emoji ? `${link.emoji} ${link.text}` : link.text}
                  customClass="group-hover:scale-[0.66] group-active:scale-[0.8]"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
