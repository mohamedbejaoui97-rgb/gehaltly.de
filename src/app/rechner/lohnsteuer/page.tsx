"use client";

import { useState } from "react";
import { Receipt, Calculator as CalcIcon, TrendingUp, Info, BookOpen, PieChart } from "lucide-react";
import { calculateGermanTax, type CalculatorResult as CalculatorResultType, type Steuerklasse } from "@/lib/tax";
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

export default function LohnsteuerPage() {
  const [bruttogehalt, setBruttogehalt] = useState(4000);
  const [steuerklasse, setSteuerklasse] = useState<Steuerklasse>(1);
  const [kirchensteuer, setKirchensteuer] = useState(false);
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

  // Calculate tax
  const calculateTax = () => {
    const taxResult = calculateGermanTax({
      bruttoeinkommen: bruttogehalt,
      abrechnungszeitraum: "monat",
      steuerklasse: steuerklasse,
      bundesland: "nordrhein-westfalen",
      kirchensteuer: kirchensteuer,
      alter: 30,
      kinder: steuerklasse === 2 ? 1 : 0,
      krankenversicherung: "gesetzlich",
      kvZusatzbeitrag: 1.7,
      steuerfreibetrag: 0,
      geldwerterVorteil: 0,
    });
    setResult(taxResult);
    return taxResult;
  };

  // Calculate on mount and when inputs change
  useState(() => {
    calculateTax();
  });

  const taxResult = calculateTax();

  // Calculate effective tax rate
  const gesamtSteuern = taxResult.gesamtSteuern;
  const effectiveTaxRate = (gesamtSteuern / bruttogehalt) * 100;

  // Calculate annual values
  const jahresbrutto = bruttogehalt * 12;
  const jahresSteuern = gesamtSteuern * 12;

  // Tax brackets for visualization
  const getTaxBracketInfo = () => {
    const jahreseinkommen = jahresbrutto;

    if (jahreseinkommen <= 11604) {
      return { bracket: "Grundfreibetrag", rate: "0%", description: "Keine Lohnsteuer" };
    } else if (jahreseinkommen <= 17005) {
      return { bracket: "Zone 1", rate: "14-24%", description: "Eingangssteuersatz bis Progressionszone 1" };
    } else if (jahreseinkommen <= 66760) {
      return { bracket: "Zone 2", rate: "24-42%", description: "Progressionszone 2" };
    } else if (jahreseinkommen <= 277825) {
      return { bracket: "Zone 3", rate: "42%", description: "Spitzensteuersatz" };
    } else {
      return { bracket: "Reichensteuer", rate: "45%", description: "Höchststeuersatz" };
    }
  };

  const taxBracket = getTaxBracketInfo();

  // FAQ data specific to Lohnsteuer
  const faqs = [
    {
      question: "Wie hoch ist die Lohnsteuer in Deutschland?",
      answer: "Die Lohnsteuer in Deutschland ist progressiv und steigt mit dem Einkommen. Der Grundfreibetrag liegt 2026 bei 11.604 EUR - bis zu diesem Betrag zahlen Sie keine Lohnsteuer. Danach beginnt der Eingangssteuersatz bei 14% und steigt progressiv bis 42% (Spitzensteuersatz ab ca. 66.760 EUR) bzw. 45% (Reichensteuer ab 277.825 EUR). Die tatsächliche Lohnsteuer hängt von Ihrer Steuerklasse, Freibeträgen und weiteren Faktoren ab. Bei 4.000 EUR monatlich brutto zahlen Sie in Steuerklasse 1 etwa 550-600 EUR Lohnsteuer."
    },
    {
      question: "Was ist der Unterschied zwischen Lohnsteuer und Einkommensteuer?",
      answer: "Lohnsteuer und Einkommensteuer sind im Prinzip dasselbe - die Lohnsteuer ist eine Vorauszahlung auf die Einkommensteuer. Ihr Arbeitgeber behält monatlich Lohnsteuer ein und führt sie ans Finanzamt ab. Am Jahresende wird in der Einkommensteuererklärung die tatsächliche Steuerschuld berechnet. Haben Sie zu viel Lohnsteuer gezahlt, erhalten Sie eine Rückerstattung. Haben Sie zu wenig gezahlt (z.B. durch Nebeneinkünfte), müssen Sie nachzahlen. Die Lohnsteuer ist also ein Vorauszahlungssystem für abhängig Beschäftigte."
    },
    {
      question: "Wie wird die Lohnsteuer berechnet?",
      answer: "Die Lohnsteuer wird nach einer komplizierten Formel berechnet, die im Einkommensteuergesetz festgelegt ist. Grundlage ist Ihr Jahresbruttoeinkommen, von dem zunächst der Grundfreibetrag (11.604 EUR) und weitere Freibeträge (je nach Steuerklasse) abgezogen werden. Auf das verbleibende zu versteuernde Einkommen wird dann der progressive Steuertarif angewendet. Die Steuerklasse bestimmt die Höhe der Freibeträge. Zusätzlich zur Lohnsteuer werden Solidaritätszuschlag (5,5% der Lohnsteuer, meist durch Freibetrag entfallend) und ggf. Kirchensteuer (8-9% der Lohnsteuer) berechnet."
    },
    {
      question: "Kann ich die Lohnsteuer reduzieren?",
      answer: "Ja, es gibt mehrere legale Möglichkeiten: Freibeträge eintragen lassen (Werbungskosten über 1.230 EUR, Kinderbetreuungskosten, außergewöhnliche Belastungen, Handwerkerleistungen), optimale Steuerklassenwahl bei Verheirateten, steuerfreie Arbeitgeberleistungen nutzen (Jobticket, Sachbezüge, Kindergartenzuschuss), Spenden und Kirchensteuer absetzen, vermögenswirksame Leistungen, betriebliche Altersvorsorge (Entgeltumwandlung). Die Steuererklärung bringt im Durchschnitt 1.095 EUR Rückerstattung. Ein Steuerberater oder Lohnsteuerhilfeverein kann helfen."
    },
    {
      question: "Was bedeutet Progressionsvorbehalt bei der Lohnsteuer?",
      answer: "Der Progressionsvorbehalt betrifft Sie, wenn Sie steuerfreie Lohnersatzleistungen erhalten (Arbeitslosengeld, Elterngeld, Kurzarbeitergeld, Krankengeld). Diese Leistungen sind zwar steuerfrei, werden aber bei der Berechnung Ihres Steuersatzes berücksichtigt und erhöhen diesen. Dadurch zahlen Sie auf Ihr übriges Einkommen mehr Steuern. Beispiel: Sie verdienen 6 Monate 4.000 EUR brutto und erhalten 6 Monate 2.000 EUR Elterngeld. Das Elterngeld ist steuerfrei, erhöht aber Ihren Steuersatz auf die 24.000 EUR Arbeitslohn - es kommt oft zu Nachzahlungen."
    }
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Lohnsteuerrechner 2026",
    "url": "https://gehaltly.de/rechner/lohnsteuer",
    "description": "Kostenloser Lohnsteuerrechner 2026 - Berechnen Sie Ihre Lohnsteuer mit detailliertem Steuer-Breakdown und Steuersatz-Analyse.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Lohnsteuer berechnen",
      "Steuer-Breakdown",
      "Effektiver Steuersatz",
      "Alle Steuerklassen",
      "Kirchensteuer-Berechnung"
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
          { label: "Lohnsteuer", href: "/rechner/lohnsteuer" }
        ]} />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Lohnsteuerrechner 2026"
        subtitle="Berechnen Sie Ihre Lohnsteuer detailliert"
        description="Ermitteln Sie Ihre monatliche und jährliche Lohnsteuer mit allen Abzügen. Inklusive Steuersatz-Analyse und Steuerklassen-Vergleich."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Der Lohnsteuerrechner zeigt Ihnen genau, wie viel Lohnsteuer von Ihrem Gehalt abgezogen wird. Verstehen Sie die Zusammensetzung Ihrer Steuerlast und Ihren effektiven Steuersatz.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fokus auf die reine Steuerberechnung ohne Sozialversicherung - ideal für detaillierte Steueranalysen und zur Vorbereitung der Steuererklärung.
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
                    <CardTitle>Eingaben für Lohnsteuerberechnung</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <SliderInput
                      label="Monatliches Bruttogehalt"
                      value={bruttogehalt}
                      onChange={(value) => {
                        setBruttogehalt(value);
                        calculateTax();
                      }}
                      min={1000}
                      max={15000}
                      step={100}
                      formatValue={(v) => formatCurrency(v) + " €"}
                      parseValue={parseCurrency}
                    />

                    <div className="space-y-2">
                      <Label htmlFor="steuerklasse">Steuerklasse</Label>
                      <Select
                        value={steuerklasse.toString()}
                        onValueChange={(value) => {
                          setSteuerklasse(parseInt(value) as Steuerklasse);
                          calculateTax();
                        }}
                      >
                        <SelectTrigger id="steuerklasse">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Steuerklasse 1 - Ledig</SelectItem>
                          <SelectItem value="2">Steuerklasse 2 - Alleinerziehend</SelectItem>
                          <SelectItem value="3">Steuerklasse 3 - Verheiratet (Besserverdiener)</SelectItem>
                          <SelectItem value="4">Steuerklasse 4 - Verheiratet (gleiches Einkommen)</SelectItem>
                          <SelectItem value="5">Steuerklasse 5 - Verheiratet (Geringverdiener)</SelectItem>
                          <SelectItem value="6">Steuerklasse 6 - Zweitjob</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="kirchensteuer"
                        checked={kirchensteuer}
                        onChange={(e) => {
                          setKirchensteuer(e.target.checked);
                          calculateTax();
                        }}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <Label htmlFor="kirchensteuer" className="cursor-pointer">
                        Kirchensteuerpflichtig
                      </Label>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-sm text-blue-900 dark:text-blue-100">
                        <Receipt className="w-4 h-4 inline mr-1" />
                        <strong>Info:</strong> Dieser Rechner fokussiert sich auf die Lohnsteuer-Berechnung. Sozialversicherungsbeiträge werden separat dargestellt.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-900 dark:text-purple-100">
                      <PieChart className="w-5 h-5" />
                      Ihre Steuerzone
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-purple-900 dark:text-purple-100 mb-1">Jahresbrutto:</p>
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {formatCurrency(jahresbrutto)} €
                      </p>
                    </div>
                    <div className="border-t border-purple-200 dark:border-purple-700 pt-3">
                      <p className="text-sm text-purple-900 dark:text-purple-100 mb-1">Steuerzone:</p>
                      <p className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                        {taxBracket.bracket}
                      </p>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        {taxBracket.description}
                      </p>
                    </div>
                    <div className="border-t border-purple-200 dark:border-purple-700 pt-3">
                      <p className="text-sm text-purple-900 dark:text-purple-100 mb-1">Grenzsteuersatz:</p>
                      <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                        {taxBracket.rate}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lohnsteuer-Berechnung</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Monatliche Steuerlast</p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Lohnsteuer:</span>
                          <span className="text-lg font-semibold text-primary">
                            {formatCurrency(taxResult.steuern.lohnsteuer)} €
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Solidaritätszuschlag:</span>
                          <span className="font-medium">
                            {formatCurrency(taxResult.steuern.solidaritaetszuschlag)} €
                          </span>
                        </div>
                        {kirchensteuer && (
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Kirchensteuer:</span>
                            <span className="font-medium">
                              {formatCurrency(taxResult.steuern.kirchensteuer)} €
                            </span>
                          </div>
                        )}
                        <div className="border-t pt-2 flex justify-between items-center">
                          <span className="font-semibold">Gesamt Steuern:</span>
                          <span className="text-xl font-bold text-red-600 dark:text-red-400">
                            {formatCurrency(gesamtSteuern)} €
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                      <p className="text-sm text-amber-900 dark:text-amber-100 mb-3">
                        <strong>Jährliche Steuerlast:</strong>
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-amber-900 dark:text-amber-100">Lohnsteuer p.a.:</span>
                          <span className="font-medium text-amber-900 dark:text-amber-100">
                            {formatCurrency(taxResult.steuern.lohnsteuer * 12)} €
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-amber-900 dark:text-amber-100">Soli p.a.:</span>
                          <span className="font-medium text-amber-900 dark:text-amber-100">
                            {formatCurrency(taxResult.steuern.solidaritaetszuschlag * 12)} €
                          </span>
                        </div>
                        {kirchensteuer && (
                          <div className="flex justify-between">
                            <span className="text-amber-900 dark:text-amber-100">Kirchensteuer p.a.:</span>
                            <span className="font-medium text-amber-900 dark:text-amber-100">
                              {formatCurrency(taxResult.steuern.kirchensteuer * 12)} €
                            </span>
                          </div>
                        )}
                        <div className="border-t border-amber-300 dark:border-amber-700 pt-2 flex justify-between">
                          <span className="font-bold text-amber-900 dark:text-amber-100">Gesamt p.a.:</span>
                          <span className="font-bold text-amber-900 dark:text-amber-100">
                            {formatCurrency(jahresSteuern)} €
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                      <p className="text-sm text-green-900 dark:text-green-100 mb-3">
                        <strong>Effektiver Steuersatz:</strong>
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                          {effectiveTaxRate.toFixed(2)}%
                        </span>
                        <span className="text-sm text-green-700 dark:text-green-300">
                          vom Bruttogehalt
                        </span>
                      </div>
                      <p className="text-xs text-green-700 dark:text-green-300 mt-2">
                        Von {formatCurrency(bruttogehalt)} € brutto zahlen Sie {formatCurrency(gesamtSteuern)} € Steuern
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sozialversicherungsbeiträge (separat)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rentenversicherung (9,3%):</span>
                      <span className="font-medium">
                        {formatCurrency(taxResult.sozialabgaben.rentenversicherung)} €
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Krankenversicherung:</span>
                      <span className="font-medium">
                        {formatCurrency(taxResult.sozialabgaben.krankenversicherung)} €
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pflegeversicherung:</span>
                      <span className="font-medium">
                        {formatCurrency(taxResult.sozialabgaben.pflegeversicherung)} €
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Arbeitslosenversicherung (1,3%):</span>
                      <span className="font-medium">
                        {formatCurrency(taxResult.sozialabgaben.arbeitslosenversicherung)} €
                      </span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span className="font-semibold">Gesamt Sozialabgaben:</span>
                      <span className="font-bold">
                        {formatCurrency(taxResult.gesamtSozialabgaben)} €
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-green-900 dark:text-green-100">
                      Ihr Nettogehalt
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-green-900 dark:text-green-100">
                        <span>Bruttogehalt:</span>
                        <span className="font-medium">{formatCurrency(bruttogehalt)} €</span>
                      </div>
                      <div className="flex justify-between text-green-900 dark:text-green-100 text-sm">
                        <span>- Steuern:</span>
                        <span>- {formatCurrency(gesamtSteuern)} €</span>
                      </div>
                      <div className="flex justify-between text-green-900 dark:text-green-100 text-sm">
                        <span>- Sozialabgaben:</span>
                        <span>- {formatCurrency(taxResult.gesamtSozialabgaben)} €</span>
                      </div>
                      <div className="border-t border-green-300 dark:border-green-700 pt-2 flex justify-between">
                        <span className="text-lg font-bold text-green-900 dark:text-green-100">
                          Nettogehalt:
                        </span>
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {formatCurrency(taxResult.netto)} €
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks currentHref="/rechner/lohnsteuer" count={6} title="Weitere Gehaltsrechner" />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold mb-8">Lohnsteuer in Deutschland verstehen</h2>

            <ContentSection
              heading="Das progressive Steuersystem"
              icon={<BookOpen className="w-5 h-5" />}
              body="Deutschland hat ein progressives Steuersystem - je höher Ihr Einkommen, desto höher der Steuersatz. Es gibt einen Grundfreibetrag von 11.604 EUR (2026), bis zu dem keine Lohnsteuer anfällt. Darüber beginnt die Besteuerung mit 14% und steigt kontinuierlich bis auf 42% (Spitzensteuersatz) bzw. 45% (Reichensteuer ab 277.825 EUR). Wichtig: Nur das Einkommen über den jeweiligen Grenzen wird mit dem höheren Satz besteuert, nicht das gesamte Einkommen. Der effektive Steuersatz ist daher immer niedriger als der Grenzsteuersatz."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Beispiel:</strong> Bei 48.000 EUR Jahreseinkommen zahlen Sie nicht 42% auf alles, sondern 0% auf die ersten 11.604 EUR, dann progressiv steigend. Ihr effektiver Steuersatz liegt bei etwa 18-20%.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Solidaritätszuschlag 2026"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Der Solidaritätszuschlag beträgt 5,5% der Lohnsteuer. Allerdings wurde 2021 ein Freibetrag eingeführt, sodass etwa 90% der Steuerzahler keinen Soli mehr zahlen. Der Freibetrag liegt bei ca. 17.543 EUR Lohnsteuer pro Jahr (1.462 EUR pro Monat). Erst ab etwa 73.000 EUR Jahresbrutto (Single, Steuerklasse 1) fällt Soli an, zunächst nur teilweise (Gleitzone), ab ca. 109.000 EUR in voller Höhe. Für die meisten Arbeitnehmer ist der Soli damit faktisch abgeschafft."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Gut zu wissen:</strong> Bei durchschnittlichen Gehältern (unter 70.000 EUR Jahresbrutto) müssen Sie in der Regel keinen Solidaritätszuschlag zahlen.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Kirchensteuer - Wer zahlt wie viel?"
              icon={<Info className="w-5 h-5" />}
              body="Die Kirchensteuer beträgt 8% (Baden-Württemberg, Bayern) bzw. 9% (restliche Bundesländer) der Lohnsteuer - nicht des Bruttogehalts. Sie wird nur erhoben, wenn Sie Mitglied einer steuererhebenden Religionsgemeinschaft sind (katholisch, evangelisch, jüdisch, altkatholisch). Bei 600 EUR Lohnsteuer zahlen Sie also 48-54 EUR Kirchensteuer. Die Kirchensteuer ist jedoch steuerlich absetzbar - Sie können sie in der Steuererklärung als Sonderausgabe geltend machen und erhalten etwa 30-40% zurück. Ein Kirchenaustritt spart Steuern, hat aber auch soziale und religiöse Konsequenzen."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Rechenbeispiel:</strong> Bei 48.000 EUR Jahresbrutto sparen Sie durch Kirchenaustritt etwa 600-800 EUR netto pro Jahr. Bei höheren Gehältern entsprechend mehr.
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zur Lohnsteuer" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihre Lohnsteuer
            </h2>
            <p className="text-lg text-muted-foreground">
              Verstehen Sie Ihre Steuerlast im Detail und optimieren Sie Ihr Netto durch clevere Steuergestaltung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
