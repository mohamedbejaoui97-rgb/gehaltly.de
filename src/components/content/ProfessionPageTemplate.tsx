/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { calculateGermanTax, DEFAULT_INPUT } from '@/lib/tax';
import type { Steuerklasse } from '@/lib/tax';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import {
  TrendingUp,
  MapPin,
  Building2,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

const ICON_MAP = {
  MapPin,
  TrendingUp,
  Building2,
  GraduationCap,
} as const;

export type ProfessionIcon = keyof typeof ICON_MAP;

export interface ProfessionFactor {
  icon: ProfessionIcon;
  title: string;
  description: string;
}

export interface ProfessionBundeslandRow {
  land: string;
  gehalt: string;
  diff: string;
}

export interface ProfessionFAQ {
  question: string;
  answer: string;
}

export interface ProfessionData {
  slug: string;
  title: string;
  pageH1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  ogDescription?: string;
  einstiegsgehalt: string;
  durchschnittsgehalt: string;
  topGehalt: string;
  topGehaltLabel?: string;
  avgYearly: number;
  avgMonthly: number;
  occupationDescription: string;
  schemaMedian: number;
  schemaP10: number;
  schemaP90: number;
  einflussfaktoren: ProfessionFactor[];
  einflussfaktorenTitle?: string;
  bundeslandData: ProfessionBundeslandRow[];
  karriereTitle?: string;
  karriereIntro: string;
  karriereItems: { title: string; description: string }[];
  faqs: ProfessionFAQ[];
  faqTitle?: string;
  bruttoNettoIntro?: string;
  brokenLineNote?: string;
}

interface Props {
  profession: ProfessionData;
}

export default function ProfessionPageTemplate({ profession }: Props) {
  const p = profession;

  const results = ([1, 3, 5] as Steuerklasse[]).map((sk) => ({
    steuerklasse: sk,
    result: calculateGermanTax({
      ...DEFAULT_INPUT,
      bruttoeinkommen: p.avgMonthly,
      steuerklasse: sk,
    }),
  }));

  const occupationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Occupation',
    name: p.title,
    description: p.occupationDescription,
    occupationLocation: {
      '@type': 'Country',
      name: 'Deutschland',
    },
    estimatedSalary: {
      '@type': 'MonetaryAmountDistribution',
      name: 'Jahresgehalt',
      currency: 'EUR',
      median: p.schemaMedian,
      percentile10: p.schemaP10,
      percentile90: p.schemaP90,
      duration: 'P1Y',
    },
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.metaTitle,
    description: p.metaDescription,
    author: {
      '@type': 'Person',
      name: 'Mohamed Bejaoui',
      url: 'https://gehaltly.de/redaktion',
    },
    publisher: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gehaltly.de/logo.png',
      },
    },
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    mainEntityOfPage: `https://gehaltly.de/berufe/${p.slug}/`,
  };

  return (
    <>
      <SchemaMarkup schema={occupationSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs
                items={[
                  { label: 'Berufe', href: '/berufe' },
                  { label: p.title },
                ]}
              />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {p.pageH1}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{p.intro}</p>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">
                  Gehaltsübersicht {p.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Einstiegsgehalt</div>
                    <div className="text-xl font-bold text-gray-900">
                      {p.einstiegsgehalt}
                    </div>
                    <div className="text-xs text-gray-400">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="text-sm text-green-700">Durchschnitt</div>
                    <div className="text-xl font-bold text-green-800">
                      {p.durchschnittsgehalt}
                    </div>
                    <div className="text-xs text-green-600">pro Jahr</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">
                      {p.topGehaltLabel || 'Mit Erfahrung'}
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      {p.topGehalt}
                    </div>
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
                Brutto-Netto-Rechnung für {p.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {p.bruttoNettoIntro || (
                  <>
                    Basierend auf einem durchschnittlichen Bruttogehalt von{' '}
                    <strong>
                      {p.avgMonthly.toLocaleString('de-DE')} € pro Monat
                    </strong>{' '}
                    (~{(p.avgYearly).toLocaleString('de-DE')} €/Jahr), keine
                    Kirchensteuer, keine Kinder, gesetzlich versichert in Bayern:
                  </>
                )}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 font-semibold">
                        Steuerklasse
                      </th>
                      <th className="text-right p-3 font-semibold">Brutto</th>
                      <th className="text-right p-3 font-semibold">Steuern</th>
                      <th className="text-right p-3 font-semibold">
                        Sozialabgaben
                      </th>
                      <th className="text-right p-3 font-semibold text-green-700">
                        Netto
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map(({ steuerklasse, result }) => (
                      <tr key={steuerklasse} className="border-b">
                        <td className="p-3 font-medium">
                          Steuerklasse {steuerklasse}
                        </td>
                        <td className="p-3 text-right">
                          {result.brutto.toLocaleString('de-DE')} €
                        </td>
                        <td className="p-3 text-right text-red-600">
                          -{result.gesamtSteuern.toLocaleString('de-DE')} €
                        </td>
                        <td className="p-3 text-right text-red-600">
                          -{result.gesamtSozialabgaben.toLocaleString('de-DE')}{' '}
                          €
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
                KV-Zusatzbeitrag: 2,9 %. Ohne Kirchensteuer.
                {p.brokenLineNote ? ` ${p.brokenLineNote}` : ''}
              </p>

              <div className="mt-6">
                <Link
                  href={`/?brutto=${p.avgMonthly}`}
                  className="inline-flex items-center gap-2 text-[#DD0000] font-semibold hover:underline"
                >
                  Jetzt Ihr individuelles Nettogehalt berechnen{' '}
                  <ArrowRight className="w-4 h-4" />
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
                {p.einflussfaktorenTitle ||
                  `Einflussfaktoren auf das ${p.title}-Gehalt`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {p.einflussfaktoren.map((factor, i) => {
                  const Icon = ICON_MAP[factor.icon];
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-6 border"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-5 h-5 text-[#DD0000]" />
                        <h3 className="font-semibold text-lg">{factor.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {factor.description}
                      </p>
                    </div>
                  );
                })}
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
                      <th className="text-right p-3 font-semibold">
                        Durchschnitt/Jahr
                      </th>
                      <th className="text-right p-3 font-semibold">
                        vs. Bundesmittel
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.bundeslandData.map((row) => (
                      <tr key={row.land} className="border-b">
                        <td className="p-3">{row.land}</td>
                        <td className="p-3 text-right font-medium">
                          {row.gehalt}
                        </td>
                        <td
                          className={`p-3 text-right font-medium ${
                            row.diff.startsWith('+')
                              ? 'text-green-600'
                              : row.diff.startsWith('-')
                              ? 'text-red-600'
                              : 'text-gray-600'
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
                und{' '}
                <a
                  href="https://www.destatis.de/DE/Themen/Arbeit/Verdienste/_inhalt.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  Destatis
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Karriereaussichten */}
        <section className="py-10 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                {p.karriereTitle || 'Karriereaussichten und Gehaltsentwicklung'}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{p.karriereIntro}</p>
                <ul className="space-y-2 mt-4">
                  {p.karriereItems.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <Link
              href={`/?brutto=${p.avgMonthly}`}
              className="inline-flex items-center gap-2 bg-[#DD0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Jetzt Ihr individuelles Nettogehalt berechnen{' '}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          faqs={p.faqs}
          title={p.faqTitle || `Häufige Fragen zum ${p.title}-Gehalt`}
        />

        {/* Related Links */}
        <RelatedLinks currentHref={`/berufe/${p.slug}`} />

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
