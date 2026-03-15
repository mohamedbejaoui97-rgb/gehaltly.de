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
  title: 'Gehalt Kaufmann / Kauffrau 2026 - Brutto Netto | gehaltly.de',
  description:
    'Was verdient ein Kaufmann / eine Kauffrau 2026 in Deutschland? Durchschnittsgehalt 32.000-40.000 €/Jahr. Brutto-Netto-Berechnung für Bürokaufleute, Industriekaufleute und mehr.',
  alternates: {
    canonical: 'https://gehaltly.de/berufe/kaufmann/',
  },
  openGraph: {
    title: 'Gehalt Kaufmann / Kauffrau 2026 - Brutto Netto',
    description:
      'Was verdient ein Kaufmann 2026? Durchschnittsgehalt 32.000-40.000 €/Jahr mit Brutto-Netto-Berechnung.',
    url: 'https://gehaltly.de/berufe/kaufmann/',
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

const avgMonthly = 3000; // ~36.000/12

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
    question: 'Was verdient ein Kaufmann / eine Kauffrau in Deutschland?',
    answer:
      'Ein Kaufmann bzw. eine Kauffrau verdient in Deutschland durchschnittlich zwischen 32.000 und 40.000 Euro brutto pro Jahr (2.667-3.333 Euro pro Monat). Das Einstiegsgehalt liegt bei rund 28.000 Euro. Erfahrene Kaufleute mit Spezialisierung können 45.000 Euro und mehr verdienen.',
  },
  {
    question: 'Wie viel Netto bleibt einem Kaufmann vom Brutto?',
    answer:
      `Bei einem durchschnittlichen Bruttogehalt von ${avgMonthly.toLocaleString('de-DE')} Euro pro Monat (Steuerklasse 1) bleiben etwa ${results[0].result.netto.toLocaleString('de-DE')} Euro netto. Das entspricht einer Abgabenquote von rund ${Math.round((results[0].result.gesamtAbzuege / avgMonthly) * 100)}%.`,
  },
  {
    question: 'Welche kaufmännische Ausbildung bringt das höchste Gehalt?',
    answer:
      'Die bestbezahlten kaufmännischen Ausbildungen sind Industriekaufmann/-frau (38.000-45.000 €), Bankkaufmann/-frau (36.000-44.000 €) und Kaufmann/-frau für Versicherungen (35.000-42.000 €). Bürokaufleute und Einzelhandelskaufleute liegen mit 30.000-36.000 € etwas darunter.',
  },
  {
    question: 'Lohnt sich eine Weiterbildung zum Fachwirt oder Betriebswirt?',
    answer:
      'Ja, eine Weiterbildung zum Fachwirt (IHK) oder Betriebswirt (IHK) kann das Gehalt um 15-30% steigern. Fachwirte verdienen im Schnitt 42.000-50.000 Euro, Betriebswirte 48.000-60.000 Euro. Die Investition in die Weiterbildung amortisiert sich in der Regel innerhalb von 2-3 Jahren.',
  },
  {
    question: 'Wie entwickelt sich das Kaufmanns-Gehalt mit Berufserfahrung?',
    answer:
      'Berufseinsteiger starten bei ca. 28.000 Euro. Nach 3-5 Jahren sind 34.000-38.000 Euro realistisch. Mit 10+ Jahren Erfahrung und Führungsverantwortung sind 40.000-50.000 Euro erreichbar. Der Aufstieg in Positionen wie Teamleitung, Abteilungsleitung oder Controlling beschleunigt die Gehaltsentwicklung.',
  },
];

const occupationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Occupation',
  name: 'Kaufmann / Kauffrau',
  description:
    'Kaufleute arbeiten in Büro, Verwaltung, Handel und Industrie. Sie übernehmen Aufgaben in Buchhaltung, Einkauf, Vertrieb, Personal und Organisation.',
  occupationLocation: {
    '@type': 'Country',
    name: 'Deutschland',
  },
  estimatedSalary: {
    '@type': 'MonetaryAmountDistribution',
    name: 'Jahresgehalt',
    currency: 'EUR',
    median: 36000,
    percentile10: 28000,
    percentile90: 48000,
    duration: 'P1Y',
  },
};

