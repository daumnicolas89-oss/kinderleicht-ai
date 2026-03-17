import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — kinderleicht.ai",
  description: "Kontaktiere das Team von kinderleicht.ai. Wir helfen bei Fragen zu KI-Tools, Apps und Materialien für den Bildungsalltag.",
  alternates: { canonical: "https://kinderleicht.ai/kontakt" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
