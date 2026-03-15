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
  title: 'Gehalt Lehrer 2026 - Brutto Netto nach Schulform | gehaltly.de',
  description:
    'Was verdient ein Lehrer 2026 in Deutschland? Gehalt 45.000-65.000 €/Jahr je nach Schulform. Brutto-Netto-Berechnung, Beamten-Vorteil und Besoldungsgruppen erklärt.',
  alternates: {
    canonical: 'https://gehaltly.de/berufe/lehrer/',
  },
  openGraph: {
    title: 'Gehalt Lehrer 2026 - Brutto Netto nach Schulform',
    description:
      'Was verdient ein Lehrer 2026? Gehalt 45.000-65.000 €/Jahr je nach Schulform mit Brutto-Netto-Berechnung.',
    url: 'https://gehaltly.de/berufe/lehrer/',
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

const avgMonthly = 4583; // ~55.000/12

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
    question: 'Was verdient ein Lehrer in Deutschland?',
    answer:
      'Das Lehrergehalt in Deutschland liegt je nach Schulform zwischen 45.000 und 65.000 Euro brutto pro Jahr. Grundschullehrer verdienen durchschnittlich 48.000 Euro, Gymnasiallehrer rund 58.000 Euro. Verbeamtete Lehrer haben durch den Wegfall der Sozialversicherungsbeiträge ein deutlich höheres Nettoeinkommen als angestellte Lehrer.',
  },
  {
    question: 'Wie viel mehr Netto haben verbeamtete Lehrer?',
    answer:
      'Verbeamtete Lehrer zahlen keine Beiträge zur Renten-, Arbeitslosen- und Krankenversicherung (GKV). Stattdessen erhalten sie private Beihilfe und zahlen nur einen reduzierten PKV-Beitrag. Bei gleichem Bruttogehalt haben Beamte dadurch 15-20% mehr Netto als angestellte Lehrer. Ein verbeamteter Gymnasiallehrer mit A13 hat ca. 500-700 Euro mehr netto pro Monat.',
  },
  {
    question: 'Was ist der Unterschied zwischen A12 und A13?',
    answer:
      'A12 ist die typische Besoldungsgruppe für Grundschullehrer, A13 für Gymnasial- und Berufsschullehrer. Der Gehaltsunterschied beträgt je nach Bundesland 300-500 Euro brutto pro Monat (4.000-6.000 Euro pro Jahr). Immer mehr Bundesländer heben Grundschullehrer auf A13 an, um die Attraktivität zu steigern.',
  },
  {
    question: 'In welchem Bundesland verdienen Lehrer am meisten?',
    answer:
      'Bayern und Baden-Württemberg zahlen die höchsten Lehrergehälter, gefolgt von Hessen und Hamburg. Der Unterschied zwischen dem bestbezahlten und dem schlechtestbezahlten Bundesland kann bis zu 600 Euro brutto pro Monat betragen. Auch die Verbeamtungsquote variiert stark zwischen den Bundesländern.',
  },
  {
    question: 'Wie ist die Gehaltsentwicklung als Lehrer?',
    answer:
      'Die Gehaltsentwicklung folgt den Erfahrungsstufen der Besoldung (Beamte) bzw. des TV-L (Angestellte). Beamte steigen automatisch alle 2-3 Jahre in die nächste Erfahrungsstufe auf. Von Stufe 1 bis zur Endstufe (Stufe 8-12 je nach Bundesland) steigt das Gehalt um ca. 30%. Beförderungen zur Fachleitung, Oberstudienrat (A14) oder Schulleitung (A15/A16) bringen weitere Gehaltssprünge.',
  },
];

const occupationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Occupation',
  name: 'Lehrer',
  description:
    'Lehrer unterrichten Schüler an Grundschulen, Haupt- und Realschulen, Gymnasien und Berufsschulen. Sie vermitteln Fachwissen, erziehen und bewerten Lernfortschritte.',
  occupationLocation: {
    '@type': 'Country',
    name: 'Deutschland',
  },
  estimatedSalary: {
    '@type': 'MonetaryAmountDistribution',
    name: 'Jahresgehalt',
    currency: 'EUR',
    median: 55000,
    percentile10: 42000,
    percentile90: 70000,
    duration: 'P1Y',
  },
};

