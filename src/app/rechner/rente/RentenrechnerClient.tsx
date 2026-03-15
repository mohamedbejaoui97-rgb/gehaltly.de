"use client";

import { useState, useEffect } from "react";
import { Info, BookOpen, TrendingUp, Clock, ExternalLink } from "lucide-react";
import { calculateGermanTax, DEFAULT_INPUT } from "@/lib/tax";
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

// Constants for pension calculation 2026
const DURCHSCHNITTSENTGELT = 45358; // 2026 provisional
const RENTENWERT_WEST = 39.32; // EUR per Entgeltpunkt (West) 2026
const RENTENWERT_OST = 39.32; // EUR per Entgeltpunkt (Ost) - since 2024 equalized
const BBG_RV_JAHR = 101400; // Beitragsbemessungsgrenze RV 2026
const REGELALTERSGRENZE = 67;

export default function RentenrechnerClient() {
  const [monatsBrutto, setMonatsBrutto] = useState(3500);
  const [beitragsjahre, setBeitragsjahre] = useState(40);
  const [rentenalter, setRentenalter] = useState(67);
  const [region, setRegion] = useState<"west" | "ost">("west");

  const [entgeltpunkteProJahr, setEntgeltpunkteProJahr] = useState(0);
  const [entgeltpunkteGesamt, setEntgeltpunkteGesamt] = useState(0);
  const [zugangsfaktor, setZugangsfaktor] = useState(1.0);
  const [monatsrente, setMonatsrente] = useState(0);
  const [currentNetto, setCurrentNetto] = useState(0);
  const [rentenluecke, setRentenluecke] = useState(0);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  useEffect(() => {
    // Cap annual brutto at BBG for RV
    const jahresBrutto = Math.min(monatsBrutto * 12, BBG_RV_JAHR);

    // Entgeltpunkte pro Jahr
    const ppj = jahresBrutto / DURCHSCHNITTSENTGELT;
    setEntgeltpunkteProJahr(ppj);

    // Total Entgeltpunkte
    const totalEP = ppj * beitragsjahre;
    setEntgeltpunkteGesamt(totalEP);

    // Zugangsfaktor
    const monthsDiff = (rentenalter - REGELALTERSGRENZE) * 12;
    let zf: number;
    if (monthsDiff < 0) {
      // Early retirement: -0.003 per month (= -0.3% per month = -3.6% per year)
      zf = 1.0 + monthsDiff * 0.003;
    } else if (monthsDiff > 0) {
      // Late retirement: +0.005 per month (= +0.5% per month = +6% per year)
      zf = 1.0 + monthsDiff * 0.005;
    } else {
      zf = 1.0;
    }
    zf = Math.max(zf, 0);
    setZugangsfaktor(zf);

    // Rentenwert based on region
    const rentenwert = region === "west" ? RENTENWERT_WEST : RENTENWERT_OST;

    // Monatsrente = EP x Zugangsfaktor x Rentenwert x Rentenartfaktor (1.0 for Altersrente)
    const rente = totalEP * zf * rentenwert * 1.0;
    setMonatsrente(rente);

    // Current netto for comparison
    const result = calculateGermanTax({
      ...DEFAULT_INPUT,
      bruttoeinkommen: monatsBrutto,
      abrechnungszeitraum: "monat",
    });
    setCurrentNetto(result.netto);

    // Rentenlücke
    setRentenluecke(Math.max(result.netto - rente, 0));
  }, [monatsBrutto, beitragsjahre, rentenalter, region]);

  const faqs = [
    {
      question: "Wie werden Entgeltpunkte berechnet?",
      answer: "Entgeltpunkte sind die zentrale Berechnungsgrundlage der gesetzlichen Rente. Pro Kalenderjahr erhalten Sie Entgeltpunkte im Verhältnis Ihres Bruttojahreseinkommens zum Durchschnittsentgelt aller Versicherten. Verdienen Sie genau den Durchschnitt (2026: ca. 45.358 EUR/Jahr), erhalten Sie exakt 1,0 Entgeltpunkt. Bei doppeltem Verdienst gibt es 2,0 Punkte - allerdings maximal bis zur Beitragsbemessungsgrenze (101.400 EUR/Jahr in 2026).",
    },
    {
      question: "Was passiert bei Fr&uuml;hverrentung?",
      answer: "Bei Frühverrentung vor der Regelaltersgrenze (67 Jahre) wird ein Abschlag auf die Rente erhoben: 0,3% pro Monat des vorzeitigen Renteneintritts, also 3,6% pro Jahr. Wer beispielsweise mit 63 Jahren in Rente geht (4 Jahre früher), erhält einen dauerhaften Abschlag von 14,4% auf die Monatsrente. Dieser Abschlag gilt lebenslang und wird nicht nachträglich aufgehoben. Für langjährig Versicherte (45 Beitragsjahre) ist ein abschlagsfreier Renteneintritt mit 65 Jahren möglich.",
    },
    {
      question: "Wie wird die Rente besteuert?",
      answer: "Die Besteuerung der Rente richtet sich nach dem Jahr des Rentenbeginns. Für Neurentner 2026 beträgt der steuerpflichtige Anteil etwa 86%. Nur 14% der Rente bleiben als persönlicher Rentenfreibetrag steuerfrei - und zwar als fester Eurobetrag für die gesamte Rentenbezugszeit. Bis 2058 steigt der Besteuerungsanteil schrittweise auf 100%. Zusätzlich fallen auf die Rente Beiträge zur Kranken- und Pflegeversicherung an.",
    },
    {
      question: "Was ist der Unterschied zwischen West- und Ost-Rente?",
      answer: "Seit dem 1. Juli 2024 gilt in ganz Deutschland ein einheitlicher Rentenwert. Die zuvor bestehenden Unterschiede zwischen West- und Ost-Rentenwert wurden vollständig angeglichen. Der aktuelle Rentenwert beträgt bundesweit 39,32 EUR pro Entgeltpunkt (Stand 2026). Auch die Beitragsbemessungsgrenze für die Rentenversicherung ist seit 2025 bundesweit einheitlich bei 101.400 EUR/Jahr.",
    },
    {
      question: "Wie kann ich meine Rentenl&uuml;cke schlie&szlig;en?",
      answer: "Die Rentenlücke ist der Unterschied zwischen Ihrem aktuellen Nettoeinkommen und der zu erwartenden gesetzlichen Rente. Um diese Lücke zu schließen, gibt es mehrere Möglichkeiten: betriebliche Altersvorsorge (bAV) mit Arbeitgeberzuschuss, private Altersvorsorge wie Riester- oder Rürup-Rente, ETF-Sparpläne oder Immobilien. Als Faustregel gilt: Je früher Sie mit dem Sparen beginnen, desto weniger müssen Sie monatlich zurücklegen. Eine unverbindliche Rentenauskunft erhalten Sie jederzeit bei der Deutschen Rentenversicherung.",
    },
  ];

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Rentenrechner 2026",
    url: "https://gehaltly.de/rechner/rente",
    description:
      "Kostenloser Rentenrechner 2026 - Berechnen Sie Ihre gesetzliche Rente mit Entgeltpunkten, Zugangsfaktor und Rentenlücke.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Gesetzliche Rente berechnen",
      "Entgeltpunkte ermitteln",
      "Frühverrentung Abschläge",
      "Rentenlücke berechnen",
      "West und Ost Rentenwert",
    ],
  };

  return (
    <>
      <SchemaMarkup schema={webAppSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: "Rechner", href: "/rechner" },
            { label: "Rentenrechner", href: "/rechner/rente" },
          ]}
        />
      </div>

      <PageHero
        title="Rentenrechner 2026"
        subtitle="Berechnen Sie Ihre gesetzliche Rente"
        description="Ermitteln Sie Ihre voraussichtliche Monatsrente, Entgeltpunkte und Rentenlücke - basierend auf den aktuellen Werten der Deutschen Rentenversicherung."
      />

      {/* Author byline + intro */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground mb-6">
              Von gehaltly.de Redaktion | Aktualisiert: 1. M&auml;rz 2026
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Die gesetzliche Rente basiert auf dem Entgeltpunktesystem: Je mehr
              Sie verdienen und je l&auml;nger Sie einzahlen, desto h&ouml;her
              f&auml;llt Ihre Rente aus. Unser Rentenrechner nutzt die aktuellen
              Werte 2026 (Durchschnittsentgelt: 45.358 EUR, Rentenwert: 39,32
              EUR) f&uuml;r eine realistische Sch&auml;tzung.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bitte beachten Sie: Dies ist eine vereinfachte Berechnung. Die
              tats&auml;chliche Rente h&auml;ngt von Ihrem gesamten
              Erwerbsverlauf ab. F&uuml;r eine verbindliche Auskunft wenden Sie
              sich an die Deutsche Rentenversicherung.
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
                    <CardTitle className="text-lg sm:text-xl">
                      Rentenberechnung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="monatsBrutto">
                        Monatliches Bruttogehalt
                      </Label>
                      <Input
                        id="monatsBrutto"
                        type="number"
                        min={0}
                        step={100}
                        value={monatsBrutto}
                        onChange={(e) =>
                          setMonatsBrutto(parseFloat(e.target.value) || 0)
                        }
                      />
                      <p className="text-sm text-muted-foreground">
                        Ihr aktuelles Bruttomonatsgehalt (max. BBG:{" "}
                        {formatCurrency(BBG_RV_JAHR / 12)} EUR/Monat)
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="beitragsjahre">
                        Beitragsjahre (Versicherungsjahre)
                      </Label>
                      <Input
                        id="beitragsjahre"
                        type="number"
                        min={1}
                        max={50}
                        value={beitragsjahre}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (!isNaN(val)) setBeitragsjahre(Math.min(Math.max(val, 1), 50));
                        }}
                      />
                      <p className="text-sm text-muted-foreground">
                        Anzahl der Jahre mit Beitragszahlung (Standard: 40 Jahre)
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rentenalter">
                        Gew&uuml;nschtes Rentenalter
                      </Label>
                      <Select
                        value={rentenalter.toString()}
                        onValueChange={(val) => setRentenalter(parseInt(val))}
                      >
                        <SelectTrigger id="rentenalter" aria-label="Gewünschtes Rentenalter">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 8 }, (_, i) => 63 + i).map(
                            (age) => (
                              <SelectItem key={age} value={age.toString()}>
                                {age} Jahre
                                {age === 67 ? " (Regelaltersgrenze)" : ""}
                                {age < 67 ? ` (${((67 - age) * 3.6).toFixed(1)}% Abschlag)` : ""}
                                {age > 67 ? ` (+${((age - 67) * 6).toFixed(1)}% Zuschlag)` : ""}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="region">Region</Label>
                      <Select
                        value={region}
                        onValueChange={(val: "west" | "ost") =>
                          setRegion(val)
                        }
                      >
                        <SelectTrigger id="region" aria-label="Region auswählen">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="west">West (Rentenwert: {RENTENWERT_WEST.toFixed(2)} EUR)</SelectItem>
                          <SelectItem value="ost">Ost (Rentenwert: {RENTENWERT_OST.toFixed(2)} EUR)</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">
                        Seit 2024 sind die Rentenwerte in West und Ost
                        angeglichen.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">
                      Ihre gesch&auml;tzte Rente
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">
                          Gesch&auml;tzte Monatsrente (brutto)
                        </p>
                        <p className="text-xl sm:text-2xl font-bold text-primary">
                          {formatCurrency(monatsrente)} &euro;
                        </p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">
                          Rentenl&uuml;cke
                        </p>
                        <p className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400">
                          {formatCurrency(rentenluecke)} &euro;
                        </p>
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Entgeltpunkte pro Jahr:
                        </span>
                        <span className="font-medium">
                          {entgeltpunkteProJahr.toFixed(4)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Entgeltpunkte gesamt:
                        </span>
                        <span className="font-medium">
                          {entgeltpunkteGesamt.toFixed(4)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Zugangsfaktor:
                        </span>
                        <span className="font-medium">
                          {zugangsfaktor.toFixed(3)}
                          {rentenalter < 67 && (
                            <span className="text-red-600 ml-1">
                              (&minus;{((1 - zugangsfaktor) * 100).toFixed(1)}%)
                            </span>
                          )}
                          {rentenalter > 67 && (
                            <span className="text-green-600 ml-1">
                              (+{((zugangsfaktor - 1) * 100).toFixed(1)}%)
                            </span>
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Rentenwert ({region === "west" ? "West" : "Ost"}):
                        </span>
                        <span className="font-medium">
                          {(region === "west"
                            ? RENTENWERT_WEST
                            : RENTENWERT_OST
                          ).toFixed(2)}{" "}
                          EUR
                        </span>
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <h4 className="text-sm font-semibold">Vergleich: Aktuelles Einkommen vs. Rente</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Aktuelles Netto:
                        </span>
                        <span className="font-medium">
                          {formatCurrency(currentNetto)} &euro;
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Erwartete Bruttorente:
                        </span>
                        <span className="font-medium">
                          {formatCurrency(monatsrente)} &euro;
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Rentenl&uuml;cke:
                        </span>
                        <span className="font-medium text-red-600">
                          &minus;{formatCurrency(rentenluecke)} &euro;/Monat
                        </span>
                      </div>
                      {/* Visual bar */}
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                          <div
                            className="bg-primary h-4 rounded-full transition-all duration-500"
                            style={{
                              width: `${Math.min((monatsrente / (currentNetto || 1)) * 100, 100)}%`,
                            }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Rente deckt{" "}
                          {currentNetto > 0
                            ? formatCurrency(
                                Math.min(
                                  (monatsrente / currentNetto) * 100,
                                  100
                                )
                              )
                            : "0"}{" "}
                          % Ihres aktuellen Nettos ab
                        </p>
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                      <p className="text-sm text-amber-900 dark:text-amber-100">
                        <Info className="w-4 h-4 inline mr-1" />
                        <strong>Besteuerung:</strong> F&uuml;r Neurentner 2026
                        sind ca. 86% der Rente steuerpflichtig. Zus&auml;tzlich
                        fallen Beitr&auml;ge zur Kranken- und
                        Pflegeversicherung an.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        currentHref="/rechner/rente"
        count={6}
        title="Weitere Gehaltsrechner"
      />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
              Gesetzliche Rente verstehen
            </h2>

            <ContentSection
              heading="Wie wird die Rente berechnet?"
              icon={<BookOpen className="w-5 h-5" />}
              body="Die gesetzliche Rentenformel lautet: Monatsrente = Entgeltpunkte x Zugangsfaktor x Rentenwert x Rentenartfaktor. Entgeltpunkte sammeln Sie über Ihr gesamtes Erwerbsleben: Pro Jahr erhalten Sie Punkte im Verhältnis Ihres Einkommens zum Durchschnittsverdienst. Bei einem Durchschnittsverdienst (2026: 45.358 EUR/Jahr) erhalten Sie genau 1,0 Entgeltpunkte pro Jahr."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Rechenbeispiel:</strong> 40 Beitragsjahre mit
                  Durchschnittsverdienst = 40 Entgeltpunkte. Bei Renteneintritt
                  mit 67: 40 x 1,0 x 39,32 EUR = 1.572,80 EUR Monatsrente
                  (brutto).
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Das Entgeltpunkte-System"
              icon={<TrendingUp className="w-5 h-5" />}
              body="Entgeltpunkte sind der Kern der Rentenberechnung. Sie werden jährlich auf Basis Ihres Bruttoeinkommens im Verhältnis zum Durchschnittsentgelt aller Versicherten ermittelt. Einkommen über der Beitragsbemessungsgrenze (2026: 101.400 EUR/Jahr bzw. 8.450 EUR/Monat) werden nicht berücksichtigt. Neben Erwerbsarbeit können auch Kindererziehungszeiten, Pflegezeiten und Bundeswehr-/Zivildienstzeiten zu Entgeltpunkten führen."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Maximal m&ouml;glich:</strong> Bei Einkommen an der
                  BBG (101.400 EUR/Jahr) erhalten Sie ca. 2,24 Entgeltpunkte
                  pro Jahr. Bei 40 Beitragsjahren w&auml;ren das 89,5
                  Entgeltpunkte und ca. 3.519 EUR Monatsrente.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Fr&uuml;hverrentung und Abschl&auml;ge"
              icon={<Clock className="w-5 h-5" />}
              body="Die Regelaltersgrenze liegt aktuell bei 67 Jahren. Wer früher in Rente gehen möchte, muss Abschläge in Kauf nehmen: 0,3% pro Monat vor der Regelaltersgrenze, also 3,6% pro Jahr. Bei Renteneintritt mit 63 Jahren beträgt der Abschlag 14,4%. Diese Abschläge gelten dauerhaft für die gesamte Rentenbezugszeit. Umgekehrt gibt es bei späterem Renteneintritt einen Zuschlag von 0,5% pro Monat (6% pro Jahr)."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Ausnahme:</strong> Besonders langj&auml;hrig
                  Versicherte (45 Beitragsjahre) k&ouml;nnen mit 65 Jahren
                  abschlagsfrei in Rente gehen. Bei 35 Beitragsjahren ist ein
                  Renteneintritt ab 63 m&ouml;glich &ndash; allerdings mit
                  Abschl&auml;gen.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Besteuerung der Rente"
              icon={<Info className="w-5 h-5" />}
              body="Seit 2005 werden Renten zunehmend besteuert (nachgelagerte Besteuerung). Für Neurentner 2026 liegt der Besteuerungsanteil bei ca. 86% - nur 14% der ersten vollen Jahresrente bleiben als Rentenfreibetrag dauerhaft steuerfrei. Bis 2058 steigt der Besteuerungsanteil schrittweise auf 100%. Zusätzlich zur Einkommensteuer fallen Beiträge zur Krankenversicherung (14,6% + Zusatzbeitrag, je zur Hälfte) und Pflegeversicherung an."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Offizielle Quelle:</strong>{" "}
                  <a
                    href="https://www.deutsche-rentenversicherung.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-amber-700"
                  >
                    Deutsche Rentenversicherung{" "}
                    <ExternalLink className="w-3 h-3 inline" />
                  </a>
                </p>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="H&auml;ufig gestellte Fragen zur Rente"
      />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihre Rente
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren Rentenrechner f&uuml;r eine realistische
              Sch&auml;tzung Ihrer gesetzlichen Rente und Rentenl&uuml;cke.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
