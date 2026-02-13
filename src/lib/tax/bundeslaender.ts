import { Bundesland } from './types';

export interface BundeslandConfig {
  name: string;
  kirchensteuerSatz: number; // 0.08 or 0.09
  isSachsen: boolean;
}

export const BUNDESLAENDER: Record<Bundesland, BundeslandConfig> = {
  'baden-wuerttemberg': { name: 'Baden-Württemberg', kirchensteuerSatz: 0.08, isSachsen: false },
  'bayern': { name: 'Bayern', kirchensteuerSatz: 0.08, isSachsen: false },
  'berlin': { name: 'Berlin', kirchensteuerSatz: 0.09, isSachsen: false },
  'brandenburg': { name: 'Brandenburg', kirchensteuerSatz: 0.09, isSachsen: false },
  'bremen': { name: 'Bremen', kirchensteuerSatz: 0.09, isSachsen: false },
  'hamburg': { name: 'Hamburg', kirchensteuerSatz: 0.09, isSachsen: false },
  'hessen': { name: 'Hessen', kirchensteuerSatz: 0.09, isSachsen: false },
  'mecklenburg-vorpommern': { name: 'Mecklenburg-Vorpommern', kirchensteuerSatz: 0.09, isSachsen: false },
  'niedersachsen': { name: 'Niedersachsen', kirchensteuerSatz: 0.09, isSachsen: false },
  'nordrhein-westfalen': { name: 'Nordrhein-Westfalen', kirchensteuerSatz: 0.09, isSachsen: false },
  'rheinland-pfalz': { name: 'Rheinland-Pfalz', kirchensteuerSatz: 0.09, isSachsen: false },
  'saarland': { name: 'Saarland', kirchensteuerSatz: 0.09, isSachsen: false },
  'sachsen': { name: 'Sachsen', kirchensteuerSatz: 0.09, isSachsen: true },
  'sachsen-anhalt': { name: 'Sachsen-Anhalt', kirchensteuerSatz: 0.09, isSachsen: false },
  'schleswig-holstein': { name: 'Schleswig-Holstein', kirchensteuerSatz: 0.09, isSachsen: false },
  'thueringen': { name: 'Thüringen', kirchensteuerSatz: 0.09, isSachsen: false },
};
