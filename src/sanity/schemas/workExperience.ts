import { defineField, defineType } from "sanity";

export default defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "emoji",
      title: "Emoji",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo (svg)",
      type: "file",
      options: {
        accept: "image/svg+xml",
      },
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
      name: "colorPrimary",
      title: "Color primary",
      type: "string",
    }),
    defineField({
      name: "colorSecondary",
      title: "Color secondary",
      type: "string",
    }),
    defineField({
      name: "colorLogo",
      title: "Color logo",
      type: "string",
    }),
    defineField({
      name: "colorSkillBadge",
      title: "Color skill badge",
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
