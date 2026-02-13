import Link from 'next/link';
import { CALCULATOR_LINKS, RATGEBER_LINKS } from '@/lib/utils/internal-links';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Select featured calculators for footer
  const featuredCalculators = CALCULATOR_LINKS.filter((link) =>
    [
      'Brutto-Netto-Rechner',
      'Netto-Brutto-Rechner',
      'Gehaltsrechner',
      'Arbeitslosengeld-Rechner',
      'Rentenrechner',
      'Minijob-Rechner',
    ].includes(link.title)
  );

  return (
    <footer className="bg-[#F8FAFC] border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Rechner */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Rechner</h3>
            <ul className="space-y-2">
              {featuredCalculators.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Ratgeber */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Ratgeber</h3>
            <ul className="space-y-2">
              {RATGEBER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sonstiges */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Sonstiges</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/steuerklassen-rechner"
                  className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors"
                >
                  Steuerklassen
                </Link>
              </li>
              <li>
                <Link
                  href="/firmenwagen-rechner"
                  className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors"
                >
                  Firmenwagen
                </Link>
              </li>
              <li>
                <Link
                  href="/kindergeld-rechner"
                  className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors"
                >
                  Kindergeld
                </Link>
              </li>
              <li>
                <Link
                  href="/elterngeld-rechner"
                  className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors"
                >
                  Elterngeld
                </Link>
              </li>
              <li>
                <Link
                  href="/abfindungsrechner"
                  className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors"
                >
                  Abfindung
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Über Uns */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Über Uns</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} gehaltly.de. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-gray-500">
              Alle Angaben ohne Gewähr. Rechtsverbindliche Auskünfte erhalten Sie nur von Ihrem Steuerberater.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
