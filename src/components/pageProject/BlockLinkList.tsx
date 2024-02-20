import BlockBase from "./BlockBase";

const ExternalLink = ({
  emoji,
  href,
  text,
}: {
  emoji: string;
  href: string;
  text: string;
}) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="text-body grid grid-cols-[2rem_auto] items-center sm:grid-cols-[2.6rem_auto]"
      >
        <span className="text-[1.25em] sm:text-[1.75em]">{emoji}</span>{" "}
        <span>
          <span className="text-link">{text}</span>{" "}
          <span className="external-link-emoji-cta">↗️</span>
        </span>
      </a>
    </li>
  );
};

const BlockLinkList = ({
  color,
  title,
  links,
}: {
  color: string;
  title: string;
  links: { _id: string; emoji: string; text: string; href: string }[];
}) => {
  return (
    <BlockBase color={color}>
      <h3>{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <ExternalLink
            key={`external-link-${link._id}`}
            emoji={link.emoji}
            href={link.href}
            text={link.text}
          />
        ))}
      </ul>
    </BlockBase>
  );
};

export default BlockLinkList;
