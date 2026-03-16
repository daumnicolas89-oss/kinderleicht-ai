import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Häufige Fragen — kinderleicht.ai",
  description: "Antworten auf häufig gestellte Fragen zu kinderleicht.ai, unseren Tools und Apps für den Bildungsalltag.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
