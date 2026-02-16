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
        <p className="text-muted-foreground">
          <strong>Wie erfassen wir Ihre Daten?</strong><br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. über das Kontaktformular). Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>
        <p className="text-muted-foreground">
          <strong>Wofür nutzen wir Ihre Daten?</strong><br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten (Google Analytics) werden nur mit Ihrer ausdrücklichen Einwilligung zur Analyse des Nutzerverhaltens verwendet.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Hosting</h2>
        <h3 className="text-lg font-medium mt-6 mb-2">Vercel</h3>
        <p className="text-muted-foreground">
          Wir hosten unsere Website bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel ist ein Cloud-Hosting-Dienst, der die statischen Dateien unserer Website über ein globales CDN (Content Delivery Network) bereitstellt.
        </p>
        <p className="text-muted-foreground">
          Wenn Sie unsere Website besuchen, erhebt Vercel automatisch in Server-Logfiles folgende Daten: IP-Adresse, Datum und Uhrzeit der Anfrage, übertragene Datenmenge, Referrer-URL, Browser-Typ und -Version sowie das Betriebssystem. Diese Daten werden zur Sicherstellung des Betriebs und zur Fehlerbehebung verarbeitet.
        </p>
        <p className="text-muted-foreground">
          Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer zuverlässigen Darstellung unserer Website. Vercel verarbeitet Daten auch in den USA. Die Übermittlung erfolgt auf Basis von Standardvertragsklauseln der EU-Kommission.
        </p>
        <p className="text-muted-foreground">
          Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">
            https://vercel.com/legal/privacy-policy
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3 className="text-lg font-medium mt-6 mb-2">Datenschutz</h3>
        <p className="text-muted-foreground">
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-2">Hinweis zur verantwortlichen Stelle</h3>
        <p className="text-muted-foreground">
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
          gehaltly.de<br />
          E-Mail: kontakt@gehaltly.de
        </p>
        <p className="text-muted-foreground">
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-2">Speicherdauer</h3>
        <p className="text-muted-foreground">
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p className="text-muted-foreground">
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt. Um Ihre Cookie-Einwilligung zu widerrufen, löschen Sie die gespeicherten Cookies in Ihrem Browser oder klicken Sie beim nächsten Besuch auf &quot;Nur notwendige&quot; im Cookie-Banner.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Datenerfassung auf dieser Website</h2>

        <h3 className="text-lg font-medium mt-6 mb-2">Cookies</h3>
        <p className="text-muted-foreground">
          Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie richten keinen Schaden an und enthalten keine Viren.
        </p>
        <p className="text-muted-foreground">
          Wir verwenden folgende Cookies:
        </p>
        <ul className="text-muted-foreground list-disc pl-6 space-y-1">
          <li><strong>gehaltly_cookie_consent</strong> (localStorage) — Speichert Ihre Cookie-Einwilligung (&quot;accepted&quot; oder &quot;rejected&quot;). Technisch notwendig, kein Ablaufdatum. Kann jederzeit durch Löschen der Browser-Daten entfernt werden.</li>
          <li><strong>Google Analytics Cookies</strong> (_ga, _ga_*) — Werden nur nach Ihrer ausdrücklichen Einwilligung gesetzt. Speicherdauer: bis zu 2 Jahre. Dienen der Analyse des Nutzerverhaltens.</li>
        </ul>

        <h3 className="text-lg font-medium mt-6 mb-2">Gehaltsberechnungen</h3>
        <p className="text-muted-foreground">
          Alle Gehaltsberechnungen werden ausschließlich im Browser des Nutzers durchgeführt. Es werden keine Gehaltsdaten, Steuerklassen oder sonstige Eingaben an unsere Server übermittelt oder gespeichert. Die Berechnungen erfolgen vollständig clientseitig (JavaScript). Wir haben zu keinem Zeitpunkt Zugriff auf Ihre eingegebenen Gehaltsdaten.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-2">Server-Log-Dateien</h3>
        <p className="text-muted-foreground">
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
        </p>
        <p className="text-muted-foreground">
          Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Analyse-Tools</h2>
        <h3 className="text-lg font-medium mt-6 mb-2">Google Analytics 4</h3>
        <p className="text-muted-foreground">
          Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics wird <strong>nur nach Ihrer ausdrücklichen Einwilligung</strong> über unseren Cookie-Banner aktiviert (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG).
        </p>
        <p className="text-muted-foreground">
          Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen. Die durch die Cookies erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google übertragen und dort gespeichert.
        </p>
        <p className="text-muted-foreground">
          <strong>IP-Anonymisierung:</strong> Wir haben auf dieser Website die IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der EU gekürzt, bevor sie an Server von Google in den USA übertragen wird.
        </p>
        <p className="text-muted-foreground">
          <strong>Auftragsverarbeitung:</strong> Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
        </p>
        <p className="text-muted-foreground">
          <strong>Speicherdauer:</strong> Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene werden nach 14 Monaten automatisch gelöscht.
        </p>
        <p className="text-muted-foreground">
          <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookies in Ihrem Browser löschen. Beim nächsten Besuch wird der Cookie-Banner erneut angezeigt.
        </p>
        <p className="text-muted-foreground">
          Weitere Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">
            https://policies.google.com/privacy
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Internationale Datenübermittlung</h2>
        <p className="text-muted-foreground">
          Soweit Sie in Google Analytics eingewilligt haben, können personenbezogene Daten (insbesondere IP-Adressen) an Server von Google LLC in den USA übermittelt werden. Die USA verfügen derzeit über einen Angemessenheitsbeschluss der EU-Kommission (EU-U.S. Data Privacy Framework). Google LLC ist unter dem Data Privacy Framework zertifiziert.
        </p>
        <p className="text-muted-foreground">
          Auch unser Hosting-Provider Vercel Inc. verarbeitet Daten in den USA. Die Übermittlung erfolgt auf Basis von Standardvertragsklauseln der EU-Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Ihre Rechte</h2>
        <p className="text-muted-foreground">
          Sie haben gemäß DSGVO folgende Rechte bezüglich Ihrer personenbezogenen Daten:
        </p>
        <ul className="text-muted-foreground list-disc pl-6 space-y-1">
          <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO): Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
          <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger Daten verlangen.</li>
          <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer Daten verlangen, soweit keine gesetzliche Aufbewahrungspflicht besteht.</li>
          <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO): Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.</li>
          <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie können verlangen, dass wir Ihnen Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format übermitteln.</li>
          <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer Daten jederzeit widersprechen.</li>
          <li><strong>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Sie können eine erteilte Einwilligung (z.B. für Google Analytics) jederzeit widerrufen.</li>
          <li><strong>Beschwerderecht</strong> (Art. 77 DSGVO): Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <strong>kontakt@gehaltly.de</strong>
        </p>

        <p className="text-muted-foreground mt-8 text-sm">
          Stand: Februar 2026
        </p>
      </div>
    </div>
  );
}
