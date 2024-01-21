export interface SkillBadgeData {
  emoji: string;
  text: string;
}

export interface ArticleData {
  emoji: string;
  text: string;
  href: string;
  skillBadges: SkillBadgeData[];
}
