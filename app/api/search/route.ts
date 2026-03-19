import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const searchQuery = groq`{
  "tools": *[_type == "werkzeug" && (name match $q || kurzbeschreibung match $q)] | order(highlight desc, name asc) [0...5] {
    name,
    "slug": slug.current,
    kurzbeschreibung
  },
  "prompts": *[_type == "prompt" && (titel match $q || beschreibung match $q || promptText match $q)] | order(titel asc) [0...5] {
    titel,
    "slug": slug.current,
    beschreibung,
    kategorie
  },
  "lexikon": *[_type == "lexikon" && (begriff match $q || kurzdefinition match $q)] | order(begriff asc) [0...5] {
    begriff,
    "slug": slug.current,
    kurzdefinition
  }
}`;

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") ?? "";
  if (q.trim().length < 2) {
    return NextResponse.json({ results: [] });
  }

  const wildcard = `${q.trim()}*`;
  const data = await client.fetch(searchQuery, { q: wildcard });

  type SearchResult = {
    title: string;
    href: string;
    type: string;
    typeLabel: string;
    description?: string;
  };

  const results: SearchResult[] = [];

  for (const t of data.tools ?? []) {
    results.push({
      title: t.name,
      href: `/tools/${t.slug}`,
      type: "tool",
      typeLabel: "Tool",
      description: t.kurzbeschreibung,
    });
  }

  for (const p of data.prompts ?? []) {
    results.push({
      title: p.titel,
      href: `/prompts`,
      type: "prompt",
      typeLabel: "Vorlage",
      description: p.beschreibung || p.kategorie,
    });
  }

  for (const l of data.lexikon ?? []) {
    results.push({
      title: l.begriff,
      href: `/ki-abc/${l.slug}`,
      type: "lexikon",
      typeLabel: "KI-ABC",
      description: l.kurzdefinition,
    });
  }

  return NextResponse.json({ results });
}
