"use client";

import { useState } from "react";
import { Calculator as CalcIcon, BookOpen, ArrowLeftRight, Target } from "lucide-react";
import { BruttoNettoForm } from "@/components/calculator/BruttoNettoForm";
import { CalculatorResult } from "@/components/calculator/CalculatorResult";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { type CalculatorResult as CalculatorResultType, type CalculatorInput, type Steuerklasse, type Bundesland, calculateGermanTax } from "@/lib/tax";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Helper function to calculate required Brutto from desired Netto
function calculateBruttoFromNetto(
  desiredNetto: number,
  steuerklasse: Steuerklasse,
  bundesland: Bundesland,
  kirchensteuer: boolean,
  kvZusatzbeitrag: number = 2.9,
  kinder: number = 0,
  alter: number = 30
): number {
  // Start with a simple estimate: Netto * 1.5 as initial guess
  let estimatedBrutto = desiredNetto * 1.5;
  let iterations = 0;
  const maxIterations = 20;
  const tolerance = 1; // 1 EUR tolerance

  while (iterations < maxIterations) {
    // Calculate what netto we get from this brutto
    const calculatorInput: CalculatorInput = {
      bruttoeinkommen: estimatedBrutto,
      steuerklasse,
      bundesland,
      kirchensteuer,
      kvZusatzbeitrag,
      kinder,
      alter,
      abrechnungszeitraum: 'monat',
      krankenversicherung: 'gesetzlich',
      steuerfreibetrag: 0,
      geldwerterVorteil: 0,
      abrechnungsjahr: 2026,
    };

    const result = calculateGermanTax(calculatorInput);
    const calculatedNetto = result.netto;

    // Check if we're close enough
    const difference = desiredNetto - calculatedNetto;
    if (Math.abs(difference) <= tolerance) {
      return Math.round(estimatedBrutto);
    }

    // Adjust estimate: if calculated netto is too low, increase brutto
    // Use factor based on current deduction rate
    const deductionRate = 1 - (calculatedNetto / estimatedBrutto);
    const adjustmentFactor = 1 / (1 - deductionRate);
    estimatedBrutto = estimatedBrutto + (difference * adjustmentFactor);

    iterations++;
  }

  return Math.round(estimatedBrutto);
}

