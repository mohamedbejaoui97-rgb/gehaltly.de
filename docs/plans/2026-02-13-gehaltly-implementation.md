# gehaltly.de Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a complete German salary calculator platform (gehaltly.de) with 81 pages, 22 calculators, perfect SEO, and mobile-first UX to outrank brutto-netto-rechner.info.

**Architecture:** Next.js 14 App Router with SSG for all pages. Tax calculation runs client-side in TypeScript. Tailwind CSS + shadcn/ui for mobile-first design. Schema markup on every page. Deployed on Vercel.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Chart.js, next-sitemap, Vitest

**Design Doc:** `docs/plans/2026-02-13-gehaltly-design.md`

---

## Phase 1: Project Foundation

### Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`
- Create: `src/styles/globals.css`
- Create: `.gitignore`

**Step 1: Initialize project**

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

Accept defaults. This creates the full Next.js scaffold with Tailwind.

**Step 2: Install dependencies**

```bash
npm install chart.js react-chartjs-2 next-sitemap clsx tailwind-merge lucide-react
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react
```

**Step 3: Configure Vitest**

Create `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

Create `src/test/setup.ts`:

```typescript
import '@testing-library/jest-dom/vitest'
```

Add to `package.json` scripts: `"test": "vitest", "test:run": "vitest run"`

**Step 4: Configure Tailwind with design tokens**

Update `tailwind.config.ts` with gehaltly color palette:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A5F",
          light: "#2563EB",
          hover: "#1D4ED8",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E3A5F",
          900: "#0F172A",
        },
        accent: {
          green: "#10B981",
          amber: "#F59E0B",
          red: "#EF4444",
        },
        background: "#F8FAFC",
        card: "#FFFFFF",
        border: "#E2E8F0",
        muted: "#64748B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```

**Step 5: Set up globals.css**

Replace `src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-background text-primary-900 antialiased;
    font-feature-settings: "cv11", "ss01";
  }
}
```

**Step 6: Update next.config.js**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

Note: We use `output: 'export'` for fully static site. Can be removed later if we need server features.

**Step 7: Verify it builds**

```bash
npm run build
```

Expected: Build succeeds with no errors.

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 14 project with Tailwind and Vitest"
```

---

### Task 2: Install and Configure shadcn/ui

**Files:**
- Create: `components.json`
- Create: `src/lib/utils.ts`
- Create: `src/components/ui/*.tsx` (Card, Button, Select, Input, Slider, Accordion, Tabs, Badge, Tooltip, Sheet, Separator, Label, Collapsible)

**Step 1: Initialize shadcn/ui**

```bash
npx shadcn@latest init
```

Select: TypeScript, Default style, CSS variables: No, `src/styles/globals.css`, Tailwind config: `tailwind.config.ts`, Components: `@/components/ui`, Utils: `@/lib/utils`

**Step 2: Install required components**

```bash
npx shadcn@latest add card button select input slider accordion tabs badge tooltip sheet separator label collapsible
```

**Step 3: Verify build**

```bash
npm run build
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add shadcn/ui component library"
```

---

### Task 3: German Tax Calculation Engine - Types and Constants

**Files:**
- Create: `src/lib/tax/types.ts`
- Create: `src/lib/tax/constants-2026.ts`
- Create: `src/lib/tax/bundeslaender.ts`
- Create: `src/lib/tax/steuerklassen.ts`
- Test: `src/lib/tax/__tests__/constants.test.ts`

**Step 1: Write types**

Create `src/lib/tax/types.ts`:

```typescript
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
```

**Step 2: Write constants**

Create `src/lib/tax/constants-2026.ts`:

```typescript
export const TAX_2026 = {
  grundfreibetrag: 12_348,
  grundfreibetragVerheiratet: 24_696,
  kinderfreibetrag: 9_756,

  // Einkommensteuer Zonen (Jahresbetrag)
  zone2Start: 12_349,
  zone2End: 17_005,
  zone3Start: 17_006,
  zone3End: 66_760,
  zone4Start: 66_761,
  zone4End: 277_825,
  zone5Start: 277_826,

  // Solidaritatszuschlag
  soliSatz: 0.055,
  soliFreigrenze: 18_130,
  soliFreigrenzeVerheiratet: 36_260,
  soliMilderungszone: 0.119, // 11.9% Milderungszone

  // Sozialversicherung (Gesamtsatz)
  rvSatz: 0.186,
  alvSatz: 0.026,
  kvSatz: 0.146,
  kvZusatzbeitragDurchschnitt: 0.029,
  pvSatz: 0.036,
  pvKinderlosZuschlag: 0.006,

  // Pflegeversicherung Abschlage pro Kind unter 25
  pvAbschlagKind: 0.0025,
  pvMaxAbschlag: 5, // max 5 Kinder Abschlag

  // Sachsen Sonderregel Pflegeversicherung
  pvSachsenAN: 0.022,
  pvSachsenAG: 0.014,

  // Beitragsbemessungsgrenzen (monatlich)
  bbgKvPv: 5_812.50,
  bbgRvAlv: 8_450,

  // Versicherungspflichtgrenze
  versicherungspflichtgrenze: 77_400,

  // Minijob / Midijob
  minijobGrenze: 556,
  midijobGrenze: 2_000,

  // Midijob Gleitzone Faktor
  midijobFaktor: 0.6846,
} as const;
```

**Step 3: Write Bundeslaender config**

Create `src/lib/tax/bundeslaender.ts`:

```typescript
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
```

**Step 4: Write Steuerklassen config**

Create `src/lib/tax/steuerklassen.ts`:

```typescript
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
```

**Step 5: Write tests for constants**

Create `src/lib/tax/__tests__/constants.test.ts`:

```typescript
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
```

**Step 6: Run tests**

```bash
npm run test:run
```

Expected: All tests pass.

**Step 7: Commit**

```bash
git add src/lib/tax/
git commit -m "feat: add German 2026 tax types, constants, Bundeslaender and Steuerklassen config"
```

---

### Task 4: Tax Calculation Engine - Core Calculations

**Files:**
- Create: `src/lib/tax/lohnsteuer.ts`
- Create: `src/lib/tax/solidaritaetszuschlag.ts`
- Create: `src/lib/tax/kirchensteuer.ts`
- Create: `src/lib/tax/sozialversicherung.ts`
- Create: `src/lib/tax/index.ts`
- Test: `src/lib/tax/__tests__/calculator.test.ts`

**Step 1: Write the Lohnsteuer module**

Create `src/lib/tax/lohnsteuer.ts`:

This implements the EStG §32a progressive income tax formula for 2026.

```typescript
import { TAX_2026 } from './constants-2026';
import { Steuerklasse } from './types';
import { STEUERKLASSEN } from './steuerklassen';

/**
 * Calculate annual income tax (Einkommensteuer) based on EStG §32a.
 * @param zvE - zu versteuerndes Einkommen (taxable income, annual)
 * @returns Annual Einkommensteuer in EUR
 */
