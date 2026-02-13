/**
 * Integration tests for the German tax calculator
 */

import { describe, it, expect } from 'vitest';
import { calculateGermanTax } from '../index';
import type { CalculatorInput } from '../types';

describe('German Tax Calculator', () => {
  const baseInput: CalculatorInput = {
    bruttoeinkommen: 3000,
    abrechnungszeitraum: 'monat',
    steuerklasse: 1,
    bundesland: 'nordrhein-westfalen',
    kirchensteuer: false,
    alter: 30,
    kinder: 0,
    krankenversicherung: 'gesetzlich',
    kvZusatzbeitrag: 1.9,
    steuerfreibetrag: 0,
    geldwerterVorteil: 0,
    abrechnungsjahr: 2026,
  };

  it('should calculate correct taxes for 3000 EUR monthly (default case)', () => {
    const result = calculateGermanTax(baseInput);

    expect(result.brutto).toBe(3000);
    expect(result.steuern.lohnsteuer).toBeGreaterThan(0);
    expect(result.steuern.solidaritaetszuschlag).toBeGreaterThanOrEqual(0);
    expect(result.steuern.kirchensteuer).toBe(0); // Not church tax member
    expect(result.sozialabgaben.rentenversicherung).toBeGreaterThan(0);
    expect(result.sozialabgaben.krankenversicherung).toBeGreaterThan(0);
    expect(result.sozialabgaben.pflegeversicherung).toBeGreaterThan(0);
    expect(result.sozialabgaben.arbeitslosenversicherung).toBeGreaterThan(0);
    expect(result.netto).toBeGreaterThan(0);
    expect(result.netto).toBeLessThan(result.brutto);

    // Verify accounting equation: Brutto = Netto + Abzüge
    expect(result.brutto).toBe(result.netto + result.gesamtAbzuege);
  });

  it('should handle Minijob (no social insurance)', () => {
    const miniInput: CalculatorInput = {
      ...baseInput,
      bruttoeinkommen: 500,
    };

    const result = calculateGermanTax(miniInput);

    expect(result.sozialabgaben.rentenversicherung).toBe(0);
    expect(result.sozialabgaben.krankenversicherung).toBe(0);
    expect(result.sozialabgaben.pflegeversicherung).toBe(0);
    expect(result.sozialabgaben.arbeitslosenversicherung).toBe(0);
    expect(result.gesamtSozialabgaben).toBe(0);
  });

  it('should calculate lower tax for Steuerklasse 3 vs Steuerklasse 1', () => {
    const stkl1 = calculateGermanTax(baseInput);
    const stkl3 = calculateGermanTax({
      ...baseInput,
      steuerklasse: 3,
    });

    expect(stkl3.steuern.lohnsteuer).toBeLessThan(stkl1.steuern.lohnsteuer);
    expect(stkl3.netto).toBeGreaterThan(stkl1.netto);
  });

  it('should calculate Kirchensteuer when enabled', () => {
    const result = calculateGermanTax({
      ...baseInput,
      kirchensteuer: true,
    });

    expect(result.steuern.kirchensteuer).toBeGreaterThan(0);
    // Kirchensteuer should be ~9% of Lohnsteuer (for NRW)
    expect(result.steuern.kirchensteuer).toBeCloseTo(result.steuern.lohnsteuer * 0.09, 0);
  });

  it('should calculate 8% Kirchensteuer in Bayern', () => {
    const result = calculateGermanTax({
      ...baseInput,
      bundesland: 'bayern',
      kirchensteuer: true,
    });

    expect(result.steuern.kirchensteuer).toBeGreaterThan(0);
    // Kirchensteuer should be 8% of Lohnsteuer in Bayern
    expect(result.steuern.kirchensteuer).toBeCloseTo(result.steuern.lohnsteuer * 0.08, 0);
  });

  it('should calculate 9% Kirchensteuer in Berlin', () => {
    const result = calculateGermanTax({
      ...baseInput,
      bundesland: 'berlin',
      kirchensteuer: true,
    });

    expect(result.steuern.kirchensteuer).toBeGreaterThan(0);
    // Kirchensteuer should be 9% of Lohnsteuer in Berlin
    expect(result.steuern.kirchensteuer).toBeCloseTo(result.steuern.lohnsteuer * 0.09, 0);
  });

  it('should handle annual vs monthly input correctly', () => {
    const monthly = calculateGermanTax(baseInput);
    const annual = calculateGermanTax({
      ...baseInput,
      bruttoeinkommen: 36000, // 3000 * 12
      abrechnungszeitraum: 'jahr',
    });

    // Results should be identical (within rounding tolerance)
    expect(annual.brutto).toBe(monthly.brutto);
    expect(annual.netto).toBeCloseTo(monthly.netto, 1);
  });

  it('should apply Kinderlos-Zuschlag for childless 23+ employees', () => {
    const withChildren = calculateGermanTax({
      ...baseInput,
      kinder: 1,
      alter: 30,
    });

    const childless = calculateGermanTax({
      ...baseInput,
      kinder: 0,
      alter: 30,
    });

    // Childless should pay more Pflegeversicherung
    expect(childless.sozialabgaben.pflegeversicherung).toBeGreaterThan(withChildren.sozialabgaben.pflegeversicherung);
  });

  it('should apply BBG cap for high earners', () => {
    const highInput: CalculatorInput = {
      ...baseInput,
      bruttoeinkommen: 10000, // Above BBG thresholds
    };

    const result = calculateGermanTax(highInput);

    // RV and ALV should be capped at BBG_RV_ALV (8450 * rate)
    expect(result.sozialabgaben.rentenversicherung).toBeLessThan(10000 * 0.093);
    // KV and PV should be capped at BBG_KV_PV (5812.50 * rate)
    expect(result.sozialabgaben.krankenversicherung).toBeLessThan(10000 * 0.073);
  });

  it('should satisfy accounting equation: Brutto = Netto + Abzüge', () => {
    const testCases = [
      { brutto: 1500, stkl: 1 },
      { brutto: 3000, stkl: 1 },
      { brutto: 5000, stkl: 3 },
      { brutto: 8000, stkl: 1 },
    ];

    testCases.forEach(({ brutto, stkl }) => {
      const result = calculateGermanTax({
        ...baseInput,
        bruttoeinkommen: brutto,
        steuerklasse: stkl as 1 | 2 | 3 | 4 | 5 | 6,
      });

      expect(result.brutto).toBe(result.netto + result.gesamtAbzuege);
    });
  });
});
