# gehaltly.de - Design Document

**Date**: 2026-02-13
**Status**: Approved
**Objective**: Build a modern German salary calculator platform to outrank brutto-netto-rechner.info within 30 days of launch

---

## 1. Project Overview

### 1.1 Mission

Replace brutto-netto-rechner.info as the #1 German salary calculator by delivering the same tool functionality with vastly superior UX, mobile-first design, comprehensive SEO, and richer content -- all built with Next.js and deployed on Vercel.

### 1.2 Competitor Analysis Summary

**Target**: brutto-netto-rechner.info
- **Traffic**: 2.87M visits/month (Dec 2025)
- **Engagement**: 3.85 pages/visit, 3:55 min avg duration, 37.71% bounce rate
- **Device**: 73.4% mobile, 26.6% desktop
- **Authority Score**: 56/100
- **Total pages**: ~97 pages across 5 sections
- **Distinct calculators**: ~22
- **Technology**: PHP, server-rendered HTML, design circa 2010

**Competitor Weaknesses We Exploit**:
1. Design from 2010 (orange/grey, table-based layout)
2. 73% mobile traffic but no mobile-first design
3. Zero schema markup (no rich snippets)
4. No meta descriptions (Google auto-generates)
5. No interactive visualizations (text/tables only)
6. 12-field form with no progressive disclosure
7. No scenario comparison feature
8. No templated amount pages (e.g., "3000 brutto in netto")
9. Invasive ads degrading UX
10. Stagnant backlink growth (-0.77% MoM)

### 1.3 Total Addressable Search Volume

**~34.27 million monthly searches** across 35+ keyword clusters.

Top clusters:
| Cluster | Monthly Volume |
|---|---|
| Brutto-Netto-Rechner (core) | 12,500,000 |
| Gehaltsrechner | 700,000 |
| Netto-Brutto-Rechner (reverse) | 450,000 |
| Lohnrechner | 250,000 |
| Netto Rechner | 135,000 |
| Stundenlohn-Rechner | 95,000 |
| MwSt-Rechner | 95,000 |
| X Brutto in Netto (long-tail) | 190,000 |
| Rentenrechner Brutto-Netto | 78,000 |
| Firmenwagen-Rechner | 42,000 |

---

## 2. Architecture

### 2.1 Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSG for SEO, React for interactivity |
| Styling | Tailwind CSS + shadcn/ui | Mobile-first, rapid development, consistent design system |
| Charts | Chart.js + react-chartjs-2 | Lightweight, interactive pie/bar charts for tax breakdown |
| SEO | next-seo + next-sitemap | Automated meta tags, Open Graph, sitemap.xml |
| Schema | Custom JSON-LD | WebApplication, HowTo, FAQ, BreadcrumbList |
| Tax Logic | Custom TypeScript module | German 2026 tax formulas, testable, updatable annually |
| Deployment | Vercel | Global CDN, edge functions, instant deploys |
| Analytics | Plausible or Umami | Privacy-first, GDPR-compliant (German audience) |
| i18n | next-intl (future) | English version at /en/, scalable to more languages |

### 2.2 Project Structure

