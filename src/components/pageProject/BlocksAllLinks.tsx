import BlockLinkList from "./BlockLinkList";

type LinkListProps =
  | {
      _id: string;
      emoji: string;
      text: string;
      href: string;
    }[]
  | null;

const BlocksAllLinks = ({
  colorSecondary,
  projectLinks,
  awards,
  articles,
  posts,
}: {
  colorSecondary: string;
  projectLinks?: LinkListProps;
  awards?: LinkListProps;
  articles?: LinkListProps;
  posts?: LinkListProps;
}) => {
  return (
    <div className="flex flex-col gap-6">
      {projectLinks && (
        <BlockLinkList
          color={colorSecondary}
          title={`🔗 Project link${projectLinks.length > 1 ? "s" : ""}:`}
          links={projectLinks}
        />
      )}
      {awards && (
        <BlockLinkList
          color={colorSecondary}
          title={`🏆 Award${awards.length > 1 ? "s" : ""}:`}
          links={awards}
        />
      )}
      {articles && (
        <BlockLinkList
          color={colorSecondary}
          title={`📰 Article${articles.length > 1 ? "s" : ""}:`}
          links={articles}
        />
      )}
      {posts && (
        <BlockLinkList
          color={colorSecondary}
          title={`🖼️ Online post${posts.length > 1 ? "s" : ""}:`}
          links={posts}
        />
      )}
    </div>
  );
};

export default BlocksAllLinks;
