/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Link from 'next/link';
import { calculateGermanTax, DEFAULT_INPUT } from '@/lib/tax';
import type { Steuerklasse } from '@/lib/tax';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { TrendingUp, MapPin, Building2, GraduationCap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gehalt Krankenschwester 2026 - Brutto Netto Pflegefachkraft | gehaltly.de',
  description:
    'Was verdient eine Krankenschwester / Pflegefachkraft 2026? Durchschnittsgehalt 36.000-42.000 €/Jahr. Brutto-Netto-Berechnung, TVöD-Eingruppierung und Zulagen.',
  alternates: {
    canonical: 'https://gehaltly.de/berufe/krankenschwester/',
  },
  openGraph: {
    title: 'Gehalt Krankenschwester / Pflegefachkraft 2026 - Brutto Netto',
    description:
      'Was verdient eine Krankenschwester 2026? Durchschnittsgehalt 36.000-42.000 €/Jahr mit Brutto-Netto-Berechnung.',
    url: 'https://gehaltly.de/berufe/krankenschwester/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
      },
    ],
  },
};

const avgMonthly = 3250; // ~39.000/12

const results = ([1, 3, 5] as Steuerklasse[]).map((sk) => ({
  steuerklasse: sk,
  result: calculateGermanTax({
    ...DEFAULT_INPUT,
    bruttoeinkommen: avgMonthly,
    steuerklasse: sk,
  }),
}));

const faqs = [
  {
    question: 'Was verdient eine Krankenschwester in Deutschland?',
    answer:
      'Eine Krankenschwester bzw. Pflegefachkraft verdient in Deutschland durchschnittlich zwischen 36.000 und 42.000 Euro brutto pro Jahr (3.000-3.500 Euro pro Monat). Das Einstiegsgehalt liegt bei etwa 33.000 Euro. Mit Spezialisierungen (z.B. Intensivpflege) sind 45.000 Euro und mehr möglich.',
  },
  {
    question: 'Wie viel Netto bleibt einer Krankenschwester?',
    answer:
      `Bei einem durchschnittlichen Bruttogehalt von ${avgMonthly.toLocaleString('de-DE')} Euro pro Monat (Steuerklasse 1) bleiben etwa ${results[0].result.netto.toLocaleString('de-DE')} Euro netto. Durch Schichtzulagen (Nacht, Wochenende, Feiertag) kann das Nettogehalt deutlich steigen, da viele Zulagen steuerfrei oder steuerbegünstigt sind.`,
  },
  {
    question: 'Was verdient eine Krankenschwester nach TVöD?',
    answer:
      'Im öffentlichen Dienst (TVöD-P) werden Pflegefachkräfte in der Regel in Entgeltgruppe P7 bis P9 eingruppiert. Das entspricht einem Bruttogehalt von ca. 2.900-3.800 Euro pro Monat je nach Erfahrungsstufe. Intensivpflegekräfte und Fachkrankenpfleger können in P9-P12 eingruppiert werden.',
  },
  {
    question: 'Welche Zulagen bekommen Krankenschwestern?',
    answer:
      'Krankenschwestern erhalten häufig Zulagen für Nachtarbeit (ca. 15-25% Zuschlag), Wochenend- und Feiertagsdienste (25-35% Zuschlag), Bereitschaftsdienste sowie eine Pflegezulage. Diese Zulagen können das Gesamtgehalt um 200-500 Euro monatlich erhöhen. Viele dieser Zulagen sind steuerlich begünstigt.',
  },
  {
    question: 'Lohnt sich eine Spezialisierung in der Pflege finanziell?',
    answer:
      'Ja, Spezialisierungen zahlen sich deutlich aus. Fachkrankenpfleger für Intensivmedizin, Anästhesie oder OP-Pflege verdienen 10-20% mehr als Pflegefachkräfte ohne Spezialisierung. Auch Weiterbildungen zur Stationsleitung oder Pflegedienstleitung führen zu deutlich höheren Gehältern (45.000-55.000+ Euro).',
  },
];

const occupationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Occupation',
  name: 'Krankenschwester / Pflegefachkraft',
  description:
    'Pflegefachkräfte betreuen und versorgen Patienten in Krankenhäusern, Pflegeheimen und ambulanten Einrichtungen. Sie führen ärztliche Anordnungen aus, überwachen Vitalzeichen und unterstützen bei der Rehabilitation.',
  occupationLocation: {
    '@type': 'Country',
    name: 'Deutschland',
  },
  estimatedSalary: {
    '@type': 'MonetaryAmountDistribution',
    name: 'Jahresgehalt',
    currency: 'EUR',
    median: 39000,
    percentile10: 33000,
    percentile90: 48000,
    duration: 'P1Y',
  },
};

