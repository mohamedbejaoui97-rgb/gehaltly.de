import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Steuern sparen 2026: Alle Änderungen im Überblick',
  description:
    'Grundfreibetrag, Kinderfreibetrag, Pendlerpauschale: Alle steuerlichen Änderungen 2026 und wie Sie davon profitieren.',
  alternates: {
    canonical: 'https://gehaltly.de/blog/steuern-sparen-2026/',
  },
  openGraph: {
    title: 'Steuern sparen 2026: Alle Änderungen im Überblick',
    description:
      'Alle steuerlichen Änderungen 2026 und wie Sie davon profitieren.',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Steuern sparen 2026 - gehaltly.de',
      },
    ],
  },
};

const faqs = [
  {
    question: 'Wie hoch ist der Grundfreibetrag 2026?',
    answer:
      'Der Grundfreibetrag beträgt 2026 genau 12.348 €. Das bedeutet: Auf diesen Betrag zahlen Sie keine Einkommensteuer. Gegenüber 2025 (11.694 €) ist das eine Erhöhung um 654 €.',
  },
  {
    question: 'Was ändert sich beim Kinderfreibetrag 2026?',
    answer:
      'Der Kinderfreibetrag beträgt 2026 insgesamt 9.756 € pro Kind (beide Elternteile zusammen). Pro Elternteil sind das 4.878 €, bestehend aus 3.414 € sächlichem Kinderfreibetrag und 1.464 € BEA-Freibetrag.',
  },
  {
    question: 'Wie hoch ist die Homeoffice-Pauschale 2026?',
    answer:
      'Die Homeoffice-Pauschale beträgt 2026 weiterhin 6 € pro Tag, maximal 1.260 € im Jahr (entspricht 210 Homeoffice-Tagen). Sie gilt auch, wenn kein separates Arbeitszimmer vorhanden ist.',
  },
  {
    question: 'Lohnt sich die betriebliche Altersvorsorge steuerlich?',
    answer:
      'Ja, 2026 können Sie bis zu 302 € monatlich (3.624 €/Jahr = 8 % der BBG RV) steuerfrei in die betriebliche Altersvorsorge einzahlen. Das senkt Ihr zu versteuerndes Einkommen direkt. Sozialversicherungsfrei sind bis zu 4 % der BBG (4.056 €).',
  },
  {
    question: 'Was kann ich 2026 von der Steuer absetzen?',
    answer:
      'Wichtige Posten: Werbungskosten (Pauschbetrag 1.230 €), Pendlerpauschale (0,30 €/km bzw. 0,38 € ab 21. km), Homeoffice-Pauschale (max. 1.260 €), Sachbezüge (50 €/Monat), Sonderausgaben und Spenden. Nutzen Sie unseren Ratgeber für alle Details.',
  },
];

