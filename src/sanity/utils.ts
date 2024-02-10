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
  skillBadges[]->{...},
`;

export const queryMenu = `
internalLinks[]->{_id,text,emoji,href},
socialMedias[]->{
  _id,
  text,
  icon {
    asset->{
    url
  }
  },
  href
  },
`;

export const queryArticleLink = `
  _id,
  category->{_type,text,title},
  emoji,
  text,
  href,
  date,
  ${querySkillBadges}
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
