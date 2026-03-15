import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Shield, BookOpen, RefreshCw, Calculator, Mail, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Über uns – Wer steckt hinter gehaltly.de?',
  description:
    'Erfahren Sie mehr über gehaltly.de: Unsere Mission, Expertise im deutschen Steuerrecht und unser Engagement für präzise Gehaltsberechnungen mit aktuellen Werten für 2026.',
  alternates: {
    canonical: 'https://gehaltly.de/ueber-uns/',
  },
  openGraph: {
    title: 'Über uns – gehaltly.de',
    description:
      'Unsere Mission: Transparente Gehaltsberechnungen für alle Arbeitnehmer in Deutschland. Erfahren Sie mehr über unsere Expertise und Datenqualität.',
    url: 'https://gehaltly.de/ueber-uns/',
    siteName: 'gehaltly.de',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Über uns – gehaltly.de',
    description:
      'Unsere Mission: Transparente Gehaltsberechnungen für alle Arbeitnehmer in Deutschland.',
    images: ['https://gehaltly.de/logo.png'],
  },
};

export default function UeberUnsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'gehaltly.de',
    url: 'https://gehaltly.de',
    logo: {
      '@type': 'ImageObject',
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
    },
    description:
      'Kostenlose Gehaltsrechner für Deutschland – präzise Brutto-Netto-Berechnungen basierend auf aktuellen Steuerwerten.',
    foundingDate: '2025',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'kontakt@gehaltly.de',
      contactType: 'customer support',
      availableLanguage: 'German',
    },
    sameAs: [],
    knowsAbout: [
      'Einkommensteuer Deutschland',
      'Sozialversicherung',
      'Lohnsteuer',
      'Brutto-Netto-Berechnung',
      'Steuerklassen',
      'EStG §32a',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Über uns' }]} />

          {/* Hero Section */}
          <section className="mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Über gehaltly.de
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              gehaltly.de ist Ihr unabhängiges Portal für transparente
              Gehaltsberechnungen in Deutschland. Wir helfen Arbeitnehmern,
              Berufseinsteigern und Arbeitgebern dabei, den Weg vom Bruttogehalt
              zum Nettogehalt nachvollziehbar zu verstehen.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#DD0000] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                  Unsere Mission
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Das deutsche Steuer- und Sozialversicherungssystem zählt zu
                  den komplexesten der Welt. Millionen von Arbeitnehmern fragen
                  sich jeden Monat: <em>Was bleibt netto von meinem Gehalt?</em>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Unsere Mission ist es, diese Frage für jeden verständlich und
                  kostenlos zu beantworten. Mit unseren Rechnern können Sie
                  sofort Ihr Nettogehalt berechnen – für alle Steuerklassen, alle
                  Bundesländer und mit den aktuellen Werten für 2026.
                </p>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="mb-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#DD0000] rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                  Unsere Expertise
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  gehaltly.de wird von einem Team mit fundiertem Wissen im
                  deutschen Steuerrecht und in der Softwareentwicklung betrieben.
                  Unsere Berechnungen basieren auf:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DD0000] font-bold mt-0.5">•</span>
                    <span>
                      <strong>Einkommensteuergesetz (EStG) §32a</strong> – Die
                      offizielle Formel zur Berechnung der Einkommensteuer in
                      Deutschland, einschließlich aller Tarifzonen vom
                      Grundfreibetrag (12.348 €) bis zur Reichensteuer (45 % ab
                      277.825 €).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DD0000] font-bold mt-0.5">•</span>
                    <span>
                      <strong>Sozialversicherungsbeiträge</strong> –
                      Krankenversicherung (14,6 % + 2,9 % Zusatzbeitrag),
                      Rentenversicherung (18,6 %), Pflegeversicherung (3,6 %)
                      und Arbeitslosenversicherung (2,6 %) mit allen
                      Beitragsbemessungsgrenzen.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DD0000] font-bold mt-0.5">•</span>
                    <span>
                      <strong>Steuerklassensystem</strong> – Alle sechs
                      deutschen Steuerklassen mit ihren spezifischen Freibeträgen
                      und Besonderheiten.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DD0000] font-bold mt-0.5">•</span>
                    <span>
                      <strong>Kirchensteuer & Solidaritätszuschlag</strong> –
                      Bundeslandspezifische Sätze und Freigrenzen.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Accuracy Section */}
          <section className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#DD0000] rounded-lg flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                  Datenqualität & Aktualität
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Präzision ist der Kern unseres Angebots. Wir aktualisieren
                  alle Berechnungsgrundlagen, sobald neue Steuerwerte offiziell
                  veröffentlicht werden.
                </p>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Aktuelle Werte 2026 (Auswahl):
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      Grundfreibetrag: <strong>12.348 €</strong>
                    </li>
                    <li>
                      Spitzensteuersatz (42 %): ab <strong>69.878 €</strong>
                    </li>
                    <li>
                      BBG Krankenversicherung:{' '}
                      <strong>66.150 €/Jahr</strong>
                    </li>
                    <li>
                      BBG Rentenversicherung:{' '}
                      <strong>101.400 €/Jahr</strong>
                    </li>
                    <li>
                      Kinderfreibetrag: <strong>9.756 €</strong> (beide
                      Elternteile)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How Calculations Work */}
          <section className="mb-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#DD0000] rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                  So funktionieren unsere Berechnungen
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Alle Berechnungen laufen direkt in Ihrem Browser – es werden
                  keine Gehaltsdaten an Server übertragen. Unser
                  Berechnungsalgorithmus folgt dem offiziellen Verfahren:
                </p>
                <ol className="space-y-3 text-gray-600 list-decimal list-inside">
                  <li>
                    <strong>Zu versteuerndes Einkommen ermitteln:</strong>{' '}
                    Abzug von Werbungskostenpauschale, Sonderausgaben und
                    Vorsorgepauschale vom Bruttogehalt.
                  </li>
                  <li>
                    <strong>Einkommensteuer nach EStG §32a berechnen:</strong>{' '}
                    Anwendung der vier Tarifzonen (Grundfreibetrag, progressive
                    Zone, Spitzensteuersatz, Reichensteuer).
                  </li>
                  <li>
                    <strong>Solidaritätszuschlag & Kirchensteuer:</strong>{' '}
                    Berechnung auf Basis der Lohnsteuer mit Freigrenzen.
                  </li>
                  <li>
                    <strong>Sozialversicherungsbeiträge:</strong> Berechnung der
                    Arbeitnehmeranteile unter Berücksichtigung der
                    Beitragsbemessungsgrenzen.
                  </li>
                  <li>
                    <strong>Netto = Brutto − Steuern − Sozialabgaben</strong>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Editorial Process */}
          <section className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#DD0000] rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                  Redaktioneller Prozess
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Unsere Steuerwerte und Berechnungen werden gegen offizielle
                  Quellen verifiziert:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DD0000] font-bold mt-0.5">•</span>
                    <span>
                      <a
                        href="https://www.bundesfinanzministerium.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DD0000] hover:underline inline-flex items-center gap-1"
                      >
                        Bundesministerium der Finanzen (BMF)
                        <ExternalLink className="w-3 h-3" />
                      </a>{' '}
                      – Programmablaufpläne für die Lohnsteuerberechnung,
                      jährliche Steueranpassungen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DD0000] font-bold mt-0.5">•</span>
                    <span>
                      <a
                        href="https://www.gesetze-im-internet.de/estg/__32a.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DD0000] hover:underline inline-flex items-center gap-1"
                      >
                        Gesetze im Internet – EStG §32a
                        <ExternalLink className="w-3 h-3" />
                      </a>{' '}
                      – Offizielle Einkommensteuer-Tarifvorschrift
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DD0000] font-bold mt-0.5">•</span>
                    <span>
                      <a
                        href="https://www.sozialversicherung.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DD0000] hover:underline inline-flex items-center gap-1"
                      >
                        Deutsche Sozialversicherung
                        <ExternalLink className="w-3 h-3" />
                      </a>{' '}
                      – Beitragssätze und Beitragsbemessungsgrenzen
                    </span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Bei gesetzlichen Änderungen aktualisieren wir unsere
                  Berechnungen zeitnah und kennzeichnen das jeweilige
                  Steuerjahr deutlich auf jeder Seite.
                </p>
              </div>
            </div>
          </section>

          {/* Contact & Links Section */}
          <section className="mb-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#DD0000] rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                  Kontakt
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Haben Sie Fragen, Feedback oder einen Fehler entdeckt? Wir
                  freuen uns über Ihre Nachricht:
                </p>
                <p className="mb-6">
                  <a
                    href="mailto:kontakt@gehaltly.de"
                    className="text-[#DD0000] hover:underline font-medium"
                  >
                    kontakt@gehaltly.de
                  </a>
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/impressum"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#DD0000] hover:text-[#DD0000] transition-colors"
                  >
                    Impressum
                  </Link>
                  <Link
                    href="/datenschutz"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#DD0000] hover:text-[#DD0000] transition-colors"
                  >
                    Datenschutzerklärung
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#DD0000] hover:text-[#DD0000] transition-colors"
                  >
                    Kontaktformular
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 leading-relaxed">
              <strong>Hinweis:</strong> Die auf gehaltly.de bereitgestellten
              Berechnungen dienen ausschließlich zu Informationszwecken und
              stellen keine steuerliche oder rechtliche Beratung dar. Für
              rechtsverbindliche Auskünfte wenden Sie sich bitte an einen
              Steuerberater oder Ihr zuständiges Finanzamt.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
