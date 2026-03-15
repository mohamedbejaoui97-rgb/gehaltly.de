import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Durchschnittsgehalt Deutschland 2026 nach Branche & Region',
  description:
    'So viel verdienen Arbeitnehmer in Deutschland 2026: Durchschnittsgehalt nach Branche, Region und Geschlecht mit Brutto-Netto-Vergleich.',
  alternates: {
    canonical: 'https://gehaltly.de/blog/durchschnittsgehalt-deutschland/',
  },
  openGraph: {
    title: 'Durchschnittsgehalt Deutschland 2026 nach Branche & Region',
    description:
      'Durchschnittsgehalt in Deutschland 2026 aufgeschlüsselt nach Branche, Region und Geschlecht.',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Durchschnittsgehalt Deutschland 2026 - gehaltly.de',
      },
    ],
  },
};

const faqs = [
  {
    question: 'Wie hoch ist das Durchschnittsgehalt in Deutschland 2026?',
    answer:
      'Das durchschnittliche Bruttogehalt in Deutschland beträgt 2026 ca. 44.400 € pro Jahr (3.700 € pro Monat). Der Median liegt bei ca. 40.000 €/Jahr (3.333 €/Monat), was bedeutet, dass die Hälfte aller Arbeitnehmer weniger verdient.',
  },
  {
    question: 'Welche Branche zahlt am besten?',
    answer:
      'Die IT- und Tech-Branche führt mit einem Durchschnittsgehalt von ca. 60.000 €/Jahr, gefolgt von Finanzen und Versicherungen (56.000 €) und der Industrie (48.000 €). Am unteren Ende liegen Gastronomie (28.000 €) und Einzelhandel (35.000 €).',
  },
  {
    question: 'Wie groß ist der Gender Pay Gap in Deutschland?',
    answer:
      'Der unbereinigte Gender Pay Gap in Deutschland beträgt ca. 18 %. Frauen verdienen durchschnittlich 18 % weniger als Männer. Bereinigt um Faktoren wie Branche, Position und Arbeitszeit liegt die Lücke bei ca. 6 %.',
  },
  {
    question: 'Wo verdient man in Deutschland am meisten?',
    answer:
      'Die höchsten Gehälter werden in München (+20 % über Durchschnitt), Hamburg (+15 %) und Düsseldorf/Frankfurt (+10 %) gezahlt. In ostdeutschen Städten wie Dresden oder Leipzig liegen die Gehälter 10–15 % unter dem Bundesdurchschnitt.',
  },
  {
    question: 'Wie viel Netto bleibt vom Durchschnittsgehalt?',
    answer:
      'Bei einem Bruttogehalt von 3.700 €/Monat (Steuerklasse 1, keine Kinder, keine Kirchensteuer, Bayern) bleiben ca. 2.450 € netto übrig. Das entspricht einer Abgabenquote von etwa 34 %. Nutzen Sie unseren Brutto-Netto-Rechner für Ihre individuelle Berechnung.',
  },
];

