import type { TypedObject } from "sanity";

export * from "./constants";
export * from "./constantsMenu";
export * from "./constantsClients";
export * from "./modelsComponents";

export type SkillBadgeSizeOptions = "small" | "medium" | "big";

interface SVGData {
  asset: { url: string };
}

export interface SkillBadgeData {
  _id: string;
  emoji: string;
  text: string;
  techStack: true | null;
  highlighted: true | null;
}

export interface VisibleSkillBadgeData {
  _id: string;
  emoji?: string;
  text?: string;
}

interface ArticleCategoryData {
  _id: string;
  _type: "articleCategory";
  emoji: string;
  text: string;
}

interface RoleDataProject {
  text: string;
}

export interface SlugProps {
  _type: "slug";
  current: string;
}

export interface WorkExperienceData {
  _id: string;
  visible?: boolean;
  href: string;
  title: string;
  role: string;
  location: string;
  projects: ProjectTeaserData[];
  text: TypedObject | TypedObject[];
  dateStart: string;
  dateEnd?: string;
  skillBadges: SkillBadgeData[];
  colorPrimary: string;
  colorSecondary: string;
  colorLogo?: string;
  colorSkillBadge?: string;
  logo: SVGData;
}

export interface ProjectData {
  visible?: boolean;
  shownInProjectPage?: boolean;
  _id: string;
  _type: "project";
  emoji: string;
  title: string;
  slug: SlugProps;
  image: {
    url: string;
    alt: string;
  };
  role: RoleDataProject;
  dateStart: Date;
  dateEnd: Date;
  workExperience: { title: string };
  skillBadges: SkillBadgeData[];
  colorPrimary: string;
  colorSecondary: string;
  colorSkillBadge: string;
}

export interface ProjectTeaserData {
  visible?: boolean;
  _id: string;
  emoji: string;
  title: string;
  dateEnd: string;
  workExperience: { _ref: string };
  slug: SlugProps;
  image: {
    url: string;
    alt: string;
  };
}

export interface ArticleData {
  _id: string;
  emoji: string;
  text: string;
  href: string;
  date: string;
  category: ArticleCategoryData | ProjectData;
  skillBadges: SkillBadgeData[];
}

export type ArticleProcessedData = Omit<ArticleData, "category"> & {
  category: string;
};

export type SelectedSkillsFilterProps = {
  value: string;
  label: string;
  emoji: string;
}[];
