import { defineType, defineField } from "sanity";

export default defineType({
  name: "download",
  title: "Download",
  type: "document",
  fields: [
    defineField({
      name: "titel",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titel", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kurzbeschreibung",
      title: "Kurzbeschreibung",
      type: "string",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "beschreibung",
      title: "Beschreibung",
      type: "text",
    }),
    defineField({
      name: "typ",
      title: "Typ",
      type: "string",
      options: {
        list: [
          { title: "PDF", value: "PDF" },
          { title: "Word-Vorlage", value: "Word-Vorlage" },
          { title: "Excel-Tabelle", value: "Excel-Tabelle" },
          { title: "Link", value: "Link" },
          { title: "Video", value: "Video" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "kategorie",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "DSGVO & Datenschutz", value: "DSGVO & Datenschutz" },
          { title: "Prompts & KI-Anleitungen", value: "Prompts & KI-Anleitungen" },
          { title: "Vorlagen & Checklisten", value: "Vorlagen & Checklisten" },
          { title: "Elternkommunikation", value: "Elternkommunikation" },
          { title: "Planung & Organisation", value: "Planung & Organisation" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "vorschaubild",
      title: "Vorschaubild",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "datei",
      title: "Datei",
      type: "file",
    }),
    defineField({
      name: "externer_link",
      title: "Externer Link",
      type: "url",
    }),
    defineField({
      name: "kostenlos",
      title: "Kostenlos",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "erscheinungsdatum",
      title: "Erscheinungsdatum",
      type: "date",
    }),
  ],
  preview: {
    select: {
      title: "titel",
      subtitle: "kategorie",
      media: "vorschaubild",
    },
  },
});