```
gehaltly.de/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout with nav, footer
│   │   ├── page.tsx                      # Homepage: Brutto-Netto-Rechner
│   │   ├── gehaltsrechner/page.tsx       # Gehaltsrechner landing
│   │   ├── lohnrechner/page.tsx          # Lohnrechner landing
│   │   ├── netto-brutto-rechner/page.tsx # Reverse calculator
│   │   ├── netto-rechner/page.tsx        # Netto Rechner landing
│   │   ├── rechner/
│   │   │   ├── stundenlohn/page.tsx
│   │   │   ├── rentenrechner/page.tsx
│   │   │   ├── mehrwertsteuer/page.tsx
│   │   │   ├── firmenwagenrechner/page.tsx
│   │   │   ├── steuerklassenrechner/page.tsx
│   │   │   ├── arbeitgeber/page.tsx
│   │   │   ├── beamten-rechner/page.tsx
│   │   │   ├── lohnsteuer/page.tsx
│   │   │   ├── teilzeit/page.tsx
│   │   │   ├── abfindungsrechner/page.tsx
│   │   │   ├── azubi/page.tsx
│   │   │   ├── einmalzahlung/page.tsx
│   │   │   ├── werkstudent/page.tsx
│   │   │   ├── midijob/page.tsx
│   │   │   ├── ehepaar/page.tsx
│   │   │   ├── jahresgehalt/page.tsx
│   │   │   ├── selbststaendige/page.tsx
│   │   │   ├── bav/page.tsx
│   │   │   ├── elterngeld/page.tsx
│   │   │   ├── arbeitslosengeld/page.tsx
│   │   │   └── buergergeld/page.tsx
│   │   ├── [betrag]-brutto-in-netto/
│   │   │   └── page.tsx                  # Dynamic route for amount pages
│   │   ├── ratgeber/
│   │   │   ├── brutto-netto-unterschied/page.tsx
│   │   │   ├── steuerklassen/
│   │   │   │   ├── page.tsx              # Hub page
│   │   │   │   ├── steuerklasse-1/page.tsx
│   │   │   │   ├── steuerklasse-2/page.tsx
│   │   │   │   ├── steuerklasse-3/page.tsx
│   │   │   │   ├── steuerklasse-4/page.tsx
│   │   │   │   ├── steuerklasse-5/page.tsx
│   │   │   │   └── steuerklasse-6/page.tsx
│   │   │   ├── sozialabgaben/page.tsx
│   │   │   ├── brutto-netto-rechnung/page.tsx
│   │   │   └── elterngeld-brutto-netto/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx                  # Blog index
│   │   │   └── [slug]/page.tsx           # Blog posts
│   │   ├── en/                           # English version
│   │   │   └── page.tsx
│   │   ├── impressum/page.tsx
│   │   ├── datenschutz/page.tsx
│   │   └── ueber-uns/page.tsx
│   ├── components/
│   │   ├── ui/                           # shadcn/ui components
│   │   ├── calculator/
│   │   │   ├── BruttoNettoForm.tsx       # Main calculator form
│   │   │   ├── CalculatorResult.tsx      # Results display
│   │   │   ├── TaxBreakdownChart.tsx     # Pie chart breakdown
│   │   │   ├── BarBreakdownChart.tsx     # Horizontal bar Brutto vs Netto
│   │   │   ├── ScenarioCompare.tsx       # Side-by-side comparison
│   │   │   ├── SliderInput.tsx           # Salary slider + number input
│   │   │   ├── StepWizard.tsx            # 3-step mobile wizard
│   │   │   └── ShareExport.tsx           # PDF export + share link
│   │   ├── layout/
│   │   │   ├── Header.tsx                # Navigation header
│   │   │   ├── Footer.tsx                # Footer with internal links
│   │   │   ├── MobileNav.tsx             # Bottom sticky nav (mobile)
│   │   │   ├── Breadcrumbs.tsx           # Breadcrumb navigation
│   │   │   └── Sidebar.tsx               # Desktop sidebar
│   │   ├── seo/
│   │   │   ├── SchemaMarkup.tsx          # JSON-LD generator
│   │   │   ├── PageSEO.tsx              # Meta tags per page
│   │   │   └── FAQSchema.tsx             # FAQ structured data
│   │   └── content/
│   │       ├── GlossarySection.tsx       # Educational content sections
│   │       ├── FAQSection.tsx            # FAQ accordion
│   │       ├── RelatedCalculators.tsx    # Internal linking cards
│   │       └── AmountPageContent.tsx     # Template for X-brutto-in-netto
│   ├── lib/
│   │   ├── tax/
│   │   │   ├── index.ts                  # Main export
│   │   │   ├── lohnsteuer.ts             # Progressive income tax formula
│   │   │   ├── solidaritaetszuschlag.ts  # Solidarity surcharge (5.5%)
│   │   │   ├── kirchensteuer.ts          # Church tax (8% or 9%)
│   │   │   ├── rentenversicherung.ts     # Pension insurance (18.6%)
│   │   │   ├── krankenversicherung.ts    # Health insurance (14.6% + Zusatzbeitrag)
│   │   │   ├── pflegeversicherung.ts     # Care insurance (3.6% + variants)
│   │   │   ├── arbeitslosenversicherung.ts # Unemployment insurance (2.6%)
│   │   │   ├── constants-2026.ts         # All 2026 tax constants
│   │   │   ├── steuerklassen.ts          # Tax class definitions
│   │   │   ├── bundeslaender.ts          # Federal state config (Kirchensteuer rates)
│   │   │   └── types.ts                  # TypeScript interfaces
│   │   ├── seo/
│   │   │   ├── meta.ts                   # Meta tag generators per page type
│   │   │   ├── schema.ts                 # Schema.org generators
│   │   │   └── sitemap-config.ts         # Sitemap priorities
│   │   └── utils/
│   │       ├── formatters.ts             # Currency/number formatting (de-DE)
│   │       ├── amount-pages.ts           # List of amount pages to generate
│   │       └── internal-links.ts         # Internal linking map
│   └── styles/
│       └── globals.css                   # Tailwind imports + custom styles
├── public/
│   ├── robots.txt
│   ├── favicon.ico
│   └── og-images/                        # Pre-generated OG images
├── content/
│   ├── ratgeber/                         # MDX content for guide pages
│   ├── blog/                             # MDX content for blog posts
│   └── glossary/                         # Glossary entries (German)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. UI/UX Design

### 3.1 Design Principles

Adapted to the **German user mindset**: precision, trustworthiness, clarity, efficiency.

1. **Tool-first**: Calculator above the fold, zero friction to first calculation
2. **Progressive disclosure**: Show essentials first, details on demand
3. **Visual results**: Charts and breakdowns, not just numbers
4. **Professional trust**: Navy/blue palette, clean typography, no gimmicks
5. **Mobile-native**: Touch targets 48px+, swipe-friendly, bottom nav

### 3.2 Color Palette

```
Primary:        #1E3A5F  (Navy - professional trust, like Deutsche Bank/Allianz)
Primary Light:  #2563EB  (Vivid blue - CTAs, interactive elements)
Primary Hover:  #1D4ED8  (Darker blue for hover states)
Accent Green:   #10B981  (Positive/money/growth - Netto amount)
Accent Amber:   #F59E0B  (Warnings, highlights - deductions)
Accent Red:     #EF4444  (Tax amounts, deductions in charts)
Background:     #F8FAFC  (Light grey, clean)
Card:           #FFFFFF  (White cards on grey background)
Text Primary:   #0F172A  (Near-black, maximum readability)
Text Secondary: #64748B  (Grey for labels, helper text)
Border:         #E2E8F0  (Subtle borders)
```

### 3.3 Typography

```
Headings:  Inter (700, 600) - clean, precise, excellent German character support
Body:      Inter (400, 500) - highly legible at all sizes
Monospace: JetBrains Mono - for currency amounts in results
```

Font sizes (mobile / desktop):
- H1: 28px / 36px
- H2: 22px / 28px
- H3: 18px / 22px
- Body: 16px / 16px (never smaller)
- Small: 14px / 14px

### 3.4 Page Layout: Homepage (Brutto-Netto-Rechner)

```
┌─────────────────────────────────────────────┐
│ HEADER                                       │
│ [Logo: gehaltly.de] [Gehalt v] [Rente] ...  │
├─────────────────────────────────────────────┤
│ BREADCRUMB: Startseite > Brutto Netto Rechner│
├─────────────────────────────────────────────┤
│                                              │
│ H1: Brutto Netto Rechner 2026               │
│ Subtitle: Kostenlos Ihr Nettogehalt          │
│ berechnen - schnell und genau.               │
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │ CALCULATOR CARD                          │ │
│ │                                          │ │
│ │ [====== Salary Slider =========]  €3000  │ │
│ │                                          │ │
│ │ Abrechnungszeitraum:  [Monat v]          │ │
│ │ Steuerklasse:         [1     v]          │ │
│ │ Bundesland:           [Bayern v]         │ │
│ │                                          │ │
│ │ [+ Weitere Optionen]                     │ │
│ │   (Kirchensteuer, Alter, Kinder,         │ │
│ │    KV-Typ, Zusatzbeitrag, etc.)          │ │
│ │                                          │ │
│ └──────────────────────────────────────────┘ │
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │ RESULT CARD (appears instantly)          │ │
│ │                                          │ │
│ │  Ihr Nettogehalt                         │ │
│ │  ████████████████████  €2,045.17         │ │
│ │  ▓▓▓▓▓▓▓▓ Steuern     €  487.33         │ │
│ │  ░░░░░░░  Sozialabg.   €  467.50         │ │
│ │                                          │ │
│ │  [PIE CHART]   Netto:    68.2%           │ │
│ │                Steuern:  16.2%           │ │
│ │                Sozial:   15.6%           │ │
│ │                                          │ │
│ │  ┌─ Detailansicht ──────────────────┐    │ │
│ │  │ Lohnsteuer          €401.33      │    │ │
│ │  │ Solidaritatszuschlag  €0.00      │    │ │
│ │  │ Kirchensteuer        €86.00      │    │ │
│ │  │ Rentenversicherung  €279.00      │    │ │
│ │  │ Krankenversicherung €131.25      │    │ │
│ │  │ Pflegeversicherung   €34.50      │    │ │
│ │  │ Arbeitslosenversich. €22.75      │    │ │
│ │  └──────────────────────────────────┘    │ │
│ │                                          │ │
│ │  [Vergleichen]  [PDF]  [Teilen]          │ │
│ └──────────────────────────────────────────┘ │
│                                              │
│ RELATED CALCULATORS (cards, horizontal scroll)│
│ [Stundenlohn] [Teilzeit] [Firmenwagen] ...   │
│                                              │
│ ── CONTENT SECTIONS ──                       │
│ H2: Was ist der Brutto Netto Rechner?        │
│ (educational paragraph)                       │
│                                              │
│ H2: Glossar                                  │
│ H3: Ihr Bruttoeinkommen                      │
│ H3: Steuerfreibetrag / Grundfreibetrag 2026  │
│ H3: Kinderfreibetrag 2026                    │
│ H3: Sozialversicherungsbeitrage 2026         │
│ H3: Geldwerter Vorteil                       │
│ H3: Die Steuerklassen                        │
│ H3: Krankenversicherungssatze                │
│ H3: Beitragsbemessungsgrenze 2026            │
│ H3: Pflegeversicherung                       │
│ H3: Nettogehalt / Nettolohn 2026             │
│                                              │
│ H2: Haufig gestellte Fragen (FAQ)            │
│ (accordion, 5-8 questions with FAQ schema)    │
│                                              │
│ ── FOOTER ──                                 │
│ All internal links (keyword-rich anchors)     │
│ Impressum | Datenschutz | Uber uns            │
└─────────────────────────────────────────────┘
```

### 3.5 Mobile Layout (375px)

```
┌───────────────────────┐
│ gehaltly.de    [☰]    │
├───────────────────────┤
│                       │
│ Brutto Netto          │
│ Rechner 2026          │
│                       │
│ ┌───────────────────┐ │
│ │ Ihr Bruttogehalt  │ │
│ │ [====slider====]  │ │
│ │     €3.000        │ │
│ │                   │ │
│ │ Steuerklasse [1v] │ │
│ │ Bundesland [BAv]  │ │
│ │                   │ │
│ │ [+ Mehr Optionen] │ │
│ └───────────────────┘ │
│                       │
│ ┌───────────────────┐ │
│ │  Netto: €2.045    │ │
│ │  ████████░░░░░░░  │ │
│ │                   │
│ │   [DONUT CHART]   │ │
│ │  68% Netto        │ │
│ │  16% Steuern      │ │
│ │  16% Sozial       │ │
│ │                   │ │
│ │ [Details ▼]       │ │
│ │ [Vergl.] [PDF]    │ │
│ └───────────────────┘ │
│                       │
│ Ahnliche Rechner ──►  │
│ [card][card][card]    │
│                       │
│ Content sections...   │
│                       │
├───────────────────────┤
│ [🏠][📊][💰][📖][⚙] │  ← Sticky bottom nav
└───────────────────────┘
```

### 3.6 Calculator Form - Progressive Disclosure

**Step 1 (Always visible)**: 3 fields
- Bruttogehalt (slider + input)
- Steuerklasse (dropdown)
- Bundesland (dropdown)

**Step 2 (Expandable "Weitere Optionen")**: 5 fields
- Abrechnungszeitraum (Monat/Jahr)
- Kirchensteuer (ja/nein)
- Alter
- Kinder (ja/nein + Anzahl)
- Krankenversicherung (gesetzlich/privat/freiwillig)

**Step 3 (Advanced, collapsed)**: 4 fields
- KV-Zusatzbeitrag (%)
- Steuerfreibetrag (EUR)
- Geldwerter Vorteil (EUR)
- Rentenversicherung (gesetzlich/keine)

**Calculation**: Real-time, client-side, no server round-trip.

### 3.7 Component Library (shadcn/ui base)

Key components used/customized:
- `Card` - Calculator cards, result cards, related calculator cards
- `Select` - Dropdowns for Steuerklasse, Bundesland, KV type
- `Slider` - Salary slider input
- `Input` - Number fields with EUR formatting
- `Accordion` - FAQ sections, expandable form sections
- `Tabs` - Monat/Jahr toggle, calculator variants
- `Badge` - Labels, tags for calculator categories
- `Button` - CTAs, actions (Berechnen, Vergleichen, PDF)
- `Tooltip` - Info icons on form fields
- `Sheet` - Mobile navigation drawer
- `Separator` - Visual section dividers

---

## 4. SEO Strategy

### 4.1 On-Page SEO Per Page Type

#### Calculator Pages (homepage + 22 specialized calculators)

```
Title:     {Keyword} 2026 - Kostenlos berechnen | gehaltly.de
           Example: Brutto Netto Rechner 2026 - Kostenlos berechnen | gehaltly.de
