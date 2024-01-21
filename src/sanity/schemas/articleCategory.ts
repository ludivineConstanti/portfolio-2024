import { defineField, defineType } from "sanity";

export default defineType({
  name: "articleCategory",
  title: "Article category",
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
  ],
  preview: {
    select: {
      title: "text",
    },
  },
});
