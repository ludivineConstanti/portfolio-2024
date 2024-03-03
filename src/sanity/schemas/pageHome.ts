import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageHome",
  title: "Page Home",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "workExperiences",
      title: "Work Experiences",
      type: "array",
      of: [
        {
          name: "workExperience",
          title: "Work Experience",
          type: "reference",
          to: [{ type: "workExperience" }],
        },
      ],
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          name: "project",
          title: "Project",
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    }),
    defineField({
      name: "articles",
      title: "Articles",
      type: "array",
      of: [
        {
          name: "article",
          title: "Article",
          type: "reference",
          to: [{ type: "article" }],
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
