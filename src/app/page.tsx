"use client";

import { useState } from "react";
import { BookOpen, Users, Calculator as CalcIcon, TrendingUp, Info, PiggyBank } from "lucide-react";
import { BruttoNettoForm } from "@/components/calculator/BruttoNettoForm";
import { CalculatorResult } from "@/components/calculator/CalculatorResult";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
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
      answer: "2026 betragen die Sozialversicherungsbeiträge in Deutschland: Rentenversicherung 18,6% (Arbeitnehmer zahlt 9,3%), Krankenversicherung 14,6% plus kassenindividueller Zusatzbeitrag von durchschnittlich 1,7% (gesamt ca. 16,3%, Arbeitnehmer zahlt ca. 8,15%), Pflegeversicherung 3,4% (Arbeitnehmer zahlt 1,7%, Kinderlose ab 23 Jahren zahlen einen Zuschlag von 0,6%), und Arbeitslosenversicherung 2,6% (Arbeitnehmer zahlt 1,3%). Die Beitragsbemessungsgrenze liegt 2026 bei 8.050 EUR monatlich (West) bzw. 7.900 EUR (Ost)."
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
      answer: "Der Solidaritätszuschlag (Soli) beträgt 5,5% der Lohnsteuer. Seit 2021 entfällt der Soli für ca. 90% der Steuerzahler durch eine Freigrenze. Diese liegt 2026 bei 18.130 EUR Jahreseinkommen (Steuerklasse 1). Erst wenn Ihre Lohnsteuer die Freigrenze übersteigt, wird Soli fällig. Der Soli wurde 1991 zur Finanzierung der deutschen Wiedervereinigung eingeführt. Für Spitzenverdiener kann der Soli mehrere hundert Euro monatlich betragen."
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

  // BreadcrumbList Schema (handled by Breadcrumbs component)

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup schema={webAppSchema} />

      {/* Breadcrumbs - Just "Startseite" for homepage */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[]} />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Brutto Netto Rechner 2026"
        subtitle="Berechnen Sie kostenlos Ihr Nettogehalt"
        description="Der präzise Gehaltsrechner für Deutschland mit allen Steuerklassen und Bundesländern. Inklusive detaillierter Aufschlüsselung aller Steuern und Sozialabgaben."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Unser Brutto-Netto-Rechner 2026 zeigt Ihnen präzise, wie viel von Ihrem Bruttogehalt nach Abzug von Steuern und Sozialversicherungsbeiträgen übrig bleibt. Geben Sie einfach Ihr Bruttogehalt ein und wählen Sie Ihre Steuerklasse sowie Ihr Bundesland aus. Der Rechner berücksichtigt automatisch alle relevanten Faktoren wie Lohnsteuer, Solidaritätszuschlag, Kirchensteuer sowie die Beiträge zur Renten-, Kranken-, Pflege- und Arbeitslosenversicherung.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Die Berechnungen basieren auf den aktuellen Steuertabellen und Sozialversicherungsbeiträgen für 2026 und berücksichtigen den erhöhten Grundfreibetrag von 12.348 EUR sowie die aktuellen Beitragsbemessungsgrenzen.
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
                  <h2 className="text-2xl font-bold mb-6">Ihre Eingaben</h2>
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
                      <p className="text-lg font-medium mb-2">Bereit zum Berechnen</p>
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

      {/* Related Calculators */}
      <RelatedLinks currentHref="/" count={6} title="Weitere Gehaltsrechner" />

      {/* Glossary Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold mb-8">Wichtige Begriffe erklärt</h2>

            {/* Grundfreibetrag */}
            <ContentSection
              heading="Grundfreibetrag 2026"
              icon={<BookOpen className="w-5 h-5" />}
              body="Der Grundfreibetrag ist der Teil des Einkommens, der steuerfrei bleibt und das Existenzminimum sichert. Für 2026 wurde der Grundfreibetrag auf 12.348 EUR angehoben. Das bedeutet, dass die ersten 12.348 EUR Ihres Jahreseinkommens vollständig steuerfrei sind. Erst für das darüber hinausgehende Einkommen wird Einkommensteuer fällig."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Beispiel:</strong> Bei einem Jahreseinkommen von 30.000 EUR sind die ersten 12.348 EUR steuerfrei. Nur die verbleibenden 17.652 EUR unterliegen der Einkommensteuer. Für Ehepaare, die zusammen veranlagt werden, verdoppelt sich der Grundfreibetrag auf 24.696 EUR.
                </p>
              </div>
            </ContentSection>

            {/* Kinderfreibetrag */}
            <ContentSection
              heading="Kinderfreibetrag 2026"
              icon={<Users className="w-5 h-5" />}
              body="Der Kinderfreibetrag beträgt 2026 insgesamt 9.756 EUR pro Kind (4.878 EUR je Elternteil). Dieser Freibetrag setzt sich aus zwei Komponenten zusammen: dem Kinderfreibetrag von 6.612 EUR für das sächliche Existenzminimum des Kindes und dem Freibetrag für Betreuung, Erziehung und Ausbildung (BEA-Freibetrag) von 3.144 EUR."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Wichtig:</strong> Das Finanzamt prüft automatisch im Rahmen der Einkommensteuererklärung, ob der Kinderfreibetrag oder das ausgezahlte Kindergeld für Sie günstiger ist (Günstigerprüfung). Der Kinderfreibetrag wirkt sich besonders bei höheren Einkommen steuermindernd aus. Während des Jahres erhalten Eltern zunächst das Kindergeld (2026: 250 EUR pro Kind monatlich).
                </p>
              </div>
            </ContentSection>

            {/* Sozialversicherungsbeiträge */}
            <ContentSection
              heading="Sozialversicherungsbeiträge 2026"
              icon={<PiggyBank className="w-5 h-5" />}
              body="Die Sozialversicherung in Deutschland umfasst vier Säulen: Rentenversicherung, Krankenversicherung, Pflegeversicherung und Arbeitslosenversicherung. Arbeitnehmer und Arbeitgeber teilen sich die Beiträge grundsätzlich je zur Hälfte."
            >
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Rentenversicherung</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Gesamtbeitrag: <strong>18,6%</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ihr Anteil: <strong>9,3%</strong>
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Krankenversicherung</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Gesamtbeitrag: <strong>14,6% + Zusatzbeitrag</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ihr Anteil: <strong>ca. 8,15%</strong>
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Pflegeversicherung</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Gesamtbeitrag: <strong>3,4%</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ihr Anteil: <strong>1,7%</strong> (+ 0,6% Zuschlag für Kinderlose ab 23)
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Arbeitslosenversicherung</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Gesamtbeitrag: <strong>2,6%</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ihr Anteil: <strong>1,3%</strong>
                    </p>
                  </div>
                </div>
              </div>
            </ContentSection>

            {/* Steuerklassen */}
            <ContentSection
              heading="Steuerklassen in Deutschland"
              icon={<Info className="w-5 h-5" />}
              body="In Deutschland gibt es sechs Steuerklassen, die sich nach Familienstand und Anzahl der Arbeitsverhältnisse richten. Die Steuerklasse bestimmt, wie viel Lohnsteuer monatlich vom Gehalt einbehalten wird."
            >
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold">Steuerklasse 1</h4>
                  <p className="text-sm text-muted-foreground">
                    Ledige, geschiedene oder verwitwete Arbeitnehmer ohne Kinder
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-semibold">Steuerklasse 2</h4>
                  <p className="text-sm text-muted-foreground">
                    Alleinerziehende mit Entlastungsbetrag (mindestens ein Kind im Haushalt)
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h4 className="font-semibold">Steuerklasse 3</h4>
                  <p className="text-sm text-muted-foreground">
                    Verheiratete/Verpartnerte, wenn Partner Steuerklasse 5 hat oder nicht arbeitet
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <h4 className="font-semibold">Steuerklasse 4</h4>
                  <p className="text-sm text-muted-foreground">
                    Verheiratete/Verpartnerte mit ähnlichem Einkommen (Standard seit 2023)
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h4 className="font-semibold">Steuerklasse 5</h4>
                  <p className="text-sm text-muted-foreground">
                    Verheiratete/Verpartnerte, wenn Partner Steuerklasse 3 hat (höhere Abzüge)
                  </p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4 py-2">
                  <h4 className="font-semibold">Steuerklasse 6</h4>
                  <p className="text-sm text-muted-foreground">
                    Für ein zweites oder weiteres Arbeitsverhältnis (höchste Abzüge)
                  </p>
                </div>
              </div>
            </ContentSection>

            {/* Beitragsbemessungsgrenze */}
            <ContentSection
              heading="Beitragsbemessungsgrenze 2026"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Die Beitragsbemessungsgrenze ist das maximale Einkommen, bis zu dem Sozialversicherungsbeiträge berechnet werden. Für 2026 liegt sie bei 8.050 EUR monatlich (96.600 EUR jährlich) in den alten Bundesländern und 7.900 EUR monatlich (94.800 EUR jährlich) in den neuen Bundesländern."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Was bedeutet das?</strong> Wenn Ihr monatliches Bruttogehalt über der Beitragsbemessungsgrenze liegt, zahlen Sie Sozialversicherungsbeiträge nur bis zu dieser Grenze. Der darüber liegende Teil Ihres Gehalts ist beitragsfrei. Dies gilt für Renten-, Arbeitslosen- und Pflegeversicherung. Für die Krankenversicherung gilt eine separate, höhere Grenze (2026: 5.175 EUR monatlich).
                </p>
              </div>
            </ContentSection>

            {/* Pflegeversicherung */}
            <ContentSection
              heading="Pflegeversicherung"
              icon={<Users className="w-5 h-5" />}
              body="Der Beitragssatz zur Pflegeversicherung beträgt 2026 insgesamt 3,4%. Arbeitnehmer zahlen grundsätzlich 1,7% ihres Bruttogehalts. Kinderlose Arbeitnehmer ab 23 Jahren zahlen zusätzlich einen Zuschlag von 0,6%, insgesamt also 2,3%."
            >
              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 space-y-3">
                <p className="text-sm text-purple-900 dark:text-purple-100">
                  <strong>Wichtig zu wissen:</strong>
                </p>
                <ul className="text-sm text-purple-900 dark:text-purple-100 space-y-2 list-disc list-inside">
                  <li>Der Zuschlag für Kinderlose wurde 2022 erhöht und beträgt nun 0,6% (zuvor 0,25%)</li>
                  <li>Als kinderlos gilt, wer keine eigenen Kinder hat - unabhängig davon, ob Stiefkinder im Haushalt leben</li>
                  <li>In Sachsen tragen Arbeitnehmer einen höheren Anteil (2,2% statt 1,7%), dafür ist dort der Buß- und Bettag ein gesetzlicher Feiertag</li>
                  <li>Die Pflegeversicherung wird bis zur Beitragsbemessungsgrenze berechnet</li>
                </ul>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zum Brutto-Netto-Rechner" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihr Nettogehalt
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren kostenlosen Brutto-Netto-Rechner 2026 für eine präzise Berechnung Ihres Nettogehalts. Alle Steuerklassen, alle Bundesländer, alle Optionen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
