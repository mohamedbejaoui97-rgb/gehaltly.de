/**
 * Solidaritätszuschlag (Solidarity Surcharge) calculation (2026)
 * 5.5% of income tax, with Freigrenze and Milderungszone
 */

import type { Steuerklasse } from './types';

interface SoliInput {
  lohnsteuer: number;
  steuerklasse: Steuerklasse;
}

/**
 * Calculate annual Solidaritätszuschlag
 * Includes Freigrenze (exemption threshold) and Milderungszone (mitigation zone)
 */
export function calculateSolidaritaetszuschlag(input: SoliInput): number {
  const { lohnsteuer, steuerklasse } = input;

  // Freigrenze (exemption threshold) - depends on Steuerklasse
  let freigrenze: number;
  if (steuerklasse === 3) {
    freigrenze = 33912; // Higher threshold for married couples (Stkl 3)
  } else {
    freigrenze = 16956; // Standard threshold
  }

  // No Soli if income tax below Freigrenze
  if (lohnsteuer <= freigrenze) {
    return 0;
  }

  // Milderungszone: 11.9% of amount above Freigrenze (up to certain limit)
  const ueber = lohnsteuer - freigrenze;
  const milderung = ueber * 0.119;

  // Full Soli: 5.5% of income tax
  const vollSoli = lohnsteuer * 0.055;

  // Return the lower of Milderungszone or full Soli
  return Math.min(milderung, vollSoli);
}
