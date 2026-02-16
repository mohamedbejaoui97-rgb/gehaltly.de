import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-6xl font-bold text-primary mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Seite nicht gefunden
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Die angeforderte Seite existiert leider nicht oder wurde verschoben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Zum Brutto-Netto-Rechner
            </Link>
            <Link
              href="/rechner"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Alle Rechner ansehen
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link href="/gehaltsrechner" className="p-4 rounded-lg border hover:border-primary transition-colors">
              <p className="font-semibold mb-1">Gehaltsrechner</p>
              <p className="text-muted-foreground">Nettogehalt berechnen</p>
            </Link>
            <Link href="/ratgeber" className="p-4 rounded-lg border hover:border-primary transition-colors">
              <p className="font-semibold mb-1">Ratgeber</p>
              <p className="text-muted-foreground">Steuern & Gehalt erklärt</p>
            </Link>
            <Link href="/lexikon" className="p-4 rounded-lg border hover:border-primary transition-colors">
              <p className="font-semibold mb-1">Lexikon</p>
              <p className="text-muted-foreground">Alle Begriffe von A-Z</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
