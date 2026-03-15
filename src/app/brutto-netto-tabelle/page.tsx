import { Metadata } from 'next';
import Link from 'next/link';
import { calculateGermanTax, DEFAULT_INPUT } from '@/lib/tax';
import type { Steuerklasse } from '@/lib/tax';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Brutto-Netto-Tabelle 2026 - Alle Steuerklassen im Vergleich',
  description:
    'Brutto-Netto-Tabelle 2026: Nettolohn f\u00fcr alle 6 Steuerklassen auf einen Blick. Monatliche & j\u00e4hrliche Werte von 1.000 bis 100.000 \u20ac.',
  alternates: {
    canonical: 'https://gehaltly.de/brutto-netto-tabelle/',
  },
  openGraph: {
    title: 'Brutto-Netto-Tabelle 2026 - Alle Steuerklassen im Vergleich',
    description:
      'Brutto-Netto-Tabelle 2026: Nettolohn f\u00fcr alle 6 Steuerklassen auf einen Blick.',
    url: 'https://gehaltly.de/brutto-netto-tabelle/',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 446,
        alt: 'gehaltly.de - Gehaltsrechner f\u00fcr Deutschland',
      },
    ],
  },
};

const steuerklassen: Steuerklasse[] = [1, 2, 3, 4, 5, 6];

