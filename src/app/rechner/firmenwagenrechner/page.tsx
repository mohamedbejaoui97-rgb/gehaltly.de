"use client";

import { useState } from "react";
import { Car, Calculator as CalcIcon, TrendingUp, Info, BookOpen } from "lucide-react";
import { calculateGermanTax, type CalculatorResult as CalculatorResultType } from "@/lib/tax";
import { CalculatorResult } from "@/components/calculator/CalculatorResult";
import { SliderInput } from "@/components/calculator/SliderInput";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FirmenwagenrechnerPage() {
  const [bruttogehalt, setBruttogehalt] = useState(4000);
  const [listenpreis, setListenpreis] = useState(40000);
  const [entfernung, setEntfernung] = useState(20);
  const [berechnungsmethode, setBerechnungsmethode] = useState<"1%" | "fahrtenbuch">("1%");
  const [result, setResult] = useState<CalculatorResultType | null>(null);

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

  // Calculate Geldwerter Vorteil (taxable benefit)
  // Formula: (Listenpreis × 1%) + (Listenpreis × 0.03% × Entfernung)
  const calculateGeldwerterVorteil = () => {
    if (berechnungsmethode === "fahrtenbuch") {
      // Fahrtenbuch method - simplified at 50% of 1% method for this calculator
      const einProzentMethode = (listenpreis * 0.01) + (listenpreis * 0.0003 * entfernung);
      return Math.round(einProzentMethode * 0.5);
    }

    // 1% method
    const nutzungsvorteil = listenpreis * 0.01; // 1% of list price per month
    const fahrtkostenvorteil = listenpreis * 0.0003 * entfernung; // 0.03% per km distance
    return Math.round(nutzungsvorteil + fahrtkostenvorteil);
  };

  const geldwerterVorteil = calculateGeldwerterVorteil();

  // Calculate tax with company car benefit
  const calculateWithCompanyCar = () => {
    const taxResult = calculateGermanTax({
      bruttoeinkommen: bruttogehalt,
      abrechnungszeitraum: "monat",
      steuerklasse: 1,
      bundesland: "nordrhein-westfalen",
      kirchensteuer: false,
      alter: 30,
      kinder: 0,
      krankenversicherung: "gesetzlich",
      kvZusatzbeitrag: 1.7,
      steuerfreibetrag: 0,
      geldwerterVorteil: geldwerterVorteil, // Add company car benefit
    });
    setResult(taxResult);
    return taxResult;
  };

  // Calculate on mount and when inputs change
  useState(() => {
    calculateWithCompanyCar();
  });

  const resultWithCar = calculateWithCompanyCar();

  // Calculate result without company car for comparison
  const resultWithoutCar = calculateGermanTax({
    bruttoeinkommen: bruttogehalt,
    abrechnungszeitraum: "monat",
    steuerklasse: 1,
    bundesland: "nordrhein-westfalen",
    kirchensteuer: false,
    alter: 30,
    kinder: 0,
    krankenversicherung: "gesetzlich",
    kvZusatzbeitrag: 1.7,
    steuerfreibetrag: 0,
    geldwerterVorteil: 0,
  });

  const nettoReduction = resultWithoutCar.netto - resultWithCar.netto;

  // FAQ data specific to Firmenwagen
  const faqs = [
    {
      question: "Wie wird ein Firmenwagen versteuert?",
      answer: "Ein Firmenwagen wird als geldwerter Vorteil versteuert. Die gängigste Methode ist die 1%-Regelung: Monatlich wird 1% des Bruttolistenpreises als zusätzliches Einkommen versteuert. Für Fahrten zwischen Wohnung und Arbeitsstätte kommen zusätzlich 0,03% des Listenpreises pro Kilometer Entfernung hinzu. Alternativ können Sie ein Fahrtenbuch führen, was bei geringer Privatnutzung günstiger sein kann. Der geldwerte Vorteil erhöht Ihr zu versteuerndes Einkommen und damit Lohnsteuer sowie Sozialversicherungsbeiträge."
    },
    {
      question: "Was kostet mich ein Firmenwagen netto?",
      answer: "Ein Firmenwagen reduziert Ihr Nettogehalt durch die Versteuerung des geldwerten Vorteils. Bei einem Listenpreis von 40.000 EUR und 20 km Arbeitsweg beträgt der monatliche geldwerte Vorteil 640 EUR (400 EUR + 240 EUR). Darauf zahlen Sie in Steuerklasse 1 etwa 290 EUR Steuern und Sozialabgaben - Ihr Netto sinkt also um diesen Betrag. Ob sich das lohnt, hängt davon ab, wie viel Sie für ein eigenes Auto zahlen würden (Leasing, Versicherung, Sprit, Wartung). Meist lohnt sich ein Firmenwagen bei hoher Fahrleistung."
    },
    {
      question: "Firmenwagen 1%-Regelung oder Fahrtenbuch?",
      answer: "Die 1%-Regelung ist einfach, aber oft teurer bei geringer Privatnutzung. Sie versteuern pauschal 1% des Listenpreises, egal wie viel Sie privat fahren. Das Fahrtenbuch ist aufwendig (alle Fahrten müssen dokumentiert werden), lohnt sich aber bei weniger als 50% Privatnutzung. Faustregel: Bei teurem Auto (über 50.000 EUR) und geringer Privatnutzung (unter 10.000 km/Jahr privat) kann ein Fahrtenbuch 100-300 EUR monatlich sparen. Bei Elektroautos gilt eine reduzierte 0,25%-Regelung (bis 60.000 EUR Listenpreis) bzw. 0,5% (darüber)."
    },
    {
      question: "Lohnt sich ein Firmenwagen bei 20.000 Euro Listenpreis?",
      answer: "Bei einem günstigen Firmenwagen mit 20.000 EUR Listenpreis und 20 km Arbeitsweg beträgt der geldwerte Vorteil etwa 320 EUR monatlich (200 EUR + 120 EUR). Darauf zahlen Sie in Steuerklasse 1 ca. 145 EUR an Steuern und Sozialabgaben. Ihr Netto sinkt also um 145 EUR. Dafür übernimmt der Arbeitgeber alle Kosten (Leasing, Versicherung, Wartung, oft auch Sprit). Ein vergleichbares Privatauto würde Sie etwa 300-400 EUR/Monat kosten. Der Firmenwagen lohnt sich also meist, besonders bei hoher Fahrleistung."
    },
    {
      question: "Wie wird der Arbeitsweg beim Firmenwagen versteuert?",
      answer: "Für Fahrten zwischen Wohnung und erster Tätigkeitsstätte wird zusätzlich ein Zuschlag berechnet: 0,03% des Bruttolistenpreises pro Kilometer einfacher Entfernung pro Monat. Bei 30 km Entfernung und 40.000 EUR Listenpreis sind das 360 EUR zusätzlich zum 1%-Nutzungsvorteil. Insgesamt also 760 EUR geldwerter Vorteil. Die Pendlerpauschale (0,30 EUR ab dem 1. km bzw. 0,38 EUR ab dem 21. km) können Sie trotzdem in der Steuererklärung geltend machen und erhalten eine teilweise Erstattung."
    }
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Firmenwagenrechner 2026",
    "url": "https://gehaltly.de/rechner/firmenwagenrechner",
    "description": "Kostenloser Firmenwagenrechner 2026 - Berechnen Sie den geldwerten Vorteil und die Netto-Auswirkung Ihres Firmenwagens.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Geldwerter Vorteil berechnen",
      "1%-Regelung",
      "Fahrtenbuch-Methode",
      "Entfernungspauschale",
      "Netto-Auswirkung"
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
          { label: "Firmenwagen", href: "/rechner/firmenwagenrechner" }
        ]} />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Firmenwagenrechner 2026"
        subtitle="Berechnen Sie den geldwerten Vorteil Ihres Firmenwagens"
        description="Ermitteln Sie, wie sich ein Firmenwagen auf Ihr Nettogehalt auswirkt. Inklusive 1%-Regelung und Entfernungspauschale."
      />

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Ein Firmenwagen ist ein attraktiver Gehaltsbestandteil - aber er muss als geldwerter Vorteil versteuert werden. Unser Firmenwagenrechner zeigt Ihnen transparent, wie viel Ihr Netto durch die Versteuerung sinkt.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Berechnen Sie den geldwerten Vorteil nach der 1%-Regelung oder Fahrtenbuchmethode und vergleichen Sie, ob sich der Firmenwagen für Sie lohnt.
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
                    <CardTitle>Firmenwagen-Daten</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <SliderInput
                      label="Monatliches Bruttogehalt (ohne Firmenwagen)"
                      value={bruttogehalt}
                      onChange={(value) => {
                        setBruttogehalt(value);
                        calculateWithCompanyCar();
                      }}
                      min={2000}
                      max={10000}
                      step={100}
                      formatValue={(v) => formatCurrency(v) + " €"}
                      parseValue={parseCurrency}
                    />

                    <SliderInput
                      label="Bruttolistenpreis des Fahrzeugs"
                      value={listenpreis}
                      onChange={(value) => {
                        setListenpreis(value);
                        calculateWithCompanyCar();
                      }}
                      min={15000}
                      max={100000}
                      step={1000}
                      formatValue={(v) => formatCurrency(v) + " €"}
                      parseValue={parseCurrency}
                    />

                    <div className="space-y-2">
                      <Label htmlFor="entfernung">Entfernung Wohnung - Arbeit (km)</Label>
                      <Input
                        id="entfernung"
                        type="number"
                        min={0}
                        max={100}
                        value={entfernung}
                        onChange={(e) => {
                          setEntfernung(parseInt(e.target.value) || 0);
                          calculateWithCompanyCar();
                        }}
                      />
                      <p className="text-sm text-muted-foreground">
                        Einfache Entfernung in Kilometern
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="methode">Berechnungsmethode</Label>
                      <Select
                        value={berechnungsmethode}
                        onValueChange={(value: any) => {
                          setBerechnungsmethode(value);
                          calculateWithCompanyCar();
                        }}
                      >
                        <SelectTrigger id="methode">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1%">1%-Regelung</SelectItem>
                          <SelectItem value="fahrtenbuch">Fahrtenbuch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-sm text-blue-900 dark:text-blue-100">
                        <Car className="w-4 h-4 inline mr-1" />
                        <strong>Info:</strong> Der Bruttolistenpreis ist der Neupreis inkl. Sonderausstattung zum Zeitpunkt der Erstzulassung.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Geldwerter Vorteil Berechnung</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Nutzungsvorteil (1%):</span>
                        <span className="font-medium">{formatCurrency(listenpreis * 0.01)} €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Fahrtkostenvorteil (0,03% × {entfernung} km):</span>
                        <span className="font-medium">{formatCurrency(listenpreis * 0.0003 * entfernung)} €</span>
                      </div>
                      {berechnungsmethode === "fahrtenbuch" && (
                        <div className="flex justify-between items-center text-green-600 dark:text-green-400">
                          <span className="text-sm">Fahrtenbuch-Rabatt (~50%):</span>
                          <span className="font-medium">- {formatCurrency(geldwerterVorteil)} €</span>
                        </div>
                      )}
                      <div className="border-t pt-3 flex justify-between items-center">
                        <span className="font-semibold">Geldwerter Vorteil/Monat:</span>
                        <span className="text-xl font-bold text-primary">{formatCurrency(geldwerterVorteil)} €</span>
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                      <p className="text-sm text-amber-900 dark:text-amber-100 mb-2">
                        <strong>Steuerliche Auswirkung:</strong>
                      </p>
                      <div className="space-y-1 text-sm text-amber-900 dark:text-amber-100">
                        <div className="flex justify-between">
                          <span>Netto ohne Firmenwagen:</span>
                          <span className="font-medium">{formatCurrency(resultWithoutCar.netto)} €</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Netto mit Firmenwagen:</span>
                          <span className="font-medium">{formatCurrency(resultWithCar.netto)} €</span>
                        </div>
                        <div className="flex justify-between border-t border-amber-200 dark:border-amber-700 pt-1 mt-1">
                          <span>Netto-Reduktion:</span>
                          <span className="font-bold">- {formatCurrency(nettoReduction)} €</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                      <p className="text-sm text-green-900 dark:text-green-100">
                        <strong>Kostenersparnis:</strong> Wenn Ihre privaten Autokosten (Leasing, Versicherung, Sprit, Wartung) über {formatCurrency(nettoReduction)} € liegen, lohnt sich der Firmenwagen.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {result && (
                  <CalculatorResult result={result} isMonthly={true} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks currentHref="/rechner/firmenwagenrechner" count={6} title="Weitere Gehaltsrechner" />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold mb-8">Firmenwagen - Steuerliche Regelungen</h2>

            <ContentSection
              heading="Die 1%-Regelung einfach erklärt"
              icon={<BookOpen className="w-5 h-5" />}
              body="Die 1%-Regelung ist die häufigste Methode zur Versteuerung von Firmenwagen. Monatlich wird 1% des Bruttolistenpreises als geldwerter Vorteil zum steuerpflichtigen Einkommen addiert. Bei einem Fahrzeug mit 40.000 EUR Listenpreis sind das 400 EUR monatlich. Zusätzlich kommen für jeden Kilometer Entfernung zur Arbeit 0,03% des Listenpreises hinzu - bei 20 km also weitere 240 EUR. Insgesamt erhöht sich Ihr zu versteuerndes Einkommen um 640 EUR monatlich."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Wichtig:</strong> Der Bruttolistenpreis ist immer der Neupreis bei Erstzulassung, egal wie alt das Fahrzeug ist oder wie viel es aktuell wert ist. Auch Rabatte oder Gebrauchtwagenkauf ändern nichts am Ansatz.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Fahrtenbuch als Alternative"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Das Fahrtenbuch ist eine Alternative zur 1%-Regelung und kann günstiger sein, wenn Sie den Firmenwagen wenig privat nutzen. Sie müssen jede Fahrt mit Datum, Kilometerstand, Ziel und Zweck dokumentieren. Am Jahresende wird berechnet, welcher Anteil der Gesamtkosten (Leasing, Versicherung, Sprit, Wartung) auf Privatfahrten entfällt. Dieser Anteil ist dann der geldwerte Vorteil. Bei unter 50% Privatnutzung ist das Fahrtenbuch meist günstiger als die 1%-Regelung."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Tipp:</strong> Ein Fahrtenbuch muss zeitnah, vollständig und nicht nachträglich änderbar sein. Digitale Fahrtenbücher (Apps) sind erlaubt, wenn sie den Anforderungen entsprechen.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Elektro- und Hybridfahrzeuge"
              icon={<Info className="w-5 h-5" />}
              body="Für Elektroautos und Plug-in-Hybride gibt es Steuervergünstigungen. Reine Elektrofahrzeuge mit einem Listenpreis bis 60.000 EUR werden mit nur 0,25% versteuert (statt 1%). Bei Listenpreisen über 60.000 EUR gilt die 0,5%-Regelung. Plug-in-Hybride werden mit 0,5% versteuert, wenn sie mindestens 60 km elektrisch fahren können oder maximal 50g CO2/km ausstoßen. Diese Regelungen gelten für Fahrzeuge, die zwischen 2019 und 2030 angeschafft werden."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Beispiel:</strong> Ein Elektro-BMW i4 mit 55.000 EUR Listenpreis wird nur mit 0,25% versteuert - also 137,50 EUR statt 550 EUR monatlich. Das spart etwa 185 EUR Netto pro Monat.
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zum Firmenwagen" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihren Firmenwagen-Vorteil
            </h2>
            <p className="text-lg text-muted-foreground">
              Finden Sie heraus, wie sich ein Firmenwagen auf Ihr Nettogehalt auswirkt und ob er sich für Sie lohnt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
