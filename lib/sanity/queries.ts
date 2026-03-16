import { groq } from "next-sanity";

export const allToolsQuery = groq`
  *[_type == "werkzeug"] | order(highlight desc, name asc) {
    name,
    "slug": slug.current,
    kurzbeschreibung,
    highlight,
    bewertung,
    logo,
    kategorie,
    preismodell,
    dsgvo
  }
`;

export const toolBySlugQuery = groq`
  *[_type == "werkzeug" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    kurzbeschreibung,
    beschreibung,
    highlight,
    bewertung,
    logo,
    screenshot,
    kategorie,
    vorteile,
    nachteile,
    didaktischer_mehrwert,
    aufwand,
    preismodell,
    preis_detail,
    bildungslizenz,
    bildungslizenz_info,
    dsgvo,
    dsgvo_hinweis,
    anbieter,
    serverstandort,
    website,
    affiliate_link
  }
`;

export const allToolSlugsQuery = groq`
  *[_type == "werkzeug"] { "slug": slug.current }
`;

export const featuredToolsQuery = groq`
  *[_type == "werkzeug" && highlight == true && bewertung == 5 && dsgvo == "grün"] | order(name asc) [0...3] {
    name,
    "slug": slug.current,
    kurzbeschreibung,
    logo,
    kategorie,
    preismodell,
    dsgvo,
    bewertung
  }
`;

export const allDownloadsQuery = groq`
  *[_type == "download"] | order(erscheinungsdatum desc) {
    titel,
    "slug": slug.current,
    kurzbeschreibung,
    typ,
    kategorie,
    vorschaubild,
    "dateiUrl": datei.asset->url,
    externer_link,
    kostenlos,
    erscheinungsdatum
  }
`;

export const downloadBySlugQuery = groq`
  *[_type == "download" && slug.current == $slug][0] {
    titel,
    "slug": slug.current,
    kurzbeschreibung,
    beschreibung,
    typ,
    kategorie,
    vorschaubild,
    "dateiUrl": datei.asset->url,
    externer_link,
    kostenlos,
    erscheinungsdatum
  }
`;

export const allDownloadSlugsQuery = groq`
  *[_type == "download"] { "slug": slug.current }
`;

export const similarDownloadsQuery = groq`
  *[_type == "download" && slug.current != $slug && kategorie == $kategorie]
  | order(erscheinungsdatum desc) [0...3] {
    titel,
    "slug": slug.current,
    kurzbeschreibung,
    typ,
    kategorie,
    vorschaubild,
    "dateiUrl": datei.asset->url,
    kostenlos
  }
`;

export const similarToolsQuery = groq`
  *[_type == "werkzeug" && slug.current != $slug && count(kategorie[@ in $kategorien]) > 0]
  | order(highlight desc, name asc) [0...3] {
    name,
    "slug": slug.current,
    kurzbeschreibung,
    highlight,
    bewertung,
    logo,
    kategorie,
    preismodell,
    dsgvo
  }
`;
