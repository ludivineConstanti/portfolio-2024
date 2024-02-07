import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
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
      name: "slug",
      title: "Slug",
      type: "slug",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "reference",
      to: [{ type: "role" }],
    }),
    defineField({
      name: "image",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "alt",
          type: "text",
        },
      ],
    }),
    defineField({
      name: "href",
      title: "Live version of the website",
      type: "string",
    }),
    defineField({
      name: "hrefGitHub",
      title: "Link to the GitHub repository",
      type: "string",
    }),
    defineField({
      name: "hrefStudyCase",
      title: "Link to an explanation of the project",
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
      name: "workExperience",
      title: "Workplace",
      type: "reference",
      to: [{ type: "workExperience" }],
    }),
    defineField({
      name: "client",
      title: "client",
      type: "reference",
      to: [{ type: "client" }, { type: "workExperience" }],
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
    defineField({
      name: "colorBackground",
      title: "Color background",
      type: "string",
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
      name: "colorSkillBadge",
      title: "Color skill badge",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
