import Image from "next/image";
import clsx from "clsx";

const ImageFullWidth = ({
  isInteractive,
  image,
}: {
  isInteractive: boolean;
  image: { url: string; alt: string };
}) => {
  return (
    <Image
      className={clsx(
        { "transition-transform group-hover:scale-105": isInteractive },
        "h-full w-full object-cover",
      )}
      priority={true}
      src={image.url}
      alt={image.alt}
      width={1920}
      height={1080}
    />
  );
};

const ImageComponent = ({
  imageLinkHref,
  imageLinkText,
  image,
  colorPrimary,
}: {
  imageLinkHref?: string;
  imageLinkText?: string;
  image: { url: string; alt: string };
  colorPrimary: string;
}) => {
  if (imageLinkHref && imageLinkText) {
    return (
      <a
        className="group relative w-full overflow-hidden"
        target="_blank"
        href={imageLinkHref}
      >
        <ImageFullWidth isInteractive={true} image={image} />
        <div
          className={clsx(
            colorPrimary,
            "absolute bottom-4 left-[50%] flex -translate-x-2/4 items-center gap-1.5 rounded-full border-2 border-solid border-current px-2 py-1.5 transition-transform group-hover:scale-125 sm:bottom-8 sm:gap-2 sm:px-3 sm:py-2 xl:bottom-16",
          )}
        >
          <span className="text-label sm:text-body">{imageLinkText}</span>
          <div className="w-3 sm:w-4">
            <svg
              width="100%"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3376 13.3141H3.00423C2.57645 13.3141 2.22645 12.9641 2.22645 12.5363V3.20296C2.22645 2.77518 2.57645 2.42518 3.00423 2.42518H6.89312C7.3209 2.42518 7.6709 2.07518 7.6709 1.64741C7.6709 1.21963 7.3209 0.869629 6.89312 0.869629H2.22645C1.36312 0.869629 0.670898 1.56963 0.670898 2.42518V13.3141C0.670898 14.1696 1.3709 14.8696 2.22645 14.8696H13.1153C13.9709 14.8696 14.6709 14.1696 14.6709 13.3141V8.64741C14.6709 8.21963 14.3209 7.86963 13.8931 7.86963C13.4653 7.86963 13.1153 8.21963 13.1153 8.64741V12.5363C13.1153 12.9641 12.7653 13.3141 12.3376 13.3141ZM9.22645 1.64741C9.22645 2.07518 9.57645 2.42518 10.0042 2.42518H12.0187L4.91757 9.5263C4.61423 9.82963 4.61423 10.3196 4.91757 10.623C5.2209 10.9263 5.7109 10.9263 6.01423 10.623L13.1153 3.52185V5.5363C13.1153 5.96407 13.4653 6.31407 13.8931 6.31407C14.3209 6.31407 14.6709 5.96407 14.6709 5.5363V1.64741C14.6709 1.21963 14.3209 0.869629 13.8931 0.869629H10.0042C9.57645 0.869629 9.22645 1.21963 9.22645 1.64741Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </a>
    );
  }
  return <ImageFullWidth isInteractive={false} image={image} />;
};

export default ImageComponent;
