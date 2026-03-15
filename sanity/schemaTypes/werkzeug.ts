import { defineField, defineType } from "sanity";

export const werkzeug = defineType({
  name: "werkzeug",
  title: "Werkzeug",
  type: "document",
  fields: [
    // 1
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name ist Pflichtfeld"),
    }),
    // 2
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required().error("Slug ist Pflichtfeld"),
    }),
    // 3
    defineField({
      name: "kurzbeschreibung",
      title: "Kurzbeschreibung",
      type: "string",
      description: "Max. 160 Zeichen — erscheint in Karten und Vorschauen",
      validation: (Rule) => Rule.max(160),
    }),
    // 4
    defineField({
      name: "highlight",
      title: "Highlight",
      type: "boolean",
      description: "Als empfohlenes Tool hervorheben",
      initialValue: false,
    }),
    // 5
    defineField({
      name: "bewertung",
      title: "Gesamtbewertung (1-5 Sterne)",
      type: "number",
      description: "1 bis 5",
      validation: (Rule) => Rule.min(1).max(5).integer(),
    }),
    // 6
    defineField({
      name: "beschreibung",
      title: "Beschreibung",
      type: "text",
      rows: 5,
    }),
    // 7
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    // 8
    defineField({
      name: "screenshot",
      title: "Screenshot",
      type: "image",
      options: { hotspot: true },
    }),
    // 9
    defineField({
      name: "kategorie",
      title: "Kategorie",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Texte & Schreiben", value: "Texte & Schreiben" },
          { title: "Recherche & Analyse", value: "Recherche & Analyse" },
          { title: "Planung & Vorbereitung", value: "Planung & Vorbereitung" },
          { title: "Bilder & Grafiken", value: "Bilder & Grafiken" },
          { title: "Präsentationen", value: "Präsentationen" },
          { title: "Video & Audio", value: "Video & Audio" },
          { title: "Fortbildung & Wissen", value: "Fortbildung & Wissen" },
        ],
        layout: "grid",
      },
    }),
    // 10
    defineField({
      name: "vorteile",
      title: "Vorteile",
      type: "array",
      of: [{ type: "string" }],
      description: "Jeweils einen Vorteil pro Zeile",
    }),
    // 11
    defineField({
      name: "nachteile",
      title: "Nachteile",
      type: "array",
      of: [{ type: "string" }],
    }),
    // 12
    defineField({
      name: "didaktischer_mehrwert",
      title: "Didaktischer Mehrwert",
      type: "text",
      rows: 4,
    }),
    // 13
    defineField({
      name: "aufwand",
      title: "Aufwand",
      type: "text",
      description: "Wie viel Einarbeitungszeit ist nötig?",
      rows: 2,
    }),
    // 14
    defineField({
      name: "preismodell",
      title: "Preismodell",
      type: "string",
      options: {
        list: [
          { title: "Kostenlos", value: "Kostenlos" },
          { title: "Freemium", value: "Freemium" },
          { title: "Kostenpflichtig", value: "Kostenpflichtig" },
        ],
        layout: "radio",
      },
    }),
    // 15
    defineField({
      name: "preis_detail",
      title: "Preis Details",
      type: "string",
      description: "z. B. ab 12 €/Monat oder kostenlos bis 100 Anfragen",
    }),
    // 16
    defineField({
      name: "bildungslizenz",
      title: "Bildungslizenz verfügbar",
      type: "boolean",
      initialValue: false,
    }),
    // 17
    defineField({
      name: "bildungslizenz_info",
      title: "Bildungslizenz Info",
      type: "text",
      rows: 2,
      hidden: ({ document }) => !document?.bildungslizenz,
    }),
    // 18
    defineField({
      name: "dsgvo",
      title: "DSGVO-Status",
      type: "string",
      options: {
        list: [
          { title: "Grün (konform)", value: "grün" },
          { title: "Gelb (eingeschränkt)", value: "gelb" },
          { title: "Rot (kritisch)", value: "rot" },
        ],
        layout: "radio",
      },
    }),
    // 19
    defineField({
      name: "dsgvo_hinweis",
      title: "DSGVO Hinweis",
      type: "text",
      rows: 3,
    }),
    // 20
    defineField({
      name: "anbieter",
      title: "Anbieter",
      type: "string",
    }),
    // 21
    defineField({
      name: "serverstandort",
      title: "Serverstandort",
      type: "string",
      options: {
        list: [
          { title: "EU", value: "EU" },
          { title: "USA", value: "USA" },
          { title: "Self-Hosting", value: "Self-Hosting" },
          { title: "Unklar", value: "Unklar" },
        ],
        layout: "radio",
      },
    }),
    // 22
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    // 23
    defineField({
      name: "affiliate_link",
      title: "Affiliate-Link",
      type: "url",
      description: "Falls vorhanden — wird statt der normalen Website verwendet",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "preismodell",
      media: "logo",
    },
  },
});
