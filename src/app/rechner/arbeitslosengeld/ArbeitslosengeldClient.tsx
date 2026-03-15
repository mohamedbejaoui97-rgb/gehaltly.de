"use client";

import { useState, useEffect, useMemo } from "react";
import { Info, TrendingDown, BookOpen, ShieldCheck, ExternalLink } from "lucide-react";
import { calculateGermanTax, type CalculatorResult, type Steuerklasse } from "@/lib/tax";
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

// BBG Arbeitslosenversicherung 2026: 8.450 €/Monat
const BBG_AV_MONAT = 8450;

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

// ALG I duration table data
const durationTable = [
  { months: 12, under50: 6, age50: 6, age55: 6, age58: 6 },
  { months: 16, under50: 8, age50: 8, age55: 8, age58: 8 },
  { months: 20, under50: 10, age50: 10, age55: 10, age58: 10 },
  { months: 24, under50: 12, age50: 12, age55: 12, age58: 12 },
  { months: 30, under50: null, age50: 15, age55: 15, age58: 15 },
  { months: 36, under50: null, age50: 18, age55: 18, age58: 18 },
  { months: 48, under50: null, age50: null, age55: 24, age58: 24 },
];

export default function ArbeitslosengeldClient() {
  const [brutto, setBrutto] = useState(3500);
  const [bruttoDisplay, setBruttoDisplay] = useState("3500");
  const [steuerklasse, setSteuerklasse] = useState<Steuerklasse>(1);
  const [kinder, setKinder] = useState(0);
  const [kinderDisplay, setKinderDisplay] = useState("0");
  const [kirchensteuer, setKirchensteuer] = useState(false);

  const [taxResult, setTaxResult] = useState<CalculatorResult | null>(null);

  // Cap brutto at BBG
  const cappedBrutto = useMemo(() => Math.min(brutto, BBG_AV_MONAT), [brutto]);

  // Tax calculation for pauschaliertes Netto (Leistungsentgelt)
  const taxInput = useMemo(
    () => ({
      bruttoeinkommen: cappedBrutto,
      abrechnungszeitraum: "monat" as const,
      steuerklasse,
      bundesland: "nordrhein-westfalen" as const, // ALG I uses pauschaliertes Verfahren, Bundesland less relevant
      kirchensteuer,
      alter: 30,
      kinder,
      krankenversicherung: "gesetzlich" as const,
      kvZusatzbeitrag: 2.9,
      steuerfreibetrag: 0,
      geldwerterVorteil: 0,
      abrechnungsjahr: 2026,
    }),
    [cappedBrutto, steuerklasse, kirchensteuer, kinder]
  );

  useEffect(() => {
    if (cappedBrutto <= 0) return;
    const result = calculateGermanTax(taxInput);
    setTaxResult(result);
  }, [cappedBrutto, taxInput]);

  // ALG I calculation
  const leistungssatz = kinder >= 1 ? 0.67 : 0.6;
  const dailyLeistungsentgelt = taxResult ? taxResult.netto / 30 : 0;
  const dailyAlg = dailyLeistungsentgelt * leistungssatz;
  const monthlyAlg = dailyAlg * 30;
  const lastNetto = taxResult ? taxResult.netto : 0;
  const differenz = lastNetto - monthlyAlg;
  const percentOfNetto = lastNetto > 0 ? (monthlyAlg / lastNetto) * 100 : 0;

  // FAQ data
  const faqs = [
    {
      question: "Wie wird Arbeitslosengeld I berechnet?",
      answer:
        "ALG I wird auf Basis Ihres letzten Bruttogehalts berechnet. Zunächst wird ein pauschaliertes Nettoeinkommen ermittelt (Leistungsentgelt). Davon erhalten Sie 60 % (ohne Kinder) oder 67 % (mit mindestens einem Kind). Das Bruttogehalt wird dabei auf die Beitragsbemessungsgrenze der Arbeitslosenversicherung (2026: 8.450 EUR/Monat) gedeckelt.",
    },
    {
      question: "Was ist der Unterschied zwischen 60 % und 67 % ALG I?",
      answer:
        "Der allgemeine Leistungssatz beträgt 60 % des pauschalierten Nettoentgelts. Wenn Sie mindestens ein Kind haben (auf der Lohnsteuerkarte eingetragen), erhalten Sie den erhöhten Leistungssatz von 67 %. Entscheidend ist, ob ein Kinderfreibetrag auf Ihrer Lohnsteuerkarte eingetragen ist oder ob Sie Kindergeld beziehen.",
    },
    {
      question: "Wie lange habe ich Anspruch auf ALG I?",
      answer:
        "Die Bezugsdauer hängt von Ihrem Alter und der Dauer Ihrer versicherungspflichtigen Beschäftigung in den letzten 30 Monaten ab. Mindestens 12 Monate Beitragszeit ergeben 6 Monate Anspruch. Ab 50 Jahren verlängert sich die maximale Bezugsdauer schrittweise auf bis zu 24 Monate (ab 58 Jahren bei 48 Beitragsmonaten).",
    },
    {
      question: "Welche Voraussetzungen gelten für ALG I?",
      answer:
        "Sie müssen die Anwartschaftszeit erfüllen: mindestens 12 Monate versicherungspflichtige Beschäftigung in den letzten 30 Monaten vor der Arbeitslosmeldung. Außerdem müssen Sie sich persönlich arbeitslos gemeldet haben und dem Arbeitsmarkt zur Verfügung stehen. Die Meldung sollte spätestens 3 Monate vor Ende des Arbeitsverhältnisses erfolgen.",
    },
    {
      question: "Wird ALG I besteuert?",
      answer:
        "Arbeitslosengeld I ist steuerfrei, unterliegt aber dem Progressionsvorbehalt. Das bedeutet: ALG I wird bei der Steuererklärung zum übrigen Einkommen hinzugerechnet, um den Steuersatz zu ermitteln. Dadurch kann sich der Steuersatz auf andere Einkünfte erhöhen. ALG I selbst wird jedoch nicht besteuert.",
    },
  ];

  // WebApplication JSON-LD schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Arbeitslosengeld Rechner 2026",
    url: "https://gehaltly.de/rechner/arbeitslosengeld",
    description:
      "Kostenloser Arbeitslosengeld Rechner 2026 - Berechnen Sie Ihren ALG I Anspruch mit allen Steuerklassen. 60% oder 67% vom Netto.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "ALG I Höhe berechnen",
      "60% oder 67% Leistungssatz",
      "Alle 6 Steuerklassen",
      "Beitragsbemessungsgrenze berücksichtigt",
      "Bezugsdauer-Tabelle",
      "Vergleich mit letztem Netto",
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
            { label: "Arbeitslosengeld", href: "/rechner/arbeitslosengeld" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Arbeitslosengeld Rechner 2026"
        subtitle="Berechnen Sie, wie viel ALG I Ihnen zusteht"
      />

      {/* Author & Intro */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              Von gehaltly.de Redaktion | Aktualisiert: 15. März 2026
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Wie viel Arbeitslosengeld I steht Ihnen zu? ALG I beträgt 60 % des
              pauschalierten Nettoentgelts (ohne Kinder) oder 67 % (mit Kindern).
              Unser Rechner ermittelt Ihren voraussichtlichen ALG-I-Anspruch auf
              Basis Ihres letzten Bruttogehalts und Ihrer Steuerklasse.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Die Berechnung erfolgt nach den Vorgaben des{" "}
              <a
                href="https://www.gesetze-im-internet.de/sgb_3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                SGB III (Sozialgesetzbuch Drittes Buch)
                <ExternalLink className="w-3.5 h-3.5" />
              </a>{" "}
              mit den aktuellen Werten für 2026.
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
                    {/* Letztes Bruttogehalt */}
                    <div className="space-y-2">
                      <Label htmlFor="brutto">Letztes Bruttogehalt (monatlich)</Label>
                      <div className="relative">
                        <Input
                          id="brutto"
                          type="number"
                          min={0}
                          step={50}
                          value={bruttoDisplay}
                          onChange={(e) => {
                            setBruttoDisplay(e.target.value);
                            const num = parseFloat(e.target.value);
                            if (!isNaN(num) && num >= 0) {
                              setBrutto(num);
                            }
                          }}
                          onBlur={() => {
                            const num = parseFloat(bruttoDisplay);
                            if (isNaN(num) || num < 0) {
                              setBrutto(3500);
                              setBruttoDisplay("3500");
                            }
                          }}
                          className="pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                          €
                        </span>
                      </div>
                      {brutto > BBG_AV_MONAT && (
                        <p className="text-xs text-amber-600">
                          <Info className="w-3 h-3 inline mr-1" />
                          Brutto wird auf die BBG von {formatCurrency(BBG_AV_MONAT)} € gedeckelt.
                        </p>
                      )}
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

                    {/* Kinder */}
                    <div className="space-y-2">
                      <Label htmlFor="kinder">Anzahl Kinder</Label>
                      <div className="relative">
                        <Input
                          id="kinder"
                          type="number"
                          min={0}
                          max={10}
                          step={1}
                          value={kinderDisplay}
                          onChange={(e) => {
                            setKinderDisplay(e.target.value);
                            const num = parseInt(e.target.value);
                            if (!isNaN(num) && num >= 0 && num <= 10) {
                              setKinder(num);
                            }
                          }}
                          onBlur={() => {
                            const num = parseInt(kinderDisplay);
                            if (isNaN(num) || num < 0) {
                              setKinder(0);
                              setKinderDisplay("0");
                            }
                          }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {kinder >= 1
                          ? "Erhöhter Leistungssatz: 67 % vom Netto"
                          : "Allgemeiner Leistungssatz: 60 % vom Netto"}
                      </p>
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
                        Kirchensteuerpflichtig
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-6">
                {taxResult && (
                  <>
                    {/* Main result: ALG I */}
                    <Card className="border-green-200 dark:border-green-800">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-1">
                            Ihr monatliches Arbeitslosengeld I
                          </p>
                          <p className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400">
                            {formatCurrency(monthlyAlg)} €
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Leistungssatz: {kinder >= 1 ? "67" : "60"} % |
                            Täglich: {formatCurrency(dailyAlg)} €
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Comparison with last netto */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                          <TrendingDown className="w-5 h-5 text-amber-500" />
                          Vergleich mit letztem Netto
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-5">
                        {/* Visual bars */}
                        <div className="space-y-3">
                          {/* Last Netto bar */}
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Letztes Netto</span>
                              <span className="font-medium">
                                {formatCurrency(lastNetto)} €
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-6 overflow-hidden">
                              <div
                                className="bg-gray-400 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                                style={{ width: "100%", minWidth: "60px" }}
                              >
                                <span className="text-xs text-white font-medium">
                                  {formatCurrency(lastNetto)} €
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* ALG I bar */}
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">ALG I</span>
                              <span className="font-medium text-green-600 dark:text-green-400">
                                {formatCurrency(monthlyAlg)} €
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-6 overflow-hidden">
                              <div
                                className="bg-green-500 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                                style={{
                                  width: `${lastNetto > 0 ? (monthlyAlg / lastNetto) * 100 : 0}%`,
                                  minWidth: "60px",
                                }}
                              >
                                <span className="text-xs text-white font-medium">
                                  {formatCurrency(monthlyAlg)} €
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Detailed breakdown */}
                        <div className="border-t pt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Letztes Bruttogehalt</span>
                            <span className="font-medium">{formatCurrency(brutto)} €</span>
                          </div>
                          {brutto > BBG_AV_MONAT && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Gedeckeltes Brutto (BBG)</span>
                              <span className="font-medium">{formatCurrency(cappedBrutto)} €</span>
                            </div>
                          )}
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Pauschaliertes Netto</span>
                            <span className="font-medium">{formatCurrency(lastNetto)} €</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Leistungssatz</span>
                            <span className="font-medium">{kinder >= 1 ? "67" : "60"} %</span>
                          </div>
                          <div className="flex justify-between text-sm border-t pt-2">
                            <span className="text-muted-foreground">Differenz zum Netto</span>
                            <span className="font-bold text-amber-600">
                              -{formatCurrency(differenz)} €
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Anteil vom letzten Netto</span>
                            <span className="font-medium">{formatPercent(percentOfNetto)} %</span>
                          </div>
                        </div>

                        {/* Info box */}
                        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                          <p className="text-sm text-blue-900 dark:text-blue-100">
                            <Info className="w-4 h-4 inline mr-1" />
                            ALG I ist steuerfrei, unterliegt aber dem Progressionsvorbehalt.
                            Es wird bei der Steuererklärung zur Ermittlung des Steuersatzes
                            herangezogen.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Duration table */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg sm:text-xl">
                          Bezugsdauer ALG I
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2 pr-3 font-medium text-muted-foreground">
                                  Beitragsmonate
                                </th>
                                <th className="text-center py-2 px-2 font-medium text-muted-foreground">
                                  &lt; 50
                                </th>
                                <th className="text-center py-2 px-2 font-medium text-muted-foreground">
                                  50+
                                </th>
                                <th className="text-center py-2 px-2 font-medium text-muted-foreground">
                                  55+
                                </th>
                                <th className="text-center py-2 px-2 font-medium text-muted-foreground">
                                  58+
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {durationTable.map((row) => (
                                <tr key={row.months} className="border-b last:border-0">
                                  <td className="py-2 pr-3 font-medium">{row.months} Mon.</td>
                                  <td className="text-center py-2 px-2">
                                    {row.under50 !== null ? `${row.under50} Mon.` : "-"}
                                  </td>
                                  <td className="text-center py-2 px-2">
                                    {row.age50 !== null ? `${row.age50} Mon.` : "-"}
                                  </td>
                                  <td className="text-center py-2 px-2">
                                    {row.age55 !== null ? `${row.age55} Mon.` : "-"}
                                  </td>
                                  <td className="text-center py-2 px-2">
                                    {row.age58 !== null ? `${row.age58} Mon.` : "-"}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">
                          Beitragsmonate = versicherungspflichtige Beschäftigung in den letzten 30 Monaten.
                          Alter = Alter bei Entstehung des Anspruchs.
                        </p>
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
        currentHref="/rechner/arbeitslosengeld"
        count={6}
        title="Weitere Gehaltsrechner"
      />

      {/* Content Sections */}
      <ContentSection
        heading="Was ist Arbeitslosengeld I?"
        icon={<BookOpen className="w-5 h-5" />}
        body="Arbeitslosengeld I (ALG I) ist eine Versicherungsleistung der Bundesagentur für Arbeit. Es wird aus den Beiträgen zur Arbeitslosenversicherung finanziert, die Arbeitnehmer und Arbeitgeber je zur Hälfte tragen (2026: je 1,3 %, gesamt 2,6 %). ALG I soll den Lebensunterhalt während der Arbeitssuche sichern und ist zeitlich begrenzt. Im Gegensatz zum Bürgergeld (ALG II) ist es keine Sozialleistung, sondern eine Versicherungsleistung, deren Höhe sich nach dem vorherigen Einkommen richtet."
      >
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <p className="text-sm text-amber-900 dark:text-amber-100">
            <strong>Wichtig:</strong> ALG I und Bürgergeld (ALG II) sind unterschiedliche Leistungen.
            ALG I richtet sich nach Ihrem vorherigen Gehalt, Bürgergeld ist eine bedarfsorientierte
            Grundsicherung. Nach Ablauf des ALG-I-Anspruchs kann ggf. Bürgergeld beantragt werden.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Wie wird ALG I berechnet?"
        icon={<Info className="w-5 h-5" />}
        body="Die Berechnung des ALG I folgt einem festen Schema: (1) Ausgangspunkt ist Ihr letztes Bruttogehalt, gedeckelt auf die Beitragsbemessungsgrenze der Arbeitslosenversicherung (2026: 8.450 EUR/Monat bzw. 101.400 EUR/Jahr). (2) Daraus wird ein pauschaliertes Nettoentgelt ermittelt (Leistungsentgelt) unter Berücksichtigung Ihrer Steuerklasse. (3) Vom Leistungsentgelt erhalten Sie 60 % (ohne Kinder) oder 67 % (mit mindestens einem Kind) als tägliches ALG I."
      >
        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p className="text-sm text-green-900 dark:text-green-100">
            <strong>Rechenbeispiel:</strong> Bei 3.500 EUR Brutto (Steuerklasse 1, keine Kinder) ergibt sich
            ein pauschaliertes Netto von ca. 2.300 EUR. Davon 60 % = ca. 1.380 EUR ALG I pro Monat.
            Mit Kindern (67 %) wären es ca. 1.540 EUR.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Voraussetzungen für ALG I"
        icon={<ShieldCheck className="w-5 h-5" />}
        body="Um ALG I zu erhalten, müssen drei Voraussetzungen erfüllt sein: (1) Anwartschaftszeit: Sie müssen in den letzten 30 Monaten vor der Arbeitslosmeldung mindestens 12 Monate versicherungspflichtig beschäftigt gewesen sein. (2) Arbeitslosmeldung: Sie müssen sich persönlich bei der Agentur für Arbeit arbeitslos gemeldet haben. (3) Verfügbarkeit: Sie müssen den Vermittlungsbemühungen der Arbeitsagentur zur Verfügung stehen und bereit sein, jede zumutbare Beschäftigung anzunehmen."
      >
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.arbeitsagentur.de/arbeitslosengeld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            Bundesagentur für Arbeit - Arbeitslosengeld
          </a>
          <a
            href="https://www.gesetze-im-internet.de/sgb_3/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            SGB III - Gesetzestext
          </a>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zum Arbeitslosengeld" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Jetzt ALG I berechnen
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie den Arbeitslosengeld Rechner, um Ihren voraussichtlichen Anspruch
              zu ermitteln und sich finanziell auf die Arbeitssuche vorzubereiten.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
