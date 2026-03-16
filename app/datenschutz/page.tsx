import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — kinderleicht.ai",
  description: "Datenschutzerklärung von kinderleicht.ai.",
};

const dotGrid = {
  backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  opacity: 0.45,
} as React.CSSProperties;

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
          >
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-base leading-relaxed text-gray-600">

          <H2>Präambel</H2>
          <P>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als &bdquo;Daten&ldquo; bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als &bdquo;Onlineangebot&ldquo;).</P>
          <P>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</P>
          <P>Stand: 18. Februar 2026</P>

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
            <li>Bestandsdaten</li>
            <li>Beschäftigtendaten</li>
            <li>Zahlungsdaten</li>
            <li>Standortdaten</li>
            <li>Kontaktdaten</li>
            <li>Inhaltsdaten</li>
            <li>Vertragsdaten</li>
            <li>Nutzungsdaten</li>
            <li>Meta-, Kommunikations- und Verfahrensdaten</li>
            <li>Event-Daten (Facebook)</li>
            <li>Protokolldaten</li>
          </UL>

          <H3>Kategorien betroffener Personen</H3>
          <UL>
            <li>Leistungsempfänger und Auftraggeber</li>
            <li>Beschäftigte</li>
            <li>Interessenten</li>
            <li>Kommunikationspartner</li>
            <li>Nutzer</li>
            <li>Gewinnspiel- und Wettbewerbsteilnehmer</li>
            <li>Geschäfts- und Vertragspartner</li>
            <li>Bildungs- und Kursteilnehmer</li>
            <li>Teilnehmer</li>
            <li>Dritte Personen</li>
            <li>Hinweisgeber</li>
          </UL>

          <H3>Zwecke der Verarbeitung</H3>
          <UL>
            <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten</li>
            <li>Kommunikation</li>
            <li>Sicherheitsmaßnahmen</li>
            <li>Direktmarketing</li>
            <li>Reichweitenmessung</li>
            <li>Tracking</li>
            <li>Büro- und Organisationsverfahren</li>
            <li>Remarketing</li>
            <li>Konversionsmessung</li>
            <li>Zielgruppenbildung</li>
            <li>Affiliate-Nachverfolgung</li>
            <li>Organisations- und Verwaltungsverfahren</li>
            <li>Durchführung von Gewinnspielen und Wettbewerben</li>
            <li>Feedback</li>
            <li>Umfragen und Fragebögen</li>
            <li>Marketing</li>
            <li>Profile mit nutzerbezogenen Informationen</li>
            <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
            <li>Informationstechnische Infrastruktur</li>
            <li>Hinweisgeberschutz</li>
            <li>Öffentlichkeitsarbeit</li>
            <li>Geschäftsprozesse und betriebswirtschaftliche Verfahren</li>
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

          <H2>Zahlungsverfahren</H2>
          <P>Im Rahmen von Vertrags- und sonstigen Rechtsbeziehungen bieten wir effiziente und sichere Zahlungsmöglichkeiten an und setzen hierzu neben Banken und Kreditinstituten weitere Dienstleister ein. Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die Datenschutzhinweise der jeweiligen Zahlungsdienstleister.</P>
          <P><strong>Eingesetzte Zahlungsdienstleister:</strong></P>
          <UL>
            <li><strong>Amazon Payments</strong> – Amazon Payments Europe S.C.A., Luxemburg (<a href="https://pay.amazon.de/help/201212490" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
            <li><strong>American Express</strong> – American Express Europe S.A., Frankfurt (<a href="https://www.americanexpress.com/de-de/firma/legal/datenschutz-center/online-datenschutzerklarung/" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
            <li><strong>Apple Pay</strong> – Apple Inc., Cupertino, USA (<a href="https://www.apple.com/legal/privacy/de-ww/" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
            <li><strong>Google Pay</strong> – Google Ireland Limited, Dublin (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
            <li><strong>Klarna</strong> – Klarna Bank AB, Stockholm (<a href="https://www.klarna.com/de/datenschutz" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
            <li><strong>Mastercard</strong> – Mastercard Europe SA, Waterloo, Belgien (<a href="https://www.mastercard.de/de-de/datenschutz.html" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
            <li><strong>PayPal</strong> – PayPal (Europe) S.à r.l. et Cie, Luxemburg (<a href="https://www.paypal.com/de/legalhub/paypal/privacy-full" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
            <li><strong>Visa</strong> – Visa Europe Services Inc., London (<a href="https://www.visa.de/nutzungsbedingungen/visa-privacy-center.html" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
          </UL>

          <H2>Bereitstellung des Onlineangebots und Webhosting</H2>
          <P>Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.</P>
          <P><strong>Erhebung von Zugriffsdaten und Logfiles:</strong> Der Zugriff auf unser Onlineangebot wird in Form von sogenannten &bdquo;Server-Logfiles&ldquo; protokolliert. Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert.</P>
          <P><strong>Eingesetzte Hosting-Dienste:</strong></P>
          <UL>
            <li><strong>Vercel</strong> – Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>). Grundlage Drittlandtransfers: Data Privacy Framework (DPF), Standardvertragsklauseln.</li>
            <li><strong>Sanity</strong> – Sanity AS, Grensen 5-7, 0159 Oslo, Norwegen (<a href="https://www.sanity.io/legal/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>). Content-Management-System für die Verwaltung von Inhalten.</li>
          </UL>

          <H2>Einsatz von Cookies</H2>
          <P>Wir verwenden Cookies gemäß den gesetzlichen Vorschriften. Dazu holen wir, wenn erforderlich, vorab die Zustimmung der Nutzer ein. Ist eine Zustimmung nicht notwendig, setzen wir auf unsere berechtigten Interessen. Die Einwilligung kann jederzeit widerrufen werden.</P>
          <P><strong>Speicherdauer:</strong></P>
          <UL>
            <li><strong>Temporäre Cookies (Session-Cookies):</strong> Werden gelöscht, nachdem ein Nutzer ein Onlineangebot verlassen und seinen Browser geschlossen hat.</li>
            <li><strong>Permanente Cookies:</strong> Bleiben auch nach dem Schließen des Browsers gespeichert. Speicherdauer bis zu zwei Jahre.</li>
          </UL>
          <P>Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit widerrufen und zudem einen Widerspruch gegen die Verarbeitung entsprechend den gesetzlichen Vorgaben, auch mittels der Privatsphäre-Einstellungen ihres Browsers, erklären.</P>

          <H2>Kontakt- und Anfrageverwaltung</H2>
          <P>Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.</P>

          <H2>Newsletter und elektronische Benachrichtigungen</H2>
          <P>Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen nur mit der Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis. Die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.</P>
          <P><strong>Mailchimp:</strong> E-Mail-Versand- und Automatisierungsplattform; Dienstanbieter: Intuit Inc., 2700 Coast Ave., Mountain View, CA 94043, USA. <a href="https://www.intuit.com/privacy/statement/" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>.</P>

          <H2>Webanalyse, Monitoring und Optimierung</H2>
          <P>Die Webanalyse dient der Auswertung der Besucherströme unseres Onlineangebots und kann Verhalten, Interessen oder demographische Informationen umfassen. Wir setzen Webanalyse ein, um die Nutzung unseres Onlineangebots zu optimieren.</P>

          <H2>Onlinemarketing</H2>
          <P>Wir verarbeiten personenbezogene Daten zu Onlinemarketingzwecken, insbesondere zur Vermarktung von Werbeflächen und zur Darstellung von relevanten Inhalten und Werbung.</P>

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
          <P>Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein, die von den Servern ihrer jeweiligen Anbieter bezogen werden. Dies können z. B. Grafiken, Videos oder Stadtpläne sein. Die Einbindung setzt voraus, dass die Anbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten.</P>
          <UL>
            <li><strong>Google Fonts</strong> – Google Ireland Limited, Dublin (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
            <li><strong>YouTube-Videos</strong> – Google Ireland Limited, Dublin (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#2596be" }}>Datenschutzerklärung</a>)</li>
          </UL>

          <H2>Änderung und Aktualisierung</H2>
          <P>Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.</P>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-400">
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
