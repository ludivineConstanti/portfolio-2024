import { defineField, defineType } from "sanity";

export default defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "href",
      title: "Href",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "dateStart",
      title: "Date start",
      type: "date",
    }),
    defineField({
      name: "dateEnd",
      title: "Date end",
      type: "date",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
