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
  title: 'Gehalt Ingenieur 2026 - Brutto Netto Berechnung | gehaltly.de',
  description:
    'Was verdient ein Ingenieur 2026 in Deutschland? Durchschnittsgehalt 58.000-72.000 €/Jahr. Brutto-Netto-Berechnung, Einflussfaktoren und Gehaltsvergleich nach Bundesland.',
  alternates: {
    canonical: 'https://gehaltly.de/berufe/ingenieur/',
  },
  openGraph: {
    title: 'Gehalt Ingenieur 2026 - Brutto Netto Berechnung',
    description:
      'Was verdient ein Ingenieur 2026 in Deutschland? Durchschnittsgehalt 58.000-72.000 €/Jahr mit Brutto-Netto-Berechnung.',
    url: 'https://gehaltly.de/berufe/ingenieur/',
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

const avgMonthly = 5417; // ~65.000/12

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
    question: 'Was verdient ein Ingenieur durchschnittlich in Deutschland?',
    answer:
      'Ein Ingenieur verdient in Deutschland durchschnittlich zwischen 58.000 und 72.000 Euro brutto pro Jahr (4.833-6.000 Euro pro Monat). Das Einstiegsgehalt liegt bei etwa 48.000 Euro, während erfahrene Senior-Ingenieure 80.000 Euro und mehr verdienen können.',
  },
  {
    question: 'Wie viel Netto bleibt einem Ingenieur vom Brutto?',
    answer:
      `Bei einem durchschnittlichen Bruttogehalt von ${avgMonthly.toLocaleString('de-DE')} Euro pro Monat (Steuerklasse 1, keine Kirchensteuer, keine Kinder) bleiben etwa ${results[0].result.netto.toLocaleString('de-DE')} Euro netto. Das entspricht einer Abgabenquote von rund ${Math.round((results[0].result.gesamtAbzuege / avgMonthly) * 100)}%.`,
  },
  {
    question: 'Welche Ingenieur-Fachrichtung verdient am besten?',
    answer:
      'Die bestbezahlten Ingenieur-Fachrichtungen sind Fahrzeugtechnik, Chemieingenieurwesen und Wirtschaftsingenieurwesen mit Durchschnittsgehältern von 70.000-85.000 Euro. Auch Ingenieure in der Halbleiterindustrie und im Bereich Künstliche Intelligenz erzielen überdurchschnittliche Gehälter.',
  },
  {
    question: 'Wie entwickelt sich das Ingenieur-Gehalt mit Berufserfahrung?',
    answer:
      'Das Gehalt steigt mit zunehmender Erfahrung deutlich: Berufseinsteiger verdienen rund 48.000 Euro, nach 5-10 Jahren sind 65.000-75.000 Euro realistisch. Senior-Ingenieure und Projektleiter können 80.000-100.000 Euro und mehr erreichen. Der größte Gehaltssprung erfolgt in den ersten 5 Berufsjahren.',
  },
  {
    question: 'Verdienen Ingenieure in Süddeutschland mehr?',
    answer:
      'Ja, in Bayern und Baden-Württemberg liegen die Ingenieurgehälter durchschnittlich 10-15% über dem Bundesdurchschnitt, bedingt durch die starke Automobil- und Maschinenbauindustrie. In den neuen Bundesländern sind die Gehälter hingegen 15-20% niedriger, wobei die Lebenshaltungskosten ebenfalls geringer sind.',
  },
];

const occupationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Occupation',
  name: 'Ingenieur',
  description:
    'Ingenieure planen, entwickeln und überwachen technische Projekte in Bereichen wie Maschinenbau, Elektrotechnik, Bauingenieurwesen und Fahrzeugtechnik.',
  occupationLocation: {
    '@type': 'Country',
    name: 'Deutschland',
  },
  estimatedSalary: {
    '@type': 'MonetaryAmountDistribution',
    name: 'Jahresgehalt',
    currency: 'EUR',
    median: 65000,
    percentile10: 48000,
    percentile90: 85000,
    duration: 'P1Y',
  },
};

