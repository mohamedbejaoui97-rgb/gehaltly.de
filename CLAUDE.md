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
