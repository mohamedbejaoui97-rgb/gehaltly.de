/**
 * German tax constants for 2026 - individual exports for calculation modules
 * Derived from constants-2026.ts (single source of truth)
 */

import { TAX_2026 } from './constants-2026';

// Lohnsteuer constants
export const GRUNDFREIBETRAG = TAX_2026.grundfreibetrag;
export const KINDERFREIBETRAG = TAX_2026.kinderfreibetrag;
export const ARBEITNEHMERPAUSCHBETRAG = TAX_2026.arbeitnehmerpauschbetrag;
export const SONDERAUSGABENPAUSCHBETRAG = TAX_2026.sonderausgabenpauschbetrag;
export const ENTLASTUNGSBETRAG_ALLEINERZIEHENDE = TAX_2026.entlastungsbetragAlleinerziehende;
export const ENTLASTUNGSBETRAG_WEITERE_KINDER = TAX_2026.entlastungsbetragWeitereKinder;

// Sozialversicherung constants (employee share)
export const RV_RATE = TAX_2026.rvSatz / 2; // 9.3% (employee share)
export const KV_RATE = TAX_2026.kvSatz / 2; // 7.3% (employee share)
export const PV_RATE = TAX_2026.pvSatz / 2; // 1.8% (employee share)
export const PV_KINDERLOS_ZUSCHLAG = TAX_2026.pvKinderlosZuschlag; // 0.6% (full amount for childless)
export const PV_SACHSEN_EMPLOYEE_RATE = TAX_2026.pvSachsenAN; // 2.3% (Saxony special)
export const PV_SACHSEN_EMPLOYER_RATE = TAX_2026.pvSachsenAG; // 1.3% (Saxony special)
export const ALV_RATE = TAX_2026.alvSatz / 2; // 1.3% (employee share)

// BBG (Beitragsbemessungsgrenze) - monthly
export const BBG_RV_ALV = TAX_2026.bbgRvAlv;
export const BBG_KV_PV = TAX_2026.bbgKvPv;

// Pflegeversicherung Kinder-Abschlag (0.25% per child from 2nd to 5th)
export const PV_ABSCHLAG_KIND = TAX_2026.pvAbschlagKind;
export const PV_MAX_ABSCHLAG_KINDER = TAX_2026.pvMaxAbschlag;

// Minijob / Midijob
export const MINIJOB_GRENZE = TAX_2026.minijobGrenze;
export const MIDIJOB_OBERGRENZE = TAX_2026.midijobGrenze;

// Solidaritätszuschlag
export const SOLI_FREIGRENZE = TAX_2026.soliFreigrenze;
export const SOLI_FREIGRENZE_VERHEIRATET = TAX_2026.soliFreigrenzeVerheiratet;
export const SOLI_SATZ = TAX_2026.soliSatz;
export const SOLI_MILDERUNGSZONE = TAX_2026.soliMilderungszone;
