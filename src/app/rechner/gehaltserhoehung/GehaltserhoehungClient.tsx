"use client";

import { useState, useEffect, useMemo } from "react";
import { TrendingUp, Info, BookOpen, ArrowUpRight, ExternalLink } from "lucide-react";
import { calculateGermanTax, type CalculatorResult, type Steuerklasse, type Bundesland } from "@/lib/tax";
import { BUNDESLAENDER } from "@/lib/tax/bundeslaender";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Format currency in German locale
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const formatPercent = (value: number): string => {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
};

export default function GehaltserhoehungClient() {
  const [currentBrutto, setCurrentBrutto] = useState(3500);
  const [currentBruttoDisplay, setCurrentBruttoDisplay] = useState("3500");
  const [raiseType, setRaiseType] = useState<"percent" | "fixed">("percent");
  const [raiseValue, setRaiseValue] = useState(5);
  const [raiseValueDisplay, setRaiseValueDisplay] = useState("5");
  const [steuerklasse, setSteuerklasse] = useState<Steuerklasse>(1);
  const [bundesland, setBundesland] = useState<Bundesland>("nordrhein-westfalen");
  const [kirchensteuer, setKirchensteuer] = useState(false);

  const [oldResult, setOldResult] = useState<CalculatorResult | null>(null);
  const [newResult, setNewResult] = useState<CalculatorResult | null>(null);

  // Calculate new brutto based on raise type
  const newBrutto = useMemo(() => {
    if (raiseType === "percent") {
      return currentBrutto * (1 + raiseValue / 100);
    }
    return currentBrutto + raiseValue;
  }, [currentBrutto, raiseType, raiseValue]);

  // Shared tax input
  const baseTaxInput = useMemo(
    () => ({
      abrechnungszeitraum: "monat" as const,
      steuerklasse,
      bundesland,
      kirchensteuer,
      alter: 30,
      kinder: 0,
      krankenversicherung: "gesetzlich" as const,
      kvZusatzbeitrag: 2.9,
      steuerfreibetrag: 0,
      geldwerterVorteil: 0,
      abrechnungsjahr: 2026,
    }),
    [steuerklasse, bundesland, kirchensteuer]
  );

  useEffect(() => {
    if (currentBrutto <= 0) return;

    const oldCalc = calculateGermanTax({
      ...baseTaxInput,
      bruttoeinkommen: currentBrutto,
    });
    setOldResult(oldCalc);

    const newCalc = calculateGermanTax({
      ...baseTaxInput,
      bruttoeinkommen: newBrutto,
    });
    setNewResult(newCalc);
  }, [currentBrutto, newBrutto, baseTaxInput]);

  // Derived values
  const bruttoRaise = newBrutto - currentBrutto;
  const nettoRaise = oldResult && newResult ? newResult.netto - oldResult.netto : 0;
  const nettoAnteil = bruttoRaise > 0 ? (nettoRaise / bruttoRaise) * 100 : 0;
  const annualExtraNetto = nettoRaise * 12;

  // Bar width calculation for visual comparison
  const maxNetto = newResult ? Math.max(newResult.netto, oldResult?.netto ?? 0) : 1;

  // FAQ data
  const faqs = [
    {
      question: "Wie viel bleibt von einer Gehaltserhöhung netto übrig?",
      answer:
        "Von einer Brutto-Gehaltserhöhung bleiben je nach Steuerklasse und Gehaltshöhe typischerweise 45-65 % als Netto-Zuwachs übrig. Der Rest geht an Lohnsteuer, Solidaritätszuschlag, ggf. Kirchensteuer sowie Sozialversicherungsbeiträge (Renten-, Kranken-, Pflege- und Arbeitslosenversicherung). Je höher Ihr Einkommen, desto stärker wirkt die Steuerprogression und desto geringer fällt der Netto-Anteil der Erhöhung aus.",
    },
    {
      question: "Warum ist der Netto-Anteil meiner Gehaltserhöhung so gering?",
      answer:
        "Das liegt an der kalten Progression: Mit steigendem Einkommen rutschen Sie in höhere Steuerzonen. Jeder zusätzliche Euro wird mit einem höheren Grenzsteuersatz besteuert als Ihr bisheriges Gehalt. Zusätzlich steigen auch die Sozialversicherungsbeiträge proportional, solange Sie unter der Beitragsbemessungsgrenze liegen (2026: 5.512,50 EUR/Monat für KV, 8.450 EUR/Monat für RV). Daher kommt weniger als die Hälfte einer Gehaltserhöhung netto bei Ihnen an.",
    },
    {
      question: "Wann lohnt sich eine Gehaltserhöhung besonders?",
      answer:
        "Besonders vorteilhaft ist eine Gehaltserhöhung, wenn Sie mit Ihrem Einkommen den Grundfreibetrag (2026: 12.348 EUR/Jahr) gerade überschreiten oder wenn Sie unter den Beitragsbemessungsgrenzen der Sozialversicherung liegen. Auch in Steuerklasse 3 (Ehepartner) ist der Netto-Effekt oft höher. Alternativ können steuerfreie Zusatzleistungen wie Sachbezüge, Jobticket (bis 50 EUR/Monat) oder Fahrtkostenzuschüsse steuerlich günstiger sein als eine reine Gehaltserhöhung.",
    },
    {
      question: "Was ist besser: Gehaltserhöhung in Prozent oder als fester Betrag?",
      answer:
        "Steuerlich macht es keinen Unterschied, ob die Erhöhung als Prozent oder Festbetrag vereinbart wird - entscheidend ist der absolute Brutto-Mehrbetrag. Prozentuale Erhöhungen haben den Vorteil, dass sie bei zukünftigen weiteren prozentualen Erhöhungen eine höhere Basis bieten (Zinseszins-Effekt). Üblich sind in Deutschland jährliche Gehaltserhöhungen von 3-5 %, je nach Branche und Leistung.",
    },
    {
      question: "Wie wirkt sich die Steuerklasse auf den Netto-Effekt einer Gehaltserhöhung aus?",
      answer:
        "Die Steuerklasse beeinflusst den Netto-Effekt erheblich. In Steuerklasse 1 (ledig) und 4 (verheiratet, gleiche Einkommen) liegt der Grenzsteuersatz bei mittleren Einkommen oft bei 35-42 %. In Steuerklasse 3 (verheiratet, Alleinverdiener) ist der Steuersatz niedriger, sodass mehr Netto übrig bleibt. In Steuerklasse 5 hingegen ist der Grenzsteuersatz besonders hoch. Nutzen Sie unseren Rechner, um den exakten Netto-Effekt für Ihre persönliche Steuerklasse zu ermitteln.",
    },
  ];

  // WebApplication JSON-LD schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Gehaltserhöhungsrechner 2026",
    url: "https://gehaltly.de/rechner/gehaltserhoehung",
    description:
      "Kostenloser Gehaltserhöhungsrechner 2026 - Berechnen Sie den Netto-Effekt Ihrer Gehaltserhöhung mit allen Steuerklassen und Sozialabgaben.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Netto-Effekt einer Gehaltserhöhung berechnen",
      "Prozentuale oder feste Erhöhung",
      "Alle 6 Steuerklassen",
      "Alle 16 Bundesländer",
      "Kirchensteuer optional",
      "Vorher-Nachher-Vergleich",
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup schema={webAppSchema} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: "Rechner", href: "/rechner" },
            { label: "Gehaltserhöhung", href: "/rechner/gehaltserhoehung" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Gehaltserhöhungsrechner 2026"
        subtitle="Berechnen Sie, wie viel Netto von Ihrer Gehaltserhöhung übrig bleibt"
      />

      {/* Author & Intro */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              Von gehaltly.de Redaktion | Aktualisiert: 1. März 2026
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Eine Gehaltserhöhung bedeutet nicht automatisch proportional mehr Netto. Durch die
              Steuerprogression und steigende Sozialabgaben kommt oft weniger an als erwartet.
              Mit unserem Gehaltserhöhungsrechner sehen Sie sofort, wie viel von der
              Brutto-Erhöhung tatsächlich auf Ihrem Konto landet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Geben Sie Ihr aktuelles Bruttogehalt und die geplante Erhöhung ein - der Rechner
              berechnet den exakten Netto-Unterschied nach{" "}
              <a
                href="https://www.bundesfinanzministerium.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                aktuellen Steuertabellen
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Inputs */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Ihre Angaben</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {/* Current Brutto */}
                    <div className="space-y-2">
                      <Label htmlFor="currentBrutto">Aktuelles Bruttogehalt (monatlich)</Label>
                      <div className="relative">
                        <Input
                          id="currentBrutto"
                          type="number"
                          min={0}
                          step={50}
                          value={currentBruttoDisplay}
                          onChange={(e) => {
                            setCurrentBruttoDisplay(e.target.value);
                            const num = parseFloat(e.target.value);
                            if (!isNaN(num) && num >= 0) {
                              setCurrentBrutto(num);
                            }
                          }}
                          onBlur={() => {
                            const num = parseFloat(currentBruttoDisplay);
                            if (isNaN(num) || num < 0) {
                              setCurrentBrutto(3500);
                              setCurrentBruttoDisplay("3500");
                            }
                          }}
                          className="pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                          €
                        </span>
                      </div>
                    </div>

                    {/* Raise Type */}
                    <div className="space-y-2">
                      <Label>Art der Erhöhung</Label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="raiseType"
                            value="percent"
                            checked={raiseType === "percent"}
                            onChange={() => {
                              setRaiseType("percent");
                              setRaiseValue(5);
                              setRaiseValueDisplay("5");
                            }}
                            className="accent-[#DD0000]"
                          />
                          <span className="text-sm">Prozent (%)</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="raiseType"
                            value="fixed"
                            checked={raiseType === "fixed"}
                            onChange={() => {
                              setRaiseType("fixed");
                              setRaiseValue(200);
                              setRaiseValueDisplay("200");
                            }}
                            className="accent-[#DD0000]"
                          />
                          <span className="text-sm">Fester Betrag (€)</span>
                        </label>
                      </div>
                    </div>

                    {/* Raise Value */}
                    <div className="space-y-2">
                      <Label htmlFor="raiseValue">
                        {raiseType === "percent" ? "Erhöhung in %" : "Erhöhung in €"}
                      </Label>
                      <div className="relative">
                        <Input
                          id="raiseValue"
                          type="number"
                          min={0}
                          step={raiseType === "percent" ? 0.5 : 50}
                          value={raiseValueDisplay}
                          onChange={(e) => {
                            setRaiseValueDisplay(e.target.value);
                            const num = parseFloat(e.target.value);
                            if (!isNaN(num) && num >= 0) {
                              setRaiseValue(num);
                            }
                          }}
                          onBlur={() => {
                            const num = parseFloat(raiseValueDisplay);
                            if (isNaN(num) || num < 0) {
                              const defaultVal = raiseType === "percent" ? 5 : 200;
                              setRaiseValue(defaultVal);
                              setRaiseValueDisplay(defaultVal.toString());
                            }
                          }}
                          className="pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                          {raiseType === "percent" ? "%" : "€"}
                        </span>
                      </div>
                    </div>

                    {/* Steuerklasse */}
                    <div className="space-y-2">
                      <Label htmlFor="steuerklasse">Steuerklasse</Label>
                      <Select
                        value={steuerklasse.toString()}
                        onValueChange={(val) => setSteuerklasse(parseInt(val) as Steuerklasse)}
                      >
                        <SelectTrigger id="steuerklasse" aria-label="Steuerklasse auswählen">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Steuerklasse 1 - Ledig</SelectItem>
                          <SelectItem value="2">Steuerklasse 2 - Alleinerziehend</SelectItem>
                          <SelectItem value="3">Steuerklasse 3 - Verheiratet (Alleinverdiener)</SelectItem>
                          <SelectItem value="4">Steuerklasse 4 - Verheiratet (gleich)</SelectItem>
                          <SelectItem value="5">Steuerklasse 5 - Verheiratet (Partner Kl. 3)</SelectItem>
                          <SelectItem value="6">Steuerklasse 6 - Zweitjob</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Bundesland */}
                    <div className="space-y-2">
                      <Label htmlFor="bundesland">Bundesland</Label>
                      <Select
                        value={bundesland}
                        onValueChange={(val) => setBundesland(val as Bundesland)}
                      >
                        <SelectTrigger id="bundesland" aria-label="Bundesland auswählen">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(BUNDESLAENDER).map(([key, config]) => (
                            <SelectItem key={key} value={key}>
                              {config.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Kirchensteuer */}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="kirchensteuer"
                        checked={kirchensteuer}
                        onChange={(e) => setKirchensteuer(e.target.checked)}
                        className="w-4 h-4 accent-[#DD0000] rounded"
                      />
                      <Label htmlFor="kirchensteuer" className="cursor-pointer">
                        Kirchensteuer (8-9 % je nach Bundesland)
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-6">
                {oldResult && newResult && (
                  <>
                    {/* Main result: Mehr Netto */}
                    <Card className="border-green-200 dark:border-green-800">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-1">
                            Mehr Netto pro Monat
                          </p>
                          <p className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400">
                            +{formatCurrency(nettoRaise)} €
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {formatPercent(nettoAnteil)} % der Brutto-Erhöhung erreichen Ihr Konto
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Side-by-side comparison */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg sm:text-xl">Vorher-Nachher-Vergleich</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-5">
                        {/* Brutto comparison */}
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            Brutto (monatlich)
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-muted/50 rounded-lg p-3">
                              <p className="text-xs text-muted-foreground">Vorher</p>
                              <p className="text-lg font-semibold">
                                {formatCurrency(currentBrutto)} €
                              </p>
                            </div>
                            <div className="bg-primary/5 rounded-lg p-3">
                              <p className="text-xs text-muted-foreground">Nachher</p>
                              <p className="text-lg font-semibold text-primary">
                                {formatCurrency(newBrutto)} €
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Netto comparison with visual bars */}
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            Netto (monatlich)
                          </p>
                          <div className="space-y-3">
                            {/* Old netto bar */}
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted-foreground">Vorher</span>
                                <span className="font-medium">
                                  {formatCurrency(oldResult.netto)} €
                                </span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-6 overflow-hidden">
                                <div
                                  className="bg-gray-400 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                                  style={{
                                    width: `${(oldResult.netto / maxNetto) * 100}%`,
                                    minWidth: "60px",
                                  }}
                                >
                                  <span className="text-xs text-white font-medium">
                                    {formatCurrency(oldResult.netto)} €
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/* New netto bar */}
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted-foreground">Nachher</span>
                                <span className="font-medium text-green-600 dark:text-green-400">
                                  {formatCurrency(newResult.netto)} €
                                </span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-6 overflow-hidden">
                                <div
                                  className="bg-green-500 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                                  style={{
                                    width: `${(newResult.netto / maxNetto) * 100}%`,
                                    minWidth: "60px",
                                  }}
                                >
                                  <span className="text-xs text-white font-medium">
                                    {formatCurrency(newResult.netto)} €
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Detailed breakdown */}
                        <div className="border-t pt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Brutto-Erhöhung</span>
                            <span className="font-medium">+{formatCurrency(bruttoRaise)} €</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Netto-Erhöhung</span>
                            <span className="font-medium text-green-600 dark:text-green-400">
                              +{formatCurrency(nettoRaise)} €
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Netto-Anteil der Erhöhung
                            </span>
                            <span className="font-medium">{formatPercent(nettoAnteil)} %</span>
                          </div>
                          <div className="flex justify-between text-sm border-t pt-2">
                            <span className="text-muted-foreground">
                              Zusätzliches Netto pro Jahr
                            </span>
                            <span className="font-bold text-green-600 dark:text-green-400">
                              +{formatCurrency(annualExtraNetto)} €
                            </span>
                          </div>
                        </div>

                        {/* Tax/SV breakdown of the raise */}
                        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                          <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
                            <Info className="w-4 h-4 inline mr-1" />
                            Abzüge auf die Erhöhung
                          </p>
                          <div className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                            <div className="flex justify-between">
                              <span>Mehr Lohnsteuer</span>
                              <span>
                                +{formatCurrency(newResult.steuern.lohnsteuer - oldResult.steuern.lohnsteuer)} €
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Mehr Soli</span>
                              <span>
                                +{formatCurrency(
                                  newResult.steuern.solidaritaetszuschlag -
                                    oldResult.steuern.solidaritaetszuschlag
                                )} €
                              </span>
                            </div>
                            {kirchensteuer && (
                              <div className="flex justify-between">
                                <span>Mehr Kirchensteuer</span>
                                <span>
                                  +{formatCurrency(
                                    newResult.steuern.kirchensteuer - oldResult.steuern.kirchensteuer
                                  )} €
                                </span>
                              </div>
                            )}
                            <div className="flex justify-between">
                              <span>Mehr Sozialabgaben</span>
                              <span>
                                +{formatCurrency(newResult.gesamtSozialabgaben - oldResult.gesamtSozialabgaben)} €
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks
        currentHref="/rechner/gehaltserhoehung"
        count={6}
        title="Weitere Gehaltsrechner"
      />

      {/* Content Sections */}
      <ContentSection
        heading="Wie wird eine Gehaltserhöhung besteuert?"
        icon={<BookOpen className="w-5 h-5" />}
        body="In Deutschland gilt die Steuerprogression: Je höher Ihr Einkommen, desto höher der Grenzsteuersatz auf jeden zusätzlichen Euro. Der Eingangssteuersatz liegt bei 14 %, der Spitzensteuersatz bei 42 % (ab ca. 69.878 EUR Jahreseinkommen) und die Reichensteuer bei 45 % (ab 277.825 EUR). Eine Gehaltserhöhung wird also mit Ihrem persönlichen Grenzsteuersatz besteuert - nicht mit dem Durchschnittssteuersatz."
      >
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <p className="text-sm text-amber-900 dark:text-amber-100">
            <strong>Beispiel:</strong> Bei einem Bruttogehalt von 3.500 EUR/Monat (Steuerklasse 1)
            und einer Erhöhung um 200 EUR brutto bleiben nach Steuern und Sozialabgaben ca. 100-110 EUR
            netto übrig - also rund 50-55 % der Erhöhung.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Kalte Progression - Der unsichtbare Steuerfresser"
        icon={<TrendingUp className="w-5 h-5" />}
        body="Die kalte Progression entsteht, wenn Gehaltserhöhungen lediglich die Inflation ausgleichen, aber durch die Steuerprogression überproportional besteuert werden. Sie verdienen nominal mehr, aber real bleibt weniger übrig. Der Gesetzgeber passt den Grundfreibetrag (2026: 12.348 EUR) und die Tarifeckwerte regelmäßig an, um die kalte Progression teilweise auszugleichen."
      >
        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p className="text-sm text-green-900 dark:text-green-100">
            <strong>Tipp:</strong> Prüfen Sie bei Gehaltsverhandlungen auch steuerfreie
            Alternativen wie Sachbezüge (bis 50 EUR/Monat), Jobticket, betriebliche
            Altersvorsorge oder Fahrtkostenzuschüsse. Diese erhöhen Ihr Netto, ohne in die
            Steuerprogression zu fallen.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Sozialversicherung bei Gehaltserhöhung"
        icon={<ArrowUpRight className="w-5 h-5" />}
        body="Neben der Steuer steigen auch die Sozialversicherungsbeiträge bei einer Gehaltserhöhung. Arbeitnehmer zahlen 2026 insgesamt ca. 20,45 % ihres Bruttogehalts für Renten- (9,3 %), Kranken- (7,3 % + Zusatzbeitrag), Pflege- (1,8 %) und Arbeitslosenversicherung (1,3 %). Allerdings nur bis zu den Beitragsbemessungsgrenzen: 5.512,50 EUR/Monat für KV/PV und 8.450 EUR/Monat für RV/AV. Liegt Ihr Gehalt bereits über diesen Grenzen, fallen auf die Erhöhung keine weiteren Sozialabgaben an."
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zur Gehaltserhöhung" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihren Netto-Vorteil
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie den Gehaltserhöhungsrechner vor Ihrer nächsten Gehaltsverhandlung und
              wissen Sie genau, was bei Ihnen ankommt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
