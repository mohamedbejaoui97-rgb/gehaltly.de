"use client";

import { useState } from "react";
import { Calculator as CalcIcon, Users, TrendingUp, Info, BookOpen } from "lucide-react";
import { calculateGermanTax, type CalculatorResult as CalculatorResultType } from "@/lib/tax";
import { CalculatorResult } from "@/components/calculator/CalculatorResult";
import { SliderInput } from "@/components/calculator/SliderInput";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TeilzeitPage() {
  const [fullTimeGross, setFullTimeGross] = useState(4000);
  const [teilzeitFaktor, setTeilzeitFaktor] = useState(0.75);
  const [fullTimeResult, setFullTimeResult] = useState<CalculatorResultType | null>(null);
  const [partTimeResult, setPartTimeResult] = useState<CalculatorResultType | null>(null);

  // Format currency in German format
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Parse German formatted number
  const parseCurrency = (value: string): number => {
    return parseFloat(value.replace(/\./g, "").replace(",", "."));
  };

  // Calculate both full-time and part-time results
  const calculateResults = () => {
    // Full-time calculation
    const fullTime = calculateGermanTax({
      bruttoeinkommen: fullTimeGross,
      abrechnungszeitraum: "monat",
      steuerklasse: 1,
      bundesland: "nordrhein-westfalen",
      kirchensteuer: false,
      alter: 30,
      kinder: 0,
      krankenversicherung: "gesetzlich",
      kvZusatzbeitrag: 1.7,
      steuerfreibetrag: 0,
      geldwerterVorteil: 0,
    });
    setFullTimeResult(fullTime);

    // Part-time calculation
    const partTimeGross = fullTimeGross * teilzeitFaktor;
    const partTime = calculateGermanTax({
      bruttoeinkommen: partTimeGross,
      abrechnungszeitraum: "monat",
      steuerklasse: 1,
      bundesland: "nordrhein-westfalen",
      kirchensteuer: false,
      alter: 30,
      kinder: 0,
      krankenversicherung: "gesetzlich",
      kvZusatzbeitrag: 1.7,
      steuerfreibetrag: 0,
      geldwerterVorteil: 0,
    });
    setPartTimeResult(partTime);
  };

  // Calculate on mount and whenever inputs change
  useState(() => {
    calculateResults();
  });

  const partTimeGross = fullTimeGross * teilzeitFaktor;
  const fullTimeHours = 40;
  const partTimeHours = fullTimeHours * teilzeitFaktor;

  // Re-calculate when inputs change
  useState(() => {
    calculateResults();
  });

  // FAQ data specific to Teilzeit
  const faqs = [
    {
      question: "Wie berechnet man Teilzeitgehalt?",
      answer: "Das Teilzeitgehalt berechnet sich proportional zum Vollzeitgehalt. Multiplizieren Sie das Vollzeitgehalt mit Ihrem Teilzeitfaktor. Bei 75% Teilzeit (30 Wochenstunden statt 40) erhalten Sie 75% des Vollzeitgehalts. Beispiel: 4.000 EUR Vollzeit × 0,75 = 3.000 EUR Teilzeit brutto. Der Stundenlohn bleibt dabei gleich. Wichtig: Alle Leistungen wie Urlaub, Weihnachtsgeld oder vermögenswirksame Leistungen werden anteilig gewährt."
    },
    {
      question: "Was verdient man bei 30 Stunden Teilzeit?",
      answer: "Bei 30 Wochenstunden arbeiten Sie 75% einer Vollzeitstelle (40 Stunden). Ihr Gehalt beträgt daher 75% des Vollzeitgehalts. Bei einem Vollzeitgehalt von 4.000 EUR brutto verdienen Sie 3.000 EUR brutto in Teilzeit. Netto bleiben in Steuerklasse 1 etwa 2.050 EUR übrig. Bei 3.000 EUR Vollzeitgehalt wären es 2.250 EUR brutto (ca. 1.550 EUR netto) in Teilzeit. Zusätzlich haben Sie Anspruch auf 75% des Urlaubs und aller Sonderzahlungen."
    },
    {
      question: "Lohnt sich Teilzeit finanziell?",
      answer: "Teilzeit kann sich finanziell lohnen, trotz geringerem Bruttogehalt. Durch die progressive Steuer zahlen Sie bei niedrigerem Einkommen einen geringeren Steuersatz. Bei 75% Teilzeit erhalten Sie oft mehr als 75% des Vollzeit-Nettogehalts. Zusätzliche Faktoren: geringere Fahrtkosten, mehr Zeit für Familie oder Nebentätigkeit, bessere Work-Life-Balance. Nachteile: geringere Rentenbeiträge, eventuell höhere Stundenzahl bei Minijob-Partner, weniger Karriereoptionen. Eine individuelle Berechnung ist wichtig."
    },
    {
      question: "Welche Rechte habe ich in Teilzeit?",
      answer: "Teilzeitbeschäftigte haben dieselben Rechte wie Vollzeitbeschäftigte, nur anteilig: Kündigungsschutz ab 6 Monaten, Anspruch auf Entgeltfortzahlung im Krankheitsfall, anteiliger Jahresurlaub (z.B. 75% von 30 Tagen = 22,5 Tage), anteilige Sonderzahlungen (Weihnachts-/Urlaubsgeld), Anspruch auf betriebliche Altersvorsorge, Mutterschutz und Elternzeit. Sie dürfen nicht wegen Teilzeit benachteiligt werden. Nach 6 Monaten Betriebszugehörigkeit haben Sie Anspruch auf Teilzeit-Reduzierung."
    },
    {
      question: "Kann ich von Teilzeit wieder auf Vollzeit wechseln?",
      answer: "Das hängt von Ihrer Vereinbarung ab. Bei befristeter Teilzeit (z.B. während Elternzeit) kehren Sie automatisch zur ursprünglichen Arbeitszeit zurück. Bei unbefristeter Teilzeit haben Sie nach dem Teilzeit- und Befristungsgesetz (TzBfG) einen Anspruch auf bevorzugte Berücksichtigung bei freien Vollzeitstellen. Ein Rechtsanspruch auf Rückkehr zur Vollzeit besteht seit 2019 in Betrieben mit mehr als 45 Mitarbeitern, wenn die Teilzeit zwischen 1 und 5 Jahren befristet wurde (Brückenteilzeit). Sprechen Sie frühzeitig mit Ihrem Arbeitgeber."
    }
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Teilzeitrechner 2026",
    "url": "https://gehaltly.de/rechner/teilzeit",
    "description": "Kostenloser Teilzeitrechner 2026 - Vergleichen Sie Vollzeit und Teilzeit Gehälter mit präziser Netto-Berechnung.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Teilzeitgehalt berechnen",
      "Vollzeit-Teilzeit-Vergleich",
      "Flexible Teilzeitfaktoren",
      "Netto-Berechnung",
      "Proportionale Berechnungen"
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
          { label: "Teilzeit", href: "/rechner/teilzeit" }
        ]} />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Teilzeitrechner 2026"
        subtitle="Vergleichen Sie Vollzeit- und Teilzeitgehalt"
        description="Berechnen Sie Ihr Teilzeitgehalt im direkten Vergleich zum Vollzeitgehalt. Ermitteln Sie, wie viel Sie netto bei verschiedenen Teilzeitmodellen verdienen."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Der Teilzeitrechner zeigt Ihnen den direkten Vergleich zwischen Vollzeit- und Teilzeitbeschäftigung. Sehen Sie auf einen Blick, wie sich eine Reduzierung der Arbeitszeit auf Ihr Brutto- und Nettogehalt auswirkt.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Besonders wertvoll für Eltern, Studierende oder alle, die ihre Work-Life-Balance verbessern möchten. Der Rechner berücksichtigt, dass Sie durch das geringere Einkommen oft prozentual weniger Steuern zahlen.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Input */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Eingaben</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <SliderInput
                      label="Vollzeit-Bruttogehalt (Monat)"
                      value={fullTimeGross}
                      onChange={(value) => {
                        setFullTimeGross(value);
                        calculateResults();
                      }}
                      min={1500}
                      max={10000}
                      step={100}
                      formatValue={(v) => formatCurrency(v) + " €"}
                      parseValue={parseCurrency}
                    />

                    <div className="space-y-2">
                      <Label htmlFor="teilzeitFaktor">Teilzeitfaktor</Label>
                      <Select
                        value={teilzeitFaktor.toString()}
                        onValueChange={(value) => {
                          setTeilzeitFaktor(parseFloat(value));
                          calculateResults();
                        }}
                      >
                        <SelectTrigger id="teilzeitFaktor">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0.25">25% - 10 Stunden/Woche</SelectItem>
                          <SelectItem value="0.5">50% - 20 Stunden/Woche</SelectItem>
                          <SelectItem value="0.625">62,5% - 25 Stunden/Woche</SelectItem>
                          <SelectItem value="0.75">75% - 30 Stunden/Woche</SelectItem>
                          <SelectItem value="0.875">87,5% - 35 Stunden/Woche</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-sm text-blue-900 dark:text-blue-100">
                        <Users className="w-4 h-4 inline mr-1" />
                        <strong>Info:</strong> Bei Teilzeit erhalten Sie proportional weniger Gehalt, aber alle Leistungen bleiben anteilig erhalten.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Comparison */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Vergleich Vollzeit vs. Teilzeit</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Vollzeit */}
                    <div className="border rounded-lg p-4 bg-muted/50">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Vollzeit ({fullTimeHours}h/Woche)
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Brutto:</span>
                          <span className="font-medium">{formatCurrency(fullTimeGross)} €</span>
                        </div>
                        {fullTimeResult && (
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Netto:</span>
                            <span className="font-medium text-green-600 dark:text-green-400">
                              {formatCurrency(fullTimeResult.netto)} €
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Teilzeit */}
                    <div className="border rounded-lg p-4 bg-primary/5">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Teilzeit ({partTimeHours}h/Woche - {teilzeitFaktor * 100}%)
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Brutto:</span>
                          <span className="font-medium">{formatCurrency(partTimeGross)} €</span>
                        </div>
                        {partTimeResult && (
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Netto:</span>
                            <span className="font-medium text-green-600 dark:text-green-400">
                              {formatCurrency(partTimeResult.netto)} €
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Difference */}
                    {fullTimeResult && partTimeResult && (
                      <div className="border-t pt-4">
                        <h3 className="font-semibold mb-3">Monatlicher Unterschied</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Brutto-Differenz:</span>
                            <span className="font-medium">
                              - {formatCurrency(fullTimeGross - partTimeGross)} €
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Netto-Differenz:</span>
                            <span className="font-medium">
                              - {formatCurrency(fullTimeResult.netto - partTimeResult.netto)} €
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Netto-Anteil Teilzeit:</span>
                            <span className="font-medium text-green-600 dark:text-green-400">
                              {((partTimeResult.netto / fullTimeResult.netto) * 100).toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {partTimeResult && (
                  <CalculatorResult result={partTimeResult} isMonthly={true} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks currentHref="/rechner/teilzeit" count={6} title="Weitere Gehaltsrechner" />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold mb-8">Teilzeitarbeit - Rechte und Möglichkeiten</h2>

            <ContentSection
              heading="Teilzeitmodelle in Deutschland"
              icon={<BookOpen className="w-5 h-5" />}
              body="In Deutschland gibt es verschiedene Teilzeitmodelle: Klassische Teilzeit mit festen reduzierten Wochenstunden (z.B. 20 oder 30 Stunden), Jobsharing (zwei Personen teilen sich eine Vollzeitstelle), Altersteilzeit für ältere Arbeitnehmer, und flexible Teilzeit mit variablen Stunden. Der gesetzliche Anspruch auf Teilzeit besteht in Betrieben mit mehr als 15 Mitarbeitern nach 6 Monaten Betriebszugehörigkeit. Seit 2019 gibt es die Brückenteilzeit mit Rückkehrrecht."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Tipp:</strong> Nutzen Sie Teilzeit strategisch für Familie, Weiterbildung oder schrittweisen Übergang in den Ruhestand. Die Reduzierung sollte schriftlich vereinbart werden.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Steuerliche Vorteile von Teilzeit"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Durch das progressive Steuersystem zahlen Sie bei Teilzeit oft prozentual weniger Steuern. Bei 75% Teilzeit erhalten Sie häufig mehr als 75% des Vollzeit-Nettogehalts, da Sie in eine niedrigere Steuerprogressionszone rutschen. Zusätzlich profitieren Sie von geringeren Fahrtkosten, eventuell günstigerer Krankenversicherung (bei Wechsel zur Familienversicherung des Partners) und mehr Zeit für steuerlich absetzbare Weiterbildungen."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Beispiel:</strong> Bei Reduzierung von 4.000 EUR auf 3.000 EUR brutto (75%) steigt Ihr Netto-Anteil von ca. 64% auf 68% - Sie behalten also mehr von jedem verdienten Euro.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Auswirkungen auf Rente und Sozialleistungen"
              icon={<Info className="w-5 h-5" />}
              body="Teilzeit wirkt sich auf Ihre Rentenbeiträge aus: Sie zahlen weniger ein und erhalten später eine geringere Rente. Bei 30 Jahren Vollzeit mit 4.000 EUR brutto sammeln Sie etwa 30 Rentenpunkte, bei 30 Jahren 75%-Teilzeit nur 22,5 Punkte. Auch Arbeitslosengeld und Elterngeld berechnen sich nach Ihrem reduzierten Gehalt. Überlegen Sie, ob Sie freiwillig zusätzliche Rentenbeiträge zahlen oder privat vorsorgen möchten."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Wichtig:</strong> Bei Kindererziehung werden Ihnen unabhängig von Teilzeit 3 Jahre Erziehungszeit auf die Rente angerechnet. Informieren Sie sich bei der Deutschen Rentenversicherung.
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zur Teilzeit" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihr Teilzeitgehalt
            </h2>
            <p className="text-lg text-muted-foreground">
              Vergleichen Sie verschiedene Teilzeitmodelle und finden Sie die beste Balance zwischen Gehalt und Freizeit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
