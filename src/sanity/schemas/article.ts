import { defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "articleCategory" }],
    }),
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
    defineField({
      name: "skillBadges",
      title: "Skill Badges",
      type: "array",
      of: [
        {
          name: "skillBadge",
          title: "Skill Badge",
          type: "reference",
          to: [{ type: "skillBadge" }],
        },
      ],
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
  },
});
