"use client";

import { useState, useEffect } from "react";
import { Info, BookOpen, Shield, Clock, ExternalLink } from "lucide-react";
import { calculateGermanTax, DEFAULT_INPUT, type Steuerklasse } from "@/lib/tax";
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

export default function KurzarbeitergeldClient() {
  const [normalBrutto, setNormalBrutto] = useState(3500);
  const [reducedBrutto, setReducedBrutto] = useState(2000);
  const [steuerklasse, setSteuerklasse] = useState<Steuerklasse>(1);
  const [hasChildren, setHasChildren] = useState(false);

  const [normalNetto, setNormalNetto] = useState(0);
  const [reducedNetto, setReducedNetto] = useState(0);
  const [kug, setKug] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  useEffect(() => {
    const kinder = hasChildren ? 1 : 0;
    const rate = hasChildren ? 0.67 : 0.60;

    const normalResult = calculateGermanTax({
      ...DEFAULT_INPUT,
      bruttoeinkommen: normalBrutto,
      abrechnungszeitraum: "monat",
      steuerklasse,
      kinder,
    });

    const reducedResult = calculateGermanTax({
      ...DEFAULT_INPUT,
      bruttoeinkommen: reducedBrutto,
      abrechnungszeitraum: "monat",
      steuerklasse,
      kinder,
    });

    const netDiff = normalResult.netto - reducedResult.netto;
    const kugAmount = Math.max(netDiff * rate, 0);

    setNormalNetto(normalResult.netto);
    setReducedNetto(reducedResult.netto);
    setKug(kugAmount);
    setTotalIncome(reducedResult.netto + kugAmount);
  }, [normalBrutto, reducedBrutto, steuerklasse, hasChildren]);

  const nettoLoss = normalNetto - totalIncome;
  const retentionRate = normalNetto > 0 ? (totalIncome / normalNetto) * 100 : 0;

  const faqs = [
    {
      question: "Was ist Kurzarbeitergeld und wer hat Anspruch?",
      answer: "Kurzarbeitergeld (KUG) ist eine Leistung der Bundesagentur für Arbeit, die Arbeitnehmer bei vorübergehendem Arbeitsausfall finanziell absichert. Anspruch haben sozialversicherungspflichtig Beschäftigte, wenn der Arbeitgeber Kurzarbeit anmeldet und mindestens 10% der Belegschaft von Entgeltausfall betroffen sind. Minijobber, Auszubildende und Rentner haben in der Regel keinen Anspruch auf KUG.",
    },
    {
      question: "Wie wird Kurzarbeitergeld berechnet?",
      answer: "Das Kurzarbeitergeld berechnet sich aus der Netto-Entgeltdifferenz: Der Unterschied zwischen dem Nettolohn bei normalem Gehalt und dem Nettolohn bei reduziertem Gehalt während der Kurzarbeit. Von dieser Differenz erhalten Arbeitnehmer ohne Kinder 60% und Arbeitnehmer mit mindestens einem Kind 67% als KUG. Das KUG ist steuerfrei, unterliegt aber dem Progressionsvorbehalt.",
    },
    {
      question: "Wie lange kann man Kurzarbeitergeld beziehen?",
      answer: "Die reguläre Bezugsdauer von Kurzarbeitergeld beträgt maximal 12 Monate. In besonderen Krisensituationen kann die Bundesregierung die Bezugsdauer per Verordnung auf bis zu 24 Monate verlängern, wie es zuletzt während der Corona-Pandemie der Fall war. Nach Ablauf der Bezugsdauer muss eine neue Anwartschaftszeit von mindestens 3 Monaten erfüllt werden.",
    },
    {
      question: "Muss man Kurzarbeitergeld versteuern?",
      answer: "Kurzarbeitergeld selbst ist steuerfrei, unterliegt aber dem Progressionsvorbehalt. Das bedeutet: Das KUG wird bei der Steuererklärung zum übrigen Einkommen addiert, um den persönlichen Steuersatz zu ermitteln. Dieser höhere Steuersatz wird dann auf das reguläre Einkommen angewendet. Bei KUG über 410 EUR im Jahr sind Sie zur Abgabe einer Steuererklärung verpflichtet.",
    },
    {
      question: "Kann der Arbeitgeber das Kurzarbeitergeld aufstocken?",
      answer: "Ja, viele Arbeitgeber stocken das Kurzarbeitergeld freiwillig auf, oft auf 80-100% des normalen Nettogehalts. Dies ist in vielen Tarifverträgen oder Betriebsvereinbarungen geregelt. Die Aufstockung durch den Arbeitgeber ist seit 2020 bis zu 80% des Unterschiedsbetrags zwischen Soll- und Ist-Entgelt steuerfrei. Darüber hinausgehende Aufstockungen sind regulär zu versteuern.",
    },
  ];

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Kurzarbeitergeld Rechner 2026",
    url: "https://gehaltly.de/rechner/kurzarbeitergeld",
    description:
      "Kostenloser Kurzarbeitergeld-Rechner 2026 - Berechnen Sie Ihr KUG bei Kurzarbeit mit 60% oder 67% Satz.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Kurzarbeitergeld berechnen",
      "60% und 67% KUG-Satz",
      "Netto-Entgeltdifferenz",
      "Alle Steuerklassen",
      "Gesamteinkommen bei Kurzarbeit",
    ],
  };

  return (
    <>
      <SchemaMarkup schema={webAppSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: "Rechner", href: "/rechner" },
            { label: "Kurzarbeitergeld", href: "/rechner/kurzarbeitergeld" },
          ]}
        />
      </div>

      <PageHero
        title="Kurzarbeitergeld Rechner 2026"
        subtitle="Berechnen Sie Ihr Kurzarbeitergeld (KUG)"
        description="Ermitteln Sie schnell und einfach, wie viel Kurzarbeitergeld Ihnen bei reduzierter Arbeitszeit zusteht - mit allen Steuerklassen und Kinderzuschlag."
      />

      {/* Author byline + intro */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground mb-6">
              Von gehaltly.de Redaktion | Aktualisiert: 1. M&auml;rz 2026
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Bei Kurzarbeit wird Ihre Arbeitszeit vor&uuml;bergehend reduziert
              und Sie erhalten weniger Bruttolohn. Um den Einkommensverlust
              abzufedern, zahlt die Bundesagentur f&uuml;r Arbeit
              Kurzarbeitergeld (KUG). Dieses betr&auml;gt 60% der
              Netto-Entgeltdifferenz &ndash; oder 67%, wenn Sie mindestens ein
              Kind haben.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unser Rechner berechnet Ihr Kurzarbeitergeld auf Basis der
              aktuellen Steuer- und Sozialversicherungswerte 2026. Geben Sie
              einfach Ihr normales und reduziertes Bruttogehalt ein.
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
                      Kurzarbeitergeld berechnen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="normalBrutto">
                        Normales Bruttogehalt (monatlich)
                      </Label>
                      <Input
                        id="normalBrutto"
                        type="number"
                        min={0}
                        step={100}
                        value={normalBrutto}
                        onChange={(e) =>
                          setNormalBrutto(parseFloat(e.target.value) || 0)
                        }
                      />
                      <p className="text-sm text-muted-foreground">
                        Ihr reguläres Bruttomonatsgehalt vor Kurzarbeit
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reducedBrutto">
                        Reduziertes Bruttogehalt (bei Kurzarbeit)
                      </Label>
                      <Input
                        id="reducedBrutto"
                        type="number"
                        min={0}
                        step={100}
                        value={reducedBrutto}
                        onChange={(e) =>
                          setReducedBrutto(parseFloat(e.target.value) || 0)
                        }
                      />
                      <p className="text-sm text-muted-foreground">
                        Ihr Bruttogehalt w&auml;hrend der Kurzarbeit (bei
                        reduzierter Arbeitszeit)
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="steuerklasse">Steuerklasse</Label>
                      <Select
                        value={steuerklasse.toString()}
                        onValueChange={(val) =>
                          setSteuerklasse(parseInt(val) as Steuerklasse)
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

                    <div className="space-y-2">
                      <Label htmlFor="kinder">Kinder (mind. 1 Kind?)</Label>
                      <Select
                        value={hasChildren ? "ja" : "nein"}
                        onValueChange={(val) =>
                          setHasChildren(val === "ja")
                        }
                      >
                        <SelectTrigger id="kinder" aria-label="Kinder vorhanden">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nein">Nein &ndash; 60% KUG</SelectItem>
                          <SelectItem value="ja">Ja &ndash; 67% KUG</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">
                        Mit mindestens einem Kind erhalten Sie 67% statt 60%
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
                      Ihr Kurzarbeitergeld
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">
                          Kurzarbeitergeld
                        </p>
                        <p className="text-xl sm:text-2xl font-bold text-primary">
                          {formatCurrency(kug)} &euro;
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">
                          Gesamteinkommen
                        </p>
                        <p className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                          {formatCurrency(totalIncome)} &euro;
                        </p>
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Normales Netto:
                        </span>
                        <span className="font-medium">
                          {formatCurrency(normalNetto)} &euro;
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Reduziertes Netto (Kurzarbeit):
                        </span>
                        <span className="font-medium">
                          {formatCurrency(reducedNetto)} &euro;
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Netto-Entgeltdifferenz:
                        </span>
                        <span className="font-medium">
                          {formatCurrency(Math.max(normalNetto - reducedNetto, 0))} &euro;
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          KUG-Satz:
                        </span>
                        <span className="font-medium">
                          {hasChildren ? "67%" : "60%"}
                        </span>
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Einkommensverlust:
                        </span>
                        <span className="font-medium text-red-600">
                          &minus;{formatCurrency(Math.max(nettoLoss, 0))} &euro;
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Einkommenserhalt:
                        </span>
                        <span className="font-medium">
                          {formatCurrency(retentionRate)}%
                        </span>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-sm text-blue-900 dark:text-blue-100">
                        <Info className="w-4 h-4 inline mr-1" />
                        <strong>Hinweis:</strong> Kurzarbeitergeld ist steuerfrei,
                        unterliegt aber dem Progressionsvorbehalt. Es muss in der
                        Steuererkl&auml;rung angegeben werden.
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
        currentHref="/rechner/kurzarbeitergeld"
        count={6}
        title="Weitere Gehaltsrechner"
      />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
              Kurzarbeitergeld verstehen
            </h2>

            <ContentSection
              heading="Was ist Kurzarbeitergeld?"
              icon={<BookOpen className="w-5 h-5" />}
              body="Kurzarbeitergeld (KUG) ist eine Entgeltersatzleistung der Bundesagentur für Arbeit. Es wird gezahlt, wenn Unternehmen aufgrund von wirtschaftlichen Schwierigkeiten, Auftragsrückgängen oder außergewöhnlichen Ereignissen die Arbeitszeit ihrer Beschäftigten vorübergehend reduzieren müssen. Ziel ist es, Entlassungen zu vermeiden und Arbeitsplätze zu sichern."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Rechenbeispiel:</strong> Bei einem normalen
                  Bruttogehalt von 3.500 EUR und einem reduzierten Brutto von
                  2.000 EUR (Steuerklasse 1, keine Kinder) betr&auml;gt die
                  Netto-Entgeltdifferenz ca. 890 EUR. Das KUG von 60% ergibt
                  ca. 534 EUR monatlich.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Voraussetzungen f&uuml;r Kurzarbeitergeld"
              icon={<Shield className="w-5 h-5" />}
              body="Damit KUG gezahlt wird, müssen bestimmte Voraussetzungen erfüllt sein: Der Arbeitsausfall muss erheblich sein (mindestens 10% der Beschäftigten betroffen), wirtschaftliche Gründe haben und unvermeidbar sein. Der Arbeitgeber muss die Kurzarbeit bei der Agentur für Arbeit anzeigen. Arbeitnehmer müssen sozialversicherungspflichtig beschäftigt sein und dürfen nicht gekündigt sein."
            >
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-100">
                  <strong>Kein Anspruch:</strong> Minijobber (unter 556 EUR/Monat),
                  Werkstudenten, Rentner und Auszubildende (au&szlig;er bei
                  v&ouml;lliger Betriebsstilllegung) haben in der Regel keinen
                  Anspruch auf KUG.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Dauer und Verl&auml;ngerung des KUG"
              icon={<Clock className="w-5 h-5" />}
              body="Die reguläre Bezugsdauer von Kurzarbeitergeld beträgt maximal 12 Monate. In wirtschaftlichen Krisenzeiten kann die Bundesregierung die Bezugsdauer per Verordnung verlängern - während der Corona-Pandemie wurde sie auf bis zu 28 Monate ausgeweitet. Nach Ablauf der maximalen Bezugsdauer muss eine Karenzzeit von mindestens 3 Monaten ohne Kurzarbeit eingehalten werden, bevor ein neuer Anspruch entsteht."
            >
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Gut zu wissen:</strong> W&auml;hrend des
                  KUG-Bezugs bleiben alle Sozialversicherungen bestehen. Der
                  Arbeitgeber zahlt die Sozialversicherungsbeitr&auml;ge auf die
                  Differenz zwischen normalem und reduziertem Entgelt allein.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              heading="Berechnung des Kurzarbeitergeldes"
              icon={<Info className="w-5 h-5" />}
              body="Das KUG wird nach der Netto-Entgeltdifferenz berechnet: Zunächst wird das pauschalisierte Nettoentgelt für das normale Gehalt (Soll-Entgelt) ermittelt, dann das Nettoentgelt für das reduzierte Gehalt (Ist-Entgelt). Die Differenz dieser beiden Nettobeträge ist die Netto-Entgeltdifferenz. Arbeitnehmer ohne Kinder erhalten davon 60%, Arbeitnehmer mit Kindern 67%."
            >
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <strong>Offizielle Quelle:</strong>{" "}
                  <a
                    href="https://www.arbeitsagentur.de/unternehmen/finanziell/kurzarbeitergeld-uebersicht"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-amber-700"
                  >
                    Bundesagentur f&uuml;r Arbeit &ndash; Kurzarbeitergeld{" "}
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
        title="H&auml;ufig gestellte Fragen zum Kurzarbeitergeld"
      />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Berechnen Sie jetzt Ihr Kurzarbeitergeld
            </h2>
            <p className="text-lg text-muted-foreground">
              Nutzen Sie unseren KUG-Rechner f&uuml;r eine schnelle und
              zuverl&auml;ssige Berechnung Ihres Kurzarbeitergeldes 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
