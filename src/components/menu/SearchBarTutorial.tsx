import { InternalLinksIds } from "@/models";
import { useAppSelector } from "@/store";

const SearchBarTutorial = ({ pageId }: { pageId?: InternalLinksIds }) => {
  const { alreadyUsedFilter } = useAppSelector((state) => state.system);
  const searchTutorial = `Use the search to filter ${pageId === InternalLinksIds.allProjects ? "Projects" : "Articles"}`;

  return alreadyUsedFilter ? null : (
    <p className="text-body absolute left-2/4 top-16 w-full animate-bounce rounded-3xl bg-white p-2 text-center text-blue-950">
      <span className="absolute left-2/4 top-0 h-4 w-4 -translate-x-2/4 -translate-y-2/4 rotate-45 bg-white" />
      {searchTutorial}
    </p>
  );
};

export default SearchBarTutorial;
