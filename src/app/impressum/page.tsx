import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von gehaltly.de - Angaben gemäß § 5 TMG',
  alternates: {
    canonical: 'https://gehaltly.de/impressum/',
  },
  robots: {
    index: false,
  },
};

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Impressum</h1>

        <h2 className="text-xl font-semibold mt-8 mb-3">Angaben gemäß § 5 TMG</h2>
        <p className="text-muted-foreground">
          gehaltly.de<br />
          [Name / Firma einfügen]<br />
          [Straße und Hausnummer]<br />
          [PLZ und Ort]<br />
          Deutschland
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Kontakt</h2>
        <p className="text-muted-foreground">
          E-Mail: kontakt@gehaltly.de
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p className="text-muted-foreground">
          [Name einfügen]<br />
          [Adresse einfügen]
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Haftungsausschluss</h2>
        <h3 className="text-lg font-medium mt-6 mb-2">Haftung für Inhalte</h3>
        <p className="text-muted-foreground">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h3 className="text-lg font-medium mt-6 mb-2">Haftung für Links</h3>
        <p className="text-muted-foreground">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Hinweis zur Gehaltsberechnung</h2>
        <p className="text-muted-foreground">
          Die auf gehaltly.de bereitgestellten Berechnungen dienen ausschließlich zu Informationszwecken und stellen keine steuerliche Beratung dar. Alle Angaben ohne Gewähr. Für rechtsverbindliche Auskünfte wenden Sie sich bitte an einen Steuerberater oder an Ihr zuständiges Finanzamt.
        </p>
      </div>
    </div>
  );
}
