import { describe, it, expect } from 'vitest';
import { TAX_2026 } from '../constants-2026';
import { BUNDESLAENDER } from '../bundeslaender';
import { STEUERKLASSEN } from '../steuerklassen';

describe('TAX_2026 constants', () => {
  it('has correct Grundfreibetrag', () => {
    expect(TAX_2026.grundfreibetrag).toBe(12_348);
  });

  it('has correct Beitragsbemessungsgrenze KV/PV', () => {
    expect(TAX_2026.bbgKvPv * 12).toBe(69_750);
  });

  it('has correct Beitragsbemessungsgrenze RV/ALV', () => {
    expect(TAX_2026.bbgRvAlv * 12).toBe(101_400);
  });

  it('has all social insurance rates summing correctly', () => {
    // Total employer+employee: 18.6 + 2.6 + 14.6 + 3.6 = 39.4% (without KV Zusatzbeitrag)
    const total = TAX_2026.rvSatz + TAX_2026.alvSatz + TAX_2026.kvSatz + TAX_2026.pvSatz;
    expect(total).toBeCloseTo(0.394, 3);
  });
});

describe('BUNDESLAENDER', () => {
  it('has all 16 federal states', () => {
    expect(Object.keys(BUNDESLAENDER)).toHaveLength(16);
  });

  it('Bayern and Baden-Wuerttemberg have 8% Kirchensteuer', () => {
    expect(BUNDESLAENDER['bayern'].kirchensteuerSatz).toBe(0.08);
    expect(BUNDESLAENDER['baden-wuerttemberg'].kirchensteuerSatz).toBe(0.08);
  });

  it('other states have 9% Kirchensteuer', () => {
    expect(BUNDESLAENDER['berlin'].kirchensteuerSatz).toBe(0.09);
    expect(BUNDESLAENDER['nordrhein-westfalen'].kirchensteuerSatz).toBe(0.09);
  });

  it('only Sachsen is flagged as Sachsen', () => {
    const sachsenStates = Object.entries(BUNDESLAENDER).filter(([, v]) => v.isSachsen);
    expect(sachsenStates).toHaveLength(1);
    expect(sachsenStates[0][0]).toBe('sachsen');
  });
});

describe('STEUERKLASSEN', () => {
  it('has all 6 classes', () => {
    expect(Object.keys(STEUERKLASSEN)).toHaveLength(6);
  });

  it('class 3 has freibetragFaktor 2 (Ehegattensplitting)', () => {
    expect(STEUERKLASSEN[3].freibetragFaktor).toBe(2);
  });

  it('class 5 and 6 have freibetragFaktor 0', () => {
    expect(STEUERKLASSEN[5].freibetragFaktor).toBe(0);
    expect(STEUERKLASSEN[6].freibetragFaktor).toBe(0);
  });
});
