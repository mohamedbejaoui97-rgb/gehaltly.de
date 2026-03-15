import { Metadata } from 'next';
import { ArrowRightLeft, Baby, FileText, AlertTriangle, Calculator } from 'lucide-react';
import PageHero from '@/components/content/PageHero';
import ContentSection from '@/components/content/ContentSection';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Steuerklasse wechseln 2026: Wann lohnt es sich?',
  description: 'Steuerklasse wechseln leicht gemacht: Wann lohnt sich der Wechsel? Kombination 3/5 vs. 4/4, Steuerklassenwechsel vor Elterngeld und Antrag beim Finanzamt.',
  keywords: 'steuerklasse wechseln, steuerklassenwechsel, steuerklasse 3 5, steuerklasse 4 4, steuerklasse ändern',
  alternates: {
    canonical: 'https://gehaltly.de/ratgeber/steuerklasse-wechseln/',
  },
  openGraph: {
    title: 'Steuerklasse wechseln 2026: Wann lohnt es sich?',
    description: 'Steuerklasse wechseln: Kombination 3/5 vs. 4/4, Wechsel vor Elterngeld und Antrag beim Finanzamt erklärt.',
    type: 'article',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function SteuerklasseWechselnPage() {
  const faqs = [
    {
      question: 'Wie oft kann man die Steuerklasse wechseln?',
      answer: 'Seit 2020 können Ehepaare die Steuerklasse mehrmals im Jahr wechseln. Früher war der Wechsel auf einmal jährlich begrenzt. Der Wechsel gilt jeweils ab dem Folgemonat nach Antragstellung beim Finanzamt. In der Praxis reicht ein Wechsel pro Jahr aus, da die endgültige Steuerlast über die Steuererklärung ausgeglichen wird.',
    },
    {
      question: 'Was ist besser: Steuerklasse 3/5 oder 4/4?',
      answer: 'Das hängt vom Einkommensunterschied ab: Bei ähnlichen Gehältern (Unterschied unter 40%) ist 4/4 besser, da keine Nachzahlung droht. Bei großem Einkommensunterschied (über 40%) bringt 3/5 monatlich deutlich mehr Netto für den Haushalt. Wichtig: Die Jahressteuerlast ist identisch - der Unterschied liegt nur in der monatlichen Verteilung.',
    },
    {
      question: 'Wie lange dauert ein Steuerklassenwechsel?',
      answer: 'Der Wechsel wird in der Regel innerhalb von 2-4 Wochen wirksam. Nach Antragstellung beim Finanzamt wird die Änderung über das ELStAM-Verfahren elektronisch an den Arbeitgeber übermittelt. Ab dem Folgemonat nach der Änderung wendet der Arbeitgeber die neue Steuerklasse an. Bei Heirat erfolgt der automatische Wechsel oft erst mit 1-2 Monaten Verzögerung.',
    },
    {
      question: 'Kann ich die Steuerklasse online wechseln?',
      answer: 'Ja, über das ELSTER-Portal (elster.de) können Sie den Steuerklassenwechsel online beantragen. Sie benötigen ein ELSTER-Zertifikat und beide Ehepartner müssen zustimmen. Alternativ können Sie das Formular "Antrag auf Steuerklassenwechsel bei Ehegatten/Lebenspartnern" ausdrucken und per Post oder persönlich beim Finanzamt einreichen.',
    },
    {
      question: 'Welche Steuerklasse vor Elterngeld wählen?',
      answer: 'Um höheres Elterngeld zu erhalten, sollte der Partner, der in Elternzeit geht, mindestens 7 Monate vor der Geburt in Steuerklasse 3 wechseln. Das Elterngeld wird auf Basis des Nettoeinkommens der letzten 12 Monate vor der Geburt berechnet. Durch Steuerklasse 3 ist das Netto höher, was zu höherem Elterngeld führt - bis zu mehrere hundert Euro monatlich mehr.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Steuerklasse wechseln 2026: Wann lohnt es sich?',
    description: 'Steuerklasse wechseln leicht gemacht: Kombination 3/5 vs. 4/4, Wechsel vor Elterngeld und Antrag beim Finanzamt.',
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
            { label: 'Steuerklasse wechseln' },
          ]}
        />
      </div>

      <PageHero
        title="Steuerklasse wechseln: Wann lohnt es sich?"
        description="Der richtige Steuerklassenwechsel kann Ihnen monatlich hunderte Euro mehr Netto bringen. Erfahren Sie, wann ein Wechsel sinnvoll ist und wie Sie ihn beantragen."
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
              Die Steuerklasse bestimmt, wie viel Lohnsteuer monatlich von Ihrem Gehalt abgezogen wird. Die rechtliche Grundlage bildet <a href="https://www.gesetze-im-internet.de/estg/__38b.html" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">§38b EStG</a>. Für Ehepaare und eingetragene Lebenspartner kann ein Steuerklassenwechsel erhebliche Auswirkungen auf das monatliche Nettoeinkommen haben - und sogar auf Lohnersatzleistungen wie Elterngeld oder Arbeitslosengeld.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In diesem Ratgeber erklären wir, wann ein Wechsel möglich ist, welche Kombination für Sie optimal ist und wie Sie den Wechsel beantragen.
            </p>
          </div>
        </div>
      </section>

      <ContentSection
        heading="Wann ist ein Steuerklassenwechsel möglich?"
        icon={<ArrowRightLeft className="w-5 h-5" />}
        body="Ein Steuerklassenwechsel ist an bestimmte Lebensereignisse geknüpft oder kann auf Antrag erfolgen. Nicht jeder kann seine Steuerklasse frei wählen."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4">
              <h3 className="font-semibold mb-2">Automatischer Wechsel:</h3>
              <ul className="text-sm space-y-2 list-disc list-inside text-blue-900 dark:text-blue-100">
                <li><strong>Heirat:</strong> Automatisch in Steuerklasse 4/4</li>
                <li><strong>Scheidung:</strong> Zurück in Steuerklasse 1 (ab dem Folgejahr)</li>
                <li><strong>Tod des Partners:</strong> Steuerklasse 3 im Todesjahr und Folgejahr, dann Steuerklasse 1</li>
                <li><strong>Dauerhafte Trennung:</strong> Steuerklasse 1 ab dem Folgejahr</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4">
              <h3 className="font-semibold mb-2">Wechsel auf Antrag:</h3>
              <ul className="text-sm space-y-2 list-disc list-inside text-green-900 dark:text-green-100">
                <li>Ehepaare: Wechsel zwischen 3/5 und 4/4 (mehrmals jährlich möglich)</li>
                <li>Wechsel zu 4/4 mit Faktor (auf Antrag)</li>
                <li>Alleinerziehende: Wechsel in Steuerklasse 2 mit Nachweis</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Hinweis:</strong> Ledige Arbeitnehmer in Steuerklasse 1 können ihre Steuerklasse nicht wechseln (außer bei Heirat oder wenn sie alleinerziehend werden). Die Steuerklasse 6 wird automatisch vergeben und kann nicht gewechselt werden.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Kombination 3/5 vs. 4/4 vs. 4/4 mit Faktor"
        icon={<Calculator className="w-5 h-5" />}
        body="Für Ehepaare gibt es drei Optionen. Die Wahl beeinflusst nur die monatlichen Abzüge - die Jahressteuerlast bleibt identisch und wird über die Steuererklärung ausgeglichen."
      >
        <div className="space-y-6">
          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold mb-4">Vergleich am Beispiel: Partner A verdient 4.500 EUR, Partner B verdient 2.000 EUR brutto</h3>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-4 gap-2 font-semibold pb-2 border-b">
                <span>Kombination</span>
                <span>Netto A</span>
                <span>Netto B</span>
                <span>Haushalt gesamt</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <span className="font-medium">3/5</span>
                <span>3.320 EUR</span>
                <span>1.330 EUR</span>
                <span className="font-semibold text-green-600">4.650 EUR</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <span className="font-medium">4/4</span>
                <span>2.830 EUR</span>
                <span>1.560 EUR</span>
                <span>4.390 EUR</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <span className="font-medium">4/4 Faktor</span>
                <span>2.950 EUR</span>
                <span>1.530 EUR</span>
                <span>4.480 EUR</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-green-700 dark:text-green-300">3/5 wählen wenn:</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Einkommensunterschied &gt; 40%</li>
                <li>Maximales monatliches Netto gewünscht</li>
                <li>Steuererklärung wird sowieso gemacht</li>
                <li>Nachzahlung einplanbar</li>
              </ul>
            </div>
            <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">4/4 wählen wenn:</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Ähnliches Einkommen</li>
                <li>Keine Nachzahlung gewünscht</li>
                <li>Einfachste Variante</li>
                <li>Standard seit 2023</li>
              </ul>
            </div>
            <div className="border-2 border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">4/4 mit Faktor wenn:</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Unterschiedliche Einkommen</li>
                <li>Nachzahlung vermeiden</li>
                <li>Gerechtere Verteilung</li>
                <li>Berücksichtigt Splittingvorteil</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Achtung bei 3/5:</strong> Die Kombination 3/5 führt fast immer zu einer Nachzahlung bei der Steuererklärung, da monatlich zu wenig Steuern einbehalten werden. Planen Sie hierfür Rücklagen ein! Nutzen Sie unseren <a href="/rechner/steuerklassenrechner" className="text-[#DD0000] hover:underline">Steuerklassenrechner</a> für eine genaue Berechnung.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Steuerklassenwechsel vor Elterngeld"
        icon={<Baby className="w-5 h-5" />}
        body="Ein Steuerklassenwechsel vor der Geburt kann das Elterngeld erheblich erhöhen. Der Wechsel muss jedoch rechtzeitig erfolgen."
      >
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-green-900 dark:text-green-100">So funktioniert der Trick:</h3>
            <ol className="text-sm text-green-900 dark:text-green-100 space-y-2 list-decimal list-inside">
              <li>Das Elterngeld beträgt 65-67% des durchschnittlichen Netto der letzten 12 Monate vor der Geburt</li>
              <li>In Steuerklasse 3 ist das Netto deutlich höher als in Steuerklasse 5</li>
              <li>Der Wechsel muss <strong>mindestens 7 Monate vor der Geburt</strong> erfolgen (Steuerklasse 3 muss in der Mehrheit der 12 Bemessungsmonate gelten)</li>
              <li>Der Wechsel ist auch dann sinnvoll, wenn der in Elternzeit gehende Partner weniger verdient</li>
            </ol>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h3 className="font-semibold mb-2">Rechenbeispiel Elterngeld:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between pb-2 border-b">
                <span>Brutto Partnerin (in Elternzeit):</span>
                <strong>3.000 EUR</strong>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Netto in Steuerklasse 5:</span>
                <span>ca. 1.680 EUR → Elterngeld: <strong>1.092 EUR</strong></span>
              </div>
              <div className="flex justify-between pb-2 border-b">
                <span>Netto in Steuerklasse 3:</span>
                <span>ca. 2.280 EUR → Elterngeld: <strong>1.482 EUR</strong></span>
              </div>
              <div className="flex justify-between pt-2 text-green-600 font-semibold">
                <span>Unterschied pro Monat:</span>
                <span>+390 EUR mehr Elterngeld</span>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Wichtig:</strong> Bei 12 Monaten Elterngeld sind das bis zu 4.680 EUR mehr. Der Wechsel ist legal und ausdrücklich vom Gesetzgeber vorgesehen. Mehr Informationen finden Sie beim <a href="https://www.bmfsfj.de/bmfsfj/themen/familie/familienleistungen/elterngeld" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Bundesfamilienministerium</a>.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="So beantragen Sie den Steuerklassenwechsel"
        icon={<FileText className="w-5 h-5" />}
        body="Der Antrag auf Steuerklassenwechsel ist einfach und kann online oder per Formular erfolgen."
      >
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <h3 className="font-semibold mb-3">Schritt-für-Schritt-Anleitung:</h3>
            <ol className="text-sm space-y-3 list-decimal list-inside">
              <li><strong>Formular besorgen:</strong> &quot;Antrag auf Steuerklassenwechsel bei Ehegatten/Lebenspartnern&quot; beim Finanzamt oder auf <a href="https://www.elster.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">elster.de</a></li>
              <li><strong>Ausfüllen:</strong> Beide Partner tragen ihre Daten und die gewünschte Steuerklassenkombination ein</li>
              <li><strong>Unterschreiben:</strong> Beide Ehepartner müssen den Antrag unterschreiben</li>
              <li><strong>Einreichen:</strong> Per Post, online oder persönlich beim zuständigen Finanzamt</li>
              <li><strong>Warten:</strong> Bearbeitung dauert ca. 2-4 Wochen</li>
              <li><strong>Prüfen:</strong> Änderung auf der nächsten Gehaltsabrechnung kontrollieren</li>
            </ol>
          </div>
          <p className="text-muted-foreground text-sm">
            Der Arbeitgeber wird automatisch über das ELStAM-Verfahren (Elektronische LohnSteuerAbzugsMerkmale) informiert. Sie müssen Ihrem Arbeitgeber nichts mitteilen - die neue Steuerklasse wird automatisch ab dem Folgemonat angewendet.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Auswirkung auf Arbeitslosengeld und Kurzarbeitergeld"
        icon={<AlertTriangle className="w-5 h-5" />}
        body="Die Steuerklasse beeinflusst nicht nur das monatliche Netto, sondern auch die Höhe von Lohnersatzleistungen wie Arbeitslosengeld I und Kurzarbeitergeld."
      >
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-red-900 dark:text-red-100">So werden Lohnersatzleistungen berechnet:</h3>
            <ul className="text-sm text-red-900 dark:text-red-100 space-y-2 list-disc list-inside">
              <li><strong>Arbeitslosengeld I:</strong> 60% (bzw. 67% mit Kind) des pauschalierten Nettoentgelts - die Steuerklasse der letzten 12 Monate zählt</li>
              <li><strong>Kurzarbeitergeld:</strong> Basiert auf dem Unterschied zwischen Soll- und Ist-Entgelt - Steuerklasse beeinflusst die Berechnung</li>
              <li><strong>Krankengeld:</strong> 70% des Brutto, max. 90% des Netto - Steuerklasse spielt eine Rolle bei der Netto-Obergrenze</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Praxistipp:</strong> Wenn Arbeitslosigkeit droht, kann ein rechtzeitiger Wechsel in Steuerklasse 3 das Arbeitslosengeld deutlich erhöhen. Allerdings prüft die Agentur für Arbeit, ob der Wechsel missbräuchlich war. Ein Wechsel mindestens 3-6 Monate vor Eintritt der Arbeitslosigkeit gilt als unbedenklich. Weitere Infos bietet die <a href="https://www.arbeitsagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Bundesagentur für Arbeit</a>.
            </p>
          </div>
        </div>
      </ContentSection>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/ratgeber/steuerklasse-wechseln"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
