import { Metadata } from 'next';
import { TrendingUp, Target, MessageSquare, Gift, Briefcase, CheckCircle, ArrowRightLeft } from 'lucide-react';
import PageHero from '@/components/content/PageHero';
import ContentSection from '@/components/content/ContentSection';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Gehaltsverhandlung: 7 Tipps für mehr Gehalt 2026',
  description: 'Gehaltsverhandlung erfolgreich führen: 7 bewährte Tipps für mehr Gehalt. Vorbereitung, Timing, Argumentation und Verhandlungstechniken für Ihre nächste Gehaltserhöhung.',
  keywords: 'gehaltsverhandlung tipps, gehalt verhandeln, gehaltserhöhung, mehr gehalt, gehaltsverhandlung vorbereitung',
  alternates: {
    canonical: 'https://gehaltly.de/ratgeber/gehaltsverhandlung/',
  },
  openGraph: {
    title: 'Gehaltsverhandlung: 7 Tipps für mehr Gehalt 2026',
    description: 'Gehaltsverhandlung erfolgreich führen: 7 bewährte Tipps für mehr Gehalt in 2026.',
    type: 'article',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function GehaltsverhandlungPage() {
  const faqs = [
    {
      question: 'Wie viel Prozent Gehaltserhöhung kann ich verlangen?',
      answer: 'Bei einer internen Gehaltsverhandlung sind 3-10% realistisch, abhängig von Ihrer Leistung und der Unternehmenssituation. Bei einem Jobwechsel sind 10-20% üblich, da Sie hier Ihren gesamten Marktwert neu verhandeln. Bei einer Beförderung oder deutlich erweiterten Verantwortung können auch 15-20% angemessen sein.',
    },
    {
      question: 'Wann ist der beste Zeitpunkt für eine Gehaltsverhandlung?',
      answer: 'Die besten Zeitpunkte sind: nach erfolgreichem Abschluss eines wichtigen Projekts, beim jährlichen Mitarbeitergespräch, nach der Probezeit, bei einer Erweiterung Ihrer Aufgaben oder wenn das Unternehmen gute Geschäftszahlen vermeldet. Vermeiden Sie Zeiten mit Stellenabbau oder schlechten Quartalszahlen.',
    },
    {
      question: 'Was tun, wenn der Chef die Gehaltserhöhung ablehnt?',
      answer: 'Bleiben Sie professionell und fragen Sie nach den konkreten Gründen. Vereinbaren Sie einen neuen Termin in 3-6 Monaten mit klaren Zielvereinbarungen. Verhandeln Sie alternativ über Benefits wie Homeoffice-Tage, Weiterbildungen, Firmenwagen oder betriebliche Altersvorsorge. Dokumentieren Sie weiterhin Ihre Erfolge für das nächste Gespräch.',
    },
    {
      question: 'Sollte ich bei der Gehaltsverhandlung die erste Zahl nennen?',
      answer: 'Ja, das sogenannte "Ankern" ist eine bewährte Verhandlungstechnik. Wer die erste Zahl nennt, setzt den Referenzpunkt für die gesamte Verhandlung. Nennen Sie eine Zahl am oberen Ende Ihrer realistischen Spanne - das gibt Verhandlungsspielraum nach unten, während das Ergebnis statistisch höher ausfällt als bei passivem Abwarten.',
    },
    {
      question: 'Wie wirkt sich eine Gehaltserhöhung netto aus?',
      answer: 'Durch die progressive Einkommensteuer kommt nicht die volle Erhöhung netto an. Bei einem Bruttogehalt von 3.500 EUR und einer Erhöhung um 300 EUR (ca. 8,6%) bleiben netto etwa 170-180 EUR mehr übrig - also rund 60% der Brutto-Erhöhung. Nutzen Sie unseren Gehaltserhöhungsrechner, um den genauen Netto-Effekt zu berechnen.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Gehaltsverhandlung: 7 Tipps für mehr Gehalt 2026',
    description: 'Gehaltsverhandlung erfolgreich führen: 7 bewährte Tipps für mehr Gehalt. Vorbereitung, Timing, Argumentation und Verhandlungstechniken.',
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
            { label: 'Gehaltsverhandlung' },
          ]}
        />
      </div>

      <PageHero
        title="Gehaltsverhandlung: 7 Tipps für mehr Gehalt"
        description="Erfolgreich mehr Gehalt verhandeln - mit der richtigen Vorbereitung, dem passenden Timing und überzeugenden Argumenten. So holen Sie das Maximum aus Ihrer nächsten Gehaltsverhandlung heraus."
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
              Eine Gehaltsverhandlung gehört zu den wichtigsten Karriere-Momenten. Laut einer Studie des <a href="https://www.destatis.de/DE/Themen/Arbeit/Verdienste/Verdienste-Verdienstunterschiede/_inhalt.html" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Statistischen Bundesamtes</a> liegt das durchschnittliche Bruttogehalt in Deutschland 2026 bei rund 4.300 EUR monatlich. Doch viele Arbeitnehmer verschenken bares Geld, weil sie sich nicht trauen, nach mehr Gehalt zu fragen - oder es falsch angehen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In diesem Ratgeber zeigen wir Ihnen sieben bewährte Strategien, mit denen Sie Ihre nächste Gehaltsverhandlung erfolgreich meistern. Von der Vorbereitung über die Argumentation bis zu cleveren Alternativen zum reinen Brutto-Mehr.
            </p>
          </div>
        </div>
      </section>

      <ContentSection
        heading="Tipp 1: Gründliche Vorbereitung"
        icon={<Target className="w-5 h-5" />}
        body="Die Vorbereitung entscheidet über 80% des Verhandlungserfolgs. Gehen Sie nie unvorbereitet in ein Gehaltsgespräch - recherchieren Sie Ihren Marktwert und dokumentieren Sie Ihre Leistungen."
      >
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">So ermitteln Sie Ihren Marktwert:</h3>
            <ul className="text-sm text-blue-900 dark:text-blue-100 space-y-2 list-disc list-inside">
              <li>Gehaltsportale wie Gehalt.de, Glassdoor und Kununu nutzen</li>
              <li>Branchenberichte und Tarifverträge prüfen</li>
              <li>Mit Kollegen (auch aus anderen Unternehmen) offen über Gehälter sprechen</li>
              <li>Stellenanzeigen für vergleichbare Positionen analysieren</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-green-900 dark:text-green-100">Leistungen dokumentieren:</h3>
            <ul className="text-sm text-green-900 dark:text-green-100 space-y-2 list-disc list-inside">
              <li>Erfolgreiche Projekte mit messbaren Ergebnissen (Umsatzsteigerung, Kosteneinsparung)</li>
              <li>Zusätzliche Verantwortungsbereiche, die Sie übernommen haben</li>
              <li>Weiterbildungen und neue Qualifikationen</li>
              <li>Positives Feedback von Kunden, Kollegen oder Vorgesetzten</li>
            </ul>
          </div>
          <p className="text-muted-foreground">
            <strong>Beispiel:</strong> &quot;Durch die Einführung des neuen CRM-Systems, das ich verantwortet habe, konnten wir die Kundenbindungsrate um 15% steigern und den Umsatz im Team um 120.000 EUR erhöhen.&quot;
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Tipp 2: Das richtige Timing wählen"
        icon={<TrendingUp className="w-5 h-5" />}
        body="Der Zeitpunkt einer Gehaltsverhandlung ist entscheidend. Es gibt Momente, in denen Ihr Chef offener für eine Gehaltserhöhung ist - und Zeiten, die Sie besser meiden sollten."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-green-700 dark:text-green-300">Gute Zeitpunkte:</h3>
              <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                <li>Jährliches Mitarbeitergespräch</li>
                <li>Nach Ende der Probezeit (6 Monate)</li>
                <li>Nach erfolgreichem Projektabschluss</li>
                <li>Bei Übernahme neuer Verantwortung</li>
                <li>Wenn das Unternehmen gute Zahlen vermeldet</li>
              </ul>
            </div>
            <div className="border-2 border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-700 dark:text-red-300">Schlechte Zeitpunkte:</h3>
              <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                <li>Während Umstrukturierungen oder Entlassungswellen</li>
                <li>Nach schlechten Quartalszahlen</li>
                <li>Wenn der Chef unter Druck steht</li>
                <li>Direkt nach einer Fehlleistung</li>
                <li>Montags oder Freitagnachmittags</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Tipp:</strong> Kündigen Sie das Gespräch 1-2 Wochen vorher an. Sagen Sie: &quot;Ich würde gerne über meine berufliche Entwicklung und Vergütung sprechen. Wann passt es Ihnen?&quot; So kann sich auch Ihr Vorgesetzter vorbereiten.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Tipp 3: Leistung argumentieren, nicht Bedarf"
        icon={<MessageSquare className="w-5 h-5" />}
        body="Der häufigste Fehler bei Gehaltsverhandlungen: mit persönlichen Gründen argumentieren. Steigende Mieten oder ein neues Auto sind keine überzeugenden Argumente. Fokussieren Sie sich stattdessen auf Ihren Mehrwert für das Unternehmen."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-950/20 p-4">
              <h3 className="font-semibold mb-2 text-red-900 dark:text-red-100">Schwache Argumente:</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-red-800 dark:text-red-200">
                <li>&quot;Meine Miete ist gestiegen&quot;</li>
                <li>&quot;Ich brauche mehr Geld&quot;</li>
                <li>&quot;Kollegin Müller verdient mehr&quot;</li>
                <li>&quot;Ich bin schon 5 Jahre dabei&quot;</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20 p-4">
              <h3 className="font-semibold mb-2 text-green-900 dark:text-green-100">Starke Argumente:</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-green-800 dark:text-green-200">
                <li>&quot;Ich habe den Umsatz um 15% gesteigert&quot;</li>
                <li>&quot;Mein Verantwortungsbereich hat sich verdoppelt&quot;</li>
                <li>&quot;Der Markt zahlt für diese Rolle X EUR&quot;</li>
                <li>&quot;Ich habe die Zertifizierung Y erworben&quot;</li>
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground">
            <strong>Goldene Regel:</strong> Formulieren Sie Ihre Argumente immer aus Unternehmenssicht. Nicht &quot;Ich möchte mehr&quot;, sondern &quot;Mein Beitrag zum Unternehmen rechtfertigt eine Anpassung auf X EUR&quot;.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Tipp 4: Verhandlungstechniken nutzen"
        icon={<ArrowRightLeft className="w-5 h-5" />}
        body="Professionelle Verhandlungstechniken können den Unterschied zwischen einer durchschnittlichen und einer herausragenden Gehaltserhöhung ausmachen."
      >
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Ankern: Die erste Zahl zählt</h3>
            <p className="text-sm text-muted-foreground">
              Nennen Sie als Erster eine Gehaltszahl - und zwar am oberen Ende Ihrer realistischen Spanne. Wenn Ihr Ziel 4.200 EUR brutto ist, eröffnen Sie mit 4.500 EUR. Das setzt den Anker, um den herum verhandelt wird. Studien zeigen, dass das Endergebnis näher am Anker liegt als bei passivem Abwarten.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Strategisches Schweigen</h3>
            <p className="text-sm text-muted-foreground">
              Nach einem Angebot oder Gegenangebot: schweigen Sie. Viele Menschen füllen unangenehme Stille mit Zugeständnissen. Lassen Sie Ihren Chef reagieren, bevor Sie Ihre Position ändern.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Die Paketlösung</h3>
            <p className="text-sm text-muted-foreground">
              Wenn das Budget für eine Brutto-Erhöhung begrenzt ist, schnüren Sie ein Paket: z.B. 200 EUR mehr brutto plus 2 Homeoffice-Tage plus eine Weiterbildung im Wert von 3.000 EUR. Der Gesamtwert kann deutlich höher sein als eine reine Gehaltserhöhung.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Wichtig:</strong> Nennen Sie immer eine konkrete Zahl, keine Spanne. &quot;Ich stelle mir 4.500 EUR vor&quot; ist stärker als &quot;Ich dachte an 4.200 bis 4.500 EUR&quot; - bei einer Spanne greift Ihr Gegenüber automatisch zum unteren Ende.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Tipp 5: Alternativen zum Brutto-Gehalt"
        icon={<Gift className="w-5 h-5" />}
        body="Manchmal ist eine direkte Brutto-Erhöhung nicht möglich. Clevere Alternativen können netto sogar mehr bringen, da viele Benefits steuerlich begünstigt sind."
      >
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold mb-4">Steuerlich attraktive Benefits:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b">
                <span><strong>Firmenwagen</strong> (1%-Regelung)</span>
                <span className="text-muted-foreground">Netto-Vorteil je nach Fahrzeug</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span><strong>Betriebliche Altersvorsorge (bAV)</strong></span>
                <span className="text-muted-foreground">Bis 302 EUR/Monat steuerfrei</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span><strong>Jobticket / Deutschlandticket</strong></span>
                <span className="text-muted-foreground">Komplett steuerfrei</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span><strong>Essenszuschuss</strong></span>
                <span className="text-muted-foreground">Bis 7,23 EUR/Tag steuerfrei</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span><strong>Weiterbildungen</strong></span>
                <span className="text-muted-foreground">Komplett steuerfrei</span>
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Sachbezüge</strong> (Gutscheine etc.)</span>
                <span className="text-muted-foreground">Bis 50 EUR/Monat steuerfrei</span>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Rechenbeispiel:</strong> 200 EUR Brutto-Erhöhung bringen netto ca. 120 EUR. Ein steuerfreies Jobticket (58 EUR) plus 50 EUR Sachbezug plus betriebliche Altersvorsorge (100 EUR AG-Zuschuss) bringen zusammen mehr Nettovorteile - und kosten den Arbeitgeber weniger.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Tipp 6: Nach der Verhandlung"
        icon={<CheckCircle className="w-5 h-5" />}
        body="Eine erfolgreiche Verhandlung endet nicht mit dem Handschlag. Sorgen Sie dafür, dass die Vereinbarung verbindlich wird und bereiten Sie sich auf die nächste Verhandlung vor."
      >
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-green-900 dark:text-green-100">Checkliste nach der Verhandlung:</h3>
            <ul className="text-sm text-green-900 dark:text-green-100 space-y-2 list-disc list-inside">
              <li>Vereinbarung schriftlich per E-Mail bestätigen lassen</li>
              <li>Änderung im Arbeitsvertrag oder Nachtrag einfordern</li>
              <li>Datum des Inkrafttretens klar festhalten</li>
              <li>Bei Benefits: genaue Konditionen definieren (z.B. Homeoffice-Regelung)</li>
              <li>Falls abgelehnt: nächsten Termin und Zielvereinbarungen festhalten</li>
            </ul>
          </div>
          <p className="text-muted-foreground">
            <strong>Tipp:</strong> Prüfen Sie Ihre nächste Gehaltsabrechnung sorgfältig. Nutzen Sie unseren <a href="/rechner/gehaltserhoehung" className="text-[#DD0000] hover:underline">Gehaltserhöhungsrechner</a>, um den Netto-Effekt Ihrer Erhöhung vorab zu berechnen.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        heading="Tipp 7: Jobwechsel vs. interne Verhandlung"
        icon={<Briefcase className="w-5 h-5" />}
        body="Manchmal ist ein Jobwechsel der schnellste Weg zu deutlich mehr Gehalt. Intern sind 3-10% üblich, bei einem Wechsel sind 10-20% realistisch."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Interne Gehaltsverhandlung</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Typisch: 3-10% Erhöhung</li>
                <li>Sicherheit und Beständigkeit</li>
                <li>Bekanntes Umfeld und Netzwerk</li>
                <li>Regelmäßig möglich (jährlich)</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Gehaltsverhandlung bei Jobwechsel</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Typisch: 10-20% Erhöhung</li>
                <li>Völlig neue Verhandlungsposition</li>
                <li>Kein internes &quot;Gehaltsband&quot; als Limit</li>
                <li>Risiko der Probezeit</li>
              </ul>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm">
              <strong>Rechenbeispiel:</strong> Bei 3.500 EUR brutto bringt eine interne Erhöhung von 7% = 245 EUR brutto mehr (ca. 145 EUR netto). Ein Jobwechsel mit 15% = 525 EUR brutto mehr (ca. 310 EUR netto). Über ein Jahr sind das 1.740 EUR vs. 3.720 EUR netto Unterschied. Nutzen Sie unseren <a href="/" className="text-[#DD0000] hover:underline">Brutto-Netto-Rechner</a>, um Ihr neues Netto zu berechnen.
            </p>
          </div>
        </div>
      </ContentSection>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/ratgeber/gehaltsverhandlung"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
