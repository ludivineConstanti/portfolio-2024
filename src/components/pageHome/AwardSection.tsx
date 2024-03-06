import clsx from "clsx";
import Section from "./Section";
import { internalLinks } from "@/models";
import { Awwwards, CSSDesignAward, FWA, GrimmeOnlineAward } from "@/content";

const AwardWrapper = ({
  emoji = "🏆",
  logoWidth,
  children,
}: {
  emoji?: string;
  logoWidth: string;
  children: JSX.Element;
}) => {
  return (
    <li className="flex max-w-full gap-2">
      <span className="text-[4rem] xl:text-[5.5rem]">{emoji}</span>
      <div className={clsx(logoWidth, "flex items-center")}>{children}</div>
    </li>
  );
};

const AwardSection = ({
  emoji,
  title,
  id,
  colorSecondary,
}: {
  emoji: string;
  title: string;
  id: string;
  colorSecondary: string;
}) => {
  return (
    <Section
      emoji={emoji}
      title={title}
      id={id}
      color={colorSecondary}
      customClass="bg-blue-950 pointer-events-auto"
      link={{ href: internalLinks.awards.href, text: "See all Awards" }}
    >
      <div className="flex w-full justify-center">
        <ul className="max-w-home xl:max-w-home-xl grid flex-wrap items-center justify-start gap-2 gap-y-10 sm:flex sm:justify-center sm:gap-x-20">
          <AwardWrapper logoWidth="w-[10rem] sm:w-[12rem] xl:w-[18.5rem]">
            <GrimmeOnlineAward />
          </AwardWrapper>
          <AwardWrapper
            logoWidth="w-[10rem] sm:w-[11rem] xl:w-[22rem]"
            emoji="🎖️"
          >
            <Awwwards />
          </AwardWrapper>
          <AwardWrapper logoWidth="w-[9rem] xl:w-[13rem]" emoji="🥇">
            <FWA />
          </AwardWrapper>
          <AwardWrapper
            logoWidth="w-[10rem] sm:w-[13rem] xl:w-[31rem]"
            emoji="🪙"
          >
            <CSSDesignAward />
          </AwardWrapper>
        </ul>
      </div>
    </Section>
  );
};

export default AwardSection;
