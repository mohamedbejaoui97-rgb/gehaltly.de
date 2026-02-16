/**
 * Tooltip help texts for calculator form fields
 */

export const TOOLTIP_TEXTS = {
  bruttoeinkommen: "Ihr monatliches Bruttogehalt vor Abzügen. Dies ist der Betrag, der in Ihrem Arbeitsvertrag steht.",

  steuerklasse: "Ihre Steuerklasse bestimmt die Höhe der Lohnsteuer. Klasse 1: Alleinstehend, Klasse 3/5: Verheiratet (optimiert), Klasse 4: Verheiratet (gleich), Klasse 6: Nebenjob.",

  bundesland: "Ihr Bundesland beeinflusst die Kirchensteuer (8% oder 9%) und bestimmt, ob Sie Kirchensteuer zahlen müssen.",

  alter: "Ihr Alter bestimmt den Pflegeversicherungsbeitrag. Ab 23 Jahren ohne Kinder zahlen Sie einen Zuschlag von 0,6%.",

  kinder: "Anzahl der Kinder unter 25 Jahren. Ab 2 Kindern reduziert sich Ihr Pflegeversicherungsbeitrag um 0,25% pro Kind (max. 5 Kinder).",

  kirchensteuer: "Die Kirchensteuer beträgt 8% (Bayern, Baden-Württemberg) oder 9% (andere Bundesländer) Ihrer Lohnsteuer, wenn Sie kirchensteuerpflichtig sind.",

  krankenversicherung: "Gesetzlich Versicherte zahlen ca. 14,6% + Zusatzbeitrag. Privat Versicherte zahlen einen individuellen Beitrag.",

  kvZusatzbeitrag: "Der durchschnittliche Zusatzbeitrag zur gesetzlichen Krankenversicherung liegt 2026 bei ca. 2,9%. Jede Krankenkasse setzt ihren eigenen Satz fest.",

  rentenversicherung: "Der Beitragssatz zur gesetzlichen Rentenversicherung beträgt 18,6% (je zur Hälfte von Arbeitgeber und Arbeitnehmer getragen).",

  arbeitslosenversicherung: "Der Beitragssatz zur Arbeitslosenversicherung beträgt 2,6% (je zur Hälfte von Arbeitgeber und Arbeitnehmer getragen).",

  pflegeversicherung: "Der Beitragssatz zur Pflegeversicherung beträgt 3,6%. Kinderlose ab 23 Jahren zahlen zusätzlich 0,6% Zuschlag.",

  steuerfreibetrag: "Ihr jährlicher Steuerfreibetrag (z.B. Grundfreibetrag 12.348€ für 2026). Bis zu diesem Betrag zahlen Sie keine Lohnsteuer.",

  geldwerterVorteil: "Der geldwerte Vorteil (z.B. Firmenwagen) erhöht Ihr zu versteuerndes Einkommen. Berechnet wird meist 1% des Bruttolistenpreises pro Monat.",

  jahresGehalt: "Ihr Bruttojahresgehalt (12 Monatsgehälter ohne Sonderzahlungen).",

  monatsGehalt: "Ihr monatliches Bruttogehalt vor Abzügen.",

  wochenStunden: "Ihre vertraglich vereinbarte wöchentliche Arbeitszeit in Stunden.",

  urlaubsTage: "Ihre Anzahl der Urlaubstage pro Jahr (gesetzlich mindestens 20 Tage bei 5-Tage-Woche).",

  arbeitgeberAnteil: "Der Arbeitgeber zahlt zusätzlich zum Bruttogehalt Sozialversicherungsbeiträge (ca. 20% des Bruttos).",
} as const;

export type TooltipKey = keyof typeof TOOLTIP_TEXTS;
