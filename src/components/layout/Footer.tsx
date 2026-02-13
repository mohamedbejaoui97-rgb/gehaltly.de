import Link from 'next/link';
import { CALCULATOR_LINKS, RATGEBER_LINKS } from '@/lib/utils/internal-links';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const featuredCalculators = CALCULATOR_LINKS.filter((link) =>
    [
      'Brutto-Netto-Rechner',
      'Gehaltsrechner',
      'Lohnrechner',
      'Netto-Brutto-Rechner',
      'Stundenlohnrechner',
      'Teilzeitrechner',
    ].includes(link.title)
  );

  return (
    <footer className="bg-[#1A1A1A] text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Rechner */}
          <div>
            <h3 className="font-semibold text-white mb-3">Rechner</h3>
            <ul className="space-y-1.5">
              {featuredCalculators.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#DD0000] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Weitere Rechner */}
          <div>
            <h3 className="font-semibold text-white mb-3">Weitere Rechner</h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="/rechner/firmenwagenrechner" className="text-sm text-gray-400 hover:text-[#DD0000] transition-colors">
                  Firmenwagenrechner
                </Link>
              </li>
              <li>
                <Link href="/rechner/steuerklassenrechner" className="text-sm text-gray-400 hover:text-[#DD0000] transition-colors">
                  Steuerklassenrechner
                </Link>
              </li>
              <li>
                <Link href="/rechner/arbeitgeber" className="text-sm text-gray-400 hover:text-[#DD0000] transition-colors">
                  Arbeitgeberrechner
                </Link>
              </li>
              <li>
                <Link href="/rechner/lohnsteuer" className="text-sm text-gray-400 hover:text-[#DD0000] transition-colors">
                  Lohnsteuerrechner
                </Link>
              </li>
              <li>
                <Link href="/netto-rechner" className="text-sm text-gray-400 hover:text-[#DD0000] transition-colors">
                  Netto-Rechner
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Ratgeber */}
          <div>
            <h3 className="font-semibold text-white mb-3">Ratgeber</h3>
            <ul className="space-y-1.5">
              {RATGEBER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#DD0000] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Rechtliches */}
          <div>
            <h3 className="font-semibold text-white mb-3">Rechtliches</h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="/impressum" className="text-sm text-gray-400 hover:text-[#DD0000] transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-gray-400 hover:text-[#DD0000] transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-sm text-gray-400 hover:text-[#DD0000] transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} gehaltly.de. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-gray-500">
              Alle Angaben ohne Gew&auml;hr. Rechtsverbindliche Ausk&uuml;nfte erhalten Sie nur von Ihrem Steuerberater.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
