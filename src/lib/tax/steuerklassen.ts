import { Steuerklasse } from './types';

export interface SteuerklasseConfig {
  label: string;
  description: string;
  isVerheiratet: boolean;
  freibetragFaktor: number; // 1 for single, 2 for married splitting
}

export const STEUERKLASSEN: Record<Steuerklasse, SteuerklasseConfig> = {
  1: {
    label: 'Steuerklasse I',
    description: 'Ledige, Verwitwete, Geschiedene ohne Kinder',
    isVerheiratet: false,
    freibetragFaktor: 1,
  },
  2: {
    label: 'Steuerklasse II',
    description: 'Alleinerziehende mit Kindern',
    isVerheiratet: false,
    freibetragFaktor: 1,
  },
  3: {
    label: 'Steuerklasse III',
    description: 'Verheiratet (Allein-/Hauptverdiener)',
    isVerheiratet: true,
    freibetragFaktor: 2,
  },
  4: {
    label: 'Steuerklasse IV',
    description: 'Verheiratet (beide verdienen ähnlich)',
    isVerheiratet: true,
    freibetragFaktor: 1,
  },
  5: {
    label: 'Steuerklasse V',
    description: 'Verheiratet (Geringverdiener bei III/V)',
    isVerheiratet: true,
    freibetragFaktor: 0,
  },
  6: {
    label: 'Steuerklasse VI',
    description: 'Zweit- und Nebenjob',
    isVerheiratet: false,
    freibetragFaktor: 0,
  },
};
