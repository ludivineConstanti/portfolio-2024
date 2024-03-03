import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "project",
      title: "Project",
      type: "reference",
      to: [{ type: "project" }],
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
      name: "highlightedPost",
      title: "Highlighted Post",
      type: "boolean",
    }),
    defineField({
      name: "instagramPost",
      title: "Instagram Post",
      type: "boolean",
    }),
    defineField({
      name: "youtubePost",
      title: "Youtube Post",
      type: "boolean",
    }),
    defineField({
      name: "linkedinPost",
      title: "Linkedin Post",
      type: "boolean",
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
  },
});
