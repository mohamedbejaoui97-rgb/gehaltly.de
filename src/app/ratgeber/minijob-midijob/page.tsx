import { Metadata } from 'next';
import { Wallet, ArrowRightLeft, Briefcase, Clock, Shield, Scale } from 'lucide-react';
import PageHero from '@/components/content/PageHero';
import ContentSection from '@/components/content/ContentSection';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Minijob & Midijob 2026: Regeln, Grenzen und Abgaben',
  description: 'Minijob & Midijob 2026: 556€ Grenze, Übergangsbereich bis 2.000€, Sozialversicherung, Minijob neben Hauptjob und Rechte als Minijobber erklärt.',
  keywords: 'minijob 2026, midijob 2026, 556 euro job, minijob grenze, übergangsbereich, minijob neben hauptjob',
  alternates: {
    canonical: 'https://gehaltly.de/ratgeber/minijob-midijob/',
  },
  openGraph: {
    title: 'Minijob & Midijob 2026: Regeln, Grenzen und Abgaben',
    description: 'Minijob & Midijob 2026: 556€ Grenze, Übergangsbereich, Sozialversicherung und Rechte erklärt.',
    type: 'article',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function MinijobMidijobPage() {
  const faqs = [
    {
      question: 'Wie viel darf ich im Minijob 2026 verdienen?',
      answer: 'Die Minijob-Grenze liegt 2026 bei 556 EUR pro Monat (6.672 EUR pro Jahr). Diese Grenze ist an den Mindestlohn gekoppelt: Sie entspricht genau 10 Stunden pro Woche x 12,82 EUR Mindestlohn x 4,33 Wochen. Wenn der Mindestlohn steigt, steigt auch die Minijob-Grenze automatisch.',
    },
    {
      question: 'Muss ich als Minijobber Steuern zahlen?',
      answer: 'In der Regel nicht. Der Arbeitgeber zahlt eine pauschale Steuer von 2% auf Ihren Verdienst. Diese wird häufig vom Arbeitgeber übernommen und nicht vom Lohn abgezogen. Alternativ kann die individuelle Besteuerung nach Lohnsteuerklasse erfolgen - das lohnt sich aber nur in Ausnahmefällen. Als Minijobber erhalten Sie Ihren Lohn in der Regel brutto = netto.',
    },
    {
      question: 'Kann ich mehrere Minijobs gleichzeitig haben?',
      answer: 'Ja, aber nur wenn Sie keinen Hauptjob haben. Haben Sie einen sozialversicherungspflichtigen Hauptjob, dürfen Sie daneben nur EINEN Minijob ausüben, der sozialversicherungsfrei bleibt. Jeder weitere Minijob wird mit dem Hauptjob zusammengerechnet und unterliegt der vollen Sozialversicherungspflicht in Steuerklasse 6.',
    },
    {
      question: 'Was passiert, wenn ich die Minijob-Grenze überschreite?',
      answer: 'Gelegentliches Überschreiten (bis zu 2 Monate pro Jahr, max. das Doppelte der Grenze) ist erlaubt, z.B. bei Krankheitsvertretung oder Weihnachtsgeschäft. Regelmäßiges Überschreiten führt dazu, dass der Minijob als sozialversicherungspflichtige Beschäftigung gilt - rückwirkend ab dem Zeitpunkt des Überschreitens. Sie rutschen dann in den Midijob-Bereich (556,01 - 2.000 EUR).',
    },
    {
      question: 'Haben Minijobber Anspruch auf Urlaub und Mindestlohn?',
      answer: 'Ja! Minijobber haben die gleichen Rechte wie Vollzeitbeschäftigte: Mindestlohn (12,82 EUR/Stunde in 2026), bezahlter Urlaub (mindestens 24 Werktage bei 6-Tage-Woche, anteilig bei weniger Tagen), Lohnfortzahlung im Krankheitsfall (6 Wochen), Kündigungsschutz nach dem KSchG, und Anspruch auf Feiertagsvergütung.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Minijob & Midijob 2026: Regeln, Grenzen und Abgaben',
    description: 'Minijob & Midijob 2026: Grenzen, Sozialversicherung, Regeln neben Hauptjob und Rechte als Minijobber.',
    image: 'https://gehaltly.de/logo.png',
    author: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      url: 'https://gehaltly.de',
    },
    publisher: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      url: 'https://gehaltly.de',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gehaltly.de/logo.png',
      },
    },
    datePublished: '2026-01-15',
    dateModified: '2026-03-01',
  };

  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Ratgeber', href: '/ratgeber' },
            { label: 'Minijob & Midijob' },
          ]}
        />
      </div>

      <PageHero
        title="Minijob & Midijob 2026: Regeln und Grenzen"
        description="Alles über Minijob und Midijob in 2026: Verdienstgrenzen, Sozialversicherung, Steuern und Ihre Rechte als Minijobber. Mit aktuellen Werten und praktischen Beispielen."
      />

      <div className="container mx-auto px-4 mt-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>Von <strong>gehaltly.de</strong> Redaktion</span>
          <span>|</span>
          <span>Aktualisiert: 1. März 2026</span>
        </div>
      </div>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Rund 7 Millionen Menschen in Deutschland arbeiten in einem Minijob. Seit der Reform 2022 ist die Minijob-Grenze dynamisch an den Mindestlohn gekoppelt. Die aktuellen Regelungen finden Sie auf der Website der <a href="https://www.minijob-zentrale.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Minijob-Zentrale</a>. Weitere Informationen zu Beschäftigungsformen bietet die <a href="https://www.arbeitsagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Bundesagentur für Arbeit</a>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In diesem Ratgeber erklären wir die aktuellen Regelungen für Minijobs und Midijobs in 2026, zeigen die Unterschiede bei Steuern und Sozialabgaben und klären über Ihre Rechte auf.
            </p>
          </div>
        </div>
      </section>

      <ContentSection
        heading="Minijob 2026: Die 556-Euro-Grenze"
        icon={<Wallet className="w-5 h-5" />}
        body="Ein Minijob (geringfügige Beschäftigung) liegt vor, wenn das regelmäßige monatliche Entgelt die Minijob-Grenze von 556 EUR nicht überschreitet. Für Arbeitnehmer ist der Minijob praktisch steuer- und sozialversicherungsfrei."
      >
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold mb-4">Minijob auf einen Blick (2026):</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b">
                <span>Monatliche Verdienstgrenze</span>
                <strong>556 EUR</strong>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Jährliche Verdienstgrenze</span>
                <strong>6.672 EUR</strong>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Mindestlohn 2026</span>
                <strong>12,82 EUR/Stunde</strong>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Max. Stunden pro Woche bei Mindestlohn</span>
                <strong>ca. 10 Stunden</strong>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Steuern für Arbeitnehmer</span>
                <strong>0 EUR (AG zahlt 2% pauschal)</strong>
              </div>
              <div className="flex justify-between">
                <span>Sozialversicherung für Arbeitnehmer</span>
                <strong>0 EUR (nur RV optional)</strong>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Abgaben des Arbeitgebers:</h3>
            <div className="text-sm text-blue-900 dark:text-blue-100 space-y-1">
              <div className="flex justify-between">
                <span>Krankenversicherung (pauschal)</span>
                <span>13,0%</span>
              </div>
              <div className="flex justify-between">
                <span>Rentenversicherung (pauschal)</span>
                <span>15,0%</span>
              </div>
              <div className="flex justify-between">
                <span>Pauschalsteuer</span>
                <span>2,0%</span>
              </div>
              <div className="flex justify-between">
                <span>Umlage U1, U2, Insolvenzgeld</span>
                <span>ca. 1,6%</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t border-blue-200 dark:border-blue-800">
                <span>AG-Gesamtkosten</span>
                <span>ca. 31,6% auf den Bruttolohn</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Beispiel:</strong> Sie verdienen 556 EUR im Minijob. Ihr Nettolohn: <strong>556 EUR</strong> (brutto = netto). Ihr Arbeitgeber zahlt zusätzlich ca. 176 EUR an Abgaben, also insgesamt 732 EUR.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Midijob 2026: Der Übergangsbereich"
        icon={<ArrowRightLeft className="w-5 h-5" />}
        body="Der Midijob (Übergangsbereich) gilt für Einkommen zwischen 556,01 EUR und 2.000 EUR monatlich. Im Übergangsbereich zahlen Arbeitnehmer reduzierte Sozialversicherungsbeiträge."
      >
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold mb-4">Midijob-Übergangsbereich:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b">
                <span>Untergrenze</span>
                <strong>556,01 EUR</strong>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Obergrenze</span>
                <strong>2.000,00 EUR</strong>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>AN-Anteil Sozialversicherung bei 600 EUR</span>
                <strong>ca. 4% (statt ~20%)</strong>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>AN-Anteil Sozialversicherung bei 1.000 EUR</span>
                <strong>ca. 13%</strong>
              </div>
              <div className="flex justify-between">
                <span>AN-Anteil Sozialversicherung bei 2.000 EUR</span>
                <strong>ca. 20% (voller Beitrag)</strong>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-green-900 dark:text-green-100">Vorteile des Midijobs:</h3>
            <ul className="text-sm text-green-900 dark:text-green-100 space-y-2 list-disc list-inside">
              <li>Voller Rentenanspruch trotz reduzierter Beiträge</li>
              <li>Voller Krankenversicherungsschutz</li>
              <li>Anspruch auf Arbeitslosengeld</li>
              <li>Gleitender Übergang - kein harter Sprung in der Belastung</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Rechenbeispiel:</strong> Bei 800 EUR Midijob-Verdienst in Steuerklasse 1 zahlen Sie ca. 64 EUR Sozialversicherung (statt ca. 160 EUR bei voller Beitragspflicht) plus ca. 0 EUR Lohnsteuer (unter Grundfreibetrag). Ihr Netto: ca. 736 EUR. Ab 2.000 EUR gelten die normalen SV-Sätze.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Minijob neben dem Hauptjob"
        icon={<Briefcase className="w-5 h-5" />}
        body="Viele Arbeitnehmer bessern ihr Einkommen mit einem Minijob neben dem Hauptjob auf. Dabei gelten besondere Regeln."
      >
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4">
            <h3 className="font-semibold mb-2">Erster Minijob neben Hauptjob:</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-green-900 dark:text-green-100">
              <li>Bleibt sozialversicherungsfrei (wie ein alleiniger Minijob)</li>
              <li>Wird NICHT mit dem Hauptjob zusammengerechnet</li>
              <li>Arbeitgeber zahlt pauschale Abgaben (ca. 31,6%)</li>
              <li>Kein Lohnsteuerabzug (2% Pauschalsteuer durch AG)</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4">
            <h3 className="font-semibold mb-2">Zweiter und jeder weitere Minijob:</h3>
            <ul className="text-sm space-y-2 list-disc list-inside text-red-900 dark:text-red-100">
              <li>Wird mit dem Hauptjob zusammengerechnet</li>
              <li>Volle Sozialversicherungspflicht auf den zweiten Minijob</li>
              <li>Besteuerung nach Steuerklasse 6 (höchste Abzüge)</li>
              <li>Von 556 EUR bleiben nur ca. 350-400 EUR netto</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm">
              <strong>Rechenbeispiel:</strong> Hauptjob 3.000 EUR brutto + 1. Minijob 556 EUR = Sie erhalten 556 EUR netto zusätzlich. Hauptjob 3.000 EUR + 1. Minijob 556 EUR + 2. Minijob 400 EUR = Der 2. Minijob wird in Steuerklasse 6 versteuert, Netto vom 2. Job nur ca. 260 EUR.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Kurzfristige Beschäftigung"
        icon={<Clock className="w-5 h-5" />}
        body="Neben dem geringfügig entlohnten Minijob gibt es die kurzfristige Beschäftigung. Diese ist an die Dauer, nicht an die Verdiensthöhe gebunden."
      >
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Kurzfristige Beschäftigung auf einen Blick:</h3>
            <ul className="text-sm text-blue-900 dark:text-blue-100 space-y-2 list-disc list-inside">
              <li><strong>Maximale Dauer:</strong> 3 Monate oder 70 Arbeitstage pro Kalenderjahr</li>
              <li><strong>Verdienstgrenze:</strong> Keine! Sie können auch 5.000 EUR/Monat verdienen</li>
              <li><strong>Sozialversicherung:</strong> Komplett frei (keine SV-Beiträge)</li>
              <li><strong>Steuern:</strong> Nach individueller Lohnsteuerklasse oder 25% Pauschalsteuer (bei max. 150 EUR/Tag)</li>
              <li><strong>Voraussetzung:</strong> Darf nicht berufsmäßig ausgeübt werden</li>
            </ul>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Ideal für:</strong> Ferienjobs, Erntehelfer, Messepersonal, Aushilfen im Weihnachtsgeschäft. Auch neben einem Hauptjob oder Minijob möglich, solange die 70-Tage-Grenze eingehalten wird.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Minijob und Rentenversicherung"
        icon={<Shield className="w-5 h-5" />}
        body="Seit 2013 sind Minijobber grundsätzlich rentenversicherungspflichtig. Sie können sich aber auf Antrag befreien lassen."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-green-700 dark:text-green-300">Rentenversicherung beibehalten:</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Eigenbeitrag: 3,6% (ca. 20 EUR bei 556 EUR)</li>
                <li>Volle Wartezeitmonate für Rente</li>
                <li>Anspruch auf Erwerbsminderungsrente</li>
                <li>Riester-Förderung möglich</li>
                <li>Anspruch auf Reha-Leistungen</li>
              </ul>
            </div>
            <div className="border-2 border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-700 dark:text-red-300">Befreiung von der RV (Opt-out):</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Kein Eigenbeitrag</li>
                <li>AG zahlt nur 15% pauschal</li>
                <li>Keine vollen Wartezeitmonate</li>
                <li>Kein Anspruch auf Erwerbsminderungsrente</li>
                <li>Keine Riester-Förderung</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Empfehlung:</strong> Für nur ca. 20 EUR monatlich erhalten Sie volle Rentenanwartschaftszeiten und wichtige Versicherungsleistungen. Besonders für Minijobber ohne anderweitige Rentenversicherung (z.B. Hausfrauen/Hausmänner) ist der Verbleib in der RV oft sinnvoll.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Rechte als Minijobber"
        icon={<Scale className="w-5 h-5" />}
        body="Minijobber haben die gleichen Arbeitsrechte wie Vollzeitbeschäftigte. Viele Arbeitgeber wissen das nicht oder ignorieren es - kennen Sie Ihre Rechte!"
      >
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-green-900 dark:text-green-100">Diese Rechte haben Sie als Minijobber:</h3>
            <ul className="text-sm text-green-900 dark:text-green-100 space-y-2 list-disc list-inside">
              <li><strong>Mindestlohn:</strong> 12,82 EUR/Stunde (2026), auch für Minijobs</li>
              <li><strong>Bezahlter Urlaub:</strong> Mindestens 24 Werktage bei 6-Tage-Woche (anteilig bei weniger Arbeitstagen)</li>
              <li><strong>Lohnfortzahlung im Krankheitsfall:</strong> Bis zu 6 Wochen voller Lohn</li>
              <li><strong>Feiertagsvergütung:</strong> Feiertage werden bezahlt, auch wenn normalerweise gearbeitet worden wäre</li>
              <li><strong>Mutterschutz:</strong> Volles Mutterschutzgesetz gilt auch im Minijob</li>
              <li><strong>Kündigungsschutz:</strong> Gesetzliche Kündigungsfristen gelten</li>
              <li><strong>Schriftlicher Arbeitsvertrag:</strong> Spätestens am ersten Arbeitstag (seit Nachweisgesetz 2022)</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-sm text-red-900 dark:text-red-100">
              <strong>Achtung:</strong> Wenn Ihr Arbeitgeber Ihnen weniger als den Mindestlohn zahlt, keinen Urlaub gewährt oder keine Lohnfortzahlung bei Krankheit leistet, verstößt er gegen geltendes Recht. Wenden Sie sich an die <a href="https://www.minijob-zentrale.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Minijob-Zentrale</a> oder eine Beratungsstelle.
            </p>
          </div>
        </div>
      </ContentSection>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/ratgeber/minijob-midijob"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
