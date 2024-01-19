import { ArrowOpenNewWindow } from ".";

const ProjectThumbnail = ({ color }: { color: string }) => {
  return (
    <a className="relative overflow-hidden rounded-lg border-2 border-solid border-current pb-[56%]">
      <div className="absolute bottom-2 right-2 h-5 w-5 rounded-sm bg-current p-1">
        <ArrowOpenNewWindow color={color} />
      </div>
      <div className="text-label bg-grey absolute left-0 top-0 h-full w-full bg-white p-1 text-blue-800">
        Heavens of Mankind
      </div>
    </a>
  );
};

export default ProjectThumbnail;