export default function KaufmannPage() {
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
                  { label: 'Kaufmann / Kauffrau' },
                ]}
              />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Gehalt als Kaufmann / Kauffrau in Deutschland 2026
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Kaufmännische Berufe gehören zu den häufigsten Ausbildungsberufen in
                Deutschland. Das Durchschnittsgehalt liegt zwischen 32.000 und 40.000
                Euro brutto pro Jahr, variiert aber je nach Fachrichtung, Branche und
                Region erheblich. Hier erfahren Sie, was netto vom Brutto übrig bleibt.
              </p>

              {/* Salary Overview Card */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Gehaltsübersicht Kaufmann / Kauffrau</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Einstiegsgehalt</div>
                    <div className="text-xl font-bold text-gray-900">28.000 €</div>
                    <div className="text-xs text-gray-400">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="text-sm text-green-700">Durchschnitt</div>
                    <div className="text-xl font-bold text-green-800">32.000 - 40.000 €</div>
                    <div className="text-xs text-green-600">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Erfahren / Spezialisiert</div>
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
                Brutto-Netto-Rechnung für Kaufleute
              </h2>
              <p className="text-gray-600 mb-6">
                Basierend auf einem durchschnittlichen Bruttogehalt von{' '}
                <strong>{avgMonthly.toLocaleString('de-DE')} € pro Monat</strong>{' '}
                (~36.000 €/Jahr), keine Kirchensteuer, keine Kinder, gesetzlich
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
                KV-Zusatzbeitrag: 2,9%. Ohne Kirchensteuer.
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
                Einflussfaktoren auf das Kaufmanns-Gehalt
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Region / Bundesland</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    In Süddeutschland und den Ballungsräumen (München, Frankfurt,
                    Hamburg) liegen die Gehälter 10-15% über dem Durchschnitt. In den
                    neuen Bundesländern sind sie 10-20% niedriger, wobei die
                    Lebenshaltungskosten geringer ausfallen.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Berufserfahrung</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Berufseinsteiger starten bei rund 28.000 €. Nach 3-5 Jahren steigt
                    das Gehalt auf 34.000-38.000 €. Mit 10+ Jahren Erfahrung und
                    Aufstieg in Teamleitung oder Sachbearbeitung sind 40.000-50.000 €
                    möglich.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Branche & Unternehmen</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Die bestbezahlten Branchen für Kaufleute: Finanz- und
                    Versicherungsbranche, Chemie/Pharma und Automobilindustrie.
                    Großkonzerne und tarifgebundene Unternehmen zahlen oft deutlich
                    mehr als kleine Betriebe.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Fachrichtung & Weiterbildung</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Industriekaufleute und Bankkaufleute verdienen am meisten.
                    Weiterbildungen zum Fachwirt (IHK) oder Betriebswirt (IHK) können
                    das Gehalt um 15-30% steigern. Auch SAP-Kenntnisse und
                    Controlling-Skills sind gehaltsrelevant.
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
                      { land: 'Baden-Württemberg', gehalt: '39.000 €', diff: '+8%' },
                      { land: 'Bayern', gehalt: '38.500 €', diff: '+7%' },
                      { land: 'Hessen', gehalt: '38.000 €', diff: '+6%' },
                      { land: 'Hamburg', gehalt: '37.500 €', diff: '+4%' },
                      { land: 'Nordrhein-Westfalen', gehalt: '36.000 €', diff: '0%' },
                      { land: 'Niedersachsen', gehalt: '34.000 €', diff: '-6%' },
                      { land: 'Berlin', gehalt: '34.000 €', diff: '-6%' },
                      { land: 'Sachsen', gehalt: '30.000 €', diff: '-17%' },
                      { land: 'Mecklenburg-Vorpommern', gehalt: '29.000 €', diff: '-19%' },
                    ].map((row) => (
                      <tr key={row.land} className="border-b">
                        <td className="p-3">{row.land}</td>
                        <td className="p-3 text-right font-medium">{row.gehalt}</td>
                        <td
                          className={`p-3 text-right font-medium ${
                            row.diff.startsWith('+') ? 'text-green-600' : row.diff === '0%' ? 'text-gray-600' : 'text-red-600'
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
                  Kaufmännische Berufe bieten vielfältige Karrierewege und
                  Spezialisierungsmöglichkeiten. Die Digitalisierung verändert das
                  Berufsbild, eröffnet aber gleichzeitig neue Chancen:
                </p>
                <ul className="space-y-2 mt-4">
                  <li>
                    <strong>Weiterbildung zum Fachwirt/Betriebswirt:</strong> Die IHK-
                    Weiterbildungen sind der klassische Aufstiegsweg und bringen
                    Gehaltssprünge von 5.000-15.000 Euro pro Jahr.
                  </li>
                  <li>
                    <strong>Spezialisierung (Controlling, Einkauf, Personal):</strong>{' '}
                    Fachliche Vertiefung in gefragten Bereichen wie Controlling,
                    strategischer Einkauf oder HR-Management steigert den Marktwert.
                  </li>
                  <li>
                    <strong>Digitale Kompetenzen:</strong> SAP-Kenntnisse, Excel-
                    Expertise und Erfahrung mit ERP-Systemen sind zunehmend
                    gehaltsrelevant.
                  </li>
                  <li>
                    <strong>Studium neben dem Beruf:</strong> Ein berufsbegleitendes BWL-
                    Studium oder ein Wirtschaftsfachwirt kann die Karriere und das
                    Gehalt deutlich beschleunigen.
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
        <FAQSection faqs={faqs} title="Häufige Fragen zum Kaufmanns-Gehalt" />

        {/* Related Links */}
        <RelatedLinks currentHref="/berufe/kaufmann" />

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
