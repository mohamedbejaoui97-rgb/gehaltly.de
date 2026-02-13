"use client";

import { useState } from "react";
import { Calculator as CalcIcon, BookOpen, Clock, TrendingUp } from "lucide-react";
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
  title: "Lohnrechner 2026 - Nettolohn berechnen",
  description: "Lohnrechner 2026: Berechnen Sie Ihren Nettolohn aus dem Bruttolohn. ✓ Stundenlohn berechnen ✓ Alle Steuerklassen ✓ Kostenlos. Jetzt Nettolohn ermitteln!",
  openGraph: {
    title: "Lohnrechner 2026 - Nettolohn berechnen",
    description: "Berechnen Sie Ihren Nettolohn mit unserem kostenlosen Lohnrechner 2026. Für Stundenlohn und Monatslohn.",
    url: "https://gehaltly.de/lohnrechner",
  },
};

export default function LohnrechnerPage() {
  const [result, setResult] = useState<CalculatorResultType | null>(null);

  // FAQ data specific to Lohnrechner
  const faqs = [
    {
      question: "Wie berechne ich meinen Nettolohn?",
      answer: "Um Ihren Nettolohn zu berechnen, geben Sie Ihren Bruttolohn (monatlich oder jährlich) in den Lohnrechner ein. Wählen Sie Ihre Steuerklasse und Ihr Bundesland. Der Rechner ermittelt dann automatisch alle Abzüge: Lohnsteuer, Solidaritätszuschlag, Kirchensteuer (falls zutreffend) sowie Sozialversicherungsbeiträge (Renten-, Kranken-, Pflege- und Arbeitslosenversicherung). Das Ergebnis ist Ihr Nettolohn - der Betrag, der tatsächlich ausgezahlt wird. Für Stundenlohnberechnung multiplizieren Sie Ihren Stundenlohn mit der monatlichen Arbeitszeit."
    },
    {
      question: "Was ist der Unterschied zwischen Lohn und Gehalt?",
      answer: "Lohn und Gehalt unterscheiden sich in der Berechnungsweise: Lohn wird nach tatsächlich geleisteten Arbeitsstunden oder produzierten Stückzahlen berechnet und kann daher monatlich schwanken. Er ist typisch für gewerbliche Arbeitnehmer, Produktionsmitarbeiter oder Teilzeitbeschäftigte. Gehalt hingegen ist ein fester monatlicher Betrag, der unabhängig von geleisteten Stunden gezahlt wird - üblich bei Angestellten und Beamten. Steuerlich und bei den Sozialversicherungsbeiträgen werden beide gleich behandelt. Unser Lohnrechner funktioniert für beide Vergütungsformen."
    },
    {
      question: "Wie berechne ich meinen Stundenlohn netto?",
      answer: "Für die Berechnung Ihres Nettostundenlohns gehen Sie wie folgt vor: Ermitteln Sie zunächst Ihren monatlichen Bruttolohn (Bruttostundenlohn × Arbeitsstunden pro Monat). Nutzen Sie dann unseren Lohnrechner, um den monatlichen Nettolohn zu berechnen. Teilen Sie anschließend den Nettolohn durch Ihre monatlichen Arbeitsstunden. Beispiel: Bei 15 EUR Bruttostundenlohn und 160 Stunden (40h/Woche) ergibt sich ein Monatslohn von 2.400 EUR brutto. Nach Abzügen bleiben etwa 1.650 EUR netto, also ca. 10,31 EUR Nettostundenlohn. Die genaue Höhe hängt von Ihrer Steuerklasse ab."
    },
    {
      question: "Welche Abzüge habe ich vom Bruttolohn?",
      answer: "Vom Bruttolohn werden folgende Abzüge vorgenommen: Lohnsteuer (abhängig von Steuerklasse und Lohnhöhe, zwischen 0% und 45%), Solidaritätszuschlag (5,5% der Lohnsteuer, für die meisten durch Freibetrag entfallend), Kirchensteuer (8% in Bayern/Baden-Württemberg, 9% in anderen Bundesländern der Lohnsteuer, nur bei Kirchenmitgliedschaft). Dazu kommen Sozialversicherungsbeiträge: Rentenversicherung 9,3%, Krankenversicherung ca. 8,15%, Pflegeversicherung 1,7% (Kinderlose ab 23: 2,3%), Arbeitslosenversicherung 1,3%. Insgesamt werden etwa 30-50% abgezogen."
    },
    {
      question: "Wie viel Nettolohn bleibt bei Mindestlohn?",
      answer: "Bei dem gesetzlichen Mindestlohn von 12,82 EUR/Stunde (2026) und einer Vollzeitstelle mit 160 Stunden monatlich ergibt sich ein Bruttolohn von etwa 2.051 EUR. In Steuerklasse 1 bleiben davon circa 1.470 EUR netto übrig (ohne Kirchensteuer). In Steuerklasse 3 sind es etwa 1.620 EUR netto. Die Lohnsteuer fällt aufgrund des Grundfreibetrags relativ gering aus, aber die Sozialversicherungsbeiträge von ca. 20% werden in voller Höhe fällig. Verheiratete mit Steuerklasse 3 profitieren von niedrigeren Abzügen und haben mehr netto."
    }
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Lohnrechner 2026",
    "url": "https://gehaltly.de/lohnrechner",
    "description": "Kostenloser Lohnrechner 2026 für Deutschland. Berechnen Sie Ihren Nettolohn aus dem Bruttolohn mit allen Steuerklassen.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Nettolohn berechnen",
      "Stundenlohn-Berechnung",
      "Alle Steuerklassen 1-6",
      "Monatliche und jährliche Berechnung",
      "Lohnabrechnung mit Details",
      "Aktuelle Lohntabellen 2026"
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup schema={webAppSchema} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: "Lohnrechner", href: "/lohnrechner" }]} />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Lohnrechner 2026"
        subtitle="Berechnen Sie Ihren Nettolohn kostenlos"
        description="Präziser Lohnrechner für Deutschland. Ermitteln Sie, wie viel von Ihrem Bruttolohn nach allen Abzügen übrig bleibt."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Mit unserem Lohnrechner 2026 berechnen Sie schnell und präzise Ihren Nettolohn aus dem Bruttolohn. Besonders praktisch für Arbeitnehmer mit Stundenlohn, gewerbliche Mitarbeiter oder bei schwankenden Arbeitszeiten. Der Rechner berücksichtigt alle relevanten Faktoren wie Steuerklasse, Bundesland, Kirchensteuer und die aktuellen Sozialversicherungsbeiträge.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Egal ob Sie Ihren monatlichen Lohn, Stundenlohn oder Jahreslohn berechnen möchten - unser Lohnrechner zeigt Ihnen transparent alle Abzüge und wie viel netto von Ihrem Bruttolohn übrig bleibt. Die Berechnungen basieren auf den aktuellen Lohntabellen und Beitragssätzen für 2026.
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
                  <h2 className="text-2xl font-bold mb-6">Ihre Lohndaten</h2>
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
                      <p className="text-lg font-medium mb-2">Ihr Nettolohn</p>
                      <p className="text-sm">
                        Geben Sie Ihren Bruttolohn ein, um die Berechnung zu starten
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
      <RelatedLinks currentHref="/lohnrechner" count={6} title="Weitere Lohnrechner" />

      {/* Glossary Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold mb-8">Wichtige Begriffe zum Lohn</h2>

            {/* Bruttolohn */}
            <ContentSection
              heading="Bruttolohn"
              icon={<BookOpen className="w-5 h-5" />}
              body="Der Bruttolohn ist die Gesamtvergütung vor Abzug von Steuern und Sozialversicherungsbeiträgen. Er umfasst den Grundlohn sowie alle steuerpflichtigen Zuschläge wie Überstundenvergütung, Nachtzuschläge, Wochenend- und Feiertagszuschläge, Schichtzulagen oder Leistungsprämien. Bei Stundenlöhnern wird der Bruttolohn durch Multiplikation von Stundenlohn und geleisteten Arbeitsstunden berechnet."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Beispiel:</strong> Bei einem Stundenlohn von 18 EUR und 160 Arbeitsstunden im Monat beträgt der Bruttolohn 2.880 EUR. Hinzu kommen eventuelle Zuschläge für Überstunden, Nachtarbeit oder Wochenendarbeit, die den Bruttolohn erhöhen.
                </p>
              </div>
            </ContentSection>

            {/* Nettolohn */}
            <ContentSection
              heading="Nettolohn"
              icon={<Clock className="w-5 h-5" />}
              body="Der Nettolohn ist der Betrag, der nach Abzug aller gesetzlichen Abgaben vom Bruttolohn übrig bleibt und Ihnen ausgezahlt wird. Er wird auch als Auszahlungsbetrag bezeichnet. Der Nettolohn variiert je nach Steuerklasse, Bundesland, Kirchenzugehörigkeit und persönlicher Situation. Bei Stundenlöhnern kann der Nettolohn durch unterschiedliche monatliche Arbeitsstunden schwanken."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Tipp:</strong> Um Ihren Nettostundenlohn zu ermitteln, teilen Sie den monatlichen Nettolohn durch die geleisteten Arbeitsstunden. So können Sie verschiedene Jobangebote besser vergleichen und wissen, was Sie tatsächlich pro Stunde verdienen.
                </p>
              </div>
            </ContentSection>

            {/* Mindestlohn */}
            <ContentSection
              heading="Mindestlohn 2026"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Der gesetzliche Mindestlohn in Deutschland beträgt 2026 voraussichtlich 12,82 EUR pro Stunde (Stand: Januar 2026). Er gilt für alle volljährigen Arbeitnehmer und wird regelmäßig angepasst. Arbeitgeber sind verpflichtet, mindestens diesen Betrag zu zahlen. Bei einer Vollzeitstelle (160 Stunden/Monat) ergibt sich daraus ein Bruttolohn von etwa 2.051 EUR monatlich."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Wichtig zu wissen:</strong> Der Mindestlohn gilt für alle Branchen. Einige Branchen haben jedoch durch Tarifverträge höhere Mindestlöhne festgelegt (z.B. Baugewerbe, Pflegebranche, Elektrohandwerk). Auszubildende, Praktikanten im Pflichtpraktikum und Langzeitarbeitslose in den ersten 6 Monaten sind vom Mindestlohn ausgenommen.
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zum Lohnrechner" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihren Nettolohn
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren kostenlosen Lohnrechner 2026 für eine präzise Berechnung. Für Stundenlohn und Monatslohn.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
