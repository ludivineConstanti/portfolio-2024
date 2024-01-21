import { defineField, defineType } from "sanity";

export default defineType({
  name: "skillBadge",
  title: "Skill badge",
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
