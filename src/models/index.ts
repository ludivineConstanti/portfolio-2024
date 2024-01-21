export interface SkillBadgeData {
  emoji: string;
  text: string;
}

export interface ArticleData {
  _id: string;
  emoji: string;
  text: string;
  href: string;
  skillBadges: SkillBadgeData[];
}
