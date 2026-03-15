import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Steuerklasse nach Hochzeit wechseln - So geht\'s',
  description:
    'Steuerklasse nach der Hochzeit wechseln: Wann lohnt sich 3/5 statt 4/4? Rechenbeispiel, Faktor-Verfahren und Auswirkungen auf Elterngeld und ALG I.',
  keywords:
    'steuerklasse hochzeit, steuerklasse nach heirat, steuerklasse 3 5, steuerklasse 4 4, steuerklassenwechsel heirat',
  alternates: {
    canonical: 'https://gehaltly.de/blog/steuerklasse-wechseln-hochzeit/',
  },
  openGraph: {
    title: 'Steuerklasse nach Hochzeit wechseln - So geht\'s',
    description:
      'Wann sich der Steuerklassenwechsel nach der Hochzeit lohnt und wie Sie monatlich Hunderte Euro sparen.',
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

export default function SteuerklasseHochzeitPage() {
  const faqs = [
    {
      question:
        'Welche Steuerklasse bekomme ich automatisch nach der Hochzeit?',
      answer:
        'Nach der Hochzeit werden beide Ehepartner automatisch in Steuerklasse 4/4 eingestuft. Der Wechsel erfolgt über das ELStAM-System und wird in der Regel innerhalb weniger Wochen nach der standesamtlichen Trauung wirksam. Ein Wechsel in 3/5 oder 4/4 mit Faktor muss aktiv beantragt werden.',
    },
    {
      question: 'Wann lohnt sich Steuerklasse 3/5 nach der Hochzeit?',
      answer:
        'Die Kombination 3/5 lohnt sich, wenn ein Partner deutlich mehr verdient als der andere (Einkommensunterschied von mehr als 40%). Der Besserverdienende erhält Steuerklasse 3 (weniger Abzüge), der Geringerverdienende Steuerklasse 5 (mehr Abzüge). Insgesamt hat der Haushalt monatlich mehr Netto, muss aber eine Steuererklärung abgeben und mit einer Nachzahlung rechnen.',
    },
    {
      question:
        'Muss ich bei Steuerklasse 3/5 eine Steuererklärung abgeben?',
      answer:
        'Ja, bei der Kombination 3/5 besteht eine Pflichtveranlagung — Sie müssen eine gemeinsame Steuererklärung abgeben. Da bei 3/5 monatlich tendenziell zu wenig Steuern einbehalten werden, kommt es häufig zu einer Nachzahlung. Bei 4/4 ist die Steuererklärung freiwillig.',
    },
    {
      question: 'Was ist das Faktor-Verfahren bei Steuerklasse 4/4?',
      answer:
        'Beim Faktor-Verfahren (4/4 mit Faktor) wird der Splittingvorteil bereits bei der monatlichen Lohnabrechnung berücksichtigt, statt erst bei der Steuererklärung. Der Faktor wird individuell berechnet und liegt zwischen 0 und 1. So wird die Steuerlast gerechter auf beide Partner verteilt und Nachzahlungen werden vermieden.',
    },
    {
      question:
        'Beeinflusst die Steuerklasse mein Elterngeld oder Arbeitslosengeld?',
      answer:
        'Ja, die Steuerklasse beeinflusst die Höhe von Lohnersatzleistungen wie Elterngeld, Arbeitslosengeld I, Kurzarbeitergeld und Krankengeld. Diese werden auf Basis des Nettoeinkommens berechnet. In Steuerklasse 3 ist das Netto höher, was zu höheren Lohnersatzleistungen führt. Ein rechtzeitiger Wechsel (7 Monate vor Elterngeld, 3-6 Monate vor ALG I) kann sich erheblich lohnen.',
    },
  ];

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Steuerklasse wechseln vor der Hochzeit: Lohnt es sich?',
    description:
      'Wann sich der Steuerklassenwechsel nach der Hochzeit lohnt und wie Sie monatlich Hunderte Euro sparen.',
    image: 'https://gehaltly.de/og-image.png',
    datePublished: '2026-01-28',
    dateModified: '2026-01-28',
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
      '@id': 'https://gehaltly.de/blog/steuerklasse-wechseln-hochzeit/',
    },
  };

  return (
    <>
      <SchemaMarkup schema={blogPostingSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Steuerklasse nach Hochzeit' },
          ]}
        />
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Steuerklasse wechseln nach der Hochzeit: Lohnt es sich?
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-8">
              <span>
                Von <strong>gehaltly.de</strong> Redaktion
              </span>
              <span>|</span>
              <span>Veröffentlicht: 28. Januar 2026</span>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Die Hochzeit bringt nicht nur emotionale Veränderungen, sondern
                auch steuerliche. Nach der standesamtlichen Trauung werden
                beide Partner automatisch in Steuerklasse 4/4 eingestuft. Doch
                ist das immer die beste Wahl? In diesem Artikel erklären wir,
                wann sich ein Wechsel in 3/5 lohnt, was das Faktor-Verfahren
                bringt und welche Auswirkungen die Steuerklasse auf
                Lohnersatzleistungen hat. Den Wechsel können Sie online über{' '}
                <a
                  href="https://www.elster.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  ELSTER
                </a>{' '}
                beantragen.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Nach der Hochzeit: Automatisch Steuerklasse 4/4
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sobald die standesamtliche Trauung erfolgt ist, werden beide
                Partner automatisch in die Steuerklassenkombination 4/4
                eingestuft. Die Änderung wird über das ELStAM-System
                (Elektronische LohnSteuerAbzugsMerkmale) an die Arbeitgeber
                übermittelt. In Steuerklasse 4 wird jeder Partner so
                besteuert, als ob er die Hälfte des gemeinsamen Einkommens
                verdient — das ist fair, wenn beide ähnlich viel verdienen.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-blue-900">
                  Steuerklasse 4/4 im Überblick
                </h3>
                <ul className="text-sm text-blue-900 space-y-2 list-disc list-inside">
                  <li>Automatische Zuweisung nach Heirat</li>
                  <li>Fair bei ähnlichen Einkommen</li>
                  <li>Keine Steuererklärungspflicht (freiwillig möglich)</li>
                  <li>In der Regel keine Nachzahlung</li>
                  <li>Standard seit 2023 auch bei Neuwahl</li>
                </ul>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Wann lohnt sich Steuerklasse 3/5?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Kombination 3/5 ist dann sinnvoll, wenn ein{' '}
                <strong>
                  Einkommensunterschied von mehr als 40%
                </strong>{' '}
                zwischen den Partnern besteht. Der Besserverdienende wählt
                Steuerklasse 3 (niedrigere Abzüge), der Geringerverdienende
                Steuerklasse 5 (höhere Abzüge). Im Haushalt bleibt monatlich
                mehr Netto übrig.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">
                Rechenbeispiel: Partner A 5.000 Euro, Partner B 2.500 Euro brutto
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Kombination</th>
                      <th className="border p-3 text-left">
                        Netto Partner A
                      </th>
                      <th className="border p-3 text-left">
                        Netto Partner B
                      </th>
                      <th className="border p-3 text-left">
                        Haushalt gesamt
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3 font-medium">4/4</td>
                      <td className="border p-3">ca. 3.150 Euro</td>
                      <td className="border p-3">ca. 1.780 Euro</td>
                      <td className="border p-3">ca. 4.930 Euro</td>
                    </tr>
                    <tr className="bg-green-50 font-semibold">
                      <td className="border p-3">3/5</td>
                      <td className="border p-3">ca. 3.650 Euro</td>
                      <td className="border p-3">ca. 1.500 Euro</td>
                      <td className="border p-3">ca. 5.150 Euro</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">
                        4/4 mit Faktor
                      </td>
                      <td className="border p-3">ca. 3.350 Euro</td>
                      <td className="border p-3">ca. 1.720 Euro</td>
                      <td className="border p-3">ca. 5.070 Euro</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Im Beispiel bringt die Kombination 3/5 monatlich ca. 220 Euro
                mehr Haushaltsnetto als 4/4. Allerdings ist zu beachten: Die
                jährliche Gesamtsteuerlast bleibt bei allen Kombinationen
                identisch. Der Unterschied liegt nur in der monatlichen
                Verteilung.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                ACHTUNG: Steuerklasse ist nicht gleich Gesamtsteuerlast!
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-amber-900">
                  Wichtig zu verstehen
                </h3>
                <p className="text-sm text-amber-900 mb-3">
                  Die Steuerklasse bestimmt nur die <strong>monatliche
                  Vorauszahlung</strong> der Lohnsteuer. Die tatsächliche
                  Steuerlast wird am Jahresende über die Einkommensteuererklärung
                  ermittelt. Bei der Kombination 3/5 wird monatlich oft zu
                  wenig Lohnsteuer einbehalten — das führt fast immer zu einer
                  Nachzahlung.
                </p>
                <ul className="text-sm text-amber-900 space-y-2 list-disc list-inside">
                  <li>
                    <strong>Bei 3/5:</strong> Pflichtveranlagung — Sie müssen
                    eine Steuererklärung abgeben
                  </li>
                  <li>
                    <strong>Nachzahlung:</strong> Kann je nach
                    Einkommenskonstellation mehrere hundert bis tausend Euro
                    betragen
                  </li>
                  <li>
                    <strong>Tipp:</strong> Legen Sie monatlich die Differenz
                    zurück, um die Nachzahlung problemlos leisten zu können
                  </li>
                </ul>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Das Faktor-Verfahren (4/4 mit Faktor)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Das Faktor-Verfahren ist eine Alternative zur Kombination 3/5,
                die den Splittingvorteil bereits bei der monatlichen
                Lohnabrechnung berücksichtigt. Das Finanzamt berechnet einen
                individuellen Faktor (zwischen 0 und 1), der auf die
                Lohnsteuer beider Partner angewendet wird. So wird die
                Steuerlast gerechter verteilt und Nachzahlungen werden
                minimiert.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-green-900">
                  Vorteile des Faktor-Verfahrens
                </h3>
                <ul className="text-sm text-green-900 space-y-2 list-disc list-inside">
                  <li>
                    Berücksichtigt den Splittingvorteil monatlich (nicht erst
                    bei Steuererklärung)
                  </li>
                  <li>
                    Gerechtere Verteilung der Steuerlast zwischen den
                    Partnern
                  </li>
                  <li>
                    Deutlich geringere Nachzahlungen als bei 3/5
                  </li>
                  <li>
                    Geeignet für Paare mit unterschiedlichem Einkommen, die
                    keine Nachzahlung wollen
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Nachteil: Der Faktor muss jährlich neu beantragt werden
                und die Berechnung ist weniger transparent als bei 3/5 oder
                4/4. Nutzen Sie unseren{' '}
                <Link
                  href="/rechner/steuerklassenrechner"
                  className="text-[#DD0000] hover:underline"
                >
                  Steuerklassenrechner
                </Link>
                , um die Auswirkungen der verschiedenen Kombinationen zu
                vergleichen.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Auswirkung auf Elterngeld, ALG I und Kurzarbeitergeld
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Steuerklasse hat einen direkten Einfluss auf die Höhe von
                Lohnersatzleistungen, da diese auf dem Nettogehalt basieren:
              </p>
              <ul className="text-muted-foreground space-y-3 list-disc list-inside mb-4">
                <li>
                  <strong>Elterngeld:</strong> 65-67% des Nettoeinkommens der
                  letzten 12 Monate. Ein Wechsel in Steuerklasse 3 mindestens
                  7 Monate vor der Geburt kann das Elterngeld erheblich
                  steigern (siehe unseren{' '}
                  <Link
                    href="/blog/elterngeld-2026-regelungen"
                    className="text-[#DD0000] hover:underline"
                  >
                    Elterngeld-Artikel
                  </Link>
                  ).
                </li>
                <li>
                  <strong>Arbeitslosengeld I:</strong> 60% (67% mit Kind) des
                  pauschalierten Nettoentgelts. Die Steuerklasse der letzten
                  12 Monate vor Arbeitslosigkeit ist maßgeblich.
                </li>
                <li>
                  <strong>Kurzarbeitergeld:</strong> Basiert auf der
                  Differenz zwischen Soll- und Ist-Entgelt, wobei die
                  Steuerklasse in die Berechnung einfließt.
                </li>
                <li>
                  <strong>Krankengeld:</strong> 70% des Brutto, maximal 90%
                  des Netto — Steuerklasse beeinflusst die Netto-Obergrenze.
                </li>
              </ul>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Antrag und Timeline: So wechseln Sie die Steuerklasse
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Steuerklassenwechsel kann auf mehrere Arten beantragt
                werden:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-3 text-blue-900">
                  Schritt-für-Schritt
                </h3>
                <ol className="text-sm text-blue-900 space-y-2 list-decimal list-inside">
                  <li>
                    <strong>Online über ELSTER:</strong> Beide Partner melden
                    sich an und beantragen den Wechsel elektronisch
                  </li>
                  <li>
                    <strong>Per Formular:</strong> &quot;Antrag auf
                    Steuerklassenwechsel bei Ehegatten/Lebenspartnern&quot;
                    ausfüllen, unterschreiben, beim Finanzamt einreichen
                  </li>
                  <li>
                    <strong>Bearbeitungszeit:</strong> ca. 2-4 Wochen
                  </li>
                  <li>
                    <strong>Wirksamkeit:</strong> Ab dem Folgemonat nach
                    Bearbeitung
                  </li>
                </ol>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Wichtig:</strong> Seit 2020 können Ehepaare die
                Steuerklasse mehrmals im Jahr wechseln. Beide Partner müssen
                den Antrag gemeinsam stellen. Der Arbeitgeber wird automatisch
                über ELStAM informiert.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-blue-900">
                  Weiterführende Informationen
                </h3>
                <ul className="text-sm text-blue-900 space-y-2 list-disc list-inside">
                  <li>
                    <Link
                      href="/rechner/steuerklassenrechner"
                      className="text-[#DD0000] hover:underline"
                    >
                      Steuerklassenrechner
                    </Link>{' '}
                    — Vergleichen Sie 3/5, 4/4 und 4/4 mit Faktor
                  </li>
                  <li>
                    <Link
                      href="/ratgeber/steuerklasse-wechseln"
                      className="text-[#DD0000] hover:underline"
                    >
                      Ratgeber: Steuerklasse wechseln
                    </Link>{' '}
                    — Ausführlicher Guide mit allen Optionen
                  </li>
                  <li>
                    <Link
                      href="/ratgeber/steuerklassen"
                      className="text-[#DD0000] hover:underline"
                    >
                      Ratgeber: Steuerklassen
                    </Link>{' '}
                    — Alle 6 Steuerklassen im Detail erklärt
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/blog/steuerklasse-wechseln-hochzeit"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
