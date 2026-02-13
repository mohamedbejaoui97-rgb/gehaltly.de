/**
 * Lohnsteuer (Income Tax) calculation according to EStG §32a (2026)
 * Based on BMF PAP (Programmablaufplan) 2026
 */

import type { Steuerklasse, Bundesland } from './types';
import { KINDERFREIBETRAG, GRUNDFREIBETRAG, ARBEITNEHMERPAUSCHBETRAG, SONDERAUSGABENPAUSCHBETRAG } from './constants';

interface LohnsteuerInput {
  jahresbrutto: number;
  steuerklasse: Steuerklasse;
  bundesland: Bundesland;
  kinder: number;
}

/**
 * Calculate annual Lohnsteuer (income tax)
 * Implements the EStG §32a progressive tax formula with 5 zones
 */
export function calculateLohnsteuer(input: LohnsteuerInput): number {
  const { jahresbrutto, steuerklasse, kinder } = input;

  // Calculate taxable income (zu versteuerndes Einkommen)
  let zvE = jahresbrutto;

  // Subtract Arbeitnehmerpauschbetrag
  zvE -= ARBEITNEHMERPAUSCHBETRAG;

  // Subtract Sonderausgabenpauschbetrag
  zvE -= SONDERAUSGABENPAUSCHBETRAG;

  // Apply Grundfreibetrag (tax-free basic allowance)
  if (steuerklasse === 1 || steuerklasse === 4) {
    zvE -= GRUNDFREIBETRAG;
  } else if (steuerklasse === 2) {
    // Alleinerziehende: Grundfreibetrag + Entlastungsbetrag
    zvE -= GRUNDFREIBETRAG;
    zvE -= 4260; // Entlastungsbetrag für Alleinerziehende
    if (kinder > 1) {
      zvE -= (kinder - 1) * 240; // Additional 240 EUR per child beyond first
    }
  } else if (steuerklasse === 3) {
    // Ehegattensplitting: Double Grundfreibetrag
    zvE -= 2 * GRUNDFREIBETRAG;
  } else if (steuerklasse === 5 || steuerklasse === 6) {
    // No Grundfreibetrag for Stkl 5 and 6
  }

  // Apply Kinderfreibetrag (child allowance)
  if (steuerklasse === 1 || steuerklasse === 2 || steuerklasse === 4) {
    zvE -= kinder * KINDERFREIBETRAG;
  } else if (steuerklasse === 3) {
    // Ehegattensplitting: Double Kinderfreibetrag
    zvE -= kinder * 2 * KINDERFREIBETRAG;
  }

  // Ensure zvE is not negative
  if (zvE <= 0) {
    return 0;
  }

  // Apply EStG §32a formula (2026 tax schedule)
  const est = calculateEinkommensteuer(zvE);

  return Math.floor(est);
}

/**
 * EStG §32a progressive tax formula (2026)
 * 5 tax zones with different formulas
 */
function calculateEinkommensteuer(zvE: number): number {
  // Zone 1: 0 to 12,096 EUR (Grundfreibetrag) - 0% tax
  if (zvE <= 12096) {
    return 0;
  }

  // Zone 2: 12,097 to 17,696 EUR - Progressive 14% to ~24%
  if (zvE <= 17696) {
    const y = (zvE - 12096) / 10000;
    return (922.98 * y + 1400) * y;
  }

  // Zone 3: 17,697 to 68,702 EUR - Progressive ~24% to 42%
  if (zvE <= 68702) {
    const z = (zvE - 17696) / 10000;
    return (181.19 * z + 2397) * z + 1025.38;
  }

  // Zone 4: 68,703 to 277,825 EUR - Linear 42%
  if (zvE <= 277825) {
    return 0.42 * zvE - 10602.13;
  }

  // Zone 5: 277,826 EUR and above - Linear 45% (Reichensteuer)
  return 0.45 * zvE - 18936.88;
}
