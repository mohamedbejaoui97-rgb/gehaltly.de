/**
 * Main tax calculator - orchestrates all tax calculations
 */

import type { CalculatorInput, CalculatorResult } from './types';
import { calculateLohnsteuer } from './lohnsteuer';
import { calculateSolidaritaetszuschlag } from './solidaritaetszuschlag';
import { calculateKirchensteuer } from './kirchensteuer';
import { calculateSozialversicherung } from './sozialversicherung';

/**
 * Main German tax calculator
 * Calculates all taxes and contributions and returns net salary
 */
export function calculateGermanTax(input: CalculatorInput): CalculatorResult {
  // Convert to monthly values if annual input
  const isAnnual = input.abrechnungszeitraum === 'jahr';
  const monatsbrutto = isAnnual ? input.bruttoeinkommen / 12 : input.bruttoeinkommen;
  const jahresbrutto = isAnnual ? input.bruttoeinkommen : input.bruttoeinkommen * 12;

  // Add Geldwerter Vorteil (company car benefit) to tax base
  const monatsGwv = input.geldwerterVorteil || 0;
  const jahresGwv = monatsGwv * 12;
  const jahresBruttoMitGwv = jahresbrutto + jahresGwv;

  // Calculate annual Lohnsteuer (income tax)
  const jahresLohnsteuer = calculateLohnsteuer({
    jahresbrutto: jahresBruttoMitGwv,
    steuerklasse: input.steuerklasse,
    bundesland: input.bundesland,
    kinder: input.kinder,
    steuerfreibetrag: input.steuerfreibetrag,
  });

  // Calculate annual Solidaritätszuschlag
  const jahresSoli = calculateSolidaritaetszuschlag({
    lohnsteuer: jahresLohnsteuer,
    steuerklasse: input.steuerklasse,
  });

  // Calculate annual Kirchensteuer
  const jahresKirchensteuer = calculateKirchensteuer({
    lohnsteuer: jahresLohnsteuer,
    bundesland: input.bundesland,
    kirchensteuerpflichtig: input.kirchensteuer,
  });

  // Convert to monthly amounts
  const lohnsteuer = Math.round(jahresLohnsteuer / 12);
  const soli = Math.round(jahresSoli / 12);
  const kirchensteuer = Math.round(jahresKirchensteuer / 12);

  // Calculate monthly Sozialversicherung
  const sv = calculateSozialversicherung({
    monatsbrutto: monatsbrutto + monatsGwv,
    bundesland: input.bundesland,
    kvZusatzbeitrag: input.kvZusatzbeitrag,
    kinder: input.kinder,
    alter: input.alter,
    krankenversicherung: input.krankenversicherung,
    rentenversicherungPflicht: input.rentenversicherungPflicht,
    arbeitslosenversicherungPflicht: input.arbeitslosenversicherungPflicht,
    pvkBeitrag: input.pvkBeitrag,
    pvkArbeitgeberzuschuss: input.pvkArbeitgeberzuschuss,
  });

  // Calculate total deductions
  const gesamtSteuern = lohnsteuer + soli + kirchensteuer;
  const gesamtSozialabgaben = sv.gesamt;
  const gesamtAbzuege = gesamtSteuern + gesamtSozialabgaben;

  // Calculate net salary (without GWV, as it's not actual cash)
  const netto = monatsbrutto - gesamtAbzuege;

  return {
    brutto: monatsbrutto,
    netto,
    steuern: {
      lohnsteuer,
      solidaritaetszuschlag: soli,
      kirchensteuer,
    },
    sozialabgaben: {
      rentenversicherung: sv.rentenversicherung,
      krankenversicherung: sv.krankenversicherung,
      pflegeversicherung: sv.pflegeversicherung,
      arbeitslosenversicherung: sv.arbeitslosenversicherung,
    },
    gesamtSteuern,
    gesamtSozialabgaben,
    gesamtAbzuege,
  };
}

// Re-export types and constants for convenience
export * from './types';
export * from './constants';
