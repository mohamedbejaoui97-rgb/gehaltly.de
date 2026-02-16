/**
 * Lohnsteuer (Income Tax) calculation according to EStG §32a (2026)
 * Based on BMF PAP (Programmablaufplan) 2026
 *
 * Source: https://www.gesetze-im-internet.de/estg/__32a.html
 * Verified: https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2026
 */

import type { Steuerklasse } from './types';
import {
  KINDERFREIBETRAG,
  ARBEITNEHMERPAUSCHBETRAG,
  SONDERAUSGABENPAUSCHBETRAG,
  ENTLASTUNGSBETRAG_ALLEINERZIEHENDE,
  ENTLASTUNGSBETRAG_WEITERE_KINDER,
} from './constants';
import { TAX_2026 } from './constants-2026';

interface LohnsteuerInput {
  jahresbrutto: number;
  steuerklasse: Steuerklasse;
  bundesland: string;
  kinder: number;
  steuerfreibetrag?: number;
}

/**
 * Calculate annual Lohnsteuer (income tax)
 *
 * The Grundfreibetrag is NOT subtracted here — it is built into the
 * EStG §32a formula itself (Zone 1 = 0% up to 12.348 EUR).
 *
 * For Steuerklasse 3, the Splittingverfahren is applied:
 * zvE ÷ 2, then apply §32a, then result × 2.
 */
export function calculateLohnsteuer(input: LohnsteuerInput): number {
  const { jahresbrutto, steuerklasse, kinder, steuerfreibetrag = 0 } = input;

  // Step 1: Calculate zu versteuerndes Einkommen (taxable income)
  let zvE = jahresbrutto;

  // Arbeitnehmerpauschbetrag (all Stkl except 6)
  if (steuerklasse !== 6) {
    zvE -= ARBEITNEHMERPAUSCHBETRAG;
  }

  // Sonderausgabenpauschbetrag (all Stkl except 5 and 6)
  if (steuerklasse !== 5 && steuerklasse !== 6) {
    zvE -= SONDERAUSGABENPAUSCHBETRAG;
  }

  // Entlastungsbetrag für Alleinerziehende (only Stkl 2)
  if (steuerklasse === 2) {
    zvE -= ENTLASTUNGSBETRAG_ALLEINERZIEHENDE;
    if (kinder > 1) {
      zvE -= (kinder - 1) * ENTLASTUNGSBETRAG_WEITERE_KINDER;
    }
  }

  // Individual Steuerfreibetrag (annual)
  if (steuerfreibetrag > 0) {
    zvE -= steuerfreibetrag;
  }

  // Kinderfreibetrag (NOT for Stkl 5 and 6)
  if (steuerklasse >= 1 && steuerklasse <= 4) {
    const faktor = (steuerklasse === 3) ? 2 : 1;
    zvE -= kinder * KINDERFREIBETRAG * faktor;
  }

  // Ensure zvE is not negative
  if (zvE <= 0) return 0;

  // Step 2: Round down to full euros
  zvE = Math.floor(zvE);

  // Step 3: Calculate tax
  let est: number;

  if (steuerklasse === 3) {
    // SPLITTING: halve zvE, apply formula, double result
    const halbZvE = Math.floor(zvE / 2);
    est = calculateEStG32a(halbZvE) * 2;
  } else {
    est = calculateEStG32a(zvE);
  }

  return Math.floor(est);
}

/**
 * EStG §32a — Einkommensteuertarif 2026
 *
 * Zone 1:  0 – 12.348 €        → 0
 * Zone 2:  12.349 – 17.799 €   → (914,51 · y + 1.400) · y
 * Zone 3:  17.800 – 69.878 €   → (173,10 · z + 2.397) · z + 1.034,87
 * Zone 4:  69.879 – 277.825 €  → 0,42 · zvE − 11.135,63
 * Zone 5:  ab 277.826 €        → 0,45 · zvE − 19.470,38
 *
 * Result is rounded down to full euros (Math.floor).
 */
function calculateEStG32a(zvE: number): number {
  // Zone 1: Grundfreibetrag — 0% tax
  if (zvE <= TAX_2026.grundfreibetrag) {
    return 0;
  }

  // Zone 2: Progressive 14% → ~24%
  if (zvE <= TAX_2026.zone2End) {
    const y = (zvE - TAX_2026.grundfreibetrag) / 10000;
    return Math.floor((TAX_2026.zone2KoeffA * y + TAX_2026.zone2KoeffB) * y);
  }

  // Zone 3: Progressive ~24% → 42%
  if (zvE <= TAX_2026.zone3End) {
    const z = (zvE - TAX_2026.zone2End) / 10000;
    return Math.floor((TAX_2026.zone3KoeffA * z + TAX_2026.zone3KoeffB) * z + TAX_2026.zone3Konstante);
  }

  // Zone 4: Linear 42%
  if (zvE <= TAX_2026.zone4End) {
    return Math.floor(TAX_2026.zone4Faktor * zvE - TAX_2026.zone4Konstante);
  }

  // Zone 5: Linear 45% (Reichensteuer)
  return Math.floor(TAX_2026.zone5Faktor * zvE - TAX_2026.zone5Konstante);
}
