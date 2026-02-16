import { Metadata } from 'next';
import { Shield, Heart, Ambulance, Briefcase } from 'lucide-react';
import PageHero from '@/components/content/PageHero';
import ContentSection from '@/components/content/ContentSection';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Sozialabgaben 2026 - Alle Beiträge im Überblick',
  description: 'Sozialversicherungsbeiträge 2026 komplett erklärt: Rentenversicherung, Krankenversicherung, Pflegeversicherung und Arbeitslosenversicherung mit aktuellen Beitragssätzen.',
  keywords: 'sozialabgaben 2026, sozialversicherungsbeiträge, rentenversicherung, krankenversicherung, pflegeversicherung',
  alternates: {
    canonical: 'https://gehaltly.de/ratgeber/sozialabgaben/',
  },
  openGraph: {
    title: 'Sozialabgaben 2026 - Alle Beiträge im Überblick',
    description: 'Alle Sozialversicherungsbeiträge 2026 mit aktuellen Beitragssätzen und Beitragsbemessungsgrenzen.',
    type: 'article',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function SozialabgabenPage() {
  const faqs = [
    {
      question: 'Wie hoch sind die Sozialabgaben 2026?',
      answer: 'Die Sozialversicherungsbeiträge 2026 betragen insgesamt etwa 40% des Bruttogehalts (Arbeitnehmer- und Arbeitgeberanteil zusammen). Als Arbeitnehmer zahlen Sie etwa 20%: Rentenversicherung 9,3%, Krankenversicherung ca. 8,75%, Pflegeversicherung 1,8% (Kinderlose 2,4%) und Arbeitslosenversicherung 1,3%. Die andere Hälfte trägt Ihr Arbeitgeber.',
    },
    {
      question: 'Was ist die Beitragsbemessungsgrenze?',
      answer: 'Die Beitragsbemessungsgrenze ist das maximale Einkommen, bis zu dem Sozialversicherungsbeiträge berechnet werden. 2026 liegt sie bei 8.450 EUR monatlich (einheitlich) für Renten- und Arbeitslosenversicherung. Für die Kranken- und Pflegeversicherung gilt eine separate Grenze von 5.812,50 EUR monatlich. Verdienen Sie mehr, zahlen Sie nur bis zu dieser Grenze Beiträge.',
    },
    {
      question: 'Wer zahlt die Sozialversicherungsbeiträge?',
      answer: 'Arbeitnehmer und Arbeitgeber teilen sich die Sozialversicherungsbeiträge grundsätzlich zur Hälfte (Paritätsprinzip). Ausnahmen: Bei der Krankenversicherung tragen Arbeitnehmer den Zusatzbeitrag allein. In Sachsen zahlen Arbeitnehmer bei der Pflegeversicherung mehr (2,3% statt 1,8%). Der Arbeitgeberanteil ist für Sie nicht sichtbar, wird aber zusätzlich zu Ihrem Bruttogehalt gezahlt.',
    },
    {
      question: 'Muss ich als Minijobber Sozialabgaben zahlen?',
      answer: 'Bei einem Minijob bis 538 EUR (2026) zahlen Sie als Arbeitnehmer nur Rentenversicherungsbeiträge (3,6%). Von diesen können Sie sich befreien lassen. Kranken-, Pflege- und Arbeitslosenversicherung fallen nicht an. Der Arbeitgeber zahlt pauschale Abgaben. Bei höherem Verdienst (Midijob 538,01-2.000 EUR) zahlen Sie reduzierte Sozialabgaben in der Gleitzone, die mit steigendem Gehalt ansteigen.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sozialabgaben 2026 - Alle Beiträge im Überblick',
    description: 'Alle Sozialversicherungsbeiträge 2026 erklärt: RV, KV, PV, ALV mit aktuellen Beitragssätzen und Berechnungsgrundlagen.',
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
            { label: 'Sozialabgaben' },
          ]}
        />
      </div>

      <PageHero
        title="Sozialabgaben 2026 - Alle Beiträge im Überblick"
        description="Verstehen Sie alle Sozialversicherungsbeiträge im Detail: Rentenversicherung, Krankenversicherung, Pflegeversicherung und Arbeitslosenversicherung mit allen aktuellen Beitragssätzen für 2026."
      />

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Sozialabgaben sind ein wesentlicher Bestandteil Ihrer Gehaltsabrechnung. Sie finanzieren das deutsche Sozialversicherungssystem und sichern Sie gegen wichtige Lebensrisiken ab: Krankheit, Pflegebedürftigkeit, Arbeitslosigkeit und im Alter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In diesem Guide erklären wir Ihnen alle vier Säulen der Sozialversicherung, die aktuellen Beitragssätze 2026 und wer welchen Anteil zahlt.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sozialabgaben 2026 auf einen Blick</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Rentenversicherung</h3>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">9,3%</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gesamtbeitrag: 18,6% (je zur Hälfte)
                </p>
              </div>

              <div className="bg-background rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <Ambulance className="w-6 h-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Krankenversicherung</h3>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">~8,75%</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gesamtbeitrag: 14,6% + Zusatzbeitrag (~2,9%)
                </p>
              </div>

              <div className="bg-background rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Pflegeversicherung</h3>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">1,8%</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Kinderlose ab 23: 2,4% | Gesamtbeitrag: 3,6%
                </p>
              </div>

              <div className="bg-background rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Arbeitslosenversicherung</h3>
                    <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">1,3%</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gesamtbeitrag: 2,6% (je zur Hälfte)
                </p>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Gesamt Arbeitnehmeranteil:</strong> Ca. 21,35% (mit Kind) bzw. 21,95% (kinderlos ab 23) des Bruttogehalts. Der Arbeitgeber zahlt einen ähnlich hohen Anteil zusätzlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContentSection
        heading="Rentenversicherung (RV)"
        icon={<Shield className="w-5 h-5" />}
        body="Die gesetzliche Rentenversicherung ist die wichtigste Säule der Altersvorsorge in Deutschland. Sie sichert Sie im Alter, bei Erwerbsminderung und Ihre Hinterbliebenen im Todesfall ab."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">Beitragssatz 2026</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Gesamtbeitrag:</span>
                  <strong>18,6%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Arbeitnehmer:</span>
                  <strong>9,3%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Arbeitgeber:</span>
                  <strong>9,3%</strong>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">Beitragsbemessungsgrenze 2026</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Einheitlich:</span>
                  <strong>8.450 EUR/Monat</strong>
                </div>
                <div className="flex justify-between">
                  <span>Pro Jahr:</span>
                  <strong>101.400 EUR</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h4 className="font-semibold mb-2">Leistungen der Rentenversicherung:</h4>
            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
              <li>Altersrente (Regelaltersgrenze 67 Jahre)</li>
              <li>Erwerbsminderungsrente bei dauerhafter Arbeitsunfähigkeit</li>
              <li>Hinterbliebenenrente (Witwen-, Witwer-, Waisenrente)</li>
              <li>Rehabilitation (medizinische und berufliche Reha-Maßnahmen)</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Beispielrechnung:</strong> Bei einem Bruttogehalt von 3.500 EUR zahlen Sie monatlich 325,50 EUR in die Rentenversicherung. Ihr Arbeitgeber zahlt den gleichen Betrag. Pro Jahr fließen somit 7.812 EUR (Sie + Arbeitgeber) in Ihre Rentenversicherung.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Krankenversicherung (KV)"
        icon={<Ambulance className="w-5 h-5" />}
        body="Die gesetzliche Krankenversicherung übernimmt die Kosten für Ihre medizinische Behandlung, Medikamente, Krankenhausaufenthalte und zahlt Krankengeld bei längerer Arbeitsunfähigkeit."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">Beitragssatz 2026</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Allgemeiner Beitragssatz:</span>
                  <strong>14,6%</strong>
                </div>
                <div className="flex justify-between">
                  <span>+ Zusatzbeitrag (∅):</span>
                  <strong>2,9%</strong>
                </div>
                <div className="flex justify-between border-t pt-1 mt-1">
                  <span>Gesamt:</span>
                  <strong>17,5%</strong>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">Aufteilung</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Arbeitnehmer:</span>
                  <strong>~8,75%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Arbeitgeber:</span>
                  <strong>~8,75%</strong>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  * AN trägt Zusatzbeitrag allein
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">Wichtig: Zusatzbeitrag</h4>
            <p className="text-sm text-amber-900 dark:text-amber-100">
              Der Zusatzbeitrag variiert je nach Krankenkasse (2026: zwischen 0,9% und 3,0%). Der Durchschnitt liegt bei etwa 2,9%. Diesen Zusatzbeitrag tragen Arbeitnehmer allein. Ein Kassenwechsel kann sich lohnen, wenn Ihre Kasse einen hohen Zusatzbeitrag erhebt.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h4 className="font-semibold mb-2">Versicherungsschutz umfasst:</h4>
            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
              <li>Arztbesuche und medizinische Behandlungen</li>
              <li>Medikamente und Heilmittel</li>
              <li>Krankenhausaufenthalte</li>
              <li>Vorsorgeuntersuchungen und Impfungen</li>
              <li>Zahnbehandlungen (Grundversorgung)</li>
              <li>Krankengeld ab 7. Woche (70% des Bruttos)</li>
              <li>Familienversicherung für Ehepartner und Kinder (kostenlos)</li>
            </ul>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-2">Beitragsbemessungsgrenze 2026</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Die Beitragsbemessungsgrenze für die Krankenversicherung liegt 2026 bei <strong>5.812,50 EUR monatlich</strong> (69.750 EUR jährlich).
            </p>
            <p className="text-sm text-muted-foreground">
              Verdienen Sie mehr als 5.775 EUR monatlich (Versicherungspflichtgrenze), können Sie in die private Krankenversicherung wechseln.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Pflegeversicherung (PV)"
        icon={<Heart className="w-5 h-5" />}
        body="Die soziale Pflegeversicherung sichert das Risiko der Pflegebedürftigkeit ab. Sie zahlt Leistungen bei häuslicher oder stationärer Pflege."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">Beitragssatz 2026</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Gesamtbeitrag:</span>
                  <strong>3,6%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Arbeitnehmer (mit Kind):</span>
                  <strong>1,8%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Arbeitnehmer (kinderlos):</span>
                  <strong>2,4%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Arbeitgeber:</span>
                  <strong>1,8%</strong>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">Zuschlag für Kinderlose</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Zuschlag:</span>
                  <strong>+0,6%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Ab Alter:</span>
                  <strong>23 Jahre</strong>
                </div>
                <div className="flex justify-between">
                  <span>Gesamt kinderlos:</span>
                  <strong>2,4%</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">Besonderheit Sachsen</h4>
            <p className="text-sm text-purple-900 dark:text-purple-100">
              In Sachsen tragen Arbeitnehmer einen höheren Anteil: 2,3% (mit Kind) bzw. 2,9% (kinderlos). Dafür ist der Buß- und Bettag in Sachsen ein gesetzlicher Feiertag.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <h4 className="font-semibold mb-2">Leistungen der Pflegeversicherung:</h4>
            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
              <li>Pflegegeld bei häuslicher Pflege (bis 901 EUR/Monat je nach Pflegegrad)</li>
              <li>Pflegesachleistungen durch ambulante Pflegedienste (bis 2.095 EUR/Monat)</li>
              <li>Stationäre Pflege im Pflegeheim (bis 2.005 EUR/Monat)</li>
              <li>Verhinderungspflege und Kurzzeitpflege</li>
              <li>Pflegehilfsmittel und Wohnraumanpassung</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Beispielrechnung:</strong> Bei 3.500 EUR Brutto zahlen Sie mit Kind monatlich 63,00 EUR, kinderlos 84,00 EUR in die Pflegeversicherung. Die Pflegeversicherung ist eine Teilkaskoversicherung - sie deckt nicht alle Pflegekosten ab.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Arbeitslosenversicherung (ALV)"
        icon={<Briefcase className="w-5 h-5" />}
        body="Die Arbeitslosenversicherung sichert Sie gegen die finanziellen Folgen von Arbeitslosigkeit ab. Sie zahlt Arbeitslosengeld und fördert Weiterbildung."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">Beitragssatz 2026</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Gesamtbeitrag:</span>
                  <strong>2,6%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Arbeitnehmer:</span>
                  <strong>1,3%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Arbeitgeber:</span>
                  <strong>1,3%</strong>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">Arbeitslosengeld (ALG I)</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Ohne Kinder:</span>
                  <strong>60% Netto</strong>
                </div>
                <div className="flex justify-between">
                  <span>Mit Kindern:</span>
                  <strong>67% Netto</strong>
                </div>
                <div className="flex justify-between">
                  <span>Dauer:</span>
                  <strong>6-24 Monate</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <h4 className="font-semibold mb-2">Leistungen der Arbeitslosenversicherung:</h4>
            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
              <li>Arbeitslosengeld I bei Verlust des Arbeitsplatzes</li>
              <li>Förderung von Weiterbildung und Umschulung</li>
              <li>Bewerbungskosten und Mobilitätshilfen</li>
              <li>Insolvenzgeld bei Zahlungsunfähigkeit des Arbeitgebers</li>
              <li>Kurzarbeitergeld bei vorübergehendem Arbeitsausfall</li>
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">Anspruch auf Arbeitslosengeld</h4>
            <p className="text-sm text-amber-900 dark:text-amber-100 mb-2">
              Sie haben Anspruch auf ALG I, wenn Sie:
            </p>
            <ul className="text-sm text-amber-900 dark:text-amber-100 space-y-1 list-disc list-inside">
              <li>in den letzten 30 Monaten mindestens 12 Monate versicherungspflichtig beschäftigt waren</li>
              <li>arbeitslos sind oder nur kurzfristig beschäftigt (unter 15 Std./Woche)</li>
              <li>sich bei der Agentur für Arbeit arbeitslos gemeldet haben</li>
              <li>dem Arbeitsmarkt zur Verfügung stehen</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Beispielrechnung:</strong> Bei 3.500 EUR Brutto zahlen Sie monatlich 45,50 EUR in die Arbeitslosenversicherung. Bei Arbeitslosigkeit erhalten Sie etwa 1.330 EUR (60%) bzw. 1.486 EUR (67% mit Kind) monatlich als Arbeitslosengeld.
            </p>
          </div>
        </div>
      </ContentSection>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/ratgeber/sozialabgaben"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