export default function DurchschnittsgehaltArtikel() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Durchschnittsgehalt Deutschland 2026 nach Branche',
    description:
      'So viel verdienen Arbeitnehmer in Deutschland durchschnittlich – aufgeschlüsselt nach Branche, Region und Geschlecht.',
    image: 'https://gehaltly.de/og-image.png',
    datePublished: '2026-02-28',
    dateModified: '2026-03-15',
    author: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      url: 'https://gehaltly.de',
    },
    publisher: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      logo: 'https://gehaltly.de/logo.png',
    },
  };

  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Durchschnittsgehalt Deutschland' },
          ]}
        />
      </div>

      <article className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Durchschnittsgehalt Deutschland 2026 nach Branche
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-8">
              <span>
                Von <strong>gehaltly.de</strong> Redaktion
              </span>
              <span>|</span>
              <time dateTime="2026-02-28">28. Februar 2026</time>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-lg leading-relaxed">
                Wie viel verdient man eigentlich in Deutschland? Diese Frage
                beschäftigt Arbeitnehmer bei Gehaltsverhandlungen, Jobwechseln
                und Karriereplanungen. Wir haben die aktuellen Zahlen für 2026
                zusammengestellt – aufgeschlüsselt nach Branche, Region und
                Geschlecht.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Durchschnittsgehalt und Median 2026
              </h2>
              <p>
                Das <strong>durchschnittliche Bruttogehalt</strong> in Deutschland
                beträgt 2026 ca. <strong>44.400 € pro Jahr</strong> (3.700 € pro
                Monat). Allerdings verzerren Spitzengehälter den Durchschnitt
                nach oben.
              </p>
              <p>
                Aussagekräftiger ist der <strong>Median</strong>: Er liegt bei ca.{' '}
                <strong>40.000 € pro Jahr</strong> (3.333 € pro Monat). Das
                bedeutet: Genau die Hälfte aller Vollzeit-Arbeitnehmer verdient
                mehr, die andere Hälfte weniger. Wenn Sie über dem Median liegen,
                verdienen Sie besser als die Mehrheit.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="font-semibold mb-2">Durchschnitt vs. Median:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Durchschnitt (Mittelwert):</strong> 44.400 €/Jahr
                    (3.700 €/Monat)
                  </li>
                  <li>
                    <strong>Median (Mitte):</strong> 40.000 €/Jahr (3.333 €/Monat)
                  </li>
                  <li>
                    Die Differenz zeigt: Wenige Spitzenverdiener ziehen den
                    Durchschnitt nach oben.
                  </li>
                </ul>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Gehalt nach Branche
              </h2>
              <p>
                Die Gehaltsunterschiede zwischen Branchen sind enorm. Während
                IT-Fachkräfte und Finanzexperten deutlich überdurchschnittlich
                verdienen, liegen Gastronomie und Einzelhandel weit darunter.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border px-4 py-3 text-left font-semibold">
                        Branche
                      </th>
                      <th className="border px-4 py-3 text-left font-semibold">
                        Ø Jahresgehalt (brutto)
                      </th>
                      <th className="border px-4 py-3 text-left font-semibold">
                        Ø Monatsgehalt (brutto)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-3">IT &amp; Tech</td>
                      <td className="border px-4 py-3 font-semibold">60.000 €</td>
                      <td className="border px-4 py-3">5.000 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border px-4 py-3">
                        Finanzen &amp; Versicherungen
                      </td>
                      <td className="border px-4 py-3 font-semibold">56.000 €</td>
                      <td className="border px-4 py-3">4.667 €</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3">
                        Industrie &amp; Produktion
                      </td>
                      <td className="border px-4 py-3 font-semibold">48.000 €</td>
                      <td className="border px-4 py-3">4.000 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border px-4 py-3">Gesundheit &amp; Pflege</td>
                      <td className="border px-4 py-3 font-semibold">42.000 €</td>
                      <td className="border px-4 py-3">3.500 €</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3">Handel &amp; Logistik</td>
                      <td className="border px-4 py-3 font-semibold">35.000 €</td>
                      <td className="border px-4 py-3">2.917 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border px-4 py-3">
                        Gastronomie &amp; Tourismus
                      </td>
                      <td className="border px-4 py-3 font-semibold">28.000 €</td>
                      <td className="border px-4 py-3">2.333 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">
                Quelle: Eigene Zusammenstellung auf Basis von{' '}
                <a
                  href="https://www.destatis.de/DE/Themen/Arbeit/Verdienste/_inhalt.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  destatis.de
                </a>{' '}
                und Branchenberichten.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Gehalt nach Region
              </h2>
              <p>
                Auch der Standort beeinflusst das Gehalt erheblich. Süddeutsche
                Großstädte zahlen deutlich mehr als ostdeutsche Regionen – wobei
                die Lebenshaltungskosten ebenfalls höher sind.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border px-4 py-3 text-left font-semibold">
                        Region / Stadt
                      </th>
                      <th className="border px-4 py-3 text-left font-semibold">
                        Abweichung vom Bundesdurchschnitt
                      </th>
                      <th className="border px-4 py-3 text-left font-semibold">
                        Ø Jahresgehalt (geschätzt)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-3">München</td>
                      <td className="border px-4 py-3 font-semibold text-green-700">
                        +20 %
                      </td>
                      <td className="border px-4 py-3">53.280 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border px-4 py-3">Hamburg</td>
                      <td className="border px-4 py-3 font-semibold text-green-700">
                        +15 %
                      </td>
                      <td className="border px-4 py-3">51.060 €</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3">Düsseldorf / Frankfurt</td>
                      <td className="border px-4 py-3 font-semibold text-green-700">
                        +10 %
                      </td>
                      <td className="border px-4 py-3">48.840 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border px-4 py-3">Berlin</td>
                      <td className="border px-4 py-3 font-semibold text-green-700">
                        +5 %
                      </td>
                      <td className="border px-4 py-3">46.620 €</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3">Dresden</td>
                      <td className="border px-4 py-3 font-semibold text-red-700">
                        -10 %
                      </td>
                      <td className="border px-4 py-3">39.960 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border px-4 py-3">Leipzig</td>
                      <td className="border px-4 py-3 font-semibold text-red-700">
                        -15 %
                      </td>
                      <td className="border px-4 py-3">37.740 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Gender Pay Gap: 18 % Unterschied
              </h2>
              <p>
                Der unbereinigte Gender Pay Gap in Deutschland beträgt weiterhin
                ca. <strong>18 %</strong>. Frauen verdienen im Durchschnitt
                18 % weniger als Männer. Deutschland liegt damit über dem
                EU-Durchschnitt von ca. 13 %.
              </p>
              <p>
                Bereinigt man die Unterschiede um Faktoren wie Branche, Position,
                Qualifikation und Arbeitszeit, verbleibt ein bereinigter Gender
                Pay Gap von ca. <strong>6 %</strong>. Das bedeutet: Auch bei
                gleicher Tätigkeit und Qualifikation verdienen Frauen im Schnitt
                6 % weniger.
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Branchen mit geringem Gap:</strong> Öffentlicher Dienst,
                  IT (bei gleicher Position)
                </li>
                <li>
                  <strong>Branchen mit hohem Gap:</strong> Finanzen, Vertrieb,
                  Führungspositionen
                </li>
              </ul>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Was bleibt netto vom Durchschnittsgehalt?
              </h2>
              <p>
                Bei einem durchschnittlichen Bruttogehalt von 3.700 €/Monat
                (Steuerklasse 1, keine Kinder, keine Kirchensteuer) bleiben
                nach Abzug von Lohnsteuer und Sozialversicherungsbeiträgen ca.{' '}
                <strong>2.450 € netto</strong> übrig.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="font-semibold mb-2">
                  Brutto-Netto für 3.700 € (Steuerklasse 1, ledig, keine Kinder):
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Lohnsteuer: ca. 430 €</li>
                  <li>Solidaritätszuschlag: 0 € (entfällt für die meisten)</li>
                  <li>Krankenversicherung (inkl. Zusatzbeitrag): ca. 320 €</li>
                  <li>Pflegeversicherung: ca. 80 €</li>
                  <li>Rentenversicherung: ca. 344 €</li>
                  <li>Arbeitslosenversicherung: ca. 48 €</li>
                  <li>
                    <strong>Netto: ca. 2.450 €</strong>
                  </li>
                </ul>
              </div>

              <p>
                Berechnen Sie Ihr individuelles Nettoeinkommen mit unserem{' '}
                <Link href="/" className="text-[#DD0000] hover:underline">
                  Brutto-Netto-Rechner 2026
                </Link>
                . Gehaltsvergleiche nach Beruf finden Sie in unserem{' '}
                <Link href="/berufe" className="text-[#DD0000] hover:underline">
                  Berufe-Bereich
                </Link>
                .
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Fazit: Wo stehen Sie?
              </h2>
              <p>
                Das Durchschnittsgehalt ist ein nützlicher Orientierungspunkt,
                aber kein Maßstab für Ihren individuellen Wert. Branche,
                Qualifikation, Erfahrung und Verhandlungsgeschick bestimmen Ihr
                Gehalt mindestens ebenso stark wie der Standort. Nutzen Sie die
                Branchendaten als Grundlage für Ihre nächste Gehaltsverhandlung
                und prüfen Sie mit unseren Rechnern, was netto für Sie übrig
                bleibt.
              </p>
            </div>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} />
      <RelatedLinks
        currentHref="/blog/durchschnittsgehalt-deutschland"
        count={6}
        title="Passende Rechner"
      />
    </>
  );
}
