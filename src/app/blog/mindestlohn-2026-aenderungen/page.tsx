import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Mindestlohn 2026 - Alle Änderungen im Überblick',
  description:
    'Mindestlohn 2026: 13,95 Euro/Stunde. Auswirkungen auf Minijob-Grenze (556 Euro), Midijob, Brutto-Netto bei Vollzeit und alle Ausnahmen erklärt.',
  keywords:
    'mindestlohn 2026, mindestlohn erhöhung, minijob grenze 2026, midijob 2026, mindestlohn brutto netto',
  alternates: {
    canonical: 'https://gehaltly.de/blog/mindestlohn-2026-aenderungen/',
  },
  openGraph: {
    title: 'Mindestlohn 2026 - Alle Änderungen im Überblick',
    description:
      'Der Mindestlohn steigt 2026 auf 13,95 Euro/Stunde. Auswirkungen auf Minijob-Grenze, Midijob und Nettolohn.',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
      },
    ],
  },
};

export default function MindestlohnPage() {
  // Pre-compute: Mindestlohn Vollzeit 40h/Woche
  // 13.95 * 40 * 4.33 = 2,416.14 → rounded = 2416
  // Netto will be computed client-side reference, we use approximate values
  const bruttoVollzeit = Math.round(13.95 * 40 * 4.33);

  const faqs = [
    {
      question: 'Wie hoch ist der Mindestlohn 2026?',
      answer:
        'Der gesetzliche Mindestlohn beträgt ab 2026 13,95 Euro brutto pro Stunde. Das entspricht bei einer 40-Stunden-Woche einem monatlichen Bruttogehalt von ca. 2.416 Euro.',
    },
    {
      question: 'Wie viele Stunden darf ich im Minijob 2026 arbeiten?',
      answer:
        'Bei einem Mindestlohn von 13,95 Euro/Stunde und einer Minijob-Grenze von 556 Euro/Monat dürfen Sie maximal ca. 39,9 Stunden pro Monat arbeiten (556 / 13,95 = 39,86). Das entspricht etwa 10 Stunden pro Woche.',
    },
    {
      question: 'Wer ist vom Mindestlohn ausgenommen?',
      answer:
        'Ausgenommen sind: Auszubildende (eigene Mindestausbildungsvergütung), Langzeitarbeitslose in den ersten 6 Monaten einer neuen Beschäftigung, Pflichtpraktikanten und freiwillige Praktikanten unter 3 Monaten, sowie Jugendliche unter 18 Jahren ohne abgeschlossene Berufsausbildung.',
    },
    {
      question: 'Was ist der Unterschied zwischen Minijob und Midijob?',
      answer:
        'Ein Minijob liegt bei einem Verdienst bis 556 Euro/Monat vor — hier fallen für den Arbeitnehmer keine Sozialversicherungsbeiträge an. Der Midijob (Übergangsbereich) liegt zwischen 556,01 Euro und 2.000 Euro/Monat — hier zahlen Arbeitnehmer reduzierte Sozialversicherungsbeiträge, die progressiv ansteigen.',
    },
    {
      question: 'Wie hat sich der Mindestlohn seit 2015 entwickelt?',
      answer:
        'Der Mindestlohn stieg von 8,50 Euro (2015) über 9,19 Euro (2019), 9,60 Euro (2021), 12,00 Euro (Oktober 2022), 12,41 Euro (2024), 12,82 Euro (2025) auf 13,95 Euro (2026). Das ist ein Anstieg von 64% in 11 Jahren.',
    },
  ];

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Mindestlohn 2026: Was sich für Arbeitnehmer ändert',
    description:
      'Der Mindestlohn steigt 2026 auf 13,95 Euro/Stunde. Auswirkungen auf Minijob-Grenze, Midijob und Nettolohn.',
    image: 'https://gehaltly.de/og-image.png',
    datePublished: '2026-02-10',
    dateModified: '2026-02-10',
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
        url: 'https://gehaltly.de/og-image.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://gehaltly.de/blog/mindestlohn-2026-aenderungen/',
    },
  };

  return (
    <>
      <SchemaMarkup schema={blogPostingSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Mindestlohn 2026' },
          ]}
        />
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Mindestlohn 2026: Was sich für Arbeitnehmer ändert
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-8">
              <span>
                Von <strong>gehaltly.de</strong> Redaktion
              </span>
              <span>|</span>
              <span>Veröffentlicht: 10. Februar 2026</span>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Der gesetzliche Mindestlohn steigt 2026 auf{' '}
                <strong>13,95 Euro brutto pro Stunde</strong>. Das betrifft
                Millionen Arbeitnehmer in Deutschland — insbesondere im
                Einzelhandel, in der Gastronomie und im Dienstleistungssektor.
                In diesem Artikel erklären wir die Auswirkungen auf
                Minijob-Grenze, Midijob und das Nettogehalt bei Vollzeit.
                Aktuelle Informationen veröffentlicht die{' '}
                <a
                  href="https://www.bundesregierung.de/breg-de/themen/mindestlohn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  Bundesregierung
                </a>
                .
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Mindestlohn 2026: 13,95 Euro pro Stunde
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ab dem 1. Januar 2026 gilt ein gesetzlicher Mindestlohn von
                13,95 Euro brutto pro Stunde. Die Mindestlohnkommission, die
                aus Vertretern von Arbeitgebern, Gewerkschaften und
                Wissenschaft besteht, hat die Erhöhung beschlossen. Sie
                orientiert sich an der allgemeinen Lohn- und
                Preisentwicklung.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-blue-900">
                  Auf einen Blick: Mindestlohn 2026
                </h3>
                <ul className="text-sm text-blue-900 space-y-2 list-disc list-inside">
                  <li>
                    <strong>Stundenlohn:</strong> 13,95 Euro brutto
                  </li>
                  <li>
                    <strong>Monatlich (40h/Woche):</strong> ca.{' '}
                    {bruttoVollzeit.toLocaleString('de-DE')} Euro brutto
                  </li>
                  <li>
                    <strong>Jährlich (40h/Woche):</strong> ca.{' '}
                    {(bruttoVollzeit * 12).toLocaleString('de-DE')} Euro brutto
                  </li>
                </ul>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Historische Entwicklung des Mindestlohns
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Jahr</th>
                      <th className="border p-3 text-left">
                        Mindestlohn (Euro/Stunde)
                      </th>
                      <th className="border p-3 text-left">Veränderung</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3 font-medium">2015</td>
                      <td className="border p-3">8,50 €</td>
                      <td className="border p-3">Einführung</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">2017</td>
                      <td className="border p-3">8,84 €</td>
                      <td className="border p-3">+0,34 €</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">2019</td>
                      <td className="border p-3">9,19 €</td>
                      <td className="border p-3">+0,35 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">2021</td>
                      <td className="border p-3">9,60 €</td>
                      <td className="border p-3">+0,41 €</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Okt. 2022</td>
                      <td className="border p-3">12,00 €</td>
                      <td className="border p-3">+2,40 € (Sonderanpassung)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">2024</td>
                      <td className="border p-3">12,41 €</td>
                      <td className="border p-3">+0,41 €</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">2025</td>
                      <td className="border p-3">12,82 €</td>
                      <td className="border p-3">+0,41 €</td>
                    </tr>
                    <tr className="bg-yellow-50 font-semibold">
                      <td className="border p-3">2026</td>
                      <td className="border p-3">13,95 €</td>
                      <td className="border p-3">+1,13 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Auswirkung auf die Minijob-Grenze
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Seit Oktober 2022 ist die Minijob-Grenze dynamisch an den
                Mindestlohn gekoppelt. Die Formel lautet: Mindestlohn x 40
                Stunden x 13 Wochen / 12 Monate. Daraus ergibt sich 2026
                eine Minijob-Grenze von <strong>556 Euro/Monat</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bei einem Mindestlohn von 13,95 Euro ergeben sich maximal
                ca. <strong>39,9 Arbeitsstunden pro Monat</strong> im Minijob
                (556 / 13,95 = 39,86). Das entspricht ungefähr 10 Stunden
                pro Woche. Wer mehr arbeiten möchte, rutscht in den
                Midijob-Bereich. Mehr Informationen finden Sie in unserem{' '}
                <Link
                  href="/lexikon/minijob"
                  className="text-[#DD0000] hover:underline"
                >
                  Lexikon-Eintrag zum Minijob
                </Link>
                .
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Midijob: Übergangsbereich 556,01 – 2.000 Euro
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wer zwischen 556,01 Euro und 2.000 Euro im Monat verdient,
                befindet sich im sogenannten Übergangsbereich (Midijob).
                Hier zahlen Arbeitnehmer reduzierte
                Sozialversicherungsbeiträge, die mit steigendem Einkommen
                progressiv bis auf den vollen Satz anwachsen. Der
                Arbeitgeber zahlt von Beginn an den vollen Beitrag.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Brutto-Netto bei Mindestlohn (Vollzeit 40h)
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-3 text-green-900">
                  Beispielrechnung: Mindestlohn Vollzeit, Steuerklasse 1,
                  keine Kinder, Bayern
                </h3>
                <ul className="text-sm text-green-900 space-y-2 list-disc list-inside">
                  <li>
                    <strong>Bruttogehalt:</strong> ca.{' '}
                    {bruttoVollzeit.toLocaleString('de-DE')} Euro/Monat
                  </li>
                  <li>
                    <strong>Sozialversicherung (AN-Anteil):</strong> ca. 500
                    Euro
                  </li>
                  <li>
                    <strong>Lohnsteuer:</strong> ca. 200 Euro
                  </li>
                  <li>
                    <strong>Nettogehalt:</strong> ca. 1.700 Euro/Monat
                  </li>
                </ul>
                <p className="text-sm text-green-900 mt-3">
                  Das entspricht einer Netto-Quote von etwa 70% des
                  Bruttogehalts. Berechnen Sie Ihren individuellen Nettolohn
                  mit unserem{' '}
                  <Link href="/" className="text-[#DD0000] hover:underline">
                    Brutto-Netto-Rechner
                  </Link>
                  .
                </p>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Wer ist vom Mindestlohn ausgenommen?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der gesetzliche Mindestlohn gilt nicht für alle
                Beschäftigungsverhältnisse. Folgende Gruppen sind
                ausgenommen:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside mb-4">
                <li>
                  <strong>Auszubildende:</strong> Für sie gilt die
                  Mindestausbildungsvergütung (2026: 682 Euro im 1. Jahr)
                </li>
                <li>
                  <strong>Langzeitarbeitslose:</strong> In den ersten 6
                  Monaten einer neuen Beschäftigung kann der Arbeitgeber
                  unter dem Mindestlohn zahlen
                </li>
                <li>
                  <strong>Pflichtpraktikanten:</strong> Praktika im Rahmen
                  einer Ausbildung oder eines Studiums
                </li>
                <li>
                  <strong>Freiwillige Praktikanten:</strong> Bei Praktika
                  unter 3 Monaten Dauer
                </li>
                <li>
                  <strong>Jugendliche unter 18:</strong> Ohne abgeschlossene
                  Berufsausbildung
                </li>
              </ul>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Mindestlohn-Kontrolle und Durchsetzung
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Für die Kontrolle des Mindestlohns ist der Zoll zuständig,
                genauer die Finanzkontrolle Schwarzarbeit (FKS). Bei
                Verstößen drohen Arbeitgebern Bußgelder von bis zu 500.000
                Euro. Arbeitnehmer haben zudem einen individuellen
                Nachzahlungsanspruch auf den Differenzbetrag zum
                Mindestlohn.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Arbeitgeber sind verpflichtet, die Arbeitszeiten von
                Minijobbern und Beschäftigten in bestimmten Branchen (z.B.
                Bau, Gastronomie, Gebäudereinigung) aufzuzeichnen und zwei
                Jahre aufzubewahren.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-blue-900">
                  Weiterführende Rechner
                </h3>
                <ul className="text-sm text-blue-900 space-y-2 list-disc list-inside">
                  <li>
                    <Link
                      href="/rechner/mindestlohn"
                      className="text-[#DD0000] hover:underline"
                    >
                      Mindestlohn-Rechner
                    </Link>{' '}
                    — Berechnen Sie Ihren Stundenlohn und Netto bei
                    Mindestlohn
                  </li>
                  <li>
                    <Link
                      href="/rechner/stundenlohn"
                      className="text-[#DD0000] hover:underline"
                    >
                      Stundenlohn-Rechner
                    </Link>{' '}
                    — Ermitteln Sie Ihren effektiven Stundenlohn
                  </li>
                  <li>
                    <Link
                      href="/rechner/teilzeit"
                      className="text-[#DD0000] hover:underline"
                    >
                      Teilzeit-Rechner
                    </Link>{' '}
                    — Nettogehalt bei reduzierter Arbeitszeit berechnen
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/blog/mindestlohn-2026-aenderungen"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
