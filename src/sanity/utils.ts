import { createClient } from "next-sanity";
import { sanityProjectId, sanityDataset } from "../../sanity.config";

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  useCdn: false,
});

export const querySkillBadges = `
  skillBadges[]->{...},
`;

export const queryArticle = `
  _id,
  category->{_type,text,title},
  emoji,
  text,
  href,
  date,
  ${querySkillBadges}
`;

export const queryProject = `
  _id,
  emoji,
  title,
  slug,
  role->{text},
  dateStart,
  dateEnd,
  workExperience->{title},
  colorPrimary,
  colorSecondary,
  colorSkillBadge,
  image{
    'url': asset->url,
    alt
  },
  ${querySkillBadges}
`;
