"use client";

import { useState, useEffect } from "react";
import { Clock, TrendingUp, Info, BookOpen } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function StundenlohnPage() {
  const [calculationMode, setCalculationMode] = useState<"hourly-to-monthly" | "monthly-to-hourly">("hourly-to-monthly");
  const [hourlyRate, setHourlyRate] = useState(20);
  const [weeklyHours, setWeeklyHours] = useState(40);
  const [monthlyGross, setMonthlyGross] = useState(3000);
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

  // Calculate monthly gross from hourly rate
  // Formula: hourly_rate × hours_per_week × 4.33 (average weeks per month)
  const calculateMonthlyFromHourly = () => {
    const calculated = hourlyRate * weeklyHours * 4.33;
    const taxResult = calculateGermanTax({
      bruttoeinkommen: calculated,
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
      abrechnungsjahr: 2026,
    });
    setResult(taxResult);
    return calculated;
  };

  // Calculate hourly rate from monthly gross
  const calculateHourlyFromMonthly = () => {
    const hoursPerMonth = (weeklyHours * 4.33);
    const calculated = monthlyGross / hoursPerMonth;
    const taxResult = calculateGermanTax({
      bruttoeinkommen: monthlyGross,
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
      abrechnungsjahr: 2026,
    });
    setResult(taxResult);
    return calculated;
  };

  // Calculate on mount and input changes
  useEffect(() => {
    if (calculationMode === "hourly-to-monthly") {
      calculateMonthlyFromHourly();
    } else {
      calculateHourlyFromMonthly();
    }
  }, [calculationMode, hourlyRate, weeklyHours, monthlyGross]);

  const calculatedMonthly = calculationMode === "hourly-to-monthly"
    ? hourlyRate * weeklyHours * 4.33
    : monthlyGross;

  const calculatedHourly = calculationMode === "monthly-to-hourly"
    ? monthlyGross / (weeklyHours * 4.33)
    : hourlyRate;

  const hoursPerMonth = weeklyHours * 4.33;

  // FAQ data specific to Stundenlohn
  const faqs = [
    {
      question: "Wie berechne ich meinen Stundenlohn aus dem Monatsgehalt?",
      answer: "Um Ihren Stundenlohn aus dem Monatsgehalt zu berechnen, teilen Sie Ihr Bruttomonatsgehalt durch die durchschnittliche Anzahl der Arbeitsstunden pro Monat. Diese errechnet sich aus Ihren Wochenstunden multipliziert mit 4,33 (durchschnittliche Wochen pro Monat). Bei 40 Wochenstunden sind das 173,2 Stunden pro Monat. Ein Bruttogehalt von 3.000 EUR entspricht somit einem Stundenlohn von etwa 17,32 EUR. Unser Stundenlohnrechner berücksichtigt automatisch Ihre individuellen Wochenarbeitsstunden."
    },
    {
      question: "Wie viel verdiene ich im Monat bei 15 Euro Stundenlohn?",
      answer: "Bei einem Stundenlohn von 15 EUR und einer Vollzeitstelle (40 Wochenstunden) verdienen Sie monatlich brutto etwa 2.598 EUR (15 EUR × 40 Stunden × 4,33 Wochen). Nach Abzug von Steuern und Sozialversicherungsbeiträgen bleibt in Steuerklasse 1 netto ca. 1.780 EUR übrig. Bei 20 Wochenstunden (Teilzeit 50%) wären es entsprechend 1.299 EUR brutto und ca. 1.050 EUR netto. Die genauen Nettobeträge hängen von Ihrer Steuerklasse, Ihrem Bundesland und weiteren Faktoren ab."
    },
    {
      question: "Was ist der Unterschied zwischen Brutto- und Netto-Stundenlohn?",
      answer: "Der Brutto-Stundenlohn ist Ihr vereinbarter Stundenlohn vor Abzügen. Der Netto-Stundenlohn ist das, was tatsächlich auf Ihrem Konto ankommt, nach Abzug von Lohnsteuer, Solidaritätszuschlag, ggf. Kirchensteuer und Sozialversicherungsbeiträgen. Bei einem Brutto-Stundenlohn von 20 EUR bleiben je nach Steuerklasse etwa 12-14 EUR netto übrig. Der Netto-Stundenlohn ist wichtig, wenn Sie Ihre tatsächliche Arbeitszeit bewerten möchten, z.B. bei Überstunden oder beim Vergleich verschiedener Jobangebote."
    },
    {
      question: "Sind 40 Stunden die Woche bei Teilzeit erlaubt?",
      answer: "Nein, 40 Stunden pro Woche gelten als Vollzeit. Teilzeit liegt in Deutschland grundsätzlich unter der betriebsüblichen Vollzeitarbeitszeit, meist unter 35-40 Wochenstunden. Typische Teilzeitmodelle sind: 20 Stunden (50% Teilzeit), 25 Stunden, 30 Stunden (75% Teilzeit) oder 35 Stunden. Das Teilzeit- und Befristungsgesetz definiert Teilzeit als eine kürzere Arbeitszeit als vergleichbare Vollzeitbeschäftigte. Auch Teilzeitbeschäftigte haben Anspruch auf anteiligen Urlaub, Sonderzahlungen und alle gesetzlichen Leistungen."
    },
    {
      question: "Wie berechnet man den Stundenlohn bei unregelmäßigen Arbeitszeiten?",
      answer: "Bei schwankenden Arbeitszeiten (z.B. Schichtarbeit, flexible Arbeitszeiten) sollten Sie mit Durchschnittswerten rechnen. Addieren Sie die tatsächlich geleisteten Stunden der letzten 3-6 Monate und teilen Sie durch die Anzahl der Monate - so erhalten Sie Ihre durchschnittlichen Monatsstunden. Teilen Sie dann Ihr durchschnittliches Bruttogehalt durch diese Stundenzahl. Bei Überstunden, Nachtschichten oder Feiertagsarbeit können Zuschläge anfallen, die den effektiven Stundenlohn erhöhen. Diese sind oft steuerbegünstigt und sollten separat betrachtet werden."
    }
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Stundenlohnrechner 2026",
    "url": "https://gehaltly.de/rechner/stundenlohn",
    "description": "Kostenloser Stundenlohnrechner 2026 - Berechnen Sie Stundenlohn aus Monatsgehalt oder umgekehrt mit Netto-Berechnung.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Stundenlohn berechnen",
      "Monatsgehalt aus Stundenlohn",
      "Individuelle Wochenstunden",
      "Netto-Stundenlohn Berechnung",
      "Teilzeit-Berechnungen"
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
          { label: "Stundenlohn", href: "/rechner/stundenlohn" }
        ]} />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Stundenlohnrechner 2026"
        subtitle="Berechnen Sie Ihren Stundenlohn und Monatsgehalt"
        description="Ermitteln Sie Ihren Stundenlohn aus dem Monatsgehalt oder berechnen Sie Ihr Monatsgehalt aus dem Stundenlohn - mit präziser Netto-Berechnung."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Der Stundenlohnrechner hilft Ihnen, Ihr Gehalt auf Stundenbasis zu verstehen. Egal ob Sie Teilzeit arbeiten, Überstunden machen oder verschiedene Jobangebote vergleichen möchten - hier erfahren Sie, was eine Arbeitsstunde wirklich wert ist.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Besonders nützlich für Teilzeitkräfte, Minijobber, Freelancer oder bei Gehaltsverhandlungen. Der Rechner berücksichtigt Ihre individuellen Wochenstunden und berechnet sowohl Brutto- als auch Netto-Stundenlohn.
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
                    <CardTitle>Berechnungsmodus</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="mode">Berechnung</Label>
                      <Select
                        value={calculationMode}
                        onValueChange={(value: "hourly-to-monthly" | "monthly-to-hourly") => setCalculationMode(value)}
                      >
                        <SelectTrigger id="mode">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly-to-monthly">Stundenlohn → Monatsgehalt</SelectItem>
                          <SelectItem value="monthly-to-hourly">Monatsgehalt → Stundenlohn</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {calculationMode === "hourly-to-monthly" ? (
                      <>
                        <SliderInput
                          label="Brutto-Stundenlohn"
                          value={hourlyRate}
                          onChange={setHourlyRate}
                          min={10}
                          max={100}
                          step={0.5}
                          formatValue={(v) => formatCurrency(v) + " €"}
                          parseValue={parseCurrency}
                        />
                      </>
                    ) : (
                      <>
                        <SliderInput
                          label="Brutto-Monatsgehalt"
                          value={monthlyGross}
                          onChange={setMonthlyGross}
                          min={520}
                          max={10000}
                          step={50}
                          formatValue={(v) => formatCurrency(v) + " €"}
                          parseValue={parseCurrency}
                        />
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="weeklyHours">Wochenstunden</Label>
                      <Input
                        id="weeklyHours"
                        type="number"
                        min={1}
                        max={60}
                        value={weeklyHours}
                        onChange={(e) => setWeeklyHours(parseFloat(e.target.value) || 40)}
                      />
                      <p className="text-sm text-muted-foreground">
                        Vollzeit = 40 Stunden, Teilzeit z.B. 20 Stunden
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ihre Stundenlohn-Berechnung</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Brutto-Stundenlohn</p>
                        <p className="text-2xl font-bold text-primary">
                          {formatCurrency(calculatedHourly)} €
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Brutto-Monatsgehalt</p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {formatCurrency(calculatedMonthly)} €
                        </p>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Wochenstunden:</span>
                        <span className="font-medium">{weeklyHours} h</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Stunden/Monat:</span>
                        <span className="font-medium">{formatCurrency(hoursPerMonth)} h</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Faktor:</span>
                        <span className="font-medium">4,33 Wochen/Monat</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-sm text-blue-900 dark:text-blue-100">
                        <Clock className="w-4 h-4 inline mr-1" />
                        <strong>Berechnungsgrundlage:</strong> 1 Monat = 4,33 Wochen im Durchschnitt (52 Wochen ÷ 12 Monate)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {result && (
                  <CalculatorResult result={result} isMonthly={true} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks currentHref="/rechner/stundenlohn" count={6} title="Weitere Gehaltsrechner" />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold mb-8">Stundenlohn verstehen und berechnen</h2>

            <ContentSection
              heading="Stundenlohn berechnen - So geht's"
              icon={<BookOpen className="w-5 h-5" />}
              body="Die Berechnung des Stundenlohns erfolgt nach einer einfachen Formel: Teilen Sie Ihr monatliches Bruttogehalt durch die durchschnittliche Anzahl Ihrer monatlichen Arbeitsstunden. Diese errechnet sich aus Ihren wöchentlichen Arbeitsstunden multipliziert mit dem Faktor 4,33 (durchschnittliche Wochen pro Monat). Bei 40 Wochenstunden arbeiten Sie somit 173,2 Stunden pro Monat."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Rechenbeispiel:</strong> 3.000 EUR Bruttogehalt ÷ 173,2 Stunden = 17,32 EUR Brutto-Stundenlohn. Nach Abzug von Steuern und Sozialabgaben bleiben etwa 11,85 EUR Netto-Stundenlohn übrig (Steuerklasse 1).
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Vollzeit vs. Teilzeit - Stundenberechnung"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Bei Vollzeit (40 Wochenstunden) arbeiten Sie durchschnittlich 173,2 Stunden pro Monat. Bei Teilzeit mit 20 Wochenstunden sind es 86,6 Stunden monatlich. Der Stundenlohn bleibt dabei gleich - nur die Gesamtstundenzahl ändert sich. Teilzeitbeschäftigte haben dieselben Rechte wie Vollzeitbeschäftigte, einschließlich anteiligem Urlaub und Sonderzahlungen."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Wichtig für Teilzeit:</strong> Bei reduzierten Wochenstunden sinkt das Monatsgehalt proportional, aber Ihr Stundenlohn bleibt konstant. Ein Stundenlohn von 20 EUR gilt sowohl bei 40 als auch bei 20 Wochenstunden.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Netto-Stundenlohn - Der wahre Wert"
              icon={<Info className="w-5 h-5" />}
              body="Der Netto-Stundenlohn zeigt, was tatsächlich von Ihrer Arbeitszeit übrig bleibt. Von Ihrem Brutto-Stundenlohn werden Lohnsteuer, Solidaritätszuschlag, gegebenenfalls Kirchensteuer sowie die Sozialversicherungsbeiträge (Renten-, Kranken-, Pflege- und Arbeitslosenversicherung) abgezogen. Je nach Steuerklasse und Gehaltshöhe bleiben etwa 60-70% des Brutto-Stundenlohns als Netto-Stundenlohn übrig."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Praktischer Nutzen:</strong> Der Netto-Stundenlohn ist besonders wichtig beim Vergleich von Jobangeboten, der Bewertung von Überstunden oder wenn Sie als Freelancer Ihre Preise kalkulieren möchten.
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zum Stundenlohn" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihren Stundenlohn
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren Stundenlohnrechner für präzise Berechnungen von Brutto- und Netto-Stundenlohn.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
