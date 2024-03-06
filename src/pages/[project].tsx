import type { InferGetStaticPropsType } from "next";
import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import { TypedObject } from "sanity";
import {
  Layout,
  TitlePage,
  SkillBadgeList,
  ProjectBlockBase,
  ProjectSectionTitle,
  ProjectNextAndPrevProject,
  ProjectBlocksAllLinks,
  ProjectImage,
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
  const projectsData =
    await client.fetch(groq`*[_type == "project"] | order(dateEnd desc){
    emoji,
    title,
    slug,
    dateEnd  
    }`);

  const projects = projectsData.sort(
    (a: { dateEnd: null | string }, b: { dateEnd: null | string }) => {
      if (a.dateEnd === null && b.dateEnd) return -1;
      if (a.dateEnd && b.dateEnd === null) return 1;
      return 0;
    },
  );

  const currentProjectIndex = projects.indexOf(
    projects.find(
      (p: { slug: { current: string } }) => p.slug.current === project,
    ),
  );
  const previousProject = projects[currentProjectIndex - 1];
  const nextProject = projects[currentProjectIndex + 1];

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
      _id: "websiteHref",
      emoji: "💻",
      href: data[0].href,
      text: "Website",
    });
    imageLinkHref = data[0].href;
    imageLinkText = "Go to Website";
  }
  if (data[0].hrefGitHub) {
    projectLinks.push({
      _id: "hrefGitHub",
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
      _id: "hrefStudyCase",
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
        previousProject: previousProject ? previousProject : null,
        nextProject: nextProject ? nextProject : null,
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
    previousProject: {
      emoji: string;
      title: string;
      slug: { current: string };
    };
    nextProject: { emoji: string; title: string; slug: { current: string } };
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
        <ProjectImage
          imageLinkHref={data.imageLinkHref}
          imageLinkText={data.imageLinkText}
          image={data.image}
          colorPrimary={data.colorPrimary}
        />
        <SkillBadgeList
          size="big"
          customClass={`justify-center p-8 sm:p-16 xl:px-12 xl:py-15 ${data.colorSecondary}`}
          color={data.colorSkillBadge}
          skillBadges={data.skillBadges}
        />
        <section className="max-w-project xl:max-w-home-xl mx-custom flex flex-col self-center pb-8 xl:pb-20">
          <ProjectSectionTitle
            role={data.role}
            workExperience={data.workExperience}
            client={data.client}
            dateStart={data.dateStart}
            dateEnd={data.dateEnd}
          />
          <div className="grid grid-cols-1 gap-6  xl:grid-cols-2">
            <div>
              <ProjectBlockBase
                color={data.colorSecondary}
                customClass="[&>ul>li]:text-body [&>ul]:list-disc [&>ul>li:not(:last-child)]:mb-2 [&>ul:not(:last-child)]:mb-6"
              >
                <h3>📖 Overview</h3>
                <PortableText value={data.text} />
              </ProjectBlockBase>
            </div>
            <ProjectBlocksAllLinks
              projectLinks={data.projectLinks}
              awards={data.awards}
              articles={data.articles}
              posts={data.posts}
              colorSecondary={data.colorSecondary}
            />
          </div>
        </section>
        <ProjectNextAndPrevProject
          previousProject={data.previousProject}
          nextProject={data.nextProject}
          colorSecondary={data.colorSecondary}
        />
      </main>
    </Layout>
  );
};

export default ProjectPage;
