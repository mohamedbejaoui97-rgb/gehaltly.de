"use client";

import { useState, useEffect } from "react";
import { Building2, TrendingUp, Info, BookOpen } from "lucide-react";
import { calculateGermanTax, type CalculatorResult as CalculatorResultType } from "@/lib/tax";
import { CalculatorResult } from "@/components/calculator/CalculatorResult";
import { SliderInput } from "@/components/calculator/SliderInput";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ArbeitgeberPage() {
  const [bruttogehalt, setBruttogehalt] = useState(4000);
  const [result, setResult] = useState<CalculatorResultType | null>(null);

  // Format currency in German format
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Parse German formatted number
  const parseCurrency = (value: string): number => {
    return parseFloat(value.replace(/\./g, "").replace(",", "."));
  };

  // Employer contribution rates (2026)
  const kvZusatzbeitrag = 2.9; // Average Zusatzbeitrag 2026 in percent
  const employerRates = {
    rentenversicherung: 0.093,    // 9.3%
    krankenversicherung: 0.073 + (kvZusatzbeitrag / 100 / 2),   // 7.3% + half Zusatzbeitrag (1.45%)
    pflegeversicherung: 0.018,    // 1.8%
    arbeitslosenversicherung: 0.013, // 1.3%
  };

  // Calculate employer contributions
  const calculateEmployerContributions = () => {
    const rv = Math.round(bruttogehalt * employerRates.rentenversicherung);
    const kv = Math.round(bruttogehalt * employerRates.krankenversicherung);
    const pv = Math.round(bruttogehalt * employerRates.pflegeversicherung);
    const alv = Math.round(bruttogehalt * employerRates.arbeitslosenversicherung);

    return {
      rentenversicherung: rv,
      krankenversicherung: kv,
      pflegeversicherung: pv,
      arbeitslosenversicherung: alv,
      gesamt: rv + kv + pv + alv,
    };
  };

  const employerContributions = calculateEmployerContributions();
  const totalEmployerCost = bruttogehalt + employerContributions.gesamt;

  // Calculate employee result
  const calculateEmployee = () => {
    const taxResult = calculateGermanTax({
      bruttoeinkommen: bruttogehalt,
      abrechnungszeitraum: "monat",
      steuerklasse: 1,
      bundesland: "nordrhein-westfalen",
      kirchensteuer: false,
      alter: 30,
      kinder: 0,
      krankenversicherung: "gesetzlich",
      kvZusatzbeitrag: 2.9,
      steuerfreibetrag: 0,
      geldwerterVorteil: 0,
      abrechnungsjahr: 2026,
    });
    setResult(taxResult);
    return taxResult;
  };

  // Calculate on mount and when bruttogehalt changes
  useEffect(() => {
    calculateEmployee();
  }, [bruttogehalt]);

  // FAQ data specific to Arbeitgeber
  const faqs = [
    {
      question: "Was kostet ein Arbeitnehmer den Arbeitgeber wirklich?",
      answer: "Ein Arbeitnehmer kostet den Arbeitgeber deutlich mehr als nur das Bruttogehalt. Zusätzlich zum Brutto zahlt der Arbeitgeber Sozialversicherungsbeiträge: 9,3% Rentenversicherung, 8,75% Krankenversicherung (7,3% + 1,45% hälftig Zusatzbeitrag), 1,8% Pflegeversicherung und 1,3% Arbeitslosenversicherung. Insgesamt kommen etwa 21,2% auf das Bruttogehalt drauf. Bei 4.000 EUR Brutto kostet der Mitarbeiter also etwa 4.846 EUR. Hinzu kommen noch weitere Kosten wie Arbeitsplatzausstattung, Weiterbildung, Urlaubsgeld oder betriebliche Altersvorsorge."
    },
    {
      question: "Wie hoch sind die Arbeitgeberanteile zur Sozialversicherung?",
      answer: "Die Arbeitgeberanteile zur Sozialversicherung 2026 betragen: Rentenversicherung 9,3% (gleich wie Arbeitnehmer), Krankenversicherung 7,3% (plus hälftig Zusatzbeitrag, im Schnitt 1,45%), Pflegeversicherung 1,8% (gleich wie Arbeitnehmer; AN zahlt ebenfalls 1,8% bzw. 2,4% ohne Kinder – Ausnahme Sachsen: AG 1,2%, AN 2,4% bzw. 3,0%), Arbeitslosenversicherung 1,3% (gleich wie Arbeitnehmer). Zusammen zahlt der Arbeitgeber etwa 20,85% des Bruttogehalts zusätzlich an Sozialversicherungsbeiträgen. Diese Kosten sind für den Arbeitgeber nicht absetzbar, sondern Teil der Lohnnebenkosten."
    },
    {
      question: "Was ist die Arbeitgeberpauschale bei Minijobs?",
      answer: "Bei Minijobs (bis 556 EUR) zahlt der Arbeitgeber eine Pauschale von etwa 30%: 15% Rentenversicherung (Arbeitnehmer kann aufstocken auf volle Versicherung), 13% Krankenversicherung, 2% Pauschalsteuer und kleine Umlagen. Der Minijobber selbst zahlt nur einen kleinen Eigenanteil zur Rentenversicherung (3,6%), kann sich aber davon befreien lassen. Bei 556 EUR Minijob kostet der Mitarbeiter den Arbeitgeber also etwa 723 EUR. Vorteil: Für den Minijobber fallen keine Steuern und kaum Sozialabgaben an, sodass er fast das volle Brutto netto erhält."
    },
    {
      question: "Können Arbeitgeber Lohnnebenkosten senken?",
      answer: "Lohnnebenkosten sind gesetzlich festgelegt und können nicht direkt gesenkt werden. Es gibt aber Gestaltungsmöglichkeiten: Steuerfreie Zuwendungen (Jobticket bis 50 EUR/Monat, Sachbezüge bis 50 EUR/Monat, Zuschuss zu Kinderbetreuung bis 600 EUR/Monat), die nicht sozialversicherungspflichtig sind. Betriebliche Altersvorsorge (teilweise steuer- und sozialversicherungsfrei). Mitarbeiterrabatte bis 1.080 EUR/Jahr steuerfrei. Bei geringfügiger Beschäftigung günstigere Pauschalen. Wichtig: Professionelle Gehaltsstrukturen vom Steuerberater prüfen lassen."
    },
    {
      question: "Was ist der Unterschied zwischen Brutto und Arbeitgeberkosten?",
      answer: "Das Bruttogehalt ist das, was im Arbeitsvertrag steht und was der Arbeitnehmer vor Abzügen erhält. Die Arbeitgeberkosten sind deutlich höher: Brutto plus Arbeitgeberanteile zur Sozialversicherung (ca. 21,2%), plus eventuelle weitere Leistungen (betriebliche Altersvorsorge, Zuschüsse, Sonderzahlungen). Während der Arbeitnehmer bei 4.000 EUR Brutto etwa 2.590 EUR netto erhält, zahlt der Arbeitgeber insgesamt ca. 4.846 EUR. Die Differenz zwischen Arbeitgeberkosten (4.846 EUR) und Arbeitnehmernetto (2.590 EUR) fließt in Steuern und Sozialversicherung."
    }
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Arbeitgeberkosten-Rechner 2026",
    "url": "https://gehaltly.de/rechner/arbeitgeber",
    "description": "Kostenloser Arbeitgeberkosten-Rechner 2026 - Berechnen Sie die tatsächlichen Kosten eines Mitarbeiters inklusive aller Arbeitgeberbeiträge.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Arbeitgeberkosten berechnen",
      "Sozialversicherungsbeiträge AG",
      "Lohnnebenkosten",
      "Gesamtkosten pro Mitarbeiter",
      "Detaillierte Aufschlüsselung"
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup schema={webAppSchema} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[
          { label: "Rechner", href: "/rechner" },
          { label: "Arbeitgeber", href: "/rechner/arbeitgeber" }
        ]} />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Arbeitgeberkosten-Rechner 2026"
        subtitle="Berechnen Sie die wahren Kosten eines Mitarbeiters"
        description="Ermitteln Sie die Gesamtkosten eines Arbeitnehmers inklusive aller Arbeitgeberanteile zur Sozialversicherung."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Als Arbeitgeber zahlen Sie nicht nur das Bruttogehalt, sondern auch erhebliche Arbeitgeberanteile zur Sozialversicherung. Unser Rechner zeigt Ihnen transparent die tatsächlichen Kosten pro Mitarbeiter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wichtig für Personalplanung, Budgetierung und Kalkulation. Verstehen Sie, wie sich Brutto, Arbeitgeberkosten und Mitarbeiternetto zueinander verhalten.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Input & Employer Costs */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Bruttogehalt Mitarbeiter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SliderInput
                      label="Monatliches Bruttogehalt"
                      value={bruttogehalt}
                      onChange={(value) => {
                        setBruttogehalt(value);
                        calculateEmployee();
                      }}
                      min={1500}
                      max={10000}
                      step={100}
                      formatValue={(v) => formatCurrency(v) + " €"}
                      parseValue={parseCurrency}
                    />
                  </CardContent>
                </Card>

                <Card className="bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Arbeitgeberanteile
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Rentenversicherung</p>
                          <p className="text-xs text-muted-foreground">9,3% Arbeitgeberanteil</p>
                        </div>
                        <span className="font-semibold text-primary">
                          {formatCurrency(employerContributions.rentenversicherung)} €
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Krankenversicherung</p>
                          <p className="text-xs text-muted-foreground">7,3% + ½ Zusatzbeitrag (8,75%)</p>
                        </div>
                        <span className="font-semibold text-primary">
                          {formatCurrency(employerContributions.krankenversicherung)} €
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Pflegeversicherung</p>
                          <p className="text-xs text-muted-foreground">1,8% Arbeitgeberanteil</p>
                        </div>
                        <span className="font-semibold text-primary">
                          {formatCurrency(employerContributions.pflegeversicherung)} €
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Arbeitslosenversicherung</p>
                          <p className="text-xs text-muted-foreground">1,3% Arbeitgeberanteil</p>
                        </div>
                        <span className="font-semibold text-primary">
                          {formatCurrency(employerContributions.arbeitslosenversicherung)} €
                        </span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Gesamt Arbeitgeberanteile:</span>
                        <span className="text-xl font-bold text-primary">
                          {formatCurrency(employerContributions.gesamt)} €
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Ca. {((employerContributions.gesamt / bruttogehalt) * 100).toFixed(1)}% vom Bruttogehalt
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
                  <CardHeader>
                    <CardTitle className="text-orange-900 dark:text-orange-100">
                      Gesamtkosten für Arbeitgeber
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-orange-900 dark:text-orange-100">
                        <span>Bruttogehalt:</span>
                        <span className="font-medium">{formatCurrency(bruttogehalt)} €</span>
                      </div>
                      <div className="flex justify-between text-orange-900 dark:text-orange-100">
                        <span>+ Arbeitgeberanteile:</span>
                        <span className="font-medium">{formatCurrency(employerContributions.gesamt)} €</span>
                      </div>
                      <div className="border-t border-orange-300 dark:border-orange-700 pt-2 flex justify-between">
                        <span className="text-lg font-bold text-orange-900 dark:text-orange-100">
                          Gesamtkosten:
                        </span>
                        <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                          {formatCurrency(totalEmployerCost)} €
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Employee Net & Breakdown */}
              <div className="space-y-6">
                {result && (
                  <>
                    <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <CardHeader>
                        <CardTitle className="text-green-900 dark:text-green-100">
                          Was erhält der Mitarbeiter netto?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-green-900 dark:text-green-100">
                            <span>Bruttogehalt:</span>
                            <span className="font-medium">{formatCurrency(bruttogehalt)} €</span>
                          </div>
                          <div className="flex justify-between text-green-900 dark:text-green-100">
                            <span>- Steuern & SV:</span>
                            <span className="font-medium">- {formatCurrency(result.gesamtAbzuege)} €</span>
                          </div>
                          <div className="border-t border-green-300 dark:border-green-700 pt-2 flex justify-between">
                            <span className="text-lg font-bold text-green-900 dark:text-green-100">
                              Nettogehalt:
                            </span>
                            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                              {formatCurrency(result.netto)} €
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Kostenverteilung im Überblick</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="bg-orange-100 dark:bg-orange-950/30 p-4 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Arbeitgeberkosten gesamt:</span>
                            <span className="font-bold">{formatCurrency(totalEmployerCost)} €</span>
                          </div>
                          <p className="text-xs text-muted-foreground">100% - Was der AG zahlt</p>
                        </div>

                        <div className="bg-blue-100 dark:bg-blue-950/30 p-4 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Mitarbeiter Brutto:</span>
                            <span className="font-bold">{formatCurrency(bruttogehalt)} €</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {((bruttogehalt / totalEmployerCost) * 100).toFixed(1)}% - Im Arbeitsvertrag
                          </p>
                        </div>

                        <div className="bg-green-100 dark:bg-green-950/30 p-4 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Mitarbeiter Netto:</span>
                            <span className="font-bold">{formatCurrency(result.netto)} €</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {((result.netto / totalEmployerCost) * 100).toFixed(1)}% - Auf dem Konto
                          </p>
                        </div>

                        <div className="bg-red-100 dark:bg-red-950/30 p-4 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Steuern & Sozialabgaben:</span>
                            <span className="font-bold">
                              {formatCurrency(totalEmployerCost - result.netto)} €
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {(((totalEmployerCost - result.netto) / totalEmployerCost) * 100).toFixed(1)}% - An den Staat
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <CalculatorResult result={result} isMonthly={true} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks currentHref="/rechner/arbeitgeber" count={6} title="Weitere Gehaltsrechner" />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">Arbeitgeberkosten verstehen</h2>

            <ContentSection
              heading="Lohnnebenkosten in Deutschland"
              icon={<BookOpen className="w-5 h-5" />}
              body="Die Lohnnebenkosten umfassen alle Arbeitgeberanteile zur Sozialversicherung. Diese betragen 2026 insgesamt etwa 21,2% des Bruttogehalts: Rentenversicherung 9,3%, Krankenversicherung 8,75% (7,3% + hälftig Zusatzbeitrag von durchschnittlich 2,9%), Pflegeversicherung 1,8% und Arbeitslosenversicherung 1,3%. Bei einem Bruttogehalt von 4.000 EUR zahlt der Arbeitgeber zusätzlich etwa 846 EUR an Sozialversicherungsbeiträgen. Diese Kosten sind gesetzlich vorgeschrieben und gelten für alle sozialversicherungspflichtigen Beschäftigungsverhältnisse."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Wichtig:</strong> Die Arbeitgeberanteile sind nicht verhandelbar und fallen bei jedem sozialversicherungspflichtigen Arbeitsverhältnis an. Sie sind Betriebsausgaben und steuerlich absetzbar.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Weitere Arbeitgeberkosten"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Neben den Sozialversicherungsbeiträgen entstehen weitere Kosten: Lohnfortzahlung im Krankheitsfall (6 Wochen volles Gehalt), Urlaubsanspruch (gesetzlich mindestens 20 Tage), U1-Umlage für Krankheit (ca. 1-2% für Kleinbetriebe), U2-Umlage für Mutterschaft (ca. 0,3%), Insolvenzgeldumlage (ca. 0,06%), Unfallversicherung (branchenabhängig 0,5-2%). Dazu kommen indirekte Kosten wie Arbeitsplatzausstattung, Weiterbildung, Betriebsrente oder Sonderzahlungen. Die tatsächlichen Gesamtkosten liegen oft 30-40% über dem Bruttogehalt."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Kalkulationshilfe:</strong> Für eine realistische Personalkostenplanung rechnen Sie mit Faktor 1,4 auf das Bruttogehalt (bei mittleren Gehältern ohne große Sonderzahlungen).
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Optimierung der Personalkosten"
              icon={<Info className="w-5 h-5" />}
              body="Personalkosten können durch kluge Gestaltung optimiert werden: Steuerfreie Zuwendungen wie Jobticket (bis 50 EUR/Monat), Sachbezüge (bis 50 EUR/Monat), Kindergartenzuschuss (bis 600 EUR/Monat) erhöhen das Netto des Mitarbeiters, ohne zusätzliche Sozialabgaben auszulösen. Betriebliche Altersvorsorge kann teilweise steuer- und sozialversicherungsfrei gestaltet werden. Bei geringfügiger Beschäftigung (Minijob bis 556 EUR) fallen nur Pauschalbeiträge an. Werkstudenten sind sozialversicherungsfrei. Professionelle Steuerberatung lohnt sich."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Beispiel:</strong> Ein Jobticket für 50 EUR/Monat kostet den AG nur 50 EUR, würde als Gehaltserhöhung aber ca. 100 EUR kosten (inkl. AG-Anteile), um dem AN die gleichen 50 EUR netto zu bringen.
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zu Arbeitgeberkosten" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihre Personalkosten
            </h2>
            <p className="text-lg text-muted-foreground">
              Ermitteln Sie transparent die tatsächlichen Kosten eines Mitarbeiters für Ihre Personalplanung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
