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
- **Logo**: `public/logo.png` - rendered as `<img>` tag (NOT next/image), 80px height

## Tech Stack

- Next.js 14 with `output: 'export'` (static site)
- Tailwind CSS with shadcn/ui components
- Chart.js for calculator visualizations
- All calculations client-side (no server)

## File Structure

- Calculator pages: `/src/app/` (gehaltsrechner, lohnrechner, netto-brutto-rechner, netto-rechner)
- Specialty calculators: `/src/app/rechner/` (stundenlohn, teilzeit, firmenwagenrechner, steuerklassenrechner, arbeitgeber, lohnsteuer)
- Guides: `/src/app/ratgeber/` (5 pages)
- Legal: `/src/app/impressum/`, `/datenschutz/`, `/kontakt/`
- Link registry: `/src/lib/utils/internal-links.ts` - single source of truth for all nav links

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
