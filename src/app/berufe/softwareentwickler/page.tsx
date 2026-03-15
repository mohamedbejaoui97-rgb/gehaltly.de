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
  title: 'Gehalt Softwareentwickler 2026 - Brutto Netto IT | gehaltly.de',
  description:
    'Was verdient ein Softwareentwickler 2026 in Deutschland? Durchschnittsgehalt 55.000-75.000 €/Jahr. Brutto-Netto-Berechnung, Tech-Stack-Vergleich und Gehaltsvergleich.',
  alternates: {
    canonical: 'https://gehaltly.de/berufe/softwareentwickler/',
  },
  openGraph: {
    title: 'Gehalt Softwareentwickler 2026 - Brutto Netto IT',
    description:
      'Was verdient ein Softwareentwickler 2026? Durchschnittsgehalt 55.000-75.000 €/Jahr mit Brutto-Netto-Berechnung.',
    url: 'https://gehaltly.de/berufe/softwareentwickler/',
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
    question: 'Was verdient ein Softwareentwickler in Deutschland?',
    answer:
      'Ein Softwareentwickler verdient in Deutschland durchschnittlich zwischen 55.000 und 75.000 Euro brutto pro Jahr (4.583-6.250 Euro pro Monat). Berufseinsteiger starten bei rund 45.000 Euro, während Senior-Entwickler 85.000 Euro und mehr verdienen können. In Top-Unternehmen (FAANG, SAP) sind auch sechsstellige Gehälter möglich.',
  },
  {
    question: 'Wie viel Netto bleibt einem Softwareentwickler?',
    answer:
      `Bei einem durchschnittlichen Bruttogehalt von ${avgMonthly.toLocaleString('de-DE')} Euro pro Monat (Steuerklasse 1) bleiben etwa ${results[0].result.netto.toLocaleString('de-DE')} Euro netto. Das entspricht einer Abgabenquote von rund ${Math.round((results[0].result.gesamtAbzuege / avgMonthly) * 100)}%.`,
  },
  {
    question: 'Welche Programmiersprache bringt das höchste Gehalt?',
    answer:
      'Die bestbezahlten Technologien in Deutschland sind aktuell Rust, Go, Scala und Kotlin mit Durchschnittsgehältern von 70.000-85.000 Euro. Auch Cloud-Architekten (AWS, Azure), DevOps-Engineers und Machine-Learning-Spezialisten (Python) verdienen überdurchschnittlich. Java und C# liegen im soliden Mittelfeld.',
  },
  {
    question: 'Verdienen Softwareentwickler in München und Berlin mehr?',
    answer:
      'Ja, München und Berlin sind die bestbezahlten Standorte für IT-Fachkräfte. In München liegen die Gehälter 15-20% über dem Bundesdurchschnitt, in Berlin 5-10%. Allerdings sind die Lebenshaltungskosten in diesen Städten ebenfalls höher. Frankfurt und Hamburg bieten ebenfalls überdurchschnittliche IT-Gehälter.',
  },
  {
    question: 'Lohnt sich ein Informatik-Studium finanziell?',
    answer:
      'Ein Informatik-Studium zahlt sich finanziell deutlich aus. Absolventen starten mit rund 48.000-52.000 Euro, während Quereinsteiger ohne Studium bei 40.000-45.000 Euro beginnen. Der Gehaltsunterschied wächst mit der Karriere: Nach 10 Jahren verdienen Absolventen durchschnittlich 15-20% mehr. Allerdings können Bootcamp-Absolventen und Autodidakten mit starkem Portfolio ebenfalls Top-Gehälter erzielen.',
  },
];

const occupationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Occupation',
  name: 'Softwareentwickler',
  description:
    'Softwareentwickler entwerfen, programmieren und warten Softwareanwendungen. Sie arbeiten mit verschiedenen Programmiersprachen und Frameworks in Bereichen wie Webentwicklung, mobile Apps, Backend-Systeme und Data Engineering.',
  occupationLocation: {
    '@type': 'Country',
    name: 'Deutschland',
  },
  estimatedSalary: {
    '@type': 'MonetaryAmountDistribution',
    name: 'Jahresgehalt',
    currency: 'EUR',
    median: 65000,
    percentile10: 45000,
    percentile90: 90000,
    duration: 'P1Y',
  },
};