export default function KrankenschwesterPage() {
  return (
    <>
      <SchemaMarkup schema={occupationSchema} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs
                items={[
                  { label: 'Berufe', href: '/berufe' },
                  { label: 'Krankenschwester' },
                ]}
              />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Gehalt als Krankenschwester / Pflegefachkraft 2026
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Pflegefachkräfte sind das Rückgrat des deutschen Gesundheitssystems.
                Das Durchschnittsgehalt liegt bei 36.000 bis 42.000 Euro brutto pro
                Jahr. Durch Schichtzulagen, Spezialisierungen und den aktuellen
                Fachkräftemangel steigen die Gehälter stetig. Erfahren Sie hier, was
                netto übrig bleibt.
              </p>

              {/* Salary Overview Card */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Gehaltsübersicht Pflegefachkraft</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Einstiegsgehalt</div>
                    <div className="text-xl font-bold text-gray-900">33.000 €</div>
                    <div className="text-xs text-gray-400">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="text-sm text-green-700">Durchschnitt</div>
                    <div className="text-xl font-bold text-green-800">36.000 - 42.000 €</div>
                    <div className="text-xs text-green-600">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Mit Spezialisierung</div>
                    <div className="text-xl font-bold text-gray-900">45.000+ €</div>
                    <div className="text-xs text-gray-400">pro Jahr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brutto-Netto Table */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                Brutto-Netto-Rechnung für Pflegefachkräfte
              </h2>
              <p className="text-gray-600 mb-6">
                Basierend auf einem durchschnittlichen Bruttogehalt von{' '}
                <strong>{avgMonthly.toLocaleString('de-DE')} € pro Monat</strong>{' '}
                (~39.000 €/Jahr), keine Kirchensteuer, keine Kinder, gesetzlich
                versichert in Bayern:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 font-semibold">Steuerklasse</th>
                      <th className="text-right p-3 font-semibold">Brutto</th>
                      <th className="text-right p-3 font-semibold">Steuern</th>
                      <th className="text-right p-3 font-semibold">Sozialabgaben</th>
                      <th className="text-right p-3 font-semibold text-green-700">Netto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map(({ steuerklasse, result }) => (
                      <tr key={steuerklasse} className="border-b">
                        <td className="p-3 font-medium">Steuerklasse {steuerklasse}</td>
                        <td className="p-3 text-right">{result.brutto.toLocaleString('de-DE')} €</td>
                        <td className="p-3 text-right text-red-600">
                          -{result.gesamtSteuern.toLocaleString('de-DE')} €
                        </td>
                        <td className="p-3 text-right text-red-600">
                          -{result.gesamtSozialabgaben.toLocaleString('de-DE')} €
                        </td>
                        <td className="p-3 text-right font-bold text-green-700">
                          {result.netto.toLocaleString('de-DE')} €
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Berechnung mit dem gehaltly.de Brutto-Netto-Rechner 2026.
                KV-Zusatzbeitrag: 2,9%. Ohne Kirchensteuer. Zulagen (Nacht, Wochenende)
                sind hier nicht enthalten und können das Netto erhöhen.
              </p>

              <div className="mt-6">
                <Link
                  href={`/?brutto=${avgMonthly}`}
                  className="inline-flex items-center gap-2 text-[#DD0000] font-semibold hover:underline"
                >
                  Jetzt Ihr individuelles Nettogehalt berechnen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Einflussfaktoren */}
        <section className="py-10 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
                Einflussfaktoren auf das Pflege-Gehalt
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Region / Bundesland</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    In westdeutschen Bundesländern wie Bayern, Baden-Württemberg und
                    Hessen liegen die Pflegegehälter 10-15% über dem Bundesdurchschnitt.
                    In ostdeutschen Ländern sind sie niedriger, aber der Unterschied
                    schrumpft dank Tarifangleichung.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Berufserfahrung</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Berufseinsteiger starten bei rund 33.000 € pro Jahr. Nach 5-10
                    Jahren Berufserfahrung steigt das Gehalt auf 38.000-42.000 €.
                    Erfahrene Pflegekräfte mit Leitungsfunktion können 45.000-55.000 €
                    erreichen.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Arbeitgeber & Tarif</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Öffentliche Krankenhäuser (TVöD) und kirchliche Träger (AVR) zahlen
                    in der Regel besser als private Pflegeeinrichtungen. Der TVöD-P
                    bietet klare Gehaltsstrukturen mit automatischen Stufenaufstiegen
                    und garantierten Zulagen.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Spezialisierung</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Fachweiterbildungen in Intensivpflege, Anästhesie, OP-Pflege oder
                    Onkologie bringen 10-20% mehr Gehalt. Auch Weiterbildungen zur
                    Praxisanleitung oder Stationsleitung erhöhen das Einkommen
                    deutlich.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bundesland Vergleich */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                Gehaltsvergleich nach Bundesland
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 font-semibold">Bundesland</th>
                      <th className="text-right p-3 font-semibold">Durchschnitt/Jahr</th>
                      <th className="text-right p-3 font-semibold">vs. Bundesmittel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { land: 'Baden-Württemberg', gehalt: '43.000 €', diff: '+10%' },
                      { land: 'Bayern', gehalt: '42.000 €', diff: '+8%' },
                      { land: 'Hessen', gehalt: '41.000 €', diff: '+5%' },
                      { land: 'Hamburg', gehalt: '41.000 €', diff: '+5%' },
                      { land: 'Nordrhein-Westfalen', gehalt: '39.500 €', diff: '+1%' },
                      { land: 'Niedersachsen', gehalt: '38.000 €', diff: '-3%' },
                      { land: 'Berlin', gehalt: '37.500 €', diff: '-4%' },
                      { land: 'Sachsen', gehalt: '34.000 €', diff: '-13%' },
                      { land: 'Mecklenburg-Vorpommern', gehalt: '33.000 €', diff: '-15%' },
                    ].map((row) => (
                      <tr key={row.land} className="border-b">
                        <td className="p-3">{row.land}</td>
                        <td className="p-3 text-right font-medium">{row.gehalt}</td>
                        <td
                          className={`p-3 text-right font-medium ${
                            row.diff.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {row.diff}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Quelle: Auswertung basierend auf Daten des{' '}
                <a
                  href="https://entgeltatlas.arbeitsagentur.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  Entgeltatlas der Bundesagentur für Arbeit
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Karriereaussichten */}
        <section className="py-10 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                Karriereaussichten und Gehaltsentwicklung
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Der Pflegeberuf bietet langfristig sichere Beschäftigungsperspektiven.
                  Der Fachkräftemangel in der Pflege ist gravierend, was zu steigenden
                  Gehältern und verbesserten Arbeitsbedingungen führt. Aktuelle
                  Entwicklungen:
                </p>
                <ul className="space-y-2 mt-4">
                  <li>
                    <strong>Tariferhöhungen:</strong> Der TVöD-P wird regelmäßig
                    angepasst. Die jüngsten Tarifabschlüsse brachten deutliche
                    Gehaltserhöhungen.
                  </li>
                  <li>
                    <strong>Pflegebonus & Zulagen:</strong> Viele Arbeitgeber bieten
                    zusätzliche Prämien und höhere Zulagen, um Fachkräfte zu gewinnen.
                  </li>
                  <li>
                    <strong>Akademisierung:</strong> Mit einem Pflegestudium eröffnen
                    sich neue Karrierewege in Pflegewissenschaft, Management und Lehre.
                  </li>
                  <li>
                    <strong>Leiharbeit:</strong> Zeitarbeitsfirmen zahlen in der Pflege
                    oft 20-30% über Tarif, bieten aber weniger Sicherheit.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <Link
              href={`/?brutto=${avgMonthly}`}
              className="inline-flex items-center gap-2 bg-[#DD0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Jetzt Ihr individuelles Nettogehalt berechnen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} title="Häufige Fragen zum Pflege-Gehalt" />

        {/* Related Links */}
        <RelatedLinks currentHref="/berufe/krankenschwester" />

        {/* Byline */}
        <div className="container mx-auto px-4 pb-10">
          <div className="max-w-4xl mx-auto text-sm text-gray-500 border-t pt-6">
            Von gehaltly.de Redaktion | Aktualisiert: 1. März 2026
          </div>
        </div>
      </main>
    </>
  );
}
