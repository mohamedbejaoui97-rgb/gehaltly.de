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
- **Dynamic amount pages**: `/src/app/[slug]/page.tsx` — generates 38 static pages for amounts (1500-200000 EUR) in format `/{amount}-brutto-in-netto/` via `generateStaticParams()`. Amounts >= 15000 treated as annual salary (Jahresgehalt), < 15000 as monthly (Monatsgehalt). Logic in `isAnnualAmount()`.
- **Lexikon (glossary)**: `/src/app/lexikon/` — 17 pages covering German tax/employment terms (steuerklasse-1 to 6, kirchensteuer, minijob, midijob, grundfreibetrag, etc.) using `LexikonTemplate.tsx`
- **Guides**: `/src/app/ratgeber/` — 5 pages: brutto-netto-unterschied, brutto-netto-rechnung, elterngeld-brutto-netto, steuerklassen, sozialabgaben (+ index)
- **Hub pages**: `/src/app/rechner/page.tsx`, `/src/app/ratgeber/page.tsx`, `/src/app/lexikon/page.tsx`
- **Legal**: `/src/app/impressum/`, `/datenschutz/`, `/kontakt/`
- **404 page**: `/src/app/not-found.tsx` — German language "Seite nicht gefunden"

### Components (`/src/components/`)
- **`calculator/`**: BruttoNettoForm, CalculatorResult, BarBreakdownChart, TaxBreakdownChart, SliderInput, KrankenkassenTable
- **`content/`**: PageHero, ContentSection, FAQSection, RelatedLinks, LexikonTemplate
- **`layout/`**: Header, Footer, MobileNav, Logo, Breadcrumbs, **CookieConsent**
- **`seo/`**: SchemaMarkup
- **`ui/`**: shadcn/ui primitives (Button, Input, Select, Label, etc.)

### Utilities (`/src/lib/`)
- **`/src/lib/tax/`**: Core tax calculation engine (EStG §32a zones, Sozialversicherung)
- **`/src/lib/tax/types.ts`**: DEFAULT_INPUT with defaults (Steuerklasse 1, Bayern, kvZusatzbeitrag 2.9)
- **`/src/lib/utils/internal-links.ts`**: Single source of truth for all nav links (CALCULATOR_LINKS, RATGEBER_LINKS, getRelatedLinks())
- **`/src/lib/utils/amount-pages.ts`**: 38 amount page definitions (1500-200000 EUR)
- **`/src/lib/utils/tooltip-texts.ts`**: Calculator form field tooltips with current 2026 values

### Config
- **`next.config.mjs`**: `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`
- **`next-sitemap.config.js`**: Generates sitemap with priority levels (home 1.0, calculators 0.9, hub pages 0.85, specialty/amounts/lexikon 0.75-0.8, guides 0.8, legal 0.3)

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

## SEO: Technical Setup

- **og:image**: Every page MUST explicitly define `images` in its `openGraph` metadata. Next.js 14 does NOT merge openGraph from parent layout — it shallow-replaces. Standard image: `{ url: 'https://gehaltly.de/logo.png', width: 800, height: 230, alt: 'gehaltly.de - Gehaltsrechner für Deutschland' }`
- **hreflang**: Set in root layout (`de` + `x-default` → `https://gehaltly.de`)
- **JSON-LD schemas**: Root layout includes `WebSite` and `SiteNavigationElement` (ItemList). Calculator pages include `WebApplication` and `FAQPage`.
- **Sitemap**: Auto-generated via next-sitemap. Hub pages `/rechner`, `/ratgeber`, `/lexikon` at priority 0.85.
- **robots.txt**: Allows all crawling, blocks `/_next/`, `/api/`, references sitemap

## GDPR / Cookie Consent

- **Cookie consent banner**: `/src/components/layout/CookieConsent.tsx` (client component)
- **GA4 is consent-gated**: GA4 scripts (G-E1BKJVFXZL) are NOT in layout.tsx HTML — they load ONLY after user clicks "Akzeptieren" in the cookie banner
- **Consent storage**: `localStorage` key `gehaltly_cookie_consent` (values: "accepted" | "rejected")
- **IP anonymization**: Enabled in GA4 config (`anonymize_ip: true`)
- **Datenschutz page** (`/datenschutz/`): Complete DSGVO-compliant privacy policy covering:
  - Vercel hosting disclosure (name, address, legal basis Art. 6 Abs. 1 lit. f)
  - Google Analytics 4 section (consent-only, IP anonymization, 14-month retention)
  - Cookie listing (gehaltly_cookie_consent + GA4 cookies)
  - International data transfer (EU-US Data Privacy Framework, Standardvertragsklauseln)
  - All DSGVO rights (Art. 15-21, 77) including Datenübertragbarkeit
