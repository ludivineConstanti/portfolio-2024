const SectionTitle = ({
  role,
  workExperience,
  client,
  dateStart,
  dateEnd,
}: {
  role: { text: string; emoji: string };
  workExperience?: { href: string; title: string; emoji: string };
  client?: { text: string; emoji: string; href: string };
  dateStart: string | number;
  dateEnd: string | number;
}) => {
  return (
    <div className="my-8 xl:my-20">
      <h2 className="text-h2">
        My role {role.emoji} {role.text}
      </h2>
      <p className="text-h4">
        {workExperience ? (
          <>
            Made with {workExperience.emoji}{" "}
            <a href={workExperience.href} className="text-link" target="_blank">
              {workExperience.title}
            </a>{" "}
          </>
        ) : (
          "🔥 Personal project 🔥"
        )}
        {client && client.text ? (
          <>
            for {client.emoji}{" "}
            <a className="text-link" href={client.href} target="_blank">
              {client.text}
            </a>
          </>
        ) : (
          ""
        )}
        {` ${dateStart}`} {dateStart !== dateEnd ? `- ${dateEnd}` : ""}
      </p>
    </div>
  );
};

export default SectionTitle;
