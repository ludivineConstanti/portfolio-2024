import Image from "next/image";
import { ArrowOpenNewWindow } from ".";

const ProjectThumbnail = ({
  image,
  href,
}: {
  image: { url: string; alt: string };
  href: string;
}) => {
  return (
    <a
      className="relative overflow-hidden rounded-lg outline outline-2 outline-current xl:h-16"
      target="_blank"
      href={href}
    >
      {image && (
        <Image
          className="h-full w-full object-cover"
          src={image.url}
          alt={image.alt}
          width={336}
          height={189}
        />
      )}
      <div className="absolute bottom-1 right-1 flex rounded-sm text-[1.25rem]">
        ↗️
      </div>
      {/* <div className="text-label bg-grey absolute left-0 top-0 h-full w-full bg-white p-1 text-blue-800">
        Heavens of Mankind
      </div> */}
    </a>
  );
};

export default ProjectThumbnail;
