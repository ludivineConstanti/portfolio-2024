import { defineField, defineType } from "sanity";

export default defineType({
  name: "socialMedia",
  title: "Social media",
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
    defineField({
      name: "icon",
      title: "Icon (svg)",
      type: "file",
      options: {
        accept: "image/svg+xml",
      },
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
  },
});