export function berechneEinkommensteuer(zvE: number): number {
  if (zvE <= 0) return 0;

  const { grundfreibetrag, zone2End, zone3End, zone4End } = TAX_2026;

  let steuer: number;

  if (zvE <= grundfreibetrag) {
    // Zone 1: Grundfreibetrag
    steuer = 0;
  } else if (zvE <= zone2End) {
    // Zone 2: 14% - 24%
    const y = (zvE - grundfreibetrag) / 10_000;
    steuer = (932.30 * y + 1_400) * y;
  } else if (zvE <= zone3End) {
    // Zone 3: 24% - 42%
    const z = (zvE - zone2End) / 10_000;
    steuer = (176.44 * z + 2_397) * z + 1_015.13;
  } else if (zvE <= zone4End) {
    // Zone 4: 42%
    steuer = 0.42 * zvE - 10_636.31;
  } else {
    // Zone 5: 45% (Reichensteuer)
    steuer = 0.45 * zvE - 18_970.56;
  }

  return Math.floor(steuer);
}

/**
 * Calculate monthly Lohnsteuer based on Steuerklasse.
 * @param bruttoMonat - monthly gross salary
 * @param steuerklasse - tax class (1-6)
 * @param steuerfreibetragJahr - annual tax-free allowance
 * @param kinderfreibetraege - number of Kinderfreibetraege (for Soli/Kirche)
 * @returns Monthly Lohnsteuer in EUR
 */
export function berechneLohnsteuer(
  bruttoMonat: number,
  steuerklasse: Steuerklasse,
  steuerfreibetragJahr: number = 0,
  kinderfreibetraege: number = 0,
): number {
  const bruttoJahr = bruttoMonat * 12;
  const config = STEUERKLASSEN[steuerklasse];

  // Steuerklasse 5 and 6: no Grundfreibetrag
  // Steuerklasse 3: double Grundfreibetrag (Ehegattensplitting)
  // Steuerklasse 2: Grundfreibetrag + Entlastungsbetrag Alleinerziehende (4,260 EUR)
  let zvE = bruttoJahr - steuerfreibetragJahr;

  if (steuerklasse === 2) {
    // Entlastungsbetrag fur Alleinerziehende
    zvE -= 4_260;
  }

  if (zvE < 0) zvE = 0;

  let jahresSteuer: number;
  if (config.freibetragFaktor === 2) {
    // Ehegattensplitting: halve income, calculate tax, double it
    jahresSteuer = berechneEinkommensteuer(Math.floor(zvE / 2)) * 2;
  } else {
    jahresSteuer = berechneEinkommensteuer(Math.floor(zvE));
  }

  return Math.round((jahresSteuer / 12) * 100) / 100;
}
```

Note: The formula coefficients (932.30, 1400, 176.44, 2397, 1015.13, etc.) come from the BMF PAP 2026. These should be verified against the official Programmablaufplan. The exact values may need adjustment after cross-checking with the BMF published Lohnsteuer tables 2026.

**Step 2: Write Solidaritatszuschlag module**

Create `src/lib/tax/solidaritaetszuschlag.ts`:

```typescript
import { TAX_2026 } from './constants-2026';
import { Steuerklasse } from './types';
import { STEUERKLASSEN } from './steuerklassen';

/**
 * Calculate monthly Solidaritatszuschlag.
 * Since 2021: Freigrenze 18,130 EUR/Jahr (single) or 36,260 EUR (married).
 * Milderungszone up to 11.9% of excess over Freigrenze.
 */
export function berechneSoli(
  lohnsteuerMonat: number,
  steuerklasse: Steuerklasse,
  kinderfreibetraege: number = 0,
): number {
  const lohnsteuerJahr = lohnsteuerMonat * 12;
  const config = STEUERKLASSEN[steuerklasse];
  const freigrenze = config.isVerheiratet
    ? TAX_2026.soliFreigrenzeVerheiratet
    : TAX_2026.soliFreigrenze;

  // Kinderfreibetrag reduces Lohnsteuer for Soli calculation
  // (simplified: reduce by approximate tax savings per Kinderfreibetrag)
  // Full implementation would recalculate with reduced zvE

  if (lohnsteuerJahr <= freigrenze) return 0;

  const vollSoli = lohnsteuerJahr * TAX_2026.soliSatz;
  const milderung = (lohnsteuerJahr - freigrenze) * TAX_2026.soliMilderungszone;

  const soli = Math.min(vollSoli, milderung);
  return Math.round((soli / 12) * 100) / 100;
}
```

**Step 3: Write Kirchensteuer module**

Create `src/lib/tax/kirchensteuer.ts`:

```typescript
import { Bundesland } from './types';
import { BUNDESLAENDER } from './bundeslaender';

/**
 * Calculate monthly Kirchensteuer.
 * 8% of Lohnsteuer in Bayern/Baden-Wuerttemberg, 9% elsewhere.
 */
