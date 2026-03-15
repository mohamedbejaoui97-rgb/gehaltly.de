import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Beitragsbemessungsgrenzen 2026 - Was ändert sich?',
  description:
    'Beitragsbemessungsgrenzen 2026 erklärt: Neue BBG-Werte für KV, PV, RV und ALV. Was bedeuten die einheitlichen Grenzen für Ihr Nettoeinkommen?',
  keywords:
    'beitragsbemessungsgrenze 2026, bbg 2026, versicherungspflichtgrenze 2026, jaeg 2026, sozialversicherung grenzen',
  alternates: {
    canonical: 'https://gehaltly.de/blog/beitragsbemessungsgrenze-2026/',
  },
  openGraph: {
    title: 'Beitragsbemessungsgrenzen 2026 - Was ändert sich?',
    description:
      'Neue BBG-Werte 2026: Was bedeuten die einheitlichen Grenzen für Ihr Nettoeinkommen?',
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

export default function BeitragsbemessungsgrenzePage() {
  const faqs = [
    {
      question: 'Was ist die Beitragsbemessungsgrenze (BBG)?',
      answer:
        'Die Beitragsbemessungsgrenze ist die Einkommensobergrenze, bis zu der Sozialversicherungsbeiträge berechnet werden. Einkommen über dieser Grenze ist beitragsfrei. Es gibt unterschiedliche BBG-Werte für Kranken-/Pflegeversicherung und Renten-/Arbeitslosenversicherung.',
    },
    {
      question: 'Wie hoch ist die BBG 2026 für die Krankenversicherung?',
      answer:
        'Die Beitragsbemessungsgrenze für die Kranken- und Pflegeversicherung beträgt 2026 bundesweit einheitlich 66.150 Euro pro Jahr bzw. 5.512,50 Euro pro Monat. Seit 2025 gibt es keine Unterscheidung mehr zwischen Ost und West.',
    },
    {
      question: 'Was ist der Unterschied zwischen BBG und JAEG?',
      answer:
        'Die BBG (Beitragsbemessungsgrenze) bestimmt das Maximum, bis zu dem SV-Beiträge erhoben werden. Die JAEG (Jahresarbeitsentgeltgrenze / Versicherungspflichtgrenze) bestimmt, ab welchem Einkommen man sich privat krankenversichern darf. Die JAEG liegt 2026 bei 77.400 Euro/Jahr.',
    },
    {
      question: 'Sind die BBG-Werte 2026 bundesweit einheitlich?',
      answer:
        'Ja, seit 2025 gelten die Beitragsbemessungsgrenzen bundesweit einheitlich. Die frühere Unterscheidung zwischen alten und neuen Bundesländern bei der Renten- und Arbeitslosenversicherung wurde abgeschafft.',
    },
    {
      question: 'Profitiere ich von der BBG wenn ich über der Grenze verdiene?',
      answer:
        'Ja, wer über der BBG verdient, zahlt auf den Mehrverdienst keine Sozialversicherungsbeiträge. Bei einem Brutto von 7.000 Euro/Monat werden z.B. die KV-Beiträge nur bis 5.512,50 Euro berechnet. Der Anteil darüber ist beitragsfrei, was das Netto erhöht.',
    },
  ];

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Beitragsbemessungsgrenzen 2026 erklärt',
    description:
      'Neue BBG-Werte 2026: Was bedeuten die einheitlichen Grenzen für Ihr Nettoeinkommen?',
    image: 'https://gehaltly.de/og-image.png',
    datePublished: '2026-02-15',
    dateModified: '2026-02-15',
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
      '@id': 'https://gehaltly.de/blog/beitragsbemessungsgrenze-2026/',
    },
  };

  return (
    <>
      <SchemaMarkup schema={blogPostingSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Beitragsbemessungsgrenzen 2026' },
          ]}
        />
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Beitragsbemessungsgrenzen 2026 erklärt
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-8">
              <span>
                Von <strong>gehaltly.de</strong> Redaktion
              </span>
              <span>|</span>
              <span>Veröffentlicht: 15. Februar 2026</span>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Die Beitragsbemessungsgrenzen (BBG) bestimmen, bis zu welchem
                Einkommen Sozialversicherungsbeiträge erhoben werden. 2026
                gelten neue Werte, die seit 2025 erstmals bundesweit einheitlich
                sind. In diesem Artikel erklären wir, was die BBG bedeutet,
                welche Änderungen es 2026 gibt und wie sich das auf Ihr
                Nettogehalt auswirkt. Offizielle Informationen finden Sie bei der{' '}
                <a
                  href="https://www.bundesregierung.de/breg-de/themen/sozialversicherungswerte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DD0000] hover:underline"
                >
                  Bundesregierung
                </a>
                .
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Was ist die Beitragsbemessungsgrenze?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Beitragsbemessungsgrenze ist die Einkommensobergrenze, bis
                zu der Sozialversicherungsbeiträge vom Gehalt berechnet werden.
                Verdient ein Arbeitnehmer mehr als die BBG, wird nur der Teil
                bis zur Grenze herangezogen. Der Mehrverdienst darüber ist
                beitragsfrei. Es gibt separate BBG-Werte für die Kranken- und
                Pflegeversicherung einerseits und die Renten- und
                Arbeitslosenversicherung andererseits.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die BBG wird jährlich von der Bundesregierung angepasst und
                orientiert sich an der allgemeinen Lohnentwicklung. Seit 2025
                gelten die Werte bundesweit einheitlich — die frühere
                Unterscheidung zwischen alten und neuen Bundesländern bei der
                Renten- und Arbeitslosenversicherung entfällt.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                BBG 2026: Die aktuellen Werte
              </h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-3 text-blue-900">
                  Beitragsbemessungsgrenzen 2026 im Überblick
                </h3>
                <ul className="text-sm text-blue-900 space-y-2 list-disc list-inside">
                  <li>
                    <strong>Kranken- und Pflegeversicherung:</strong> 66.150
                    Euro/Jahr (5.512,50 Euro/Monat) — bundesweit einheitlich
                    seit 2025
                  </li>
                  <li>
                    <strong>Renten- und Arbeitslosenversicherung:</strong>{' '}
                    101.400 Euro/Jahr (8.450 Euro/Monat) — bundesweit
                    einheitlich seit 2025
                  </li>
                  <li>
                    <strong>
                      JAEG (Versicherungspflichtgrenze):
                    </strong>{' '}
                    77.400 Euro/Jahr (6.450 Euro/Monat) — gestiegen von 73.800
                    Euro
                  </li>
                </ul>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Historische Entwicklung der BBG (2022–2026)
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Jahr</th>
                      <th className="border p-3 text-left">BBG KV/PV (Jahr)</th>
                      <th className="border p-3 text-left">
                        BBG RV/ALV (Jahr)
                      </th>
                      <th className="border p-3 text-left">JAEG (Jahr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3 font-medium">2022</td>
                      <td className="border p-3">58.050 €</td>
                      <td className="border p-3">84.600 € (West)</td>
                      <td className="border p-3">64.350 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">2023</td>
                      <td className="border p-3">59.850 €</td>
                      <td className="border p-3">87.600 € (West)</td>
                      <td className="border p-3">66.600 €</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">2024</td>
                      <td className="border p-3">62.100 €</td>
                      <td className="border p-3">90.600 € (West)</td>
                      <td className="border p-3">69.300 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3 font-medium">2025</td>
                      <td className="border p-3">66.150 €</td>
                      <td className="border p-3">96.600 € (einheitlich)</td>
                      <td className="border p-3">73.800 €</td>
                    </tr>
                    <tr className="bg-yellow-50 font-semibold">
                      <td className="border p-3">2026</td>
                      <td className="border p-3">66.150 €</td>
                      <td className="border p-3">101.400 € (einheitlich)</td>
                      <td className="border p-3">77.400 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Tabelle zeigt, dass die BBG in den letzten Jahren stetig
                gestiegen ist. Besonders auffällig ist die Vereinheitlichung der
                RV/ALV-Grenze seit 2025, die zuvor in Ost und West
                unterschiedlich war.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Was bedeutet das für Ihr Netto?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die BBG wirkt sich direkt auf Ihr Nettogehalt aus: Wer
                über der Grenze verdient, zahlt ab dem Mehrverdienst keine
                Sozialversicherungsbeiträge mehr. Dadurch steigt die
                Netto-Quote bei höheren Gehältern überproportional an.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">
                Beispielrechnung: 7.000 Euro brutto/Monat
              </h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-green-900 mb-3">
                  Bei einem Monatsbrutto von 7.000 Euro liegt das Einkommen
                  über der BBG für KV/PV (5.512,50 Euro):
                </p>
                <ul className="text-sm text-green-900 space-y-2 list-disc list-inside">
                  <li>
                    <strong>KV-Beitrag (AN-Anteil 8,75%):</strong> Nur bis
                    5.512,50 Euro = 482,34 Euro (statt 612,50 Euro bei vollem
                    Brutto)
                  </li>
                  <li>
                    <strong>PV-Beitrag (AN-Anteil 1,8%):</strong> Nur bis
                    5.512,50 Euro = 99,23 Euro (statt 126,00 Euro)
                  </li>
                  <li>
                    <strong>Ersparnis durch BBG:</strong> ca. 157 Euro/Monat
                    weniger Sozialabgaben
                  </li>
                </ul>
                <p className="text-sm text-green-900 mt-3">
                  Die RV/ALV-BBG von 8.450 Euro/Monat ist bei 7.000 Euro noch
                  nicht erreicht — hier wird das volle Brutto herangezogen.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Berechnen Sie Ihr persönliches Nettogehalt mit unserem{' '}
                <Link href="/" className="text-[#DD0000] hover:underline">
                  Brutto-Netto-Rechner
                </Link>
                . Alle aktuellen BBG-Werte sind dort bereits hinterlegt.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                Auswirkungen auf Gutverdiener
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Für Arbeitnehmer mit einem Gehalt oberhalb der BBG bedeutet die
                Grenze, dass der Sozialversicherungsbeitrag gedeckelt ist. Je
                höher das Einkommen über die BBG hinausgeht, desto geringer ist
                der prozentuale Anteil der Sozialabgaben am Gesamtgehalt. Das
                führt dazu, dass Gutverdiener einen proportional höheren
                Netto-Anteil ihres Gehalts behalten.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Allerdings steigt gleichzeitig die Einkommensteuer progressiv
                an. Ab 69.878 Euro zu versteuerndem Jahreseinkommen greift der
                Spitzensteuersatz von 42%, ab 277.825 Euro die Reichensteuer
                von 45%. Die Steuerersparnis durch die BBG wird also teilweise
                durch höhere Steuern kompensiert.
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-10 mb-4">
                PKV-Grenze (JAEG) erklärt
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Jahresarbeitsentgeltgrenze (JAEG), auch
                Versicherungspflichtgrenze genannt, bestimmt, ab welchem
                Einkommen Arbeitnehmer die Möglichkeit haben, von der
                gesetzlichen in die private Krankenversicherung (PKV) zu
                wechseln. 2026 steigt die JAEG auf 77.400 Euro pro Jahr (6.450
                Euro/Monat), nachdem sie 2025 noch bei 73.800 Euro lag.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Um in die PKV wechseln zu können, muss das regelmäßige
                Jahresarbeitsentgelt die JAEG voraussichtlich im Folgejahr
                überschreiten. Das bedeutet: Wer 2026 ein regelmäßiges
                Bruttoeinkommen von mindestens 6.450 Euro/Monat hat, kann sich
                ab 2027 privat versichern lassen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ausführliche Informationen zur Beitragsbemessungsgrenze und
                ihren Auswirkungen finden Sie in unserem{' '}
                <Link
                  href="/lexikon/beitragsbemessungsgrenze"
                  className="text-[#DD0000] hover:underline"
                >
                  Lexikon-Eintrag zur Beitragsbemessungsgrenze
                </Link>
                .
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 text-blue-900">
                  Zusammenfassung
                </h3>
                <p className="text-sm text-blue-900">
                  Die BBG 2026 bringt vor allem bei der Renten- und
                  Arbeitslosenversicherung eine deutliche Erhöhung auf 101.400
                  Euro/Jahr. Die KV/PV-Grenze bleibt bei 66.150 Euro. Wer
                  über diesen Grenzen verdient, profitiert von gedeckelten
                  Sozialabgaben. Die JAEG steigt auf 77.400 Euro und bestimmt
                  die PKV-Zugangsgrenze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/blog/beitragsbemessungsgrenze-2026"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
