import { Metadata } from 'next';
import { FileText, Calendar, Receipt, Monitor, AlertTriangle, PiggyBank } from 'lucide-react';
import PageHero from '@/components/content/PageHero';
import ContentSection from '@/components/content/ContentSection';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Steuererklärung 2026: Die besten Tipps für maximale Erstattung',
  description: 'Steuererklärung 2026 leicht gemacht: Die besten Tipps für maximale Erstattung. Absetzposten, Fristen, Pflichtveranlagung und digitale Tools wie ELSTER erklärt.',
  keywords: 'steuererklärung 2026, steuererklärung tipps, steuererklärung absetzen, werbungskosten, sonderausgaben',
  alternates: {
    canonical: 'https://gehaltly.de/ratgeber/steuererklarung-tipps/',
  },
  openGraph: {
    title: 'Steuererklärung 2026: Die besten Tipps für maximale Erstattung',
    description: 'Steuererklärung 2026: Absetzposten, Fristen und Tipps für durchschnittlich 1.063 EUR Erstattung.',
    type: 'article',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function SteuererklarungTippsPage() {
  const faqs = [
    {
      question: 'Wann muss ich eine Steuererklärung abgeben?',
      answer: 'Zur Pflichtveranlagung verpflichtet sind unter anderem: Arbeitnehmer mit Steuerklassenkombination 3/5 oder 4/4 mit Faktor, Empfänger von Lohnersatzleistungen über 410 EUR (z.B. Arbeitslosengeld, Kurzarbeitergeld, Elterngeld), Arbeitnehmer mit Nebeneinkünften über 410 EUR, und bei Freibeträgen auf der Lohnsteuerkarte. Die Frist ist der 31. Juli des Folgejahres.',
    },
    {
      question: 'Wie viel bekommt man durchschnittlich bei der Steuererklärung zurück?',
      answer: 'Im Durchschnitt erhalten Arbeitnehmer, die freiwillig eine Steuererklärung abgeben, rund 1.063 EUR zurück. Der tatsächliche Betrag hängt von Ihren individuellen Abzügen ab: Werbungskosten über der Pauschale, Sonderausgaben, außergewöhnliche Belastungen und Handwerkerleistungen sind die größten Hebel. Etwa 88% aller freiwillig Abgebenden erhalten eine Erstattung.',
    },
    {
      question: 'Was kann ich alles von der Steuer absetzen?',
      answer: 'Die wichtigsten Absetzposten sind: Werbungskosten (Fahrtkosten, Arbeitsmittel, Fortbildungen, Homeoffice-Pauschale 6 EUR/Tag), Sonderausgaben (Spenden, Kirchensteuer, Versicherungsbeiträge), außergewöhnliche Belastungen (Krankheitskosten, Pflegekosten), Handwerkerleistungen (20% der Lohnkosten, max. 1.200 EUR) und haushaltsnahe Dienstleistungen (20%, max. 4.000 EUR).',
    },
    {
      question: 'Kann ich die Steuererklärung rückwirkend abgeben?',
      answer: 'Ja, eine freiwillige Steuererklärung können Sie bis zu 4 Jahre rückwirkend einreichen. Das bedeutet: Im Jahr 2026 können Sie noch die Steuererklärungen für 2022, 2023, 2024 und 2025 abgeben. Da die meisten Arbeitnehmer eine Erstattung erhalten, lohnt es sich fast immer, auch rückwirkend abzugeben.',
    },
    {
      question: 'Welche Steuersoftware ist die beste?',
      answer: 'ELSTER (kostenlos vom Finanzamt) reicht für einfache Fälle. Für mehr Komfort eignen sich WISO Steuer (ca. 35 EUR, sehr benutzerfreundlich), SteuerSparErklärung (ca. 25 EUR, gutes Preis-Leistungs-Verhältnis) und Taxfix (App, ca. 40 EUR, gut für Einsteiger). Alle Programme prüfen automatisch auf vergessene Absetzposten und optimieren Ihre Steuerlast.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Steuererklärung 2026: Die besten Tipps für maximale Erstattung',
    description: 'Steuererklärung 2026 leicht gemacht: Absetzposten, Fristen und Tipps für maximale Erstattung.',
    image: 'https://gehaltly.de/logo.png',
    author: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      url: 'https://gehaltly.de',
    },
    publisher: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      url: 'https://gehaltly.de',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gehaltly.de/logo.png',
      },
    },
    datePublished: '2026-01-15',
    dateModified: '2026-03-01',
  };

  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Ratgeber', href: '/ratgeber' },
            { label: 'Steuererklärung Tipps' },
          ]}
        />
      </div>

      <PageHero
        title="Steuererklärung 2026: Die besten Tipps"
        description="Durchschnittlich 1.063 EUR Erstattung warten auf Sie. Erfahren Sie, welche Absetzposten Sie nutzen können, welche Fristen gelten und wie Sie Ihre Steuererklärung schnell und einfach erledigen."
      />

      <div className="container mx-auto px-4 mt-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>Von <strong>gehaltly.de</strong> Redaktion</span>
          <span>|</span>
          <span>Aktualisiert: 1. März 2026</span>
        </div>
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Viele Arbeitnehmer verzichten auf bares Geld, weil sie keine Steuererklärung abgeben. Dabei lohnt sich die freiwillige Abgabe in den meisten Fällen: Rund 88% erhalten eine Erstattung, im Schnitt über 1.000 EUR. Die rechtlichen Grundlagen finden Sie im <a href="https://www.gesetze-im-internet.de/estg/" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Einkommensteuergesetz (EStG)</a>. Aktuelle Formulare und Informationen stellt das <a href="https://www.bundesfinanzministerium.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Bundesfinanzministerium</a> bereit.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In diesem Ratgeber zeigen wir Ihnen die wichtigsten Absetzposten, erklären die Fristen und geben praktische Tipps für Ihre Steuererklärung 2026.
            </p>
          </div>
        </div>
      </section>

      <ContentSection
        heading="Wer muss eine Steuererklärung abgeben?"
        icon={<AlertTriangle className="w-5 h-5" />}
        body="Nicht jeder ist zur Abgabe einer Steuererklärung verpflichtet. Aber selbst wenn Sie nicht müssen - die freiwillige Abgabe lohnt sich fast immer."
      >
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4">
            <h3 className="font-semibold mb-2">Pflichtveranlagung - Sie MÜSSEN abgeben wenn:</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-red-900 dark:text-red-100">
              <li>Sie Steuerklassenkombination 3/5 oder 4/4 mit Faktor haben</li>
              <li>Sie Lohnersatzleistungen über 410 EUR erhalten haben (Arbeitslosengeld, Kurzarbeitergeld, Elterngeld, Krankengeld)</li>
              <li>Sie Nebeneinkünfte über 410 EUR hatten (Vermietung, Selbstständigkeit, Kapitalerträge über Freibetrag)</li>
              <li>Sie einen Freibetrag auf der Lohnsteuerkarte eingetragen haben</li>
              <li>Sie von mehreren Arbeitgebern gleichzeitig Lohn bezogen haben</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4">
            <h3 className="font-semibold mb-2">Freiwillige Abgabe lohnt sich besonders wenn:</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-green-900 dark:text-green-100">
              <li>Sie hohe Werbungskosten haben (über 1.230 EUR Pauschbetrag)</li>
              <li>Sie einen langen Arbeitsweg haben (Pendlerpauschale)</li>
              <li>Sie viel im Homeoffice gearbeitet haben</li>
              <li>Sie Handwerker oder haushaltsnahe Dienstleistungen bezahlt haben</li>
              <li>Sie Kirchensteuer zahlen (wird als Sonderausgabe angerechnet)</li>
              <li>Sie nicht das ganze Jahr gearbeitet haben</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Die wichtigsten Absetzposten"
        icon={<Receipt className="w-5 h-5" />}
        body="Mit diesen Absetzposten können Sie Ihre Steuerlast deutlich senken. Sammeln Sie das ganze Jahr über Belege und Nachweise."
      >
        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Werbungskosten (Anlage N)</h3>
            <p className="text-sm text-muted-foreground mb-3">Alle Ausgaben, die im Zusammenhang mit Ihrem Beruf stehen. Der Pauschbetrag beträgt 1.230 EUR - nur was darüber liegt, bringt zusätzliche Steuerersparnis.</p>
            <div className="bg-muted rounded-lg p-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Pendlerpauschale (30 km einfach, 230 Tage)</span>
                  <strong>2.070 EUR</strong>
                </div>
                <div className="flex justify-between">
                  <span>Homeoffice-Pauschale (120 Tage x 6 EUR)</span>
                  <strong>720 EUR</strong>
                </div>
                <div className="flex justify-between">
                  <span>Arbeitsmittel (Laptop, Schreibtisch, Fachliteratur)</span>
                  <strong>variabel</strong>
                </div>
                <div className="flex justify-between">
                  <span>Fortbildungskosten (Kursgebühren, Fahrt, Unterkunft)</span>
                  <strong>variabel</strong>
                </div>
                <div className="flex justify-between">
                  <span>Berufskleidung (nur typische Berufskleidung)</span>
                  <strong>variabel</strong>
                </div>
                <div className="flex justify-between">
                  <span>Bewerbungskosten (Fotos, Porto, Fahrt)</span>
                  <strong>variabel</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Sonderausgaben</h3>
            <div className="bg-muted rounded-lg p-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Kirchensteuer (voller Betrag absetzbar)</span>
                  <strong>variabel</strong>
                </div>
                <div className="flex justify-between">
                  <span>Spenden und Mitgliedsbeiträge</span>
                  <strong>bis 20% des Einkommens</strong>
                </div>
                <div className="flex justify-between">
                  <span>Vorsorgeaufwendungen (Kranken-, Pflege-, Rentenversicherung)</span>
                  <strong>gesetzliche Beiträge</strong>
                </div>
                <div className="flex justify-between">
                  <span>Riester-Beiträge</span>
                  <strong>bis 2.100 EUR</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Haushaltsnahe Leistungen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3">
                <h4 className="font-medium text-sm mb-1">Handwerkerleistungen</h4>
                <p className="text-xs text-muted-foreground">20% der Lohnkosten, max. 1.200 EUR Steuerersparnis. Materialkosten nicht absetzbar.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3">
                <h4 className="font-medium text-sm mb-1">Haushaltsnahe Dienstleistungen</h4>
                <p className="text-xs text-muted-foreground">20% der Kosten, max. 4.000 EUR. Z.B. Putzhilfe, Gartenpflege, Kinderbetreuung.</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Fristen für die Steuererklärung 2026"
        icon={<Calendar className="w-5 h-5" />}
        body="Die Abgabefristen variieren je nachdem, ob Sie zur Abgabe verpflichtet sind und ob Sie einen Steuerberater nutzen."
      >
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <div>
                  <strong>Pflichtveranlagung ohne Berater</strong>
                  <p className="text-xs text-muted-foreground">Steuererklärung 2026</p>
                </div>
                <span className="font-bold text-lg">31. Juli 2027</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <div>
                  <strong>Pflichtveranlagung mit Steuerberater</strong>
                  <p className="text-xs text-muted-foreground">Steuererklärung 2026</p>
                </div>
                <span className="font-bold text-lg">28. Februar 2028</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <strong>Freiwillige Abgabe</strong>
                  <p className="text-xs text-muted-foreground">Bis zu 4 Jahre rückwirkend</p>
                </div>
                <span className="font-bold text-lg">31. Dezember 2030</span>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Tipp:</strong> Bei Pflichtveranlagung und verspäteter Abgabe droht ein Verspätungszuschlag von mindestens 25 EUR pro angefangenem Monat. Wenn Sie die Frist nicht schaffen, beantragen Sie rechtzeitig eine Fristverlängerung beim Finanzamt.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Belege und Nachweise sammeln"
        icon={<FileText className="w-5 h-5" />}
        body="Seit 2017 müssen Belege nicht mehr mit der Steuererklärung eingereicht werden. Das Finanzamt kann sie aber nachfordern - bewahren Sie daher alle Belege mindestens 1 Jahr auf."
      >
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Diese Belege sollten Sie sammeln:</h3>
            <ul className="text-sm text-blue-900 dark:text-blue-100 space-y-2 list-disc list-inside">
              <li>Rechnungen von Handwerkern und Dienstleistern (mit Überweisung bezahlt!)</li>
              <li>Fahrkarten und Tankbelege für Dienstreisen</li>
              <li>Kaufbelege für Arbeitsmittel (Laptop, Monitor, Fachliteratur)</li>
              <li>Bescheinigungen für Fortbildungen und Kurse</li>
              <li>Spendenquittungen</li>
              <li>Ärztliche Bescheinigungen bei Krankheitskosten</li>
              <li>Lohnsteuerbescheinigung des Arbeitgebers</li>
            </ul>
          </div>
          <p className="text-muted-foreground text-sm">
            <strong>Praxistipp:</strong> Fotografieren Sie Belege direkt nach Erhalt mit dem Smartphone und speichern Sie sie in einem Ordner. Viele Kassenbelege verblassen nach wenigen Monaten und werden unleserlich.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Digitale Tools für die Steuererklärung"
        icon={<Monitor className="w-5 h-5" />}
        body="Mit der richtigen Software erledigen Sie Ihre Steuererklärung in 1-2 Stunden. Alle Programme führen Sie Schritt für Schritt durch den Prozess."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">ELSTER (kostenlos)</h3>
              <p className="text-sm text-muted-foreground mb-2">Das offizielle Portal der Finanzverwaltung. Kostenlos, aber weniger komfortabel als kommerzielle Software.</p>
              <a href="https://www.elster.de" target="_blank" rel="noopener noreferrer" className="text-sm text-[#DD0000] hover:underline">www.elster.de</a>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">WISO Steuer (ca. 35 EUR)</h3>
              <p className="text-sm text-muted-foreground mb-2">Sehr benutzerfreundlich mit automatischer Optimierung und Steuertipps. Für Desktop, Web und App.</p>
              <span className="text-sm text-muted-foreground">Preis-Leistungs-Empfehlung</span>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">SteuerSparErklärung (ca. 25 EUR)</h3>
              <p className="text-sm text-muted-foreground mb-2">Günstige Alternative mit guter Benutzerführung. Besonders für Arbeitnehmer ohne komplexe Steuerfälle.</p>
              <span className="text-sm text-muted-foreground">Günstigste Lösung</span>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Taxfix (ca. 40 EUR)</h3>
              <p className="text-sm text-muted-foreground mb-2">App-basiert mit Frage-Antwort-Prinzip. Ideal für Einsteiger, die noch nie eine Steuererklärung gemacht haben.</p>
              <span className="text-sm text-muted-foreground">Beste App-Lösung</span>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-sm text-green-900 dark:text-green-100">
              <strong>Tipp:</strong> Alle kommerziellen Programme zeigen Ihnen vorab die erwartete Erstattung. Die Investition von 25-40 EUR lohnt sich fast immer, wenn Sie dadurch Absetzposten finden, die Sie sonst vergessen hätten.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Rechenbeispiel: So viel bringt die Steuererklärung"
        icon={<PiggyBank className="w-5 h-5" />}
        body="Ein konkretes Beispiel zeigt, wie schnell sich die Steuererklärung lohnt: Angestellter, 40.000 EUR brutto, Steuerklasse 1, 25 km Arbeitsweg."
      >
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b">
                <span>Arbeitnehmerpauschbetrag (bereits berücksichtigt)</span>
                <span>1.230 EUR</span>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Pendlerpauschale (25 km x 0,30 EUR x 230 Tage)</span>
                <strong>1.725 EUR</strong>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Homeoffice-Pauschale (50 Tage x 6 EUR)</span>
                <strong>300 EUR</strong>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Arbeitsmittel (Monitor, Headset)</span>
                <strong>350 EUR</strong>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Kontoführungspauschale</span>
                <strong>16 EUR</strong>
              </div>
              <div className="flex justify-between pb-2 border-b font-semibold">
                <span>Werbungskosten gesamt</span>
                <span>2.391 EUR</span>
              </div>
              <div className="flex justify-between pb-2 border-b text-green-600">
                <span>Abzüglich Pauschbetrag (bereits berücksichtigt)</span>
                <span>-1.230 EUR</span>
              </div>
              <div className="flex justify-between pt-2 text-lg font-bold text-green-600">
                <span>Zusätzlich absetzbar</span>
                <span>1.161 EUR</span>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Ergebnis:</strong> Bei einem Grenzsteuersatz von ca. 30% (bei 40.000 EUR brutto) ergibt sich eine Erstattung von rund 350 EUR allein aus Werbungskosten. Kommen noch Handwerkerleistungen, Spenden oder Kirchensteuer dazu, steigt die Erstattung schnell auf über 600 EUR. Nutzen Sie unseren <a href="/" className="text-[#DD0000] hover:underline">Brutto-Netto-Rechner</a>, um Ihre individuelle Steuerlast zu berechnen.
            </p>
          </div>
        </div>
      </ContentSection>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/ratgeber/steuererklarung-tipps"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
