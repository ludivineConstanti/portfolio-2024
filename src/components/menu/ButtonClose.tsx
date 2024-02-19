import React from "react";
import clsx from "clsx";

const ButtonClose = ({
  menuIsOpen,
  setMenuIsOpen,
  color,
}: {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
}) => {
  return (
    <button
      onClick={() => {
        setMenuIsOpen((v) => !v);
      }}
      className={clsx(
        color,
        "pointer-events-auto absolute right-8 top-8 h-12 w-12 cursor-pointer rounded-full border-2 border-solid border-current bg-[rgba(255,255,255,0)] p-3.5 transition-transform hover:scale-125 active:scale-150 sm:hidden",
      )}
    >
      {menuIsOpen ? (
        <>
          <span className="sr-only">Close menu</span>
          <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9504 13.3641C12.3409 13.7546 12.9741 13.7546 13.3646 13.3641C13.7551 12.9735 13.7551 12.3404 13.3646 11.9499L8.41485 7.00015L13.3646 2.05038C13.7551 1.65988 13.7551 1.0267 13.3646 0.6362C12.9741 0.245697 12.3409 0.245697 11.9504 0.6362L7.00063 5.58591L2.05087 0.636139C1.66033 0.245636 1.02718 0.245636 0.63665 0.636139C0.246117 1.0267 0.246117 1.65988 0.63665 2.05038L5.58642 7.00015L0.63665 11.9499C0.246147 12.3404 0.246147 12.9736 0.63665 13.3641C1.02718 13.7547 1.66036 13.7547 2.05087 13.3641L7.00063 8.41434L11.9504 13.3641Z"
              fill="currentColor"
            />
          </svg>
        </>
      ) : (
        <>
          <span className="sr-only">Open menu</span>
          <svg
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1C0 0.447715 0.447715 0 1 0H13C13.5523 0 14 0.447715 14 1C14 1.55228 13.5523 2 13 2H1C0.447716 2 0 1.55228 0 1Z"
              fill="currentColor"
            />
            <path
              d="M0 6C0 5.44772 0.447715 5 1 5H13C13.5523 5 14 5.44772 14 6C14 6.55228 13.5523 7 13 7H1C0.447716 7 0 6.55228 0 6Z"
              fill="currentColor"
            />
            <path
              d="M0 11C0 10.4477 0.447715 10 1 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H1C0.447716 12 0 11.5523 0 11Z"
              fill="currentColor"
            />
          </svg>
        </>
      )}
    </button>
  );
};

export default ButtonClose;
