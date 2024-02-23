import React from "react";
import Link from "next/link";
import LinkCTA from "@/components/LinkCTA";

interface ArticleOrProjectData {
  _id: string;
  emoji: string;
  title?: string;
  text?: string;
  href?: string;
  slug?: { current: string };
}

const classEmoji = "text-[2.25em] xl:text-[2.5em]";

const classLinkWrapper =
  "grid grid-cols-[3rem_1fr] xl:grid-cols-[3.75rem_1fr] items-center";

const ListOfLinks = ({
  data,
  mainLink,
}: {
  data: ArticleOrProjectData[];
  mainLink: { text: string; href: string };
}) => {
  return (
    <li>
      <LinkCTA
        text={mainLink.text}
        href={mainLink.href}
        color="bg-green-800"
        alignCenter={false}
        marginBottom="small"
      />
      <ul className="grid gap-2 xl:grid-cols-[21.5rem_21.5rem_21.5rem] xl:gap-x-8">
        {data.map((e) => (
          <li className="text-body whitespace-normal" key={`project-${e._id}`}>
            {e.slug ? (
              <Link className={classLinkWrapper} href={`/${e.slug.current}`}>
                <span className={classEmoji}>{e.emoji}</span>
                <span className="text-link">{e.title || e.text}</span>
              </Link>
            ) : (
              <a className={classLinkWrapper} href={e.href} target="_blank">
                <span className={classEmoji}>{e.emoji}</span>
                <span className="text-link">{e.title || e.text}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ListOfLinks;
