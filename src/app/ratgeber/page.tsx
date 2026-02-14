import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { RATGEBER_LINKS } from '@/lib/utils/internal-links';

export const metadata: Metadata = {
  title: 'Ratgeber 2026 - Gehalt, Steuern & Sozialabgaben',
  description:
    'Ratgeber zu Gehalt, Steuern und Sozialabgaben in Deutschland 2026. Steuerklassen, Brutto-Netto, Sozialabgaben und Elterngeld erklärt.',
  alternates: {
    canonical: 'https://gehaltly.de/ratgeber/',
  },
  openGraph: {
    title: 'Ratgeber 2026 - Gehalt, Steuern & Sozialabgaben',
    description:
      'Ratgeber zu Gehalt, Steuern und Sozialabgaben in Deutschland 2026. Steuerklassen, Brutto-Netto, Sozialabgaben und Elterngeld erklärt.',
    type: 'website',
  },
};

export default function RatgeberHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Ratgeber 2026 - Gehalt, Steuern & Sozialabgaben",
            "description": "Ratgeber zu Gehalt, Steuern und Sozialabgaben in Deutschland 2026.",
            "url": "https://gehaltly.de/ratgeber/",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": RATGEBER_LINKS.map((link, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": link.title,
                "url": `https://gehaltly.de${link.href}/`,
              })),
            },
          }),
        }}
      />
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: 'Ratgeber' }]} />
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ratgeber - Gehalt & Steuern
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Unsere Ratgeber helfen Ihnen, Gehalt, Steuern und Sozialabgaben
              in Deutschland besser zu verstehen. Verständlich erklärt und
              immer aktuell für 2026.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {RATGEBER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border rounded-lg p-5 hover:border-[#DD0000] hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-lg mb-2">{link.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