export default function NettoBruttoRechnerClient() {
  const [result, setResult] = useState<CalculatorResultType | null>(null);
  const [mode, setMode] = useState<'brutto-zu-netto' | 'netto-zu-brutto'>('brutto-zu-netto');

  // Wunschnetto form state
  const [wunschnetto, setWunschnetto] = useState<string>("2000");
  const [wunschSteuerklasse, setWunschSteuerklasse] = useState<Steuerklasse>(1);
  const [wunschBundesland, setWunschBundesland] = useState<Bundesland>("nordrhein-westfalen");
  const [wunschKirchensteuer, setWunschKirchensteuer] = useState<boolean>(false);

  const handleWunschnettoCalculate = () => {
    const desiredNetto = parseFloat(wunschnetto);
    if (isNaN(desiredNetto) || desiredNetto <= 0) return;

    const requiredBrutto = calculateBruttoFromNetto(
      desiredNetto,
      wunschSteuerklasse,
      wunschBundesland,
      wunschKirchensteuer
    );

    // Calculate the result with the required brutto
    const calculatorInput: CalculatorInput = {
      bruttoeinkommen: requiredBrutto,
      steuerklasse: wunschSteuerklasse,
      bundesland: wunschBundesland,
      kirchensteuer: wunschKirchensteuer,
      kvZusatzbeitrag: 2.9,
      kinder: 0,
      alter: 30,
      abrechnungszeitraum: 'monat',
      krankenversicherung: 'gesetzlich',
      steuerfreibetrag: 0,
      geldwerterVorteil: 0,
      abrechnungsjahr: 2026,
    };

    const calculationResult = calculateGermanTax(calculatorInput);
    setResult(calculationResult);
  };

  // FAQ data specific to Netto Brutto Rechner
  const faqs = [
    {
      question: "Wie berechne ich Brutto aus Netto?",
      answer: "Um Brutto aus Netto zu berechnen, verwenden Sie unseren Wunschnetto-Modus. Geben Sie Ihr gewünschtes Nettogehalt ein und wählen Sie Ihre Steuerklasse und Ihr Bundesland. Der Rechner ermittelt dann iterativ das erforderliche Bruttogehalt, das nach Abzug aller Steuern und Sozialversicherungsbeiträge zu Ihrem Wunschnetto führt. Diese Umkehrrechnung ist komplexer als die Brutto-zu-Netto-Berechnung, da die Abzüge nicht linear sind. Unser Rechner verwendet eine präzise Näherungsmethode, um das korrekte Bruttogehalt zu ermitteln."
    },
    {
      question: "Was ist ein Wunschnetto?",
      answer: "Wunschnetto bezeichnet das Nettogehalt, das Sie gerne ausgezahlt bekommen möchten. Es ist besonders relevant bei Gehaltsverhandlungen, wenn Sie einen bestimmten monatlichen Betrag zum Leben benötigen. Mit der Wunschnetto-Berechnung ermitteln Sie, welches Bruttogehalt Sie verhandeln müssen, um Ihr gewünschtes Netto zu erreichen. Beispiel: Sie benötigen 2.500 EUR netto im Monat. In Steuerklasse 1 müssten Sie etwa 3.700 EUR brutto verhandeln, in Steuerklasse 3 circa 3.400 EUR brutto. Die genaue Höhe hängt von weiteren Faktoren wie Bundesland und Kirchensteuer ab."
    },
    {
      question: "Wie viel Brutto brauche ich für 3000 Euro netto?",
      answer: "Für ein Nettogehalt von 3.000 EUR benötigen Sie je nach Steuerklasse unterschiedlich viel Brutto. In Steuerklasse 1 (ledig, keine Kinder) sind etwa 4.450 EUR brutto erforderlich. In Steuerklasse 2 (alleinerziehend) circa 4.300 EUR brutto. In Steuerklasse 3 (verheiratet, günstiger Partner) etwa 4.000 EUR brutto. In Steuerklasse 4 (verheiratet, beide verdienen ähnlich) ungefähr 4.400 EUR brutto. In Steuerklasse 5 (verheiratet, Partner verdient mehr) sogar über 5.500 EUR brutto. Diese Werte gelten für 2026 ohne Kirchensteuer. Nutzen Sie unseren Wunschnetto-Rechner für eine exakte Berechnung Ihrer individuellen Situation."
    },
    {
      question: "Warum ist die Netto-Brutto-Rechnung kompliziert?",
      answer: "Die Berechnung von Brutto aus Netto ist deutlich komplexer als umgekehrt, weil die Abzüge nicht linear sind. Mehrere Faktoren machen die Umkehrrechnung schwierig: Der progressive Steuertarif führt dazu, dass höhere Einkommen prozentual mehr Steuern zahlen. Die Beitragsbemessungsgrenzen begrenzen die Sozialversicherungsbeiträge nach oben. Der Solidaritätszuschlag greift erst ab einer bestimmten Lohnsteuerhöhe. Freibeträge und Pauschalen werden nur einmal berücksichtigt. Unser Rechner verwendet daher ein iteratives Näherungsverfahren: Er schätzt ein Brutto, berechnet das resultierende Netto, passt das Brutto an und wiederholt dies, bis das gewünschte Netto erreicht ist."
    },
    {
      question: "Kann ich bei Gehaltsverhandlungen das Netto angeben?",
      answer: "In Deutschland werden Gehälter grundsätzlich als Bruttobetrag vereinbart und im Arbeitsvertrag festgehalten. Es ist unüblich und rechtlich problematisch, ein Nettogehalt zu vereinbaren. Für Gehaltsverhandlungen sollten Sie wie folgt vorgehen: Berechnen Sie zunächst, welches Netto Sie benötigen bzw. wünschen. Nutzen Sie dann unseren Wunschnetto-Rechner, um das erforderliche Brutto zu ermitteln. Verhandeln Sie diesen Bruttobetrag mit Ihrem Arbeitgeber. Erwähnen Sie in der Verhandlung nur das Brutto, nicht das Netto. So stellen Sie sicher, dass Ihre finanziellen Vorstellungen erfüllt werden und die Vereinbarung rechtlich einwandfrei ist."
    }
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Netto Brutto Rechner 2026",
    "url": "https://gehaltly.de/netto-brutto-rechner",
    "description": "Kostenloser Netto Brutto Rechner 2026 für Deutschland. Berechnen Sie Brutto aus Netto (Wunschnetto) und Netto aus Brutto.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Brutto aus Netto berechnen",
      "Netto aus Brutto berechnen",
      "Wunschnetto-Modus",
      "Alle Steuerklassen 1-6",
      "Bidirektionale Berechnung",
      "Aktuelle Werte 2026"
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup schema={webAppSchema} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: "Netto Brutto Rechner", href: "/netto-brutto-rechner" }]} />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Netto Brutto Rechner 2026"
        subtitle="Berechnen Sie Brutto aus Netto und umgekehrt"
        description="Flexibler Rechner für beide Richtungen: Ermitteln Sie Ihr Netto aus dem Brutto oder berechnen Sie das erforderliche Brutto für Ihr Wunschnetto."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Mit unserem Netto Brutto Rechner 2026 können Sie in beide Richtungen rechnen: Berechnen Sie Ihr Nettogehalt aus dem Bruttogehalt oder ermitteln Sie das erforderliche Bruttogehalt für Ihr gewünschtes Netto. Besonders praktisch ist der Wunschnetto-Modus für Gehaltsverhandlungen - wenn Sie wissen möchten, welches Brutto Sie verhandeln müssen, um ein bestimmtes Netto zu erhalten.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Der Rechner berücksichtigt alle relevanten Faktoren wie Steuerklasse, Bundesland, Kirchensteuer und Sozialversicherungsbeiträge. Die bidirektionale Berechnung basiert auf den aktuellen Steuertabellen und Beitragssätzen für 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Mode Toggle */}
      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center bg-muted/50 p-4 rounded-lg">
              <Button
                variant={mode === 'brutto-zu-netto' ? 'default' : 'outline'}
                onClick={() => setMode('brutto-zu-netto')}
                className="w-full sm:w-auto"
              >
                Brutto → Netto berechnen
              </Button>
              <ArrowLeftRight className="w-5 h-5 text-muted-foreground rotate-90 sm:rotate-0" />
              <Button
                variant={mode === 'netto-zu-brutto' ? 'default' : 'outline'}
                onClick={() => setMode('netto-zu-brutto')}
                className="w-full sm:w-auto"
              >
                Netto → Brutto berechnen (Wunschnetto)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section - Two Column Layout */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Form */}
              <div className="space-y-6">
                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  {mode === 'brutto-zu-netto' ? (
                    <>
                      <h2 className="text-2xl font-bold mb-6">Brutto-Eingaben</h2>
                      <BruttoNettoForm onResult={setResult} />
                    </>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Target className="w-6 h-6" />
                        Wunschnetto-Berechnung
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="wunschnetto">Gewünschtes Nettogehalt (monatlich)</Label>
                          <Input
                            id="wunschnetto"
                            type="number"
                            value={wunschnetto}
                            onChange={(e) => setWunschnetto(e.target.value)}
                            placeholder="z.B. 2000"
                            className="mt-1.5"
                          />
                          <p className="text-sm text-muted-foreground mt-1">
                            Geben Sie Ihr gewünschtes monatliches Nettogehalt in EUR ein
                          </p>
                        </div>

                        <div>
                          <Label htmlFor="wunsch-steuerklasse">Steuerklasse</Label>
                          <Select
                            value={wunschSteuerklasse.toString()}
                            onValueChange={(value) => setWunschSteuerklasse(parseInt(value) as Steuerklasse)}
                          >
                            <SelectTrigger id="wunsch-steuerklasse" className="mt-1.5">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">Steuerklasse 1 (Ledig)</SelectItem>
                              <SelectItem value="2">Steuerklasse 2 (Alleinerziehend)</SelectItem>
                              <SelectItem value="3">Steuerklasse 3 (Verheiratet, höheres Einkommen)</SelectItem>
                              <SelectItem value="4">Steuerklasse 4 (Verheiratet, beide berufstätig)</SelectItem>
                              <SelectItem value="5">Steuerklasse 5 (Verheiratet, geringeres Einkommen)</SelectItem>
                              <SelectItem value="6">Steuerklasse 6 (Zweites Arbeitsverhältnis)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="wunsch-bundesland">Bundesland</Label>
                          <Select
                            value={wunschBundesland}
                            onValueChange={(value) => setWunschBundesland(value as Bundesland)}
                          >
                            <SelectTrigger id="wunsch-bundesland" className="mt-1.5">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="baden-wuerttemberg">Baden-Württemberg</SelectItem>
                              <SelectItem value="bayern">Bayern</SelectItem>
                              <SelectItem value="berlin">Berlin</SelectItem>
                              <SelectItem value="brandenburg">Brandenburg</SelectItem>
                              <SelectItem value="bremen">Bremen</SelectItem>
                              <SelectItem value="hamburg">Hamburg</SelectItem>
                              <SelectItem value="hessen">Hessen</SelectItem>
                              <SelectItem value="mecklenburg-vorpommern">Mecklenburg-Vorpommern</SelectItem>
                              <SelectItem value="niedersachsen">Niedersachsen</SelectItem>
                              <SelectItem value="nordrhein-westfalen">Nordrhein-Westfalen</SelectItem>
                              <SelectItem value="rheinland-pfalz">Rheinland-Pfalz</SelectItem>
                              <SelectItem value="saarland">Saarland</SelectItem>
                              <SelectItem value="sachsen">Sachsen</SelectItem>
                              <SelectItem value="sachsen-anhalt">Sachsen-Anhalt</SelectItem>
                              <SelectItem value="schleswig-holstein">Schleswig-Holstein</SelectItem>
                              <SelectItem value="thueringen">Thüringen</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="wunsch-kirchensteuer"
                            checked={wunschKirchensteuer}
                            onChange={(e) => setWunschKirchensteuer(e.target.checked)}
                            className="rounded"
                          />
                          <Label htmlFor="wunsch-kirchensteuer" className="cursor-pointer">
                            Kirchensteuerpflichtig
                          </Label>
                        </div>

                        <Button
                          onClick={handleWunschnettoCalculate}
                          className="w-full"
                          size="lg"
                        >
                          Erforderliches Brutto berechnen
                        </Button>

                        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
                          <p className="text-sm text-blue-900 dark:text-blue-100">
                            <strong>Hinweis:</strong> Die Wunschnetto-Berechnung ermittelt das Bruttogehalt, das Sie verhandeln müssen, um Ihr gewünschtes Nettogehalt zu erreichen. Die Berechnung berücksichtigt alle Steuern und Sozialabgaben.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column - Result */}
              <div className="space-y-6">
                {result ? (
                  <>
                    {mode === 'netto-zu-brutto' && (
                      <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 mb-4">
                        <h3 className="text-lg font-semibold mb-2">Erforderliches Bruttogehalt</h3>
                        <p className="text-3xl font-bold text-primary">
                          {result.brutto.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          monatlich erforderlich für Ihr Wunschnetto
                        </p>
                      </div>
                    )}
                    <CalculatorResult result={result} isMonthly={true} />
                  </>
                ) : (
                  <div className="bg-background rounded-lg border p-6 shadow-sm h-full flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <CalcIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                      <p className="text-lg font-medium mb-2">
                        {mode === 'brutto-zu-netto' ? 'Ihr Netto' : 'Erforderliches Brutto'}
                      </p>
                      <p className="text-sm">
                        {mode === 'brutto-zu-netto'
                          ? 'Geben Sie Ihr Brutto ein, um Ihr Netto zu berechnen'
                          : 'Geben Sie Ihr Wunschnetto ein, um das erforderliche Brutto zu berechnen'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks currentHref="/netto-brutto-rechner" count={6} title="Weitere Rechner" />

      {/* Glossary Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold mb-8">Wichtige Begriffe zur Netto-Brutto-Berechnung</h2>

            {/* Wunschnetto */}
            <ContentSection
              heading="Wunschnetto-Berechnung"
              icon={<Target className="w-5 h-5" />}
              body="Die Wunschnetto-Berechnung ist ein spezieller Rechenmodus, mit dem Sie ermitteln können, welches Bruttogehalt Sie benötigen, um ein bestimmtes gewünschtes Nettogehalt zu erreichen. Diese Umkehrrechnung ist besonders wichtig bei Gehaltsverhandlungen, wenn Sie einen konkreten monatlichen Betrag zum Leben benötigen und wissen möchten, welches Brutto Sie verhandeln müssen."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Praktisches Beispiel:</strong> Sie möchten nach Abzug aller Steuern und Abgaben 2.500 EUR netto im Monat haben. In Steuerklasse 1 ohne Kirchensteuer müssen Sie etwa 3.700 EUR brutto verhandeln. In Steuerklasse 3 (verheiratet) reichen bereits circa 3.400 EUR brutto aus. Der genaue Wert hängt von Ihrem Bundesland und weiteren Faktoren ab.
                </p>
              </div>
            </ContentSection>

            {/* Brutto-Netto vs Netto-Brutto */}
            <ContentSection
              heading="Brutto-Netto vs. Netto-Brutto"
              icon={<ArrowLeftRight className="w-5 h-5" />}
              body="Bei der Brutto-Netto-Berechnung (Standardrichtung) ist das Bruttogehalt bekannt und Sie berechnen daraus das Nettogehalt. Dies ist einfach und eindeutig. Bei der Netto-Brutto-Berechnung (Umkehrrechnung) ist das gewünschte Netto bekannt und Sie berechnen das erforderliche Brutto. Diese Richtung ist komplexer, da die Abzüge nicht linear sind und die Berechnung iterativ erfolgen muss."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Warum ist Netto-Brutto komplexer?</strong> Der progressive Steuertarif bedeutet, dass höhere Einkommen prozentual mehr Steuern zahlen. Zudem greifen verschiedene Freibeträge und Beitragsbemessungsgrenzen, die die Berechnung nicht-linear machen. Unser Rechner verwendet daher ein iteratives Näherungsverfahren, das in wenigen Schritten das korrekte Bruttogehalt ermittelt.
                </p>
              </div>
            </ContentSection>

            {/* Gehaltsverhandlung */}
            <ContentSection
              heading="Gehaltsverhandlung mit Wunschnetto"
              icon={<BookOpen className="w-5 h-5" />}
              body="Bei Gehaltsverhandlungen sollten Sie immer vom Brutto sprechen, nicht vom Netto. Dennoch ist es wichtig zu wissen, welches Netto Sie benötigen. Die richtige Vorgehensweise: Ermitteln Sie zunächst Ihren monatlichen Bedarf (Miete, Lebenshaltung, Sparen). Nutzen Sie den Wunschnetto-Rechner, um das erforderliche Brutto zu berechnen. Verhandeln Sie dann diesen Bruttobetrag mit Ihrem Arbeitgeber. Erwähnen Sie im Gespräch nur das Brutto - Ihr Arbeitgeber kann Ihr Netto nicht beeinflussen, da es von Ihrer persönlichen Steuersituation abhängt."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Verhandlungstipp:</strong> Addieren Sie zum errechneten Mindest-Brutto noch einen Puffer von 10-15% für die Verhandlung. So haben Sie Spielraum nach unten und erreichen trotzdem Ihr Wunschnetto. Beispiel: Ihr Rechner zeigt 3.500 EUR brutto als Minimum. Fordern Sie 3.900 EUR und verhandeln Sie bei Bedarf auf 3.600-3.700 EUR runter.
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zum Netto Brutto Rechner" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Berechnen Sie Brutto aus Netto und umgekehrt
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren flexiblen Netto Brutto Rechner 2026. Perfekt für Gehaltsverhandlungen und Finanzplanung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
