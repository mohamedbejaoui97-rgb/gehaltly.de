"use client";

import { useState } from "react";
import { Calculator as CalcIcon, BookOpen, Info, TrendingUp } from "lucide-react";
import { BruttoNettoForm } from "@/components/calculator/BruttoNettoForm";
import { CalculatorResult } from "@/components/calculator/CalculatorResult";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { type CalculatorResult as CalculatorResultType } from "@/lib/tax";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gehaltsrechner 2026 - Nettogehalt kostenlos berechnen",
  description: "Gehaltsrechner 2026: Berechnen Sie Ihr Nettogehalt aus dem Bruttogehalt. ✓ Präzise Berechnung ✓ Alle Steuerklassen ✓ Kostenlos. Jetzt Gehalt berechnen!",
  openGraph: {
    title: "Gehaltsrechner 2026 - Nettogehalt kostenlos berechnen",
    description: "Berechnen Sie Ihr Nettogehalt mit unserem kostenlosen Gehaltsrechner 2026. Präzise und einfach.",
    url: "https://gehaltly.de/gehaltsrechner",
  },
};

export default function GehaltsrechnerPage() {
  const [result, setResult] = useState<CalculatorResultType | null>(null);

  // FAQ data specific to Gehaltsrechner
  const faqs = [
    {
      question: "Wie berechne ich mein Nettogehalt?",
      answer: "Um Ihr Nettogehalt zu berechnen, geben Sie Ihr monatliches oder jährliches Bruttogehalt in den Gehaltsrechner ein. Wählen Sie dann Ihre Steuerklasse (1-6) und Ihr Bundesland aus. Der Rechner zieht automatisch alle gesetzlichen Abzüge ab: Lohnsteuer, Solidaritätszuschlag, gegebenenfalls Kirchensteuer sowie die Sozialversicherungsbeiträge für Renten-, Kranken-, Pflege- und Arbeitslosenversicherung. Das Ergebnis zeigt Ihr tatsächliches Nettogehalt, das auf Ihrem Konto landet."
    },
    {
      question: "Was ist der Unterschied zwischen Gehalt und Lohn?",
      answer: "Gehalt ist eine feste monatliche Vergütung, die unabhängig von den tatsächlich geleisteten Arbeitsstunden gleichbleibt - typisch für Angestellte und Beamte. Lohn hingegen wird variabel berechnet, meist auf Stunden- oder Stückbasis, und kann je nach geleisteter Arbeit schwanken - üblich bei gewerblichen Arbeitnehmern. In der Steuerberechnung gibt es jedoch keinen Unterschied: Beide unterliegen der Lohnsteuer und den Sozialversicherungsbeiträgen. Unser Gehaltsrechner funktioniert für beide Vergütungsformen."
    },
    {
      question: "Wie hoch ist mein Nettogehalt bei 3000 Euro brutto?",
      answer: "Bei einem Bruttogehalt von 3.000 EUR monatlich bleibt je nach Steuerklasse unterschiedlich viel netto übrig. In Steuerklasse 1 (ledig, kinderlos) sind es etwa 2.050 EUR netto. In Steuerklasse 3 (verheiratet, Partner verdient weniger) circa 2.280 EUR. In Steuerklasse 5 (verheiratet, Partner verdient mehr) nur etwa 1.700 EUR. Diese Werte gelten für 2026 ohne Kirchensteuer und können je nach Bundesland und Krankenkasse leicht variieren. Nutzen Sie unseren Gehaltsrechner für eine exakte Berechnung Ihrer individuellen Situation."
    },
    {
      question: "Welche Abzüge habe ich vom Bruttogehalt?",
      answer: "Vom Bruttogehalt werden zwei Arten von Abzügen vorgenommen: Erstens Steuern - die Lohnsteuer (abhängig von Ihrer Steuerklasse und Gehaltshöhe), der Solidaritätszuschlag (5,5% der Lohnsteuer, für die meisten Arbeitnehmer jedoch durch Freibetrag entfallend) und optional die Kirchensteuer (8-9% der Lohnsteuer). Zweitens Sozialversicherungsbeiträge - Rentenversicherung (9,3%), Krankenversicherung (ca. 8,15%), Pflegeversicherung (1,7% bzw. 2,3% für Kinderlose) und Arbeitslosenversicherung (1,3%). Insgesamt werden etwa 30-50% des Bruttogehalts abgezogen."
    },
    {
      question: "Kann ich mein Nettogehalt erhöhen?",
      answer: "Ja, es gibt mehrere legale Möglichkeiten: Steuerklassenwechsel bei Verheirateten (Kombination 3/5 oder 4/4 mit Faktor), Freibeträge eintragen lassen (z.B. für Werbungskosten, Kinderbetreuung, außergewöhnliche Belastungen), steueroptimierte Gehaltsbestandteile nutzen (Jobticket, Dienstwagen, Essenszuschüsse, betriebliche Altersvorsorge), Umzug in ein anderes Bundesland mit niedrigerer Kirchensteuer oder Austritt aus der Kirche (spart 8-9% der Lohnsteuer). Bei höherem Bruttogehalt kann auch eine private Krankenversicherung in Betracht kommen. Sprechen Sie mit Ihrem Arbeitgeber über steueroptimierte Vergütungsmodelle."
    }
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Gehaltsrechner 2026",
    "url": "https://gehaltly.de/gehaltsrechner",
    "description": "Kostenloser Gehaltsrechner 2026 für Deutschland. Berechnen Sie Ihr Nettogehalt aus dem Bruttogehalt mit allen Steuerklassen.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Nettogehalt berechnen",
      "Alle Steuerklassen 1-6",
      "Monatliche und jährliche Berechnung",
      "Detaillierte Gehaltsabrechnung",
      "Kirchensteuer-Berechnung",
      "Aktuelle Steuertabellen 2026"
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup schema={webAppSchema} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: "Gehaltsrechner", href: "/gehaltsrechner" }]} />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Gehaltsrechner 2026"
        subtitle="Berechnen Sie Ihr Nettogehalt kostenlos"
        description="Präziser Gehaltsrechner für Deutschland mit allen Steuerklassen. Erfahren Sie, wie viel von Ihrem Bruttogehalt netto übrig bleibt."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Mit unserem Gehaltsrechner 2026 ermitteln Sie schnell und präzise Ihr Nettogehalt. Der Rechner berücksichtigt alle relevanten Faktoren wie Ihre Steuerklasse, Ihr Bundesland, Kirchensteuerpflicht und die aktuellen Sozialversicherungsbeiträge. So erhalten Sie eine realistische Einschätzung Ihres tatsächlichen Einkommens.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Besonders nützlich ist der Gehaltsrechner bei Gehaltsverhandlungen, Jobwechsel oder wenn Sie verschiedene Gehaltsangebote miteinander vergleichen möchten. Die Berechnungen basieren auf den aktuellen Steuertabellen und Beitragssätzen für 2026.
            </p>
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
                  <h2 className="text-2xl font-bold mb-6">Ihre Gehaltsdaten</h2>
                  <BruttoNettoForm onResult={setResult} />
                </div>
              </div>

              {/* Right Column - Result */}
              <div className="space-y-6">
                {result ? (
                  <CalculatorResult result={result} isMonthly={true} />
                ) : (
                  <div className="bg-background rounded-lg border p-6 shadow-sm h-full flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <CalcIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                      <p className="text-lg font-medium mb-2">Ihr Nettogehalt</p>
                      <p className="text-sm">
                        Geben Sie Ihr Bruttogehalt ein, um die Berechnung zu starten
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
      <RelatedLinks currentHref="/gehaltsrechner" count={6} title="Weitere Gehaltsrechner" />

      {/* Glossary Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold mb-8">Wichtige Begriffe zum Gehalt</h2>

            {/* Bruttogehalt */}
            <ContentSection
              heading="Bruttogehalt"
              icon={<BookOpen className="w-5 h-5" />}
              body="Das Bruttogehalt ist die Summe aller Bezüge vor Abzug von Steuern und Sozialversicherungsbeiträgen. Es umfasst das Grundgehalt sowie alle steuerpflichtigen Zulagen wie Überstundenvergütung, Provisionen, Weihnachtsgeld oder geldwerte Vorteile (z.B. Dienstwagen). Das Bruttogehalt ist die Grundlage für die Berechnung aller Abzüge."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Wichtig:</strong> In Arbeitsverträgen wird grundsätzlich das Bruttogehalt angegeben. Bei Gehaltsverhandlungen sollten Sie immer vom Bruttobetrag ausgehen und dann mit unserem Gehaltsrechner ermitteln, was netto übrig bleibt.
                </p>
              </div>
            </ContentSection>

            {/* Nettogehalt */}
            <ContentSection
              heading="Nettogehalt"
              icon={<Info className="w-5 h-5" />}
              body="Das Nettogehalt ist der Betrag, der nach Abzug aller Steuern und Sozialversicherungsbeiträge vom Bruttogehalt übrig bleibt und auf Ihr Konto überwiesen wird. Es wird auch als Auszahlungsbetrag bezeichnet. Die Höhe des Nettogehalts hängt von mehreren Faktoren ab: Bruttogehalt, Steuerklasse, Bundesland, Kirchensteuerpflicht und Anzahl der Kinder."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Faustregel:</strong> Bei einem durchschnittlichen Gehalt bleibt etwa 60-70% des Bruttogehalts als Nettogehalt übrig. Je höher das Gehalt, desto höher der prozentuale Abzug durch die progressive Besteuerung.
                </p>
              </div>
            </ContentSection>

            {/* Progressionsvorbehalt */}
            <ContentSection
              heading="Progressionsvorbehalt beim Gehalt"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Der Progressionsvorbehalt betrifft Sie, wenn Sie steuerfrei Lohnersatzleistungen wie Arbeitslosengeld, Elterngeld oder Kurzarbeitergeld erhalten haben. Diese Leistungen sind zwar selbst steuerfrei, erhöhen aber den Steuersatz für Ihr übriges Einkommen. Das führt dazu, dass Sie auf Ihr Gehalt mehr Steuern zahlen müssen als ohne die Lohnersatzleistungen."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Beispiel:</strong> Sie haben 6 Monate Elterngeld erhalten und 6 Monate gearbeitet. Das Elterngeld ist steuerfrei, wird aber bei der Berechnung des Steuersatzes für Ihr Gehalt berücksichtigt. Dies kann zu einer Steuernachzahlung in der Jahressteuererklärung führen.
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zum Gehaltsrechner" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihr Nettogehalt
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren kostenlosen Gehaltsrechner 2026 für eine präzise Berechnung. Einfach, schnell und zuverlässig.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
