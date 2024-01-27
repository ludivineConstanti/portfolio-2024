import { defineField, defineType } from "sanity";

export default defineType({
  name: "client",
  title: "Client",
  type: "document",
  fields: [
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
