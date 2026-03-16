import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — kinderleicht.ai",
  description: "Schreib uns bei Fragen, Feedback oder Anregungen zu kinderleicht.ai.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
