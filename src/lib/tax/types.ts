export type Steuerklasse = 1 | 2 | 3 | 4 | 5 | 6;

export type Bundesland =
  | 'baden-wuerttemberg'
  | 'bayern'
  | 'berlin'
  | 'brandenburg'
  | 'bremen'
  | 'hamburg'
  | 'hessen'
  | 'mecklenburg-vorpommern'
  | 'niedersachsen'
  | 'nordrhein-westfalen'
  | 'rheinland-pfalz'
  | 'saarland'
  | 'sachsen'
  | 'sachsen-anhalt'
  | 'schleswig-holstein'
  | 'thueringen';

export type KrankenversicherungTyp = 'gesetzlich' | 'privat' | 'freiwillig';

export type Abrechnungszeitraum = 'monat' | 'jahr';

export interface CalculatorInput {
  bruttoeinkommen: number;
  abrechnungszeitraum: Abrechnungszeitraum;
  steuerklasse: Steuerklasse;
  bundesland: Bundesland;
  kirchensteuer: boolean;
  alter: number;
  kinder: number;
  krankenversicherung: KrankenversicherungTyp;
  kvZusatzbeitrag: number; // percentage, e.g. 1.7
  steuerfreibetrag: number;
  geldwerterVorteil: number;
  abrechnungsjahr: number;
}

export interface TaxBreakdown {
  lohnsteuer: number;
  solidaritaetszuschlag: number;
  kirchensteuer: number;
}

export interface SocialBreakdown {
  rentenversicherung: number;
  krankenversicherung: number;
  pflegeversicherung: number;
  arbeitslosenversicherung: number;
}

export interface CalculatorResult {
  brutto: number;
  netto: number;
  steuern: TaxBreakdown;
  sozialabgaben: SocialBreakdown;
  gesamtSteuern: number;
  gesamtSozialabgaben: number;
  gesamtAbzuege: number;
}

export const DEFAULT_INPUT: CalculatorInput = {
  bruttoeinkommen: 3000,
  abrechnungszeitraum: 'monat',
  steuerklasse: 1,
  bundesland: 'bayern',
  kirchensteuer: false,
  alter: 30,
  kinder: 0,
  krankenversicherung: 'gesetzlich',
  kvZusatzbeitrag: 1.7,
  steuerfreibetrag: 0,
  geldwerterVorteil: 0,
  abrechnungsjahr: 2026,
};
