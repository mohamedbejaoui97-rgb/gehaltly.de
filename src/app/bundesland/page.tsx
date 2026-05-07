/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brutto-Netto-Rechner nach Bundesland 2026 | gehaltly.de',
  description:
    'Brutto-Netto-Rechner nach Bundesland 2026: Bayern, Baden-Württemberg, NRW, Berlin und mehr. Mit Kirchensteuersatz, Durchschnittsgehalt und regionalem Gehaltsvergleich.',
  alternates: { canonical: 'https://gehaltly.de/bundesland/' },
  openGraph: {
    title: 'Brutto-Netto-Rechner nach Bundesland 2026',
    description:
      'Bundesland-spezifische Brutto-Netto-Berechnung mit Kirchensteuersatz und regionalem Gehaltsvergleich.',
    url: 'https://gehaltly.de/bundesland/',
    siteName: 'gehaltly.de',
    type: 'website',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Brutto-Netto nach Bundesland',
      },
    ],
  },
};

const bundeslaender = [
  {
    name: 'Bayern',
    slug: 'bayern',
    kirchensteuer: '8 %',
    durchschnitt: '50.500 €',
    description:
      'Niedrigste Kirchensteuer (8 %), höchste Durchschnittsgehälter in Deutschland.',
  },
  {
    name: 'Baden-Württemberg',
    slug: 'baden-wuerttemberg',
    kirchensteuer: '8 %',
    durchschnitt: '49.500 €',
    description:
      'Industriezentrum mit Automobil & Maschinenbau, 8 % Kirchensteuer.',
  },
  {
    name: 'Nordrhein-Westfalen',
    slug: 'nordrhein-westfalen',
    kirchensteuer: '9 %',
    durchschnitt: '46.000 €',
    description:
      'Bevölkerungsreichstes Bundesland mit Ruhrgebiet und Rheinland.',
  },
  {
    name: 'Berlin',
    slug: 'berlin',
    kirchensteuer: '9 %',
    durchschnitt: '43.500 €',
    description:
      'Hauptstadt mit Tech-Startups, Verwaltung und steigenden Gehältern.',
  },
];

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Brutto-Netto-Rechner nach Bundesland 2026',
  description:
    'Bundesland-spezifische Brutto-Netto-Berechnung mit Kirchensteuersatz und Gehaltsvergleich.',
  url: 'https://gehaltly.de/bundesland/',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: bundeslaender.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      url: `https://gehaltly.de/bundesland/${b.slug}/`,
    })),
  },
};

export default function BundeslandHubPage() {
  return (
    <>
      <SchemaMarkup schema={collectionSchema} />

      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-gray-50 to-white py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: 'Bundesländer' }]} />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Brutto-Netto-Rechner nach Bundesland 2026
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Das deutsche Steuersystem ist bundesweit einheitlich - aber zwei
                Faktoren machen den Unterschied: die <strong>Kirchensteuer</strong>{' '}
                (8 % in Bayern und Baden-Württemberg, 9 % in allen anderen
                Bundesländern) und die <strong>regionalen
                Durchschnittsgehälter</strong>. Wählen Sie Ihr Bundesland für
                eine spezifische Brutto-Netto-Übersicht und Gehaltsdaten.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bundeslaender.map((bl) => (
                  <Link
                    key={bl.slug}
                    href={`/bundesland/${bl.slug}/`}
                    className="group block"
                  >
                    <div className="border rounded-xl p-6 hover:border-[#DD0000] hover:shadow-lg transition-all h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-[#DD0000]" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold group-hover:text-[#DD0000] transition-colors">
                            {bl.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {bl.description}
                          </p>
                          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                            <span className="text-gray-600">
                              KiSt:{' '}
                              <strong className="text-gray-900">
                                {bl.kirchensteuer}
                              </strong>
                            </span>
                            <span className="text-gray-600">
                              Ø Gehalt:{' '}
                              <strong className="text-green-700">
                                {bl.durchschnitt}
                              </strong>
                            </span>
                          </div>
                          <div className="mt-3 inline-flex items-center text-sm text-[#DD0000] opacity-0 group-hover:opacity-100 transition-opacity">
                            Brutto-Netto ansehen{' '}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
