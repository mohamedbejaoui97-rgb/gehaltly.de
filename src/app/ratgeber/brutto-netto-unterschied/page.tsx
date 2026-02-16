import { Metadata } from 'next';
import { Calculator, TrendingUp, Info, DollarSign } from 'lucide-react';
import PageHero from '@/components/content/PageHero';
import ContentSection from '@/components/content/ContentSection';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Brutto Netto Unterschied - Der komplette Guide 2026',
  description: 'Verstehen Sie den Unterschied zwischen Brutto und Netto. Ausführlicher Guide mit Beispielen, Berechnungen und allen wichtigen Informationen für 2026.',
  keywords: 'brutto netto unterschied, brutto vs netto, bruttogehalt nettogehalt, gehaltsabzüge',
  alternates: {
    canonical: 'https://gehaltly.de/ratgeber/brutto-netto-unterschied/',
  },
  openGraph: {
    title: 'Brutto Netto Unterschied - Der komplette Guide 2026',
    description: 'Verstehen Sie den Unterschied zwischen Brutto und Netto. Ausführlicher Guide mit Beispielen und Berechnungen.',
    type: 'article',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function BruttoNettoUnterschiedPage() {
  const faqs = [
    {
      question: 'Was ist der Unterschied zwischen Brutto und Netto?',
      answer: 'Brutto ist Ihr Gehalt vor allen Abzügen - der Betrag, den Ihr Arbeitgeber für Ihre Arbeit zahlt. Netto ist Ihr Gehalt nach Abzug von Steuern und Sozialversicherungsbeiträgen - der Betrag, der auf Ihrem Konto landet. Die Differenz macht je nach Steuerklasse und Gehaltshöhe zwischen 30% und 50% aus.',
    },
    {
      question: 'Wie viel Prozent vom Brutto bleibt Netto übrig?',
      answer: 'Das hängt von mehreren Faktoren ab: Steuerklasse, Gehaltshöhe, Bundesland und persönliche Situation. In Steuerklasse 1 bleiben bei einem mittleren Einkommen etwa 60-65% vom Brutto als Netto übrig. In Steuerklasse 3 können es bis zu 75% sein, während in Steuerklasse 5 oder 6 nur etwa 50-55% übrig bleiben.',
    },
    {
      question: 'Was wird vom Bruttogehalt alles abgezogen?',
      answer: 'Vom Bruttogehalt werden zwei Kategorien abgezogen: 1) Steuern: Lohnsteuer, Solidaritätszuschlag und ggf. Kirchensteuer. 2) Sozialversicherungsbeiträge: Rentenversicherung (9,3%), Krankenversicherung (ca. 8,75%), Pflegeversicherung (1,8% bzw. 2,4% für Kinderlose) und Arbeitslosenversicherung (1,3%). Zusammen ergeben diese Abzüge die Differenz zwischen Brutto und Netto.',
    },
    {
      question: 'Warum ist der Unterschied zwischen Brutto und Netto so groß?',
      answer: 'Der große Unterschied erklärt sich durch das deutsche Sozialversicherungssystem und die progressive Einkommensteuer. Die Sozialversicherungsbeiträge allein machen bereits etwa 20% des Bruttogehalts aus. Hinzu kommen Steuern, die mit steigendem Einkommen progressiv ansteigen. Dieses System finanziert wichtige Leistungen wie Rente, Krankenversicherung, Arbeitslosengeld und öffentliche Infrastruktur.',
    },
  ];

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Brutto Netto Unterschied - Der komplette Guide 2026',
    description: 'Verstehen Sie den Unterschied zwischen Brutto und Netto. Ausführlicher Guide mit Beispielen, Berechnungen und allen wichtigen Informationen.',
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
            { label: 'Brutto Netto Unterschied' },
          ]}
        />
      </div>

      <PageHero
        title="Brutto Netto Unterschied - Der komplette Guide 2026"
        description="Verstehen Sie den fundamentalen Unterschied zwischen Brutto- und Nettogehalt. Erfahren Sie, welche Abzüge anfallen und wie Sie Ihr Nettogehalt berechnen können."
      />

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Der Unterschied zwischen Brutto und Netto ist einer der wichtigsten Aspekte beim Thema Gehalt. Viele Arbeitnehmer sind überrascht, wenn sie ihre erste Gehaltsabrechnung erhalten und feststellen, dass deutlich weniger auf ihrem Konto landet, als im Arbeitsvertrag steht.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In diesem Guide erklären wir Ihnen ausführlich, was Brutto und Netto bedeutet, welche Abzüge anfallen und wie Sie Ihr Nettogehalt selbst berechnen können.
            </p>
          </div>
        </div>
      </section>

      <ContentSection
        heading="Was ist Bruttogehalt?"
        icon={<DollarSign className="w-5 h-5" />}
        body="Das Bruttogehalt ist der Betrag, den Ihr Arbeitgeber für Ihre Arbeit zahlt - vor jeglichen Abzügen. Es ist die Summe, die in Ihrem Arbeitsvertrag steht und die als Grundlage für alle Berechnungen dient."
      >
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Das Bruttogehalt umfasst:</h3>
            <ul className="text-sm text-blue-900 dark:text-blue-100 space-y-2 list-disc list-inside">
              <li>Ihr Grundgehalt (Festgehalt oder Stundenlohn)</li>
              <li>Regelmäßige Zulagen (z.B. Schichtzulagen, Gefahrenzulagen)</li>
              <li>Überstundenvergütung</li>
              <li>Provisionen und Boni (wenn regelmäßig)</li>
              <li>Sachbezüge (z.B. Dienstwagen, geldwerter Vorteil)</li>
            </ul>
          </div>
          <p className="text-muted-foreground">
            <strong>Wichtig:</strong> Das Bruttogehalt ist nicht das, was Sie am Ende des Monats auf Ihrem Konto sehen. Es ist die Ausgangsbasis, von der verschiedene Abzüge vorgenommen werden.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Was ist Nettogehalt?"
        icon={<Calculator className="w-5 h-5" />}
        body="Das Nettogehalt ist der Betrag, der nach Abzug aller Steuern und Sozialversicherungsbeiträge übrig bleibt und auf Ihr Bankkonto überwiesen wird. Es ist Ihr tatsächlich verfügbares Einkommen."
      >
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-green-900 dark:text-green-100">Diese Abzüge verringern Ihr Bruttogehalt:</h3>
            <div className="space-y-3 text-sm text-green-900 dark:text-green-100">
              <div>
                <strong>Steuern:</strong>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Lohnsteuer (abhängig von Steuerklasse und Einkommen)</li>
                  <li>Solidaritätszuschlag (5,5% der Lohnsteuer, ab Freigrenze)</li>
                  <li>Kirchensteuer (8% oder 9% der Lohnsteuer, wenn Mitglied)</li>
                </ul>
              </div>
              <div>
                <strong>Sozialversicherungsbeiträge 2026:</strong>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Rentenversicherung: 9,3% des Bruttogehalts</li>
                  <li>Krankenversicherung: ca. 8,75% des Bruttogehalts</li>
                  <li>Pflegeversicherung: 1,8% (Kinderlose ab 23: 2,4%)</li>
                  <li>Arbeitslosenversicherung: 1,3% des Bruttogehalts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Rechenbeispiel: Von Brutto zu Netto"
        icon={<TrendingUp className="w-5 h-5" />}
        body="Schauen wir uns ein konkretes Beispiel an, um den Unterschied zwischen Brutto und Netto zu verdeutlichen. Wir rechnen mit einem Bruttogehalt von 3.500 EUR monatlich in Steuerklasse 1."
      >
        <div className="space-y-6">
          <div className="bg-muted rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="font-semibold">Bruttogehalt</span>
                <span className="font-bold text-lg">3.500,00 EUR</span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>- Rentenversicherung (9,3%)</span>
                  <span>-325,50 EUR</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>- Krankenversicherung (8,75%)</span>
                  <span>-306,25 EUR</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>- Pflegeversicherung (1,8%)</span>
                  <span>-63,00 EUR</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>- Arbeitslosenversicherung (1,3%)</span>
                  <span>-45,50 EUR</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t">
                  <span>Sozialversicherung gesamt</span>
                  <span>-740,25 EUR</span>
                </div>
              </div>

              <div className="space-y-2 text-sm pt-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>- Lohnsteuer</span>
                  <span>-565,00 EUR</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>- Solidaritätszuschlag</span>
                  <span>-0,00 EUR</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t">
                  <span>Steuern gesamt</span>
                  <span>-565,00 EUR</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t-2 border-primary">
                <span className="font-bold text-lg">Nettogehalt</span>
                <span className="font-bold text-2xl text-primary">2.194,75 EUR</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Ergebnis:</strong> Von 3.500 EUR Bruttogehalt bleiben in Steuerklasse 1 etwa 2.195 EUR netto übrig. Das entspricht rund 63% vom Bruttogehalt. Die Abzüge betragen 1.305 EUR oder 37%.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Faktoren, die den Brutto-Netto-Unterschied beeinflussen"
        icon={<Info className="w-5 h-5" />}
        body="Der prozentuale Unterschied zwischen Brutto und Netto ist nicht für alle gleich. Mehrere Faktoren beeinflussen, wie viel von Ihrem Bruttogehalt als Netto übrig bleibt."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Steuerklasse</h3>
            <p className="text-sm text-muted-foreground">
              Die Steuerklasse hat den größten Einfluss. Steuerklasse 3 (verheiratet, Alleinverdiener) bietet die geringsten Abzüge, während Steuerklasse 5 und 6 die höchsten haben.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Gehaltshöhe</h3>
            <p className="text-sm text-muted-foreground">
              Aufgrund der progressiven Einkommensteuer steigt der prozentuale Abzug mit dem Einkommen. Höhere Gehälter haben prozentual mehr Abzüge.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Bundesland</h3>
            <p className="text-sm text-muted-foreground">
              Der Kirchensteuersatz variiert: 8% in Bayern und Baden-Württemberg, 9% in anderen Bundesländern. In Sachsen ist der Pflegeversicherungsbeitrag höher.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Kinder und Freibeträge</h3>
            <p className="text-sm text-muted-foreground">
              Kinderfreibeträge reduzieren die Steuerlast. Kinderlose zahlen ab 23 Jahren einen Zuschlag bei der Pflegeversicherung (+0,6%).
            </p>
          </div>
        </div>
      </ContentSection>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/ratgeber/brutto-netto-unterschied"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
