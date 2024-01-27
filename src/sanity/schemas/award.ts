import { defineField, defineType } from "sanity";

export default defineType({
  name: "award",
  title: "Award",
  type: "document",
  fields: [
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