export default function LehrerPage() {
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
                  { label: 'Lehrer' },
                ]}
              />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Gehalt als Lehrer in Deutschland 2026
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Das Lehrergehalt variiert in Deutschland stark nach Schulform,
                Bundesland und Verbeamtungsstatus. Mit einem Durchschnittsgehalt von
                45.000 bis 65.000 Euro brutto pro Jahr liegen Lehrer im oberen
                Mittelfeld. Besonders der Beamtenstatus sorgt für ein deutlich höheres
                Nettoeinkommen.
              </p>

              {/* Salary Overview Card */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Gehaltsübersicht Lehrer nach Schulform</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Grundschule (A12)</div>
                    <div className="text-xl font-bold text-gray-900">~48.000 €</div>
                    <div className="text-xs text-gray-400">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="text-sm text-green-700">Gymnasium (A13)</div>
                    <div className="text-xl font-bold text-green-800">~58.000 €</div>
                    <div className="text-xs text-green-600">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Schulleitung (A15/A16)</div>
                    <div className="text-xl font-bold text-gray-900">70.000+ €</div>
                    <div className="text-xs text-gray-400">pro Jahr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brutto-Netto Table (angestellte Lehrer) */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                Brutto-Netto-Rechnung für angestellte Lehrer
              </h2>
              <p className="text-gray-600 mb-6">
                Basierend auf einem durchschnittlichen Bruttogehalt von{' '}
                <strong>{avgMonthly.toLocaleString('de-DE')} € pro Monat</strong>{' '}
                (~55.000 €/Jahr) für angestellte Lehrer (TV-L), keine Kirchensteuer,
                keine Kinder, gesetzlich versichert in Bayern:
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

              {/* Beamten-Hinweis */}
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Hinweis für verbeamtete Lehrer:</strong> Beamte zahlen keine
                  Sozialversicherungsbeiträge (Renten-, Kranken-, Pflege-,
                  Arbeitslosenversicherung). Stattdessen erhalten sie Beihilfe und
                  zahlen einen reduzierten PKV-Beitrag (~200-400 €/Monat). Das
                  Nettoeinkommen ist daher bei gleichem Brutto ca. 500-700 € höher.
                  Nutzen Sie unseren{' '}
                  <Link href="/gehaltsrechner" className="text-[#DD0000] hover:underline">
                    Gehaltsrechner
                  </Link>{' '}
                  für eine individuelle Berechnung.
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Berechnung mit dem gehaltly.de Brutto-Netto-Rechner 2026.
                KV-Zusatzbeitrag: 2,9%. Ohne Kirchensteuer. Gilt nur für angestellte Lehrer.
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
                Einflussfaktoren auf das Lehrer-Gehalt
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Schulform & Besoldung</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Die Schulform bestimmt die Besoldungsgruppe: Grundschule meist A12
                    (~3.800-4.500 €/Monat), Gymnasium/Berufsschule A13 (~4.200-5.200 €).
                    Immer mehr Bundesländer heben Grundschullehrer auf A13 an. Die
                    Einstufung ist bundesweit nicht einheitlich.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Bundesland</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Die Besoldung variiert deutlich zwischen den Bundesländern. Bayern
                    und Baden-Württemberg zahlen am meisten, Berlin und Sachsen am
                    wenigsten. Der Unterschied kann bis zu 600 Euro brutto pro Monat
                    betragen. Auch die Verbeamtungsquote unterscheidet sich.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Beamtenstatus</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Der Beamtenstatus ist der größte Einflussfaktor auf das Netto.
                    Verbeamtete Lehrer sparen die Arbeitnehmeranteile an der
                    Sozialversicherung (~20% des Bruttos). In den meisten Bundesländern
                    werden Lehrer verbeamtet. Berlin, Sachsen und Thüringen verbeamten
                    seit Kurzem wieder.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Erfahrungsstufen</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Die Besoldung steigt automatisch mit den Erfahrungsstufen. Von
                    Stufe 1 bis zur Endstufe (8-12 je nach Bundesland) wächst das
                    Gehalt um rund 30%. Beförderungen zum Oberstudienrat (A14),
                    Fachleiter oder Schulleiter (A15/A16) bringen weitere Sprünge.
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
                Gehaltsvergleich nach Bundesland (A13, Stufe 5)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 font-semibold">Bundesland</th>
                      <th className="text-right p-3 font-semibold">Brutto/Monat (A13)</th>
                      <th className="text-right p-3 font-semibold">vs. Bundesmittel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { land: 'Bayern', gehalt: '5.100 €', diff: '+8%' },
                      { land: 'Baden-Württemberg', gehalt: '5.000 €', diff: '+6%' },
                      { land: 'Hamburg', gehalt: '4.900 €', diff: '+4%' },
                      { land: 'Hessen', gehalt: '4.850 €', diff: '+3%' },
                      { land: 'Nordrhein-Westfalen', gehalt: '4.750 €', diff: '+1%' },
                      { land: 'Niedersachsen', gehalt: '4.700 €', diff: '0%' },
                      { land: 'Berlin', gehalt: '4.600 €', diff: '-2%' },
                      { land: 'Sachsen', gehalt: '4.500 €', diff: '-4%' },
                      { land: 'Mecklenburg-Vorpommern', gehalt: '4.400 €', diff: '-6%' },
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
                Quelle: Besoldungstabellen der Bundesländer. Auswertung basierend auf Daten des{' '}
                <a
                  href="https://www.destatis.de/DE/Themen/Arbeit/Verdienste/_inhalt.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  Statistischen Bundesamts (Destatis)
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
                  Der Lehrerberuf bietet langfristige Jobsicherheit und planbare
                  Gehaltsentwicklung. Der Lehrermangel in Deutschland sorgt für eine
                  hohe Nachfrage:
                </p>
                <ul className="space-y-2 mt-4">
                  <li>
                    <strong>Lehrermangel:</strong> Besonders in MINT-Fächern
                    (Mathematik, Informatik, Naturwissenschaften, Technik) und an
                    Grundschulen fehlen tausende Lehrkräfte. Das stärkt die
                    Verhandlungsposition und ermöglicht Quereinsteigern den Zugang.
                  </li>
                  <li>
                    <strong>A13 für alle:</strong> Der Trend geht zur Einführung von A13
                    für alle Lehrämter. Immer mehr Bundesländer gleichen die
                    Grundschullehrer-Besoldung an, was deutliche Gehaltserhöhungen
                    bedeutet.
                  </li>
                  <li>
                    <strong>Aufstiegsmöglichkeiten:</strong> Fachberatung, Fachleitung,
                    Konrektorat (A14/A15) und Schulleitung (A15/A16) bieten attraktive
                    Gehaltssprünge. Auch der Wechsel in die Schulaufsicht oder
                    Lehrerausbildung ist möglich.
                  </li>
                  <li>
                    <strong>Pension:</strong> Verbeamtete Lehrer erhalten eine
                    Beamtenpension (ca. 70% der letzten Bezüge), die deutlich über
                    der gesetzlichen Rente liegt.
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
        <FAQSection faqs={faqs} title="Häufige Fragen zum Lehrer-Gehalt" />

        {/* Related Links */}
        <RelatedLinks currentHref="/berufe/lehrer" />

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
