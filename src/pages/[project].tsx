import type { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import { TypedObject } from "sanity";
import {
  Layout,
  TitlePage,
  SkillBadgeList,
  ProjectBlockBase,
  ProjectBlockLinkList,
} from "@/components";
import { SlugProps, SkillBadgeData } from "@/models";
import { groq } from "next-sanity";
import { client, querySkillBadges } from "@/sanity/utils";
import {
  sortAlphabetically,
  returnProjectOrArticleYear,
  returnVisibleSkillBadges,
} from "@/utils";

// Returns a list of possible value for the projects id
export const getStaticPaths = async () => {
  const data = await client.fetch(groq`*[_type == "project"]{
    slug 
    }`);

  return {
    paths: data.map((project: { slug: SlugProps }) => ({
      params: { project: project.slug.current },
    })),
    fallback: false,
  };
};

// Fetch necessary data for the blog post using params.id
export const getStaticProps = async ({
  params,
}: InferGetStaticPropsType<typeof getStaticPaths>) => {
  const { project } = params;
  const data = await client.fetch(
    groq`*[_type == "project" && slug.current == $project]{
        ${querySkillBadges}
        _id,
        emoji,
        title,
        href,
        hrefGitHub,
        hrefStudyCase,
        text,
        dateStart,
        dateEnd,
        role,
        workExperience->{emoji, title, href},
        client->{_type, emoji, text, title, href},
        colorPrimary,
        colorSecondary, 
        colorSkillBadge,
        image{
            'url': asset->url,
            alt
        },  
        }`,
    { project },
  );

  const projectLinks = [];
  let imageLinkHref;
  let imageLinkText;

  if (data[0].href) {
    projectLinks.push({
      emoji: "💻",
      href: data[0].href,
      text: "Website",
    });
    imageLinkHref = data[0].href;
    imageLinkText = "Go to Website";
  }
  if (data[0].hrefGitHub) {
    projectLinks.push({
      emoji: "😼",
      href: data[0].hrefGitHub,
      text: "GitHub",
    });
    if (!imageLinkHref) {
      imageLinkHref = data[0].hrefGitHub;
      imageLinkText = "Go to GitHub repository";
    }
  }
  if (data[0].hrefStudyCase) {
    projectLinks.push({
      emoji: "✍️",
      href: data[0].hrefStudyCase,
      text: "Go to Study Case",
    });
    if (!imageLinkHref) {
      imageLinkHref = data[0].hrefStudyCase;
      imageLinkText = "See project Study Case";
    }
  }

  /* AWARDS */

  const awardsData: {
    _id: string;
    category: { text: string; emoji: string };
    href: string;
  }[] = await client.fetch(
    groq`*[_type == "award" && project._ref == $projectId]{
    _id,
    category->{text, emoji},
    href,
  }`,
    { projectId: data[0]._id },
  );

  const awards = awardsData.map((award) => ({
    _id: award._id,
    href: award.href,
    emoji: award.category.emoji,
    text: award.category.text,
  }));

  /* ROLE */

  const role = await client.fetch(
    groq`*[_id == $role]{
        emoji,
        text  
        }`,
    { role: data[0].role._ref },
  );

  /* ARTICLES */

  const articles: {
    _id: string;
    emoji: string;
    text: string;
    href: string;
    projects: { _id: string }[];
  }[] = await client.fetch(
    groq`*[_type == "article"] | order(text asc){
        _id,
        emoji,
        text,
        href,
        projects[]->{_id}, 
        }`,
  );

  const currentArticles = articles
    .filter((article) => article.projects)
    .map((article) => ({
      ...article,
      projects: article.projects.map((project) => project._id),
    }))
    .filter((article) => article.projects.includes(data[0]._id));

  /* POSTS */

  const postsData: {
    _id: string;
    text: string;
    href: string;
    youtubePost: true | null;
    instagramPost: true | null;
    linkedinPost: true | null;
  }[] = await client.fetch(
    groq`*[_type == "post" && project._ref == $projectId]{
        _id,
        text,
        href,
        youtubePost,
        instagramPost,
        linkedinPost, 
        }`,
    { projectId: data[0]._id },
  );

  const posts = postsData
    .sort((a, b) => {
      // INSTAGRAM post get at the bottom
      if (a.instagramPost === null && b.instagramPost) return -1;
      if (a.instagramPost && b.instagramPost === null) return 1;
      // YOUTUBE
      if (a.youtubePost === null && b.youtubePost) return -1;
      if (a.youtubePost && b.youtubePost === null) return 1;
      // LINKEDIN
      if (a.linkedinPost === null && b.linkedinPost) return -1;
      if (a.linkedinPost && b.linkedinPost === null) return 1;

      return 0;
    })
    .map((post) => {
      let text = post.text;
      let emoji = "📖";
      if (post.instagramPost) {
        text = `Instagram: ${post.text}`;
        emoji = "📸";
      } else if (post.youtubePost) {
        text = `Youtube: ${post.text}`;
        emoji = "📽️";
      } else if (post.linkedinPost) {
        text = `LinkedIn: ${post.text}`;
        emoji = "📝";
      }
      return {
        _id: post._id,
        emoji,
        text,
        href: post.href,
      };
    });

  /* PROJECT CLIENT */

  const clientData = data[0].client;
  const projectClient = clientData
    ? {
        emoji: clientData.emoji,
        text:
          clientData._type === "workExperience"
            ? clientData.title
            : clientData.text,
        href: clientData.href,
      }
    : {};

  /* SKILL BADGES */

  const skillBadges = sortAlphabetically(data[0].skillBadges);

  return {
    props: {
      data: {
        ...data[0],
        dateStart: new Date(data[0].dateStart).getFullYear(),
        dateEnd: returnProjectOrArticleYear(data[0].dateEnd, true),
        skillBadges: returnVisibleSkillBadges(skillBadges, 15),
        imageLinkHref,
        imageLinkText,
        role: role[0],
        client: projectClient,
        projectLinks: projectLinks.length ? projectLinks : null,
        articles: currentArticles.length ? currentArticles : null,
        awards: awards.length ? awards : null,
        posts: posts.length ? posts : null,
      },
    },
  };
};

type ExternalLinksProps =
  | {
      _id: string;
      emoji: string;
      href: string;
      text: string;
    }[]
  | null;

interface ProjectPageProps {
  colorSkillBadge: string;
  data: {
    emoji: string;
    title: string;
    colorPrimary: string;
    imageLinkHref?: string;
    imageLinkText?: string;
    colorSecondary: string;
    colorSkillBadge: string;
    image: { url: string; alt: string };
    dateStart: number;
    dateEnd: number;
    skillBadges: SkillBadgeData[];
    role: { emoji: string; text: string };
    workExperience: { emoji: string; title: string; href: string };
    client?: { emoji: string; text: string; href: string };
    text: TypedObject | TypedObject[];
    projectLinks: ExternalLinksProps;
    articles: ExternalLinksProps;
    awards: ExternalLinksProps;
    posts: ExternalLinksProps;
  };
}

const ProjectPage = ({ data }: ProjectPageProps) => {
  return (
    <Layout
      title={data.title}
      colorPrimary={data.colorPrimary}
      colorSecondary={data.colorSecondary}
    >
      <main className={clsx(data.colorPrimary, "flex flex-col")}>
        <TitlePage
          emoji={data.emoji}
          text={data.title}
          color={data.colorSecondary}
          doubleEmoji={true}
        />
        {data.imageLinkHref && data.imageLinkText ? (
          <a
            className="group relative w-full overflow-hidden"
            target="_blank"
            href={data.imageLinkHref}
          >
            <Image
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              src={data.image.url}
              alt={data.image.alt}
              width={1920}
              height={1080}
            />
            <div
              className={clsx(
                data.colorPrimary,
                "absolute bottom-4 left-[50%] flex -translate-x-2/4 items-center gap-1.5 rounded-full border-2 border-solid border-current px-2 py-1.5 transition-transform group-hover:scale-125 sm:bottom-8 sm:gap-2 sm:px-3 sm:py-2 xl:bottom-16",
              )}
            >
              <span className="text-label sm:text-body">
                {data.imageLinkText}
              </span>
              <div className="w-3 sm:w-4">
                <svg
                  width="100%"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3376 13.3141H3.00423C2.57645 13.3141 2.22645 12.9641 2.22645 12.5363V3.20296C2.22645 2.77518 2.57645 2.42518 3.00423 2.42518H6.89312C7.3209 2.42518 7.6709 2.07518 7.6709 1.64741C7.6709 1.21963 7.3209 0.869629 6.89312 0.869629H2.22645C1.36312 0.869629 0.670898 1.56963 0.670898 2.42518V13.3141C0.670898 14.1696 1.3709 14.8696 2.22645 14.8696H13.1153C13.9709 14.8696 14.6709 14.1696 14.6709 13.3141V8.64741C14.6709 8.21963 14.3209 7.86963 13.8931 7.86963C13.4653 7.86963 13.1153 8.21963 13.1153 8.64741V12.5363C13.1153 12.9641 12.7653 13.3141 12.3376 13.3141ZM9.22645 1.64741C9.22645 2.07518 9.57645 2.42518 10.0042 2.42518H12.0187L4.91757 9.5263C4.61423 9.82963 4.61423 10.3196 4.91757 10.623C5.2209 10.9263 5.7109 10.9263 6.01423 10.623L13.1153 3.52185V5.5363C13.1153 5.96407 13.4653 6.31407 13.8931 6.31407C14.3209 6.31407 14.6709 5.96407 14.6709 5.5363V1.64741C14.6709 1.21963 14.3209 0.869629 13.8931 0.869629H10.0042C9.57645 0.869629 9.22645 1.21963 9.22645 1.64741Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </a>
        ) : (
          <Image
            className="h-full w-full object-cover"
            src={data.image.url}
            alt={data.image.alt}
            width={1920}
            height={1080}
          />
        )}
        <SkillBadgeList
          size="big"
          customClass={`justify-center p-8 sm:p-16 xl:px-12 xl:py-15 ${data.colorSecondary}`}
          color={data.colorSkillBadge}
          skillBadges={data.skillBadges}
        />
        <section className="home-max-w mx-custom flex flex-col self-center pb-8 xl:pb-20">
          <div className="my-8 xl:my-20">
            <h2 className="text-h2">
              My role {data.role.emoji} {data.role.text}
            </h2>
            <p className="text-h4">
              {data.workExperience ? (
                <>
                  Made with {data.workExperience.emoji}{" "}
                  <a
                    href={data.workExperience.href}
                    className="text-link"
                    target="_blank"
                  >
                    {data.workExperience.title}
                  </a>{" "}
                </>
              ) : (
                "🔥 Personal project 🔥"
              )}
              {data.client && data.client.text ? (
                <>
                  for {data.client.emoji}{" "}
                  <a
                    className="text-link"
                    href={data.client.href}
                    target="_blank"
                  >
                    {data.client.text}
                  </a>
                </>
              ) : (
                ""
              )}
              {` ${data.dateStart}`}{" "}
              {data.dateStart !== data.dateEnd ? `- ${data.dateEnd}` : ""}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6  xl:grid-cols-2">
            <div>
              <ProjectBlockBase color={data.colorSecondary}>
                <h3>📖 Overview</h3>
                <PortableText value={data.text} />
              </ProjectBlockBase>
            </div>
            <div className="flex flex-col gap-6">
              {data.projectLinks && (
                <ProjectBlockLinkList
                  color={data.colorSecondary}
                  title={`🔗 Project link${data.projectLinks.length > 1 ? "s" : ""}:`}
                  links={data.projectLinks}
                />
              )}
              {data.awards && (
                <ProjectBlockLinkList
                  color={data.colorSecondary}
                  title={`🏆 Award${data.awards.length > 1 ? "s" : ""}:`}
                  links={data.awards}
                />
              )}
              {data.articles && (
                <ProjectBlockLinkList
                  color={data.colorSecondary}
                  title={`📰 Article${data.articles.length > 1 ? "s" : ""}:`}
                  links={data.articles}
                />
              )}
              {data.posts && (
                <ProjectBlockLinkList
                  color={data.colorSecondary}
                  title={`🖼️ Online post${data.posts.length > 1 ? "s" : ""}:`}
                  links={data.posts}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectPage;
