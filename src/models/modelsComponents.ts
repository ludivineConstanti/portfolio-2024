import { InternalLinksIds } from ".";

export type BottomNavigationComponentProps = {
  emoji?: string;
  href: string;
  text: string;
}[];

export interface MenuComponentProps {
  colorPrimary: string;
  colorSecondary: string;
  pageId?: InternalLinksIds;
  bottomNavigationLinks?: BottomNavigationComponentProps;
}
