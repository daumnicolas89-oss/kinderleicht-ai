import { defineField, defineType } from "sanity";

export const prompt = defineType({
  name: "prompt",
  title: "Prompt",
  type: "document",
  fields: [
    defineField({
      name: "titel",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required().error("Titel ist Pflichtfeld"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titel", maxLength: 96 },
      validation: (Rule) => Rule.required().error("Slug ist Pflichtfeld"),
    }),
    defineField({
      name: "kategorie",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "Elternbriefe", value: "Elternbriefe" },
          { title: "Unterrichtsplanung", value: "Unterrichtsplanung" },
          { title: "Differenzierung", value: "Differenzierung" },
          { title: "Zeugnisse & Berichte", value: "Zeugnisse & Berichte" },
          { title: "Konzepte & Anträge", value: "Konzepte & Anträge" },
          { title: "Förderpläne", value: "Förderpläne" },
          { title: "Kita & Krippe", value: "Kita & Krippe" },
          { title: "GBS & Ganztag", value: "GBS & Ganztag" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "zielgruppe",
      title: "Zielgruppe",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Kita", value: "Kita" },
          { title: "Schule", value: "Schule" },
          { title: "GBS", value: "GBS" },
        ],
        layout: "grid",
      },
    }),
    defineField({
      name: "promptText",
      title: "Prompt-Text",
      type: "text",
      rows: 8,
      validation: (Rule) => Rule.required().error("Prompt-Text ist Pflichtfeld"),
    }),
    defineField({
      name: "beschreibung",
      title: "Beschreibung",
      type: "string",
      description: "Kurze Erklärung, wofür der Prompt gut ist",
    }),
    defineField({
      name: "kiTool",
      title: "KI-Tool",
      type: "string",
      description: "Für welches Tool ist der Prompt optimiert?",
      options: {
        list: [
          { title: "ChatGPT", value: "ChatGPT" },
          { title: "Claude", value: "Claude" },
          { title: "Alle KI-Tools", value: "Alle KI-Tools" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "highlight",
      title: "Highlight",
      type: "boolean",
      description: "Als besonders empfehlenswerten Prompt hervorheben",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "titel",
      subtitle: "kategorie",
    },
  },
});
