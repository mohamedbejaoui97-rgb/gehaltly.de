"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator as CalcIcon, ArrowLeft, ArrowRight, TrendingUp, Info } from "lucide-react";
import { BruttoNettoForm } from "@/components/calculator/BruttoNettoForm";
import { CalculatorResult } from "@/components/calculator/CalculatorResult";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { type CalculatorResult as CalculatorResultType } from "@/lib/tax";
import { type AmountPage } from "@/lib/utils/amount-pages";
import { Button } from "@/components/ui/button";

interface AmountPageClientProps {
  amount: number;
  neighbors: {
    previous: AmountPage | null;
    next: AmountPage | null;
  };
  preCalculatedResult: CalculatorResultType;
  isAnnual?: boolean;
}

/**
 * Format currency in German format
 */
function formatCurrency(value: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function AmountPageClient({
  amount,
  neighbors,
  preCalculatedResult,
  isAnnual = false,
}: AmountPageClientProps) {
  const [result, setResult] = useState<CalculatorResultType>(preCalculatedResult);
  const periodLabel = isAnnual ? 'Jahresgehalt' : 'Bruttogehalt';

  // Generate FAQs specific to this amount
  const faqs = [
    {
      question: `Wie viel sind ${amount} Euro brutto in netto?`,
      answer: isAnnual
        ? `Bei einem Jahresgehalt von ${amount.toLocaleString('de-DE')} Euro brutto (ca. ${formatCurrency(Math.round(amount / 12))} pro Monat) bleiben in Steuerklasse 1 etwa ${formatCurrency(preCalculatedResult.netto)} netto pro Monat übrig (ohne Kirchensteuer, in Bayern). Die genaue Nettosumme hängt von Ihrer Steuerklasse, Ihrem Bundesland und weiteren persönlichen Faktoren ab.`
        : `Bei einem Bruttogehalt von ${amount} Euro bleiben in Steuerklasse 1 etwa ${formatCurrency(preCalculatedResult.netto)} netto übrig (ohne Kirchensteuer, in Bayern). Das entspricht einer Abzugsquote von etwa ${Math.round((preCalculatedResult.gesamtAbzuege / amount) * 100)}%. Die genaue Nettosumme hängt von Ihrer Steuerklasse, Ihrem Bundesland und weiteren persönlichen Faktoren ab. In Steuerklasse 3 bleibt mehr netto übrig, in Steuerklasse 5 oder 6 deutlich weniger.`,
    },
    {
      question: `Welche Abzüge habe ich bei ${amount} Euro brutto?`,
      answer: `Bei ${amount} Euro Bruttogehalt werden folgende Abzüge vorgenommen: Lohnsteuer etwa ${formatCurrency(preCalculatedResult.steuern.lohnsteuer)}, Rentenversicherung ${formatCurrency(preCalculatedResult.sozialabgaben.rentenversicherung)}, Krankenversicherung ${formatCurrency(preCalculatedResult.sozialabgaben.krankenversicherung)}, Pflegeversicherung ${formatCurrency(preCalculatedResult.sozialabgaben.pflegeversicherung)} und Arbeitslosenversicherung ${formatCurrency(preCalculatedResult.sozialabgaben.arbeitslosenversicherung)}. Insgesamt werden etwa ${formatCurrency(preCalculatedResult.gesamtAbzuege)} abgezogen. Diese Werte gelten für Steuerklasse 1 ohne Kirchensteuer.`,
    },
    {
      question: `Ist ${amount} Euro brutto ein gutes Gehalt?`,
      answer: `Mit ${amount} Euro brutto liegen Sie ${amount >= 4000 ? 'über' : amount >= 2500 ? 'im Bereich' : 'unter'} dem deutschen Durchschnittsgehalt von etwa 3.700 Euro brutto (Vollzeit, 2026). Netto bleiben Ihnen in Steuerklasse 1 etwa ${formatCurrency(preCalculatedResult.netto)}. Ob das ein gutes Gehalt ist, hängt von vielen Faktoren ab: Ihrer Region (Lebenshaltungskosten), Ihrer Branche, Ihrer Berufserfahrung und Ihren persönlichen Umständen. In München oder Stuttgart benötigen Sie mehr für denselben Lebensstandard als in ländlichen Regionen. Als Berufseinsteiger ist ${amount} Euro ${amount >= 3000 ? 'ein sehr guter Start' : amount >= 2000 ? 'ein solider Start' : 'eher unterdurchschnittlich'}.`,
    },
    {
      question: `Wie viel Steuern zahle ich bei ${amount} Euro brutto?`,
      answer: `Bei ${amount} Euro Bruttogehalt zahlen Sie in Steuerklasse 1 etwa ${formatCurrency(preCalculatedResult.gesamtSteuern)} an Steuern pro Monat. Das setzt sich zusammen aus Lohnsteuer (${formatCurrency(preCalculatedResult.steuern.lohnsteuer)}), Solidaritätszuschlag (${formatCurrency(preCalculatedResult.steuern.solidaritaetszuschlag)}) und gegebenenfalls Kirchensteuer. Der Steuersatz steigt progressiv mit dem Einkommen - je höher das Gehalt, desto höher der prozentuale Anteil. Die Sozialversicherungsbeiträge von etwa ${formatCurrency(preCalculatedResult.gesamtSozialabgaben)} kommen noch hinzu, sind aber keine Steuern im eigentlichen Sinne.`,
    },
    {
      question: `Welche Steuerklasse ist bei ${amount} Euro am günstigsten?`,
      answer: `Die Steuerklasse können Sie nicht frei wählen - sie richtet sich nach Ihrem Familienstand. Bei ${amount} Euro brutto haben Sie folgende Optionen: Steuerklasse 1 (ledig, etwa ${formatCurrency(preCalculatedResult.netto)} netto), Steuerklasse 3 (verheiratet, Ehepartner verdient weniger, ca. ${formatCurrency(Math.round(preCalculatedResult.netto * 1.15))} netto), Steuerklasse 4 (verheiratet, beide verdienen ähnlich), Steuerklasse 5 (verheiratet, Ehepartner hat Steuerklasse 3, deutlich weniger netto) oder Steuerklasse 6 (Zweitjob, höchste Abzüge). Verheiratete können zwischen der Kombination 3/5 und 4/4 wählen. Die Gesamtsteuerlast ändert sich nicht, nur die monatlichen Vorauszahlungen.`,
    },
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `${amount} € Brutto in Netto Rechner`,
    "url": `https://gehaltly.de/${amount}-brutto-in-netto`,
    "description": `Berechnen Sie, was von ${amount} Euro Bruttogehalt netto übrig bleibt. Kostenloser Gehaltsrechner mit allen Steuerklassen.`,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
    },
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup schema={webAppSchema} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: "Gehaltsrechner", href: "/gehaltsrechner" },
            { label: `${amount} Euro`, href: `/${amount}-brutto-in-netto` },
          ]}
        />
      </div>

      {/* Hero Section */}
      <PageHero
        title={`${amount} € Brutto in Netto`}
        subtitle={`Berechnen Sie, was von ${amount} Euro ${periodLabel} übrig bleibt`}
        description={isAnnual
          ? `Mit ${amount} Euro Jahresbrutto bleiben Ihnen in Steuerklasse 1 etwa ${formatCurrency(preCalculatedResult.netto)} netto pro Monat. Nutzen Sie unseren Rechner für eine präzise Berechnung mit Ihren persönlichen Daten.`
          : `Mit ${amount} Euro brutto bleiben Ihnen in Steuerklasse 1 etwa ${formatCurrency(preCalculatedResult.netto)} netto. Nutzen Sie unseren Rechner für eine präzise Berechnung mit Ihren persönlichen Daten.`
        }
      />

      {/* Quick Result Preview */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-lg border p-6 md:p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 rounded-lg p-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">
                    Schnellübersicht: {amount} € {isAnnual ? 'Jahresbrutto' : 'Brutto'}
                  </h2>
                  <p className="text-muted-foreground">
                    Vorberechnung für Steuerklasse 1, Bayern, ohne Kirchensteuer{isAnnual ? ' (monatliche Werte)' : ''}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">{isAnnual ? 'Jahresbrutto' : 'Bruttogehalt'}</p>
                  <p className="text-2xl font-bold text-primary">
                    {formatCurrency(amount)}{isAnnual ? '/Jahr' : ''}
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Abzüge{isAnnual ? '/Monat' : ''}</p>
                  <p className="text-2xl font-bold text-destructive">
                    -{formatCurrency(preCalculatedResult.gesamtAbzuege)}
                  </p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-200 dark:border-green-800">
                  <p className="text-sm text-muted-foreground mb-1">Netto{isAnnual ? '/Monat' : ''}</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {formatCurrency(preCalculatedResult.netto)}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-2 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  Dies ist eine Vorberechnung mit Standardwerten. Nutzen Sie den Rechner unten für eine
                  Berechnung mit Ihrer individuellen Steuerklasse, Ihrem Bundesland und weiteren
                  persönlichen Faktoren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section - Two Column Layout */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Personalisierte Berechnung für {amount} € Brutto
              </h2>
              <p className="text-lg text-muted-foreground">
                Passen Sie die Eingaben an Ihre persönliche Situation an, um Ihr exaktes Nettogehalt zu
                ermitteln.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Form */}
              <div className="space-y-6">
                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-6">Ihre Eingaben</h3>
                  <BruttoNettoForm
                    defaultValues={{
                      bruttoeinkommen: amount,
                      ...(isAnnual ? { abrechnungszeitraum: 'jahr' as const } : {}),
                    }}
                    onResult={setResult}
                  />
                </div>
              </div>

              {/* Right Column - Result */}
              <div className="space-y-6">
                {result ? (
                  <CalculatorResult result={result} isMonthly={!isAnnual} />
                ) : (
                  <div className="bg-background rounded-lg border p-6 shadow-sm h-full flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <CalcIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                      <p className="text-lg font-medium mb-2">Ihre Berechnung</p>
                      <p className="text-sm">Die Berechnung wird automatisch aktualisiert</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Previous/Next Amounts */}
      {(neighbors.previous || neighbors.next) && (
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Weitere Gehaltsberechnungen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {neighbors.previous && (
                  <Link href={`/${neighbors.previous.amount}-brutto-in-netto`}>
                    <Button
                      variant="outline"
                      className="w-full h-auto py-4 px-6 flex items-center justify-between hover:border-primary transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <ArrowLeft className="w-5 h-5 text-primary" />
                        <div className="text-left">
                          <p className="text-xs text-muted-foreground">Vorheriges Gehalt</p>
                          <p className="font-semibold">
                            {formatCurrency(neighbors.previous.amount)} Brutto
                          </p>
                        </div>
                      </div>
                    </Button>
                  </Link>
                )}
                {neighbors.next && (
                  <Link href={`/${neighbors.next.amount}-brutto-in-netto`}>
                    <Button
                      variant="outline"
                      className="w-full h-auto py-4 px-6 flex items-center justify-between hover:border-primary transition-colors"
                    >
                      <div className="flex items-center gap-3 ml-auto">
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Nächstes Gehalt</p>
                          <p className="font-semibold">
                            {formatCurrency(neighbors.next.amount)} Brutto
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Section - Salary Context */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <ContentSection
              heading={`Was bedeutet ein Gehalt von ${amount} Euro?`}
              icon={<TrendingUp className="w-5 h-5" />}
              body={isAnnual
                ? `Ein Jahresgehalt von ${amount.toLocaleString('de-DE')} Euro brutto ${
                    amount >= 70000
                      ? 'liegt deutlich über dem deutschen Durchschnittsgehalt von ca. 44.400 Euro und gehört zu den oberen Einkommensgruppen.'
                      : amount >= 44000
                      ? 'bewegt sich im Bereich des deutschen Durchschnittsgehalts. Dieses Gehalt ermöglicht einen soliden Lebensstandard.'
                      : 'liegt unter dem deutschen Durchschnittsgehalt, kann aber je nach Region und Berufserfahrung angemessen sein.'
                  } Das entspricht einem Monatsbrutto von ca. ${formatCurrency(Math.round(amount / 12))}. Nach Abzug von Steuern und Sozialversicherungsbeiträgen bleiben Ihnen monatlich etwa ${formatCurrency(preCalculatedResult.netto)} netto.`
                : `Ein Bruttogehalt von ${amount} Euro pro Monat ${
                    amount >= 4500
                      ? 'liegt deutlich über dem deutschen Durchschnittsgehalt und ermöglicht einen komfortablen Lebensstandard. Mit diesem Gehalt gehören Sie zu den besser verdienenden Arbeitnehmern in Deutschland.'
                      : amount >= 3000
                      ? 'bewegt sich im Bereich des deutschen Durchschnittsgehalts. Dieses Gehalt ermöglicht einen soliden Lebensstandard, wobei die Kaufkraft je nach Region unterschiedlich ausfällt.'
                      : amount >= 2000
                      ? 'liegt unter dem deutschen Durchschnittsgehalt, kann aber je nach Region und Lebensumständen ausreichend sein. Besonders bei Berufseinsteigern oder Teilzeitbeschäftigung ist dieses Gehalt üblich.'
                      : 'ist typisch für Teilzeitbeschäftigung, Minijobs oder Berufseinsteiger. Eine genaue Haushaltsplanung ist bei diesem Gehalt besonders wichtig.'
                  } Nach Abzug von Steuern und Sozialversicherungsbeiträgen bleiben Ihnen etwa ${formatCurrency(preCalculatedResult.netto)} netto. Die Kaufkraft variiert stark je nach Region - in München oder Hamburg benötigen Sie etwa ${
                    amount >= 3000 ? '30-40%' : '40-50%'
                  } mehr als in kleineren Städten oder ländlichen Regionen.`
              }
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Tipp:</strong> Vergleichen Sie Ihr Gehalt mit dem Branchendurchschnitt und
                  berücksichtigen Sie Faktoren wie Berufserfahrung, Qualifikation und Unternehmensgröße.
                  Nutzen Sie Gehaltsverhandlungen, um Ihr Einkommen zu optimieren.
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title={`Häufig gestellte Fragen zu ${amount} € Brutto`}
      />

      {/* Related Links */}
      <RelatedLinks
        currentHref={`/${amount}-brutto-in-netto`}
        count={6}
        title="Weitere Gehaltsrechner"
      />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Optimieren Sie Ihre Gehaltsplanung
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren kostenlosen Gehaltsrechner für {amount} Euro Bruttogehalt und finden
              Sie heraus, wie viel netto für Sie übrig bleibt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
