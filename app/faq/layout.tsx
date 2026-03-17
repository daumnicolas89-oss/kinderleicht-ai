import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ) — kinderleicht.ai",
  description: "Antworten auf häufige Fragen zu kinderleicht.ai: Kosten, Datenschutz, Tools, Apps und Downloads für Pädagogen.",
  alternates: { canonical: "https://kinderleicht.ai/faq" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
