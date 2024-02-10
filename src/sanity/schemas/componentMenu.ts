import { defineField, defineType } from "sanity";

export default defineType({
  name: "componentMenu",
  title: "Component Menu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "internalLinks",
      title: "Internal links",
      type: "array",
      of: [
        {
          name: "internalLink",
          title: "Internal Links",
          type: "reference",
          to: [{ type: "internalLink" }],
        },
      ],
    }),
    defineField({
      name: "socialMedias",
      title: "Social Medias",
      type: "array",
      of: [
        {
          name: "socialMedia",
          title: "Social Media",
          type: "reference",
          to: [{ type: "socialMedia" }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