export default function SteuernSparenArtikel() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Steuern sparen 2026: Was sich ändert',
    description:
      'Grundfreibetrag, Kinderfreibetrag, Pendlerpauschale – alle steuerlichen Änderungen für 2026 im Überblick.',
    image: 'https://gehaltly.de/og-image.png',
    datePublished: '2026-03-05',
    dateModified: '2026-03-15',
    author: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      url: 'https://gehaltly.de',
    },
    publisher: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      logo: 'https://gehaltly.de/logo.png',
    },
  };

  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Steuern sparen 2026' },
          ]}
        />
      </div>

      <article className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Steuern sparen 2026: Was sich ändert
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-8">
              <span>
                Von <strong>gehaltly.de</strong> Redaktion
              </span>
              <span>|</span>
              <time dateTime="2026-03-05">5. März 2026</time>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-lg leading-relaxed">
                Jedes Jahr ändern sich in Deutschland zahlreiche Steuerregeln. 2026
                bringt einige spürbare Entlastungen: Der Grundfreibetrag steigt
                deutlich, der Kinderfreibetrag wird angehoben, und diverse
                Pauschalen bleiben auf attraktivem Niveau. Hier erfahren Sie alle
                wichtigen Änderungen – und wie Sie davon profitieren.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Grundfreibetrag steigt auf 12.348 €
              </h2>
              <p>
                Die wichtigste Änderung 2026: Der{' '}
                <Link
                  href="/lexikon/grundfreibetrag"
                  className="text-[#DD0000] hover:underline"
                >
                  Grundfreibetrag
                </Link>{' '}
                steigt von 11.694 € (2025) auf <strong>12.348 €</strong>. Das
                bedeutet: Auf die ersten 12.348 € Ihres zu versteuernden
                Einkommens zahlen Sie keine Einkommensteuer. Für einen
                durchschnittlichen Arbeitnehmer ergibt sich dadurch eine jährliche
                Entlastung von ca. 100–200 €.
              </p>
              <p>
                Der Grundfreibetrag stellt sicher, dass das Existenzminimum
                steuerfrei bleibt. Die Anhebung gleicht die gestiegenen
                Lebenshaltungskosten aus und ist verfassungsrechtlich geboten.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Kinderfreibetrag: 9.756 € pro Kind
              </h2>
              <p>
                Familien profitieren 2026 vom erhöhten{' '}
                <Link
                  href="/lexikon/kinderfreibetrag"
                  className="text-[#DD0000] hover:underline"
                >
                  Kinderfreibetrag
                </Link>
                . Der Gesamtbetrag für beide Elternteile beträgt{' '}
                <strong>9.756 €</strong> pro Kind (4.878 € je Elternteil). Dieser
                setzt sich zusammen aus:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Sächlicher Kinderfreibetrag:</strong> 6.828 € (3.414 € x 2)
                </li>
                <li>
                  <strong>BEA-Freibetrag</strong> (Betreuung, Erziehung,
                  Ausbildung): 2.928 € (1.464 € x 2)
                </li>
              </ul>
              <p>
                Das Finanzamt prüft bei der Steuererklärung automatisch, ob der
                Kinderfreibetrag oder das Kindergeld günstiger ist
                (Günstigerprüfung).
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Pendlerpauschale: 0,38 € ab dem 21. Kilometer
              </h2>
              <p>
                Für Pendler gilt 2026 weiterhin die erhöhte Pendlerpauschale: Für
                die ersten 20 Kilometer beträgt sie <strong>0,30 €</strong> pro
                Entfernungskilometer, ab dem 21. Kilometer{' '}
                <strong>0,38 €</strong>. Bei 30 km einfacher Strecke und 220
                Arbeitstagen ergibt sich:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="font-semibold mb-2">Rechenbeispiel Pendlerpauschale:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Erste 20 km: 20 x 0,30 € x 220 Tage = 1.320 €</li>
                  <li>Km 21–30: 10 x 0,38 € x 220 Tage = 836 €</li>
                  <li>
                    <strong>Gesamt: 2.156 € als Werbungskosten absetzbar</strong>
                  </li>
                </ul>
              </div>
              <p>
                Nutzen Sie unseren{' '}
                <Link
                  href="/rechner/pendlerpauschale"
                  className="text-[#DD0000] hover:underline"
                >
                  Pendlerpauschale-Rechner
                </Link>{' '}
                für Ihre individuelle Berechnung.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Homeoffice-Pauschale: 6 €/Tag, max. 1.260 €
              </h2>
              <p>
                Wer regelmäßig von zu Hause arbeitet, kann die
                Homeoffice-Pauschale nutzen: <strong>6 € pro Tag</strong>, maximal{' '}
                <strong>1.260 €</strong> im Jahr (210 Tage). Ein separates
                Arbeitszimmer ist nicht erforderlich. Die Pauschale kann zusätzlich
                zum Arbeitnehmer-Pauschbetrag geltend gemacht werden, wenn die
                tatsächlichen Werbungskosten insgesamt über 1.230 € liegen.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Betriebliche Altersvorsorge: Bis 302 €/Monat steuerfrei
              </h2>
              <p>
                Die betriebliche Altersvorsorge (bAV) bleibt 2026 ein attraktives
                Steuersparmodell. Bis zu <strong>302 € monatlich</strong>{' '}
                (3.624 €/Jahr, entspricht 8 % der Beitragsbemessungsgrenze der
                Rentenversicherung) können steuerfrei eingezahlt werden.
                Sozialversicherungsfrei sind bis zu 4 % der BBG (4.056 €/Jahr).
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Sachbezüge: 50 €/Monat steuerfrei
              </h2>
              <p>
                Arbeitgeber können Ihnen monatlich Sachbezüge im Wert von bis zu{' '}
                <strong>50 €</strong> steuerfrei gewähren – etwa in Form von
                Gutscheinen, Tankkarten oder Prepaid-Kreditkarten. Das sind
                600 € pro Jahr, die komplett netto ankommen.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Arbeitnehmer-Pauschbetrag und Sonderausgaben
              </h2>
              <p>
                Der Arbeitnehmer-Pauschbetrag beträgt 2026 weiterhin{' '}
                <strong>1.230 €</strong>. Er wird automatisch bei der
                Lohnsteuerberechnung berücksichtigt. Liegen Ihre tatsächlichen
                Werbungskosten darüber, lohnt sich die Einzelauflistung in der
                Steuererklärung.
              </p>
              <p>
                Daneben können Sie Sonderausgaben wie Kirchensteuer,
                Spenden und Beiträge zur Altersvorsorge absetzen. Die
                Kirchensteuer (8 % oder 9 % der Lohnsteuer je nach Bundesland)
                ist als Sonderausgabe voll abzugsfähig.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                <p className="font-semibold mb-2">
                  Tipp: Kombinieren Sie mehrere Steuerspar-Strategien
                </p>
                <p>
                  Pendlerpauschale + Homeoffice-Pauschale + bAV + Sachbezüge
                  können zusammen mehrere Tausend Euro Steuern sparen. Prüfen
                  Sie, welche Möglichkeiten Ihr Arbeitgeber anbietet.
                </p>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Weiterführende Informationen
              </h2>
              <p>
                Offizielle Informationen zu den Steueränderungen 2026 finden Sie
                beim{' '}
                <a
                  href="https://www.bundesfinanzministerium.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  Bundesfinanzministerium
                </a>
                . Für individuelle Berechnungen nutzen Sie unseren{' '}
                <Link href="/" className="text-[#DD0000] hover:underline">
                  Brutto-Netto-Rechner 2026
                </Link>
                .
              </p>
              <p>
                Weitere Tipps finden Sie in unseren Ratgebern:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <Link
                    href="/ratgeber/mehr-netto-vom-brutto"
                    className="text-[#DD0000] hover:underline"
                  >
                    Mehr Netto vom Brutto: 10 Strategien
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ratgeber/steuererklarung-tipps"
                    className="text-[#DD0000] hover:underline"
                  >
                    Steuererklärung Tipps 2026
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} />
      <RelatedLinks
        currentHref="/blog/steuern-sparen-2026"
        count={6}
        title="Passende Rechner"
      />
    </>
  );
}
