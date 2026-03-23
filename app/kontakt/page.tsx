import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import KontaktForm from "@/components/KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt — kinderleicht.ai",
  description: "Fragen, Feedback oder Kooperationsideen? Schreib uns direkt über das Kontaktformular. Wir melden uns in der Regel innerhalb von 1 bis 2 Werktagen.",
  alternates: { canonical: "https://kinderleicht.ai/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        label="Kontakt"
        title="Schreib uns."
        subtitle="Fragen, Feedback oder Kooperationsideen. Wir freuen uns von dir zu hören."
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-xl mx-auto">
          <KontaktForm />
        </div>
      </section>
    </>
  );
}
