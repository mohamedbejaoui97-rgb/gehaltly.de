# Gehaltly.de — Calculator Specification v1.0

> **Ziel**: Berechnungsgenauigkeit auf dem Niveau des offiziellen BMF-Steuerrechners (bmf-steuerrechner.de), kombiniert mit der besten UX aller Wettbewerber.

---

## 1. Offizielle Werte 2026 (Quellen)

### 1.1 EStG §32a — Einkommensteuertarif 2026

Quelle: [gesetze-im-internet.de/estg/__32a.html](https://www.gesetze-im-internet.de/estg/__32a.html) + [finanz-tools.de](https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2026)

| Zone | Bereich (zvE) | Formel |
|------|---------------|--------|
| 1 | 0 – 12.348 € | ESt = 0 |
| 2 | 12.349 – 17.799 € | y = (zvE − 12.348) / 10.000; ESt = (914,51 · y + 1.400) · y |
| 3 | 17.800 – 69.878 € | z = (zvE − 17.799) / 10.000; ESt = (173,10 · z + 2.397) · z + 1.034,87 |
| 4 | 69.879 – 277.825 € | ESt = 0,42 · zvE − 11.135,63 |
| 5 | ab 277.826 € | ESt = 0,45 · zvE − 19.470,38 |

**Variablen:**
- `y` = ein Zehntausendstel des 12.348 € übersteigenden Teils des zvE
- `z` = ein Zehntausendstel des 17.799 € übersteigenden Teils des zvE
- `zvE` = zu versteuerndes Einkommen, auf volle Euro abgerundet
- Ergebnis auf volle Euro abrunden (`Math.floor`)

**Splittingverfahren (Steuerklasse 3):** zvE halbieren, Formel anwenden, Ergebnis verdoppeln.

### 1.2 Sozialversicherung 2026

Quellen: [Bundesregierung](https://www.bundesregierung.de/breg-de/aktuelles/beitragsgemessungsgrenzen-2386514), [AOK](https://www.aok.de/fk/jahreswechsel/sv-beitraege-2026/), [Deutsche Rentenversicherung](https://www.deutsche-rentenversicherung.de/DRV/DE/Ueber-uns-und-Presse/Presse/Meldungen/2025/25-10-08-bundeskabinett-sv-rechengroessen-vo-2026.html)

#### Beitragssätze (Gesamtsatz AG + AN)

| Zweig | Gesamtsatz | AN-Anteil | AG-Anteil |
|-------|-----------|-----------|-----------|
| RV (Rentenversicherung) | 18,6 % | 9,3 % | 9,3 % |
| ALV (Arbeitslosenversicherung) | 2,6 % | 1,3 % | 1,3 % |
| KV (Krankenversicherung) | 14,6 % | 7,3 % | 7,3 % |
| KV Zusatzbeitrag (Ø 2026) | 2,9 % | **1,45 %** | **1,45 %** |
| PV (Pflegeversicherung) | 3,6 % | 1,8 % | 1,8 % |

**Wichtig KV-Zusatzbeitrag:** Seit 01.01.2019 wird der kassenindividuelle Zusatzbeitrag paritätisch (50/50) zwischen AG und AN aufgeteilt. Der AN zahlt nur die HÄLFTE des Zusatzbeitrags.

#### Pflegeversicherung — Sonderregeln

Quelle: [sozialversicherung-kompetent.de](https://sozialversicherung-kompetent.de/pflegeversicherung/versicherungsrecht/1636-beitragssatz-pflegeversicherung-2026.html), [TK](https://www.tk.de/firmenkunden/versicherung/beitraege-faq/pv-beitraege/welcher-pv-beitragssatz-fuer-beschaeftigte-mit-kindern-2148708)

| Situation | AN-Beitragssatz |
|-----------|----------------|
| Mit Kind(ern) | 1,8 % |
| Kinderlos ab 23 | 1,8 % + 0,6 % = **2,4 %** |
| 2 Kinder unter 25 | 1,8 % − 0,25 % = **1,55 %** |
| 3 Kinder unter 25 | 1,8 % − 0,50 % = **1,30 %** |
| 4 Kinder unter 25 | 1,8 % − 0,75 % = **1,05 %** |
| 5+ Kinder unter 25 | 1,8 % − 1,00 % = **0,80 %** |

**Sachsen-Sonderregel:** AN zahlt 2,3 %, AG zahlt 1,3 % (statt 1,8 %/1,8 %)

#### Beitragsbemessungsgrenzen (monatlich)

| Zweig | Monatlich | Jährlich |
|-------|-----------|----------|
| KV / PV | 5.812,50 € | 69.750 € |
| RV / ALV | 8.450,00 € | 101.400 € |

#### Sonstige Grenzen

| Parameter | Wert |
|-----------|------|
| Versicherungspflichtgrenze (JAEG) | 77.400 € / Jahr |
| Minijob-Grenze | 556 € / Monat |
| Midijob-Obergrenze | 2.000 € / Monat |

### 1.3 Solidaritätszuschlag 2026

Quelle: [TK](https://www.tk.de/firmenkunden/service/fachthemen/fachthema-beitraege/solidaritaetszuschlag-2075802), [lohnsteuer-kompakt.de](https://www.lohnsteuer-kompakt.de/steuerwissen/solidaritaetszuschlag-erhoehung-der-freigrenze-3/)

| Parameter | Wert |
|-----------|------|
| Soli-Satz | 5,5 % der Lohnsteuer |
| Freigrenze (Alleinstehend) | **20.350 €** Jahres-Lohnsteuer |
| Freigrenze (Verheiratet / Stkl 3) | **40.700 €** Jahres-Lohnsteuer |
| Milderungszone | max. 11,9 % des die Freigrenze übersteigenden Betrags |

**Algorithmus:**
```
if (lohnsteuer <= freigrenze) → soli = 0
else → soli = min(lohnsteuer * 0.055, (lohnsteuer - freigrenze) * 0.119)
```

### 1.4 Kirchensteuer 2026

| Bundesland | Satz |
|------------|------|
| Bayern, Baden-Württemberg | 8 % der Lohnsteuer |
| Alle anderen | 9 % der Lohnsteuer |

### 1.5 Lohnsteuer-Freibeträge & Pauschalen

| Parameter | Wert |
|-----------|------|
| Grundfreibetrag | 12.348 € |
| Arbeitnehmerpauschbetrag | 1.230 € |
| Sonderausgabenpauschbetrag | 36 € |
| Kinderfreibetrag | 9.756 € (pro Elternteil: 4.878 €) |
| Entlastungsbetrag Alleinerziehende | 4.260 € + 240 € je weiteres Kind |

### 1.6 Steuerklassen-Logik (BMF PAP)

Quelle: [BMF PAP 2026](https://www.bundesfinanzministerium.de/Content/DE/Downloads/Steuern/Steuerarten/Lohnsteuer/Programmablaufplan/2025-11-12-PAP-2026.html)

| Stkl | Grundfreibetrag | Arbeitnehmer-PB | Sonderausgaben-PB | Kinderfreibetrag | Besonderheit |
|------|----------------|-----------------|--------------------|--------------------|-------------|
| 1 | 1× | 1.230 € | 36 € | 1× pro Kind | Standard |
| 2 | 1× | 1.230 € | 36 € | 1× pro Kind | + Entlastungsbetrag |
| 3 | ✗ (Splitting) | 1.230 € | 36 € | 2× pro Kind | Splitting: zvE÷2, ESt×2 |
| 4 | 1× | 1.230 € | 36 € | 1× pro Kind | Wie Stkl 1 |
| 5 | ✗ | 1.230 € | 36 € | ✗ | Kein Freibetrag |
| 6 | ✗ | ✗ | ✗ | ✗ | Kein Freibetrag, keine Pauschalen |

**Wichtig Stkl 3:** KEIN Grundfreibetrag manuell abziehen. Stattdessen Splitting-Verfahren anwenden: zvE halbieren → §32a-Formel → Ergebnis verdoppeln. Das Splitting-Ergebnis enthält implizit den doppelten Grundfreibetrag.

**Wichtig Stkl 5/6:** Grundfreibetrag wird NICHT abgezogen, weil er beim Partner (Stkl 3) bereits berücksichtigt wird.

---

## 2. Bugs im aktuellen Code — Soll/Ist-Vergleich

### 2.1 `lohnsteuer.ts` — KRITISCH: Falsche EStG-Formel

**Bug 1: Doppelter Grundfreibetrag**
- **Zeile 40**: `zvE -= GRUNDFREIBETRAG` (12.348 € abgezogen)
- **Zeile 80**: `if (zvE <= 12096) return 0` → Zone 1 rechnet nochmal mit Freibetrag
- **Effekt**: Grundfreibetrag wird DOPPELT berücksichtigt → Steuer viel zu niedrig

**Bug 2: Falsche Zonengrenzen und Koeffizienten (2025 statt 2026)**

| Parameter | IST (lohnsteuer.ts) | SOLL (EStG 2026) |
|-----------|---------------------|-------------------|
| Zone 1 Ende | 12.096 | 12.348 |
| Zone 2 Ende | 17.696 | 17.799 |
| Zone 2 Koeff a | 922,98 | 914,51 |
| Zone 3 Ende | 68.702 | 69.878 |
| Zone 3 Koeff a | 181,19 | 173,10 |
| Zone 3 Konstante e | 1.025,38 | 1.034,87 |
| Zone 4 Konstante | −10.602,13 | −11.135,63 |
| Zone 5 Konstante | −18.936,88 | −19.470,38 |

**Bug 3: Stkl 3 fehlt Splitting**
- Aktuell: doppelter Grundfreibetrag wird abgezogen, dann normale Formel
- Korrekt: zvE halbieren → Formel → ×2

### 2.2 `constants-2026.ts` — Falsche Zonengrenzen + Soli-Werte

| Parameter | IST | SOLL |
|-----------|-----|------|
| zone2End | 17.005 | 17.799 |
| zone3End | 66.760 | 69.878 |
| zone4Start | 66.761 | 69.879 |
| soliFreigrenze | 18.130 | **20.350** |
| soliFreigrenzeVerheiratet | 36.260 | **40.700** |
| pvSachsenAN | 0,022 (2,2 %) | **0,023 (2,3 %)** |
| pvSachsenAG | 0,014 (1,4 %) | **0,013 (1,3 %)** |

### 2.3 `solidaritaetszuschlag.ts` — Hardcoded falsche Werte

| Parameter | IST (hardcoded) | SOLL |
|-----------|----------------|------|
| Freigrenze Single | 16.956 | **20.350** |
| Freigrenze Verheiratet | 33.912 | **40.700** |

### 2.4 `sozialversicherung.ts` — KV-Zusatzbeitrag

**Bug:** Zeile 97: `Math.round(kvBasis * (kvZusatzbeitrag / 100))` → voller Zusatzbeitrag dem AN belastet.
**Korrekt:** `Math.round(kvBasis * (kvZusatzbeitrag / 100 / 2))` → nur die Hälfte.

### 2.5 `sozialversicherung.ts` — Sachsen PV

**Bug:** `PV_SACHSEN_EMPLOYEE_RATE` = 0,022 (2,2 %) — korrekt wäre 0,023 (2,3 %).

---

## 3. Wettbewerber-Analyse

### 3.1 brutto-netto-rechner.info

**Stärken:**
- Umfangreiche Eingabefelder (Kinderfreibetrag als Dropdown 0-5.5, Kinder unter 25 für PV, RV/ALV-Pflicht)
- Info-Icons mit Glossar-Tooltips für jedes Feld
- Multi-Year Support (2020-2026)
- Dynamische KV-Zusatzbeitrag-Tabelle (alle Kassen gelistet)
- Conditional Display (PKV-Felder nur bei privat)
- Geldwerter Vorteil / Firmenwagen

**Schwächen:**
- Veraltetes Design (HTML/CSS aus ~2010)
- Kein Echtzeit-Ergebnis (Submit-Button → neue Seite)
- Keine Charts/Visualisierungen
- Kein Vergleichsmodus
- Kein Export/PDF

**Unique Features für uns:**
- ✅ Multi-Year (bereits geplant via `abrechnungsjahr`)
- ✅ Kinderfreibetrag als separates Feld (granularer als nur "Kinder-Anzahl")

### 3.2 sparkasse.de/rechner/brutto-netto-rechner

**Stärken:**
- Modernes, professionelles Design (Material-UI-Stil)
- Floating Labels mit Animation
- Klare Farbgebung: Rot (#EE0000), Dunkelgrau, Weiß
- Border-radius: 6px Inputs, 90px Buttons
- Responsive: 4 Breakpoints (0/720/1080/1440px)
- Hero-Image + erklärende Texte
- Accessibility: Skip-Link, Leichte Sprache, ARIA

**Schwächen:**
- Weniger Eingabefelder (nur Basis-Parameter)
- Kein Vergleichsmodus
- Kein Chart/Grafik
- Kein Export

**Design-Inspiration für uns:**
- ✅ Floating Labels → cleaner look
- ✅ Smooth Focus-Transitions (250ms)
- ✅ Rounded Buttons (border-radius: 90px)
- ✅ Klare Farbhierarchie mit einer Akzentfarbe

### 3.3 bruttonetto.arbeiterkammer.at (Österreich)

**Stärken:**
- Pendlerrechner-Integration (Entfernung/ÖPNV)
- Familienbonus-Optionen (Voll/Geteilt/Keine)
- Radio Buttons für Beschäftigungsart (Arbeiter/Angestellter/Lehrling/Pensionist)
- Progressive Disclosure ("Mein Einkommen" als Section Header)
- Toggle-Switches statt Checkboxes

**Schwächen:**
- Nur für Österreich relevant (Steuerrecht)
- Begrenzte Visualisierung

**UX-Inspiration für uns:**
- ✅ Radio Buttons für Hauptauswahl (sichtbarer als Dropdown)
- ✅ Toggle-Switches statt Checkboxes für Ja/Nein
- ✅ Progressive Disclosure mit Section Headers

---

## 4. Ziel-Architektur — Gehaltly Calculator v2

### 4.1 Korrekte Berechnungslogik

```typescript
// lohnsteuer.ts — KORREKTE Implementierung

function calculateLohnsteuer(input: LohnsteuerInput): number {
  const { jahresbrutto, steuerklasse, kinder, steuerfreibetrag = 0 } = input;

  // Schritt 1: Zu versteuerndes Einkommen berechnen
  let zvE = jahresbrutto;

  // Werbungskostenpauschale (alle Stkl außer 6)
  if (steuerklasse !== 6) {
    zvE -= ARBEITNEHMERPAUSCHBETRAG; // 1.230 €
  }

  // Sonderausgabenpauschbetrag (alle Stkl außer 5 und 6)
  if (steuerklasse !== 5 && steuerklasse !== 6) {
    zvE -= SONDERAUSGABENPAUSCHBETRAG; // 36 €
  }

  // Entlastungsbetrag für Alleinerziehende (nur Stkl 2)
  if (steuerklasse === 2) {
    zvE -= 4260;
    if (kinder > 1) {
      zvE -= (kinder - 1) * 240;
    }
  }

  // Individueller Steuerfreibetrag
  if (steuerfreibetrag > 0) {
    zvE -= steuerfreibetrag;
  }

  // Kinderfreibetrag (NICHT bei Stkl 5 und 6)
  if (steuerklasse >= 1 && steuerklasse <= 4) {
    const faktor = (steuerklasse === 3) ? 2 : 1;
    zvE -= kinder * KINDERFREIBETRAG * faktor;
  }

  if (zvE <= 0) return 0;

  // Schritt 2: zvE auf volle Euro abrunden
  zvE = Math.floor(zvE);

  // Schritt 3: Steuer berechnen
  let est: number;

  if (steuerklasse === 3) {
    // SPLITTING: zvE halbieren, Formel anwenden, verdoppeln
    const halbZvE = Math.floor(zvE / 2);
    est = calculateEStG32a(halbZvE) * 2;
  } else {
    est = calculateEStG32a(zvE);
  }

  return Math.floor(est);
}

// EStG §32a — Einkommensteuertarif 2026 (OFFIZIELLE WERTE)
function calculateEStG32a(zvE: number): number {
  if (zvE <= 12348) return 0;

  if (zvE <= 17799) {
    const y = (zvE - 12348) / 10000;
    return Math.floor((914.51 * y + 1400) * y);
  }

  if (zvE <= 69878) {
    const z = (zvE - 17799) / 10000;
    return Math.floor((173.10 * z + 2397) * z + 1034.87);
  }

  if (zvE <= 277825) {
    return Math.floor(0.42 * zvE - 11135.63);
  }

  return Math.floor(0.45 * zvE - 19470.38);
}
```

### 4.2 Korrekte Sozialversicherung

```typescript
// KV-Zusatzbeitrag: HÄLFTE dem AN belasten (seit 2019)
const kvZusatz = Math.round(kvBasis * (kvZusatzbeitrag / 100 / 2));

// Sachsen PV: AN zahlt 2,3%, AG zahlt 1,3%
pvSachsenAN: 0.023,
pvSachsenAG: 0.013,
```

### 4.3 Korrekte Soli-Berechnung

```typescript
// Freigrenze 2026
const freigrenze = (steuerklasse === 3) ? 40700 : 20350;
```

### 4.4 Korrekte constants-2026.ts

```typescript
export const TAX_2026 = {
  grundfreibetrag: 12_348,
  grundfreibetragVerheiratet: 24_696,
  kinderfreibetrag: 9_756,

  // EStG §32a Zonen
  zone2Start: 12_349,
  zone2End: 17_799,
  zone3Start: 17_800,
  zone3End: 69_878,
  zone4Start: 69_879,
  zone4End: 277_825,
  zone5Start: 277_826,

  // EStG §32a Koeffizienten
  zone2KoeffA: 914.51,
  zone2KoeffB: 1_400,
  zone3KoeffA: 173.10,
  zone3KoeffB: 2_397,
  zone3Konstante: 1_034.87,
  zone4Faktor: 0.42,
  zone4Konstante: 11_135.63,
  zone5Faktor: 0.45,
  zone5Konstante: 19_470.38,

  // Solidaritätszuschlag
  soliSatz: 0.055,
  soliFreigrenze: 20_350,
  soliFreigrenzeVerheiratet: 40_700,
  soliMilderungszone: 0.119,

  // Sozialversicherung (Gesamtsatz AG+AN)
  rvSatz: 0.186,
  alvSatz: 0.026,
  kvSatz: 0.146,
  kvZusatzbeitragDurchschnitt: 0.029,
  pvSatz: 0.036,
  pvKinderlosZuschlag: 0.006,
  pvAbschlagKind: 0.0025,
  pvMaxAbschlag: 5,

  // Sachsen PV
  pvSachsenAN: 0.023,
  pvSachsenAG: 0.013,

  // BBG (monatlich)
  bbgKvPv: 5_812.50,
  bbgRvAlv: 8_450,

  // Versicherungspflichtgrenze
  versicherungspflichtgrenze: 77_400,

  // Minijob / Midijob
  minijobGrenze: 556,
  midijobGrenze: 2_000,
  midijobFaktor: 0.6846,

  // Pauschalen
  arbeitnehmerpauschbetrag: 1_230,
  sonderausgabenpauschbetrag: 36,
  entlastungsbetragAlleinerziehende: 4_260,
  entlastungsbetragWeitereKinder: 240,
} as const;
```

---

## 5. Validierung — Testfälle

### 5.1 Referenz: BMF-Steuerrechner

Verifizierung gegen [bmf-steuerrechner.de](https://www.bmf-steuerrechner.de/bl/bl2026/eingabeformbl2026.xhtml)

| Testfall | Brutto/Monat | Stkl | Kinder | KiSt | Erwartet Netto (ca.) |
|----------|-------------|------|--------|------|----------------------|
| Standard | 3.000 € | 1 | 0 | nein | ~2.050 € |
| Verheiratet | 3.000 € | 3 | 0 | nein | ~2.300 € |
| Hoher Verdienst | 8.000 € | 1 | 0 | nein | ~4.700 € |
| Minijob | 500 € | 1 | 0 | nein | ~500 € (keine SV) |
| Mit Kirche | 3.000 € | 1 | 0 | ja | ~2.010 € |
| Alleinerziehend | 3.000 € | 2 | 1 | nein | ~2.130 € |
| Stkl 5 | 3.000 € | 5 | 0 | nein | ~1.850 € |

**Jeder Testfall muss gegen den BMF-Rechner abgeglichen werden.**

### 5.2 Randfälle

- zvE = 0 → ESt = 0
- zvE = 12.348 → ESt = 0 (genau am Grundfreibetrag)
- zvE = 12.349 → ESt > 0 (erster besteuerbarer Euro)
- zvE = 17.799 → Zone 2/3 Grenze (Stetigkeit prüfen)
- zvE = 69.878 → Zone 3/4 Grenze
- zvE = 277.825 → Zone 4/5 Grenze
- Monatsbrutto > BBG → SV-Beiträge gedeckelt

---

## 6. Priorisierte Aufgaben

### Phase 1: Berechnungsgenauigkeit (KRITISCH)

1. **`constants-2026.ts`**: Alle Werte korrigieren (Zonen, Soli, Sachsen PV)
2. **`lohnsteuer.ts`**: Komplett überarbeiten:
   - Grundfreibetrag NICHT manuell abziehen
   - Korrekte 2026 EStG-Formel mit offiziellen Koeffizienten
   - Splitting für Stkl 3
   - Stkl 5/6 korrekt (kein Grundfreibetrag/Pauschalen)
3. **`solidaritaetszuschlag.ts`**: Freigrenze aus constants importieren (20.350/40.700)
4. **`sozialversicherung.ts`**: KV-Zusatzbeitrag halbieren, Sachsen PV 2,3%
5. **Tests**: Gegen BMF-Rechner validieren

### Phase 2: UX-Verbesserungen (nach korrekter Berechnung)

6. Echtzeit-Ergebnis-Aktualisierung (bereits vorhanden ✓)
7. Responsive Two-Column Layout (bereits vorhanden ✓)
8. Charts: Donut + Bar (bereits vorhanden ✓)
9. Vergleichsmodus (bereits vorhanden ✓)
10. PDF-Export (bereits vorhanden ✓)
11. WhatsApp-Share (bereits vorhanden ✓)

### Phase 3: Wettbewerbs-Vorteile (nice to have)

12. Multi-Year Support (2024-2026)
13. Arbeitgeberkosten-Ansicht (AG-Anteil SV zeigen)
14. Gehaltshistorie / Jahresvergleich
15. Animated Floating Labels (Sparkasse-Stil)
16. Brutto-aus-Wunschnetto-Modus (bereits auf /netto-brutto-rechner ✓)

---

## 7. Referenzen

- [EStG §32a (gesetze-im-internet.de)](https://www.gesetze-im-internet.de/estg/__32a.html)
- [BMF-Steuerrechner](https://www.bmf-steuerrechner.de/bl/bl2026/eingabeformbl2026.xhtml)
- [BMF PAP 2026](https://www.bundesfinanzministerium.de/Content/DE/Downloads/Steuern/Steuerarten/Lohnsteuer/Programmablaufplan/2025-11-12-PAP-2026.html)
- [SV-Rechengrößen 2026 (Bundesregierung)](https://www.bundesregierung.de/breg-de/aktuelles/beitragsgemessungsgrenzen-2386514)
- [AOK SV-Beiträge 2026](https://www.aok.de/fk/jahreswechsel/sv-beitraege-2026/)
- [PV-Beitragssatz 2026](https://sozialversicherung-kompetent.de/pflegeversicherung/versicherungsrecht/1636-beitragssatz-pflegeversicherung-2026.html)
- [Soli-Freigrenze 2026 (TK)](https://www.tk.de/firmenkunden/service/fachthemen/fachthema-beitraege/solidaritaetszuschlag-2075802)
- [EStG-Formeln 2026 (finanz-tools.de)](https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2026)
