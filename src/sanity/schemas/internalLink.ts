import { defineField, defineType } from "sanity";

export default defineType({
  name: "internalLink",
  title: "Internal Link",
  type: "document",
  fields: [
    defineField({
      name: "emoji",
      title: "Emoji",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
    }),
    defineField({
      name: "href",
      title: "Href",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
  },
});
