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

interface RoleDataProject {
  text: string;
}

interface WorkExperienceDataProject {
  title: string;
}

export interface ProjectData {
  _id: string;
  emoji: string;
  title: string;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  role: RoleDataProject;
  dateStart: Date;
  dateEnd: Date;
  workExperience: WorkExperienceDataProject;
  skillBadges: SkillBadgeData[];
  colorPrimary: string;
  colorSecondary: string;
  colorSkillBadge: string;
}
