import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { CALCULATOR_LINKS } from '@/lib/utils/internal-links';

export const metadata: Metadata = {
  title: 'Online Rechner 2026 - Alle Gehaltsrechner',
  description:
    'Alle kostenlosen Online-Rechner 2026 auf gehaltly.de: Brutto-Netto, Stundenlohn, Teilzeit, Firmenwagen, Steuerklassen und mehr.',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/',
  },
  openGraph: {
    title: 'Online Rechner 2026 - Alle Gehaltsrechner',
    description:
      'Alle kostenlosen Online-Rechner 2026 auf gehaltly.de: Brutto-Netto, Stundenlohn, Teilzeit, Firmenwagen, Steuerklassen und mehr.',
    type: 'website',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function RechnerHubPage() {
  const mainCalculators = CALCULATOR_LINKS.filter(
    (link) =>
      link.href === '/' ||
      link.href === '/gehaltsrechner' ||
      link.href === '/lohnrechner' ||
      link.href === '/netto-brutto-rechner' ||
      link.href === '/netto-rechner'
  );

  const rechnerCalculators = CALCULATOR_LINKS.filter((link) =>
    link.href.startsWith('/rechner/')
  );

  const allCalcs = [...mainCalculators, ...rechnerCalculators];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Online Rechner 2026 - Alle Gehaltsrechner",
            "description": "Alle kostenlosen Online-Rechner 2026 auf gehaltly.de: Brutto-Netto, Stundenlohn, Teilzeit, Firmenwagen, Steuerklassen und mehr.",
            "url": "https://gehaltly.de/rechner/",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": allCalcs.map((link, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": link.title,
                "url": `https://gehaltly.de${link.href}${link.href.endsWith('/') ? '' : '/'}`,
              })),
            },
          }),
        }}
      />
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: 'Rechner' }]} />
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Alle Rechner im Überblick
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nutzen Sie unsere kostenlosen Online-Rechner 2026, um Ihr Gehalt,
              Steuern und Sozialabgaben schnell und einfach zu berechnen. Alle
              Rechner sind aktuell und berücksichtigen die neuesten
              Steuergesetze.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Gehaltsrechner
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {mainCalculators.map((link) => (
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

            <h2 className="text-2xl font-semibold mb-4">
              Spezialrechner
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rechnerCalculators.map((link) => (
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
