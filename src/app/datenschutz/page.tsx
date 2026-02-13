import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von gehaltly.de gemäß DSGVO',
  alternates: {
    canonical: 'https://gehaltly.de/datenschutz/',
  },
  robots: {
    index: false,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Datenschutzerklärung</h1>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Datenschutz auf einen Blick</h2>
        <h3 className="text-lg font-medium mt-6 mb-2">Allgemeine Hinweise</h3>
        <p className="text-muted-foreground">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-2">Datenerfassung auf dieser Website</h3>
        <p className="text-muted-foreground">
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Hosting</h2>
        <p className="text-muted-foreground">
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Der Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt: IP-Adresse, die Adresse der vorher besuchten Website (Referer Requestheader), Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website, von der die Anforderung kommt und Informationen zu Browser und Betriebssystem.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3 className="text-lg font-medium mt-6 mb-2">Datenschutz</h3>
        <p className="text-muted-foreground">
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-2">Hinweis zur verantwortlichen Stelle</h3>
        <p className="text-muted-foreground">
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
          [Name / Firma einfügen]<br />
          [Adresse einfügen]<br /><br />
          E-Mail: kontakt@gehaltly.de
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Datenerfassung auf dieser Website</h2>
        <h3 className="text-lg font-medium mt-6 mb-2">Gehaltsberechnungen</h3>
        <p className="text-muted-foreground">
          Alle Gehaltsberechnungen werden ausschließlich im Browser des Nutzers durchgeführt. Es werden keine Gehaltsdaten, Steuerklassen oder sonstige Eingaben an unsere Server übermittelt oder gespeichert. Die Berechnungen erfolgen vollständig clientseitig.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-2">Server-Log-Dateien</h3>
        <p className="text-muted-foreground">
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Ihre Rechte</h2>
        <p className="text-muted-foreground">
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
      </div>
    </div>
  );
}