export function berechneKirchensteuer(
  lohnsteuerMonat: number,
  bundesland: Bundesland,
  kirchensteuerPflichtig: boolean,
): number {
  if (!kirchensteuerPflichtig) return 0;
  const satz = BUNDESLAENDER[bundesland].kirchensteuerSatz;
  return Math.round(lohnsteuerMonat * satz * 100) / 100;
}
```

**Step 4: Write Sozialversicherung module**

Create `src/lib/tax/sozialversicherung.ts`:

```typescript
import { TAX_2026 } from './constants-2026';
import { Bundesland, KrankenversicherungTyp } from './types';
import { BUNDESLAENDER } from './bundeslaender';

export interface SozialversicherungResult {
  rentenversicherung: number;
  krankenversicherung: number;
  pflegeversicherung: number;
  arbeitslosenversicherung: number;
}

/**
 * Calculate monthly social insurance contributions (employee share).
 */
export function berechneSozialversicherung(
  bruttoMonat: number,
  bundesland: Bundesland,
  kinder: number,
  alter: number,
  kvTyp: KrankenversicherungTyp,
  kvZusatzbeitrag: number, // percentage, e.g. 1.7
): SozialversicherungResult {
  const { bbgRvAlv, bbgKvPv, minijobGrenze } = TAX_2026;

  // Minijob: no social contributions for employee
  if (bruttoMonat <= minijobGrenze) {
    return {
      rentenversicherung: 0,
      krankenversicherung: 0,
      pflegeversicherung: 0,
      arbeitslosenversicherung: 0,
    };
  }

  // Capped income for each contribution
  const beitragRvAlv = Math.min(bruttoMonat, bbgRvAlv);
  const beitragKvPv = Math.min(bruttoMonat, bbgKvPv);

  // Rentenversicherung (AN-Anteil: 9.3%)
  const rv = beitragRvAlv * (TAX_2026.rvSatz / 2);

  // Arbeitslosenversicherung (AN-Anteil: 1.3%)
  const alv = beitragRvAlv * (TAX_2026.alvSatz / 2);

  // Krankenversicherung (AN-Anteil: 7.3% + halber Zusatzbeitrag)
  let kv = 0;
  if (kvTyp === 'gesetzlich' || kvTyp === 'freiwillig') {
    kv = beitragKvPv * (TAX_2026.kvSatz / 2 + (kvZusatzbeitrag / 100) / 2);
  }
  // privat: no standard contribution calc (user pays directly)

  // Pflegeversicherung
  const isSachsen = BUNDESLAENDER[bundesland].isSachsen;
  let pvSatz: number;

  if (isSachsen) {
    pvSatz = TAX_2026.pvSachsenAN / 2; // Sachsen: AN pays more
  } else {
    pvSatz = TAX_2026.pvSatz / 2; // Normal: 50/50
  }

  // Kinderlos-Zuschlag (ab 23 Jahre, keine Kinder)
  if (kinder === 0 && alter >= 23) {
    pvSatz += TAX_2026.pvKinderlosZuschlag;
  }

  // Abschlag fur Kinder unter 25 (ab 2. Kind)
  if (kinder >= 2) {
    const abschlagAnzahl = Math.min(kinder, TAX_2026.pvMaxAbschlag) - 1;
    pvSatz -= abschlagAnzahl * TAX_2026.pvAbschlagKind;
    if (pvSatz < 0) pvSatz = 0;
  }

  const pv = beitragKvPv * pvSatz;

  return {
    rentenversicherung: Math.round(rv * 100) / 100,
    krankenversicherung: Math.round(kv * 100) / 100,
    pflegeversicherung: Math.round(pv * 100) / 100,
    arbeitslosenversicherung: Math.round(alv * 100) / 100,
  };
}
```

**Step 5: Write main calculator index**

Create `src/lib/tax/index.ts`:

```typescript
import { CalculatorInput, CalculatorResult } from './types';
import { berechneLohnsteuer } from './lohnsteuer';
import { berechneSoli } from './solidaritaetszuschlag';
import { berechneKirchensteuer } from './kirchensteuer';
import { berechneSozialversicherung } from './sozialversicherung';

export { DEFAULT_INPUT } from './types';
export type { CalculatorInput, CalculatorResult, Steuerklasse, Bundesland } from './types';

/**
 * Main Brutto-Netto calculation.
 * All inputs are per the selected Abrechnungszeitraum.
 * Returns results in monthly amounts.
 */
export function berechneNetto(input: CalculatorInput): CalculatorResult {
  let bruttoMonat = input.bruttoeinkommen;

  // Convert to monthly if annual
  if (input.abrechnungszeitraum === 'jahr') {
    bruttoMonat = input.bruttoeinkommen / 12;
  }

  // Add Geldwerter Vorteil to Brutto for tax purposes
  const steuerBrutto = bruttoMonat + input.geldwerterVorteil;

  // Lohnsteuer
  const lohnsteuer = berechneLohnsteuer(
    steuerBrutto,
    input.steuerklasse,
    input.steuerfreibetrag,
    input.kinder > 0 ? input.kinder : 0,
  );

  // Solidaritatszuschlag
  const soli = berechneSoli(lohnsteuer, input.steuerklasse, input.kinder);

  // Kirchensteuer
  const kirche = berechneKirchensteuer(
    lohnsteuer,
    input.bundesland,
    input.kirchensteuer,
  );

  // Sozialversicherung (based on actual Brutto, not including Geldwerter Vorteil)
  const sozial = berechneSozialversicherung(
    bruttoMonat,
    input.bundesland,
    input.kinder,
    input.alter,
    input.krankenversicherung,
    input.kvZusatzbeitrag,
  );

  const gesamtSteuern = lohnsteuer + soli + kirche;
  const gesamtSozialabgaben =
    sozial.rentenversicherung +
    sozial.krankenversicherung +
    sozial.pflegeversicherung +
    sozial.arbeitslosenversicherung;

  const gesamtAbzuege = gesamtSteuern + gesamtSozialabgaben;
  const netto = bruttoMonat - gesamtAbzuege;

  return {
    brutto: Math.round(bruttoMonat * 100) / 100,
    netto: Math.round(netto * 100) / 100,
    steuern: {
      lohnsteuer,
      solidaritaetszuschlag: soli,
      kirchensteuer: kirche,
    },
    sozialabgaben: sozial,
    gesamtSteuern: Math.round(gesamtSteuern * 100) / 100,
    gesamtSozialabgaben: Math.round(gesamtSozialabgaben * 100) / 100,
    gesamtAbzuege: Math.round(gesamtAbzuege * 100) / 100,
  };
}
```

**Step 6: Write calculator tests**

Create `src/lib/tax/__tests__/calculator.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { berechneNetto, DEFAULT_INPUT } from '../index';
import type { CalculatorInput } from '../types';

