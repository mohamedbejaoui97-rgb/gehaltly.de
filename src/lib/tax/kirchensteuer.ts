/**
 * Kirchensteuer (Church Tax) calculation (2026)
 * 8% in Bayern and Baden-Württemberg, 9% in other states
 */

import type { Bundesland } from './types';
import { BUNDESLAENDER } from './bundeslaender';

interface KirchensteuerInput {
  lohnsteuer: number;
  bundesland: Bundesland;
  kirchensteuerpflichtig: boolean;
}

/**
 * Calculate annual Kirchensteuer
 */
export function calculateKirchensteuer(input: KirchensteuerInput): number {
  const { lohnsteuer, bundesland, kirchensteuerpflichtig } = input;

  if (!kirchensteuerpflichtig) {
    return 0;
  }

  // Get rate from Bundesland config
  const rate = BUNDESLAENDER[bundesland].kirchensteuerSatz;

  return lohnsteuer * rate;
}
