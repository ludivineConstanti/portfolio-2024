import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";

export const sanityProjectId = "d48ez9hc";
export const sanityDataset = "production";
export const sanityApiVersion = "2024-01-19";

export default defineConfig({
  name: "default",
  title: "portfolio-2024-sanity-backend",
  projectId: sanityProjectId,
  dataset: sanityDataset,
  // apiVersion: sanityApiVersion,
  // the path used by sanity to query the data
  basePath: "/admin",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