export default function IngenieurPage() {
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
                  { label: 'Ingenieur' },
                ]}
              />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Gehalt als Ingenieur in Deutschland 2026
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Ingenieure gehören zu den bestbezahlten Berufsgruppen in Deutschland.
                Mit einem Durchschnittsgehalt von 58.000 bis 72.000 Euro brutto pro
                Jahr und hervorragenden Karriereaussichten ist der Ingenieurberuf
                attraktiv wie nie. Hier erfahren Sie, was netto vom Brutto bleibt.
              </p>

              {/* Salary Overview Card */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Gehaltsübersicht Ingenieur</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Einstiegsgehalt</div>
                    <div className="text-xl font-bold text-gray-900">48.000 €</div>
                    <div className="text-xs text-gray-400">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="text-sm text-green-700">Durchschnitt</div>
                    <div className="text-xl font-bold text-green-800">58.000 - 72.000 €</div>
                    <div className="text-xs text-green-600">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Senior / Führung</div>
                    <div className="text-xl font-bold text-gray-900">80.000+ €</div>
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
                Brutto-Netto-Rechnung für Ingenieure
              </h2>
              <p className="text-gray-600 mb-6">
                Basierend auf einem durchschnittlichen Bruttogehalt von{' '}
                <strong>{avgMonthly.toLocaleString('de-DE')} € pro Monat</strong>{' '}
                (~65.000 €/Jahr), keine Kirchensteuer, keine Kinder, gesetzlich
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
                Einflussfaktoren auf das Ingenieur-Gehalt
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Region / Bundesland</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    In Bayern und Baden-Württemberg verdienen Ingenieure 10-15% mehr
                    als im Bundesdurchschnitt. Die Automobilindustrie in Stuttgart und
                    München treibt die Gehälter. In den neuen Bundesländern liegen die
                    Gehälter 15-20% niedriger.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Berufserfahrung</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Mit 0-2 Jahren Erfahrung starten Ingenieure bei rund 48.000 €.
                    Nach 5-10 Jahren sind 65.000-75.000 € realistisch. Ab 15 Jahren
                    Erfahrung und in Führungspositionen sind 80.000-100.000+ €
                    erreichbar.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Unternehmensgröße</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Großkonzerne (DAX-Unternehmen) zahlen im Schnitt 15-25% mehr als
                    KMU. Allerdings bieten kleinere Unternehmen oft schnellere
                    Aufstiegschancen und mehr Verantwortung. Tarifgebundene Unternehmen
                    (IG Metall) zahlen oft überdurchschnittlich.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Fachrichtung & Branche</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Die bestbezahlten Fachrichtungen: Fahrzeugtechnik (72.000 €),
                    Chemieingenieurwesen (70.000 €) und Wirtschaftsingenieurwesen
                    (68.000 €). Die Halbleiter- und Pharmabranche zahlt ebenfalls
                    überdurchschnittlich.
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
                      { land: 'Baden-Württemberg', gehalt: '72.000 €', diff: '+12%' },
                      { land: 'Bayern', gehalt: '70.000 €', diff: '+8%' },
                      { land: 'Hessen', gehalt: '68.000 €', diff: '+5%' },
                      { land: 'Hamburg', gehalt: '67.000 €', diff: '+3%' },
                      { land: 'Nordrhein-Westfalen', gehalt: '64.000 €', diff: '-1%' },
                      { land: 'Niedersachsen', gehalt: '62.000 €', diff: '-4%' },
                      { land: 'Berlin', gehalt: '60.000 €', diff: '-8%' },
                      { land: 'Sachsen', gehalt: '52.000 €', diff: '-20%' },
                      { land: 'Thüringen', gehalt: '50.000 €', diff: '-23%' },
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
                  Die Nachfrage nach Ingenieuren in Deutschland bleibt hoch. Der
                  Fachkräftemangel in den Ingenieurwissenschaften sichert langfristig
                  gute Gehalts- und Karriereperspektiven. Besonders gefragt sind
                  Ingenieure in folgenden Bereichen:
                </p>
                <ul className="space-y-2 mt-4">
                  <li>
                    <strong>Elektromobilität & Batterietechnologie:</strong> Die
                    Transformation der Automobilindustrie schafft neue, gut bezahlte
                    Stellen.
                  </li>
                  <li>
                    <strong>Erneuerbare Energien:</strong> Windkraft, Solar und
                    Wasserstofftechnologie bieten wachsende Karrierechancen.
                  </li>
                  <li>
                    <strong>Digitalisierung & Industrie 4.0:</strong> IoT, Automatisierung
                    und KI-Anwendungen in der Fertigung.
                  </li>
                  <li>
                    <strong>Bauingenieurwesen:</strong> Infrastrukturprojekte und
                    energetische Sanierung sorgen für konstante Nachfrage.
                  </li>
                </ul>
                <p className="mt-4">
                  Typische Karrierepfade führen vom Junior-Ingenieur über den
                  Senior-Ingenieur zum Projektleiter und schließlich in
                  Führungspositionen wie Abteilungsleiter oder technischer Direktor.
                </p>
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
        <FAQSection faqs={faqs} title="Häufige Fragen zum Ingenieur-Gehalt" />

        {/* Related Links */}
        <RelatedLinks currentHref="/berufe/ingenieur" />

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
