"use client";

import { useState, useMemo } from "react";
import { calculateGermanTax, DEFAULT_INPUT, type Steuerklasse } from "@/lib/tax";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Car, TrendingUp, Info } from "lucide-react";

export default function PendlerpauschaleClient() {
  const [distance, setDistance] = useState(30);
  const [workDays, setWorkDays] = useState(220);
  const [transport, setTransport] = useState<"auto" | "oepnv">("auto");
  const [brutto, setBrutto] = useState(3500);
  const [steuerklasse, setSteuerklasse] = useState<Steuerklasse>(1);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const result = useMemo(() => {
    const safeDistance = Math.max(0, distance);
    const safeWorkDays = Math.max(0, Math.min(365, workDays));

    // Calculate Pendlerpauschale
    const first20 = Math.min(safeDistance, 20) * 0.3 * safeWorkDays;
    const above20 = Math.max(0, safeDistance - 20) * 0.38 * safeWorkDays;
    let pendlerpauschale = first20 + above20;

    // Cap at 4.500 € for public transport users
    if (transport === "oepnv") {
      pendlerpauschale = Math.min(pendlerpauschale, 4500);
    }

    // Calculate tax savings
    const jahresBrutto = brutto * 12;

    const resultWithout = calculateGermanTax({
      ...DEFAULT_INPUT,
      bruttoeinkommen: jahresBrutto,
      steuerklasse,
      abrechnungszeitraum: "jahr",
      steuerfreibetrag: 0,
    });

    const resultWith = calculateGermanTax({
      ...DEFAULT_INPUT,
      bruttoeinkommen: jahresBrutto,
      steuerklasse,
      abrechnungszeitraum: "jahr",
      steuerfreibetrag: pendlerpauschale,
    });

    // gesamtSteuern is monthly, multiply by 12 for annual
    const annualSavings =
      resultWithout.gesamtSteuern * 12 - resultWith.gesamtSteuern * 12;
    const monthlySavings = annualSavings / 12;

    return {
      pendlerpauschale,
      first20,
      above20,
      annualSavings: Math.max(0, annualSavings),
      monthlySavings: Math.max(0, monthlySavings),
      safeDistance,
      safeWorkDays,
    };
  }, [distance, workDays, transport, brutto, steuerklasse]);

  const faqs = [
    {
      question: "Wie hoch ist die Pendlerpauschale 2026?",
      answer:
        "Die Pendlerpauschale beträgt 2026 weiterhin 0,30 € pro Kilometer für die ersten 20 Kilometer der einfachen Entfernung zwischen Wohnung und erster Tätigkeitsstätte. Ab dem 21. Kilometer erhöht sich der Satz auf 0,38 € pro Kilometer. Diese erhöhte Fernpendlerpauschale gilt seit 2022 und wurde bis Ende 2026 verlängert.",
    },
    {
      question: "Gilt die Pendlerpauschale nur für Autofahrer?",
      answer:
        "Nein, die Pendlerpauschale (Entfernungspauschale) steht allen Arbeitnehmern zu, unabhängig vom genutzten Verkehrsmittel. Sie können die Pauschale geltend machen, ob Sie mit dem Auto, dem Fahrrad, zu Fuß, mit dem Bus oder der Bahn zur Arbeit kommen. Bei Nutzung öffentlicher Verkehrsmittel gilt allerdings eine Deckelung auf 4.500 € pro Jahr, es sei denn, die tatsächlichen Kosten sind höher.",
    },
    {
      question:
        "Kann ich die Pendlerpauschale und das Deutschlandticket gleichzeitig nutzen?",
      answer:
        "Grundsätzlich ja, aber es gibt Einschränkungen. Wenn Ihr Arbeitgeber das Deutschlandticket steuerfrei bezuschusst (§ 3 Nr. 15 EStG), wird dieser Zuschuss auf die Pendlerpauschale angerechnet. Das heißt: Erhalten Sie ein steuerfreies Jobticket, reduziert sich Ihre absetzbare Pendlerpauschale um den Zuschussbetrag. Sie können aber weiterhin die Differenz als Werbungskosten geltend machen.",
    },
    {
      question: "Wie beantrage ich einen Steuerfreibetrag für die Pendlerpauschale?",
      answer:
        "Wenn Ihre Pendlerpauschale den Arbeitnehmer-Pauschbetrag von 1.230 € überschreitet, können Sie beim Finanzamt einen Lohnsteuerfreibetrag beantragen (Antrag auf Lohnsteuer-Ermäßigung). Dieser wird dann monatlich bei der Gehaltsabrechnung berücksichtigt, sodass Sie sofort mehr Netto erhalten, statt bis zur Steuererklärung zu warten. Der Antrag gilt jeweils für zwei Kalenderjahre.",
    },
    {
      question: "Zählt die Hin- und Rückfahrt für die Pendlerpauschale?",
      answer:
        "Nein, die Pendlerpauschale wird nur für die einfache Entfernung (Hinfahrt) berechnet, nicht für die Hin- und Rückfahrt. Wenn Sie also 30 km von Ihrer Arbeitsstätte entfernt wohnen, setzen Sie 30 km an, nicht 60 km. Maßgeblich ist die kürzeste Straßenverbindung, auch wenn Sie tatsächlich eine längere Route nutzen. Eine längere Strecke darf nur angesetzt werden, wenn diese nachweislich verkehrsgünstiger ist.",
    },
  ];

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pendlerpauschale Rechner 2026",
    url: "https://gehaltly.de/rechner/pendlerpauschale",
    description:
      "Kostenloser Pendlerpauschale Rechner 2026 - Berechnen Sie Ihre Entfernungspauschale und Steuerersparnis.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Pendlerpauschale berechnen",
      "Steuerersparnis ermitteln",
      "0,30 € und 0,38 € Staffelung",
      "Auto und ÖPNV Vergleich",
      "Aktuelle Werte 2026",
    ],
  };

  return (
    <>
      <SchemaMarkup schema={webAppSchema} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: "Rechner", href: "/rechner" },
            { label: "Pendlerpauschale", href: "/rechner/pendlerpauschale" },
          ]}
        />
      </div>

      {/* Hero */}
      <PageHero
        title="Pendlerpauschale Rechner 2026"
        subtitle="Entfernungspauschale und Steuerersparnis berechnen"
      />

      {/* Author byline */}
      <div className="container mx-auto px-4 pb-4">
        <p className="text-center text-sm text-muted-foreground">
          Von gehaltly.de Redaktion | Aktualisiert: 1. März 2026
        </p>
      </div>

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Die Pendlerpauschale (Entfernungspauschale) mindert Ihr zu versteuerndes Einkommen
              und spart Ihnen bares Geld. Seit 2022 gilt ab dem 21. Kilometer ein erhöhter Satz
              von 0,38 € pro Kilometer. Berechnen Sie hier Ihre jährliche Pauschale und die
              tatsächliche Steuerersparnis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Der Rechner berücksichtigt automatisch die Staffelung (0,30 €/km bis 20 km, 0,38 €/km
              ab dem 21. km), die Deckelung für ÖPNV-Nutzer und berechnet die echte Steuerersparnis
              anhand Ihres Bruttogehalts und Ihrer Steuerklasse.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Inputs */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-card rounded-xl border shadow-sm p-6 space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold">Ihre Angaben</h2>

                  {/* Distance */}
                  <div className="space-y-2">
                    <Label htmlFor="distance">Einfache Entfernung (km)</Label>
                    <Input
                      id="distance"
                      type="number"
                      min={1}
                      max={500}
                      value={distance}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) setDistance(val);
                      }}
                    />
                    <p className="text-sm text-muted-foreground">
                      Kürzeste Straßenentfernung, nur Hinweg
                    </p>
                  </div>

                  {/* Work days */}
                  <div className="space-y-2">
                    <Label htmlFor="workdays">Arbeitstage pro Jahr</Label>
                    <Input
                      id="workdays"
                      type="number"
                      min={1}
                      max={365}
                      value={workDays}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) setWorkDays(val);
                      }}
                    />
                    <p className="text-sm text-muted-foreground">
                      Typisch: 220 Tage (5-Tage-Woche abzgl. Urlaub & Feiertage)
                    </p>
                  </div>

                  {/* Transport */}
                  <div className="space-y-2">
                    <Label>Verkehrsmittel</Label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="transport"
                          value="auto"
                          checked={transport === "auto"}
                          onChange={() => setTransport("auto")}
                          className="accent-primary"
                        />
                        <Car className="w-4 h-4" />
                        <span className="text-sm">Auto</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="transport"
                          value="oepnv"
                          checked={transport === "oepnv"}
                          onChange={() => setTransport("oepnv")}
                          className="accent-primary"
                        />
                        <span className="text-sm">Öffentliche Verkehrsmittel</span>
                      </label>
                    </div>
                    {transport === "oepnv" && (
                      <p className="text-sm text-amber-600 dark:text-amber-400">
                        Bei ÖPNV-Nutzung: max. 4.500 €/Jahr (es sei denn, tatsächliche Kosten sind höher)
                      </p>
                    )}
                  </div>

                  {/* Brutto */}
                  <div className="space-y-2">
                    <Label htmlFor="brutto">Bruttogehalt (€/Monat)</Label>
                    <Input
                      id="brutto"
                      type="number"
                      min={0}
                      max={50000}
                      value={brutto}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        if (!isNaN(val)) setBrutto(val);
                      }}
                    />
                    <p className="text-sm text-muted-foreground">
                      Für die Berechnung der tatsächlichen Steuerersparnis
                    </p>
                  </div>

                  {/* Steuerklasse */}
                  <div className="space-y-2">
                    <Label htmlFor="steuerklasse">Steuerklasse</Label>
                    <Select
                      value={steuerklasse.toString()}
                      onValueChange={(v) =>
                        setSteuerklasse(parseInt(v) as Steuerklasse)
                      }
                    >
                      <SelectTrigger id="steuerklasse" aria-label="Steuerklasse auswählen">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Steuerklasse 1</SelectItem>
                        <SelectItem value="2">Steuerklasse 2</SelectItem>
                        <SelectItem value="3">Steuerklasse 3</SelectItem>
                        <SelectItem value="4">Steuerklasse 4</SelectItem>
                        <SelectItem value="5">Steuerklasse 5</SelectItem>
                        <SelectItem value="6">Steuerklasse 6</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Right: Results */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-card rounded-xl border shadow-sm p-6 space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold">Ihre Pendlerpauschale</h2>

                  {/* Main result */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">
                        Jährliche Pendlerpauschale
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {formatCurrency(result.pendlerpauschale)} €
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">
                        Jährliche Steuerersparnis
                      </p>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {formatCurrency(result.annualSavings)} €
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">
                      Monatliche Steuerersparnis
                    </p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(result.monthlySavings)} €
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      bei Eintragung als Steuerfreibetrag
                    </p>
                  </div>

                  {/* Breakdown */}
                  <div className="border-t pt-4 space-y-3">
                    <h3 className="font-semibold text-base">Berechnung im Detail</h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Bis 20 km: {Math.min(result.safeDistance, 20)} km × 0,30 € × {result.safeWorkDays} Tage
                        </span>
                        <span className="font-medium">{formatCurrency(result.first20)} €</span>
                      </div>
                      {result.safeDistance > 20 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Ab 21 km: {result.safeDistance - 20} km × 0,38 € × {result.safeWorkDays} Tage
                          </span>
                          <span className="font-medium">
                            {formatCurrency(result.above20)} €
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between border-t pt-2 font-semibold">
                        <span>Gesamt{transport === "oepnv" && result.first20 + result.above20 > 4500 ? " (gedeckelt)" : ""}</span>
                        <span>{formatCurrency(result.pendlerpauschale)} €</span>
                      </div>
                    </div>
                  </div>

                  {/* Tip */}
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                      <Info className="w-4 h-4 inline mr-1" />
                      <strong>Tipp:</strong> Beantragen Sie einen Steuerfreibetrag beim Finanzamt
                      für monatlich mehr Netto. So erhalten Sie die Steuerersparnis von{" "}
                      {formatCurrency(result.monthlySavings)} € bereits mit jeder
                      Gehaltsabrechnung, statt bis zur Steuererklärung zu warten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks
        currentHref="/rechner/pendlerpauschale"
        count={6}
        title="Weitere Gehaltsrechner"
      />

      {/* Content Sections */}
      <ContentSection
        heading="Was ist die Pendlerpauschale?"
        icon={<Car className="w-5 h-5" />}
        body="Die Pendlerpauschale, offiziell Entfernungspauschale (§ 9 Abs. 1 S. 3 Nr. 4 EStG), ist ein steuerlicher Freibetrag für den Weg zwischen Wohnung und erster Tätigkeitsstätte. Sie mindert das zu versteuernde Einkommen und damit Ihre Steuerlast. Die Pauschale steht allen Arbeitnehmern zu, unabhängig davon, ob sie mit dem Auto, Fahrrad, Bus, Bahn oder zu Fuß zur Arbeit kommen. Es zählt immer nur die einfache Entfernung (Hinweg), nicht die Hin- und Rückfahrt."
      />

      <ContentSection
        heading="Pendlerpauschale 2026 - Die Sätze"
        icon={<TrendingUp className="w-5 h-5" />}
        body="Seit 2022 gelten zwei Stufen für die Pendlerpauschale: Für die ersten 20 Kilometer der einfachen Entfernung erhalten Sie 0,30 € pro Kilometer. Ab dem 21. Kilometer steigt der Satz auf 0,38 € pro Kilometer. Diese erhöhte Fernpendlerpauschale wurde bis Ende 2026 verlängert, um Fernpendler steuerlich zu entlasten."
      >
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <p className="text-sm text-amber-900 dark:text-amber-100">
            <strong>Rechenbeispiel:</strong> Bei 35 km einfacher Entfernung und 220 Arbeitstagen
            ergibt sich: (20 km × 0,30 € + 15 km × 0,38 €) × 220 Tage = (6,00 € + 5,70 €) × 220
            = 2.574 € jährliche Pendlerpauschale.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Wer kann die Pendlerpauschale nutzen?"
        icon={<Info className="w-5 h-5" />}
        body="Grundsätzlich kann jeder Arbeitnehmer die Pendlerpauschale in Anspruch nehmen, sofern er einen Arbeitsweg hat. Das Verkehrsmittel spielt keine Rolle: Ob Auto, Motorrad, Fahrrad, E-Bike, Bus, Bahn oder sogar zu Fuß - die Pauschale wird verkehrsmittelunabhängig gewährt. Auch bei Fahrgemeinschaften kann jeder Mitfahrer die volle Pauschale geltend machen. Bei Nutzung öffentlicher Verkehrsmittel gilt allerdings eine Höchstgrenze von 4.500 € pro Jahr, sofern nicht höhere tatsächliche Kosten nachgewiesen werden."
      />

      <ContentSection
        heading="Pendlerpauschale vs. Deutschlandticket"
        body="Seit Einführung des Deutschlandtickets (49 €/Monat) stellt sich die Frage: Lohnt sich die Pendlerpauschale noch? Wenn Ihr Arbeitgeber das Deutschlandticket als steuerfreies Jobticket nach § 3 Nr. 15 EStG bezuschusst, wird dieser Betrag auf die Pendlerpauschale angerechnet. Zahlen Sie das Ticket selbst, können Sie stattdessen die Pendlerpauschale geltend machen - je nachdem, was günstiger ist. Ab etwa 17 km einfacher Entfernung übersteigt die jährliche Pendlerpauschale die Kosten des Deutschlandtickets (588 €/Jahr)."
      >
        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p className="text-sm text-green-900 dark:text-green-100">
            <strong>Tipp:</strong> Vergleichen Sie: Deutschlandticket kostet 588 €/Jahr. Die
            Pendlerpauschale ab 17 km × 0,30 € × 220 Tage = 1.122 € übersteigt dies bereits
            deutlich. Allerdings ist die Pendlerpauschale ein Freibetrag (mindert das zu
            versteuernde Einkommen), während das Jobticket den Bruttolohn direkt ersetzt.
          </p>
        </div>
      </ContentSection>

      {/* External links */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
              Weiterführende Informationen
            </h2>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>
                <a
                  href="https://www.bundesfinanzministerium.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Bundesfinanzministerium
                </a>{" "}
                - Offizielle Informationen zur Entfernungspauschale
              </li>
              <li>
                <a
                  href="https://www.gesetze-im-internet.de/estg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Einkommensteuergesetz (EStG)
                </a>{" "}
                - § 9 Abs. 1 S. 3 Nr. 4 EStG - Werbungskosten
              </li>
              <li>
                <a
                  href="https://www.arbeitsagentur.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Bundesagentur für Arbeit
                </a>{" "}
                - Informationen rund um Arbeit und Beschäftigung
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Häufig gestellte Fragen zur Pendlerpauschale"
      />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Jetzt Pendlerpauschale berechnen
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren Rechner, um Ihre Entfernungspauschale und die tatsächliche
              Steuerersparnis für 2026 zu ermitteln.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