H1:        {Keyword} 2026
Meta Desc: {Keyword} 2026: Berechnen Sie kostenlos Ihr Nettoeinkommen.
           Schnell, genau und ubersichtlich mit Diagrammen. Jetzt berechnen!
Schema:    WebApplication + HowTo + FAQ + BreadcrumbList
```

#### Templated Amount Pages (/X-brutto-in-netto)

```
Title:     {X} Euro Brutto in Netto 2026 - Steuerklasse 1-6 | gehaltly.de
H1:        {X} Euro Brutto in Netto
H2s:       - {X} Euro Brutto: So viel bleibt Netto (2026)
           - Netto nach Steuerklasse bei {X} Euro Brutto
           - Abzuge bei {X} Euro Bruttogehalt
           - {X} Euro Brutto - Vergleich Bundesland
           - Haufig gestellte Fragen zu {X} Euro Brutto
Schema:    FAQ + BreadcrumbList
Content:   Pre-calculated table for all 6 Steuerklassen, educational text,
           embedded calculator pre-filled with amount
```

#### Guide Pages (/ratgeber/)

```
Title:     {Topic} - Einfach erklart 2026 | gehaltly.de
H1:        {Topic}
Schema:    Article + FAQ + BreadcrumbList
Content:   1500-2500 words, H2/H3 structured, internal links to calculators
```

#### Blog Posts (/blog/)

```
Title:     {Topic} 2026 - {Hook} | gehaltly.de
H1:        {Topic}
Schema:    BlogPosting + FAQ
Content:   800-1500 words, embedded calculator, internal links
```

### 4.2 Technical SEO

#### robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://gehaltly.de/sitemap.xml
```

