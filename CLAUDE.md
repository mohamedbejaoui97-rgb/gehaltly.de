# gehaltly.de - Project Notes

## Critical: Dev Server Cache

After modifying any component, layout, or config file:
1. **STOP the dev server** (`TaskStop`)
2. **DELETE `.next` folder**: `rm -rf .next`
3. **RESTART dev server**: `npm run dev`
4. **VERIFY** the change is served by curling the page and checking the HTML output

Next.js 14 with `output: 'export'` caches aggressively and does NOT hot-reload reliably.
Never assume a change is live without verifying the rendered HTML.

## Design System

- **Header**: White background, border-b, logo left (desktop), logo centered (mobile)
- **Footer**: Black (#1A1A1A), white text, red hover
- **Mobile Nav**: Black (#1A1A1A), red active state
- **Primary accent**: Red (#DD0000) - German flag
- **Secondary accent**: Gold (#FFCC00) - German flag
- **Text**: Black/dark gray
- **Backgrounds**: White + light gray alternating sections
- **Logo**: `public/logo.png` - rendered as `<img>` tag (NOT next/image), responsive height `h-[60px] md:h-[80px]` via `/src/components/layout/Logo.tsx`

## Tech Stack

- Next.js 14 with `output: 'export'` (static site, `next.config.mjs`)
- Tailwind CSS with shadcn/ui components (`@radix-ui/*`, `class-variance-authority`)
- Chart.js + react-chartjs-2 for calculator visualizations
- Lucide React for icons
- All calculations client-side (no server)
- Testing: vitest + @testing-library/react (`npm test`)
- Sitemap: next-sitemap (runs automatically via `postbuild` script)
- PWA: `public/manifest.json` with icons (`icon-192.png`, `icon-512.png`)

## File Structure

### Pages (`/src/app/`)
- **Homepage**: `/src/app/page.tsx` (client component, pillar page)
- **Calculator pages**: gehaltsrechner, lohnrechner, netto-brutto-rechner, netto-rechner (each has `page.tsx` + `*Client.tsx`)
- **Specialty calculators**: `/src/app/rechner/` (stundenlohn, teilzeit, firmenwagenrechner, steuerklassenrechner, arbeitgeber, lohnsteuer)
- **Dynamic amount pages**: `/src/app/[slug]/page.tsx` — generates 38 static pages for amounts (1500-200000 EUR) in format `/{amount}-brutto-in-netto/` via `generateStaticParams()`
- **Lexikon (glossary)**: `/src/app/lexikon/` — 22 pages covering German tax/employment terms (steuerklasse-1 to 6, kirchensteuer, minijob, midijob, grundfreibetrag, etc.) using `LexikonTemplate.tsx`
- **Guides**: `/src/app/ratgeber/` (5 pages + index)
- **Hub pages**: `/src/app/rechner/page.tsx`, `/src/app/ratgeber/page.tsx`, `/src/app/lexikon/page.tsx`
- **Legal**: `/src/app/impressum/`, `/datenschutz/`, `/kontakt/`

### Components (`/src/components/`)
- **`calculator/`**: BruttoNettoForm, CalculatorResult, BarBreakdownChart, TaxBreakdownChart, SliderInput, KrankenkassenTable
- **`content/`**: PageHero, ContentSection, FAQSection, RelatedLinks, LexikonTemplate
- **`layout/`**: Header, Footer, MobileNav, Logo, Breadcrumbs
- **`seo/`**: SchemaMarkup
- **`ui/`**: shadcn/ui primitives (Button, Input, Select, Label, etc.)

### Utilities (`/src/lib/`)
- **`/src/lib/tax.ts`** (or similar): Core tax calculation logic
- **`/src/lib/utils/internal-links.ts`**: Single source of truth for all nav links (CALCULATOR_LINKS, RATGEBER_LINKS, getRelatedLinks())

### Config
- **`next.config.mjs`**: `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`
- **`next-sitemap.config.js`**: Generates sitemap with priority levels (home 1.0, calculators 0.9, specialty 0.85, amounts 0.8, guides 0.8, legal 0.3)

## SEO: Calculator Page Differentiation (Anti-Cannibalization)

The 4 main calculator pages use the same `BruttoNettoForm` component but MUST have unique content to avoid keyword cannibalization. Each page targets a different keyword and user intent:

| Page | Keyword | Focus | Target audience |
|------|---------|-------|-----------------|
| `/` (homepage) | "Brutto Netto Rechner 2026" | Pillar page, universal | All workers |
| `/gehaltsrechner/` | "Gehaltsrechner 2026" | Fixed salary, annual income | Angestellte & Beamte |
| `/lohnrechner/` | "Lohnrechner 2026" | Hourly wage, Mindestlohn | Stundenlöhner, Teilzeit |
| `/netto-rechner/` | "Netto Rechner 2026" | Understanding deductions, optimization | Anyone optimizing net |
| `/netto-brutto-rechner/` | "Netto Brutto Rechner" | Reverse calculation (Wunschnetto) | Salary negotiation |

**Rules to maintain differentiation:**
- Each page MUST have a unique `<title>`, `<meta description>`, `<h1>`, intro text, and FAQ set
- The homepage `layout.tsx` keywords must NOT include "Gehaltsrechner" or "Lohnrechner" (those belong to subpages)
- Subpages link back to homepage as pillar ("Zum allgemeinen Brutto-Netto-Rechner →")
- Homepage has a "Welchen Rechner benötigen Sie?" section linking to all 4 subpages
- `internal-links.ts` descriptions must reflect each page's unique focus
- Never copy-paste metadata, H1, or intro text between these pages

## Deploy

- Hosted on **Vercel** via GitHub integration
- Auto-deploys on push to `main`
- Vercel CLI not linked locally — use `git push` to deploy
