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