function formatEuro(value: number): string {
  return value.toLocaleString('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }) + ' \u20ac';
}

function computeNetto(
  amount: number,
  steuerklasse: Steuerklasse,
  zeitraum: 'monat' | 'jahr'
): number {
  const result = calculateGermanTax({
    ...DEFAULT_INPUT,
    bruttoeinkommen: amount,
    steuerklasse,
    abrechnungszeitraum: zeitraum,
  });
  return zeitraum === 'monat' ? result.netto : result.netto * 12;
}

// Monthly amounts: 1000 to 10000 in 500 steps
const monthlyAmounts: number[] = [];
for (let i = 1000; i <= 10000; i += 500) {
  monthlyAmounts.push(i);
}

// Annual amounts: 15000 to 100000 in 5000 steps
const annualAmounts: number[] = [];
for (let i = 15000; i <= 100000; i += 5000) {
  annualAmounts.push(i);
}

// Pre-compute all monthly netto values
const monthlyData = monthlyAmounts.map((amount) => ({
  brutto: amount,
  netto: steuerklassen.map((sk) => computeNetto(amount, sk, 'monat')),
}));

// Pre-compute all annual netto values
const annualData = annualAmounts.map((amount) => ({
  brutto: amount,
  netto: steuerklassen.map((sk) => computeNetto(amount, sk, 'jahr')),
}));

const faqs = [
  {
    question: 'Was ist eine Brutto-Netto-Tabelle?',
    answer:
      'Eine Brutto-Netto-Tabelle zeigt auf einen Blick, wie viel Nettolohn bei verschiedenen Bruttogehältern und Steuerklassen übrig bleibt. Sie berücksichtigt Lohnsteuer, Solidaritätszuschlag und alle Sozialversicherungsbeiträge (Renten-, Kranken-, Pflege- und Arbeitslosenversicherung) nach den aktuellen Werten für 2026.',
  },
  {
    question: 'Welche Steuerklasse gilt für mich?',
    answer:
      'Steuerklasse 1 gilt für Ledige und Geschiedene. Steuerklasse 2 ist für Alleinerziehende mit Entlastungsbetrag. Steuerklasse 3 wählen Verheiratete mit höherem Einkommen (Partner in Klasse 5). Steuerklasse 4 gilt für Verheiratete mit ähnlichem Einkommen. Steuerklasse 5 ist das Gegenstück zu Klasse 3. Steuerklasse 6 gilt für Zweit- und Nebenjobs.',
  },
  {
    question: 'Wie genau sind die Werte in der Tabelle?',
    answer:
      'Die Werte werden mit dem offiziellen Lohnsteuer-Algorithmus 2026 berechnet und berücksichtigen den Grundfreibetrag von 12.348 \u20ac sowie alle aktuellen Sozialversicherungsbeiträge. Die Berechnung basiert auf Steuerklasse ohne Kirchensteuer, ohne Kinderfreibeträge, gesetzlicher Krankenversicherung mit 2,9% Zusatzbeitrag und dem Bundesland Bayern. Individuelle Abweichungen sind möglich.',
  },
  {
    question: 'Warum unterscheidet sich mein Netto von der Tabelle?',
    answer:
      'Die Tabelle zeigt Standardwerte ohne Kirchensteuer, ohne Kinder und ohne zusätzliche Freibeträge. Ihr tatsächliches Netto kann abweichen durch: Kirchensteuerpflicht (8-9% der Lohnsteuer), Kinderfreibeträge, ein anderes Bundesland, einen anderen KV-Zusatzbeitrag Ihrer Krankenkasse, Steuerfreibeträge oder einen geldwerten Vorteil (z.B. Firmenwagen).',
  },
  {
    question: 'Gilt die Tabelle auch für 2025?',
    answer:
      'Nein, diese Tabelle gilt ausschließlich für das Steuerjahr 2026. Für 2025 galten andere Werte, insbesondere ein niedrigerer Grundfreibetrag von 11.694 \u20ac und teilweise andere Beitragsbemessungsgrenzen. Nutzen Sie für genaue Berechnungen unseren Brutto-Netto-Rechner.',
  },
];

const tableSchema = {
  '@context': 'https://schema.org',
  '@type': 'Table',
  name: 'Brutto-Netto-Tabelle 2026',
  description:
    'Monatliche Nettolöhne für Bruttogehälter von 1.000 \u20ac bis 10.000 \u20ac in allen 6 Steuerklassen, berechnet nach dem Lohnsteuer-Algorithmus 2026.',
  about: {
    '@type': 'Thing',
    name: 'Brutto-Netto-Umrechnung Deutschland 2026',
  },
};

export default function BruttoNettoTabellePage() {
  return (
    <>
      <SchemaMarkup schema={tableSchema} />

      <main className="min-h-screen bg-white">
        {/* Hero / Intro */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs
                items={[{ label: 'Brutto-Netto-Tabelle 2026' }]}
              />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Brutto-Netto-Tabelle 2026
              </h1>

              <p className="text-sm text-gray-500 mb-6">
                Von gehaltly.de Redaktion | Aktualisiert: 1. M&auml;rz 2026
              </p>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Wie viel Netto bleibt von Ihrem Bruttogehalt? Unsere
                  Brutto-Netto-Tabelle 2026 zeigt Ihnen auf einen Blick die
                  Nettowerte f&uuml;r alle 6 Steuerklassen &ndash; berechnet nach dem
                  aktuellen Lohnsteuer-Algorithmus mit dem{' '}
                  <strong>Grundfreibetrag von 12.348 &euro;</strong> und allen
                  g&uuml;ltigen Sozialversicherungsbeitr&auml;gen.
                </p>
                <p>
                  Die Tabelle basiert auf folgenden Annahmen: gesetzliche
                  Krankenversicherung mit 2,9% Zusatzbeitrag, keine
                  Kirchensteuer, keine Kinder, Bundesland Bayern. F&uuml;r eine
                  individuelle Berechnung nutzen Sie unseren{' '}
                  <Link
                    href="/"
                    className="text-[#DD0000] hover:underline font-medium"
                  >
                    Brutto-Netto-Rechner
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Table */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                Monatliche Brutto-Netto-Tabelle 2026
              </h2>
              <p className="text-gray-600 mb-6">
                Nettolohn pro Monat f&uuml;r Bruttogehälter von 1.000 &euro; bis
                10.000 &euro; in allen Steuerklassen.
              </p>

              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full border-collapse text-sm md:text-base min-w-[700px]">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="sticky left-0 bg-gray-900 z-10 px-3 py-3 text-left font-semibold whitespace-nowrap">
                        Brutto/Monat
                      </th>
                      {steuerklassen.map((sk) => (
                        <th
                          key={sk}
                          className="px-3 py-3 text-right font-semibold whitespace-nowrap"
                        >
                          Klasse {sk}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyData.map((row, idx) => (
                      <tr
                        key={row.brutto}
                        className={
                          idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }
                      >
                        <td className="sticky left-0 z-10 px-3 py-2.5 font-semibold whitespace-nowrap border-r border-gray-200"
                          style={{ backgroundColor: idx % 2 === 0 ? 'white' : 'rgb(249 250 251)' }}
                        >
                          {formatEuro(row.brutto)}
                        </td>
                        {row.netto.map((netto, skIdx) => (
                          <td
                            key={skIdx}
                            className="px-3 py-2.5 text-right tabular-nums whitespace-nowrap"
                          >
                            {formatEuro(Math.round(netto))}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Alle Angaben ohne Gew&auml;hr. Berechnung: GKV mit 2,9%
                Zusatzbeitrag, keine Kirchensteuer, keine Kinder, Bayern.
                Quelle:{' '}
                <a
                  href="https://www.bundesfinanzministerium.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  Bundesfinanzministerium
                </a>
                ,{' '}
                <a
                  href="https://www.gesetze-im-internet.de/estg/__32a.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  EStG &sect;32a
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* How to read the table */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                So lesen Sie die Brutto-Netto-Tabelle
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Suchen Sie in der linken Spalte Ihr monatliches Bruttogehalt.
                  Lesen Sie dann in der Spalte Ihrer Steuerklasse den
                  entsprechenden Nettobetrag ab. Beispiel: Bei{' '}
                  <strong>3.000 &euro; brutto</strong> in{' '}
                  <strong>Steuerklasse 1</strong> erhalten Sie ca.{' '}
                  <strong>
                    {formatEuro(
                      Math.round(computeNetto(3000, 1, 'monat'))
                    )}{' '}
                    netto
                  </strong>
                  .
                </p>
                <p>
                  Beachten Sie: Die Werte gelten f&uuml;r das Steuerjahr 2026 mit
                  dem aktuellen Grundfreibetrag von 12.348 &euro;. Individuelle
                  Faktoren wie Kirchensteuer, Kinderfreibetr&auml;ge oder ein
                  anderer KV-Zusatzbeitrag ver&auml;ndern das Ergebnis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Steuerklasse overview */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                &Uuml;bersicht der Steuerklassen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    klasse: '1',
                    titel: 'Steuerklasse 1',
                    beschreibung:
                      'Ledige, Geschiedene, Verwitwete (ab dem \u00fcbern\u00e4chsten Jahr)',
                  },
                  {
                    klasse: '2',
                    titel: 'Steuerklasse 2',
                    beschreibung:
                      'Alleinerziehende mit Entlastungsbetrag',
                  },
                  {
                    klasse: '3',
                    titel: 'Steuerklasse 3',
                    beschreibung:
                      'Verheiratete (h\u00f6heres Einkommen), Partner in Klasse 5',
                  },
                  {
                    klasse: '4',
                    titel: 'Steuerklasse 4',
                    beschreibung:
                      'Verheiratete mit \u00e4hnlichem Einkommen',
                  },
                  {
                    klasse: '5',
                    titel: 'Steuerklasse 5',
                    beschreibung:
                      'Verheiratete (niedrigeres Einkommen), Partner in Klasse 3',
                  },
                  {
                    klasse: '6',
                    titel: 'Steuerklasse 6',
                    beschreibung:
                      'Zweit- und Nebenjobs, kein Grundfreibetrag',
                  },
                ].map((item) => (
                  <div
                    key={item.klasse}
                    className="border border-gray-200 rounded-lg p-4 hover:border-[#DD0000] transition-colors"
                  >
                    <div className="text-lg font-bold text-[#DD0000] mb-1">
                      {item.titel}
                    </div>
                    <p className="text-sm text-gray-600">
                      {item.beschreibung}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Annual Table */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                J&auml;hrliche Brutto-Netto-Tabelle 2026
              </h2>
              <p className="text-gray-600 mb-6">
                Jahresnetto f&uuml;r Jahresbruttogehälter von 15.000 &euro; bis
                100.000 &euro; in allen Steuerklassen.
              </p>

              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full border-collapse text-sm md:text-base min-w-[700px]">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="sticky left-0 bg-gray-900 z-10 px-3 py-3 text-left font-semibold whitespace-nowrap">
                        Brutto/Jahr
                      </th>
                      {steuerklassen.map((sk) => (
                        <th
                          key={sk}
                          className="px-3 py-3 text-right font-semibold whitespace-nowrap"
                        >
                          Klasse {sk}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {annualData.map((row, idx) => (
                      <tr
                        key={row.brutto}
                        className={
                          idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }
                      >
                        <td className="sticky left-0 z-10 px-3 py-2.5 font-semibold whitespace-nowrap border-r border-gray-200"
                          style={{ backgroundColor: idx % 2 === 0 ? 'white' : 'rgb(249 250 251)' }}
                        >
                          {formatEuro(row.brutto)}
                        </td>
                        {row.netto.map((netto, skIdx) => (
                          <td
                            key={skIdx}
                            className="px-3 py-2.5 text-right tabular-nums whitespace-nowrap"
                          >
                            {formatEuro(Math.round(netto))}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Alle Angaben ohne Gew&auml;hr. Berechnung: GKV mit 2,9%
                Zusatzbeitrag, keine Kirchensteuer, keine Kinder, Bayern.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} title="H&auml;ufig gestellte Fragen zur Brutto-Netto-Tabelle" />

        {/* CTA to calculator */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Individuelle Berechnung gew&uuml;nscht?
              </h2>
              <p className="text-gray-600 mb-6">
                F&uuml;r eine exakte Berechnung mit Ihren pers&ouml;nlichen Daten
                &ndash; inklusive Kirchensteuer, Kinderfreibetr&auml;gen und
                individuellem KV-Zusatzbeitrag.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#DD0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Zum detaillierten Brutto-Netto-Rechner &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <RelatedLinks currentHref="/brutto-netto-tabelle" count={6} />
      </main>
    </>
  );
}
