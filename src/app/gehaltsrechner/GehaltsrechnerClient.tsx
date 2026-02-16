"use client";

import { useState } from "react";
import { Calculator as CalcIcon, BookOpen, Info, TrendingUp } from "lucide-react";
import Link from "next/link";
import { BruttoNettoForm } from "@/components/calculator/BruttoNettoForm";
import { CalculatorResult } from "@/components/calculator/CalculatorResult";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { type CalculatorResult as CalculatorResultType } from "@/lib/tax";

export default function GehaltsrechnerClient() {
  const [result, setResult] = useState<CalculatorResultType | null>(null);

  // FAQ data specific to Gehaltsrechner - focused on Angestellte & Gehalt
  const faqs = [
    {
      question: "Wie berechne ich mein Nettogehalt als Angestellter?",
      answer: "Um Ihr Nettogehalt als Angestellter zu berechnen, geben Sie Ihr monatliches oder jährliches Bruttogehalt in den Gehaltsrechner ein. Wählen Sie dann Ihre Steuerklasse (1-6) und Ihr Bundesland aus. Der Rechner zieht automatisch alle gesetzlichen Abzüge ab: Lohnsteuer, Solidaritätszuschlag, gegebenenfalls Kirchensteuer sowie die Sozialversicherungsbeiträge für Renten-, Kranken-, Pflege- und Arbeitslosenversicherung. Das Ergebnis zeigt Ihr tatsächliches Nettogehalt, das auf Ihrem Konto landet."
    },
    {
      question: "Wie wirkt sich eine Gehaltserhöhung auf mein Netto aus?",
      answer: "Eine Gehaltserhöhung führt nicht 1:1 zu mehr Netto. Durch den progressiven Steuersatz in Deutschland wird jeder zusätzliche Euro stärker besteuert. Bei einer Erhöhung von 500 EUR brutto bleiben in Steuerklasse 1 je nach Gehaltshöhe nur etwa 250-300 EUR netto übrig. Je höher Ihr Gehalt, desto geringer der prozentuale Netto-Zuwachs. Nutzen Sie unseren Gehaltsrechner, um verschiedene Gehaltsszenarien durchzuspielen und die tatsächliche Netto-Auswirkung einer Gehaltserhöhung zu berechnen."
    },
    {
      question: "Wie hoch ist mein Nettogehalt bei 3000 Euro brutto?",
      answer: "Bei einem Bruttogehalt von 3.000 EUR monatlich bleibt je nach Steuerklasse unterschiedlich viel netto übrig. In Steuerklasse 1 (ledig, kinderlos) sind es etwa 2.050 EUR netto. In Steuerklasse 3 (verheiratet, Partner verdient weniger) circa 2.280 EUR. In Steuerklasse 5 (verheiratet, Partner verdient mehr) nur etwa 1.700 EUR. Diese Werte gelten für 2026 ohne Kirchensteuer und können je nach Bundesland und Krankenkasse leicht variieren. Nutzen Sie unseren Gehaltsrechner für eine exakte Berechnung Ihrer individuellen Situation."
    },
    {
      question: "Wird das 13. Gehalt oder Weihnachtsgeld anders besteuert?",
      answer: "Ja, Sonderzahlungen wie das 13. Gehalt, Weihnachtsgeld oder Urlaubsgeld werden steuerlich als sonstige Bezüge behandelt und nach der Jahrestabelle versteuert. Das bedeutet: Der Arbeitgeber berechnet die Jahressteuer mit und ohne Sonderzahlung und zieht die Differenz als Lohnsteuer ab. Dadurch kann der Steuersatz auf Sonderzahlungen höher ausfallen als auf das reguläre Monatsgehalt. Sozialversicherungsbeiträge fallen ebenfalls an, solange die Beitragsbemessungsgrenze nicht überschritten ist."
    },
    {
      question: "Wie vergleiche ich Gehaltsangebote bei einem Jobwechsel?",
      answer: "Um Gehaltsangebote zu vergleichen, sollten Sie nicht nur das Bruttogehalt betrachten. Berechnen Sie zunächst das Nettogehalt beider Angebote mit unserem Gehaltsrechner. Berücksichtigen Sie dann zusätzliche Leistungen: Dienstwagen, Jobticket, betriebliche Altersvorsorge, Bonuszahlungen oder Aktienoptionen. Achten Sie auch auf den Arbeitgeberstandort (Kirchensteuer variiert nach Bundesland) und ob sich durch den Jobwechsel Ihre Steuerklasse oder Versicherungssituation ändert. Ein höheres Bruttogehalt bedeutet nicht automatisch mehr Netto."
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
        title="Gehaltsrechner 2026 — Für Angestellte & Beamte"
        subtitle="Berechnen Sie Ihr Nettogehalt als Angestellter"
        description="Speziell für Festgehalt: Vergleichen Sie Gehaltsangebote, planen Sie Gehaltsverhandlungen und berechnen Sie Ihr Jahresnettogehalt."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Unser Gehaltsrechner 2026 ist speziell auf Angestellte und Beamte mit festem Monatsgehalt zugeschnitten. Berechnen Sie präzise Ihr Nettogehalt aus Ihrem Jahres- oder Monatsbrutto unter Berücksichtigung aller Steuerklassen, Ihres Bundeslands und der aktuellen Sozialversicherungsbeiträge.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ideal für Gehaltsverhandlungen, den Vergleich von Jobangeboten oder die Planung einer Gehaltserhöhung. Ermitteln Sie, wie sich Ihr 13. Gehalt, Weihnachtsgeld oder eine Beförderung auf Ihr Netto auswirken. Die Berechnungen basieren auf den aktuellen Steuertabellen und Beitragssätzen für 2026.
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

      {/* Link to pillar page */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihr Nettogehalt
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren kostenlosen Gehaltsrechner 2026 für eine präzise Berechnung. Einfach, schnell und zuverlässig.
            </p>
            <Link href="/" className="inline-block text-[#DD0000] hover:underline font-medium mt-2">
              Zum allgemeinen Brutto-Netto-Rechner &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
