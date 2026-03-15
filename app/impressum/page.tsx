import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Impressum — kinderleicht.ai",
  description: "Impressum und Angaben gemäß § 5 DDG.",
};

const dotGrid = {
  backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  opacity: 0.45,
} as React.CSSProperties;

export default function ImpressumPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0" style={dotGrid} />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.10) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#2596be" }}>
            Rechtliches
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto prose-sm">
          <div className="space-y-10 text-gray-600 text-[15px] leading-relaxed">

            {/* Angaben */}
            <div>
              <h2
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                Angaben gemäß § 5 DDG
              </h2>
              <p>
                Nicolas Daum / Kinderleicht.ai<br />
                Bendestorfer Str. 6<br />
                21224 Rosengarten
              </p>
              <p className="mt-3">
                <strong className="text-gray-900">Vertreten durch:</strong><br />
                Nicolas Daum
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h2
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                Kontakt
              </h2>
              <p>
                Telefon: +49 170 5523252<br />
                E-Mail:{" "}
                <a href="mailto:kontakt@kinderleicht.ai" className="font-medium" style={{ color: "#2596be" }}>
                  kontakt@kinderleicht.ai
                </a>
              </p>
            </div>

            {/* Verantwortlich */}
            <div>
              <h2
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>
                Nicolas Daum<br />
                Bendestorfer Str. 6<br />
                21224 Rosengarten
              </p>
            </div>

            {/* Streitbeilegung */}
            <div>
              <h2
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                Verbraucherstreitbeilegung
              </h2>
              <p>
                Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teil und sind dazu auch nicht verpflichtet.
              </p>
            </div>

            {/* Datenschutz */}
            <div>
              <h2
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                Datenschutzerklärung
              </h2>
              <p>
                Unsere Datenschutzerklärung findest du{" "}
                <Link href="/datenschutz" className="font-medium" style={{ color: "#2596be" }}>
                  hier
                </Link>
                .
              </p>
            </div>

            {/* Haftung Inhalte */}
            <div>
              <h2
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                Haftung für Inhalte
              </h2>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Haftung Links */}
            <div>
              <h2
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Inhalte umgehend entfernen.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