#### Sitemap Strategy (next-sitemap)
```
Homepage:           priority 1.0, changefreq weekly
Top-level calcs:    priority 0.9, changefreq monthly
/rechner/* calcs:   priority 0.8, changefreq monthly
Amount pages:       priority 0.7, changefreq monthly
Ratgeber pages:     priority 0.7, changefreq monthly
Steuerklasse pages: priority 0.7, changefreq monthly
Blog posts:         priority 0.6, changefreq weekly
Legal pages:        priority 0.3, changefreq yearly
```

#### Schema Markup (JSON-LD on every page)

**Homepage WebApplication**:
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Brutto Netto Rechner 2026",
  "url": "https://gehaltly.de",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Kostenloser Brutto Netto Rechner 2026..."
}
```

**FAQ Schema** (on every calculator page):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie berechne ich mein Nettogehalt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

**BreadcrumbList** (on every page):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

### 4.3 Internal Linking Strategy

Each page links to 5-10 related pages via:
1. **Related Calculators section** (card grid below results)
2. **In-content links** (keyword-rich anchor text in educational content)
3. **Breadcrumbs** (hierarchical navigation)
4. **Footer** (complete sitemap-style link list, like competitor)
5. **Sidebar** (desktop: related calculators + guide links)

Link clusters:
- Homepage <-> All /rechner/ pages (bidirectional)
- Amount pages -> Homepage + relevant Steuerklasse page
- Ratgeber pages -> Relevant calculators
- Blog posts -> Relevant calculators + ratgeber
- All pages -> Homepage (via header/footer)

### 4.4 Core Web Vitals Targets

| Metric | Target | How |
|---|---|---|
| LCP | < 1.5s | SSG, optimized images, CDN |
| FID/INP | < 100ms | Client-side calculation, no server deps |
| CLS | < 0.05 | Fixed layout, font preload, no layout shift |
| TTFB | < 200ms | Vercel Edge, SSG pages |

---

## 5. Tax Calculation Engine

### 5.1 Core Formula: Brutto to Netto (2026)

```
Nettogehalt = Bruttogehalt
            - Lohnsteuer
            - Solidaritatszuschlag
            - Kirchensteuer (optional)
            - Rentenversicherung (AN-Anteil)
            - Krankenversicherung (AN-Anteil)
            - Pflegeversicherung (AN-Anteil)
            - Arbeitslosenversicherung (AN-Anteil)