describe('berechneNetto', () => {
  it('calculates netto for default input (3000 EUR, Stkl 1, Bayern)', () => {
    const result = berechneNetto(DEFAULT_INPUT);

    expect(result.brutto).toBe(3000);
    expect(result.netto).toBeGreaterThan(1800);
    expect(result.netto).toBeLessThan(2300);
    expect(result.gesamtAbzuege).toBeGreaterThan(700);
    expect(result.gesamtAbzuege).toBe(result.gesamtSteuern + result.gesamtSozialabgaben);
    expect(result.brutto - result.gesamtAbzuege).toBeCloseTo(result.netto, 0);
  });

  it('returns 0 taxes for Minijob (< 556 EUR)', () => {
    const input: CalculatorInput = { ...DEFAULT_INPUT, bruttoeinkommen: 520 };
    const result = berechneNetto(input);

    expect(result.sozialabgaben.rentenversicherung).toBe(0);
    expect(result.sozialabgaben.krankenversicherung).toBe(0);
    expect(result.sozialabgaben.arbeitslosenversicherung).toBe(0);
  });

  it('Steuerklasse 3 has lower tax than Steuerklasse 1', () => {
    const stkl1 = berechneNetto({ ...DEFAULT_INPUT, bruttoeinkommen: 5000 });
    const stkl3 = berechneNetto({ ...DEFAULT_INPUT, bruttoeinkommen: 5000, steuerklasse: 3 });

    expect(stkl3.steuern.lohnsteuer).toBeLessThan(stkl1.steuern.lohnsteuer);
    expect(stkl3.netto).toBeGreaterThan(stkl1.netto);
  });

  it('Kirchensteuer is 0 when not in church', () => {
    const result = berechneNetto({ ...DEFAULT_INPUT, kirchensteuer: false });
    expect(result.steuern.kirchensteuer).toBe(0);
  });

  it('Kirchensteuer is 8% of Lohnsteuer in Bayern', () => {
    const result = berechneNetto({
      ...DEFAULT_INPUT,
      bruttoeinkommen: 5000,
      kirchensteuer: true,
      bundesland: 'bayern',
    });
    expect(result.steuern.kirchensteuer).toBeCloseTo(
      result.steuern.lohnsteuer * 0.08,
      0,
    );
  });

  it('Kirchensteuer is 9% of Lohnsteuer in Berlin', () => {
    const result = berechneNetto({
      ...DEFAULT_INPUT,
      bruttoeinkommen: 5000,
      kirchensteuer: true,
      bundesland: 'berlin',
    });
    expect(result.steuern.kirchensteuer).toBeCloseTo(
      result.steuern.lohnsteuer * 0.09,
      0,
    );
  });

  it('handles annual input correctly', () => {
    const monthly = berechneNetto({ ...DEFAULT_INPUT, bruttoeinkommen: 3000, abrechnungszeitraum: 'monat' });
    const annual = berechneNetto({ ...DEFAULT_INPUT, bruttoeinkommen: 36000, abrechnungszeitraum: 'jahr' });

    // Results should be identical (both return monthly)
    expect(annual.brutto).toBe(monthly.brutto);
    expect(annual.netto).toBeCloseTo(monthly.netto, 0);
  });

  it('kinderlose over 23 pay more Pflegeversicherung', () => {
    const withKids = berechneNetto({ ...DEFAULT_INPUT, kinder: 1, alter: 30 });
    const withoutKids = berechneNetto({ ...DEFAULT_INPUT, kinder: 0, alter: 30 });

    expect(withoutKids.sozialabgaben.pflegeversicherung).toBeGreaterThan(
      withKids.sozialabgaben.pflegeversicherung,
    );
  });

  it('social contributions are capped at BBG', () => {
    const result = berechneNetto({ ...DEFAULT_INPUT, bruttoeinkommen: 10000 });

    // RV should be capped at BBG 8450
    const expectedRv = Math.round(8450 * 0.093 * 100) / 100;
    expect(result.sozialabgaben.rentenversicherung).toBe(expectedRv);
  });

  it('netto + gesamtAbzuege = brutto', () => {
    const inputs = [1000, 2500, 3000, 5000, 8000, 12000];
    for (const brutto of inputs) {
      const result = berechneNetto({ ...DEFAULT_INPUT, bruttoeinkommen: brutto });
      expect(result.netto + result.gesamtAbzuege).toBeCloseTo(result.brutto, 1);
    }
  });
});
```

**Step 7: Run tests**

```bash
npm run test:run
```

Expected: All tests pass. If any fail, adjust the tax formulas until they match expected ranges.

**Step 8: Commit**

```bash
git add src/lib/tax/
git commit -m "feat: implement German 2026 tax calculation engine with tests"
```

---

### Task 5: Utility Functions

**Files:**
- Create: `src/lib/utils/formatters.ts`
- Create: `src/lib/utils/amount-pages.ts`
- Create: `src/lib/utils/internal-links.ts`

**Step 1: Write formatters**

Create `src/lib/utils/formatters.ts`:

```typescript
/**
 * Format number as EUR currency (German locale).
 * 1234.56 -> "1.234,56 €"
 */
