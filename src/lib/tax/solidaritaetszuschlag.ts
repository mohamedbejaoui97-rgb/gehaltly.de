/**
 * Solidaritätszuschlag (Solidarity Surcharge) calculation (2026)
 * 5.5% of income tax, with Freigrenze and Milderungszone
 *
 * Source: https://www.tk.de/firmenkunden/service/fachthemen/fachthema-beitraege/solidaritaetszuschlag-2075802
 */

import type { Steuerklasse } from './types';
import {
  SOLI_FREIGRENZE,
  SOLI_FREIGRENZE_VERHEIRATET,
  SOLI_SATZ,
  SOLI_MILDERUNGSZONE,
} from './constants';

interface SoliInput {
  lohnsteuer: number;
  steuerklasse: Steuerklasse;
}

/**
 * Calculate annual Solidaritätszuschlag
 * Includes Freigrenze (exemption threshold) and Milderungszone (mitigation zone)
 *
 * 2026 Freigrenzen:
 * - Single: 20.350 € Jahres-Lohnsteuer
 * - Verheiratet (Stkl 3): 40.700 € Jahres-Lohnsteuer
 */
export function calculateSolidaritaetszuschlag(input: SoliInput): number {
  const { lohnsteuer, steuerklasse } = input;

  // Freigrenze depends on Steuerklasse
  const freigrenze = (steuerklasse === 3)
    ? SOLI_FREIGRENZE_VERHEIRATET
    : SOLI_FREIGRENZE;

  // No Soli if income tax below Freigrenze
  if (lohnsteuer <= freigrenze) {
    return 0;
  }

  // Milderungszone: 11.9% of amount above Freigrenze
  const milderung = (lohnsteuer - freigrenze) * SOLI_MILDERUNGSZONE;

  // Full Soli: 5.5% of income tax
  const vollSoli = lohnsteuer * SOLI_SATZ;

  // Return the lower of Milderungszone or full Soli
  return Math.min(milderung, vollSoli);
}