```

### 5.2 Tax Constants 2026

```typescript
export const TAX_CONSTANTS_2026 = {
  // Grundfreibetrag
  grundfreibetrag: 12_348,
  grundfreibetragVerheiratet: 24_696,

  // Kinderfreibetrag
  kinderfreibetrag: 9_756,

  // Solidaritatszuschlag
  soliSatz: 0.055,
  soliFreigrenze: 18_130,      // Jahresbetrag
  soliFreigrenzeVerheiratet: 36_260,

  // Kirchensteuer
  kirchensteuerSatz: {
    bayern: 0.08,
    badenWuerttemberg: 0.08,
    default: 0.09,
  },

  // Sozialversicherung Satze (AN-Anteil = Halfte)
  rentenversicherung: 0.186 / 2,     // 9.3%
  arbeitslosenversicherung: 0.026 / 2, // 1.3%
  krankenversicherung: 0.146 / 2,     // 7.3%
  kvZusatzbeitragDurchschnitt: 0.029 / 2, // 1.45%
  pflegeversicherung: {
    basisArbeitnehmer: 0.018,          // Halfte von 3.6%
    kinderlosZuschlag: 0.006,          // +0.6% fur Kinderlose > 23
    sachsenArbeitnehmer: 0.022,        // Sachsen Sonderregel
    sachsenArbeitgeber: 0.012,
    // Abschlage je Kind (unter 25)
    abschlagProKind: [0, 0.0025, 0.0025, 0.0025, 0.0025],
    // 1 Kind: -0.25%, 2: -0.50%, 3: -0.75%, 4: -1.0%, 5+: -1.25%
  },

  // Beitragsbemessungsgrenzen (monatlich)
  bbgKrankenPflege: 5_812.50,          // 69.750 EUR/Jahr
  bbgRenteArbeitslos: 8_450,           // 101.400 EUR/Jahr

  // Versicherungspflichtgrenze
  versicherungspflichtgrenze: 77_400,  // Jahresbetrag

  // Minijob/Midijob
  minijobGreenze: 556,
  midijobGrenze: 2_000,
};
```

### 5.3 Lohnsteuer Calculation

The German income tax uses a progressive formula defined in EStG ss32a. Implemented as the official BMF (Bundesministerium der Finanzen) algorithm PAP (Programmablaufplan) 2026.

Key zones:
- Zone 1: 0 - 12.348 EUR -> 0% (Grundfreibetrag)
- Zone 2: 12.349 - 17.005 EUR -> 14% - 24% (linear progression)
- Zone 3: 17.006 - 66.760 EUR -> 24% - 42% (linear progression)
- Zone 4: 66.761 - 277.825 EUR -> 42% (flat)
- Zone 5: 277.826+ EUR -> 45% (Reichensteuer)

### 5.4 Testability

Each tax module exports pure functions with clear inputs/outputs. Test against:
1. BMF official test cases (Programmablaufplan Lohnsteuer 2026)
2. Cross-validation with competitor's calculator
3. Edge cases: Minijob, Midijob/Gleitzone, Beamte, Sachsen Pflegeversicherung

---

## 6. Content Strategy

### 6.1 Language & Tone

All content written in **native German**:
- Formal but accessible (Sie-Form)
- Clear, precise explanations (German users expect Genauigkeit)
- No marketing fluff -- factual, trustworthy
- Terms from official Finanzverwaltung where appropriate
- Short paragraphs, bullet points for scannability

### 6.2 Content Per Calculator Page

Each calculator page follows this structure:
1. **H1 + introductory paragraph** (50-100 words, keyword-rich)
2. **Calculator tool** (interactive, above the fold)
3. **Result section** (with charts)
4. **Related calculators** (horizontal scroll cards)
5. **Glossar/Erklarung** (educational content, 500-1500 words)
   - Explains each input field
   - Covers relevant tax rules for 2026
   - Uses H2/H3 hierarchy with keywords
6. **FAQ section** (5-8 questions, accordion, FAQ schema)
7. **Internal links** (keyword-rich, contextual)

### 6.3 Templated Amount Pages Strategy

40+ pages following pattern: `/XXXX-brutto-in-netto`

Pre-generate for all amounts with 1000+ monthly search volume:
1500, 1800, 2000, 2200, 2500, 2600, 2700, 2800, 2900, 3000,
3400, 3500, 3600, 3800, 4000, 4300, 4500, 4600, 4800, 5000,
5500, 6000, 6600, 7500, 8500, 9000, 10000, 12000, 15000,
45000, 50000, 55000, 60000, 85000, 90000, 100000

Each page contains:
- Pre-calculated results table for all 6 Steuerklassen
- Pre-calculated for default Bundesland (Bayern as example, table for all 16)
- Embedded calculator pre-filled with the amount
- Educational content about that salary level
- "Ist {X} Euro ein gutes Gehalt?" section
- FAQ (salary-specific)
- Links to neighboring amounts (e.g., 2900 links to 2800 and 3000)

### 6.4 Blog Post Categories (Phase 2)

1. **Gehaltstabellen**: "Gehalt bei [Arbeitgeber]" (Rheinmetall, Aldi, etc.)
2. **Gehalts-Benchmarks**: "Ist X Euro netto ein gutes Gehalt?"
3. **Rechner-Vergleiche**: "AOK Brutto Netto Rechner" / "TK Gehaltsrechner"
4. **Steuertipps**: "Mehr Netto vom Brutto" / "Steuererklarung Tipps"
5. **Berufsgehalt**: "Was verdient ein/e [Beruf]?"

---

## 7. Page Inventory (Launch Target: ~70 pages)

### Core Calculator Landings (5 pages)
1. `/` -- Brutto Netto Rechner 2026
2. `/gehaltsrechner` -- Gehaltsrechner 2026
3. `/lohnrechner` -- Lohnrechner 2026
4. `/netto-brutto-rechner` -- Netto Brutto Rechner 2026
5. `/netto-rechner` -- Netto Rechner 2026

### Specialized Calculators (22 pages)
6-27. All /rechner/* pages as listed in Section 2.2

### Templated Amount Pages (~40 pages)
28-67. `/XXXX-brutto-in-netto` for each high-volume amount

### Ratgeber/Guide Pages (11 pages)
68. `/ratgeber/brutto-netto-unterschied`
69-74. `/ratgeber/steuerklassen/` hub + 6 sub-pages
75. `/ratgeber/sozialabgaben`
76. `/ratgeber/brutto-netto-rechnung`
77. `/ratgeber/elterngeld-brutto-netto`

### English Version (1 page)
78. `/en` -- Gross Net Calculator Germany

### Legal (3 pages)
79. `/impressum`
80. `/datenschutz`
81. `/ueber-uns`

**Total: ~81 pages at launch**

---

## 8. Performance & Deployment

### 8.1 Build Strategy

- **SSG (Static Site Generation)** for all pages at build time
- Calculator interactivity runs entirely client-side (no API calls)
- Images: next/image with WebP, lazy loading
- Fonts: Inter preloaded, font-display: swap
- JavaScript: Minimal bundle, tree-shaken, Chart.js loaded only on pages with charts

### 8.2 Deployment

- **Vercel**: Automatic deploys from git, global CDN, edge network
- **Domain**: gehaltly.de (already owned)
- **SSL**: Automatic via Vercel
- **Preview deployments**: For every PR

### 8.3 Monitoring

- **Vercel Analytics**: Core Web Vitals monitoring
- **Google Search Console**: Indexing, search performance, schema validation
- **Plausible/Umami**: Privacy-first analytics (GDPR-compliant for Germany)

---

## 9. GDPR & Legal Compliance (Germany-Specific)

### 9.1 Requirements

1. **Impressum** (legally required in Germany, TMG ss5)
   - Full name, address, contact, Handelsregister if applicable
2. **Datenschutzerklarung** (Privacy Policy, DSGVO)
   - Cookie consent banner (only if using tracking cookies)
   - If using Plausible: no cookie banner needed (cookieless)
3. **Cookie Consent**: Only required for non-essential cookies
   - If AdSense later: full consent management required
4. **No personal data stored**: Calculator runs client-side, no server storage

### 9.2 Approach

- Use Plausible Analytics (no cookies, no consent needed)
- Defer AdSense integration to after launch
- Static Impressum and Datenschutz pages
- No user accounts, no data collection at launch

---

## 10. Future Expansion (Post-Launch)

### Phase 2 (Month 2-3)
- Blog posts (employer salary tables, benchmarks, comparisons)
- More templated amount pages (expand from 40 to 100+)
- AdSense integration with non-invasive placement
- Backlink outreach campaign

### Phase 3 (Month 4-6)
- English version expanded (full calculator + content)
- Additional languages for Gastarbeiter (Turkish, Romanian, Polish)
- PWA (Progressive Web App) for mobile home screen
- Email newsletter for annual tax changes

### Phase 4 (Month 7-12)
- Austria market (different tax system)
- Switzerland market (Grenzganger focus)
- Gehaltsvergleich tool (salary comparison by profession)
- AI-powered tax optimization suggestions
