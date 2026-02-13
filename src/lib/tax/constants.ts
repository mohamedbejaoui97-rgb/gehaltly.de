/**
 * German tax constants for 2026 - individual exports for calculation modules
 * Derived from constants-2026.ts
 */

import { TAX_2026 } from './constants-2026';

// Lohnsteuer constants
export const GRUNDFREIBETRAG = TAX_2026.grundfreibetrag;
export const KINDERFREIBETRAG = TAX_2026.kinderfreibetrag;
export const ARBEITNEHMERPAUSCHBETRAG = 1230; // Werbungskostenpauschale 2026
export const SONDERAUSGABENPAUSCHBETRAG = 36; // Sonderausgabenpauschbetrag

// Sozialversicherung constants (employee share)
export const RV_RATE = TAX_2026.rvSatz / 2; // 9.3% (employee share)
export const KV_RATE = TAX_2026.kvSatz / 2; // 7.3% (employee share)
export const PV_RATE = TAX_2026.pvSatz / 2; // 1.8% (employee share)
export const PV_KINDERLOS_ZUSCHLAG = TAX_2026.pvKinderlosZuschlag; // 0.6% (full amount for childless)
export const PV_SACHSEN_EMPLOYEE_RATE = TAX_2026.pvSachsenAN; // 2.2% (Saxony special)
export const PV_SACHSEN_EMPLOYER_RATE = TAX_2026.pvSachsenAG; // 1.4% (Saxony special)
export const ALV_RATE = TAX_2026.alvSatz / 2; // 1.3% (employee share)

// BBG (Beitragsbemessungsgrenze) - monthly
export const BBG_RV_ALV = TAX_2026.bbgRvAlv;
export const BBG_KV_PV = TAX_2026.bbgKvPv;

// Minijob / Midijob
export const MINIJOB_GRENZE = TAX_2026.minijobGrenze;
export const MIDIJOB_OBERGRENZE = TAX_2026.midijobGrenze;
