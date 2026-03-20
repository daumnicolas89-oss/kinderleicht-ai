"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Kostet die Nutzung etwas?",
    a: "Nein. kinderleicht.ai ist kostenlos nutzbar. Alle Apps, Tools und Downloads stehen dir ohne Registrierung zur Verfügung.",
  },
  {
    q: "Sind die KI-Tools datenschutzkonform?",
    a: (
      <>
        Wir weisen bei jedem Tool transparent auf den Anbieter und dessen Datenschutzbestimmungen hin. Für den Einsatz in Einrichtungen empfehlen wir, keine personenbezogenen Daten von Kindern oder Eltern einzugeben. Mehr dazu in unserer{" "}
        <Link href="/datenschutz" className="font-semibold underline" style={{ color: "#2596be" }}>Datenschutzerklärung</Link>.
      </>
    ),
  },
  {
    q: "Brauche ich KI-Vorkenntnisse?",
    a: (
      <>
        Nein. kinderleicht.ai richtet sich ausdrücklich auch an Pädagogen ohne Vorkenntnisse. Alle Tools und Apps sind so aufbereitet, dass du sofort loslegen kannst. Falls du einen Begriff nicht kennst, hilft dir unser{" "}
        <Link href="/ki-abc" className="font-semibold underline" style={{ color: "#2596be" }}>KI-ABC</Link> mit über 330 einfach erklärten Begriffen.
      </>
    ),
  },
  {
    q: "Muss ich etwas installieren?",
    a: "Nein. Alle unsere Apps laufen direkt im Browser, ohne Installation oder App-Download. Auch auf Smartphone und Tablet.",
  },
  {
    q: "Was ist der Unterschied zwischen Apps und Tools?",
    a: "Unsere Apps sind selbst entwickelte Web-Anwendungen, die du direkt im Browser nutzen kannst. KI-Tools sind externe Anbieter wie Canva, Fobizz oder Edpuzzle, die wir für den pädagogischen Einsatz aufbereitet haben.",
  },
  {
    q: "Warum wird auf kinderleicht.ai nicht gegendert?",
    a: "Wir verwenden auf der gesamten Plattform eine möglichst einfache und klare Sprache. Dabei verzichten wir bewusst auf Genderzeichen, damit Texte gut lesbar bleiben. Selbstverständlich sind immer alle Geschlechter gemeint und alle Menschen willkommen.",
  },
];

function AccordionItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = q.replace(/\s+/g, "-").toLowerCase().slice(0, 40);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-3 sm:gap-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`home-faq-${id}`}
      >
        <span className="text-base font-semibold text-gray-900">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ backgroundColor: open ? "#2596be" : "#F5F5F7", color: open ? "#fff" : "#9ca3af" }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />}
          </svg>
        </span>
      </button>
      <div
        id={`home-faq-${id}`}
        role="region"
        className="overflow-hidden transition-all duration-200"
        style={{ maxHeight: open ? 500 : 0, opacity: open ? 1 : 0 }}
      >
        <div className="text-base text-gray-500 leading-relaxed pb-5">{a}</div>
      </div>
    </div>
  );
}

export default function HomeFAQ() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white px-6">
      {faqs.map((faq) => (
        <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  );
}