export default function SoftwareentwicklerPage() {
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
                  { label: 'Softwareentwickler' },
                ]}
              />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Gehalt als Softwareentwickler in Deutschland 2026
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Softwareentwickler zählen zu den gefragtesten und bestbezahlten
                Berufen in Deutschland. Mit einem Durchschnittsgehalt von 55.000 bis
                75.000 Euro brutto pro Jahr und einer wachsenden Nachfrage bietet die
                IT-Branche exzellente Gehalts- und Karriereperspektiven.
              </p>

              {/* Salary Overview Card */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Gehaltsübersicht Softwareentwickler</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Einstiegsgehalt</div>
                    <div className="text-xl font-bold text-gray-900">45.000 €</div>
                    <div className="text-xs text-gray-400">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="text-sm text-green-700">Durchschnitt</div>
                    <div className="text-xl font-bold text-green-800">55.000 - 75.000 €</div>
                    <div className="text-xs text-green-600">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Senior / Lead</div>
                    <div className="text-xl font-bold text-gray-900">85.000+ €</div>
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
                Brutto-Netto-Rechnung für Softwareentwickler
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
                Einflussfaktoren auf das IT-Gehalt
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Standort</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    München, Frankfurt und Stuttgart bieten die höchsten IT-Gehälter
                    (15-20% über Durchschnitt). Berlin hat ein lebhaftes Startup-Ökosystem
                    mit variablen Gehältern. Remote-Arbeit ermöglicht zunehmend
                    ortsunabhängige Top-Gehälter.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Erfahrung & Seniorität</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Junior (0-2 Jahre): 45.000-55.000 €. Mid-Level (3-5 Jahre):
                    55.000-70.000 €. Senior (5-10 Jahre): 70.000-85.000 €. Staff/Principal
                    (10+ Jahre): 85.000-120.000+ €. Der größte Sprung erfolgt vom
                    Junior zum Mid-Level.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Unternehmen & Branche</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Tech-Konzerne (SAP, Google, Amazon) zahlen 20-40% über Markt, oft
                    mit Aktienoptionen. Die Finanzbranche (FinTech, Banken) und
                    Automobilindustrie bieten ebenfalls Top-Gehälter. Startups zahlen
                    teils weniger Grundgehalt, bieten aber Equity.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-5 h-5 text-[#DD0000]" />
                    <h3 className="font-semibold text-lg">Tech-Stack & Spezialisierung</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Cloud-Architekten, DevOps-Engineers und ML-Engineers verdienen
                    überdurchschnittlich (75.000-100.000+ €). Gefragte Stacks: React/
                    TypeScript, Go, Rust, Kubernetes. Data Engineering und Security
                    sind ebenfalls Wachstumsbereiche mit Premium-Gehältern.
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
                      { land: 'Bayern', gehalt: '75.000 €', diff: '+15%' },
                      { land: 'Baden-Württemberg', gehalt: '73.000 €', diff: '+12%' },
                      { land: 'Hessen', gehalt: '72.000 €', diff: '+11%' },
                      { land: 'Hamburg', gehalt: '70.000 €', diff: '+8%' },
                      { land: 'Berlin', gehalt: '68.000 €', diff: '+5%' },
                      { land: 'Nordrhein-Westfalen', gehalt: '64.000 €', diff: '-2%' },
                      { land: 'Niedersachsen', gehalt: '60.000 €', diff: '-8%' },
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
                </a>{' '}
                und Branchenumfragen
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
                  Die IT-Branche bietet weiterhin ausgezeichnete Karriereperspektiven.
                  Der Fachkräftemangel in der Softwareentwicklung ist einer der
                  gravierendsten in Deutschland, was die Verhandlungsposition für
                  Entwickler stärkt.
                </p>
                <ul className="space-y-2 mt-4">
                  <li>
                    <strong>KI & Machine Learning:</strong> Der Boom bei Künstlicher
                    Intelligenz treibt die Nachfrage nach ML-Engineers, Data Scientists
                    und KI-Spezialisten. Gehälter von 80.000-120.000+ € sind keine
                    Seltenheit.
                  </li>
                  <li>
                    <strong>Cloud & DevOps:</strong> Cloud-Native-Entwicklung und
                    Infrastructure as Code bleiben hochgefragt. AWS-, Azure- und
                    GCP-Zertifizierungen können das Gehalt um 10-15% steigern.
                  </li>
                  <li>
                    <strong>Remote Work:</strong> Immer mehr deutsche Unternehmen bieten
                    vollständige Remote-Arbeit an. International remote arbeitende
                    Entwickler können von höheren ausländischen Gehältern profitieren.
                  </li>
                  <li>
                    <strong>Freelancing:</strong> Freiberufliche Softwareentwickler
                    erzielen Tagessätze von 600-1.200 € und mehr, was Jahreshonorare
                    von 100.000+ € ermöglicht.
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
        <FAQSection faqs={faqs} title="Häufige Fragen zum IT-Gehalt" />

        {/* Related Links */}
        <RelatedLinks currentHref="/berufe/softwareentwickler" />

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
