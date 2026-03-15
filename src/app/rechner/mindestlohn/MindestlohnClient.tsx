"use client";

import { useState, useEffect, useMemo } from "react";
import { calculateGermanTax, DEFAULT_INPUT, type Steuerklasse } from "@/lib/tax";
import type { CalculatorResult as TaxResult } from "@/lib/tax";
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
import { Clock, TrendingUp, Info, AlertTriangle } from "lucide-react";

const MINDESTLOHN_2026 = 13.95;
const WEEKS_PER_MONTH = 4.33;
const MINIJOB_GRENZE = 556;
const MIDIJOB_OBERGRENZE = 2000;

const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);

type EmploymentStatus = "Minijob" | "Midijob" | "Vollzeit";

function getStatus(monthlyBrutto: number): EmploymentStatus {
  if (monthlyBrutto <= MINIJOB_GRENZE) return "Minijob";
  if (monthlyBrutto <= MIDIJOB_OBERGRENZE) return "Midijob";
  return "Vollzeit";
}

function statusColor(status: EmploymentStatus): string {
  switch (status) {
    case "Minijob":
      return "bg-green-100 text-green-800 border-green-300";
    case "Midijob":
      return "bg-amber-100 text-amber-800 border-amber-300";
    case "Vollzeit":
      return "bg-blue-100 text-blue-800 border-blue-300";
  }
}