- **IMPORTANT**: Never add GA4 scripts directly to layout.tsx — always go through CookieConsent component

## Mobile / Responsive

- **Headings**: All h1/h2/h3 use responsive sizing: `text-xl sm:text-2xl md:text-3xl` (or `text-2xl sm:text-3xl md:text-4xl` for main h1)
- **German compound words**: `globals.css` applies `overflow-wrap: break-word`, `word-break: break-word` to all text elements, and `hyphens: auto` to h1/h2/h3 — prevents long words like "Beitragsbemessungsgrenze" from overflowing on mobile
- **Flex containers with headings**: Use `min-w-0` on flex children containing text to prevent overflow (see ContentSection.tsx)
- **When adding new headings**: Always use responsive font sizes, never bare `text-3xl` or `text-4xl` without mobile breakpoint

## German Tax Values 2026 — Reference

When editing content pages, always use these official 2026 values. **Never hardcode old values.**

### Einkommensteuer (EStG §32a)
- **Grundfreibetrag**: 12.348 € (Zone 1: 0% tax)
- **Zone 2 upper boundary**: ~17.799 €
- **Spitzensteuersatz (42%)**: ab ~69.878 €
- **Reichensteuer (45%)**: ab 277.825 €

### Kinderfreibetrag
- **Gesamt pro Kind (beide Elternteile)**: 9.756 €
- **Pro Elternteil**: 4.878 € (= 3.414 € sächlicher Kinderfreibetrag + 1.464 € BEA-Freibetrag)
- **Sächlicher Kinderfreibetrag gesamt**: 6.828 € (3.414 × 2)
- **BEA-Freibetrag gesamt**: 2.928 € (1.464 × 2)
- **WRONG values to avoid**: 6.612, 13.224

### Sozialversicherung
- **Krankenversicherung**: 14,6% (7,3% AG + 7,3% AN)
- **KV Zusatzbeitrag**: 2,9% durchschnittlich (1,45% AG + 1,45% AN — hälftig seit 2019)
- **Pflegeversicherung**: 3,6% (1,8% AG + 1,8% AN; Kinderlose: +0,6% AN-Zuschlag)
- **Rentenversicherung**: 18,6% (9,3% AG + 9,3% AN)
- **Arbeitslosenversicherung**: 2,6% (1,3% AG + 1,3% AN)
- **BBG Kranken-/Pflegeversicherung**: 66.150 €/Jahr (5.512,50 €/Monat) — bundesweit einheitlich seit 2025
- **BBG Renten-/Arbeitslosenversicherung**: 101.400 €/Jahr (8.450 €/Monat) — bundesweit einheitlich seit 2025
- **JAEG (Versicherungspflichtgrenze)**: 73.800 €/Jahr (6.150 €/Monat) — ab 2026: 77.400 €/Jahr (6.450 €/Monat)
- **Minijob-Grenze**: 556 €/Monat (WRONG values to avoid: 450, 520, 538)
- **Midijob (Übergangsbereich)**: 556,01 – 2.000 €

### Historical values (OK in timeline context only)
- 2024: Grundfreibetrag 11.604 €
- 2025: Grundfreibetrag 11.694 €

## Deploy

- Hosted on **Vercel** via GitHub integration
- Auto-deploys on push to `main`
- Vercel CLI not linked locally — use `git push` to deploy
- Verify deploy: `gh api repos/mohamedbejaoui97-rgb/gehaltly.de/commits/main/status --jq '.state'`
- Total pages: ~86 HTML files (84 pages + 404.html + not-found)

## Workflow: Build → Commit → Deploy → Verify

1. `rm -rf .next && npm run build` — clean build, verify 0 errors
2. `git add <files> && git commit -m "..."` — commit specific files
3. `git push` — triggers Vercel auto-deploy
4. `sleep 30 && gh api repos/.../commits/main/status --jq '.state'` — wait for deploy
5. `curl -sL https://gehaltly.de/<page>` — verify changes are live

## Open Items (non-critical)

- **Impressum**: Missing name/address/phone as required by TMG §5 for commercial sites. Owner must add personal details manually.
- **og:image**: All pages use logo (800x230). Ideally create a dedicated 1200x630 social share image for better social media previews.
