import { defineField, defineType } from "sanity";

export default defineType({
  name: "awardCategory",
  title: "Award category",
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
