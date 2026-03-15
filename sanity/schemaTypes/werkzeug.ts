import { defineField, defineType } from "sanity";

export const werkzeug = defineType({
  name: "werkzeug",
  title: "Werkzeug",
  type: "document",
  fields: [
    // ── Grunddaten ───────────────────────────────────────────
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name ist Pflichtfeld"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required().error("Slug ist Pflichtfeld"),
    }),
    defineField({
      name: "kurzbeschreibung",
      title: "Kurzbeschreibung",
      type: "string",
      description: "Max. 160 Zeichen — erscheint in Karten und Vorschauen",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "beschreibung",
      title: "Beschreibung",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "highlight",
      title: "Highlight",
      type: "boolean",
      description: "Als empfohlenes Tool hervorheben",
      initialValue: false,
    }),

    // ── Medien ───────────────────────────────────────────────
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "screenshot",
      title: "Screenshot",
      type: "image",
      options: { hotspot: true },
    }),

    // ── Kategorisierung ──────────────────────────────────────
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
    defineField({
      name: "zielgruppe",
      title: "Zielgruppe",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Kita & Krippe", value: "Kita & Krippe" },
          { title: "Grundschule", value: "Grundschule" },
          { title: "Weiterführende Schule", value: "Weiterführende Schule" },
          { title: "Nachmittagsbetreuung", value: "Nachmittagsbetreuung" },
          { title: "Hochschule & Uni", value: "Hochschule & Uni" },
          { title: "Leitung & Verwaltung", value: "Leitung & Verwaltung" },
        ],
        layout: "grid",
      },
    }),

    // ── Pädagogik ────────────────────────────────────────────
    defineField({
      name: "vorteile",
      title: "Vorteile",
      type: "array",
      of: [{ type: "string" }],
      description: "Jeweils einen Vorteil pro Zeile",
    }),
    defineField({
      name: "nachteile",
      title: "Nachteile",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "didaktischer_mehrwert",
      title: "Didaktischer Mehrwert",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "aufwand",
      title: "Aufwand",
      type: "text",
      description: "Wie viel Einarbeitungszeit ist nötig?",
      rows: 2,
    }),

    // ── Preis ────────────────────────────────────────────────
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
    defineField({
      name: "preis_detail",
      title: "Preis Details",
      type: "string",
      description: "z. B. ab 12 €/Monat oder kostenlos bis 100 Anfragen",
    }),
    defineField({
      name: "bildungslizenz",
      title: "Bildungslizenz verfügbar",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "bildungslizenz_info",
      title: "Bildungslizenz Info",
      type: "text",
      rows: 2,
      hidden: ({ document }) => !document?.bildungslizenz,
    }),

    // ── Datenschutz ──────────────────────────────────────────
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
    defineField({
      name: "dsgvo_hinweis",
      title: "DSGVO Hinweis",
      type: "text",
      rows: 3,
    }),

    // ── Anbieter ─────────────────────────────────────────────
    defineField({
      name: "anbieter",
      title: "Anbieter",
      type: "string",
    }),
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
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),

    // ── Bewertung ────────────────────────────────────────────
    defineField({
      name: "bewertung",
      title: "Gesamtbewertung (1-5 Sterne)",
      type: "number",
      description: "1 bis 5",
      validation: (Rule) => Rule.min(1).max(5).integer(),
    }),

    // ── Monetarisierung ──────────────────────────────────────
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
