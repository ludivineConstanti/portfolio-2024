export enum InternalLinksIds {
  home = "home",
  allProjects = "allProjects",
  allArticles = "allArticles",
  awards = "awards",
  sitemap = "sitemap",
  workExperiences = "workExperiences",
  imprint = "imprint",
}

export const internalLinks: Record<
  InternalLinksIds,
  { emoji: string; text: string; href: string; showInMenu?: boolean }
> = {
  [InternalLinksIds.home]: {
    emoji: "🚀",
    text: "Home",
    href: "/",
    showInMenu: true,
  },
  [InternalLinksIds.allProjects]: {
    emoji: "⚗️",
    text: "All Projects",
    href: "/all-projects",
    showInMenu: true,
  },
  [InternalLinksIds.allArticles]: {
    emoji: "📰",
    text: "All Articles",
    href: "/all-articles",
    showInMenu: true,
  },
  [InternalLinksIds.workExperiences]: {
    emoji: "🗃️",
    text: "All Work experiences",
    href: "/all-work-experiences",
  },
  [InternalLinksIds.awards]: {
    emoji: "✨",
    text: "All Awards",
    href: "/all-awards",
  },
  [InternalLinksIds.sitemap]: {
    emoji: "🗺️",
    text: "Sitemap",
    href: "/sitemap",
  },
  [InternalLinksIds.imprint]: {
    emoji: "📑",
    text: "Imprint",
    href: "/imprint",
  },
};

export enum SocialMediaIds {
  email = "email",
  gitHub = "gitHub",
  linkedin = "linkedin",
  hashnode = "hashnode",
  medium = "medium",
  instagram = "instagram",
  behance = "behance",
}

export const socialMedias = {
  [SocialMediaIds.email]: {
    text: "Email: ludivine-constanti@outlook.com",
    href: "mailto:ludivine-constanti@outlook.com",
    id: SocialMediaIds.email,
  },
  [SocialMediaIds.gitHub]: {
    text: "GitHub",
    href: "https://github.com/ludivineConstanti",
    id: SocialMediaIds.gitHub,
  },
  [SocialMediaIds.linkedin]: {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/ludivine-constanti/",
    id: SocialMediaIds.linkedin,
  },
  [SocialMediaIds.hashnode]: {
    text: "Hashnode",
    href: "https://ludivine-constanti.hashnode.dev/",
    id: SocialMediaIds.hashnode,
  },
  [SocialMediaIds.medium]: {
    text: "Medium",
    href: "https://medium.com/@ludivine.constanti",
    id: SocialMediaIds.medium,
  },
  [SocialMediaIds.behance]: {
    text: "Behance",
    href: "https://www.behance.net/Lu-di",
    id: SocialMediaIds.behance,
  },
  [SocialMediaIds.instagram]: {
    text: "Instagram",
    href: "https://www.instagram.com/ludivine_constanti/",
    id: SocialMediaIds.instagram,
  },
};
