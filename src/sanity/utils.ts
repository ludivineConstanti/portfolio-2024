import { createClient } from "next-sanity";
import {
  sanityProjectId,
  sanityDataset,
  sanityApiVersion,
} from "../../sanity.config";

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: false,
});

export const querySkillBadges = `
  skillBadges[]->{_id,emoji,text},
`;

export const queryProjectLink = `
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
