import { ArrowForward } from "@/components";

const LinkCTA = () => {
  return (
    <a className="flex max-w-fit gap-1 rounded-full border-2 border-solid border-current bg-blue-700 px-3 py-1.5">
      Learn more
      <div className="ml-1 h-3">
        <ArrowForward />
      </div>
    </a>
  );
};

export default LinkCTA;