export default function MindestlohnClient() {
  const [wochenstunden, setWochenstunden] = useState(40);
  const [wochenstundenDisplay, setWochenstundenDisplay] = useState("40");
  const [stundenlohn, setStundenlohn] = useState(MINDESTLOHN_2026);
  const [stundenlohnDisplay, setStundenlohnDisplay] = useState(MINDESTLOHN_2026.toString().replace(".", ","));
  const [steuerklasse, setSteuerklasse] = useState<Steuerklasse>(1);
  const [kirchensteuer, setKirchensteuer] = useState(false);
  const [result, setResult] = useState<TaxResult | null>(null);

  const monatsBrutto = stundenlohn * wochenstunden * WEEKS_PER_MONTH;
  const status = getStatus(monatsBrutto);

  useEffect(() => {
    if (monatsBrutto <= 0) return;

    const taxResult = calculateGermanTax({
      ...DEFAULT_INPUT,
      bruttoeinkommen: monatsBrutto,
      abrechnungszeitraum: "monat",
      steuerklasse,
      kirchensteuer,
    });
    setResult(taxResult);
  }, [stundenlohn, wochenstunden, steuerklasse, kirchensteuer, monatsBrutto]);

  // For Minijob: no tax/SV deductions — netto = brutto
  const effectiveNetto = status === "Minijob" ? monatsBrutto : (result?.netto ?? 0);
  const jahresBrutto = monatsBrutto * 12;
  const jahresNetto = effectiveNetto * 12;
  const nettoStundenlohn = wochenstunden > 0 ? effectiveNetto / (wochenstunden * WEEKS_PER_MONTH) : 0;

  // Quick reference table for common hours at Mindestlohn
  const quickRef = useMemo(() => {
    const hours = [10, 20, 30, 40];
    return hours.map((h) => {
      const brutto = MINDESTLOHN_2026 * h * WEEKS_PER_MONTH;
      const st = getStatus(brutto);
      let netto: number;
      if (st === "Minijob") {
        netto = brutto;
      } else {
        const r = calculateGermanTax({
          ...DEFAULT_INPUT,
          bruttoeinkommen: brutto,
          abrechnungszeitraum: "monat",
          steuerklasse: 1,
          kirchensteuer: false,
        });
        netto = r.netto;
      }
      return { hours: h, brutto, netto, status: st };
    });
  }, []);

  // Mindestlohn history
  const history = [
    { year: "2020", rate: "9,35 \u20AC" },
    { year: "2021 (Jan)", rate: "9,50 \u20AC" },
    { year: "2021 (Jul)", rate: "9,60 \u20AC" },
    { year: "2022 (Jan)", rate: "9,82 \u20AC" },
    { year: "2022 (Jul)", rate: "10,45 \u20AC" },
    { year: "2022 (Okt)", rate: "12,00 \u20AC" },
    { year: "2023", rate: "12,00 \u20AC" },
    { year: "2024", rate: "12,41 \u20AC" },
    { year: "2025", rate: "12,82 \u20AC" },
    { year: "2026", rate: "13,95 \u20AC" },
  ];

  const faqs = [
    {
      question: "Wie hoch ist der Mindestlohn 2026 in Deutschland?",
      answer:
        "Der gesetzliche Mindestlohn in Deutschland betr\u00e4gt ab dem 1. Januar 2026 13,95 \u20AC pro Stunde (brutto). Dies entspricht bei einer 40-Stunden-Woche einem monatlichen Bruttogehalt von etwa 2.417 \u20AC. Die Mindestlohnkommission empfiehlt die Anpassung, die von der Bundesregierung per Verordnung umgesetzt wird.",
    },
    {
      question: "Wie viel Netto bleibt beim Mindestlohn?",
      answer:
        "Bei Vollzeit (40 Stunden/Woche) und Steuerklasse 1 ergibt der Mindestlohn von 13,95 \u20AC/h ein Bruttogehalt von ca. 2.417 \u20AC monatlich. Nach Abzug von Lohnsteuer und Sozialversicherungsbeitr\u00e4gen bleiben netto je nach individuellen Faktoren etwa 1.700\u20131.800 \u20AC \u00fcbrig. In Steuerklasse 3 (z.B. Verheiratete) kann der Nettobetrag h\u00f6her ausfallen.",
    },
    {
      question: "Wie viele Stunden darf ich beim Minijob mit Mindestlohn arbeiten?",
      answer:
        "Beim Mindestlohn von 13,95 \u20AC/h und einer Minijob-Grenze von 556 \u20AC/Monat d\u00fcrfen Sie maximal etwa 39,8 Stunden pro Monat arbeiten (556 \u20AC \u00f7 13,95 \u20AC). Das entspricht ca. 9,2 Stunden pro Woche. Wird die 556-\u20AC-Grenze regelm\u00e4\u00dfig \u00fcberschritten, liegt kein Minijob mehr vor und es fallen Sozialversicherungsbeitr\u00e4ge an.",
    },
    {
      question: "F\u00fcr wen gilt der Mindestlohn nicht?",
      answer:
        "Der gesetzliche Mindestlohn gilt nicht f\u00fcr: Auszubildende (Azubis), Langzeitarbeitslose in den ersten 6 Monaten einer neuen Besch\u00e4ftigung, Pflichtpraktikanten und freiwillige Praktikanten bei einer Dauer unter 3 Monaten, sowie Jugendliche unter 18 Jahren ohne abgeschlossene Berufsausbildung. F\u00fcr alle anderen Arbeitnehmer ist der Mindestlohn verbindlich.",
    },
    {
      question: "Was ist der Unterschied zwischen Minijob und Midijob beim Mindestlohn?",
      answer:
        "Ein Minijob liegt vor, wenn das monatliche Einkommen 556 \u20AC nicht \u00fcbersteigt \u2014 hier fallen f\u00fcr den Arbeitnehmer keine Steuern oder Sozialversicherungsbeitr\u00e4ge an. Ein Midijob (\u00dcbergangsbereich) liegt zwischen 556,01 \u20AC und 2.000 \u20AC \u2014 hier zahlen Arbeitnehmer reduzierte Sozialversicherungsbeitr\u00e4ge. Ab 2.000 \u20AC gelten die vollen Beitragss\u00e4tze. Beim Mindestlohn von 13,95 \u20AC/h beginnt der Midijob ab ca. 10 Wochenstunden.",
    },
  ];

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Mindestlohnrechner 2026",
    url: "https://gehaltly.de/rechner/mindestlohn",
    description:
      "Kostenloser Mindestlohnrechner 2026 - Berechnen Sie Ihr Netto-Gehalt beim Mindestlohn von 13,95 \u20AC/Stunde.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Mindestlohn Netto-Berechnung",
      "Minijob-Grenze pr\u00fcfen",
      "Midijob-\u00dcbergangsbereich",
      "Alle Steuerklassen",
      "Kirchensteuer ber\u00fccksichtigen",
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
            { label: "Mindestlohn", href: "/rechner/mindestlohn" },
          ]}
        />
      </div>

      {/* Hero */}
      <PageHero
        title="Mindestlohnrechner 2026"
        subtitle="Netto-Gehalt beim Mindestlohn berechnen"
        description="Berechnen Sie, wie viel Netto Ihnen beim gesetzlichen Mindestlohn von 13,95 \u20AC/Stunde bleibt \u2014 inklusive Minijob- und Midijob-Check."
      />

      {/* Author Byline */}
      <section className="pb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground">
              Aktualisiert am 1. Januar 2026 &middot; Berechnung nach aktuellem Steuerrecht
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left — Inputs */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 space-y-6">
                  <h2 className="text-lg sm:text-xl font-semibold">Eingaben</h2>

                  {/* Wochenstunden */}
                  <div className="space-y-2">
                    <Label htmlFor="wochenstunden">Wochenstunden</Label>
                    <Input
                      id="wochenstunden"
                      type="number"
                      min={1}
                      max={60}
                      value={wochenstundenDisplay}
                      onChange={(e) => {
                        setWochenstundenDisplay(e.target.value);
                        const n = parseFloat(e.target.value);
                        if (!isNaN(n)) setWochenstunden(n);
                      }}
                      onBlur={() => {
                        const n = parseFloat(wochenstundenDisplay);
                        if (isNaN(n) || wochenstundenDisplay.trim() === "") {
                          setWochenstunden(40);
                          setWochenstundenDisplay("40");
                        } else {
                          const clamped = Math.min(Math.max(n, 1), 60);
                          setWochenstunden(clamped);
                          setWochenstundenDisplay(clamped.toString());
                        }
                      }}
                    />
                    <p className="text-sm text-muted-foreground">
                      Vollzeit = 40 Stunden, Teilzeit z.B. 20 Stunden
                    </p>
                  </div>

                  {/* Stundenlohn */}
                  <div className="space-y-2">
                    <Label htmlFor="stundenlohn">Stundenlohn (\u20AC/h)</Label>
                    <Input
                      id="stundenlohn"
                      type="text"
                      inputMode="decimal"
                      value={stundenlohnDisplay}
                      onChange={(e) => {
                        const raw = e.target.value;
                        setStundenlohnDisplay(raw);
                        const parsed = parseFloat(raw.replace(",", "."));
                        if (!isNaN(parsed)) setStundenlohn(parsed);
                      }}
                      onBlur={() => {
                        const parsed = parseFloat(stundenlohnDisplay.replace(",", "."));
                        if (isNaN(parsed) || parsed < MINDESTLOHN_2026) {
                          setStundenlohn(MINDESTLOHN_2026);
                          setStundenlohnDisplay(MINDESTLOHN_2026.toString().replace(".", ","));
                        } else {
                          setStundenlohn(parsed);
                          setStundenlohnDisplay(parsed.toString().replace(".", ","));
                        }
                      }}
                    />
                    <p className="text-sm text-muted-foreground">
                      Gesetzlicher Mindestlohn 2026: {MINDESTLOHN_2026.toString().replace(".", ",")} \u20AC/h
                    </p>
                  </div>

                  {/* Steuerklasse */}
                  <div className="space-y-2">
                    <Label htmlFor="steuerklasse">Steuerklasse</Label>
                    <Select
                      value={steuerklasse.toString()}
                      onValueChange={(v) => setSteuerklasse(parseInt(v) as Steuerklasse)}
                    >
                      <SelectTrigger id="steuerklasse" aria-label="Steuerklasse ausw\u00e4hlen">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Steuerklasse 1 - Ledig</SelectItem>
                        <SelectItem value="2">Steuerklasse 2 - Alleinerziehend</SelectItem>
                        <SelectItem value="3">Steuerklasse 3 - Verheiratet (h\u00f6herer Verdienst)</SelectItem>
                        <SelectItem value="4">Steuerklasse 4 - Verheiratet (gleicher Verdienst)</SelectItem>
                        <SelectItem value="5">Steuerklasse 5 - Verheiratet (geringerer Verdienst)</SelectItem>
                        <SelectItem value="6">Steuerklasse 6 - Zweitjob</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Kirchensteuer */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="kirchensteuer"
                      checked={kirchensteuer}
                      onChange={(e) => setKirchensteuer(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="kirchensteuer" className="cursor-pointer">
                      Kirchensteuerpflichtig
                    </Label>
                  </div>
                </div>

                {/* Minijob info box */}
                {status === "Minijob" && (
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <p className="text-sm text-green-900 dark:text-green-100 flex items-start gap-2">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Minijob erkannt:</strong> Bei einem Bruttogehalt von{" "}
                        {formatCurrency(monatsBrutto)} \u20AC/Monat liegen Sie unter der Minijob-Grenze von 556 \u20AC.
                        Es fallen keine Steuern oder Sozialversicherungsbeitr\u00e4ge f\u00fcr Sie an.
                      </span>
                    </p>
                  </div>
                )}

                {status === "Midijob" && (
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                    <p className="text-sm text-amber-900 dark:text-amber-100 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>\u00dcbergangsbereich (Midijob):</strong> Bei{" "}
                        {formatCurrency(monatsBrutto)} \u20AC/Monat liegen Sie im Midijob-Bereich (556,01 \u2013 2.000 \u20AC).
                        Sie zahlen reduzierte Sozialversicherungsbeitr\u00e4ge.
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Right — Results */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg sm:text-xl font-semibold">Ergebnis</h2>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${statusColor(status)}`}
                    >
                      {status}
                    </span>
                  </div>

                  {/* Monthly */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Monatliches Brutto</p>
                      <p className="text-xl sm:text-2xl font-bold text-primary">
                        {formatCurrency(monatsBrutto)} \u20AC
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Monatliches Netto</p>
                      <p className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                        {formatCurrency(effectiveNetto)} \u20AC
                      </p>
                    </div>
                  </div>

                  {/* Hourly net */}
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">St\u00fcndlicher Nettolohn</p>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {formatCurrency(nettoStundenlohn)} \u20AC/h
                    </p>
                  </div>

                  {/* Annual */}
                  <div className="border-t pt-4">
                    <h3 className="text-base font-semibold mb-3">J\u00e4hrliche \u00dcbersicht</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">J\u00e4hrliches Brutto:</span>
                        <span className="font-medium">{formatCurrency(jahresBrutto)} \u20AC</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">J\u00e4hrliches Netto:</span>
                        <span className="font-medium">{formatCurrency(jahresNetto)} \u20AC</span>
                      </div>
                    </div>
                  </div>

                  {/* Deductions breakdown (only for non-Minijob) */}
                  {status !== "Minijob" && result && (
                    <div className="border-t pt-4">
                      <h3 className="text-base font-semibold mb-3">Abz\u00fcge</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Lohnsteuer:</span>
                          <span>{formatCurrency(result.steuern.lohnsteuer)} \u20AC</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Solidarit\u00e4tszuschlag:</span>
                          <span>{formatCurrency(result.steuern.solidaritaetszuschlag)} \u20AC</span>
                        </div>
                        {kirchensteuer && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Kirchensteuer:</span>
                            <span>{formatCurrency(result.steuern.kirchensteuer)} \u20AC</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rentenversicherung:</span>
                          <span>{formatCurrency(result.sozialabgaben.rentenversicherung)} \u20AC</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Krankenversicherung:</span>
                          <span>{formatCurrency(result.sozialabgaben.krankenversicherung)} \u20AC</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pflegeversicherung:</span>
                          <span>{formatCurrency(result.sozialabgaben.pflegeversicherung)} \u20AC</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Arbeitslosenversicherung:</span>
                          <span>{formatCurrency(result.sozialabgaben.arbeitslosenversicherung)} \u20AC</span>
                        </div>
                        <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                          <span>Gesamtabz\u00fcge:</span>
                          <span>{formatCurrency(result.gesamtAbzuege)} \u20AC</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick reference table */}
                <div className="bg-white dark:bg-gray-900 border rounded-lg p-6">
                  <h3 className="text-base font-semibold mb-4">
                    Mindestlohn-\u00dcbersicht nach Wochenstunden (Steuerklasse 1)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 pr-4">Stunden/Woche</th>
                          <th className="text-right py-2 pr-4">Brutto/Monat</th>
                          <th className="text-right py-2 pr-4">Netto/Monat</th>
                          <th className="text-right py-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {quickRef.map((row) => (
                          <tr key={row.hours} className="border-b last:border-0">
                            <td className="py-2 pr-4">{row.hours} h</td>
                            <td className="text-right py-2 pr-4">{formatCurrency(row.brutto)} \u20AC</td>
                            <td className="text-right py-2 pr-4">{formatCurrency(row.netto)} \u20AC</td>
                            <td className="text-right py-2">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${statusColor(row.status)}`}
                              >
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks currentHref="/rechner/mindestlohn" count={6} title="Weitere Gehaltsrechner" />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
              Mindestlohn 2026 in Deutschland
            </h2>

            <ContentSection
              heading="Aktueller Mindestlohn und Entwicklung"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Der gesetzliche Mindestlohn in Deutschland betr\u00e4gt seit dem 1. Januar 2026 13,95 \u20AC pro Stunde. Seit seiner Einf\u00fchrung im Jahr 2015 wurde der Mindestlohn schrittweise erh\u00f6ht. Die gr\u00f6\u00dfte Einzelerh\u00f6hung fand im Oktober 2022 statt, als der Mindestlohn auf 12,00 \u20AC sprang."
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm mt-4">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4">Zeitraum</th>
                      <th className="text-right py-2">Mindestlohn/Stunde</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((row) => (
                      <tr
                        key={row.year}
                        className={`border-b last:border-0 ${row.year === "2026" ? "font-semibold bg-primary/5" : ""}`}
                      >
                        <td className="py-2 pr-4">{row.year}</td>
                        <td className="text-right py-2">{row.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ContentSection>

            <ContentSection
              heading="Wer hat Anspruch auf Mindestlohn?"
              icon={<Info className="w-5 h-5" />}
              body="Der gesetzliche Mindestlohn gilt grunds\u00e4tzlich f\u00fcr alle Arbeitnehmerinnen und Arbeitnehmer in Deutschland. Es gibt jedoch Ausnahmen, f\u00fcr die der Mindestlohn nicht gilt:"
            >
              <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground mt-2">
                <li>
                  <strong>Auszubildende (Azubis)</strong> \u2014 f\u00fcr sie gilt seit 2020 eine eigene
                  Mindestausbildungsverg\u00fctung
                </li>
                <li>
                  <strong>Langzeitarbeitslose</strong> \u2014 in den ersten 6 Monaten einer neuen Besch\u00e4ftigung
                  kann der Arbeitgeber unter dem Mindestlohn zahlen
                </li>
                <li>
                  <strong>Pflichtpraktikanten</strong> \u2014 Praktika im Rahmen von Schule, Studium oder Ausbildung
                </li>
                <li>
                  <strong>Freiwillige Praktikanten</strong> \u2014 bei einer Dauer von unter 3 Monaten
                </li>
                <li>
                  <strong>Jugendliche unter 18</strong> \u2014 ohne abgeschlossene Berufsausbildung
                </li>
              </ul>
            </ContentSection>

            <ContentSection
              heading="Mindestlohn und Minijob"
              icon={<Clock className="w-5 h-5" />}
              body={`Beim Mindestlohn von 13,95 \u20AC/h und der Minijob-Grenze von 556 \u20AC/Monat d\u00fcrfen Sie maximal etwa 39,8 Stunden pro Monat arbeiten (556 \u00f7 13,95), um im Minijob zu bleiben. Das entspricht ca. 9,2 Stunden pro Woche. Im Minijob zahlen Sie als Arbeitnehmer keine Steuern und keine Sozialversicherungsbeitr\u00e4ge \u2014 das Brutto ist gleich dem Netto.`}
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-2">
                <p className="text-sm text-amber-900 dark:text-amber-100 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Achtung:</strong> Wird die 556-\u20AC-Grenze regelm\u00e4\u00dfig \u00fcberschritten, entsteht ein
                    sozialversicherungspflichtiges Besch\u00e4ftigungsverh\u00e4ltnis. Zwischen 556,01 \u20AC und 2.000 \u20AC
                    greift der Midijob-\u00dcbergangsbereich mit reduzierten Beitr\u00e4gen.
                  </span>
                </p>
              </div>
            </ContentSection>

            {/* External links */}
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="text-base font-semibold mb-3">Weiterf\u00fchrende Informationen</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.bundesregierung.de/breg-de/suche/mindestlohn-2089408"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:no-underline"
                  >
                    Bundesregierung: Mindestlohn in Deutschland
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.minijob-zentrale.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:no-underline"
                  >
                    Minijob-Zentrale: Informationen f\u00fcr Minijobber
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="H\u00e4ufig gestellte Fragen zum Mindestlohn 2026" />

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihr Mindestlohn-Gehalt
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren Mindestlohnrechner f\u00fcr eine pr\u00e4zise Netto-Berechnung mit allen Abz\u00fcgen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
