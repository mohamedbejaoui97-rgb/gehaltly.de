import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { Mail, Github, ExternalLink, Award, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Redaktion - Wer schreibt für gehaltly.de?',
  description:
    'Lernen Sie das Team hinter gehaltly.de kennen. Mohamed Bejaoui, Software-Engineer und Verantwortlicher für unsere Brutto-Netto-Berechnungen und Steuer-Inhalte.',
  alternates: {
    canonical: 'https://gehaltly.de/redaktion/',
  },
  openGraph: {
    title: 'Redaktion - gehaltly.de',
    description:
      'Lernen Sie das Team hinter gehaltly.de kennen.',
    url: 'https://gehaltly.de/redaktion/',
    siteName: 'gehaltly.de',
    type: 'website',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de Redaktion',
      },
    ],
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohamed Bejaoui',
  jobTitle: 'Gründer & Verantwortlicher Redakteur',
  description:
    'Software-Engineer mit Schwerpunkt auf Steuer- und Finanzanwendungen. Verantwortlich für die Brutto-Netto-Berechnungen und Inhalte von gehaltly.de.',
  url: 'https://gehaltly.de/redaktion',
  image: 'https://gehaltly.de/logo.png',
  worksFor: {
    '@type': 'Organization',
    name: 'gehaltly.de',
    url: 'https://gehaltly.de',
  },
  knowsAbout: [
    'Einkommensteuer Deutschland',
    'EStG §32a',
    'Sozialversicherung',
    'Lohnsteuer',
    'Brutto-Netto-Berechnung',
    'Steuerklassen',
  ],
  sameAs: [
    // TODO_USER: Bitte echte Profile-URLs einfügen
    'https://github.com/mohamedbejaoui97-rgb',
  ],
};

export default function RedaktionPage() {
  return (
    <>
      <SchemaMarkup schema={personSchema} />

      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: 'Redaktion' }]} />

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Redaktion - Wer steht hinter gehaltly.de?
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Transparenz ist Teil unserer Mission. Lernen Sie die Person
              kennen, die für die Inhalte und Berechnungen auf gehaltly.de
              verantwortlich ist.
            </p>

            {/* Author Card */}
            <section className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 md:p-10 mb-12 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Photo placeholder */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-red-100 to-yellow-100 border-4 border-white shadow-lg flex items-center justify-center text-5xl font-bold text-[#DD0000]">
                    MB
                  </div>
                  {/* TODO_USER: Echtes Foto in /public/redaktion/mohamed.jpg ablegen
                      und das obere Div ersetzen durch:
                      <img src="/redaktion/mohamed.jpg" alt="Mohamed Bejaoui"
                           className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                  */}
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                    Mohamed Bejaoui
                  </h2>
                  <p className="text-base text-[#DD0000] font-semibold mb-4">
                    Gründer & Verantwortlicher Redakteur
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mohamed Bejaoui ist Software-Engineer mit langjähriger
                    Erfahrung in der Entwicklung von Finanzanwendungen und
                    Steuer-Tools. Er hat gehaltly.de gegründet, um deutschen
                    Arbeitnehmern eine transparente, präzise und kostenlose
                    Möglichkeit zu bieten, ihr Nettogehalt zu berechnen.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Als Verantwortlicher Redakteur prüft er alle Inhalte und
                    Berechnungsformeln gegen offizielle Quellen wie das
                    Bundesministerium der Finanzen (BMF) und das
                    Einkommensteuergesetz (EStG §32a).
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:kontakt@gehaltly.de"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#DD0000] hover:text-[#DD0000] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      kontakt@gehaltly.de
                    </a>
                    {/* TODO_USER: LinkedIn-Profil eintragen */}
                    <a
                      href="https://github.com/mohamedbejaoui97-rgb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#DD0000] hover:text-[#DD0000] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Expertise */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-[#DD0000]" />
                Schwerpunkte & Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Deutsches Steuerrecht',
                    desc: 'Einkommensteuer (EStG §32a), Lohnsteuer, Steuerklassen 1-6, Solidaritätszuschlag, Kirchensteuer.',
                  },
                  {
                    title: 'Sozialversicherung',
                    desc: 'Beitragssätze, Beitragsbemessungsgrenzen, JAEG, Pflegeversicherung mit Kinderlosen-Zuschlag.',
                  },
                  {
                    title: 'Software-Engineering',
                    desc: 'Entwicklung präziser Steuerberechnungen und intuitiver Benutzeroberflächen für Finanztools.',
                  },
                  {
                    title: 'Datenqualität',
                    desc: 'Verifizierung aller Werte gegen BMF-Programmablaufpläne und offizielle Beitragssätze 2026.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-gray-200 rounded-xl p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Editorial Process */}
            <section className="mb-12 bg-gray-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#DD0000]" />
                Redaktioneller Prozess
              </h2>
              <ol className="space-y-4 text-gray-700 list-decimal list-inside">
                <li>
                  <strong>Quellenprüfung:</strong> Jeder veröffentlichte Wert
                  (Steuersätze, Freibeträge, BBG) wird gegen{' '}
                  <a
                    href="https://www.bundesfinanzministerium.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DD0000] hover:underline inline-flex items-center gap-1"
                  >
                    BMF
                    <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  und{' '}
                  <a
                    href="https://www.gesetze-im-internet.de/estg/__32a.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DD0000] hover:underline inline-flex items-center gap-1"
                  >
                    EStG
                    <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  verifiziert.
                </li>
                <li>
                  <strong>Berechnungstest:</strong> Alle Berechnungsformeln
                  werden mit offiziellen Beispielen aus dem Programmablaufplan
                  des BMF abgeglichen und automatisiert getestet (vitest).
                </li>
                <li>
                  <strong>Aktualität:</strong> Bei gesetzlichen Änderungen
                  aktualisieren wir Werte zeitnah. Jede Seite zeigt das
                  Steuerjahr und das Aktualisierungsdatum deutlich an.
                </li>
                <li>
                  <strong>Transparenz:</strong> Quellen werden auf jeder
                  inhaltlichen Seite als externe Verlinkung ausgewiesen.
                </li>
                <li>
                  <strong>Korrekturen:</strong> Hinweise auf Fehler werden
                  innerhalb von 48 Stunden geprüft und bei Bedarf öffentlich
                  korrigiert.
                </li>
              </ol>
            </section>

            {/* Contact */}
            <section className="border-t pt-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Kontakt zur Redaktion
              </h2>
              <p className="text-gray-600 mb-4">
                Haben Sie einen Fehler entdeckt, eine Frage zu einer Berechnung
                oder einen Vorschlag für neue Inhalte? Wir freuen uns über Ihre
                Nachricht:
              </p>
              <a
                href="mailto:kontakt@gehaltly.de"
                className="text-[#DD0000] hover:underline font-medium"
              >
                kontakt@gehaltly.de
              </a>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/ueber-uns"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#DD0000] hover:text-[#DD0000] transition-colors"
                >
                  Über uns
                </Link>
                <Link
                  href="/impressum"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-[#DD0000] hover:text-[#DD0000] transition-colors"
                >
                  Impressum
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
