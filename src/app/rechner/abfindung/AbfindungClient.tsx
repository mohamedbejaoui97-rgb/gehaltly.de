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
import { Scale, TrendingDown, Info, PiggyBank } from "lucide-react";

export default function AbfindungClient() {
  const [jahresgehalt, setJahresgehalt] = useState(45000);
  const [jahresgehaltDisplay, setJahresgehaltDisplay] = useState("45.000");
  const [abfindung, setAbfindung] = useState(30000);
  const [abfindungDisplay, setAbfindungDisplay] = useState("30.000");
  const [steuerklasse, setSteuerklasse] = useState<Steuerklasse>(1);
  const [kirchensteuer, setKirchensteuer] = useState(false);

  // Format currency in German format
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatCurrencyShort = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Parse German formatted number
  const parseCurrency = (value: string): number => {
    const cleaned = value.replace(/\./g, "").replace(",", ".");
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  };

  const handleCurrencyInput = (
    raw: string,
    setDisplay: (v: string) => void,
    setValue: (v: number) => void
  ) => {
    setDisplay(raw);
    const num = parseCurrency(raw);
    if (!isNaN(num) && num >= 0) {
      setValue(num);
    }
  };

  const handleCurrencyBlur = (
    display: string,
    setDisplay: (v: string) => void,
    setValue: (v: number) => void,
    fallback: number
  ) => {
    const num = parseCurrency(display);
    if (isNaN(num) || display.trim() === "") {
      setValue(fallback);
      setDisplay(formatCurrencyShort(fallback));
    } else {
      setValue(num);
      setDisplay(formatCurrencyShort(num));
    }
  };

  // Calculate severance tax using Fuenftelregelung
  const results = useMemo(() => {
    if (jahresgehalt <= 0 || abfindung <= 0) return null;

    const baseInput = {
      ...DEFAULT_INPUT,
      steuerklasse,
      kirchensteuer,
      abrechnungszeitraum: "jahr" as const,
    };

    // 1. Tax on regular annual income (without severance)
    const regularResult = calculateGermanTax({
      ...baseInput,
      bruttoeinkommen: jahresgehalt,
    });
    const annualTaxRegular = regularResult.gesamtSteuern * 12;

    // 2. Tax with 1/5 of severance added to annual income
    const fifthResult = calculateGermanTax({
      ...baseInput,
      bruttoeinkommen: jahresgehalt + abfindung / 5,
    });
    const annualTaxWithFifth = fifthResult.gesamtSteuern * 12;

    // 3. Tax on severance WITH Fuenftelregelung
    const taxOnSeveranceFuenftel =
      (annualTaxWithFifth - annualTaxRegular) * 5;

    // 4. Tax WITHOUT Fuenftelregelung (full severance added to income)
    const fullResult = calculateGermanTax({
      ...baseInput,
      bruttoeinkommen: jahresgehalt + abfindung,
    });
    const annualTaxFull = fullResult.gesamtSteuern * 12;
    const taxWithoutRule = annualTaxFull - annualTaxRegular;

    // Ensure no negative taxes
    const taxFuenftel = Math.max(0, taxOnSeveranceFuenftel);
    const taxOhne = Math.max(0, taxWithoutRule);

    // Savings
    const savings = taxOhne - taxFuenftel;

    // Net severance
    const nettoAbfindung = abfindung - taxFuenftel;

    // Effective tax rate
    const effectiveRate =
      abfindung > 0 ? (taxFuenftel / abfindung) * 100 : 0;

    return {
      taxFuenftel,
      taxOhne,
      savings,
      nettoAbfindung,
      effectiveRate,
    };
  }, [jahresgehalt, abfindung, steuerklasse, kirchensteuer]);

  // Bar width percentage for visual comparison
  const barMaxTax = results
    ? Math.max(results.taxOhne, results.taxFuenftel, 1)
    : 1;

  // FAQ data
  const faqs = [
    {
      question:
        "Was ist die Fuenftelregelung bei Abfindungen?",
      answer:
        "Die Fuenftelregelung (§34 EStG) ist eine steuerliche Verguenstigung fuer ausserordentliche Einkuenfte wie Abfindungen. Statt die gesamte Abfindung auf einmal zu versteuern, wird nur ein Fuenftel zur regulaeren Einkommensteuer hinzugerechnet. Die daraus resultierende Steuerdifferenz wird mit fuenf multipliziert. Durch die progressive Besteuerung in Deutschland ergibt sich so eine deutlich niedrigere Steuerlast als bei einer normalen Versteuerung der gesamten Abfindung.",
    },
    {
      question: "Muss ich auf eine Abfindung Sozialversicherungsbeitraege zahlen?",
      answer:
        "Nein, auf eine Abfindung fallen keine Sozialversicherungsbeitraege an. Abfindungen gelten als Entschaedigung fuer den Verlust des Arbeitsplatzes und sind daher von der Kranken-, Renten-, Pflege- und Arbeitslosenversicherung befreit. Es fallen ausschliesslich Lohnsteuer, Solidaritaetszuschlag und gegebenenfalls Kirchensteuer an. Dies gilt jedoch nur fuer echte Abfindungen, nicht fuer Gehaelter oder Boni, die als Abfindung bezeichnet werden.",
    },
    {
      question: "Wie hoch ist eine uebliche Abfindung?",
      answer:
        "Die gaengige Faustformel lautet: 0,5 Bruttomonatsgehaelter pro Beschaeftigungsjahr. Bei einem Monatsgehalt von 4.000 EUR und 10 Jahren Betriebszugehoerigkeit waeren das 20.000 EUR. Allerdings gibt es keinen gesetzlichen Anspruch auf eine Abfindung in dieser Hoehe. Die tatsaechliche Abfindung haengt von der Verhandlungsposition, den Kuendigungsgruenden und der finanziellen Lage des Arbeitgebers ab. In Sozialplaenen oder bei Kuendigungsschutzklagen koennen auch hoehere Faktoren (1,0 oder mehr) vereinbart werden.",
    },
    {
      question:
        "Beeinflusst eine Abfindung mein Arbeitslosengeld?",
      answer:
        "Eine Abfindung fuehrt nicht automatisch zu einer Kuerzung des Arbeitslosengeldes. Allerdings kann bei einem Aufhebungsvertrag eine Sperrzeit von bis zu 12 Wochen beim ALG I drohen, wenn Sie den Vertrag ohne wichtigen Grund unterschrieben haben. Zudem kann eine Ruhezeit eintreten, wenn die ordentliche Kuendigungsfrist nicht eingehalten wurde. Waehrend der Sperrzeit erhalten Sie kein ALG I, und der Gesamtanspruch verkuerzt sich um ein Viertel der Anspruchsdauer.",
    },
    {
      question: "Wann lohnt sich die Fuenftelregelung besonders?",
      answer:
        "Die Fuenftelregelung lohnt sich besonders bei hohen Abfindungen und niedrigerem regulaerem Einkommen, da hier der progressive Steuertarif staerker zuschlaegt. Bei einem Jahresgehalt von 40.000 EUR und einer Abfindung von 60.000 EUR kann die Ersparnis mehrere Tausend Euro betragen. Umgekehrt bringt die Fuenftelregelung wenig Vorteil, wenn das regulaere Einkommen bereits im Spitzensteuersatz liegt (ab ca. 69.878 EUR), da dann auch ein Fuenftel der Abfindung mit 42% versteuert wird.",
    },
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Abfindungsrechner 2026",
    url: "https://gehaltly.de/rechner/abfindung",
    description:
      "Kostenloser Abfindungsrechner 2026 mit Fuenftelregelung - Berechnen Sie die Steuer auf Ihre Abfindung nach §34 EStG.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Abfindung versteuern mit Fuenftelregelung",
      "Steuerersparnis berechnen",
      "Netto-Abfindung ermitteln",
      "Vergleich mit und ohne Fuenftelregelung",
      "Alle Steuerklassen 2026",
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
            { label: "Abfindungsrechner", href: "/rechner/abfindung" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <PageHero
        title="Abfindungsrechner 2026"
        subtitle="Abfindung versteuern mit F\u00fcnftelregelung (\u00a734 EStG)"
      />

      {/* Author byline */}
      <div className="container mx-auto px-4 pb-4">
        <p className="text-center text-sm text-muted-foreground">
          Von gehaltly.de Redaktion | Aktualisiert: 1. M\u00e4rz 2026
        </p>
      </div>

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Mit dem Abfindungsrechner berechnen Sie, wie viel Steuer auf Ihre
              Abfindung anf\u00e4llt und wie viel Sie dank der F\u00fcnftelregelung
              sparen. Abfindungen sind zwar sozialversicherungsfrei, unterliegen
              aber der Einkommensteuer.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Die F\u00fcnftelregelung nach \u00a734 EStG mildert die
              Steuerprogression: Statt die Abfindung komplett auf einmal zu
              versteuern, wird rechnerisch nur ein F\u00fcnftel ber\u00fccksichtigt.
              Unser Rechner zeigt Ihnen den direkten Vergleich.
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
                <div className="bg-white dark:bg-card rounded-xl border shadow-sm p-6 space-y-6">
                  <h2 className="text-lg sm:text-xl font-bold">
                    Ihre Angaben
                  </h2>

                  {/* Jahresgehalt */}
                  <div className="space-y-2">
                    <Label htmlFor="jahresgehalt">
                      Jahresgehalt (brutto)
                    </Label>
                    <div className="relative">
                      <Input
                        id="jahresgehalt"
                        type="text"
                        inputMode="numeric"
                        value={jahresgehaltDisplay}
                        onChange={(e) =>
                          handleCurrencyInput(
                            e.target.value,
                            setJahresgehaltDisplay,
                            setJahresgehalt
                          )
                        }
                        onBlur={() =>
                          handleCurrencyBlur(
                            jahresgehaltDisplay,
                            setJahresgehaltDisplay,
                            setJahresgehalt,
                            45000
                          )
                        }
                        className="pr-8"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                        \u20ac
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ihr regul\u00e4res Brutto-Jahresgehalt ohne Abfindung
                    </p>
                  </div>

                  {/* Abfindungshoehe */}
                  <div className="space-y-2">
                    <Label htmlFor="abfindung">
                      Abfindungsh\u00f6he
                    </Label>
                    <div className="relative">
                      <Input
                        id="abfindung"
                        type="text"
                        inputMode="numeric"
                        value={abfindungDisplay}
                        onChange={(e) =>
                          handleCurrencyInput(
                            e.target.value,
                            setAbfindungDisplay,
                            setAbfindung
                          )
                        }
                        onBlur={() =>
                          handleCurrencyBlur(
                            abfindungDisplay,
                            setAbfindungDisplay,
                            setAbfindung,
                            30000
                          )
                        }
                        className="pr-8"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                        \u20ac
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Vereinbarte Brutto-Abfindung
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
                      <SelectTrigger
                        id="steuerklasse"
                        aria-label="Steuerklasse ausw\u00e4hlen"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">
                          Steuerklasse 1 - Ledig
                        </SelectItem>
                        <SelectItem value="2">
                          Steuerklasse 2 - Alleinerziehend
                        </SelectItem>
                        <SelectItem value="3">
                          Steuerklasse 3 - Verheiratet (h\u00f6herer Verdienst)
                        </SelectItem>
                        <SelectItem value="4">
                          Steuerklasse 4 - Verheiratet (gleicher Verdienst)
                        </SelectItem>
                        <SelectItem value="5">
                          Steuerklasse 5 - Verheiratet (geringerer Verdienst)
                        </SelectItem>
                        <SelectItem value="6">
                          Steuerklasse 6 - Zweitjob
                        </SelectItem>
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

                  {/* Info box */}
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                      <Info className="w-4 h-4 inline mr-1" />
                      <strong>Hinweis:</strong> Auf Abfindungen fallen keine
                      Sozialversicherungsbeitr\u00e4ge an. Es wird nur Lohnsteuer,
                      Solidarit\u00e4tszuschlag und ggf. Kirchensteuer berechnet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-6">
                {results && (
                  <>
                    {/* Main result card */}
                    <div className="bg-white dark:bg-card rounded-xl border shadow-sm p-6 space-y-5">
                      <h2 className="text-lg sm:text-xl font-bold">
                        Ergebnis: Abfindung versteuern
                      </h2>

                      {/* Netto-Abfindung - big green */}
                      <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-5">
                        <p className="text-sm text-muted-foreground mb-1">
                          <PiggyBank className="w-4 h-4 inline mr-1" />
                          Netto-Abfindung (mit F\u00fcnftelregelung)
                        </p>
                        <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
                          {formatCurrency(results.nettoAbfindung)} \u20ac
                        </p>
                      </div>

                      {/* Tax details */}
                      <div className="space-y-3 border-t pt-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Brutto-Abfindung
                          </span>
                          <span className="font-medium">
                            {formatCurrency(abfindung)} \u20ac
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Steuer mit F\u00fcnftelregelung
                          </span>
                          <span className="font-medium text-amber-600">
                            -{formatCurrency(results.taxFuenftel)} \u20ac
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Steuer OHNE F\u00fcnftelregelung
                          </span>
                          <span className="font-medium text-red-600">
                            -{formatCurrency(results.taxOhne)} \u20ac
                          </span>
                        </div>
                        <div className="flex justify-between text-sm border-t pt-3">
                          <span className="font-semibold text-green-700 dark:text-green-400">
                            Ersparnis durch F\u00fcnftelregelung
                          </span>
                          <span className="font-bold text-green-700 dark:text-green-400">
                            {formatCurrency(Math.max(0, results.savings))} \u20ac
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Effektiver Steuersatz
                          </span>
                          <span className="font-medium">
                            {results.effectiveRate.toFixed(1)} %
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Visual comparison bar */}
                    <div className="bg-white dark:bg-card rounded-xl border shadow-sm p-6 space-y-4">
                      <h3 className="text-base sm:text-lg font-bold">
                        <Scale className="w-5 h-5 inline mr-2" />
                        Steuervergleich
                      </h3>

                      <div className="space-y-4">
                        {/* With Fuenftelregelung */}
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">
                              Mit F\u00fcnftelregelung
                            </span>
                            <span className="font-medium">
                              {formatCurrency(results.taxFuenftel)} \u20ac
                            </span>
                          </div>
                          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-6 overflow-hidden">
                            <div
                              className="bg-green-500 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                              style={{
                                width: `${Math.max(
                                  2,
                                  (results.taxFuenftel / barMaxTax) * 100
                                )}%`,
                              }}
                            >
                              {(results.taxFuenftel / barMaxTax) * 100 > 20 && (
                                <span className="text-xs text-white font-medium">
                                  {formatCurrencyShort(results.taxFuenftel)} \u20ac
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Without Fuenftelregelung */}
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">
                              Ohne F\u00fcnftelregelung
                            </span>
                            <span className="font-medium">
                              {formatCurrency(results.taxOhne)} \u20ac
                            </span>
                          </div>
                          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-6 overflow-hidden">
                            <div
                              className="bg-red-500 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                              style={{
                                width: `${Math.max(
                                  2,
                                  (results.taxOhne / barMaxTax) * 100
                                )}%`,
                              }}
                            >
                              {(results.taxOhne / barMaxTax) * 100 > 20 && (
                                <span className="text-xs text-white font-medium">
                                  {formatCurrencyShort(results.taxOhne)} \u20ac
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Savings highlight */}
                        {results.savings > 0 && (
                          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-3 text-center">
                            <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                              <TrendingDown className="w-4 h-4 inline mr-1" />
                              Sie sparen{" "}
                              {formatCurrency(results.savings)} \u20ac durch die
                              F\u00fcnftelregelung
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks
        currentHref="/rechner/abfindung"
        count={6}
        title="Weitere Gehaltsrechner"
      />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
              Abfindung versteuern: Alles Wichtige
            </h2>

            <ContentSection
              heading="Was ist die F\u00fcnftelregelung?"
              icon={<Scale className="w-5 h-5" />}
              body="Die F\u00fcnftelregelung nach \u00a734 EStG ist eine steuerliche Erleichterung f\u00fcr au\u00dferordentliche Eink\u00fcnfte wie Abfindungen. Das Prinzip: Nur ein F\u00fcnftel der Abfindung wird zum regulaeren Jahreseinkommen hinzugerechnet. Die daraus entstehende Steuermehrbelastung wird mit f\u00fcnf multipliziert. Durch die progressive Einkommensteuer f\u00e4llt die Gesamtsteuer so deutlich niedriger aus, als wenn die komplette Abfindung auf einmal versteuert w\u00fcrde."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Rechenbeispiel:</strong> Bei 45.000 \u20ac Jahresgehalt
                  und 30.000 \u20ac Abfindung wird nur 6.000 \u20ac (ein F\u00fcnftel)
                  zum Gehalt addiert. Die Steuerdifferenz auf 51.000 \u20ac vs.
                  45.000 \u20ac wird dann mal 5 genommen &ndash; das ist weniger als
                  die Steuer auf volle 75.000 \u20ac.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Wann wird eine Abfindung gezahlt?"
              icon={<Info className="w-5 h-5" />}
              body="Eine Abfindung ist eine einmalige Zahlung des Arbeitgebers bei Beendigung des Arbeitsverh\u00e4ltnisses. Es gibt keinen generellen gesetzlichen Anspruch auf eine Abfindung. Sie wird typischerweise vereinbart bei:"
            >
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>
                  <strong>Aufhebungsvertrag:</strong> Arbeitgeber und
                  Arbeitnehmer einigen sich einvernehmlich auf die Beendigung
                </li>
                <li>
                  <strong>Betriebsbedingte K\u00fcndigung:</strong> Abfindung gem\u00e4\u00df
                  \u00a71a KSchG (0,5 Monatsgeh\u00e4lter pro Besch\u00e4ftigungsjahr)
                </li>
                <li>
                  <strong>Sozialplan:</strong> Bei Massenentlassungen oder
                  Betriebsschlie\u00dfungen
                </li>
                <li>
                  <strong>K\u00fcndigungsschutzklage:</strong> Vergleich vor dem
                  Arbeitsgericht
                </li>
              </ul>
            </ContentSection>

            <ContentSection
              heading="Faustformel f\u00fcr die Abfindungsh\u00f6he"
              icon={<PiggyBank className="w-5 h-5" />}
              body="Die g\u00e4ngige Faustformel lautet: 0,5 Bruttomonatsgeh\u00e4lter pro Jahr der Betriebszugeh\u00f6rigkeit. Bei einem Monatsgehalt von 4.000 \u20ac und 8 Jahren Betriebszugeh\u00f6rigkeit w\u00e4ren das: 0,5 \u00d7 4.000 \u20ac \u00d7 8 = 16.000 \u20ac. In der Praxis k\u00f6nnen die Betr\u00e4ge je nach Verhandlungsposition und Branche deutlich abweichen &ndash; sowohl nach oben als auch nach unten."
            />

            <ContentSection
              heading="Abfindung und Arbeitslosengeld"
              icon={<TrendingDown className="w-5 h-5" />}
              body="Bei einem Aufhebungsvertrag droht eine Sperrzeit beim Arbeitslosengeld I von bis zu 12 Wochen, wenn kein wichtiger Grund vorliegt. Zus\u00e4tzlich kann eine Ruhezeit eintreten, wenn die ordentliche K\u00fcndigungsfrist nicht eingehalten wurde. Die Abfindung selbst wird nicht auf das ALG I angerechnet, aber die Sperrzeit verkuerzt den Gesamtanspruch um ein Viertel."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-2">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Wichtige Links:</strong>
                </p>
                <ul className="text-sm text-blue-900 dark:text-blue-100 space-y-1">
                  <li>
                    <a
                      href="https://www.gesetze-im-internet.de/estg/__34.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      \u00a734 EStG &ndash; Au\u00dferordentliche Eink\u00fcnfte (gesetze-im-internet.de)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.arbeitsagentur.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Bundesagentur f\u00fcr Arbeit &ndash; Informationen zu ALG I
                    </a>
                  </li>
                </ul>
              </div>
            </ContentSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="H\u00e4ufig gestellte Fragen zur Abfindung"
      />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Abfindung berechnen &ndash; jetzt starten
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren Abfindungsrechner, um Ihre Steuerlast und
              Ersparnis durch die F\u00fcnftelregelung sofort zu berechnen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
