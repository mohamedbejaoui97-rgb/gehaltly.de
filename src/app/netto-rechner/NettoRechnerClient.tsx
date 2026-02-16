"use client";

import { useState } from "react";
import { Calculator as CalcIcon, BookOpen, Percent, TrendingDown } from "lucide-react";
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

export default function NettoRechnerClient() {
  const [result, setResult] = useState<CalculatorResultType | null>(null);

  // FAQ data specific to Netto Rechner
  const faqs = [
    {
      question: "Wie berechne ich mein Netto?",
      answer: "Um Ihr Netto zu berechnen, geben Sie Ihr monatliches oder jährliches Bruttogehalt in den Netto Rechner ein. Wählen Sie dann Ihre Steuerklasse (1 bis 6) und Ihr Bundesland aus. Der Rechner ermittelt automatisch alle Abzüge vom Brutto: Lohnsteuer, Solidaritätszuschlag, gegebenenfalls Kirchensteuer sowie die Sozialversicherungsbeiträge (Renten-, Kranken-, Pflege- und Arbeitslosenversicherung). Das Ergebnis zeigt Ihr Netto - den Betrag, der tatsächlich auf Ihr Konto überwiesen wird."
    },
    {
      question: "Wie viel Prozent werden vom Brutto abgezogen?",
      answer: "Der prozentuale Abzug vom Bruttogehalt hängt stark von Ihrer Steuerklasse und Gehaltshöhe ab. Bei einem durchschnittlichen Gehalt werden etwa 30-35% abgezogen. Dies setzt sich zusammen aus: ca. 20% Sozialversicherungsbeiträge (Renten-, Kranken-, Pflege- und Arbeitslosenversicherung), ca. 10-15% Lohnsteuer (je nach Steuerklasse und Einkommen), plus Solidaritätszuschlag und ggf. Kirchensteuer. Bei höheren Einkommen steigt der Abzug aufgrund des progressiven Steuersatzes auf bis zu 50%. In Steuerklasse 3 sind die Abzüge niedriger, in Steuerklasse 5 und 6 höher."
    },
    {
      question: "Was ist der Unterschied zwischen Netto und Brutto?",
      answer: "Brutto ist Ihr Gehalt vor allen Abzügen - der Betrag, den Ihr Arbeitgeber für Ihre Arbeit bezahlt und der in Ihrem Arbeitsvertrag steht. Netto ist Ihr Gehalt nach allen Abzügen - der Betrag, der tatsächlich auf Ihrem Konto landet und Ihnen zum Leben zur Verfügung steht. Vom Brutto werden Steuern (Lohnsteuer, Solidaritätszuschlag, Kirchensteuer) und Sozialversicherungsbeiträge abgezogen. Die Differenz zwischen brutto und netto beträgt typischerweise 30-50% des Bruttogehalts."
    },
    {
      question: "Warum ist mein Netto so niedrig?",
      answer: "Ein niedriges Netto im Verhältnis zum Brutto kann mehrere Ursachen haben: Hohe Steuerklasse (z.B. Steuerklasse 5 oder 6 führt zu hohen Lohnsteuerabzügen), hohes Bruttogehalt (durch progressive Besteuerung steigt der Steuersatz mit dem Einkommen), Kirchensteuer (zusätzlich 8-9% der Lohnsteuer), hoher Zusatzbeitrag der Krankenkasse, Zuschlag zur Pflegeversicherung für Kinderlose (0,6%), oder eingetragene Freibeträge wurden nicht berücksichtigt. Bei Steuerklasse 5 erhalten Sie bei der Steuererklärung oft eine Rückzahlung. Nutzen Sie unseren Rechner, um verschiedene Szenarien zu vergleichen."
    },
    {
      question: "Wie kann ich mehr Netto vom Brutto bekommen?",
      answer: "Es gibt mehrere legale Möglichkeiten, Ihr Netto zu optimieren: Wechsel der Steuerklasse bei Verheirateten (z.B. von 4/4 zu 3/5, wenn ein Partner deutlich mehr verdient), Freibeträge beim Finanzamt eintragen lassen (für Werbungskosten über 1.230 EUR, Kinderbetreuungskosten, außergewöhnliche Belastungen), steuerfreie oder -begünstigte Gehaltsbestandteile nutzen (Jobticket, Dienstwagen, Essenszuschüsse, betriebliche Altersvorsorge, Kindergartenzuschuss), Kirchenaustritt (spart 8-9% der Lohnsteuer), oder Wechsel zu einer günstigeren Krankenkasse mit niedrigerem Zusatzbeitrag. Sprechen Sie mit Ihrem Arbeitgeber über Optimierungsmöglichkeiten."
    }
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Netto Rechner 2026",
    "url": "https://gehaltly.de/netto-rechner",
    "description": "Kostenloser Netto Rechner 2026 für Deutschland. Berechnen Sie Ihr Nettogehalt aus dem Bruttogehalt mit allen Abzügen.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Netto aus Brutto berechnen",
      "Alle Steuerklassen 1-6",
      "Detaillierte Abzugsberechnung",
      "Monatlich und jährlich",
      "Kirchensteuer-Option",
      "Aktuelle Steuersätze 2026"
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup schema={webAppSchema} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: "Netto Rechner", href: "/netto-rechner" }]} />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Netto Rechner 2026 — Abzüge verstehen & optimieren"
        subtitle="Alle Abzüge im Detail und Tipps zur Nettolohnoptimierung"
        description="Erfahren Sie genau, welche Steuern und Sozialabgaben von Ihrem Brutto abgezogen werden — und wie Sie mehr Netto herausholen."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Unser Netto Rechner 2026 zeigt Ihnen transparent, welche Steuern und Sozialabgaben von Ihrem Bruttogehalt abgezogen werden. Verstehen Sie im Detail, warum Ihr Netto so hoch oder niedrig ausfällt und welche Faktoren die größten Auswirkungen haben: Steuerklasse, Kirchensteuer, Krankenkassen-Zusatzbeitrag und Pflegeversicherungszuschlag.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nutzen Sie die detaillierte Abzugsübersicht, um Optimierungspotenzial zu erkennen. Erfahren Sie, wie Sie durch Steuerklassenwechsel, Freibeträge, steuerfreie Sachbezüge oder den Wechsel der Krankenkasse mehr Netto vom Brutto erhalten. Die Berechnungen basieren auf den aktuellen Steuertabellen und Beitragssätzen für 2026.
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
                  <h2 className="text-2xl font-bold mb-6">Ihre Brutto-Angaben</h2>
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
                      <p className="text-lg font-medium mb-2">Ihr Netto</p>
                      <p className="text-sm">
                        Geben Sie Ihr Brutto ein, um Ihr Netto zu berechnen
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
      <RelatedLinks currentHref="/netto-rechner" count={6} title="Weitere Netto-Rechner" />

      {/* Glossary Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">Wichtige Begriffe zur Netto-Berechnung</h2>

            {/* Nettogehalt */}
            <ContentSection
              heading="Nettogehalt - Ihr verfügbares Einkommen"
              icon={<BookOpen className="w-5 h-5" />}
              body="Das Nettogehalt ist der Betrag, der nach Abzug aller gesetzlichen Steuern und Sozialversicherungsbeiträge vom Bruttogehalt übrig bleibt. Es ist das Geld, das tatsächlich auf Ihrem Konto landet und Ihnen für Lebenshaltungskosten, Miete, Sparen und Konsum zur Verfügung steht. Das Nettogehalt wird auch als Auszahlungsbetrag bezeichnet und ist der wichtigste Wert für Ihre Finanzplanung."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Faustregel:</strong> Vom Bruttogehalt bleiben je nach Steuerklasse zwischen 50% und 70% als Netto übrig. Bei einem Bruttogehalt von 3.000 EUR sind das in Steuerklasse 1 etwa 2.050 EUR netto, in Steuerklasse 3 circa 2.280 EUR netto.
                </p>
              </div>
            </ContentSection>

            {/* Nettolohnoptimierung */}
            <ContentSection
              heading="Nettolohnoptimierung"
              icon={<Percent className="w-5 h-5" />}
              body="Unter Nettolohnoptimierung versteht man legale Maßnahmen, um das Nettogehalt bei gleichbleibendem Brutto zu erhöhen. Dies geschieht durch Umwandlung von steuerpflichtigem Gehalt in steuerfreie oder -begünstigte Leistungen. Beispiele sind: Jobticket (steuerfreie Zuschüsse zum öffentlichen Nahverkehr), Dienstwagen (oft steuerlich günstiger als Barlohn), Essenszuschüsse (bis zu 7,23 EUR pro Arbeitstag steuerfrei), betriebliche Altersvorsorge (Entgeltumwandlung spart Steuern und Sozialabgaben), Kindergartenzuschuss (steuerfrei bis 600 EUR monatlich) oder Sachbezüge (bis 50 EUR monatlich steuerfrei)."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Beispiel:</strong> Statt 200 EUR mehr Bruttolohn bekommen Sie ein Jobticket im Wert von 200 EUR. Vom zusätzlichen Bruttolohn würden nur etwa 100-120 EUR netto übrig bleiben, während Sie beim Jobticket den vollen Wert von 200 EUR steuerfrei erhalten.
                </p>
              </div>
            </ContentSection>

            {/* Nettolohnvereinbarung */}
            <ContentSection
              heading="Nettolohnvereinbarung"
              icon={<TrendingDown className="w-5 h-5" />}
              body="Eine Nettolohnvereinbarung (auch Nettolohnabrede genannt) ist eine Vereinbarung zwischen Arbeitgeber und Arbeitnehmer, bei der ein bestimmter Nettobetrag garantiert wird. Der Arbeitgeber übernimmt dabei alle Steuern und Sozialabgaben zusätzlich zum vereinbarten Nettolohn. Solche Vereinbarungen sind in Deutschland unüblich und für den Arbeitgeber sehr teuer, da er nicht nur die Arbeitgeberanteile, sondern auch die Arbeitnehmeranteile der Sozialversicherung sowie die gesamte Lohnsteuer trägt."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Wichtig:</strong> Nettolohnvereinbarungen sind steuerlich problematisch und werden vom Finanzamt oft nicht anerkannt. In den meisten Fällen wird ein Bruttolohn vereinbart. Wenn Sie ein bestimmtes Netto benötigen, nutzen Sie unseren Rechner, um das erforderliche Brutto zu ermitteln.
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zum Netto Rechner" />

      {/* Link to pillar page */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihr Netto
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren kostenlosen Netto Rechner 2026 für eine präzise Berechnung Ihres Nettogehalts.
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
