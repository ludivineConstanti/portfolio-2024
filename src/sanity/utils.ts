import { createClient } from "next-sanity";
import { sanityProjectId, sanityDataset } from "../../sanity.config";

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  useCdn: false,
});

export const queryArticle = `
  _id,
  category->{_type,text,title},
  emoji,
  text,
  href,
  skillBadges[]->{...},
  date,
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
  skillBadges[]->{...},
  colorPrimary,
  colorSecondary,
  colorSkillBadge,
  image{
    'url': asset->url,
    alt
  },
`;
