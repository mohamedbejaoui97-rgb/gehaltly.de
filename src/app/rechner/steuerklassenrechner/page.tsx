"use client";

import { useState } from "react";
import { Calculator as CalcIcon, Users, TrendingUp, Info, BookOpen, CheckCircle2 } from "lucide-react";
import { calculateGermanTax, type CalculatorResult as CalculatorResultType, type Steuerklasse } from "@/lib/tax";
import { SliderInput } from "@/components/calculator/SliderInput";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SteuerklassenrechnerPage() {
  const [bruttogehalt, setBruttogehalt] = useState(3500);
  const [results, setResults] = useState<Record<number, CalculatorResultType>>({});

  // Format currency in German format
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Parse German formatted number
  const parseCurrency = (value: string): number => {
    return parseFloat(value.replace(/\./g, "").replace(",", "."));
  };

  // Calculate for all 6 tax classes
  const calculateAllClasses = () => {
    const newResults: Record<number, CalculatorResultType> = {};

    for (let steuerklasse = 1; steuerklasse <= 6; steuerklasse++) {
      newResults[steuerklasse] = calculateGermanTax({
        bruttoeinkommen: bruttogehalt,
        abrechnungszeitraum: "monat",
        steuerklasse: steuerklasse as Steuerklasse,
        bundesland: "nordrhein-westfalen",
        kirchensteuer: false,
        alter: 30,
        kinder: steuerklasse === 2 ? 1 : 0, // Steuerklasse 2 has children
        krankenversicherung: "gesetzlich",
        kvZusatzbeitrag: 1.7,
        steuerfreibetrag: 0,
        geldwerterVorteil: 0,
      });
    }

    setResults(newResults);
  };

  // Calculate on mount and when bruttogehalt changes
  useState(() => {
    calculateAllClasses();
  });

  // Find the tax class with highest netto
  const bestTaxClass = Object.entries(results).reduce((best, [key, result]) => {
    if (!best || result.netto > best.netto) {
      return { class: parseInt(key), netto: result.netto };
    }
    return best;
  }, null as { class: number; netto: number } | null);

  // Tax class descriptions
  const taxClassInfo: Record<number, { title: string; description: string; forWhom: string }> = {
    1: {
      title: "Steuerklasse 1",
      description: "Ledige, geschiedene oder verwitwete Arbeitnehmer",
      forWhom: "Singles ohne Kinder"
    },
    2: {
      title: "Steuerklasse 2",
      description: "Alleinerziehende mit Kindern im Haushalt",
      forWhom: "Alleinerziehende (Entlastungsbetrag)"
    },
    3: {
      title: "Steuerklasse 3",
      description: "Verheiratete, wenn Partner Steuerklasse 5 hat oder nicht arbeitet",
      forWhom: "Besserverdiener in Ehe"
    },
    4: {
      title: "Steuerklasse 4",
      description: "Verheiratete mit ähnlichem Einkommen",
      forWhom: "Ehepaar mit gleichem Verdienst"
    },
    5: {
      title: "Steuerklasse 5",
      description: "Verheiratete, wenn Partner Steuerklasse 3 hat",
      forWhom: "Geringverdiener in Ehe"
    },
    6: {
      title: "Steuerklasse 6",
      description: "Für den zweiten und jeden weiteren Job",
      forWhom: "Zweites Arbeitsverhältnis"
    }
  };

  // FAQ data specific to Steuerklassen
  const faqs = [
    {
      question: "Welche Steuerklasse ist die beste?",
      answer: "Die 'beste' Steuerklasse hängt von Ihrer Lebenssituation ab. Für Singles ist Steuerklasse 1 standard, Alleinerziehende profitieren von Steuerklasse 2 durch den Entlastungsbetrag von 4.260 EUR. Verheiratete können zwischen Kombination 3/5 (wenn ein Partner deutlich mehr verdient) oder 4/4 (bei ähnlichen Gehältern) wählen. Die Steuerklasse beeinflusst nur die monatlichen Vorauszahlungen - die tatsächliche Steuerlast wird in der Jahressteuererklärung berechnet. Wichtig: Die richtige Wahl optimiert Ihren monatlichen Cashflow."
    },
    {
      question: "Steuerklasse 3 und 5 oder 4 und 4 - Was ist besser?",
      answer: "Kombination 3/5 lohnt sich, wenn ein Partner mindestens 60% des Gesamteinkommens verdient. Der Besserverdiener erhält in Klasse 3 deutlich mehr Netto, der Partner in Klasse 5 entsprechend weniger. Das gemeinsame Netto ist höher als bei 4/4. Kombination 4/4 ist fair bei ähnlichen Gehältern und vereinfacht die Steuererklärung. Seit 2020 gibt es auch 4/4 mit Faktor, was die individuelle Steuerlast bereits monatlich berücksichtigt. Bei Lohnersatzleistungen (Elterngeld, Arbeitslosengeld) ist die Steuerklassenwahl im Vorjahr wichtig, da diese sich am Netto orientieren."
    },
    {
      question: "Wie hoch sind die Abzüge in Steuerklasse 1?",
      answer: "In Steuerklasse 1 werden vom Bruttogehalt Lohnsteuer, Solidaritätszuschlag (meist durch Freibetrag entfallend), ggf. Kirchensteuer und Sozialversicherungsbeiträge abgezogen. Bei 3.000 EUR brutto bleiben etwa 2.050 EUR netto (ca. 68%). Bei 4.000 EUR brutto sind es ca. 2.590 EUR netto (65%). Je höher das Gehalt, desto höher der prozentuale Abzug durch die progressive Besteuerung. Die Grundfreibeträge (11.604 EUR für 2026) werden automatisch berücksichtigt. Zusätzliche Freibeträge können Sie beim Finanzamt eintragen lassen."
    },
    {
      question: "Wann sollte ich die Steuerklasse wechseln?",
      answer: "Ein Steuerklassenwechsel ist sinnvoll bei: Heirat (Wechsel von 1 zu 3/5 oder 4/4), Scheidung (zurück zu 1), Geburt eines Kindes als Alleinerziehende (zu 2), deutlicher Gehaltsänderung bei Ehepartnern (Optimierung 3/5), Aufnahme eines Zweitjobs (dieser erhält automatisch Klasse 6). Wichtig: Bei geplanten Lohnersatzleistungen (Elterngeld, Krankengeld, Arbeitslosengeld) sollten Sie spätestens 7 Monate vorher wechseln, da diese vom Netto der letzten 12 Monate berechnet werden. Der Wechsel ist einmal jährlich möglich."
    },
    {
      question: "Was bedeutet Steuerklasse 6 beim Zweitjob?",
      answer: "Steuerklasse 6 gilt automatisch für jedes weitere Arbeitsverhältnis neben Ihrem Hauptjob. Sie hat keine Freibeträge, sodass vom ersten Euro an Steuern fällig werden - die Abzüge sind daher sehr hoch (ca. 50-60% bei mittleren Einkommen). Das ist korrekt, da Ihre Freibeträge bereits im Hauptjob berücksichtigt wurden. Beispiel: Bei 450 EUR Minijob in Steuerklasse 6 bleiben nur etwa 250 EUR netto. In der Jahressteuererklärung werden beide Einkommen zusammengerechnet und korrekt besteuert - Sie erhalten oft eine Rückerstattung."
    }
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Steuerklassenrechner 2026",
    "url": "https://gehaltly.de/rechner/steuerklassenrechner",
    "description": "Kostenloser Steuerklassenrechner 2026 - Vergleichen Sie alle 6 Steuerklassen und finden Sie die beste für Ihre Situation.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Alle Steuerklassen vergleichen",
      "Side-by-side Vergleich",
      "Optimale Steuerklasse finden",
      "Netto-Berechnung",
      "Empfehlungen"
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
          { label: "Steuerklassen", href: "/rechner/steuerklassenrechner" }
        ]} />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Steuerklassenrechner 2026"
        subtitle="Vergleichen Sie alle 6 Steuerklassen"
        description="Finden Sie heraus, welche Steuerklasse für Sie am besten ist. Direkter Vergleich aller Steuerklassen mit Ihrer Gehaltshöhe."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Die Steuerklasse beeinflusst, wie viel Lohnsteuer monatlich von Ihrem Gehalt abgezogen wird. Unser Steuerklassenrechner zeigt Ihnen alle 6 Steuerklassen im direkten Vergleich.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Besonders wichtig für Verheiratete: Die Wahl zwischen Steuerklassenkombination 3/5 oder 4/4 kann mehrere hundert Euro monatlich Unterschied machen.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Input */}
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ihr Bruttogehalt</CardTitle>
                </CardHeader>
                <CardContent>
                  <SliderInput
                    label="Monatliches Bruttogehalt"
                    value={bruttogehalt}
                    onChange={(value) => {
                      setBruttogehalt(value);
                      calculateAllClasses();
                    }}
                    min={1500}
                    max={10000}
                    step={100}
                    formatValue={(v) => formatCurrency(v) + " €"}
                    parseValue={parseCurrency}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(results).map(([classNum, result]) => {
                const isBest = bestTaxClass?.class === parseInt(classNum);
                const info = taxClassInfo[parseInt(classNum)];

                return (
                  <Card key={classNum} className={`relative ${isBest ? 'border-green-500 border-2' : ''}`}>
                    {isBest && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Höchstes Netto
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                      <p className="text-xs text-muted-foreground">{info.forWhom}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Brutto:</span>
                          <span className="font-medium">{formatCurrency(result.brutto)} €</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Netto:</span>
                          <span className="text-xl font-bold text-green-600 dark:text-green-400">
                            {formatCurrency(result.netto)} €
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Netto-Quote:</span>
                          <span className="font-medium">
                            {((result.netto / result.brutto) * 100).toFixed(1)}%
                          </span>
                        </div>
                      </div>

                      <div className="border-t pt-3 space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Lohnsteuer:</span>
                          <span>{formatCurrency(result.steuern.lohnsteuer)} €</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Soli:</span>
                          <span>{formatCurrency(result.steuern.solidaritaetszuschlag)} €</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sozialabgaben:</span>
                          <span>{formatCurrency(result.gesamtSozialabgaben)} €</span>
                        </div>
                        <div className="flex justify-between font-semibold border-t pt-1">
                          <span>Gesamt-Abzüge:</span>
                          <span>{formatCurrency(result.gesamtAbzuege)} €</span>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground pt-2 border-t">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recommendation */}
            {bestTaxClass && (
              <div className="mt-8">
                <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-green-900 dark:text-green-100">
                      Empfehlung für Ihr Gehalt
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-900 dark:text-green-100 mb-4">
                      Bei einem Bruttogehalt von <strong>{formatCurrency(bruttogehalt)} €</strong> erhalten Sie in{" "}
                      <strong>{taxClassInfo[bestTaxClass.class].title}</strong> das höchste Nettogehalt von{" "}
                      <strong>{formatCurrency(bestTaxClass.netto)} €</strong>.
                    </p>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Wichtig zu beachten:</strong>
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Die Steuerklasse muss zu Ihrer Lebenssituation passen</li>
                        <li>Bei Verheirateten: Beide Partner zusammen betrachten</li>
                        <li>Die endgültige Steuerlast wird im Jahresausgleich ermittelt</li>
                        <li>Steuerklasse beeinflusst Lohnersatzleistungen (Elterngeld, ALG)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks currentHref="/rechner/steuerklassenrechner" count={6} title="Weitere Gehaltsrechner" />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold mb-8">Steuerklassen in Deutschland</h2>

            <ContentSection
              heading="Die 6 Steuerklassen im Überblick"
              icon={<BookOpen className="w-5 h-5" />}
              body="Deutschland hat 6 Steuerklassen für unterschiedliche Lebenssituationen. Steuerklasse 1 für Singles, 2 für Alleinerziehende mit Entlastungsbetrag, 3 für Verheiratete als Besserverdiener, 4 für Verheiratete mit ähnlichem Einkommen, 5 für Verheiratete als Geringverdiener und 6 für Zweitjobs. Die Steuerklasse bestimmt die Höhe der monatlichen Lohnsteuer-Vorauszahlung. Die tatsächliche Steuerschuld wird erst in der Jahressteuererklärung final berechnet."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Merke:</strong> Die Steuerklasse ist nur ein Vorauszahlungssystem. Verheiratete zahlen gemeinsam immer die gleiche Jahressteuerlast, unabhängig von der gewählten Kombination 3/5 oder 4/4.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Steuerklassenwahl für Ehepaare"
              icon={<Users className="w-5 h-5" />}
              body="Verheiratete können zwischen verschiedenen Kombinationen wählen: 3/5 (einer verdient deutlich mehr), 4/4 (beide verdienen ähnlich viel) oder 4/4 mit Faktor (berücksichtigt individuelles Einkommen). Bei 3/5 erhält der Besserverdiener sehr hohe Freibeträge, zahlt wenig Lohnsteuer und hat hohes Netto. Der Partner in Klasse 5 hat kaum Freibeträge und niedriges Netto. Die Kombination 4/4 verteilt die Steuerlast gleichmäßig. Der Faktor berücksichtigt die voraussichtliche Jahressteuerlast bereits monatlich."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Faustregel:</strong> Wählen Sie 3/5, wenn ein Partner mindestens 60% des Gesamteinkommens verdient. Bei ähnlichen Gehältern ist 4/4 meist besser und vermeidet hohe Nachzahlungen.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Einfluss auf Lohnersatzleistungen"
              icon={<Info className="w-5 h-5" />}
              body="Die Steuerklasse beeinflusst die Höhe von Lohnersatzleistungen erheblich. Elterngeld, Arbeitslosengeld, Kurzarbeitergeld und Krankengeld berechnen sich nach Ihrem Netto der letzten 12 Monate. In Steuerklasse 5 ist das Netto niedrig, entsprechend niedriger fällt das Elterngeld aus. Planen Sie Elternzeit, sollte der betreffende Partner rechtzeitig (7 Monate vorher) in eine günstigere Steuerklasse wechseln. Ein Wechsel von Klasse 5 zu 3 kann das Elterngeld um mehrere hundert Euro monatlich erhöhen."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Wichtig:</strong> Der Steuerklassenwechsel muss vor Beginn des Bemessungszeitraums erfolgen. Bei Elterngeld sind das die 12 Monate vor der Geburt. Rechtzeitig wechseln lohnt sich!
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zu Steuerklassen" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Finden Sie jetzt Ihre optimale Steuerklasse
            </h2>
            <p className="text-lg text-muted-foreground">
              Vergleichen Sie alle Steuerklassen mit Ihrem Gehalt und optimieren Sie Ihr monatliches Netto.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
