import clsx from "clsx";
import Section from "./Section";
import { Tooltip } from "@/components";
import ClientLogo from "./ClientLogo";

const ClientSection = ({
  emoji,
  title,
  id,
  colorSecondary,
  clients,
}: {
  emoji: string;
  title: string;
  id: string;
  colorSecondary: string;
  clients: {
    id: string;
    colorPrimary: string;
    role: { text: string };
    text: string;
    workExperience: { emoji: string; title: string };
  }[];
}) => {
  return (
    <Section
      emoji={emoji}
      title={title}
      id={id}
      color={colorSecondary}
      customClass="bg-blue-950 pointer-events-auto"
    >
      <ul className="flex max-w-home flex-wrap justify-center gap-4 sm:gap-8 xl:max-w-home-xl xl:gap-10">
        {clients.map((client) => (
          <li
            className={clsx(
              client.colorPrimary,
              "group pointer-events-auto relative flex h-16 w-16 flex-col items-center justify-center rounded-xl transition-transform hover:z-10 hover:scale-[1.75] sm:h-24 sm:w-24 xl:h-[7.5rem] xl:w-[7.5rem] xl:hover:scale-[1.5]",
            )}
            key={`client-${client.id}`}
          >
            <div className="absolute top-2/4 flex -translate-y-2/4 items-center justify-center p-3 transition-transform group-hover:translate-y-[-75%] group-hover:scale-0 sm:p-6 sm:group-hover:scale-75 xl:group-hover:scale-[60%]">
              <ClientLogo id={client.id} />
            </div>
            <p className="absolute p-1 text-center text-[0.5rem] font-light leading-tight opacity-0 transition-opacity group-hover:opacity-100 sm:top-10 sm:text-[0.6rem] xl:top-12 xl:p-2 xl:text-[0.75rem]">
              {client.role.text}
              <br />
              {client.workExperience.emoji} {client.workExperience.title}
            </p>
            <Tooltip
              text={client.text}
              customClass="group-hover:scale-[0.57] xl:group-hover:scale-[0.66]"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ClientSection;
