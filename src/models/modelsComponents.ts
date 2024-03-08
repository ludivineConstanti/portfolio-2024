import { InternalLinksIds, ProjectData, ArticleData } from ".";

export type BottomNavigationComponentProps = {
  emoji?: string;
  href: string;
  text: string;
}[];

export type SearchBarComponentProps = { value: string; label: string }[];

export interface MenuComponentProps {
  colorPrimary: string;
  colorSecondary: string;
  pageId?: InternalLinksIds;
  bottomNavigationLinks?: BottomNavigationComponentProps;
  skillsFilter?: SearchBarComponentProps;
  projects?: ProjectData[];
  articles?: ArticleData[];
}