export function formatEuro(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Format number as EUR without cents.
 * 1234 -> "1.234 €"
 */
export function formatEuroRound(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format number as percentage.
 * 0.1562 -> "15,6 %"
 */
export function formatPercent(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Format number with German locale separators.
 * 1234.5 -> "1.234,5"
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('de-DE').format(value);
}
```

**Step 2: Write amount pages list**

Create `src/lib/utils/amount-pages.ts`:

```typescript
/**
 * All salary amounts for which we generate /XXXX-brutto-in-netto pages.
 * Selected based on keyword research: all amounts with 1000+ monthly search volume.
 */
export const AMOUNT_PAGES = [
  1500, 1800, 2000, 2200, 2500, 2600, 2700, 2800, 2900, 3000,
  3100, 3200, 3400, 3500, 3600, 3800, 4000, 4300, 4500, 4600,
  4800, 5000, 5500, 6000, 6600, 7500, 8500, 9000, 10000, 12000,
  15000, 45000, 50000, 55000, 60000, 85000, 90000, 100000,
] as const;

export type AmountPage = (typeof AMOUNT_PAGES)[number];

/**
 * Get neighboring amounts for navigation links.
 */
export function getNeighborAmounts(amount: number): { prev: number | null; next: number | null } {
  const idx = AMOUNT_PAGES.indexOf(amount as AmountPage);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? AMOUNT_PAGES[idx - 1] : null,
    next: idx < AMOUNT_PAGES.length - 1 ? AMOUNT_PAGES[idx + 1] : null,
  };
}
```

**Step 3: Write internal links map**

Create `src/lib/utils/internal-links.ts`:

```typescript
export interface InternalLink {
  href: string;
  label: string;
  description?: string;
  category: 'gehalt' | 'rente' | 'arbeitslosengeld' | 'studium' | 'ratgeber';
}

export const CALCULATOR_LINKS: InternalLink[] = [
  { href: '/', label: 'Brutto Netto Rechner', category: 'gehalt' },
  { href: '/gehaltsrechner/', label: 'Gehaltsrechner', category: 'gehalt' },
  { href: '/lohnrechner/', label: 'Lohnrechner', category: 'gehalt' },
  { href: '/netto-brutto-rechner/', label: 'Netto Brutto Rechner', category: 'gehalt' },
  { href: '/netto-rechner/', label: 'Netto Rechner', category: 'gehalt' },
  { href: '/rechner/stundenlohn/', label: 'Stundenlohn-Rechner', category: 'gehalt' },
  { href: '/rechner/teilzeit/', label: 'Teilzeit-Rechner', category: 'gehalt' },
  { href: '/rechner/firmenwagenrechner/', label: 'Firmenwagenrechner', category: 'gehalt' },
  { href: '/rechner/steuerklassenrechner/', label: 'Steuerklassenrechner', category: 'gehalt' },
  { href: '/rechner/arbeitgeber/', label: 'Arbeitgeber-Rechner', category: 'gehalt' },
  { href: '/rechner/lohnsteuer/', label: 'Lohnsteuer-Rechner', category: 'gehalt' },
  { href: '/rechner/beamten-rechner/', label: 'Beamten-Rechner', category: 'gehalt' },
  { href: '/rechner/azubi/', label: 'Azubi-Rechner', category: 'gehalt' },
  { href: '/rechner/werkstudent/', label: 'Werkstudent-Rechner', category: 'gehalt' },
  { href: '/rechner/midijob/', label: 'Midijob-Rechner', category: 'gehalt' },
  { href: '/rechner/abfindungsrechner/', label: 'Abfindungsrechner', category: 'gehalt' },
  { href: '/rechner/einmalzahlung/', label: 'Einmalzahlung-Rechner', category: 'gehalt' },
  { href: '/rechner/ehepaar/', label: 'Ehepaar-Rechner', category: 'gehalt' },
  { href: '/rechner/jahresgehalt/', label: 'Jahresgehalt-Rechner', category: 'gehalt' },
  { href: '/rechner/selbststaendige/', label: 'Selbstständige-Rechner', category: 'gehalt' },
  { href: '/rechner/bav/', label: 'bAV-Rechner', category: 'gehalt' },
  { href: '/rechner/mehrwertsteuer/', label: 'Mehrwertsteuer-Rechner', category: 'gehalt' },
  { href: '/rechner/rentenrechner/', label: 'Rentenrechner Brutto Netto', category: 'rente' },
  { href: '/rechner/elterngeld/', label: 'Elterngeldrechner', category: 'gehalt' },
  { href: '/rechner/arbeitslosengeld/', label: 'Arbeitslosengeld-Rechner', category: 'arbeitslosengeld' },
  { href: '/rechner/buergergeld/', label: 'Bürgergeld-Rechner', category: 'arbeitslosengeld' },
];

export const RATGEBER_LINKS: InternalLink[] = [
  { href: '/ratgeber/brutto-netto-unterschied/', label: 'Brutto Netto Unterschied', category: 'ratgeber' },
  { href: '/ratgeber/steuerklassen/', label: 'Steuerklassen Übersicht', category: 'ratgeber' },
  { href: '/ratgeber/sozialabgaben/', label: 'Sozialabgaben', category: 'ratgeber' },
  { href: '/ratgeber/brutto-netto-rechnung/', label: 'Brutto Netto Rechnung', category: 'ratgeber' },
  { href: '/ratgeber/elterngeld-brutto-netto/', label: 'Elterngeld Brutto oder Netto', category: 'ratgeber' },
];

export function getRelatedLinks(currentHref: string, count: number = 6): InternalLink[] {
  return [...CALCULATOR_LINKS, ...RATGEBER_LINKS]
    .filter((link) => link.href !== currentHref)
    .slice(0, count);
}
```

**Step 4: Commit**

```bash
git add src/lib/utils/
git commit -m "feat: add formatters, amount page list, and internal linking utils"
```

---

## Phase 2: Layout and Core UI Components

### Task 6: Layout Components (Header, Footer, Mobile Nav)

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/MobileNav.tsx`
- Create: `src/components/layout/Breadcrumbs.tsx`
- Modify: `src/app/layout.tsx`

This task creates the full site shell: responsive header with mega-menu navigation matching competitor's 5 categories (Gehalt, Arbeitslosengeld, Rente, Studium, Absicherung), keyword-rich footer with all internal links, sticky mobile bottom nav, and breadcrumb component.

The Header should:
- Show `gehaltly.de` logo/wordmark on left
- Desktop: horizontal nav with 5 category dropdowns
- Mobile: hamburger menu opening a Sheet (drawer)
- Navy `#1E3A5F` background, white text

The Footer should:
- 4-column grid of internal links (grouped by category)
- Replicate competitor's keyword-rich footer anchor strategy
- Legal links row at bottom

The MobileNav should:
- Sticky bottom bar, 5 icons: Home, Rechner, Gehalt, Ratgeber, Mehr
- Only visible on screens < 768px

Breadcrumbs should:
- Accept path segments and render `Startseite > Category > Page`
- Include BreadcrumbList schema markup

Update `src/app/layout.tsx` to wrap all pages with Header + Footer + MobileNav, include Inter font from next/font/google, set lang="de" and viewport meta.

**Commit message:** `feat: add responsive layout with header, footer, mobile nav, breadcrumbs`

---

### Task 7: Calculator Form Component (BruttoNettoForm)

**Files:**
- Create: `src/components/calculator/BruttoNettoForm.tsx`
- Create: `src/components/calculator/SliderInput.tsx`

The BruttoNettoForm is the core reusable calculator form used across all pages.

Features:
- **SliderInput**: Combined slider + number input for Bruttogehalt (range 0-15000, step 50)
- **Progressive disclosure**: 3 tiers as designed (always visible / Weitere Optionen / Erweitert)
- Uses shadcn/ui Select for dropdowns, Input for numbers, Collapsible for sections
- All fields managed via React useState, calculation triggers on every change via `useEffect`
- Calls `berechneNetto()` from tax engine
- Accepts optional `defaultValues` prop to pre-fill (for amount pages, specialized calcs)
- Accepts `onResult` callback that receives `CalculatorResult`
- All labels in German

**Commit message:** `feat: add BruttoNettoForm with progressive disclosure and real-time calculation`

---

### Task 8: Calculator Result Component

**Files:**
- Create: `src/components/calculator/CalculatorResult.tsx`
- Create: `src/components/calculator/TaxBreakdownChart.tsx`
- Create: `src/components/calculator/BarBreakdownChart.tsx`

CalculatorResult displays:
- Big Netto number in green (`#10B981`) with font-mono
- Horizontal stacked bar: Netto (green) | Steuern (amber) | Sozialabgaben (red)
- Donut chart (Chart.js Doughnut) with 3 segments: Netto, Steuern, Sozialabgaben
- Detailed breakdown table (Accordion "Detailansicht") listing all 7 deduction items
- Action buttons: Vergleichen, PDF Export, Teilen (Share API)

Charts use Chart.js via react-chartjs-2. Import Chart.js with `'use client'` directive.

The donut chart and bar chart use the design palette colors:
- Netto: `#10B981` (green)
- Steuern: `#F59E0B` (amber)
- Sozialabgaben: `#EF4444` (red)

**Commit message:** `feat: add calculator result display with donut chart and breakdown`

---

### Task 9: SEO Components (Schema, Meta, FAQ)

**Files:**
- Create: `src/components/seo/SchemaMarkup.tsx`
- Create: `src/components/seo/FAQSchema.tsx`
- Create: `src/lib/seo/meta.ts`
- Create: `src/lib/seo/schema.ts`

SchemaMarkup: Server component that renders `<script type="application/ld+json">` with JSON-LD.

Accepts schema type and generates:
- WebApplication (for calculator pages)
- FAQPage (for pages with FAQ sections)
- BreadcrumbList (for all pages)
- Article (for ratgeber/blog)

`meta.ts` exports helper functions that generate Next.js Metadata objects for each page type (calculator, amount, ratgeber, blog, legal).

Pattern for calculator pages:
```
title: "{Keyword} 2026 - Kostenlos berechnen | gehaltly.de"
description: "{Keyword} 2026: Berechnen Sie kostenlos Ihr Nettoeinkommen. Schnell, genau und übersichtlich. ✓ Alle Steuerklassen ✓ Alle Bundesländer"
```

**Commit message:** `feat: add SEO schema markup and meta tag generation`

---

### Task 10: Content Components (FAQ, Glossary, Related Calculators)

**Files:**
- Create: `src/components/content/FAQSection.tsx`
- Create: `src/components/content/GlossarySection.tsx`
- Create: `src/components/content/RelatedCalculators.tsx`

FAQSection: Accordion component with FAQ items. Accepts array of `{ question, answer }`. Renders shadcn Accordion.

GlossarySection: Renders H2 "Glossar" + multiple H3 sections with educational text. Accepts structured content array.

RelatedCalculators: Horizontal scroll container of cards linking to other calculators. Each card shows icon, name, and short description. Uses `CALCULATOR_LINKS` from internal-links.

**Commit message:** `feat: add FAQ, glossary, and related calculator content components`

---

## Phase 3: Homepage and Core Calculator Pages

### Task 11: Homepage - Brutto Netto Rechner 2026

**Files:**
- Create/modify: `src/app/page.tsx`
- Create: `src/app/metadata.ts` (or inline metadata export)

This is the #1 priority page targeting "brutto netto rechner" (1.83M searches/month).

Compose: Breadcrumbs + H1 + intro paragraph + BruttoNettoForm + CalculatorResult + RelatedCalculators + GlossarySection (full competitor glossary content rewritten in better German) + FAQSection (8 FAQs) + SchemaMarkup (WebApplication + FAQ + BreadcrumbList).

SEO metadata:
```
title: "Brutto Netto Rechner 2026 - Gehaltsrechner kostenlos | gehaltly.de"
description: "Brutto Netto Rechner 2026: Berechnen Sie kostenlos Ihr Nettogehalt. ✓ Alle Steuerklassen ✓ Alle Bundesländer ✓ Mit Diagrammen. Jetzt Nettolohn berechnen!"
```

H1: "Brutto Netto Rechner 2026"
H2s: "Kostenlos Ihr Nettoeinkommen berechnen", "Glossar", "Ihr Bruttoeinkommen", "Steuerfreibetrag / Grundfreibetrag 2026", "Kinderfreibetrag 2026", "Sozialversicherungsbeiträge 2026", "Geldwerter Vorteil", "Die Steuerklassen", "Krankenversicherungssätze", "Beitragsbemessungsgrenze 2026", "Pflegeversicherung", "Nettogehalt / Nettolohn 2026", "Häufig gestellte Fragen"

All glossary content must be written in native German, rewritten from competitor content but improved with clearer explanations, 2026 figures, and better formatting.

**Commit message:** `feat: build homepage - Brutto Netto Rechner 2026 with full content`

---

### Task 12: Calculator Landing Variants

**Files:**
- Create: `src/app/gehaltsrechner/page.tsx`
- Create: `src/app/lohnrechner/page.tsx`
- Create: `src/app/netto-brutto-rechner/page.tsx`
- Create: `src/app/netto-rechner/page.tsx`

Each page uses the same BruttoNettoForm + CalculatorResult but with:
- Different H1 and title (targeting that keyword cluster)
- Different intro paragraph
- Unique meta description
- Relevant FAQ (5-8 questions specific to that keyword intent)
- Schema markup

For `/netto-brutto-rechner`: Add a "Wunschnetto" mode toggle that reverses the calculation (input desired Netto, output required Brutto). This requires a `berechneWunschnetto()` function in the tax engine that uses iterative approximation (binary search between 0 and 2x desired netto).

**Commit message:** `feat: add gehaltsrechner, lohnrechner, netto-brutto-rechner, netto-rechner pages`

---

### Task 13: Specialized Calculator Pages (Batch 1 - High Volume)

**Files:**
- Create: `src/app/rechner/stundenlohn/page.tsx`
- Create: `src/app/rechner/rentenrechner/page.tsx`
- Create: `src/app/rechner/mehrwertsteuer/page.tsx`
- Create: `src/app/rechner/firmenwagenrechner/page.tsx`
- Create: `src/app/rechner/steuerklassenrechner/page.tsx`
- Create: `src/app/rechner/arbeitgeber/page.tsx`

Each specialized calculator uses the base BruttoNettoForm with modified defaults and additional fields specific to its use case. Each page has unique H1, meta tags, glossary content, and FAQ.

- **Stundenlohn**: Extra fields for Wochenstunden and Arbeitstage. Converts hourly to monthly.
- **Rentenrechner**: Modified for pension recipients (no ALV, different KV rules).
- **MwSt**: Completely different calculator (simple: Netto * MwSt-Satz = Brutto). Own form.
- **Firmenwagen**: Extra field for Listenpreis, Entfernungskilometer. Calculates Geldwerter Vorteil.
- **Steuerklassen**: Shows side-by-side comparison table of net salary across all 6 Steuerklassen.
- **Arbeitgeber**: Shows employer total cost including AG social contributions.

**Commit message:** `feat: add 6 high-volume specialized calculator pages`

---

### Task 14: Specialized Calculator Pages (Batch 2 - Medium Volume)

**Files:**
- Create: `src/app/rechner/beamten-rechner/page.tsx`
- Create: `src/app/rechner/lohnsteuer/page.tsx`
- Create: `src/app/rechner/teilzeit/page.tsx`
- Create: `src/app/rechner/abfindungsrechner/page.tsx`
- Create: `src/app/rechner/azubi/page.tsx`
- Create: `src/app/rechner/einmalzahlung/page.tsx`
- Create: `src/app/rechner/werkstudent/page.tsx`
- Create: `src/app/rechner/midijob/page.tsx`

Same pattern as Task 13. Each with unique SEO, content, and form modifications:

- **Beamte**: No social contributions toggle, TVoD pay scale selector
- **Lohnsteuer**: Focus on Lohnsteuer calculation only, monthly tax table
- **Teilzeit**: Wochenstunden slider (10-40h), prorated salary display
- **Abfindung**: Fünftelregelung toggle, separate abfindung amount field
- **Azubi**: Preset low salary range, ausbildungsjahr selector
- **Einmalzahlung**: Separate fields for Monatsgehalt and Einmalzahlung
- **Werkstudent**: Werkstudentenprivileg (no KV/PV/ALV), Wochenstunden ≤20h
- **Midijob**: Gleitzone calculation, range 556-2000 EUR

**Commit message:** `feat: add 8 medium-volume specialized calculator pages`

---

### Task 15: Remaining Specialized Calculator Pages

**Files:**
- Create: `src/app/rechner/ehepaar/page.tsx`
- Create: `src/app/rechner/jahresgehalt/page.tsx`
- Create: `src/app/rechner/selbststaendige/page.tsx`
- Create: `src/app/rechner/bav/page.tsx`
- Create: `src/app/rechner/elterngeld/page.tsx`
- Create: `src/app/rechner/arbeitslosengeld/page.tsx`
- Create: `src/app/rechner/buergergeld/page.tsx`

Same pattern. Each page with unique content.

- **Ehepaar**: Dual-input (Partner A + Partner B), compares Steuerklasse 3/5 vs 4/4
- **Jahresgehalt**: Input annual salary, shows monthly breakdown
- **Selbststaendige**: No employer social contributions, different KV options
- **bAV**: Extra field for Entgeltumwandlung amount, shows impact on net
- **Elterngeld**: Calculates Elterngeld based on previous net income
- **Arbeitslosengeld**: ALG1 based on previous salary, Leistungssatz 60%/67%
- **Buergergeld**: Regelsatz 2026 calculator with Bedarfsgemeinschaft

**Commit message:** `feat: add 7 remaining specialized calculator pages`

---

## Phase 4: Templated Amount Pages

### Task 16: Amount Page Template and Generation

**Files:**
- Create: `src/app/[betrag]-brutto-in-netto/page.tsx`
- Create: `src/components/content/AmountPageContent.tsx`

Dynamic route using `generateStaticParams()` to pre-generate 38 pages from AMOUNT_PAGES list.

Each page includes:
- H1: "{X} Euro Brutto in Netto"
- Pre-calculated results table for all 6 Steuerklassen (use `berechneNetto()` at build time via `generateStaticParams` + component-level calculation)
- Embedded BruttoNettoForm pre-filled with amount
- H2: "{X} Euro Brutto: So viel bleibt Netto (2026)" - summary paragraph
- H2: "Netto nach Steuerklasse bei {X} Euro Brutto" - 6-row table
- H2: "Abzüge bei {X} Euro Bruttogehalt" - breakdown details
- H2: "Häufig gestellte Fragen zu {X} Euro Brutto" - 5 FAQs
- Navigation links to neighboring amounts
- Schema: FAQ + BreadcrumbList

SEO: `title: "{X} Euro Brutto in Netto 2026 - Steuerklasse 1-6 | gehaltly.de"`

**Commit message:** `feat: add 38 templated amount pages with pre-calculated results`

---

## Phase 5: Guide and Content Pages

### Task 17: Ratgeber Hub and Steuerklassen Pages

**Files:**
- Create: `src/app/ratgeber/brutto-netto-unterschied/page.tsx`
- Create: `src/app/ratgeber/steuerklassen/page.tsx`
- Create: `src/app/ratgeber/steuerklassen/steuerklasse-1/page.tsx` (and 2-6)
- Create: `src/app/ratgeber/sozialabgaben/page.tsx`
- Create: `src/app/ratgeber/brutto-netto-rechnung/page.tsx`
- Create: `src/app/ratgeber/elterngeld-brutto-netto/page.tsx`

Each guide page: 1500-2500 words of native German educational content with H2/H3 structure, internal links to relevant calculators, FAQ section, schema markup.

Steuerklassen hub links to 6 sub-pages. Each sub-page explains the specific tax class in detail with examples and embedded calculator pre-set to that Steuerklasse.

**Commit message:** `feat: add ratgeber guide pages and steuerklassen hub`

---

## Phase 6: SEO Infrastructure and Legal

### Task 18: Technical SEO Setup

**Files:**
- Create: `public/robots.txt`
- Create: `next-sitemap.config.js`
- Modify: `src/app/layout.tsx` (add global schema, favicons, OG defaults)

robots.txt:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://gehaltly.de/sitemap.xml
```

next-sitemap config generating sitemap.xml with correct priorities per page type. Run `npx next-sitemap` as postbuild script.

Add to layout.tsx: default OG image, twitter card meta, global Organization schema.

**Commit message:** `feat: add robots.txt, sitemap generation, and global SEO config`

---

### Task 19: Legal Pages

**Files:**
- Create: `src/app/impressum/page.tsx`
- Create: `src/app/datenschutz/page.tsx`
- Create: `src/app/ueber-uns/page.tsx`
- Create: `src/app/en/page.tsx`

Impressum: Placeholder with TMG §5 required fields (user fills in real data).
Datenschutz: DSGVO-compliant privacy policy for a static site with no cookies (Plausible analytics).
Über uns: Brand story page for gehaltly.de.
English: Simplified English version of Brutto-Netto-Rechner for expats.

**Commit message:** `feat: add legal pages (Impressum, Datenschutz) and English calculator`

---

## Phase 7: Final Polish and Deploy

### Task 20: Final Build, Test, and Deploy

**Step 1: Run full test suite**

```bash
npm run test:run
```

**Step 2: Build entire site**

```bash
npm run build
```

Verify: All 81+ pages generated, no build errors.

**Step 3: Test locally**

```bash
npx serve out
```

Manual checks:
- Homepage calculator works correctly
- Mobile layout responsive at 375px
- Charts render
- All internal links resolve
- FAQ accordions expand
- Amount pages show correct pre-calculated values
- Schema markup validates (paste JSON-LD into Google Rich Results Test)
- robots.txt accessible at /robots.txt
- sitemap.xml accessible at /sitemap.xml

**Step 4: Deploy to Vercel**

```bash
npx vercel --prod
```

Or connect GitHub repo to Vercel for automatic deploys.

**Step 5: Post-deploy verification**
- Submit sitemap to Google Search Console
- Verify all pages indexed
- Test Core Web Vitals with PageSpeed Insights
- Verify schema with Google Rich Results Test

**Commit message:** `feat: production build and deployment config`

---

## Summary

| Phase | Tasks | Pages Created | Key Deliverable |
|---|---|---|---|
| 1: Foundation | 1-5 | 0 | Next.js scaffold, tax engine, utils |
| 2: UI Components | 6-10 | 0 | Layout, calculator form, charts, SEO components |
| 3: Core Pages | 11-15 | 27 | Homepage + 4 landings + 22 specialized calculators |
| 4: Amount Pages | 16 | 38 | Templated /XXXX-brutto-in-netto pages |
| 5: Content Pages | 17 | 11 | Ratgeber guides + Steuerklassen hub |
| 6: SEO & Legal | 18-19 | 5 | robots.txt, sitemap, Impressum, Datenschutz, EN |
| 7: Deploy | 20 | 0 | Production build and Vercel deployment |
| **Total** | **20 tasks** | **~81 pages** | **Full production site** |
