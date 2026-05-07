/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { calculateGermanTax, DEFAULT_INPUT } from '@/lib/tax';
import type { Bundesland } from '@/lib/tax';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { ArrowRight, Church, MapPin, Building2, Info } from 'lucide-react';

export interface BundeslandFAQ {
  question: string;
  answer: string;
}

export interface BundeslandData {
  slug: string;
  bundeslandKey: Bundesland;
  name: string;
  pageH1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  kirchensteuerSatz: 8 | 9;
  hauptstadt: string;
  einwohner: string;
  durchschnittsgehalt: string;
  cities: { name: string; bemerkung?: string }[];
  fakten: string[];
  faqs: BundeslandFAQ[];
}

const BENCHMARK_AMOUNTS_MONTHLY = [2500, 3500, 4500, 6000];

interface Props {
  data: BundeslandData;
}

export default function BundeslandPageTemplate({ data }: Props) {
  const d = data;

  const rows = BENCHMARK_AMOUNTS_MONTHLY.map((brutto) => {
    const ohneKirche = calculateGermanTax({
      ...DEFAULT_INPUT,
      bruttoeinkommen: brutto,
      bundesland: d.bundeslandKey,
      kirchensteuer: false,
      steuerklasse: 1,
    });
    const mitKirche = calculateGermanTax({
      ...DEFAULT_INPUT,
      bruttoeinkommen: brutto,
      bundesland: d.bundeslandKey,
      kirchensteuer: true,
      steuerklasse: 1,
    });
    return { brutto, ohneKirche, mitKirche };
  });

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: d.name,
    description: d.metaDescription,
    address: {
      '@type': 'PostalAddress',
      addressRegion: d.name,
      addressCountry: 'DE',
    },
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: d.metaTitle,
    description: d.metaDescription,
    author: {
      '@type': 'Person',
      name: 'Mohamed Bejaoui',
      url: 'https://gehaltly.de/redaktion',
    },
    publisher: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      logo: { '@type': 'ImageObject', url: 'https://gehaltly.de/logo.png' },
    },
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    mainEntityOfPage: `https://gehaltly.de/bundesland/${d.slug}/`,
  };

  return (
    <>
      <SchemaMarkup schema={placeSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs
                items={[
                  { label: 'Bundesländer', href: '/bundesland' },
                  { label: d.name },
                ]}
              />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {d.pageH1}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{d.intro}</p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center">
                  <Church className="w-5 h-5 text-[#DD0000] mx-auto mb-2" />
                  <div className="text-xs text-gray-500">Kirchensteuer</div>
                  <div className="text-lg font-bold text-gray-900">
                    {d.kirchensteuerSatz} %
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center">
                  <Building2 className="w-5 h-5 text-[#DD0000] mx-auto mb-2" />
                  <div className="text-xs text-gray-500">Hauptstadt</div>
                  <div className="text-lg font-bold text-gray-900">
                    {d.hauptstadt}
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center">
                  <MapPin className="w-5 h-5 text-[#DD0000] mx-auto mb-2" />
                  <div className="text-xs text-gray-500">Einwohner</div>
                  <div className="text-lg font-bold text-gray-900">
                    {d.einwohner}
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center">
                  <Info className="w-5 h-5 text-[#DD0000] mx-auto mb-2" />
                  <div className="text-xs text-gray-500">Ø Gehalt</div>
                  <div className="text-lg font-bold text-gray-900">
                    {d.durchschnittsgehalt}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brutto-Netto-Tabelle */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Brutto-Netto-Tabelle für {d.name} 2026
              </h2>
              <p className="text-gray-600 mb-6">
                So viel Netto bleibt 2026 in {d.name} bei Steuerklasse 1, gesetzlich
                versichert, KV-Zusatzbeitrag 2,9 %. Der entscheidende Unterschied:{' '}
                {d.name === 'Bayern' || d.name === 'Baden-Württemberg'
                  ? `Mit ${d.kirchensteuerSatz} % Kirchensteuer zahlst du weniger als in den meisten anderen Bundesländern (9 %).`
                  : `In ${d.name} gilt der reguläre Kirchensteuersatz von 9 %.`}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 font-semibold">Brutto</th>
                      <th className="text-right p-3 font-semibold text-green-700">
                        Netto ohne Kirche
                      </th>
                      <th className="text-right p-3 font-semibold text-green-700">
                        Netto mit Kirche
                      </th>
                      <th className="text-right p-3 font-semibold text-red-600">
                        Differenz
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(({ brutto, ohneKirche, mitKirche }) => {
                      const diff = ohneKirche.netto - mitKirche.netto;
                      return (
                        <tr key={brutto} className="border-b">
                          <td className="p-3 font-medium">
                            {brutto.toLocaleString('de-DE')} €
                          </td>
                          <td className="p-3 text-right font-bold text-green-700">
                            {ohneKirche.netto.toLocaleString('de-DE')} €
                          </td>
                          <td className="p-3 text-right text-green-700">
                            {mitKirche.netto.toLocaleString('de-DE')} €
                          </td>
                          <td className="p-3 text-right text-red-600">
                            -{diff.toLocaleString('de-DE')} €
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Werte berechnet mit dem gehaltly.de Brutto-Netto-Rechner 2026.
                Steuerklasse 1, ohne Kinder, gesetzlich versichert,
                KV-Zusatzbeitrag 2,9 %.
              </p>

              <div className="mt-6">
                <Link
                  href={`/?bundesland=${d.slug}`}
                  className="inline-flex items-center gap-2 bg-[#DD0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Mit eigenem Gehalt für {d.name} berechnen{' '}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Kirchensteuer Erklärung */}
        <section className="py-10 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                Kirchensteuer in {d.name}: {d.kirchensteuerSatz} %
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  In {d.name} gilt 2026 ein Kirchensteuersatz von{' '}
                  <strong>{d.kirchensteuerSatz} %</strong> der Lohnsteuer.{' '}
                  {d.kirchensteuerSatz === 8 ? (
                    <>
                      Damit zählt {d.name} - zusammen mit Baden-Württemberg
                      bzw. Bayern - zu den beiden Bundesländern mit dem
                      niedrigeren Kirchensteuersatz. Konfessionslose Arbeitnehmer
                      und Kirchenausgetretene zahlen keine Kirchensteuer und
                      haben dadurch ein höheres Nettogehalt.
                    </>
                  ) : (
                    <>
                      Wie in den meisten anderen Bundesländern entspricht das
                      dem regulären Kirchensteuersatz. Konfessionslose und
                      Kirchenausgetretene zahlen keine Kirchensteuer.
                    </>
                  )}
                </p>
                <p>
                  Wer aus der Kirche austritt, behält die Kirchensteuer-Ersparnis
                  ab dem Folgemonat. Bei einem Bruttogehalt von 4.000 € sind das
                  über das Jahr rund{' '}
                  <strong>
                    {Math.round(
                      (rows[2].ohneKirche.netto - rows[2].mitKirche.netto) * 12
                    ).toLocaleString('de-DE')}{' '}
                    €
                  </strong>{' '}
                  mehr Netto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Städte */}
        {d.cities.length > 0 && (
          <section className="py-10 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                  Top Städte in {d.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {d.cities.map((city) => (
                    <div
                      key={city.name}
                      className="bg-white border rounded-xl p-5"
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {city.name}
                      </h3>
                      {city.bemerkung && (
                        <p className="text-sm text-gray-600">
                          {city.bemerkung}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Wichtige Fakten */}
        <section className="py-10 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                Wichtige Fakten zu {d.name}
              </h2>
              <ul className="space-y-3">
                {d.fakten.map((fakt, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-lg p-4 border"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DD0000]/10 text-[#DD0000] flex items-center justify-center text-sm font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{fakt}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          faqs={d.faqs}
          title={`Häufige Fragen zu Brutto-Netto in ${d.name}`}
        />

        {/* Related */}
        <RelatedLinks currentHref={`/bundesland/${d.slug}`} />

        {/* Author Byline */}
        <div className="container mx-auto px-4 pb-10">
          <div className="max-w-4xl mx-auto text-sm text-gray-500 border-t pt-6 flex flex-wrap items-center gap-2">
            <span>Verfasst von</span>
            <Link
              href="/redaktion"
              className="text-[#DD0000] hover:underline font-medium"
            >
              Mohamed Bejaoui
            </Link>
            <span>· Aktualisiert: 7. Mai 2026 · Geprüft gegen BMF-Programmablaufplan 2026</span>
          </div>
        </div>
      </main>
    </>
  );
}
