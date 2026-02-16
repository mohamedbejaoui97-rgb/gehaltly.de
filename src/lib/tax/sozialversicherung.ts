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
  PV_ABSCHLAG_KIND,
  PV_MAX_ABSCHLAG_KINDER,
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
  krankenversicherung?: 'gesetzlich' | 'privat' | 'freiwillig';
  rentenversicherungPflicht?: boolean;
  arbeitslosenversicherungPflicht?: boolean;
  pvkBeitrag?: number;
  pvkArbeitgeberzuschuss?: boolean;
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
  const {
    monatsbrutto,
    bundesland,
    kvZusatzbeitrag,
    kinder,
    alter,
    krankenversicherung = 'gesetzlich',
    rentenversicherungPflicht = true,
    arbeitslosenversicherungPflicht = true,
    pvkBeitrag = 0,
    pvkArbeitgeberzuschuss = true,
  } = input;

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
  const rv = rentenversicherungPflicht ? Math.round(rvBasis * RV_RATE) : 0;

  // Krankenversicherung (KV) - Health Insurance
  let kv: number;
  if (krankenversicherung === 'privat') {
    // PKV: Employee pays their premium, minus AG-Zuschuss if applicable
    if (pvkArbeitgeberzuschuss) {
      // AG pays up to 50% of the GKV max contribution (AN share: base + half Zusatzbeitrag)
      const gkvMax = Math.round(kvBasis * KV_RATE) + Math.round(kvBasis * (kvZusatzbeitrag / 100 / 2));
      const agZuschuss = Math.min(Math.round(gkvMax), Math.round(pvkBeitrag / 2));
      kv = Math.max(0, pvkBeitrag - agZuschuss);
    } else {
      kv = pvkBeitrag;
    }
  } else {
    // GKV (gesetzlich or freiwillig)
    const kvBase = Math.round(kvBasis * KV_RATE);
    // Zusatzbeitrag is split 50/50 between AG and AN since 01.01.2019
    const kvZusatz = Math.round(kvBasis * (kvZusatzbeitrag / 100 / 2));
    kv = kvBase + kvZusatz;
  }

  // Pflegeversicherung (PV) - Care Insurance
  // PKV members still pay PV if they are pflichtversichert in PV
  let pv: number;
  if (BUNDESLAENDER[bundesland].isSachsen) {
    pv = Math.round(pvBasis * PV_SACHSEN_EMPLOYEE_RATE);
  } else {
    pv = Math.round(pvBasis * PV_RATE);
  }

  // Kinderlos-Zuschlag: Additional 0.6% if childless and 23+ years old
  if (kinder === 0 && alter >= 23) {
    pv += Math.round(pvBasis * PV_KINDERLOS_ZUSCHLAG);
  }

  // Per-child PV discount: -0.25% for each child from 2nd to 5th (under 25)
  if (kinder >= 2) {
    const discountChildren = Math.min(kinder - 1, PV_MAX_ABSCHLAG_KINDER - 1);
    pv -= Math.round(pvBasis * PV_ABSCHLAG_KIND * discountChildren);
    pv = Math.max(0, pv);
  }

  // Arbeitslosenversicherung (ALV) - Unemployment Insurance
  const alv = arbeitslosenversicherungPflicht ? Math.round(alvBasis * ALV_RATE) : 0;

  const gesamt = rv + kv + pv + alv;

  return {
    rentenversicherung: rv,
    krankenversicherung: kv,
    pflegeversicherung: pv,
    arbeitslosenversicherung: alv,
    gesamt,
  };
}
