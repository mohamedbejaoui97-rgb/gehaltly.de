import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie gehaltly.de - Wir helfen Ihnen gerne weiter.',
  alternates: {
    canonical: 'https://gehaltly.de/kontakt/',
  },
  robots: {
    index: false,
  },
};

export default function KontaktPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Kontakt</h1>

        <div className="bg-background rounded-lg border p-6 shadow-sm">
          <p className="text-muted-foreground mb-6">
            Haben Sie Fragen, Anregungen oder Feedback zu unseren Gehaltsrechnern? Wir freuen uns über Ihre Nachricht.
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">E-Mail</h2>
              <p className="text-muted-foreground">
                <a href="mailto:kontakt@gehaltly.de" className="text-[#DD0000] hover:underline">
                  kontakt@gehaltly.de
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Antwortzeit</h2>
              <p className="text-muted-foreground">
                Wir bemühen uns, alle Anfragen innerhalb von 2 Werktagen zu beantworten.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <p className="text-sm text-amber-900 dark:text-amber-100">
            <strong>Wichtiger Hinweis:</strong> Wir bieten keine steuerliche Beratung an. Für individuelle Steuerfragen wenden Sie sich bitte an einen Steuerberater oder an Ihr zuständiges Finanzamt.
          </p>
        </div>
      </div>
    </div>
  );
}
