import { TitlePage } from "@/components";
import Layout from "@/components/Layout";
import Image from "@/components/pageAboutMe/Image";
import { internalLinks, InternalLinksIds } from "@/models/constantsMenu";
import clsx from "clsx";
import TitleSection from "@/components/TitleSection";
import Quote from "@/components/pageAboutMe/Quote";
import Section from "@/components/pageAboutMe/Section";

const colorPrimary = "bg-violet-950";
const colorSecondary = "bg-violet-800";
const pageId = InternalLinksIds.aboutMe;

const AboutMePage = () => {
  return (
    <Layout
      title={internalLinks[pageId].text}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
      pageId={pageId}
    >
      <main className={clsx(colorPrimary)}>
        <TitlePage
          emoji={internalLinks[pageId].emoji}
          text={internalLinks[pageId].text}
          color={colorSecondary}
        />
        <Section
          title="👋 Nice to meet you"
          text={
            <>
              I am a Full-Stack Software Engineer who loves working remotely (in
              English, German or French) 🌏
              <br />
              <br />
              My journey in the digital world started in 2017 as an Art
              Director, which gave me a solid product & goal oriented mindset. I
              love when my work produces real value.
              <br />
              <br />
              While the skill set gained from my past professional experiences
              helps me to have a positive impact on the product I work on,
              (notably for UI/UX mindset, clear priority setting, adaptability &
              workflow organization), I want to focus on improving my skills on
              automation, Architecture, Back End & AI.
            </>
          }
          images={
            <>
              <Image
                className="bottom-[12rem] left-[15rem] outline-violet-800"
                src="/me/touch_screen.png"
                size="medium"
                alt="A young woman touching an interactive table"
              />
              <Image
                className="z-10 outline-violet-800"
                src="/me/barcelona_lights.png"
                size="large"
                alt="A young woman standing in a room full of lights and mirrors"
              />
            </>
          }
        />
        <TitleSection emoji="🫀" text="Values" color="bg-blue-800" />
        <Section
          title="🕮 Life-long learner"
          text={
            <>
              Born with the INTP (Logician) personality type, I consider life as
              a long learning journey. This is why I switched countries multiple
              times (learning a few languages along the way) while switching
              job-titles in the Design & Technology industry.
              <br />
              <br />
              I love when I am able to work with team members with diversified
              backgrounds, as I found out that it is a great opportunity to
              learn & teach at the same time. Alternating between beginner &
              expert mindset is great to build empathy, keep learning while
              making sure we write code that is understandable for all levels.
              <br />
              <br />
              Since a young age, I have always had a long term mindset, in favor
              of taking calculated risks. This is a perfect combination with
              learning. While each new learning experience requires risks, they
              are always rewarding.
            </>
          }
          images={
            <>
              <Image
                className="outline-blue-800"
                src="/me/top_women_tech_speaking.jpg"
                size="large"
                alt="A group of women, sitting, talking in a conference room"
              />
              <Image
                className="right-[15rem] top-[12rem] outline-blue-800"
                src="/me/top_women_tech_vr.jpg"
                size="medium"
                alt="A group of women trying out VR headsets"
              />
            </>
          }
          textAlign="left"
          className="bg-blue-900"
        />
        <Quote
          text="Change before you have to."
          author="Jack Welch"
          className="bg-blue-800"
        />
        <Section
          title="🌱 Healthy Workflows"
          text={
            <>
              Born with the INTP (Logician) personality type, I consider life as
              a long learning journey. This is why I switched countries multiple
              times (learning a few languages along the way) while switching
              job-titles in the Design & Technology industry.
              <br />
              <br />
              I love when I am able to work with team members with diversified
              backgrounds, as I found out that it is a great opportunity to
              learn & teach at the same time. Alternating between beginner &
              expert mindset is great to build empathy, keep learning while
              making sure we write code that is understandable for all levels.
              <br />
              <br />
              Since a young age, I have always had a long term mindset, in favor
              of taking calculated risks. This is a perfect combination with
              learning. While each new learning experience requires risks, they
              are always rewarding.
            </>
          }
          images={
            <>
              <Image
                className="outline-emerald-800"
                src="/me/spain_stairs.jpeg"
                size="large"
                alt="Woman sitting on the stairs, surrounded by trees."
              />
              <Image
                className="right-[15rem] top-[12rem] outline-emerald-800"
                src="/me/spain_trees.jpeg"
                size="medium"
                alt="A woman standing, surrounded by trees."
              />
            </>
          }
          className="bg-emerald-900"
        />
        <Quote
          text="There's a way to do it better - find it."
          author="Thomas Edison"
          className="bg-emerald-800"
        />
        <Section
          title="🗠 Data based Growth"
          text={
            <>
              Whenever faced with a concept or problem (be it for code or human
              relationships) I love to be able to understand its full concept.
              This is why I prefer long term projects or teams where I can learn
              more about my team members.
              <br />
              <br />
              I believe that true learning can only be achieved by staying in
              touch with the world, through information gathering. This makes me
              happy to receive feedback & have an open communication culture. Be
              it by accessing data, analytics on the project or communication
              with other teams (sales, customer success...).
              <br />
              <br />
              This is important since while gathering data helps, knowing how to
              correctly interpret it is often the trickiest part. I can perform
              my best when goals and priorities are set clearly. I also love to
              spend one (or more) months (s) to level up a specific skill.
              <br />
              <br />
              My favorite part of the SCRUM framework is the retro with the
              team, to reflect & improve our work.
            </>
          }
          images={
            <>
              <Image
                className="outline-blue-800"
                src="/me/barcelona_grey_curtains.jpeg"
                size="large"
                alt="A young woman standing in a room full of lights and mirrors"
              />
              <Image
                className="left-[15rem] top-[12rem] outline-blue-800"
                src="/me/top_women_tech_listening.jpg"
                size="medium"
                alt="A young woman standing in a room full of lights and mirrors"
              />
              <Image
                className="bottom-[6rem] right-[15rem] outline-blue-800"
                src="/me/top_women_tech_close_up.jpg"
                size="medium"
                alt="A young woman standing in a room full of lights and mirrors"
              />
            </>
          }
          textAlign="left"
          className="bg-blue-900"
        />
        <Quote
          text="Don't be a robot, build the robot."
          author="Wade Foster"
          className="bg-blue-800"
        />
      </main>
    </Layout>
  );
};

export default AboutMePage;
