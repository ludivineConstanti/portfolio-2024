import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Tooltip, ArrowForward } from "@/components";

const ProjectThumbnail = ({
  image,
  href,
  title,
  emoji,
  color,
}: {
  _id: string;
  image: { url: string };
  emoji: string;
  href: string;
  title: string;
  color: string;
}) => {
  return (
    <li className="relative rounded-lg outline outline-2 outline-current transition-transform hover:scale-110 active:scale-125 xl:h-16">
      <Link
        className="group outline-offset-4 focus-visible:outline-2 focus-visible:outline-current"
        href={href}
      >
        {image && (
          <Image
            className="h-full w-full rounded-lg object-cover"
            src={image.url}
            alt=""
            width={336}
            height={189}
          />
        )}
        <div
          className={clsx(
            color,
            "absolute bottom-1.5 right-1.5 flex h-6 w-6 origin-bottom-right rounded-full border-2 border-current p-1 transition-transform group-hover:scale-125",
          )}
        >
          <ArrowForward />
        </div>
        <Tooltip
          text={`${emoji} ${title}`}
          customClass="group-hover:scale-[0.9] group-active:scale-[0.8]"
        />
      </Link>
    </li>
  );
};

export default ProjectThumbnail;
