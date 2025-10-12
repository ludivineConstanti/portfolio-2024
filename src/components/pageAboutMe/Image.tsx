import Image from "next/image";
import clsx from "clsx";

const ImageComponent = ({
  src,
  alt,
  size,
  className,
}: {
  src: string;
  alt: string;
  size: "medium" | "large";
  className?: string;
}) => {
  return (
    <Image
      className={clsx(
        "col-start-1 row-start-1 rounded-xl outline outline-[0.5rem] transition-transform hover:z-20",
        {
          "absolute h-0 w-0 opacity-0 duration-700 hover:scale-[225%] md:relative md:h-40 md:w-40 md:opacity-100":
            size === "medium",
          "duration-300 hover:scale-[115%]": size === "large",
        },
        className,
      )}
      src={src}
      width={400}
      height={400}
      alt={alt}
    />
  );
};

export default ImageComponent;
