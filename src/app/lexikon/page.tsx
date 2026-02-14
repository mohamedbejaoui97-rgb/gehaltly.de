import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Steuer-Lexikon 2026 - Alle Begriffe erklärt',
  description:
    'Umfassendes Lexikon zu Steuern, Sozialabgaben und Gehalt in Deutschland 2026. Alle wichtigen Begriffe verständlich erklärt.',
  alternates: {
    canonical: 'https://gehaltly.de/lexikon/',
  },
  openGraph: {
    title: 'Steuer-Lexikon 2026 - Alle Begriffe erklärt',
    description:
      'Umfassendes Lexikon zu Steuern, Sozialabgaben und Gehalt in Deutschland 2026.',
    type: 'website',
  },
};

const LEXIKON_ENTRIES = [
  { slug: 'lohnsteuer', title: 'Lohnsteuer', category: 'Steuern' },
  { slug: 'kirchensteuer', title: 'Kirchensteuer', category: 'Steuern' },
  { slug: 'solidaritaetszuschlag', title: 'Solidaritätszuschlag', category: 'Steuern' },
  { slug: 'grundfreibetrag', title: 'Grundfreibetrag', category: 'Steuern' },
  { slug: 'kinderfreibetrag', title: 'Kinderfreibetrag', category: 'Steuern' },
  { slug: 'steuerfreibetrag', title: 'Steuerfreibetrag', category: 'Steuern' },
  { slug: 'steuerklasse-1', title: 'Steuerklasse 1', category: 'Steuerklassen' },
  { slug: 'steuerklasse-2', title: 'Steuerklasse 2', category: 'Steuerklassen' },
  { slug: 'steuerklasse-3', title: 'Steuerklasse 3', category: 'Steuerklassen' },
  { slug: 'steuerklasse-4', title: 'Steuerklasse 4', category: 'Steuerklassen' },
  { slug: 'steuerklasse-5', title: 'Steuerklasse 5', category: 'Steuerklassen' },
  { slug: 'steuerklasse-6', title: 'Steuerklasse 6', category: 'Steuerklassen' },
  { slug: 'krankenversicherung', title: 'Krankenversicherung', category: 'Sozialabgaben' },
  { slug: 'pflegeversicherung', title: 'Pflegeversicherung', category: 'Sozialabgaben' },
  { slug: 'rentenversicherung', title: 'Rentenversicherung', category: 'Sozialabgaben' },
  { slug: 'arbeitslosenversicherung', title: 'Arbeitslosenversicherung', category: 'Sozialabgaben' },
  { slug: 'beitragsbemessungsgrenze', title: 'Beitragsbemessungsgrenze', category: 'Sozialabgaben' },
  { slug: 'minijob', title: 'Minijob', category: 'Beschäftigungsarten' },
  { slug: 'midijob', title: 'Midijob', category: 'Beschäftigungsarten' },
  { slug: 'geldwerter-vorteil', title: 'Geldwerter Vorteil', category: 'Sonstiges' },
];

const categories = Array.from(new Set(LEXIKON_ENTRIES.map(e => e.category)));

export default function LexikonHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Steuer-Lexikon 2026",
            "description": "Umfassendes Lexikon zu Steuern, Sozialabgaben und Gehalt in Deutschland 2026.",
            "url": "https://gehaltly.de/lexikon/",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": LEXIKON_ENTRIES.map((entry, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": entry.title,
                "url": `https://gehaltly.de/lexikon/${entry.slug}/`,
              })),
            },
          }),
        }}
      />
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: 'Lexikon' }]} />
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Steuer-Lexikon
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Alle wichtigen Begriffe rund um Steuern, Sozialabgaben und Gehalt in Deutschland verständlich erklärt.
            </p>
          </div>

          {categories.map(category => (
            <div key={category} className="max-w-4xl mx-auto mb-10">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {LEXIKON_ENTRIES.filter(e => e.category === category).map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/lexikon/${entry.slug}`}
                    className="block border rounded-lg p-5 hover:border-[#DD0000] hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-lg">{entry.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
