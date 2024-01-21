import { createClient } from "next-sanity";
import {
  sanityProjectId,
  sanityDataset,
  sanityApiVersion,
} from "../../sanity.config";

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  // apiVersion: sanityApiVersion,
  useCdn: false,
});
