import { Metadata } from 'next';
import { Users, Heart, Briefcase, FileText } from 'lucide-react';
import PageHero from '@/components/content/PageHero';
import ContentSection from '@/components/content/ContentSection';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Steuerklassen in Deutschland - Übersicht 2026 | gehaltly.de',
  description: 'Alle 6 Steuerklassen erklärt: Wer gehört in welche Steuerklasse? Unterschiede, Vor- und Nachteile sowie Wechselmöglichkeiten im Überblick 2026.',
  keywords: 'steuerklassen deutschland, steuerklasse 1 2 3 4 5 6, steuerklasse wechseln, beste steuerklasse',
  openGraph: {
    title: 'Steuerklassen in Deutschland - Übersicht 2026',
    description: 'Alle 6 Steuerklassen erklärt mit Beispielen und Empfehlungen für Ihre Situation.',
    type: 'article',
  },
};

export default function SteuerklassenPage() {
  const faqs = [
    {
      question: 'Welche Steuerklasse habe ich?',
      answer: 'Ihre Steuerklasse richtet sich nach Ihrem Familienstand: Ledige und Geschiedene haben Steuerklasse 1, Alleinerziehende haben Steuerklasse 2. Verheiratete können zwischen Steuerklasse 3/5 oder 4/4 wählen. Für ein zweites Arbeitsverhältnis gilt automatisch Steuerklasse 6. Sie finden Ihre aktuelle Steuerklasse auf Ihrer Lohnabrechnung.',
    },
    {
      question: 'Welche Steuerklasse ist für Verheiratete am besten?',
      answer: 'Das hängt von den Einkommensverhältnissen ab: Bei ähnlichen Einkommen (Unterschied unter 10%) ist Steuerklasse 4/4 optimal. Bei größerem Einkommensunterschied bringt die Kombination 3/5 monatlich mehr Netto - der Besserverdiener wählt Klasse 3, der Partner Klasse 5. Seit 2023 ist 4/4 die Standardkombination für Ehepaare. Eine Günstigerprüfung erfolgt in der Steuererklärung.',
    },
    {
      question: 'Kann ich meine Steuerklasse wechseln?',
      answer: 'Ja, ein Steuerklassenwechsel ist möglich: Verheiratete können einmal jährlich zwischen 3/5 und 4/4 wechseln. Bei Änderung des Familienstands (Heirat, Scheidung) erfolgt der Wechsel automatisch bzw. auf Antrag. Alleinerziehende können mit Nachweis in Steuerklasse 2 wechseln. Der Wechsel erfolgt über ein Formular beim Finanzamt und gilt ab dem Folgemonat.',
    },
    {
      question: 'Was ist der Unterschied zwischen Steuerklasse 1 und 4?',
      answer: 'Beide Steuerklassen haben fast identische Abzüge und berücksichtigen den gleichen Grundfreibetrag. Der einzige Unterschied: Steuerklasse 1 ist für Ledige, Geschiedene und dauerhaft getrennt Lebende. Steuerklasse 4 ist für Verheiratete gedacht, die beide arbeiten und ähnlich viel verdienen. Seit 2023 erhalten frisch Verheiratete automatisch die Kombination 4/4 statt wie früher 4/4 oder 3/5.',
    },
    {
      question: 'Was bedeutet Steuerklasse 6?',
      answer: 'Steuerklasse 6 gilt automatisch für das zweite und jedes weitere Arbeitsverhältnis. Sie hat die höchsten Abzüge, da keine Freibeträge berücksichtigt werden - die wurden bereits im ersten Job angerechnet. Typische Fälle: Nebenjob zusätzlich zum Hauptjob, parallele Beschäftigungen bei verschiedenen Arbeitgebern. Die tatsächliche Steuerlast wird in der Jahressteuererklärung ausgeglichen, daher ist diese oft mit einer Rückzahlung verbunden.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Steuerklassen in Deutschland - Übersicht 2026',
    description: 'Alle 6 Steuerklassen erklärt: Unterschiede, Wechselmöglichkeiten und welche Steuerklasse für Sie optimal ist.',
    author: {
      '@type': 'Organization',
      name: 'gehaltly.de',
    },
    publisher: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gehaltly.de/logo.png',
      },
    },
    datePublished: '2026-01-01',
    dateModified: '2026-02-13',
  };

  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Ratgeber', href: '/ratgeber' },
            { label: 'Steuerklassen' },
          ]}
        />
      </div>

      <PageHero
        title="Steuerklassen in Deutschland - Übersicht 2026"
        description="Alle 6 Steuerklassen im Detail erklärt. Erfahren Sie, welche Steuerklasse für Sie gilt, wie sich die Klassen unterscheiden und wann ein Wechsel sinnvoll ist."
      />

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Die Steuerklasse bestimmt, wie viel Lohnsteuer monatlich von Ihrem Gehalt abgezogen wird. In Deutschland gibt es sechs verschiedene Steuerklassen, die sich nach Familienstand und Anzahl der Arbeitsverhältnisse richten.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Die Wahl der richtigen Steuerklasse kann erheblichen Einfluss auf Ihr monatliches Nettoeinkommen haben. Wir erklären Ihnen alle Steuerklassen im Detail und zeigen, welche für Ihre Situation optimal ist.
            </p>
          </div>
        </div>
      </section>

      <ContentSection
        heading="Steuerklasse 1 - Für Ledige und Alleinstehende"
        icon={<Users className="w-5 h-5" />}
        body="Steuerklasse 1 ist die häufigste Steuerklasse in Deutschland. Sie gilt für alle ledigen, geschiedenen und dauerhaft getrennt lebenden Arbeitnehmer ohne Kinder."
      >
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4">
            <h3 className="font-semibold mb-2">Wer gehört in Steuerklasse 1?</h3>
            <ul className="text-sm space-y-1 list-disc list-inside text-blue-900 dark:text-blue-100">
              <li>Ledige Arbeitnehmer</li>
              <li>Geschiedene oder verwitwete Personen (ab dem übernächsten Jahr nach dem Tod des Partners)</li>
              <li>Verheiratete, die dauerhaft getrennt leben</li>
              <li>Verheiratete, deren Partner im Ausland lebt</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-2">Freibeträge in Steuerklasse 1 (2026):</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <strong>Grundfreibetrag:</strong> 12.348 EUR/Jahr
              </div>
              <div>
                <strong>Arbeitnehmerpauschbetrag:</strong> 1.230 EUR/Jahr
              </div>
              <div>
                <strong>Sonderausgabenpauschbetrag:</strong> 36 EUR/Jahr
              </div>
              <div>
                <strong>Vorsorgepauschale:</strong> abhängig vom Gehalt
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            <strong>Beispiel:</strong> Bei einem Bruttogehalt von 3.000 EUR monatlich beträgt das Nettogehalt in Steuerklasse 1 etwa 1.990 EUR (ca. 66%).
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Steuerklasse 2 - Für Alleinerziehende"
        icon={<Heart className="w-5 h-5" />}
        body="Steuerklasse 2 ist speziell für alleinerziehende Arbeitnehmer vorgesehen und bietet durch den Entlastungsbetrag steuerliche Vorteile."
      >
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4">
            <h3 className="font-semibold mb-2">Voraussetzungen für Steuerklasse 2:</h3>
            <ul className="text-sm space-y-1 list-disc list-inside text-green-900 dark:text-green-100">
              <li>Sie leben mit mindestens einem Kind in einem Haushalt</li>
              <li>Für das Kind steht Ihnen Kindergeld oder der Kinderfreibetrag zu</li>
              <li>Sie sind alleinstehend (ledig, geschieden, verwitwet oder dauerhaft getrennt lebend)</li>
              <li>Keine weitere volljährige Person lebt im Haushalt (außer Kinder)</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-2">Zusätzliche Freibeträge:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Entlastungsbetrag für 1. Kind:</span>
                <strong>4.260 EUR/Jahr</strong>
              </div>
              <div className="flex justify-between">
                <span>Zusätzlich für jedes weitere Kind:</span>
                <strong>+240 EUR/Jahr</strong>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            <strong>Vorteil:</strong> Durch den Entlastungsbetrag sparen Alleinerziehende in Steuerklasse 2 monatlich etwa 90-120 EUR im Vergleich zu Steuerklasse 1.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Steuerklasse 3, 4 und 5 - Für Verheiratete"
        icon={<Heart className="w-5 h-5" />}
        body="Verheiratete und eingetragene Lebenspartner können zwischen verschiedenen Steuerklassen-Kombinationen wählen. Die Wahl hängt von den Einkommensverhältnissen ab."
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold">
                  3
                </div>
                <h3 className="font-semibold">Steuerklasse 3</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Niedrigste Abzüge, höchstes Nettoeinkommen. Für den Partner mit dem höheren Einkommen bei der Kombination 3/5.
              </p>
              <div className="bg-purple-50 dark:bg-purple-950/20 rounded p-2 text-xs">
                <strong>Freibeträge:</strong> Doppelter Grundfreibetrag (24.696 EUR/Jahr)
              </div>
            </div>

            <div className="border-2 border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-orange-600 dark:text-orange-300 font-bold">
                  4
                </div>
                <h3 className="font-semibold">Steuerklasse 4</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Standardklasse für Verheiratete seit 2023. Beide Partner haben die gleichen Abzüge wie in Steuerklasse 1.
              </p>
              <div className="bg-orange-50 dark:bg-orange-950/20 rounded p-2 text-xs">
                <strong>Freibeträge:</strong> Normaler Grundfreibetrag (12.348 EUR/Jahr)
              </div>
            </div>

            <div className="border-2 border-red-200 dark:border-red-800 rounded-lg p-4 md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300 font-bold">
                  5
                </div>
                <h3 className="font-semibold">Steuerklasse 5</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Höchste Abzüge, geringstes Nettoeinkommen. Nur in Kombination mit Steuerklasse 3 für den Partner mit geringerem Einkommen.
              </p>
              <div className="bg-red-50 dark:bg-red-950/20 rounded p-2 text-xs">
                <strong>Achtung:</strong> Keine Freibeträge! Alle Freibeträge werden bei Partner mit Steuerklasse 3 berücksichtigt.
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Welche Kombination ist besser: 3/5 oder 4/4?</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-blue-900 dark:text-blue-100">Wählen Sie 4/4 wenn:</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-blue-800 dark:text-blue-200">
                  <li>Beide Partner etwa gleich viel verdienen (Unterschied unter 10%)</li>
                  <li>Sie keine monatlichen Liquiditätsengpässe haben</li>
                  <li>Sie Nachzahlungen bei der Steuererklärung vermeiden möchten</li>
                </ul>
              </div>
              <div>
                <strong className="text-blue-900 dark:text-blue-100">Wählen Sie 3/5 wenn:</strong>
                <ul className="list-disc list-inside ml-4 mt-1 text-blue-800 dark:text-blue-200">
                  <li>Ein Partner deutlich mehr verdient (Unterschied über 10%)</li>
                  <li>Sie monatlich mehr Netto zur Verfügung haben möchten</li>
                  <li>Der Besserverdiener Elterngeld, Krankengeld oder Arbeitslosengeld beantragen will (höhere Leistungen bei Klasse 3)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Wichtig:</strong> Die Wahl der Steuerklasse beeinflusst nur die monatlichen Abzüge, nicht die Jahressteuerlast! Am Jahresende erfolgt über die Steuererklärung ein Ausgleich. Bei 3/5 gibt es oft Nachzahlungen, bei 4/4 eher Rückzahlungen.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Steuerklasse 6 - Für Nebenjobs"
        icon={<Briefcase className="w-5 h-5" />}
        body="Steuerklasse 6 gilt automatisch für jedes zweite und weitere Arbeitsverhältnis. Sie hat die höchsten Steuerabzüge, da keine Freibeträge berücksichtigt werden."
      >
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4">
            <h3 className="font-semibold mb-2">Wann gilt Steuerklasse 6?</h3>
            <ul className="text-sm space-y-1 list-disc list-inside text-red-900 dark:text-red-100">
              <li>Bei einem Nebenjob zusätzlich zum Hauptjob</li>
              <li>Bei mehreren parallelen Beschäftigungen</li>
              <li>Wenn Sie keine Steuer-ID beim zweiten Arbeitgeber angeben</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-2">Besonderheiten Steuerklasse 6:</h4>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Keine Freibeträge (wurden bereits im Hauptjob berücksichtigt)</li>
              <li>Höchste Lohnsteuerabzüge aller Steuerklassen</li>
              <li>Von 450 EUR Minijob bleiben oft nur etwa 250-280 EUR netto übrig</li>
              <li>Ausgleich erfolgt über die Jahressteuererklärung (oft mit Rückzahlung)</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Tipp:</strong> Bei Nebenjobs ist die Steuererklärung oft sehr lohnenswert! Da in Steuerklasse 6 zu viel Steuer einbehalten wird, gibt es meist eine Erstattung. Nutzen Sie unseren Rechner, um beide Einkommen zu addieren und Ihre Gesamtsteuerlast zu ermitteln.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Steuerklasse wechseln - So geht's"
        icon={<FileText className="w-5 h-5" />}
        body="Ein Steuerklassenwechsel ist in bestimmten Situationen möglich und kann sich lohnen. Hier erfahren Sie, wann und wie Sie Ihre Steuerklasse ändern können."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Automatischer Wechsel bei:</h4>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Heirat (automatisch zu 4/4)</li>
                <li>Scheidung oder Trennung</li>
                <li>Tod des Ehepartners</li>
                <li>Geburt eines Kindes (für Alleinerziehende zu Klasse 2)</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Wechsel auf Antrag:</h4>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Verheiratete: einmal jährlich zwischen 3/5 und 4/4</li>
                <li>Nachweis Alleinerziehend für Klasse 2</li>
                <li>Bei Aufnahme/Beendigung Nebenjob</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-3">So beantragen Sie einen Steuerklassenwechsel:</h4>
            <ol className="text-sm space-y-2 list-decimal list-inside">
              <li>Formular &quot;Antrag auf Steuerklassenwechsel bei Ehegatten/Lebenspartnern&quot; beim Finanzamt holen oder online ausfüllen</li>
              <li>Beide Partner müssen den Antrag unterschreiben</li>
              <li>Antrag beim zuständigen Finanzamt einreichen</li>
              <li>Änderung gilt ab dem Folgemonat nach Antragstellung</li>
              <li>Arbeitgeber wird automatisch über ELStAM informiert</li>
            </ol>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Wichtig:</strong> Seit 2020 erfolgt der Steuerklassenwechsel digital über das ELStAM-Verfahren. Sie benötigen keine Lohnsteuerkarte mehr. Der Arbeitgeber wird automatisch informiert und wendet die neue Steuerklasse ab dem Folgemonat an.
            </p>
          </div>
        </div>
      </ContentSection>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/ratgeber/steuerklassen"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
