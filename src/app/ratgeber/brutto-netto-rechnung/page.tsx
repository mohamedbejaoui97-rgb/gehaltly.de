import { Metadata } from 'next';
import { Calculator, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';
import PageHero from '@/components/content/PageHero';
import ContentSection from '@/components/content/ContentSection';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Brutto Netto Rechnung - So berechnen Sie Ihr Nettogehalt',
  description: 'Schritt-für-Schritt Anleitung zur Brutto-Netto-Berechnung. Lernen Sie, wie Sie Ihr Nettogehalt selbst berechnen können - mit Formeln und Beispielen für 2026.',
  keywords: 'brutto netto rechnung, nettogehalt berechnen, gehaltsberechnung formel, lohnabrechnung',
  alternates: {
    canonical: 'https://gehaltly.de/ratgeber/brutto-netto-rechnung/',
  },
  openGraph: {
    title: 'Brutto Netto Rechnung - So berechnen Sie Ihr Nettogehalt',
    description: 'Lernen Sie Schritt für Schritt, wie Sie Ihr Nettogehalt aus dem Bruttogehalt berechnen.',
    type: 'article',
  },
};

export default function BruttoNettoRechnungPage() {
  const faqs = [
    {
      question: 'Wie berechnet man von Brutto zu Netto?',
      answer: 'Die Brutto-Netto-Berechnung erfolgt in mehreren Schritten: 1) Vom Bruttogehalt werden zunächst die Sozialversicherungsbeiträge abgezogen (ca. 20%). 2) Anschließend wird die Lohnsteuer berechnet, basierend auf dem sozialversicherungspflichtigen Einkommen und Ihrer Steuerklasse. 3) Vom verbleibenden Betrag werden noch Solidaritätszuschlag und ggf. Kirchensteuer abgezogen. Das Ergebnis ist Ihr Nettogehalt.',
    },
    {
      question: 'Welche Formel gilt für die Brutto-Netto-Berechnung?',
      answer: 'Die Grundformel lautet: Netto = Brutto - Sozialversicherungsbeiträge - Lohnsteuer - Solidaritätszuschlag - Kirchensteuer. Dabei betragen die Sozialversicherungsbeiträge etwa 20% des Bruttos (RV 9,3% + KV 8,15% + PV 1,7% + ALV 1,3%). Die Lohnsteuer ist progressiv und hängt von Einkommen und Steuerklasse ab. Der Soli beträgt 5,5% der Lohnsteuer, die Kirchensteuer 8% oder 9% der Lohnsteuer.',
    },
    {
      question: 'Wie genau ist eine Brutto-Netto-Berechnung?',
      answer: 'Online-Rechner liefern in der Regel sehr genaue Ergebnisse, die weniger als 1% vom tatsächlichen Nettogehalt abweichen. Kleinere Abweichungen können durch individuelle Freibeträge, kassenspezifische Zusatzbeiträge der Krankenkasse oder besondere Sachverhalte entstehen. Die offizielle Lohnabrechnung Ihres Arbeitgebers kann leicht abweichen, da dort zusätzliche individuelle Faktoren berücksichtigt werden.',
    },
    {
      question: 'Was ist der Unterschied zwischen Brutto und Auszahlungsbetrag?',
      answer: 'Der Auszahlungsbetrag ist das, was tatsächlich auf Ihr Konto überwiesen wird - also Ihr Nettogehalt. Vom Bruttogehalt bis zum Auszahlungsbetrag werden folgende Posten abgezogen: Sozialversicherungsbeiträge (ca. 20%), Lohnsteuer, Solidaritätszuschlag, ggf. Kirchensteuer. Der Auszahlungsbetrag kann zusätzlich noch vermögenswirksame Leistungen, Vorschüsse oder andere Sonderposten enthalten, die auf der Lohnabrechnung separat ausgewiesen werden.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Brutto Netto Rechnung - So berechnen Sie Ihr Nettogehalt',
    description: 'Schritt-für-Schritt Anleitung zur Berechnung Ihres Nettogehalts aus dem Bruttogehalt.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Sozialversicherungsbeiträge berechnen',
        text: 'Berechnen Sie die Sozialversicherungsbeiträge (RV, KV, PV, ALV) vom Bruttogehalt.',
      },
      {
        '@type': 'HowToStep',
        name: 'Lohnsteuer ermitteln',
        text: 'Ermitteln Sie die Lohnsteuer basierend auf Steuerklasse und zu versteuerndem Einkommen.',
      },
      {
        '@type': 'HowToStep',
        name: 'Soli und Kirchensteuer berechnen',
        text: 'Berechnen Sie Solidaritätszuschlag und ggf. Kirchensteuer auf Basis der Lohnsteuer.',
      },
      {
        '@type': 'HowToStep',
        name: 'Nettogehalt ermitteln',
        text: 'Ziehen Sie alle Abzüge vom Bruttogehalt ab, um Ihr Nettogehalt zu erhalten.',
      },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Ratgeber', href: '/ratgeber' },
            { label: 'Brutto Netto Rechnung' },
          ]}
        />
      </div>

      <PageHero
        title="Brutto Netto Rechnung - So berechnen Sie Ihr Nettogehalt"
        description="Verstehen Sie Schritt für Schritt, wie Ihr Nettogehalt berechnet wird. Mit detaillierter Formel, Beispielrechnung und allen wichtigen Informationen für 2026."
      />

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Die Brutto-Netto-Rechnung zeigt, wie viel von Ihrem Bruttogehalt nach Abzug aller Steuern und Sozialabgaben übrig bleibt. Dieser Prozess mag auf den ersten Blick komplex erscheinen, folgt aber klaren Regeln und Formeln.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In diesem Guide führen wir Sie Schritt für Schritt durch die Berechnung und zeigen Ihnen an einem konkreten Beispiel, wie Sie Ihr Nettogehalt selbst ermitteln können.
            </p>
          </div>
        </div>
      </section>

      <ContentSection
        heading="Die Brutto-Netto-Formel"
        icon={<Calculator className="w-5 h-5" />}
        body="Die Berechnung von Brutto zu Netto folgt einer klaren Formel mit mehreren Schritten. Jeder Schritt berücksichtigt unterschiedliche Abzüge."
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Grundformel</h3>
            <div className="bg-white dark:bg-gray-900 rounded p-4 font-mono text-sm">
              <div className="space-y-2">
                <div>Netto = Brutto</div>
                <div className="ml-8">- Rentenversicherung (9,3%)</div>
                <div className="ml-8">- Krankenversicherung (~8,15%)</div>
                <div className="ml-8">- Pflegeversicherung (1,7% / 2,3%)</div>
                <div className="ml-8">- Arbeitslosenversicherung (1,3%)</div>
                <div className="ml-8">- Lohnsteuer</div>
                <div className="ml-8">- Solidaritätszuschlag (5,5% der LSt)</div>
                <div className="ml-8">- Kirchensteuer (8% / 9% der LSt)</div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Wichtig:</strong> Die Sozialversicherungsbeiträge werden vom Bruttogehalt berechnet. Die Steuern (Lohnsteuer, Soli, Kirchensteuer) werden vom Bruttogehalt minus Sozialversicherungsbeiträgen (= zu versteuerndes Einkommen) berechnet, unter Berücksichtigung von Freibeträgen.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Schritt 1: Sozialversicherungsbeiträge berechnen"
        icon={<CheckCircle className="w-5 h-5" />}
        body="Der erste Schritt ist die Berechnung der Sozialversicherungsbeiträge. Diese werden direkt vom Bruttogehalt abgezogen und sind für alle Steuerklassen gleich."
      >
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-3">Sozialversicherungsbeiträge 2026 (Arbeitnehmeranteil):</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <div className="font-medium">Rentenversicherung</div>
                  <div className="text-xs text-muted-foreground">Von Ihrem Bruttogehalt</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">9,3%</div>
                </div>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <div className="font-medium">Krankenversicherung</div>
                  <div className="text-xs text-muted-foreground">Inkl. durchschn. Zusatzbeitrag</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">~8,15%</div>
                </div>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <div className="font-medium">Pflegeversicherung</div>
                  <div className="text-xs text-muted-foreground">Mit Kind / kinderlos ab 23</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">1,7% / 2,3%</div>
                </div>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <div className="font-medium">Arbeitslosenversicherung</div>
                  <div className="text-xs text-muted-foreground">Von Ihrem Bruttogehalt</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">1,3%</div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="font-bold">Gesamt (mit Kind):</div>
                <div className="font-bold text-lg">20,45%</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-bold">Gesamt (kinderlos):</div>
                <div className="font-bold text-lg">21,05%</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Beispiel bei 3.000 EUR Brutto (mit Kind):</h4>
            <div className="space-y-1 text-sm text-blue-900 dark:text-blue-100">
              <div className="flex justify-between">
                <span>Rentenversicherung (9,3%):</span>
                <strong>279,00 EUR</strong>
              </div>
              <div className="flex justify-between">
                <span>Krankenversicherung (8,15%):</span>
                <strong>244,50 EUR</strong>
              </div>
              <div className="flex justify-between">
                <span>Pflegeversicherung (1,7%):</span>
                <strong>51,00 EUR</strong>
              </div>
              <div className="flex justify-between">
                <span>Arbeitslosenversicherung (1,3%):</span>
                <strong>39,00 EUR</strong>
              </div>
              <div className="flex justify-between pt-2 border-t border-blue-300 font-bold">
                <span>Gesamt Sozialabgaben:</span>
                <strong>613,50 EUR</strong>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Schritt 2: Lohnsteuer berechnen"
        icon={<TrendingUp className="w-5 h-5" />}
        body="Die Lohnsteuer wird auf Ihr zu versteuerndes Einkommen (Brutto minus Sozialabgaben minus Freibeträge) berechnet. Sie ist progressiv - höhere Einkommen zahlen prozentual mehr."
      >
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-3">Berechnungsgrundlage:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Bruttogehalt:</span>
                <strong>3.000,00 EUR</strong>
              </div>
              <div className="flex justify-between">
                <span>- Sozialversicherungsbeiträge:</span>
                <strong>-613,50 EUR</strong>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span>Zu versteuerndes Einkommen (Monat):</span>
                <strong>2.386,50 EUR</strong>
              </div>
              <div className="flex justify-between">
                <span>Pro Jahr:</span>
                <strong>28.638,00 EUR</strong>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border border-purple-300 dark:border-purple-700 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Einkommensteuertabelle 2026 (vereinfacht):</h4>
            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-2 font-semibold pb-2 border-b">
                <span>Jahreseinkommen</span>
                <span>Steuersatz</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span>0 - 12.348 EUR</span>
                <span>0% (Grundfreibetrag)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span>12.349 - 62.810 EUR</span>
                <span>14% - 42% (progressiv)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span>62.811 - 277.826 EUR</span>
                <span>42%</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span>Ab 277.827 EUR</span>
                <span>45% (Reichensteuer)</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Berechnung für unser Beispiel (Steuerklasse 1):</h4>
            <div className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <p>
                Bei einem zu versteuernden Jahreseinkommen von 28.638 EUR liegt das Einkommen über dem Grundfreibetrag (12.348 EUR). Auf die ersten 12.348 EUR fällt keine Steuer an. Auf die verbleibenden 16.290 EUR wird progressiv besteuert.
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Lohnsteuer pro Monat (Steuerklasse 1):</span>
                  <strong>~315,00 EUR</strong>
                </div>
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>Pro Jahr:</span>
                  <span>~3.780,00 EUR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Hinweis:</strong> Die Lohnsteuer ist stark von der Steuerklasse abhängig. In Steuerklasse 3 wäre die Lohnsteuer deutlich niedriger (ca. 90 EUR/Monat), in Steuerklasse 5 deutlich höher (ca. 520 EUR/Monat). Die tatsächliche Jahressteuerlast wird über die Steuererklärung ausgeglichen.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Schritt 3: Solidaritätszuschlag und Kirchensteuer"
        icon={<DollarSign className="w-5 h-5" />}
        body="Nach der Lohnsteuer werden noch Solidaritätszuschlag und gegebenenfalls Kirchensteuer berechnet. Beide basieren auf der Höhe der Lohnsteuer."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3">Solidaritätszuschlag</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Der Soli beträgt 5,5% der Lohnsteuer. Seit 2021 entfällt er für die meisten Steuerzahler durch eine Freigrenze.
                </p>
                <div className="bg-muted rounded p-3 mt-2">
                  <div className="flex justify-between">
                    <span>Lohnsteuer:</span>
                    <strong>315,00 EUR</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Soli (5,5%):</span>
                    <strong>0,00 EUR</strong>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    * Keine Zahlung durch Freigrenze
                  </p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3">Kirchensteuer</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Die Kirchensteuer beträgt 8% (BY, BW) oder 9% (andere Bundesländer) der Lohnsteuer. Nur für Kirchenmitglieder.
                </p>
                <div className="bg-muted rounded p-3 mt-2">
                  <div className="flex justify-between">
                    <span>Lohnsteuer:</span>
                    <strong>315,00 EUR</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Kirchensteuer (9%):</span>
                    <strong>28,35 EUR</strong>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    * Falls Kirchenmitglied
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Wichtig:</strong> Die Kirchensteuer ist steuerlich absetzbar! Sie können sie in der Steuererklärung als Sonderausgabe geltend machen, was Ihre Steuerlast reduziert. Effektiv zahlen Sie daher weniger als die berechneten 8% oder 9%.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Schritt 4: Nettogehalt ermitteln"
        icon={<CheckCircle className="w-5 h-5" />}
        body="Jetzt setzen wir alle Berechnungen zusammen und ermitteln das finale Nettogehalt, das auf Ihrem Konto landet."
      >
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Komplette Berechnung</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-lg pb-3 border-b-2">
                <span className="font-semibold">Bruttogehalt</span>
                <span className="font-bold">3.000,00 EUR</span>
              </div>

              <div className="space-y-2 text-sm pl-4">
                <div className="flex justify-between text-red-700 dark:text-red-400">
                  <span>- Rentenversicherung (9,3%)</span>
                  <span>-279,00 EUR</span>
                </div>
                <div className="flex justify-between text-red-700 dark:text-red-400">
                  <span>- Krankenversicherung (8,15%)</span>
                  <span>-244,50 EUR</span>
                </div>
                <div className="flex justify-between text-red-700 dark:text-red-400">
                  <span>- Pflegeversicherung (1,7%)</span>
                  <span>-51,00 EUR</span>
                </div>
                <div className="flex justify-between text-red-700 dark:text-red-400">
                  <span>- Arbeitslosenversicherung (1,3%)</span>
                  <span>-39,00 EUR</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t">
                  <span>Summe Sozialabgaben</span>
                  <span>-613,50 EUR</span>
                </div>
              </div>

              <div className="space-y-2 text-sm pl-4 pt-2">
                <div className="flex justify-between text-red-700 dark:text-red-400">
                  <span>- Lohnsteuer (Steuerklasse 1)</span>
                  <span>-315,00 EUR</span>
                </div>
                <div className="flex justify-between text-red-700 dark:text-red-400">
                  <span>- Solidaritätszuschlag</span>
                  <span>-0,00 EUR</span>
                </div>
                <div className="flex justify-between text-red-700 dark:text-red-400">
                  <span>- Kirchensteuer (9%)</span>
                  <span>-28,35 EUR</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t">
                  <span>Summe Steuern</span>
                  <span>-343,35 EUR</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xl font-bold pt-4 border-t-2 border-green-600 dark:border-green-400">
                <span>Nettogehalt</span>
                <span className="text-green-600 dark:text-green-400">2.043,15 EUR</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
              <div className="text-sm text-blue-900 dark:text-blue-100 mb-1">Sozialabgaben</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20,45%</div>
              <div className="text-sm text-blue-900 dark:text-blue-100 mt-1">613,50 EUR</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 text-center">
              <div className="text-sm text-purple-900 dark:text-purple-100 mb-1">Steuern</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">11,45%</div>
              <div className="text-sm text-purple-900 dark:text-purple-100 mt-1">343,35 EUR</div>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
              <div className="text-sm text-green-900 dark:text-green-100 mb-1">Netto</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">68,10%</div>
              <div className="text-sm text-green-900 dark:text-green-100 mt-1">2.043,15 EUR</div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">Ergebnis:</h4>
            <p className="text-sm text-amber-900 dark:text-amber-100">
              Von 3.000 EUR Bruttogehalt bleiben in Steuerklasse 1 mit Kirchensteuer etwa 2.043 EUR netto übrig. Das entspricht 68,10% vom Brutto. Die Gesamtabzüge betragen 956,85 EUR oder 31,90%. Ohne Kirchensteuer würden etwa 2.071 EUR netto übrig bleiben (69,05%).
            </p>
          </div>
        </div>
      </ContentSection>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/ratgeber/brutto-netto-rechnung"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
