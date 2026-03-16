import { defineField, defineType } from "sanity";

export const lexikon = defineType({
  name: "lexikon",
  title: "Lexikon",
  type: "document",
  fields: [
    defineField({
      name: "begriff",
      title: "Begriff",
      type: "string",
      validation: (Rule) => Rule.required().error("Begriff ist Pflichtfeld"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "begriff", maxLength: 96 },
      validation: (Rule) => Rule.required().error("Slug ist Pflichtfeld"),
    }),
    defineField({
      name: "buchstabe",
      title: "Buchstabe",
      type: "string",
      description: "Wird automatisch aus dem ersten Buchstaben des Begriffs abgeleitet",
      readOnly: true,
    }),
    defineField({
      name: "kurzdefinition",
      title: "Kurzdefinition",
      type: "string",
      description: "Max. 160 Zeichen",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "definition",
      title: "Definition",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "beispiel",
      title: "Praxisbeispiel",
      type: "text",
      rows: 4,
      description: "Optionales Beispiel für den pädagogischen Alltag",
    }),
    defineField({
      name: "verwandte_begriffe",
      title: "Verwandte Begriffe",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "kategorie",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "KI & Technologie", value: "KI & Technologie" },
          { title: "Datenschutz & Recht", value: "Datenschutz & Recht" },
          { title: "Pädagogik & Didaktik", value: "Pädagogik & Didaktik" },
          { title: "Tools & Software", value: "Tools & Software" },
        ],
        layout: "radio",
      },
    }),
  ],
  preview: {
    select: { title: "begriff", subtitle: "kategorie" },
  },
});
