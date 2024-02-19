import Image from "next/image";
import { Tooltip } from "@/components";

const ProjectThumbnail = ({
  _id,
  image,
  href,
  title,
}: {
  _id: string;
  image: { url: string };
  href: string;
  title: string;
}) => {
  return (
    <li className="relative rounded-lg outline outline-2 outline-current transition-transform hover:scale-110 active:scale-125 xl:h-16">
      <a
        target="_blank"
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
        <div className="absolute bottom-1 right-1 flex origin-bottom-right rounded-sm text-[1.25rem] transition-transform group-hover:scale-125">
          ↗️
        </div>
        <Tooltip text={title} />
      </a>
    </li>
  );
};

export default ProjectThumbnail;
