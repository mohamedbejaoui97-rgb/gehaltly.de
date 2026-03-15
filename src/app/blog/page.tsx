import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Gehalt, Steuern & Finanzen 2026',
  description:
    'Aktuelle Artikel zu Gehalt, Steuern, Sozialabgaben und Finanztipps in Deutschland 2026. Expertenwissen verständlich erklärt.',
  alternates: {
    canonical: 'https://gehaltly.de/blog/',
  },
  openGraph: {
    title: 'Blog - Gehalt, Steuern & Finanzen 2026',
    description:
      'Aktuelle Artikel zu Gehalt, Steuern, Sozialabgaben und Finanztipps in Deutschland 2026.',
    type: 'website',
    images: [
      {
        url: 'https://gehaltly.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'gehaltly.de - Blog zu Gehalt & Steuern',
      },
    ],
  },
};

const BLOG_ARTICLES = [
  {
    slug: 'gehaltserhoehung-2026',
    title: 'Gehaltserhöhung 2026: Was Arbeitnehmer erwarten können',
    date: '2026-03-10',
    excerpt:
      'Welche Gehaltserhöhungen sind 2026 realistisch? Aktuelle Daten zur Lohnentwicklung nach Branche und Region.',
  },
  {
    slug: 'steuern-sparen-2026',
    title: 'Steuern sparen 2026: Was sich ändert',
    date: '2026-03-05',
    excerpt:
      'Grundfreibetrag, Kinderfreibetrag, Pendlerpauschale – alle steuerlichen Änderungen für 2026 im Überblick.',
  },
  {
    slug: 'durchschnittsgehalt-deutschland',
    title: 'Durchschnittsgehalt Deutschland 2026 nach Branche',
    date: '2026-02-28',
    excerpt:
      'So viel verdienen Arbeitnehmer in Deutschland durchschnittlich – aufgeschlüsselt nach Branche, Region und Geschlecht.',
  },
  {
    slug: 'inflation-reallohn-2026',
    title: 'Inflation und Gehalt: Reallohn-Entwicklung 2026',
    date: '2026-02-20',
    excerpt:
      'Steigt Ihr Gehalt schneller als die Inflation? Analyse der Reallohn-Entwicklung und Kaufkraft 2026.',
  },
  {
    slug: 'beitragsbemessungsgrenze-2026',
    title: 'Beitragsbemessungsgrenzen 2026 erklärt',
    date: '2026-02-15',
    excerpt:
      'Neue BBG-Werte 2026: Was bedeuten die einheitlichen Grenzen für Ihr Nettoeinkommen?',
  },
  {
    slug: 'mindestlohn-2026-aenderungen',
    title: 'Mindestlohn 2026: Was sich für Arbeitnehmer ändert',
    date: '2026-02-10',
    excerpt:
      'Der Mindestlohn steigt 2026 auf 13,95 €/Stunde. Auswirkungen auf Minijob-Grenze, Midijob und Nettolohn.',
  },
  {
    slug: 'elterngeld-2026-regelungen',
    title: 'Elterngeld 2026: Neue Regelungen und Einkommensgrenzen',
    date: '2026-02-05',
    excerpt:
      'Einkommensgrenzen, Partnerschaftsbonus und Steuerklassentrick – alle Änderungen beim Elterngeld 2026.',
  },
  {
    slug: 'steuerklasse-wechseln-hochzeit',
    title: 'Steuerklasse wechseln vor der Hochzeit: Lohnt es sich?',
    date: '2026-01-28',
    excerpt:
      'Wann sich der Steuerklassenwechsel nach der Hochzeit lohnt und wie Sie monatlich Hunderte Euro sparen.',
  },
];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Blog - Gehalt, Steuern & Finanzen 2026',
            description:
              'Aktuelle Artikel zu Gehalt, Steuern, Sozialabgaben und Finanztipps in Deutschland 2026.',
            url: 'https://gehaltly.de/blog/',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: BLOG_ARTICLES.map((article, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: article.title,
                url: `https://gehaltly.de/blog/${article.slug}/`,
              })),
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Blog – Aktuelles zu Gehalt &amp; Steuern
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In unserem Blog finden Sie aktuelle Analysen, Tipps und
              Hintergrundartikel rund um Gehalt, Steuern und Sozialabgaben in
              Deutschland. Immer aktuell für 2026.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BLOG_ARTICLES.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block border rounded-lg p-6 hover:border-[#DD0000] hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={article.date}>
                      {formatDate(article.date)}
                    </time>
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-[#DD0000] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#DD0000]">
                    Weiterlesen
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
