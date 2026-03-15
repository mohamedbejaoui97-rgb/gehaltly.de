"use client";

import { useState, useMemo } from "react";
import { calculateGermanTax } from "@/lib/tax";
import type { Steuerklasse } from "@/lib/tax";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, TrendingUp, Info, Heart } from "lucide-react";

type ElterngeldArt = "basis" | "plus";

export default function ElterngeldClient() {
  const [brutto, setBrutto] = useState(3000);
  const [bruttoDisplay, setBruttoDisplay] = useState("3000");
  const [steuerklasse, setSteuerklasse] = useState<Steuerklasse>(1);
  const [kirchensteuer, setKirchensteuer] = useState(false);
  const [elterngeldArt, setElterngeldArt] = useState<ElterngeldArt>("basis");
  const [geschwisterbonus, setGeschwisterbonus] = useState(false);
  const [mehrlinge, setMehrlinge] = useState(0);

  // Format currency in German format
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Calculate Elterngeld-Netto using pauschaliertes Netto
  const elterngeldNetto = useMemo(() => {
    const result = calculateGermanTax({
      bruttoeinkommen: brutto,
      abrechnungszeitraum: "monat",
      steuerklasse,
      bundesland: "nordrhein-westfalen",
      kirchensteuer,
      alter: 30,
      kinder: 0,
      krankenversicherung: "gesetzlich",
      kvZusatzbeitrag: 2.9,
      steuerfreibetrag: 0,
      geldwerterVorteil: 0,
      abrechnungsjahr: 2026,
    });
    return result.netto;
  }, [brutto, steuerklasse, kirchensteuer]);

  // Calculate Ersatzrate based on Netto
  const ersatzrate = useMemo(() => {
    if (elterngeldNetto <= 1000) {
      // Geringverdiener-Bonus: +0.1% for every 2 EUR under 1000, max 100%
      const diff = 1000 - elterngeldNetto;
      const bonus = Math.floor(diff / 2) * 0.1;
      return Math.min(100, 67 + bonus);
    } else if (elterngeldNetto <= 1200) {
      return 67;
    } else if (elterngeldNetto <= 1240) {
      // Decrease by 0.1% for every 2 EUR above 1200
      const diff = elterngeldNetto - 1200;
      const reduction = Math.floor(diff / 2) * 0.1;
      return 67 - reduction;
    } else {
      return 65;
    }
  }, [elterngeldNetto]);

  // Calculate monthly Elterngeld
  const { monatlichesElterngeld, geschwisterbonusBetrag, mehrlingszuschlag } = useMemo(() => {
    let basis = (ersatzrate / 100) * elterngeldNetto;

    // Apply min/max for Basiselterngeld
    const minBasis = 300;
    const maxBasis = 1800;
    basis = Math.max(minBasis, Math.min(maxBasis, basis));

    // Geschwisterbonus: +10%, min 75 EUR (Basis) / 37.50 EUR (Plus)
    let gBonus = 0;
    if (geschwisterbonus) {
      const bonusPercent = basis * 0.1;
      const minBonus = elterngeldArt === "basis" ? 75 : 37.5;
      gBonus = Math.max(minBonus, bonusPercent);
    }

    // Mehrlingszuschlag: +300 EUR per additional child (Basis)
    const mZuschlag = elterngeldArt === "basis" ? mehrlinge * 300 : mehrlinge * 150;

    let total = basis + gBonus + mZuschlag;

    // For ElterngeldPlus: 50% of Basiselterngeld (applied after bonuses on the basis amount)
    if (elterngeldArt === "plus") {
      // Recalculate: ElterngeldPlus = 50% of what Basiselterngeld would be
      let basisAmount = (ersatzrate / 100) * elterngeldNetto;
      basisAmount = Math.max(300, Math.min(1800, basisAmount));
      let plusAmount = basisAmount * 0.5;
      plusAmount = Math.max(150, Math.min(900, plusAmount));

      let gBonusPlus = 0;
      if (geschwisterbonus) {
        gBonusPlus = Math.max(37.5, plusAmount * 0.1);
      }

      total = plusAmount + gBonusPlus + mZuschlag;
      return {
        monatlichesElterngeld: total,
        geschwisterbonusBetrag: gBonusPlus,
        mehrlingszuschlag: mZuschlag,
      };
    }

    return {
      monatlichesElterngeld: total,
      geschwisterbonusBetrag: gBonus,
      mehrlingszuschlag: mZuschlag,
    };
  }, [ersatzrate, elterngeldNetto, elterngeldArt, geschwisterbonus, mehrlinge]);

  // Bezugsmonate
  const bezugsmonate = elterngeldArt === "basis" ? 14 : 28;

  // Total Elterngeld over full period
  const totalElterngeld = monatlichesElterngeld * bezugsmonate;

  // Last Netto for comparison
  const letztesNetto = elterngeldNetto;

  // Timeline labels
  const timelineLabel = elterngeldArt === "basis" ? "12+2 Monate Basiselterngeld" : "24+4 Monate ElterngeldPlus";

  // FAQ data
  const faqs = [
    {
      question: "Wie wird das Elterngeld 2026 berechnet?",
      answer: "Das Elterngeld basiert auf dem pauschalisierten Nettoeinkommen der letzten 12 Monate vor der Geburt. Die Ersatzrate betraegt 65-67% des Nettoeinkommens. Bei einem Netto unter 1.000 EUR steigt die Ersatzrate um 0,1% je 2 EUR unter 1.000 EUR (bis max. 100%). Bei einem Netto ueber 1.200 EUR sinkt sie um 0,1% je 2 EUR ueber 1.200 EUR (bis min. 65%). Das Basiselterngeld liegt zwischen 300 und 1.800 EUR monatlich.",
    },
    {
      question: "Was ist der Unterschied zwischen Basiselterngeld und ElterngeldPlus?",
      answer: "Basiselterngeld wird fuer maximal 14 Monate (12+2 Partnermonate) gezahlt und betraegt 65-67% des Nettoeinkommens (300-1.800 EUR/Monat). ElterngeldPlus wird fuer bis zu 28 Monate (24+4) gezahlt, betraegt aber nur die Haelfte des Basiselterngeldes (150-900 EUR/Monat). ElterngeldPlus lohnt sich besonders bei Teilzeitarbeit waehrend der Elternzeit.",
    },
    {
      question: "Kann ich durch einen Steuerklassenwechsel mehr Elterngeld bekommen?",
      answer: "Ja, verheiratete Paare koennen durch einen rechtzeitigen Wechsel in Steuerklasse 3 das Elterngeld-Netto erhoehen und damit mehr Elterngeld erhalten. Der Wechsel sollte mindestens 7 Monate vor dem Mutterschutz erfolgen, da das Finanzamt die ueberwiegend genutzte Steuerklasse in den 12 Monaten vor der Geburt zugrunde legt. Tipp: Der besser verdienende Partner wechselt in Steuerklasse 5, der Elterngeld beziehende Partner in Steuerklasse 3.",
    },
    {
      question: "Was ist der Geschwisterbonus beim Elterngeld?",
      answer: "Der Geschwisterbonus betraegt 10% des Elterngeldes, mindestens jedoch 75 EUR beim Basiselterngeld bzw. 37,50 EUR beim ElterngeldPlus. Er wird gezahlt, wenn ein aelteres Geschwisterkind unter 3 Jahren oder zwei aeltere Geschwisterkinder unter 6 Jahren im Haushalt leben. Der Bonus wird zusaetzlich zum regulaeren Elterngeld gezahlt.",
    },
    {
      question: "Wie hoch ist das Mindestelterngeld bei Nichterwerbstaetigkeit?",
      answer: "Auch ohne vorheriges Einkommen erhalten Eltern das Mindestelterngeld von 300 EUR monatlich (Basiselterngeld) bzw. 150 EUR monatlich (ElterngeldPlus). Das Mindestelterngeld steht allen Eltern zu, unabhaengig davon, ob sie vor der Geburt erwerbstaetig waren. Hausfrauen, Hausmanner, Studierende und Selbststaendige ohne Einkommen erhalten ebenfalls mindestens den Mindestbetrag.",
    },
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Elterngeldrechner 2026",
    url: "https://gehaltly.de/rechner/elterngeld/",
    description:
      "Kostenloser Elterngeldrechner 2026 - Berechnen Sie Ihr Elterngeld mit Ersatzrate, Geschwisterbonus und Mehrlingszuschlag.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Elterngeld berechnen",
      "Basiselterngeld und ElterngeldPlus",
      "Ersatzrate-Staffelung",
      "Geschwisterbonus",
      "Mehrlingszuschlag",
      "Steuerklassen-Vergleich",
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup schema={webAppSchema} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: "Rechner", href: "/rechner" },
            { label: "Elterngeld", href: "/rechner/elterngeld" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Elterngeldrechner 2026"
        subtitle="Berechnen Sie Ihr Elterngeld vor der Geburt"
        description="Ermitteln Sie Ihr monatliches Elterngeld, die Ersatzrate und die Bezugsdauer - mit Basiselterngeld, ElterngeldPlus, Geschwisterbonus und Mehrlingszuschlag."
      />

      {/* Author Byline */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground">
              Berechnung nach BEEG (Bundeselterngeld- und Elternzeitgesetz) Stand 2026 | Letzte Aktualisierung: Maerz 2026
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Der Elterngeldrechner hilft Ihnen, Ihr voraussichtliches Elterngeld vor der Geburt zu berechnen. Basierend auf Ihrem Bruttogehalt, Ihrer Steuerklasse und der gewaehlten Elterngeld-Art erhalten Sie eine praezise Schaetzung Ihres monatlichen Elterngeldes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Besonders nützlich für werdende Eltern, die ihre Finanzen planen möchten. Der Rechner berücksichtigt die Ersatzraten-Staffelung, den Geschwisterbonus und den Mehrlingszuschlag nach dem BEEG.
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
                    <CardTitle className="flex items-center gap-2">
                      <Baby className="w-5 h-5" />
                      Ihre Angaben
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Bruttogehalt */}
                    <div className="space-y-2">
                      <Label htmlFor="brutto">Monatliches Bruttogehalt vor Geburt</Label>
                      <div className="relative">
                        <Input
                          id="brutto"
                          type="number"
                          min={0}
                          max={15000}
                          step={100}
                          value={bruttoDisplay}
                          onChange={(e) => {
                            setBruttoDisplay(e.target.value);
                            const num = parseFloat(e.target.value);
                            if (!isNaN(num)) setBrutto(num);
                          }}
                          onBlur={() => {
                            const num = parseFloat(bruttoDisplay);
                            if (isNaN(num) || bruttoDisplay.trim() === "") {
                              setBrutto(3000);
                              setBruttoDisplay("3000");
                            } else {
                              const clamped = Math.max(0, Math.min(15000, num));
                              setBrutto(clamped);
                              setBruttoDisplay(clamped.toString());
                            }
                          }}
                          className="pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                          &euro;
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Durchschnittliches Bruttogehalt der letzten 12 Monate
                      </p>
                    </div>

                    {/* Steuerklasse */}
                    <div className="space-y-2">
                      <Label htmlFor="steuerklasse">Steuerklasse</Label>
                      <Select
                        value={steuerklasse.toString()}
                        onValueChange={(v) => setSteuerklasse(parseInt(v) as Steuerklasse)}
                      >
                        <SelectTrigger id="steuerklasse" aria-label="Steuerklasse auswaehlen">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Steuerklasse 1 - Ledig</SelectItem>
                          <SelectItem value="2">Steuerklasse 2 - Alleinerziehend</SelectItem>
                          <SelectItem value="3">Steuerklasse 3 - Verheiratet (Alleinverdiener)</SelectItem>
                          <SelectItem value="4">Steuerklasse 4 - Verheiratet (beide verdienen)</SelectItem>
                          <SelectItem value="5">Steuerklasse 5 - Verheiratet (Ehepartner StKl 3)</SelectItem>
                          <SelectItem value="6">Steuerklasse 6 - Zweitjob</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Kirchensteuer */}
                    <div className="flex items-center space-x-2">
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

                    {/* Elterngeld-Art */}
                    <div className="space-y-3">
                      <Label>Elterngeld-Art</Label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                          <input
                            type="radio"
                            name="elterngeldArt"
                            value="basis"
                            checked={elterngeldArt === "basis"}
                            onChange={() => setElterngeldArt("basis")}
                            className="h-4 w-4"
                          />
                          <div>
                            <span className="font-medium">Basiselterngeld</span>
                            <span className="text-sm text-muted-foreground block">
                              12+2 Monate, 300-1.800 &euro;/Monat
                            </span>
                          </div>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                          <input
                            type="radio"
                            name="elterngeldArt"
                            value="plus"
                            checked={elterngeldArt === "plus"}
                            onChange={() => setElterngeldArt("plus")}
                            className="h-4 w-4"
                          />
                          <div>
                            <span className="font-medium">ElterngeldPlus</span>
                            <span className="text-sm text-muted-foreground block">
                              24+4 Monate, 150-900 &euro;/Monat
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Geschwisterbonus */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="geschwisterbonus"
                        checked={geschwisterbonus}
                        onChange={(e) => setGeschwisterbonus(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <Label htmlFor="geschwisterbonus" className="cursor-pointer">
                        Geschwisterbonus (+10%, mind. 75 &euro; / 37,50 &euro;)
                      </Label>
                    </div>

                    {/* Mehrlinge */}
                    <div className="space-y-2">
                      <Label htmlFor="mehrlinge">Mehrlinge (zusaetzliche Kinder bei Mehrlingsgeburt)</Label>
                      <Select
                        value={mehrlinge.toString()}
                        onValueChange={(v) => setMehrlinge(parseInt(v))}
                      >
                        <SelectTrigger id="mehrlinge" aria-label="Anzahl Mehrlinge">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Keine Mehrlinge</SelectItem>
                          <SelectItem value="1">Zwillinge (+1)</SelectItem>
                          <SelectItem value="2">Drillinge (+2)</SelectItem>
                          <SelectItem value="3">Vierlinge (+3)</SelectItem>
                          <SelectItem value="4">Fuenflinge (+4)</SelectItem>
                          <SelectItem value="5">Sechslinge (+5)</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">
                        +300 &euro;/Monat (Basis) bzw. +150 &euro;/Monat (Plus) je zusaetzlichem Kind
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-6">
                {/* Main Result */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      Ihr Elterngeld
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Big Green Number */}
                    <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">
                        Monatliches Elterngeld
                      </p>
                      <p className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400">
                        {formatCurrency(monatlichesElterngeld)} &euro;
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {elterngeldArt === "basis" ? "Basiselterngeld" : "ElterngeldPlus"} pro Monat
                      </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Ersatzrate</p>
                        <p className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {ersatzrate.toFixed(1)}%
                        </p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Elterngeld-Netto</p>
                        <p className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
                          {formatCurrency(elterngeldNetto)} &euro;
                        </p>
                      </div>
                    </div>

                    {/* Detailed Breakdown */}
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Bezugsdauer:</span>
                        <span className="font-medium">{bezugsmonate} Monate ({timelineLabel})</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Gesamt-Elterngeld:</span>
                        <span className="font-medium">{formatCurrency(totalElterngeld)} &euro;</span>
                      </div>
                      {geschwisterbonusBetrag > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">davon Geschwisterbonus:</span>
                          <span className="font-medium text-green-600">+{formatCurrency(geschwisterbonusBetrag)} &euro;</span>
                        </div>
                      )}
                      {mehrlingszuschlag > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">davon Mehrlingszuschlag:</span>
                          <span className="font-medium text-green-600">+{formatCurrency(mehrlingszuschlag)} &euro;</span>
                        </div>
                      )}
                    </div>

                    {/* Comparison: Netto vs Elterngeld */}
                    <div className="border-t pt-4">
                      <h3 className="text-sm font-semibold mb-3">Vergleich: Letztes Netto vs. Elterngeld</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Letztes Netto</span>
                            <span className="font-medium">{formatCurrency(letztesNetto)} &euro;</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div
                              className="bg-blue-500 h-3 rounded-full"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Elterngeld</span>
                            <span className="font-medium">{formatCurrency(monatlichesElterngeld)} &euro;</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div
                              className="bg-green-500 h-3 rounded-full"
                              style={{
                                width: `${Math.min(100, letztesNetto > 0 ? (monatlichesElterngeld / letztesNetto) * 100 : 0)}%`,
                              }}
                            />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Differenz: {formatCurrency(Math.max(0, letztesNetto - monatlichesElterngeld))} &euro; weniger pro Monat
                          ({letztesNetto > 0 ? ((monatlichesElterngeld / letztesNetto) * 100).toFixed(1) : "0"}% des Nettos)
                        </p>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="border-t pt-4">
                      <h3 className="text-sm font-semibold mb-3">Bezugszeitraum</h3>
                      <div className="flex flex-wrap gap-1">
                        {Array.from({ length: bezugsmonate }, (_, i) => (
                          <div
                            key={i}
                            className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium ${
                              elterngeldArt === "basis"
                                ? i < 12
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                                : i < 24
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                            }`}
                            title={`Monat ${i + 1}`}
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <span className={`w-3 h-3 rounded ${elterngeldArt === "basis" ? "bg-green-100 dark:bg-green-900" : "bg-blue-100 dark:bg-blue-900"}`} />
                          {elterngeldArt === "basis" ? "Elternzeit (12 Mon.)" : "ElterngeldPlus (24 Mon.)"}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded bg-amber-100 dark:bg-amber-900" />
                          Partnermonate ({elterngeldArt === "basis" ? "2" : "4"} Mon.)
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Info Box */}
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-sm text-blue-900 dark:text-blue-100">
                    <Info className="w-4 h-4 inline mr-1" />
                    <strong>Hinweis:</strong> Diese Berechnung dient als Orientierung. Das tatsaechliche Elterngeld wird von der Elterngeldstelle anhand Ihrer Gehaltsabrechnungen der letzten 12 Monate berechnet. Sonderzahlungen (Weihnachtsgeld, Boni) werden anteilig beruecksichtigt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks currentHref="/rechner/elterngeld" count={6} title="Weitere Gehaltsrechner" />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
              Elterngeld verstehen und optimieren
            </h2>

            <ContentSection
              heading="Was ist Elterngeld?"
              icon={<Baby className="w-5 h-5" />}
              body="Elterngeld ist eine staatliche Leistung fuer Eltern, die nach der Geburt ihres Kindes voruebergehend weniger oder gar nicht arbeiten. Es soll den Einkommensverlust teilweise ausgleichen und Familien in der ersten Lebensphase des Kindes finanziell unterstuetzen. Das Elterngeld wird nach dem Bundeselterngeld- und Elternzeitgesetz (BEEG) fuer 12 bis 14 Monate (Basiselterngeld) bzw. 24 bis 28 Monate (ElterngeldPlus) gezahlt."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Anspruch:</strong> Elterngeld erhalten alle Eltern, die ihr Kind nach der Geburt selbst betreuen, in Deutschland wohnen und nicht mehr als 32 Stunden pro Woche arbeiten (beim Basiselterngeld).
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Basiselterngeld vs. ElterngeldPlus"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Basiselterngeld wird fuer maximal 14 Monate gezahlt (12 Monate + 2 Partnermonate) und betraegt 65-67% des vorherigen Nettoeinkommens, mindestens 300 und hoechstens 1.800 EUR monatlich. ElterngeldPlus betraegt die Haelfte des Basiselterngeldes, wird aber doppelt so lange gezahlt (bis zu 28 Monate). ElterngeldPlus ist besonders vorteilhaft, wenn Sie waehrend der Elternzeit in Teilzeit arbeiten moechten."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Kombinationsmoeglichkeit:</strong> Sie koennen Basiselterngeld und ElterngeldPlus auch kombinieren. Ein Monat Basiselterngeld kann in zwei Monate ElterngeldPlus umgewandelt werden. So lassen sich individuelle Modelle gestalten.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Wie wird Elterngeld berechnet?"
              icon={<Info className="w-5 h-5" />}
              body="Die Berechnung erfolgt in drei Schritten: Zuerst wird aus Ihrem Bruttogehalt der letzten 12 Monate das pauschalierte Nettoeinkommen ermittelt. Dann wird die Ersatzrate bestimmt: Bei einem Netto bis 1.000 EUR liegt sie bei 67% plus einem Geringverdiener-Bonus (bis zu 100%). Zwischen 1.000 und 1.200 EUR betraegt sie 67%. Ab 1.200 EUR sinkt sie schrittweise auf 65%. Schliesslich wird das Elterngeld als Ersatzrate mal Nettoeinkommen berechnet."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Ersatzraten-Staffelung:</strong> Netto &le; 1.000 &euro;: 67-100% | 1.000-1.200 &euro;: 67% | 1.200-1.240 &euro;: 66-67% | &gt; 1.240 &euro;: 65%. Das Minimum betraegt 300 &euro; (Basis) bzw. 150 &euro; (Plus), das Maximum 1.800 &euro; (Basis) bzw. 900 &euro; (Plus).
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Tipps: Steuerklasse vor der Geburt wechseln"
              icon={<Heart className="w-5 h-5" />}
              body="Verheiratete Paare koennen durch einen strategischen Steuerklassenwechsel ihr Elterngeld deutlich erhoehen. Der Trick: Der Elternteil, der spaeter Elterngeld beziehen will, wechselt in Steuerklasse 3 (hoeheres Netto = hoeheres Elterngeld). Der andere Partner nimmt Steuerklasse 5. Wichtig: Der Wechsel muss rechtzeitig erfolgen - die Steuerklasse muss in mindestens 7 der 12 Monate vor dem Mutterschutzbeginn gegolten haben."
            >
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-sm text-red-900 dark:text-red-100">
                  <strong>Rechenbeispiel:</strong> Bei 3.000 &euro; brutto erhaelt man in Steuerklasse 1 ca. 1.296 &euro; Elterngeld, in Steuerklasse 3 dagegen ca. 1.544 &euro; - das sind rund 248 &euro; mehr pro Monat bzw. 3.472 &euro; mehr ueber 14 Monate.
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
              Offizielle Informationsquellen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://www.bmfsfj.de/bmfsfj/themen/familie/familienleistungen/elterngeld"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <p className="font-medium group-hover:text-primary transition-colors">
                  Bundesfamilienministerium (BMFSFJ)
                </p>
                <p className="text-sm text-muted-foreground">
                  Offizielle Informationen zum Elterngeld und zur Elternzeit
                </p>
              </a>
              <a
                href="https://familienportal.de/familienportal/familienleistungen/elterngeld"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <p className="font-medium group-hover:text-primary transition-colors">
                  Familienportal.de
                </p>
                <p className="text-sm text-muted-foreground">
                  Elterngeld-Informationen und Antragshinweise
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Haeufig gestellte Fragen zum Elterngeld" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Planen Sie Ihre Elternzeit finanziell
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie den Elterngeldrechner, um Ihr voraussichtliches Elterngeld zu berechnen und Ihre Familienplanung optimal vorzubereiten.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
