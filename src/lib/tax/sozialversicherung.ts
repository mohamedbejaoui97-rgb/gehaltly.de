/**
 * Sozialversicherung (Social Insurance) calculation (2026)
 * Includes RV, KV, PV, ALV with BBG caps and special rules
 */

import type { Bundesland } from './types';
import { BUNDESLAENDER } from './bundeslaender';
import {
  RV_RATE,
  KV_RATE,
  PV_RATE,
  PV_KINDERLOS_ZUSCHLAG,
  PV_SACHSEN_EMPLOYEE_RATE,
  ALV_RATE,
  BBG_RV_ALV,
  BBG_KV_PV,
  MINIJOB_GRENZE,
} from './constants';

interface SozialversicherungInput {
  monatsbrutto: number;
  bundesland: Bundesland;
  kvZusatzbeitrag: number;
  kinder: number;
  alter: number;
}

export interface SozialversicherungResult {
  rentenversicherung: number;
  krankenversicherung: number;
  pflegeversicherung: number;
  arbeitslosenversicherung: number;
  gesamt: number;
}

/**
 * Calculate monthly Sozialversicherung contributions (employee share)
 */
export function calculateSozialversicherung(
  input: SozialversicherungInput
): SozialversicherungResult {
  const { monatsbrutto, bundesland, kvZusatzbeitrag, kinder, alter } = input;

  // Minijob: No social insurance contributions
  if (monatsbrutto <= MINIJOB_GRENZE) {
    return {
      rentenversicherung: 0,
      krankenversicherung: 0,
      pflegeversicherung: 0,
      arbeitslosenversicherung: 0,
      gesamt: 0,
    };
  }

  // Calculate contributions with BBG caps
  const rvBasis = Math.min(monatsbrutto, BBG_RV_ALV);
  const kvBasis = Math.min(monatsbrutto, BBG_KV_PV);
  const pvBasis = Math.min(monatsbrutto, BBG_KV_PV);
  const alvBasis = Math.min(monatsbrutto, BBG_RV_ALV);

  // Rentenversicherung (RV) - Pension Insurance
  const rv = Math.round(rvBasis * RV_RATE);

  // Krankenversicherung (KV) - Health Insurance
  const kvBase = Math.round(kvBasis * KV_RATE);
  const kvZusatz = Math.round(kvBasis * (kvZusatzbeitrag / 100));
  const kv = kvBase + kvZusatz;

  // Pflegeversicherung (PV) - Care Insurance
  let pv: number;
  if (BUNDESLAENDER[bundesland].isSachsen) {
    // Sachsen special rule: Lower employee rate
    pv = Math.round(pvBasis * PV_SACHSEN_EMPLOYEE_RATE);
  } else {
    // Standard rate
    pv = Math.round(pvBasis * PV_RATE);
  }

  // Kinderlos-Zuschlag: Additional 0.6% if childless and 23+ years old
  if (kinder === 0 && alter >= 23) {
    pv += Math.round(pvBasis * PV_KINDERLOS_ZUSCHLAG);
  }

  // Arbeitslosenversicherung (ALV) - Unemployment Insurance
  const alv = Math.round(alvBasis * ALV_RATE);

  const gesamt = rv + kv + pv + alv;

  return {
    rentenversicherung: rv,
    krankenversicherung: kv,
    pflegeversicherung: pv,
    arbeitslosenversicherung: alv,
    gesamt,
  };
}
