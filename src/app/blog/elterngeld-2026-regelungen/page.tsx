import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Elterngeld 2026 - Neue Regelungen erklärt',
  description:
    'Elterngeld 2026: Neue Einkommensgrenzen (200.000 Euro für Paare), Steuerklassen-Trick, Partnerschaftsbonus und Progressionsvorbehalt erklärt.',
  keywords:
    'elterngeld 2026, elterngeld einkommensgrenze, elterngeld berechnen, elterngeld steuerklasse, elterngeld plus',
  alternates: {
    canonical: 'https://gehaltly.de/blog/elterngeld-2026-regelungen/',
  },
  openGraph: {
    title: 'Elterngeld 2026 - Neue Regelungen erklärt',
    description:
      'Einkommensgrenzen, Partnerschaftsbonus und Steuerklassentrick – alle Änderungen beim Elterngeld 2026.',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
      },
    ],
  },
};

export default function ElterngeldPage() {
  const faqs = [
    {
      question: 'Wie hoch ist das Elterngeld 2026?',
      answer:
        'Das Basiselterngeld beträgt zwischen 300 und 1.800 Euro pro Monat, abhängig vom Nettoeinkommen vor der Geburt. Die Ersatzrate liegt bei 65-67% des Nettoeinkommens. Bei sehr niedrigem Einkommen (unter 1.000 Euro netto) kann die Ersatzrate auf bis zu 100% steigen. ElterngeldPlus beträgt die Hälfte: 150 bis 900 Euro.',
    },
    {
      question: 'Welche Einkommensgrenzen gelten 2026 für Elterngeld?',
      answer:
        'Seit 2024 gelten gesenkte Einkommensgrenzen: Paare mit einem gemeinsamen zu versteuernden Einkommen über 200.000 Euro (vorher 300.000 Euro) haben keinen Anspruch auf Elterngeld. Für Alleinerziehende liegt die Grenze bei 150.000 Euro.',
    },
    {
      question: 'Wie funktioniert der Steuerklassen-Trick beim Elterngeld?',
      answer:
        'Der elterngeldbeziehende Partner wechselt mindestens 7 Monate vor der Geburt in Steuerklasse 3. Dadurch ist das monatliche Nettoeinkommen höher, was zu einem höheren Elterngeld führt (65-67% vom Netto). Der Trick kann das Elterngeld um mehrere hundert Euro pro Monat erhöhen.',
    },
    {
      question: 'Was ist der Partnerschaftsbonus beim Elterngeld?',
      answer:
        'Der Partnerschaftsbonus gewährt beiden Elternteilen jeweils 4 zusätzliche Monate ElterngeldPlus, wenn beide gleichzeitig zwischen 24 und 32 Stunden pro Woche arbeiten. So können Eltern bis zu 28 Monate ElterngeldPlus erhalten.',
    },
    {
      question: 'Muss ich auf Elterngeld Steuern zahlen?',
      answer:
        'Elterngeld ist steuerfrei, unterliegt aber dem Progressionsvorbehalt. Das bedeutet: Das Elterngeld wird bei der Berechnung des Steuersatzes für das übrige Einkommen berücksichtigt. Dadurch kann der Steuersatz auf andere Einkünfte steigen, was zu einer Nachzahlung bei der Steuererklärung führen kann.',
    },
  ];

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Elterngeld 2026: Neue Regelungen und Einkommensgrenzen',
    description:
      'Einkommensgrenzen, Partnerschaftsbonus und Steuerklassentrick – alle Änderungen beim Elterngeld 2026.',
    image: 'https://gehaltly.de/og-image.png',
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    author: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      url: 'https://gehaltly.de',
    },
    publisher: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      url: 'https://gehaltly.de',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gehaltly.de/og-image.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://gehaltly.de/blog/elterngeld-2026-regelungen/',
    },
  };

  return (
    <>
      <SchemaMarkup schema={blogPostingSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Elterngeld 2026' },
          ]}
        />
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Elterngeld 2026: Neue Regelungen und Einkommensgrenzen
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-8">
              <span>
                Von <strong>gehaltly.de</strong> Redaktion
              </span>
              <span>|</span>
              <span>Veröffentlicht: 5. Februar 2026</span>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Das Elterngeld ist eine der wichtigsten Familienleistungen in
                Deutschland. 2026 gelten neue Einkommensgrenzen, die den Kreis
                der Berechtigten einschränken. In diesem Artikel erklären wir
                alle Regelungen, den Steuerklassen-Trick für höheres Elterngeld
                und den Progressionsvorbehalt. Offizielle Informationen finden
                Sie beim{' '}
                <a
                  href="https://www.bmfsfj.de/bmfsfj/themen/familie/familienleistungen/elterngeld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  Bundesfamilienministerium (BMFSFJ)
                </a>{' '}
                und im{' '}
                <a
                  href="https://familienportal.de/familienportal/familienleistungen/elterngeld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  Familienportal
                </a>
                .
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Elterngeld Grundlagen: Basiselterngeld vs. ElterngeldPlus
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Das Elterngeld gibt es in zwei Varianten, die auch kombiniert
                werden können:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-blue-900">
                    Basiselterngeld
                  </h3>
                  <ul className="text-sm text-blue-900 space-y-2 list-disc list-inside">
                    <li>
                      <strong>Höhe:</strong> 300 – 1.800 Euro/Monat
                    </li>
                    <li>
                      <strong>Dauer:</strong> Bis zu 12 Monate (+ 2
                      Partnermonate)
                    </li>
                    <li>
                      <strong>Ersatzrate:</strong> 65-67% des Nettoeinkommens
                    </li>
                    <li>Kein Zuverdienst über 32h/Woche erlaubt</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-green-900">
                    ElterngeldPlus
                  </h3>
                  <ul className="text-sm text-green-900 space-y-2 list-disc list-inside">
                    <li>
                      <strong>Höhe:</strong> 150 – 900 Euro/Monat
                    </li>
                    <li>
                      <strong>Dauer:</strong> Bis zu 24 Monate (+ 4
                      Partnermonate)
                    </li>
                    <li>1 Basiselterngeld-Monat = 2 ElterngeldPlus-Monate</li>
                    <li>Teilzeitarbeit bis 32h/Woche möglich</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Ersatzrate beträgt in der Regel 65-67% des
                durchschnittlichen monatlichen Nettoeinkommens der letzten 12
                Monate vor der Geburt. Bei einem Nettoeinkommen unter 1.000
                Euro steigt die Rate schrittweise auf bis zu 100%. Bei
                Einkommen über 1.200 Euro sinkt sie auf 65%.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Einkommensgrenzen 2026: Wer hat Anspruch?
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-amber-900">
                  Wichtige Änderung seit 2024
                </h3>
                <p className="text-sm text-amber-900 mb-3">
                  Die Einkommensgrenzen wurden deutlich gesenkt:
                </p>
                <ul className="text-sm text-amber-900 space-y-2 list-disc list-inside">
                  <li>
                    <strong>Paare:</strong> 200.000 Euro zu versteuerndes
                    Jahreseinkommen (vorher 300.000 Euro)
                  </li>
                  <li>
                    <strong>Alleinerziehende:</strong> 150.000 Euro zu
                    versteuerndes Jahreseinkommen
                  </li>
                </ul>
                <p className="text-sm text-amber-900 mt-3">
                  Maßgeblich ist das zu versteuernde Einkommen im
                  Kalenderjahr vor der Geburt. Liegt das gemeinsame Einkommen
                  über der Grenze, besteht kein Anspruch auf Elterngeld.
                </p>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Der Steuerklassen-Trick: So erhalten Sie mehr Elterngeld
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Das Elterngeld wird auf Basis des Nettoeinkommens berechnet.
                Ein cleverer und völlig legaler Trick: Der Partner, der in
                Elternzeit geht, wechselt <strong>mindestens 7 Monate
                vor der Geburt</strong> in Steuerklasse 3. Dadurch ist das
                monatliche Netto höher, was automatisch zu höherem Elterngeld
                führt.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-3 text-green-900">
                  Rechenbeispiel: Steuerklassen-Trick
                </h3>
                <div className="space-y-2 text-sm text-green-900">
                  <div className="flex justify-between pb-2 border-b border-green-200">
                    <span>Brutto Partnerin (geht in Elternzeit):</span>
                    <strong>3.500 Euro/Monat</strong>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-green-200">
                    <span>Netto in Steuerklasse 5:</span>
                    <span>
                      ca. 1.920 Euro → Elterngeld:{' '}
                      <strong>ca. 1.248 Euro</strong>
                    </span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-green-200">
                    <span>Netto in Steuerklasse 3:</span>
                    <span>
                      ca. 2.600 Euro → Elterngeld:{' '}
                      <strong>ca. 1.690 Euro</strong>
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 font-semibold">
                    <span>Unterschied pro Monat:</span>
                    <span>+442 Euro mehr Elterngeld</span>
                  </div>
                  <p className="mt-2 text-xs">
                    Bei 12 Monaten Elterngeld: ca. 5.304 Euro mehr insgesamt!
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Wichtig:</strong> Die Steuerklasse muss in der
                Mehrheit der 12 Bemessungsmonate gegolten haben (mindestens 7
                von 12 Monaten). Planen Sie den Wechsel also frühzeitig.
                Nutzen Sie unseren{' '}
                <Link
                  href="/rechner/steuerklassenrechner"
                  className="text-[#DD0000] hover:underline"
                >
                  Steuerklassenrechner
                </Link>
                , um die Auswirkungen zu berechnen.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Partnerschaftsbonus: 4 Extra-Monate
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Partnerschaftsbonus belohnt Eltern, die sich die
                Betreuung teilen. Wenn <strong>beide Elternteile
                gleichzeitig zwischen 24 und 32 Stunden pro Woche
                arbeiten</strong>, erhalten sie jeweils 4 zusätzliche Monate
                ElterngeldPlus. So sind insgesamt bis zu 28 Monate
                ElterngeldPlus möglich.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Partnerschaftsbonus muss von beiden Eltern gleichzeitig
                in mindestens 2 aufeinanderfolgenden Monaten in Anspruch
                genommen werden. Die Arbeitszeitgrenzen (24-32 Stunden) gelten
                im Durchschnitt des jeweiligen Lebensmonats des Kindes.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Progressionsvorbehalt: Elterngeld und Steuern
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Das Elterngeld ist zwar steuerfrei, unterliegt aber dem
                sogenannten Progressionsvorbehalt. Das bedeutet: Das
                Elterngeld wird bei der Ermittlung des Steuersatzes für das
                übrige Einkommen berücksichtigt. Dadurch kann sich der
                persönliche Steuersatz erhöhen, was zu einer Steuernachzahlung
                bei der jährlichen Steuererklärung führen kann.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-blue-900">
                  Beispiel Progressionsvorbehalt
                </h3>
                <p className="text-sm text-blue-900">
                  Ein Elternteil verdient 30.000 Euro/Jahr und erhält 10.000
                  Euro Elterngeld. Der Steuersatz wird so berechnet, als ob
                  40.000 Euro verdient worden wären. Dieser höhere Steuersatz
                  wird dann auf die 30.000 Euro angewendet. Je nach Situation
                  kann dies eine Nachzahlung von einigen hundert Euro
                  bedeuten.
                </p>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Elterngeld und Minijob
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Während des Bezugs von Basiselterngeld dürfen Sie maximal 32
                Stunden pro Woche arbeiten. Ein{' '}
                <Link
                  href="/lexikon/minijob"
                  className="text-[#DD0000] hover:underline"
                >
                  Minijob
                </Link>{' '}
                mit bis zu 556 Euro/Monat ist dabei besonders attraktiv, da
                der Verdienst für den Arbeitnehmer sozialabgabenfrei bleibt.
                Allerdings wird der Zuverdienst bei der Elterngeld-Berechnung
                berücksichtigt und kann das Elterngeld mindern.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bei ElterngeldPlus ist die Anrechnung anders geregelt: Hier
                wird nur die Differenz zwischen dem Einkommen vor und nach der
                Geburt als Bemessungsgrundlage herangezogen. Ein Minijob
                während ElterngeldPlus kann daher vorteilhafter sein.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-blue-900">
                  Weiterführende Informationen
                </h3>
                <ul className="text-sm text-blue-900 space-y-2 list-disc list-inside">
                  <li>
                    <Link
                      href="/rechner/elterngeld"
                      className="text-[#DD0000] hover:underline"
                    >
                      Elterngeld-Rechner
                    </Link>{' '}
                    — Berechnen Sie Ihr voraussichtliches Elterngeld
                  </li>
                  <li>
                    <Link
                      href="/lexikon/elterngeld"
                      className="text-[#DD0000] hover:underline"
                    >
                      Lexikon: Elterngeld
                    </Link>{' '}
                    — Alle Grundlagen kompakt erklärt
                  </li>
                  <li>
                    <Link
                      href="/ratgeber/elterngeld-brutto-netto"
                      className="text-[#DD0000] hover:underline"
                    >
                      Ratgeber: Elterngeld und Brutto-Netto
                    </Link>{' '}
                    — Ausführlicher Ratgeber zur Berechnung
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/blog/elterngeld-2026-regelungen"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
