import type { Metadata } from "next";
import React from "react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — kinderleicht.ai",
  description: "Datenschutzerklärung von kinderleicht.ai. Informationen zur Datenverarbeitung nach DSGVO.",
  alternates: { canonical: "https://kinderleicht.ai/datenschutz" },
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xl font-bold text-gray-900 mb-3 mt-10 first:mt-0"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-base font-bold text-gray-900 mb-2 mt-6"
    >
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-5 mb-4 space-y-1">{children}</ul>;
}

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        label="Rechtliches"
        title="Datenschutzerklärung"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-base leading-relaxed text-gray-600">

          <H2>Präambel</H2>
          <P>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als &bdquo;Daten&ldquo; bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als &bdquo;Onlineangebot&ldquo;).</P>
          <P>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</P>
          <P>Stand: 17. März 2026</P>

          <H2>Verantwortlicher</H2>
          <P>
            Nicolas Daum / Kinderleicht.ai<br />
            Bendestorfer Str. 6<br />
            21224 Rosengarten
          </P>
          <P>
            E-Mail-Adresse:{" "}
            <a href="mailto:kontakt@kinderleicht.ai" className="font-medium" style={{ color: "#2596be" }}>
              kontakt@kinderleicht.ai
            </a>
          </P>
          <P>
            Impressum:{" "}
            <a href="/impressum" className="font-medium" style={{ color: "#2596be" }}>
              kinderleicht.ai/impressum
            </a>
          </P>

          <H2>Übersicht der Verarbeitungen</H2>
          <P>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</P>

          <H3>Arten der verarbeiteten Daten</H3>
          <UL>
            <li>Kontaktdaten (z. B. E-Mail-Adresse)</li>
            <li>Inhaltsdaten (z. B. Eingaben in Kontaktformularen)</li>
            <li>Nutzungsdaten (z. B. besuchte Seiten, Zugriffszeit)</li>
            <li>Meta- und Kommunikationsdaten (z. B. IP-Adresse, Browsertyp)</li>
            <li>Protokolldaten</li>
          </UL>

          <H3>Kategorien betroffener Personen</H3>
          <UL>
            <li>Nutzer unseres Onlineangebots</li>
            <li>Kommunikationspartner</li>
            <li>Newsletter-Abonnenten</li>
          </UL>

          <H3>Zwecke der Verarbeitung</H3>
          <UL>
            <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
            <li>Kommunikation und Beantwortung von Kontaktanfragen</li>
            <li>Reichweitenmessung und anonyme Webanalyse</li>
            <li>Newsletter-Versand</li>
            <li>Affiliate-Nachverfolgung</li>
            <li>Sicherheitsmaßnahmen</li>
            <li>Informationstechnische Infrastruktur</li>
          </UL>

          <H2>Maßgebliche Rechtsgrundlagen</H2>
          <P>Maßgebliche Rechtsgrundlagen nach der DSGVO: Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.</P>
          <UL>
            <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> – Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.</li>
            <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> – Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.</li>
            <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> – Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.</li>
            <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> – Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.</li>
          </UL>
          <P><strong>Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.</P>
          <P><strong>Nationale Datenschutzregelungen in Österreich:</strong> Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Österreich. Hierzu gehört insbesondere das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (Datenschutzgesetz – DSG).</P>
          <P><strong>Hinweis auf Geltung DSGVO und Schweizer DSG:</strong> Diese Datenschutzhinweise dienen sowohl der Informationserteilung nach dem Schweizer DSG als auch nach der Datenschutzgrundverordnung (DSGVO).</P>

          <H2>Sicherheitsmaßnahmen</H2>
          <P>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</P>
          <P><strong>Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS):</strong> Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie.</P>

          <H2>Übermittlung von personenbezogenen Daten</H2>
          <P>Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt beziehungsweise ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die in eine Website eingebunden sind. In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.</P>

          <H2>Internationale Datentransfers</H2>
          <P><strong>Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in ein Drittland (d. h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) übermitteln, erfolgt dies stets im Einklang mit den gesetzlichen Vorgaben.</P>
          <P>Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das Data Privacy Framework (DPF), welches durch einen Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023 als sicherer Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den jeweiligen Anbietern Standardvertragsklauseln abgeschlossen.</P>

          <H2>Allgemeine Informationen zur Datenspeicherung und Löschung</H2>
          <P>Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen.</P>
          <P><strong>Aufbewahrungsfristen nach deutschem Recht:</strong></P>
          <UL>
            <li><strong>10 Jahre</strong> – Bücher und Aufzeichnungen, Jahresabschlüsse, Inventare, Lageberichte (§ 147 Abs. 1 Nr. 1 AO, § 257 Abs. 1 Nr. 1 HGB)</li>
            <li><strong>8 Jahre</strong> – Buchungsbelege wie Rechnungen und Kostenbelege (§ 147 Abs. 1 Nr. 4 AO, § 257 Abs. 1 Nr. 4 HGB)</li>
            <li><strong>6 Jahre</strong> – Übrige Geschäftsunterlagen (§ 147 Abs. 1 Nr. 2, 3, 5 AO, § 257 Abs. 1 Nr. 2 u. 3 HGB)</li>
            <li><strong>3 Jahre</strong> – Reguläre gesetzliche Verjährungsfrist (§§ 195, 199 BGB)</li>
          </UL>

          <H2>Rechte der betroffenen Personen</H2>
          <P>Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</P>
          <UL>
            <li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen.</li>
            <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
            <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten.</li>
            <li><strong>Recht auf Berichtigung:</strong> Sie haben das Recht, die Vervollständigung oder Berichtigung der Sie betreffenden Daten zu verlangen.</li>
            <li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden.</li>
            <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
            <li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde.</li>
          </UL>

          <H2>Geschäftliche Leistungen</H2>
          <P>Wir verarbeiten personenbezogene Daten unserer Vertrags- und Geschäftspartner zur Anbahnung, Durchführung und Abwicklung von Vertragsverhältnissen sowie vergleichbaren Rechtsverhältnissen. Die Verarbeitung dient insbesondere der Erfüllung unserer vertraglichen Haupt- und Nebenpflichten.</P>
          <P>Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen und zur Erfüllung des jeweiligen Vertragsverhältnisses sowie Art. 6 Abs. 1 lit. c DSGVO zur Erfüllung gesetzlicher Verpflichtungen.</P>

          <H2>Bereitstellung des Onlineangebots und Webhosting</H2>
          <P>Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.</P>
          <P><strong>Erhebung von Zugriffsdaten und Logfiles:</strong> Der Zugriff auf unser Onlineangebot wird in Form von sogenannten &bdquo;Server-Logfiles&ldquo; protokolliert. Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert.</P>
          <P><strong>Eingesetzte Hosting-Dienste:</strong></P>
          <UL>
            <li><strong>Vercel</strong> – Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>). Grundlage Drittlandtransfers: Data Privacy Framework (DPF), Standardvertragsklauseln.</li>
            <li><strong>Sanity</strong> – Sanity AS, Grensen 5-7, 0159 Oslo, Norwegen (<a href="https://www.sanity.io/legal/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>). Content-Management-System für die Verwaltung von Inhalten.</li>
          </UL>

          <H2>Einsatz von Cookies und lokalem Speicher</H2>
          <P>Unsere Webseite setzt <strong>keine Tracking-Cookies</strong>. Wir speichern lediglich Ihre Cookie-Einstellung (Zustimmung oder Ablehnung) im lokalen Speicher (localStorage) Ihres Browsers, damit wir Sie nicht bei jedem Besuch erneut fragen müssen.</P>
          <P>Die Webanalyse mit Umami wird erst aktiviert, nachdem Sie über unser Cookie-Banner zugestimmt haben. Umami selbst setzt keine Cookies.</P>
          <P>Sie können Ihre Einwilligung jederzeit über den Link &bdquo;Cookie-Einstellungen&ldquo; in der Fußzeile unserer Webseite widerrufen. Zudem können Sie den lokalen Speicher Ihres Browsers jederzeit über die Browser-Einstellungen löschen.</P>

          <H2>Kontakt- und Anfrageverwaltung</H2>
          <P>Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.</P>

          <H2>Newsletter und elektronische Benachrichtigungen</H2>
          <P>Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen nur mit der Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis. Die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.</P>
          <P><strong>Mailchimp:</strong> E-Mail-Versand- und Automatisierungsplattform; Dienstanbieter: Intuit Inc., 2700 Coast Ave., Mountain View, CA 94043, USA. <a href="https://www.intuit.com/privacy/statement/" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>.</P>

          <H2>Webanalyse mit Umami</H2>
          <P>Wir nutzen <strong>Umami</strong> zur anonymen Webanalyse. Umami ist eine datenschutzfreundliche, Open-Source-Analysesoftware, die wir selbst auf Vercel hosten. Umami erhebt <strong>keine personenbezogenen Daten</strong>, setzt <strong>keine Cookies</strong> und speichert <strong>keine IP-Adressen</strong>.</P>
          <P>Folgende anonyme Nutzungsdaten werden erfasst:</P>
          <UL>
            <li>Aufgerufene Seiten und Verweildauer</li>
            <li>Verweisende Webseite (Referrer)</li>
            <li>Verwendeter Browser und Betriebssystem</li>
            <li>Land des Zugriffs (basierend auf anonymisierter IP)</li>
            <li>Bildschirmauflösung</li>
          </UL>
          <P>Es werden <strong>keine individuellen Nutzerprofile</strong> erstellt. Ein Rückschluss auf einzelne Personen ist nicht möglich. Die Analyse wird erst nach Ihrer Einwilligung über unser Cookie-Banner aktiviert.</P>
          <P>Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO). Dienstanbieter für das Hosting: Vercel Inc., USA (siehe oben).</P>

          <H2>Affiliate-Programme und Affiliate-Links</H2>
          <P>In unser Onlineangebot binden wir sogenannte Affiliate-Links oder andere Verweise auf die Angebote und Leistungen von Drittanbietern ein. Wenn Nutzer den Affiliate-Links folgen oder die Angebote wahrnehmen, können wir von diesen Drittanbietern eine Provision erhalten.</P>

          <H2>Präsenzen in sozialen Netzwerken (Social Media)</H2>
          <P>Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen über uns anzubieten.</P>
          <UL>
            <li><strong>Instagram</strong> – Meta Platforms Ireland Limited, Dublin (<a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
            <li><strong>Facebook</strong> – Meta Platforms Ireland Limited, Dublin (<a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
            <li><strong>LinkedIn</strong> – LinkedIn Ireland Unlimited Company, Dublin (<a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
          </UL>

          <H2>Plug-ins und eingebettete Funktionen sowie Inhalte</H2>
          <P>Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein, die von den Servern ihrer jeweiligen Anbieter bezogen werden. Die Einbindung setzt voraus, dass die Anbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten.</P>
          <P><strong>Schriftarten (Self-Hosted):</strong> Wir verwenden die Schriftarten IBM Plex Sans und Inter. Diese werden <strong>lokal von unserem Server</strong> ausgeliefert und nicht von externen Diensten wie Google Fonts geladen. Es findet keine Datenübermittlung an Google statt.</P>

          <H2>Änderung und Aktualisierung</H2>
          <P>Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.</P>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Erstellt mit dem{" "}
              <a href="https://datenschutz-generator.de/" target="_blank" rel="noopener noreferrer" className="underline">
                Datenschutz-Generator.de
              </a>{" "}
              von Dr. Thomas Schwenke.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
