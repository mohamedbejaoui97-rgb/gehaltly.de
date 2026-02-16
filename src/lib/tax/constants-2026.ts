/**
 * German tax constants for 2026
 *
 * Sources:
 * - EStG §32a: https://www.gesetze-im-internet.de/estg/__32a.html
 * - SV-Rechengrößen: https://www.bundesregierung.de/breg-de/aktuelles/beitragsgemessungsgrenzen-2386514
 * - Soli-Freigrenze: https://www.tk.de/firmenkunden/service/fachthemen/fachthema-beitraege/solidaritaetszuschlag-2075802
 * - PV-Beitragssatz: https://sozialversicherung-kompetent.de/pflegeversicherung/versicherungsrecht/1636-beitragssatz-pflegeversicherung-2026.html
 * - KV-Zusatzbeitrag: https://www.aok.de/fk/jahreswechsel/sv-beitraege-2026/
 */

export const TAX_2026 = {
  grundfreibetrag: 12_348,
  grundfreibetragVerheiratet: 24_696,
  kinderfreibetrag: 9_756,

  // EStG §32a Einkommensteuer-Zonen (Jahresbetrag)
  zone2Start: 12_349,
  zone2End: 17_799,
  zone3Start: 17_800,
  zone3End: 69_878,
  zone4Start: 69_879,
  zone4End: 277_825,
  zone5Start: 277_826,

  // EStG §32a Koeffizienten
  zone2KoeffA: 914.51,
  zone2KoeffB: 1_400,
  zone3KoeffA: 173.10,
  zone3KoeffB: 2_397,
  zone3Konstante: 1_034.87,
  zone4Faktor: 0.42,
  zone4Konstante: 11_135.63,
  zone5Faktor: 0.45,
  zone5Konstante: 19_470.38,

  // Solidaritätszuschlag
  soliSatz: 0.055,
  soliFreigrenze: 20_350,
  soliFreigrenzeVerheiratet: 40_700,
  soliMilderungszone: 0.119, // 11.9% Milderungszone

  // Sozialversicherung (Gesamtsatz AG+AN)
  rvSatz: 0.186,
  alvSatz: 0.026,
  kvSatz: 0.146,
  kvZusatzbeitragDurchschnitt: 0.029,
  pvSatz: 0.036,
  pvKinderlosZuschlag: 0.006,

  // Pflegeversicherung Abschläge pro Kind unter 25
  pvAbschlagKind: 0.0025,
  pvMaxAbschlag: 5, // max 5 Kinder Abschlag

  // Sachsen Sonderregel Pflegeversicherung (AN zahlt 2,3%, AG zahlt 1,3%)
  pvSachsenAN: 0.023,
  pvSachsenAG: 0.013,

  // Beitragsbemessungsgrenzen (monatlich)
  bbgKvPv: 5_812.50,
  bbgRvAlv: 8_450,

  // Versicherungspflichtgrenze
  versicherungspflichtgrenze: 77_400,

  // Minijob / Midijob
  minijobGrenze: 556,
  midijobGrenze: 2_000,

  // Midijob Gleitzone Faktor
  midijobFaktor: 0.6846,

  // Pauschalen
  arbeitnehmerpauschbetrag: 1_230,
  sonderausgabenpauschbetrag: 36,
  entlastungsbetragAlleinerziehende: 4_260,
  entlastungsbetragWeitereKinder: 240,
} as const;
