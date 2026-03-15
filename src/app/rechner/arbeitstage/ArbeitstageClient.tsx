"use client";

import { useState, useMemo } from "react";
import { BUNDESLAENDER } from "@/lib/tax/bundeslaender";
import type { Bundesland } from "@/lib/tax/types";
import PageHero from "@/components/content/PageHero";
import ContentSection from "@/components/content/ContentSection";
import FAQSection from "@/components/content/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Info } from "lucide-react";

// ── Holiday definitions for 2026 ──────────────────────────────────────

interface Holiday {
  date: Date;
  name: string;
  states: Bundesland[] | "all";
}

const HOLIDAYS_2026: Holiday[] = [
  // Nationwide
  { date: new Date(2026, 0, 1), name: "Neujahr", states: "all" },
  { date: new Date(2026, 3, 3), name: "Karfreitag", states: "all" },
  { date: new Date(2026, 3, 6), name: "Ostermontag", states: "all" },
  { date: new Date(2026, 4, 1), name: "Tag der Arbeit", states: "all" },
  { date: new Date(2026, 4, 14), name: "Christi Himmelfahrt", states: "all" },
  { date: new Date(2026, 4, 25), name: "Pfingstmontag", states: "all" },
  { date: new Date(2026, 9, 3), name: "Tag der Deutschen Einheit", states: "all" },
  { date: new Date(2026, 11, 25), name: "1. Weihnachtstag", states: "all" },
  { date: new Date(2026, 11, 26), name: "2. Weihnachtstag", states: "all" },

  // Regional
  { date: new Date(2026, 0, 6), name: "Heilige Drei Könige", states: ["baden-wuerttemberg", "bayern", "sachsen-anhalt"] },
  { date: new Date(2026, 2, 8), name: "Internationaler Frauentag", states: ["berlin"] },
  { date: new Date(2026, 5, 19), name: "Fronleichnam", states: ["baden-wuerttemberg", "bayern", "hessen", "nordrhein-westfalen", "rheinland-pfalz", "saarland"] },
  { date: new Date(2026, 7, 15), name: "Mariä Himmelfahrt", states: ["bayern", "saarland"] },
  { date: new Date(2026, 8, 20), name: "Weltkindertag", states: ["thueringen"] },
  { date: new Date(2026, 9, 31), name: "Reformationstag", states: ["brandenburg", "bremen", "hamburg", "mecklenburg-vorpommern", "niedersachsen", "sachsen", "schleswig-holstein", "thueringen"] },
  { date: new Date(2026, 10, 1), name: "Allerheiligen", states: ["baden-wuerttemberg", "bayern", "nordrhein-westfalen", "rheinland-pfalz", "saarland"] },
  { date: new Date(2026, 10, 18), name: "Buß- und Bettag", states: ["sachsen"] },
];

const MONTH_NAMES = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

const DAY_NAMES = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

// ── Calculation helpers ───────────────────────────────────────────────

function getHolidaysForState(state: Bundesland): Holiday[] {
  return HOLIDAYS_2026.filter(
    (h) => h.states === "all" || h.states.includes(state)
  );
}

function isWeekday(date: Date): boolean {
  const day = date.getDay();
  return day >= 1 && day <= 5; // Mon-Fri
}

function isSaturday(date: Date): boolean {
  return date.getDay() === 6;
}

function daysInMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day}.${month}.2026`;
}

interface MonthData {
  weekdays: number;
  saturdays: number;
  holidays: number; // holidays falling on weekdays
  holidaysSat: number; // holidays falling on saturdays
  workDays5: number;
  workDays6: number;
}

function calculateMonthData(month: number, state: Bundesland): MonthData {
  const total = daysInMonth(month, 2026);
  const holidays = getHolidaysForState(state).filter((h) => h.date.getMonth() === month);

  let weekdays = 0;
  let saturdays = 0;
  for (let d = 1; d <= total; d++) {
    const date = new Date(2026, month, d);
    if (isWeekday(date)) weekdays++;
    if (isSaturday(date)) saturdays++;
  }

  let holidaysOnWeekday = 0;
  let holidaysOnSaturday = 0;
  for (const h of holidays) {
    if (isWeekday(h.date)) holidaysOnWeekday++;
    if (isSaturday(h.date)) holidaysOnSaturday++;
  }

  return {
    weekdays,
    saturdays,
    holidays: holidaysOnWeekday,
    holidaysSat: holidaysOnSaturday,
    workDays5: weekdays - holidaysOnWeekday,
    workDays6: weekdays + saturdays - holidaysOnWeekday - holidaysOnSaturday,
  };
}

function calculateYearData(state: Bundesland): { months: MonthData[]; totals: MonthData } {
  const months: MonthData[] = [];
  const totals: MonthData = { weekdays: 0, saturdays: 0, holidays: 0, holidaysSat: 0, workDays5: 0, workDays6: 0 };

  for (let m = 0; m < 12; m++) {
    const data = calculateMonthData(m, state);
    months.push(data);
    totals.weekdays += data.weekdays;
    totals.saturdays += data.saturdays;
    totals.holidays += data.holidays;
    totals.holidaysSat += data.holidaysSat;
    totals.workDays5 += data.workDays5;
    totals.workDays6 += data.workDays6;
  }

  return { months, totals };
}

// ── Component ─────────────────────────────────────────────────────────

export default function ArbeitstageClient() {
  const [bundesland, setBundesland] = useState<Bundesland>("bayern");
  const [daysPerWeek, setDaysPerWeek] = useState<5 | 6>(5);

  const { months, totals } = useMemo(() => calculateYearData(bundesland), [bundesland]);
  const holidays = useMemo(() => getHolidaysForState(bundesland), [bundesland]);
  const weekdayHolidays = useMemo(() => holidays.filter((h) => isWeekday(h.date)), [holidays]);

  // Comparison table: all states sorted by work days (most to fewest)
  const comparison = useMemo(() => {
    const entries = (Object.keys(BUNDESLAENDER) as Bundesland[]).map((key) => {
      const data = calculateYearData(key);
      return {
        key,
        name: BUNDESLAENDER[key].name,
        workDays5: data.totals.workDays5,
        workDays6: data.totals.workDays6,
        holidays: data.totals.holidays + data.totals.holidaysSat,
      };
    });
    entries.sort((a, b) =>
      daysPerWeek === 5 ? b.workDays5 - a.workDays5 : b.workDays6 - a.workDays6
    );
    return entries;
  }, [daysPerWeek]);

  const weekendDays5 = 365 - totals.weekdays;
  const weekendDays6 = 365 - totals.weekdays - totals.saturdays;

  // FAQ data
  const faqs = [
    {
      question: "Wie viele Arbeitstage hat das Jahr 2026?",
      answer:
        "Die Anzahl der Arbeitstage 2026 hängt vom Bundesland ab, da die Feiertage regional unterschiedlich sind. Bei einer 5-Tage-Woche (Montag bis Freitag) liegen die Arbeitstage zwischen 248 und 253 Tagen, je nachdem wie viele Feiertage auf einen Werktag fallen. Bayern hat z.B. mehr Feiertage als Hamburg, daher weniger Arbeitstage.",
    },
    {
      question: "Warum brauche ich die Arbeitstage für die Steuererklärung?",
      answer:
        "Für die Pendlerpauschale (Entfernungspauschale) in der Steuererklärung müssen Sie die tatsächlichen Arbeitstage angeben. Das Finanzamt erkennt bei Vollzeit in der Regel 230 Tage an, bei Nachweis auch mehr. Die genaue Berechnung der Arbeitstage für Ihr Bundesland hilft Ihnen, die maximale Pauschale korrekt zu berechnen und keine Steuervorteile zu verschenken.",
    },
    {
      question: "Welches Bundesland hat die meisten Feiertage 2026?",
      answer:
        "Bayern und das Saarland haben mit die meisten Feiertage in Deutschland. Bayern kommt auf bis zu 13 Feiertage (einschließlich Mariä Himmelfahrt in Gemeinden mit überwiegend katholischer Bevölkerung). Hamburg, Bremen und Niedersachsen haben dagegen nur 9 bundesweite Feiertage plus den Reformationstag, also 10 Feiertage insgesamt.",
    },
    {
      question: "Wie berechnet man die Arbeitstage pro Monat?",
      answer:
        "Die Arbeitstage pro Monat ergeben sich aus den Werktagen (Montag bis Freitag bei einer 5-Tage-Woche) abzüglich der gesetzlichen Feiertage, die auf einen Werktag fallen. Ein Feiertag, der auf einen Samstag oder Sonntag fällt, reduziert die Arbeitstage nicht. Im Durchschnitt hat ein Monat bei einer 5-Tage-Woche etwa 21 Arbeitstage.",
    },
    {
      question: "Wie berechne ich meinen Stundenlohn aus den Arbeitstagen?",
      answer:
        "Um Ihren Stundenlohn aus dem Jahresgehalt und den Arbeitstagen zu berechnen: Teilen Sie Ihr Brutto-Jahresgehalt durch die Anzahl der Arbeitstage und dann durch Ihre tägliche Arbeitszeit. Beispiel: 50.000 EUR ÷ 250 Arbeitstage ÷ 8 Stunden = 25 EUR Brutto-Stundenlohn. Nutzen Sie unseren Stundenlohnrechner für eine detaillierte Berechnung.",
    },
  ];

  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Arbeitstagerechner 2026",
    url: "https://gehaltly.de/rechner/arbeitstage/",
    description:
      "Kostenloser Arbeitstagerechner 2026 - Berechnen Sie Arbeitstage pro Monat und Jahr für alle 16 Bundesländer mit Feiertagen.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Arbeitstage pro Monat berechnen",
      "Alle 16 Bundesländer",
      "Gesetzliche Feiertage 2026",
      "5- und 6-Tage-Woche",
      "Bundesländer-Vergleich",
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
            { label: "Arbeitstage", href: "/rechner/arbeitstage" },
          ]}
        />
      </div>

      {/* Hero */}
      <PageHero
        title="Arbeitstagerechner 2026"
        subtitle="Arbeitstage pro Monat und Jahr berechnen - für alle Bundesländer"
      />

      {/* Author byline */}
      <div className="container mx-auto px-4 pb-2">
        <p className="text-sm text-muted-foreground text-center">
          Berechnung auf Basis der gesetzlichen Feiertage 2026 je Bundesland.
        </p>
      </div>

      {/* Introduction */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Der Arbeitstagerechner 2026 berechnet die Anzahl der Arbeitstage pro Monat und für
              das gesamte Jahr - inklusive aller gesetzlichen Feiertage für Ihr Bundesland. Ob für
              die Steuererklärung, die Pendlerpauschale oder die Urlaubsplanung: Hier finden Sie
              die exakten Arbeitstage auf einen Blick.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Die Feiertage variieren je nach Bundesland erheblich. Wählen Sie Ihr Bundesland und
              sehen Sie sofort, wie viele Arbeitstage und Feiertage 2026 auf Sie zukommen.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                <Label htmlFor="bundesland">Bundesland</Label>
                <Select
                  value={bundesland}
                  onValueChange={(v) => setBundesland(v as Bundesland)}
                >
                  <SelectTrigger id="bundesland" aria-label="Bundesland">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(Object.keys(BUNDESLAENDER) as Bundesland[]).map((key) => (
                      <SelectItem key={key} value={key}>
                        {BUNDESLAENDER[key].name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Arbeitstage pro Woche</Label>
                <div className="flex gap-4 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="daysPerWeek"
                      value={5}
                      checked={daysPerWeek === 5}
                      onChange={() => setDaysPerWeek(5)}
                      className="accent-[#DD0000]"
                    />
                    <span className="text-sm font-medium">5 Tage (Mo–Fr)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="daysPerWeek"
                      value={6}
                      checked={daysPerWeek === 6}
                      onChange={() => setDaysPerWeek(6)}
                      className="accent-[#DD0000]"
                    />
                    <span className="text-sm font-medium">6 Tage (Mo–Sa)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Summary cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Arbeitstage 2026</p>
                <p className="text-2xl sm:text-3xl font-bold text-[#DD0000]">
                  {daysPerWeek === 5 ? totals.workDays5 : totals.workDays6}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Feiertage (Werktage)</p>
                <p className="text-2xl sm:text-3xl font-bold text-[#FFCC00]">
                  {daysPerWeek === 5 ? totals.holidays : totals.holidays + totals.holidaysSat}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Wochenendtage</p>
                <p className="text-2xl sm:text-3xl font-bold">
                  {daysPerWeek === 5 ? weekendDays5 : weekendDays6}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Kalendertage</p>
                <p className="text-2xl sm:text-3xl font-bold">365</p>
              </div>
            </div>

            {/* Monthly table */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Arbeitstage 2026 pro Monat – {BUNDESLAENDER[bundesland].name}
              </h2>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="text-left p-3 font-semibold">Monat</th>
                      <th className="text-right p-3 font-semibold">Arbeitstage</th>
                      <th className="text-right p-3 font-semibold">Feiertage*</th>
                      <th className="text-right p-3 font-semibold">Wochentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {months.map((m, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}
                      >
                        <td className="p-3 font-medium">{MONTH_NAMES[i]}</td>
                        <td className="p-3 text-right font-bold text-[#DD0000]">
                          {daysPerWeek === 5 ? m.workDays5 : m.workDays6}
                        </td>
                        <td className="p-3 text-right">
                          {daysPerWeek === 5 ? m.holidays : m.holidays + m.holidaysSat}
                        </td>
                        <td className="p-3 text-right">
                          {daysPerWeek === 5 ? m.weekdays : m.weekdays + m.saturdays}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 dark:bg-gray-800 font-bold border-t-2 border-gray-300 dark:border-gray-600">
                      <td className="p-3">Gesamt 2026</td>
                      <td className="p-3 text-right text-[#DD0000]">
                        {daysPerWeek === 5 ? totals.workDays5 : totals.workDays6}
                      </td>
                      <td className="p-3 text-right">
                        {daysPerWeek === 5 ? totals.holidays : totals.holidays + totals.holidaysSat}
                      </td>
                      <td className="p-3 text-right">
                        {daysPerWeek === 5 ? totals.weekdays : totals.weekdays + totals.saturdays}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                * Nur Feiertage, die auf einen Werktag fallen, reduzieren die Arbeitstage.
              </p>
            </div>

            {/* Holiday list for selected state */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Feiertage 2026 in {BUNDESLAENDER[bundesland].name}
              </h2>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full text-sm border-collapse min-w-[400px]">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="text-left p-3 font-semibold">Feiertag</th>
                      <th className="text-left p-3 font-semibold">Datum</th>
                      <th className="text-left p-3 font-semibold">Wochentag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holidays
                      .sort((a, b) => a.date.getTime() - b.date.getTime())
                      .map((h, i) => {
                        const onWeekday = isWeekday(h.date);
                        return (
                          <tr
                            key={i}
                            className={
                              i % 2 === 0
                                ? "bg-white dark:bg-gray-900"
                                : "bg-gray-50 dark:bg-gray-800/50"
                            }
                          >
                            <td className="p-3 font-medium">{h.name}</td>
                            <td className="p-3">{formatDate(h.date)}</td>
                            <td className="p-3">
                              {DAY_NAMES[h.date.getDay()]}
                              {!onWeekday && (
                                <span className="ml-2 text-xs text-muted-foreground">(Wochenende)</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <Calendar className="w-4 h-4 inline mr-1" />
                Insgesamt {holidays.length} Feiertage in {BUNDESLAENDER[bundesland].name}, davon{" "}
                {weekdayHolidays.length} auf Werktagen (Mo–Fr).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bundesländer comparison */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Arbeitstage 2026 – Alle Bundesländer im Vergleich
            </h2>
            <p className="text-muted-foreground mb-6">
              Sortiert nach Anzahl der Arbeitstage ({daysPerWeek}-Tage-Woche), von den meisten zu
              den wenigsten.
            </p>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse min-w-[400px]">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left p-3 font-semibold">#</th>
                    <th className="text-left p-3 font-semibold">Bundesland</th>
                    <th className="text-right p-3 font-semibold">Arbeitstage</th>
                    <th className="text-right p-3 font-semibold">Feiertage</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((entry, i) => (
                    <tr
                      key={entry.key}
                      className={
                        entry.key === bundesland
                          ? "bg-red-50 dark:bg-red-950/30 font-semibold"
                          : i % 2 === 0
                          ? "bg-white dark:bg-gray-900"
                          : "bg-gray-50 dark:bg-gray-800/50"
                      }
                    >
                      <td className="p-3">{i + 1}</td>
                      <td className="p-3">{entry.name}</td>
                      <td className="p-3 text-right font-bold text-[#DD0000]">
                        {daysPerWeek === 5 ? entry.workDays5 : entry.workDays6}
                      </td>
                      <td className="p-3 text-right">{entry.holidays}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <RelatedLinks currentHref="/rechner/arbeitstage" count={6} title="Weitere Gehaltsrechner" />

      {/* Content Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
              Arbeitstage 2026 in Deutschland
            </h2>

            <ContentSection
              heading="Arbeitstage 2026 – Überblick"
              icon={<Calendar className="w-5 h-5" />}
              body="Das Jahr 2026 hat 365 Kalendertage. Bei einer 5-Tage-Woche (Montag bis Freitag) ergeben sich je nach Bundesland zwischen 248 und 253 Arbeitstage. Die Unterschiede entstehen durch die regional unterschiedlichen gesetzlichen Feiertage. Bundesweit gelten 9 Feiertage, doch die Bundesländer haben darüber hinaus eigene Feiertage wie Fronleichnam, Reformationstag oder Allerheiligen."
            />

            <ContentSection
              heading="Feiertage 2026 nach Bundesland"
              icon={<Info className="w-5 h-5" />}
              body="In Deutschland gibt es 9 bundesweite Feiertage: Neujahr, Karfreitag, Ostermontag, Tag der Arbeit, Christi Himmelfahrt, Pfingstmontag, Tag der Deutschen Einheit, 1. und 2. Weihnachtstag. Darüber hinaus haben die Bundesländer bis zu 4 zusätzliche Feiertage. Bayern und Baden-Württemberg haben unter anderem Heilige Drei Könige und Fronleichnam. Sachsen ist das einzige Bundesland mit Buß- und Bettag. Berlin feiert den Internationalen Frauentag am 8. März."
            />

            <ContentSection
              heading="Wofür braucht man den Arbeitstagerechner?"
              icon={<Info className="w-5 h-5" />}
              body="Die exakte Kenntnis der Arbeitstage ist in mehreren Situationen wichtig:"
            >
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                <li>
                  <strong>Steuererklärung &amp; Pendlerpauschale:</strong> Für die
                  Entfernungspauschale benötigen Sie die tatsächlichen Arbeitstage. Das Finanzamt
                  prüft Ihre Angaben anhand der Arbeitstage Ihres Bundeslandes.
                </li>
                <li>
                  <strong>Urlaubsplanung:</strong> Wissen Sie, in welchen Monaten wenige Arbeitstage
                  anfallen? Nutzen Sie Brückentage optimal durch die Kombination mit Feiertagen.
                </li>
                <li>
                  <strong>Gehaltsberechnung &amp; Stundenlohn:</strong> Um den Stundenlohn aus dem
                  Jahresgehalt zu ermitteln, teilen Sie durch die Arbeitstage und dann durch die
                  tägliche Arbeitszeit.
                </li>
              </ul>
            </ContentSection>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <Info className="w-4 h-4 inline mr-1" />
                <strong>Offizielle Quelle:</strong> Die gesetzlichen Feiertage werden von den
                jeweiligen Landesregierungen festgelegt. Weitere Informationen finden Sie auf{" "}
                <a
                  href="https://www.bundesregierung.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-700 dark:hover:text-blue-300"
                >
                  bundesregierung.de
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Häufig gestellte Fragen zu Arbeitstagen 2026" />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Arbeitstage 2026 auf einen Blick
            </h2>
            <p className="text-lg text-muted-foreground">
              Wählen Sie Ihr Bundesland und sehen Sie sofort alle Arbeitstage, Feiertage und
              Wochenenden für das Jahr 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
