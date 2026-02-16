"use client";

import { useState } from "react";
import { BookOpen, Users, Calculator as CalcIcon, TrendingUp, Info, PiggyBank, Briefcase, Clock, Search, ArrowLeftRight } from "lucide-react";
import Link from "next/link";
import { BruttoNettoForm } from "@/components/calculator/BruttoNettoForm";
import { CalculatorResult } from "@/components/calculator/CalculatorResult";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { type CalculatorResult as CalculatorResultType } from "@/lib/tax";

export default function HomePage() {
  const [result, setResult] = useState<CalculatorResultType | null>(null);

  // FAQ data
  const faqs = [
    {
      question: "Wie funktioniert der Brutto-Netto-Rechner?",
      answer: "Der Brutto-Netto-Rechner berechnet Ihr Nettoeinkommen aus Ihrem Bruttogehalt. Geben Sie Ihr Bruttogehalt, Ihre Steuerklasse und Ihr Bundesland ein. Der Rechner zieht automatisch alle Steuern (Lohnsteuer, Solidaritätszuschlag, Kirchensteuer) und Sozialversicherungsbeiträge (Renten-, Kranken-, Pflege- und Arbeitslosenversicherung) ab. Das Ergebnis zeigt Ihr monatliches oder jährliches Nettoeinkommen sowie eine detaillierte Aufschlüsselung aller Abzüge."
    },
    {
      question: "Welche Steuerklasse habe ich?",
      answer: "Ihre Steuerklasse hängt von Ihrem Familienstand ab: Steuerklasse 1 für Ledige und Geschiedene, Steuerklasse 2 für Alleinerziehende, Steuerklasse 3 für Verheiratete mit höherem Einkommen (Partner in Klasse 5), Steuerklasse 4 für Verheiratete mit ähnlichem Einkommen, Steuerklasse 5 für Verheiratete mit niedrigerem Einkommen (Partner in Klasse 3), und Steuerklasse 6 für ein zweites oder weiteres Arbeitsverhältnis. Seit 2023 entfällt die automatische Steuerklasse 3/5 für Ehepaare."
    },
    {
      question: "Was ist der Unterschied zwischen brutto und netto?",
      answer: "Brutto ist Ihr Gehalt vor Abzügen, also der Betrag, den Ihr Arbeitgeber für Ihre Arbeit zahlt. Netto ist Ihr Gehalt nach Abzügen, also der Betrag, der tatsächlich auf Ihrem Konto landet. Von Ihrem Bruttogehalt werden Steuern (Lohnsteuer, Solidaritätszuschlag, ggf. Kirchensteuer) und Sozialversicherungsbeiträge (Renten-, Kranken-, Pflege- und Arbeitslosenversicherung) abgezogen. Die Differenz zwischen brutto und netto liegt je nach Steuerklasse und Gehaltshöhe typischerweise zwischen 30% und 50%."
    },
    {
      question: "Wie hoch sind die Sozialabgaben 2026?",
      answer: "2026 betragen die Sozialversicherungsbeiträge in Deutschland: Rentenversicherung 18,6% (Arbeitnehmer zahlt 9,3%), Krankenversicherung 14,6% plus kassenindividueller Zusatzbeitrag von durchschnittlich 2,9% (gesamt ca. 17,5%, Arbeitnehmer zahlt ca. 8,75%), Pflegeversicherung 3,6% (Arbeitnehmer zahlt 1,8%, Kinderlose ab 23 Jahren zahlen einen Zuschlag von 0,6%), und Arbeitslosenversicherung 2,6% (Arbeitnehmer zahlt 1,3%). Die Beitragsbemessungsgrenze liegt 2026 bei 8.450 EUR monatlich (einheitlich)."
    },
    {
      question: "Was ist der Grundfreibetrag?",
      answer: "Der Grundfreibetrag ist der Teil Ihres Einkommens, der steuerfrei bleibt. 2026 beträgt der Grundfreibetrag 12.348 EUR pro Jahr. Erst für Einkommen oberhalb dieses Betrags fällt Einkommensteuer an. Der Grundfreibetrag sichert das Existenzminimum und wird jährlich an die Inflation angepasst. Für Verheiratete verdoppelt sich der Grundfreibetrag auf 24.696 EUR, wenn sie zusammen veranlagt werden. Der Grundfreibetrag wird automatisch in die Lohnsteuerberechnung einbezogen."
    },
    {
      question: "Wie wird die Kirchensteuer berechnet?",
      answer: "Die Kirchensteuer wird auf Ihre Lohnsteuer erhoben und beträgt je nach Bundesland 8% oder 9% der Lohnsteuer. In Bayern und Baden-Württemberg sind es 8%, in allen anderen Bundesländern 9%. Die Kirchensteuer wird nur fällig, wenn Sie Mitglied einer steuererhebenden Religionsgemeinschaft sind (römisch-katholische Kirche, evangelische Landeskirchen, jüdische Gemeinden, freireligiöse Gemeinden). Beispiel: Bei 200 EUR Lohnsteuer und 9% Kirchensteuersatz zahlen Sie 18 EUR Kirchensteuer monatlich."
    },
    {
      question: "Was ist der Solidaritätszuschlag?",
      answer: "Der Solidaritätszuschlag (Soli) beträgt 5,5% der Lohnsteuer. Seit 2021 entfällt der Soli für ca. 90% der Steuerzahler durch eine Freigrenze. Diese liegt 2026 bei 20.350 EUR Jahreseinkommen (Steuerklasse 1). Erst wenn Ihre Lohnsteuer die Freigrenze übersteigt, wird Soli fällig. Der Soli wurde 1991 zur Finanzierung der deutschen Wiedervereinigung eingeführt. Für Spitzenverdiener kann der Soli mehrere hundert Euro monatlich betragen."
    },
    {
      question: "Wie ändert sich mein Nettoeinkommen bei einem Jobwechsel?",
      answer: "Bei einem Jobwechsel kann sich Ihr Nettoeinkommen deutlich ändern, selbst wenn das Bruttogehalt gleich bleibt. Faktoren sind: Ein höheres Bruttogehalt führt durch den progressiven Steuersatz zu einem überproportional höheren Steuerabzug. Wechseln Sie von Steuerklasse 1 zu 3 (Heirat), bleibt mehr netto übrig. Zusatzleistungen wie Dienstwagen, Jobticket oder vermögenswirksame Leistungen beeinflussen das Nettogehalt. Nutzen Sie unseren Rechner, um verschiedene Szenarien zu vergleichen und das beste Angebot zu identifizieren."
    }
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Brutto Netto Rechner 2026",
    "url": "https://gehaltly.de",
    "description": "Kostenloser Brutto-Netto-Rechner 2026 für Deutschland. Berechnen Sie Ihr Nettogehalt aus dem Bruttogehalt mit allen Steuerklassen und Bundesländern.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Berechnung für alle Steuerklassen",
      "Alle 16 Bundesländer",
      "Kirchensteuer-Berechnung",
      "Sozialversicherungsbeiträge 2026",
      "Monatliche und jährliche Berechnung",
      "Detaillierte Aufschlüsselung"
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup schema={webAppSchema} />

      {/* Compact Hero */}
      <PageHero
        title="Brutto Netto Rechner 2026"
        subtitle="Berechnen Sie kostenlos Ihr Nettogehalt"
      />

      {/* Calculator Section - IMMEDIATELY after hero */}
      <section className="py-4 md:py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Form */}
              <div>
                <div className="bg-background rounded-lg border p-4 md:p-6 shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Ihre Eingaben</h2>
                  <BruttoNettoForm onResult={setResult} />
                </div>
              </div>

              {/* Right Column - Result */}
              <div>
                {result ? (
                  <CalculatorResult result={result} isMonthly={true} />
                ) : (
                  <div className="bg-background rounded-lg border p-6 shadow-sm h-full flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <CalcIcon className="w-12 h-12 mx-auto mb-3 opacity-20" />
                      <p className="text-base font-medium mb-1">Bereit zum Berechnen</p>
                      <p className="text-sm">
                        Geben Sie Ihre Daten ein, um Ihr Nettogehalt zu berechnen
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - AFTER calculator */}
      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-base text-muted-foreground leading-relaxed mb-3">
              Unser Brutto-Netto-Rechner 2026 zeigt Ihnen präzise, wie viel von Ihrem Bruttogehalt nach Abzug von Steuern und Sozialversicherungsbeiträgen übrig bleibt. Geben Sie einfach Ihr Bruttogehalt ein und wählen Sie Ihre Steuerklasse sowie Ihr Bundesland aus.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Die Berechnungen basieren auf den aktuellen Steuertabellen und Sozialversicherungsbeiträgen für 2026 und berücksichtigen den erhöhten Grundfreibetrag von 12.348 EUR sowie die aktuellen Beitragsbemessungsgrenzen.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Navigation - "Welchen Rechner benötigen Sie?" */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Welchen Rechner benötigen Sie?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/gehaltsrechner" className="group block bg-background rounded-lg border p-5 shadow-sm hover:shadow-md hover:border-[#DD0000]/30 transition-all">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-950/30 p-2 shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-[#DD0000] transition-colors">Gehaltsrechner</h3>
                    <p className="text-sm text-muted-foreground mt-1">Für Angestellte & Beamte mit festem Monatsgehalt</p>
                  </div>
                </div>
              </Link>
              <Link href="/lohnrechner" className="group block bg-background rounded-lg border p-5 shadow-sm hover:shadow-md hover:border-[#DD0000]/30 transition-all">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 dark:bg-green-950/30 p-2 shrink-0">
                    <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-[#DD0000] transition-colors">Lohnrechner</h3>
                    <p className="text-sm text-muted-foreground mt-1">Für Stundenlohn, Mindestlohn & variable Vergütung</p>
                  </div>
                </div>
              </Link>
              <Link href="/netto-rechner" className="group block bg-background rounded-lg border p-5 shadow-sm hover:shadow-md hover:border-[#DD0000]/30 transition-all">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-950/30 p-2 shrink-0">
                    <Search className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-[#DD0000] transition-colors">Netto-Rechner</h3>
                    <p className="text-sm text-muted-foreground mt-1">Alle Abzüge verstehen & Netto optimieren</p>
                  </div>
                </div>
              </Link>
              <Link href="/netto-brutto-rechner" className="group block bg-background rounded-lg border p-5 shadow-sm hover:shadow-md hover:border-[#DD0000]/30 transition-all">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-100 dark:bg-amber-950/30 p-2 shrink-0">
                    <ArrowLeftRight className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-[#DD0000] transition-colors">Netto-Brutto-Rechner</h3>
                    <p className="text-sm text-muted-foreground mt-1">Wunschnetto: Wie viel Brutto brauche ich?</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks currentHref="/" count={6} title="Weitere Gehaltsrechner" />

      {/* Glossary Section */}
      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold mb-6">Wichtige Begriffe erklärt</h2>

            <ContentSection
              heading="Grundfreibetrag 2026"
              icon={<BookOpen className="w-5 h-5" />}
              body="Der Grundfreibetrag ist der Teil des Einkommens, der steuerfrei bleibt und das Existenzminimum sichert. Für 2026 wurde der Grundfreibetrag auf 12.348 EUR angehoben. Das bedeutet, dass die ersten 12.348 EUR Ihres Jahreseinkommens vollständig steuerfrei sind. Erst für das darüber hinausgehende Einkommen wird Einkommensteuer fällig."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Beispiel:</strong> Bei einem Jahreseinkommen von 30.000 EUR sind die ersten 12.348 EUR steuerfrei. Nur die verbleibenden 17.652 EUR unterliegen der Einkommensteuer. Für Ehepaare verdoppelt sich der Grundfreibetrag auf 24.696 EUR.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Kinderfreibetrag 2026"
              icon={<Users className="w-5 h-5" />}
              body="Der Kinderfreibetrag beträgt 2026 insgesamt 9.756 EUR pro Kind (4.878 EUR je Elternteil). Dieser setzt sich aus dem Kinderfreibetrag von 6.612 EUR und dem BEA-Freibetrag von 3.144 EUR zusammen."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Wichtig:</strong> Das Finanzamt prüft automatisch, ob der Kinderfreibetrag oder das Kindergeld (2026: 250 EUR pro Kind monatlich) günstiger ist.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Sozialversicherungsbeiträge 2026"
              icon={<PiggyBank className="w-5 h-5" />}
              body="Die Sozialversicherung in Deutschland umfasst vier Säulen: Rentenversicherung, Krankenversicherung, Pflegeversicherung und Arbeitslosenversicherung. Arbeitnehmer und Arbeitgeber teilen sich die Beiträge grundsätzlich je zur Hälfte."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-muted rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-1">Rentenversicherung</h4>
                  <p className="text-sm text-muted-foreground">Gesamt: <strong>18,6%</strong> | Ihr Anteil: <strong>9,3%</strong></p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-1">Krankenversicherung</h4>
                  <p className="text-sm text-muted-foreground">Gesamt: <strong>14,6% + Zusatz</strong> | Ihr Anteil: <strong>~8,75%</strong></p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-1">Pflegeversicherung</h4>
                  <p className="text-sm text-muted-foreground">Gesamt: <strong>3,6%</strong> | Ihr Anteil: <strong>1,8%</strong></p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <h4 className="font-semibold text-sm mb-1">Arbeitslosenversicherung</h4>
                  <p className="text-sm text-muted-foreground">Gesamt: <strong>2,6%</strong> | Ihr Anteil: <strong>1,3%</strong></p>
                </div>
              </div>
            </ContentSection>

            <ContentSection
              heading="Steuerklassen in Deutschland"
              icon={<Info className="w-5 h-5" />}
              body="In Deutschland gibt es sechs Steuerklassen, die sich nach Familienstand und Anzahl der Arbeitsverhältnisse richten."
            >
              <div className="space-y-2">
                <div className="border-l-4 border-blue-500 pl-3 py-1">
                  <h4 className="font-semibold text-sm">Steuerklasse 1</h4>
                  <p className="text-xs text-muted-foreground">Ledige, geschiedene oder verwitwete Arbeitnehmer</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3 py-1">
                  <h4 className="font-semibold text-sm">Steuerklasse 2</h4>
                  <p className="text-xs text-muted-foreground">Alleinerziehende mit Entlastungsbetrag</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3 py-1">
                  <h4 className="font-semibold text-sm">Steuerklasse 3</h4>
                  <p className="text-xs text-muted-foreground">Verheiratete, wenn Partner Steuerklasse 5 hat</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3 py-1">
                  <h4 className="font-semibold text-sm">Steuerklasse 4</h4>
                  <p className="text-xs text-muted-foreground">Verheiratete mit ähnlichem Einkommen</p>
                </div>
                <div className="border-l-4 border-red-500 pl-3 py-1">
                  <h4 className="font-semibold text-sm">Steuerklasse 5</h4>
                  <p className="text-xs text-muted-foreground">Verheiratete, wenn Partner Steuerklasse 3 hat</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-3 py-1">
                  <h4 className="font-semibold text-sm">Steuerklasse 6</h4>
                  <p className="text-xs text-muted-foreground">Zweites oder weiteres Arbeitsverhältnis</p>
                </div>
              </div>
            </ContentSection>

            <ContentSection
              heading="Beitragsbemessungsgrenze 2026"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Die Beitragsbemessungsgrenze ist das maximale Einkommen, bis zu dem Sozialversicherungsbeiträge berechnet werden. 2026: 8.450 EUR/Monat (einheitlich)."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Was bedeutet das?</strong> Einkommen über der Grenze ist beitragsfrei. Für die Krankenversicherung gilt eine separate Grenze (2026: 5.812,50 EUR/Monat).
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zum Brutto-Netto-Rechner" />
    </>
  );
}
