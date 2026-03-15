/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { Briefcase, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gehalt nach Beruf 2026 - Gehaltsvergleich Deutschland | gehaltly.de',
  description:
    'Gehaltsvergleich nach Beruf in Deutschland 2026: Durchschnittsgehalt, Brutto-Netto-Berechnung und Karriereaussichten für die beliebtesten Berufe.',
  alternates: {
    canonical: 'https://gehaltly.de/berufe/',
  },
  openGraph: {
    title: 'Gehalt nach Beruf 2026 - Gehaltsvergleich Deutschland',
    description:
      'Gehaltsvergleich nach Beruf in Deutschland 2026: Durchschnittsgehalt, Brutto-Netto-Berechnung und Karriereaussichten.',
    url: 'https://gehaltly.de/berufe/',
    siteName: 'gehaltly.de',
    type: 'website',
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

const professions = [
  {
    title: 'Ingenieur',
    href: '/berufe/ingenieur',
    salary: '58.000 - 72.000 €/Jahr',
    description: 'Maschinenbau, Elektrotechnik, Bauingenieurwesen und mehr',
  },
  {
    title: 'Softwareentwickler',
    href: '/berufe/softwareentwickler',
    salary: '55.000 - 75.000 €/Jahr',
    description: 'IT, Webentwicklung, Data Science und Programmierung',
  },
  {
    title: 'Lehrer',
    href: '/berufe/lehrer',
    salary: '45.000 - 65.000 €/Jahr',
    description: 'Grundschule, Gymnasium, Berufsschule und Sonderpädagogik',
  },
  {
    title: 'Krankenschwester / Pflegefachkraft',
    href: '/berufe/krankenschwester',
    salary: '36.000 - 42.000 €/Jahr',
    description: 'Krankenhaus, Altenpflege, ambulante Pflege und Intensivmedizin',
  },
  {
    title: 'Kaufmann / Kauffrau',
    href: '/berufe/kaufmann',
    salary: '32.000 - 40.000 €/Jahr',
    description: 'Bürokaufmann, Industriekaufmann, Groß- und Außenhandel',
  },
];

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Gehalt nach Beruf 2026 - Gehaltsvergleich Deutschland',
  description:
    'Gehaltsvergleich nach Beruf in Deutschland 2026 mit Brutto-Netto-Berechnung.',
  url: 'https://gehaltly.de/berufe/',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: professions.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `https://gehaltly.de${p.href}/`,
    })),
  },
};

export default function BerufePage() {
  return (
    <>
      <SchemaMarkup schema={collectionSchema} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: 'Berufe' }]} />

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Gehalt nach Beruf 2026 - Gehaltsvergleich Deutschland
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Was verdient man in Deutschland? Vergleichen Sie Durchschnittsgehälter
                nach Beruf und berechnen Sie Ihr individuelles Nettoeinkommen. Alle
                Angaben basieren auf aktuellen Gehaltsdaten für 2026 mit
                Brutto-Netto-Berechnung.
              </p>
              <p className="text-gray-600">
                Nutzen Sie unseren{' '}
                <Link href="/" className="text-[#DD0000] hover:underline">
                  Brutto-Netto-Rechner
                </Link>{' '}
                für eine individuelle Berechnung oder wählen Sie unten einen Beruf
                für detaillierte Gehaltsinformationen.
              </p>
            </div>
          </div>
        </section>

        {/* Profession Cards */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
                Beliebte Berufe im Gehaltsvergleich
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {professions.map((profession) => (
                  <Link
                    key={profession.href}
                    href={profession.href}
                    className="group block"
                  >
                    <div className="border rounded-xl p-6 hover:border-[#DD0000] hover:shadow-lg transition-all h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-[#DD0000]" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold group-hover:text-[#DD0000] transition-colors">
                            {profession.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {profession.description}
                          </p>
                          <div className="mt-3 flex items-center gap-2">
                            <span className="text-base font-bold text-green-700">
                              {profession.salary}
                            </span>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-[#DD0000] opacity-0 group-hover:opacity-100 transition-opacity">
                            Gehalt ansehen <ArrowRight className="w-4 h-4 ml-1" />
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

        {/* Info Section */}
        <section className="py-10 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                So funktioniert unser Gehaltsvergleich
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Unsere Gehaltsseiten zeigen Ihnen das durchschnittliche
                  Brutto- und Nettogehalt in verschiedenen Berufen in
                  Deutschland. Jede Seite enthält:
                </p>
                <ul className="space-y-2 mt-4">
                  <li>Durchschnittliche Gehaltsangaben nach Erfahrungsstufe</li>
                  <li>
                    Brutto-Netto-Berechnung für Steuerklasse 1, 3 und 5
                  </li>
                  <li>Regionale Gehaltsunterschiede (Ost vs. West)</li>
                  <li>Einflussfaktoren wie Branche, Erfahrung und Unternehmensgröße</li>
                  <li>Karriereaussichten und Gehaltsentwicklung</li>
                </ul>
                <p className="mt-4">
                  Die Gehaltsdaten basieren auf Auswertungen des{' '}
                  <a
                    href="https://entgeltatlas.arbeitsagentur.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DD0000] hover:underline"
                  >
                    Entgeltatlas der Bundesagentur für Arbeit
                  </a>{' '}
                  sowie des{' '}
                  <a
                    href="https://www.destatis.de/DE/Themen/Arbeit/Verdienste/_inhalt.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DD0000] hover:underline"
                  >
                    Statistischen Bundesamts (Destatis)
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Ihr Beruf ist nicht dabei?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nutzen Sie unseren universellen Brutto-Netto-Rechner, um Ihr
              individuelles Nettogehalt zu berechnen - unabhängig vom Beruf.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#DD0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Zum Brutto-Netto-Rechner <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

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
