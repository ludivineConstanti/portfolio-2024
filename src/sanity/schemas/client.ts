import { defineField, defineType } from "sanity";

export default defineType({
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "id",
      type: "string",
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
      name: "role",
      title: "Role",
      type: "reference",
      to: [{ type: "role" }],
    }),
    defineField({
      name: "developer",
      title: "Worked for this client as a developer",
      type: "boolean",
    }),
    defineField({
      name: "workExperience",
      title: "Work Experience",
      type: "reference",
      to: [{ type: "workExperience" }],
    }),
    defineField({
      name: "colorPrimary",
      title: "Color primary",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
  },
});
