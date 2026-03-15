import { Metadata } from 'next';
import { TrendingUp, PiggyBank, Info, Calculator } from 'lucide-react';
import PageHero from '@/components/content/PageHero';
import ContentSection from '@/components/content/ContentSection';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Mehr Netto vom Brutto - 10 Tipps für 2026',
  description: 'Mit diesen 10 Strategien holen Sie 2026 mehr Netto aus Ihrem Brutto: Steuerklasse, bAV, Sachbezüge, Freibeträge und weitere legale Spar-Tipps.',
  keywords: 'mehr netto vom brutto, netto optimieren, steuern sparen, gehaltsoptimierung, netto erhöhen 2026',
  alternates: {
    canonical: 'https://gehaltly.de/ratgeber/mehr-netto-vom-brutto/',
  },
  openGraph: {
    title: 'Mehr Netto vom Brutto - 10 Tipps für 2026',
    description: 'Mit diesen 10 Strategien holen Sie 2026 mehr Netto aus Ihrem Brutto.',
    type: 'article',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 446,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function MehrNettoVomBruttoPage() {
  const faqs = [
    {
      question: 'Wie viel Netto kann ich durch Optimierung zusätzlich rausholen?',
      answer: 'Je nach Ausgangslage und genutzten Strategien sind 100 bis 400 EUR mehr Netto pro Monat realistisch. Die größten Hebel sind die Steuerklassenwahl bei Verheirateten (bis 300 EUR/Monat), betriebliche Altersvorsorge (bis 150 EUR Steuer- und Abgabenersparnis) sowie Sachbezüge und steuerfreie Benefits (bis 50 EUR/Monat).',
    },
    {
      question: 'Ist der Kirchenaustritt wirklich so einfach?',
      answer: 'Ja, der Kirchenaustritt ist in den meisten Bundesländern unkompliziert. Sie gehen zum Standesamt oder Amtsgericht und erklären Ihren Austritt. Die Gebühr liegt je nach Bundesland bei 10 bis 60 EUR. Ab dem Folgemonat entfällt die Kirchensteuer auf Ihrer Lohnabrechnung. Die Ersparnis beträgt 8-9% Ihrer Lohnsteuer.',
    },
    {
      question: 'Kann mein Arbeitgeber Sachbezüge ablehnen?',
      answer: 'Sachbezüge sind eine freiwillige Leistung des Arbeitgebers. Er ist nicht verpflichtet, diese anzubieten. Allerdings profitieren beide Seiten: Der Arbeitnehmer erhält mehr Netto, der Arbeitgeber spart Lohnnebenkosten. Es lohnt sich, das Gespräch zu suchen und die Vorteile für beide Seiten darzulegen.',
    },
    {
      question: 'Lohnt sich die betriebliche Altersvorsorge wirklich?',
      answer: 'In den meisten Fällen ja, besonders wenn der Arbeitgeber einen Zuschuss zahlt (seit 2022 mindestens 15% bei Neuverträgen). Die Entgeltumwandlung spart Steuern und Sozialabgaben. Allerdings sinken dadurch auch spätere Rentenansprüche leicht. Bei einem Arbeitgeberzuschuss von 15-20% überwiegen die Vorteile in der Regel deutlich.',
    },
    {
      question: 'Welche Strategie bringt am schnellsten mehr Netto?',
      answer: 'Am schnellsten wirken der Steuerklassenwechsel (ab Folgemonat) und die Eintragung von Freibeträgen beim Finanzamt (ab dem Monat der Eintragung). Sachbezüge und bAV können ab dem nächsten Monat greifen, wenn der Arbeitgeber zustimmt. Die Homeoffice-Pauschale und Werbungskosten wirken erst über die Steuererklärung, also mit Verzögerung.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mehr Netto vom Brutto: 10 bewährte Strategien für 2026',
    description: 'Mit diesen 10 Strategien holen Sie 2026 mehr Netto aus Ihrem Brutto: Steuerklasse, bAV, Sachbezüge, Freibeträge und weitere legale Spar-Tipps.',
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
            { label: 'Mehr Netto vom Brutto' },
          ]}
        />
      </div>

      <PageHero
        title="Mehr Netto vom Brutto: 10 bewährte Strategien für 2026"
        subtitle="Steuervorteile, Freibeträge und Benefits clever nutzen"
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
              Viele Arbeitnehmer in Deutschland verschenken jeden Monat bares Geld, weil sie
              steuerliche Gestaltungsmöglichkeiten und legale Optimierungen nicht kennen oder
              nicht nutzen. Dabei gibt es zahlreiche Wege, das Nettogehalt zu erhöhen, ohne
              dass der Arbeitgeber mehr Brutto zahlen muss.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In diesem Ratgeber stellen wir Ihnen 10 bewährte Strategien vor, mit denen Sie
              2026 deutlich mehr Netto vom Brutto behalten. Von der Steuerklassenwahl über
              Sachbezüge bis hin zur Gehaltsverhandlung mit Netto-Fokus -- für jeden ist
              etwas dabei.
            </p>
          </div>
        </div>
      </section>

      {/* Strategie 1 */}
      <ContentSection
        heading="1. Steuerklasse optimieren"
        icon={<Calculator className="w-5 h-5" />}
        body="Die Wahl der richtigen Steuerklasse ist der schnellste Hebel für mehr Netto. Besonders Ehepaare können durch einen Wechsel mehrere hundert Euro pro Monat sparen."
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Verheiratete Paare stehen vor der Wahl zwischen den Kombinationen 3/5 und 4/4.
            Wenn ein Partner deutlich mehr verdient (Unterschied über 10%), lohnt sich die
            Kombination 3/5: Der Besserverdiener wählt Steuerklasse 3 mit doppeltem
            Grundfreibetrag (24.696 EUR in 2026), der andere Partner Steuerklasse 5. Die
            gesetzliche Grundlage findet sich in{' '}
            <a href="https://www.gesetze-im-internet.de/estg/__38b.html" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">
              §38b EStG
            </a>.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Wichtig: Die Steuerklasse beeinflusst nur die monatlichen Abzüge, nicht die
            Jahressteuerlast. Am Jahresende erfolgt ein Ausgleich über die Steuererklärung.
            Dennoch verbessert die richtige Wahl Ihre monatliche Liquidität erheblich.
          </p>
          <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4">
            <p className="text-sm text-green-900 dark:text-green-100">
              <strong>Praxis-Tipp:</strong> Der Steuerklassenwechsel gilt ab dem Folgemonat.
              Nutzen Sie unseren{' '}
              <a href="/rechner/steuerklassenrechner/" className="text-[#DD0000] hover:underline font-medium">
                Steuerklassenrechner
              </a>, um die optimale Kombination zu berechnen.
              <br />
              <strong>Ersparnis:</strong> Bis zu 300 EUR/Monat bei großem Einkommensunterschied.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Strategie 2 */}
      <ContentSection
        heading="2. Steuerfreibeträge beantragen"
        icon={<PiggyBank className="w-5 h-5" />}
        body="Wenn Ihre jährlichen Werbungskosten über der Pauschale von 1.000 EUR liegen, können Sie einen Freibetrag auf der Lohnsteuerkarte eintragen lassen. Das bringt sofort mehr Netto."
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Viele Arbeitnehmer wissen nicht, dass sie hohe Fahrtkosten, Fortbildungsausgaben
            oder doppelte Haushaltsführung nicht erst über die Steuererklärung geltend machen
            müssen. Beim Finanzamt können Sie einen Antrag auf Lohnsteuerermäßigung stellen,
            der Ihren Freibetrag direkt auf der monatlichen Lohnabrechnung erhöht.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Besonders lohnenswert ist dies bei Fahrtkosten: Wer 30 km zur Arbeit fährt, hat
            allein durch die Pendlerpauschale Werbungskosten von ca. 2.070 EUR/Jahr (230 Tage
            x 20 km x 0,30 EUR + 230 Tage x 10 km x 0,38 EUR). Abzüglich der 1.000 EUR
            Pauschale ergibt das einen Freibetrag von ca. 1.070 EUR, also knapp 90 EUR/Monat
            weniger Bemessungsgrundlage.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Praxis-Tipp:</strong> Stellen Sie den Antrag auf Lohnsteuerermäßigung
              beim Finanzamt. Nutzen Sie dafür das{' '}
              <a href="https://www.bundesfinanzministerium.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">
                Formular des Bundesfinanzministeriums
              </a>. Der Freibetrag gilt ab dem Monat der Eintragung.
              <br />
              <strong>Ersparnis:</strong> 30-150 EUR/Monat je nach Höhe der Werbungskosten.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Strategie 3 */}
      <ContentSection
        heading="3. Betriebliche Altersvorsorge (bAV) nutzen"
        icon={<PiggyBank className="w-5 h-5" />}
        body="Über die betriebliche Altersvorsorge können Sie 2026 bis zu 302 EUR pro Monat steuer- und sozialabgabenfrei in Ihre Altersvorsorge einzahlen. Oft legt der Arbeitgeber noch einen Zuschuss obendrauf."
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bei der Entgeltumwandlung wird ein Teil Ihres Bruttogehalts direkt in eine
            betriebliche Altersvorsorge eingezahlt -- vor Abzug von Steuern und
            Sozialversicherungsbeiträgen. Dadurch sinkt zwar Ihr Bruttoeinkommen auf dem
            Papier, aber Sie sparen erheblich bei Steuern und Abgaben.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Seit 2022 müssen Arbeitgeber bei Neuverträgen einen Zuschuss von mindestens 15%
            leisten, sofern sie durch die Entgeltumwandlung Sozialversicherungsbeiträge sparen.
            Viele Arbeitgeber bieten sogar 20-25% Zuschuss. Bei 200 EUR Eigenanteil kommen
            so schnell 230-250 EUR in die Vorsorge.
          </p>
          <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4">
            <p className="text-sm text-green-900 dark:text-green-100">
              <strong>Praxis-Tipp:</strong> Fragen Sie in der Personalabteilung nach dem
              bAV-Angebot Ihres Arbeitgebers. Achten Sie auf niedrige Verwaltungskosten und
              prüfen Sie, ob ein Arbeitgeberzuschuss gewährt wird.
              <br />
              <strong>Ersparnis:</strong> Bei 200 EUR Entgeltumwandlung ca. 80-100 EUR
              Steuer- und Abgabenersparnis, plus Arbeitgeberzuschuss.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Strategie 4 */}
      <ContentSection
        heading="4. Sachbezüge und Gutscheine"
        icon={<TrendingUp className="w-5 h-5" />}
        body="Seit 2022 können Arbeitgeber ihren Mitarbeitern bis zu 50 EUR pro Monat steuerfrei als Sachbezug gewähren. Tankgutscheine, Einkaufsgutscheine oder Sachzuwendungen -- alles möglich."
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Sachbezüge sind eine der einfachsten Formen der Gehaltsoptimierung. Der
            Arbeitgeber kann Ihnen monatlich bis zu 50 EUR steuerfrei zukommen lassen --
            in Form von Gutscheinen, Prepaid-Kreditkarten oder Sachleistungen. Die
            Freigrenze von 50 EUR darf dabei nicht überschritten werden, sonst wird der
            gesamte Betrag steuerpflichtig.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Beliebte Sachbezüge sind Tankgutscheine, Supermarkt-Gutscheine, Prepaid-Karten
            (z.B. Sodexo, Edenred) und Mitgliedschaften im Fitnessstudio. Die Regeln für
            Sachbezüge sind in{' '}
            <a href="https://www.minijob-zentrale.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">
              den Richtlinien der Minijob-Zentrale
            </a>{' '}
            und im EStG geregelt.
          </p>
          <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4">
            <p className="text-sm text-green-900 dark:text-green-100">
              <strong>Praxis-Tipp:</strong> Sprechen Sie Ihren Arbeitgeber gezielt auf
              Sachbezüge an. Für ihn sind diese günstiger als eine Gehaltserhöhung, da keine
              Lohnnebenkosten anfallen.
              <br />
              <strong>Ersparnis:</strong> 50 EUR/Monat (600 EUR/Jahr) steuerfrei.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Strategie 5 */}
      <ContentSection
        heading="5. Fahrkostenzuschuss & Jobticket"
        icon={<TrendingUp className="w-5 h-5" />}
        body="Arbeitgeber können Jobtickets und Fahrtkostenzuschüsse steuerfrei gewähren. Das Deutschlandticket kostet 58 EUR/Monat und kann vom Arbeitgeber bezuschusst oder komplett übernommen werden."
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Seit der Einführung des Deutschlandtickets haben Arbeitgeber eine einfache
            Möglichkeit, ihren Mitarbeitern steuerfreie Mobilitätszuschüsse zu gewähren.
            Das Ticket kostet 58 EUR/Monat und berechtigt zur Nutzung des gesamten ÖPNV
            in Deutschland. Der Arbeitgeber kann das Ticket steuerfrei bezuschussen oder
            komplett übernehmen.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Zusätzlich profitieren Pendler von der Pendlerpauschale: Für die ersten 20 km
            der einfachen Strecke werden 0,30 EUR/km angesetzt, ab dem 21. Kilometer
            sogar 0,38 EUR/km. Diese können Sie entweder über die Steuererklärung oder
            als Freibetrag auf der Lohnsteuerkarte geltend machen.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Praxis-Tipp:</strong> Prüfen Sie, ob Ihr Arbeitgeber das
              Deutschlandticket als Jobticket anbietet. Falls nicht, regen Sie es an --
              der Verwaltungsaufwand ist gering und beide Seiten profitieren.
              <br />
              <strong>Ersparnis:</strong> Bis zu 58 EUR/Monat durch steuerfreies Jobticket,
              plus Pendlerpauschale über die Steuererklärung.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Strategie 6 */}
      <ContentSection
        heading="6. Kirchenaustritt prüfen"
        icon={<Info className="w-5 h-5" />}
        body="Die Kirchensteuer beträgt 8% (Bayern und Baden-Württemberg) bzw. 9% (alle anderen Bundesländer) der Lohnsteuer. Ein Austritt kann eine spürbare monatliche Ersparnis bringen."
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Die Kirchensteuer ist für viele Arbeitnehmer ein erheblicher Posten auf der
            Gehaltsabrechnung. Sie wird direkt vom Arbeitgeber einbehalten und an die
            jeweilige Religionsgemeinschaft abgeführt. Bei einem Bruttogehalt von
            3.500 EUR in Steuerklasse 1 beträgt die Kirchensteuer ca. 36-40 EUR pro Monat.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Natürlich ist dies eine persönliche Entscheidung, die nicht nur finanzielle
            Aspekte umfasst. Bedenken Sie aber: Viele kirchliche Leistungen wie
            Kindergartenplätze stehen auch Nicht-Mitgliedern offen. Die Kirchensteuer
            ist allerdings als Sonderausgabe steuerlich absetzbar, was den tatsächlichen
            Effekt etwas mindert.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Praxis-Tipp:</strong> Berechnen Sie Ihre persönliche Kirchensteuer
              mit unserem{' '}
              <a href="/" className="text-[#DD0000] hover:underline font-medium">
                Brutto-Netto-Rechner
              </a>{' '}
              -- aktivieren Sie einfach die Option &quot;Kirchensteuer&quot; und vergleichen
              Sie das Ergebnis mit und ohne.
              <br />
              <strong>Ersparnis:</strong> Ca. 36-40 EUR/Monat bei 3.500 EUR brutto.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Strategie 7 */}
      <ContentSection
        heading="7. Homeoffice-Pauschale nutzen"
        icon={<PiggyBank className="w-5 h-5" />}
        body="Wer regelmäßig von zu Hause arbeitet, kann die Homeoffice-Pauschale von 6 EUR pro Tag geltend machen -- bis zu 1.260 EUR pro Jahr (210 Tage)."
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Die Homeoffice-Pauschale wurde dauerhaft ins Steuerrecht aufgenommen und
            bietet Arbeitnehmern, die von zu Hause arbeiten, eine einfache Möglichkeit,
            Werbungskosten geltend zu machen. Pro Homeoffice-Tag können Sie 6 EUR ansetzen,
            maximal 1.260 EUR im Jahr (210 Tage).
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Die Pauschale wird in der Steuererklärung als Werbungskosten angegeben. Sie
            lohnt sich besonders für Arbeitnehmer, deren sonstige Werbungskosten gering
            sind und die nicht über die 1.000 EUR Arbeitnehmerpauschbetrag kommen. Wer
            an 3 Tagen pro Woche im Homeoffice arbeitet, erreicht bei 46 Arbeitswochen
            bereits 828 EUR -- zusammen mit anderen Werbungskosten schnell über der Pauschale.
          </p>
          <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4">
            <p className="text-sm text-green-900 dark:text-green-100">
              <strong>Praxis-Tipp:</strong> Führen Sie ein einfaches Homeoffice-Protokoll
              (Datum und Häkchen genügt). So haben Sie bei einer Rückfrage des Finanzamts
              einen Nachweis. Die Pauschale gilt auch ohne separates Arbeitszimmer.
              <br />
              <strong>Ersparnis:</strong> Bis zu 1.260 EUR/Jahr an zusätzlichen Werbungskosten,
              je nach Steuersatz 250-500 EUR Steuerersparnis.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Strategie 8 */}
      <ContentSection
        heading="8. Ehegattensplitting nutzen"
        icon={<Calculator className="w-5 h-5" />}
        body="Verheiratete Paare profitieren vom Ehegattensplitting: Die gemeinsame Veranlagung in der Steuererklärung kann die Steuerlast erheblich senken, besonders bei unterschiedlich hohen Einkommen."
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Beim Ehegattensplitting werden die Einkommen beider Partner addiert, halbiert,
            darauf die Einkommensteuer berechnet und das Ergebnis verdoppelt. Durch den
            progressiven Steuertarif ergibt sich ein Vorteil, wenn die Einkommen
            unterschiedlich hoch sind. Je größer der Einkommensunterschied, desto größer
            der Splitting-Vorteil.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Das Splitting wirkt über die gemeinsame Steuererklärung (Zusammenveranlagung).
            In Kombination mit der richtigen Steuerklassenwahl (3/5) können Sie den Vorteil
            bereits monatlich nutzen. Die endgültige Berechnung erfolgt im
            Einkommensteuerbescheid. Das{' '}
            <a href="https://www.bundesfinanzministerium.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">
              Bundesfinanzministerium
            </a>{' '}
            stellt hierzu ausführliche Informationen bereit.
          </p>
          <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4">
            <p className="text-sm text-green-900 dark:text-green-100">
              <strong>Praxis-Tipp:</strong> Verheiratete sollten immer die Zusammenveranlagung
              prüfen -- auch wenn beide arbeiten. Die Einzelveranlagung lohnt sich nur in
              seltenen Ausnahmefällen (z.B. bei Abfindungen oder hohen Verlusten eines Partners).
              <br />
              <strong>Ersparnis:</strong> Bis zu mehrere Tausend EUR/Jahr, abhängig vom
              Einkommensunterschied.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Strategie 9 */}
      <ContentSection
        heading="9. Werbungskosten maximieren"
        icon={<PiggyBank className="w-5 h-5" />}
        body="Übersteigen Ihre beruflichen Ausgaben den Arbeitnehmerpauschbetrag von 1.000 EUR, sparen Sie mit jedem zusätzlichen Euro echte Steuern. Viele absetzbare Posten werden oft übersehen."
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Werbungskosten sind alle Ausgaben, die Ihnen im Zusammenhang mit Ihrer
            beruflichen Tätigkeit entstehen. Der Staat gewährt jedem Arbeitnehmer
            pauschal 1.000 EUR -- erst darüber hinaus lohnt sich das Sammeln von Belegen.
            Zu den häufig vergessenen Werbungskosten gehören:
          </p>
          <div className="bg-muted rounded-lg p-4">
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li><strong>Arbeitsmittel:</strong> Laptop, Monitor, Schreibtisch, Bürostuhl (sofort absetzbar bis 800 EUR netto)</li>
              <li><strong>Fortbildungen:</strong> Kursgebühren, Fachliteratur, Fachzeitschriften</li>
              <li><strong>Berufskleidung:</strong> Typische Berufskleidung und deren Reinigung</li>
              <li><strong>Bewerbungskosten:</strong> Bewerbungsfotos, Fahrtkosten zu Vorstellungsgesprächen</li>
              <li><strong>Kontoführungsgebühren:</strong> Pauschal 16 EUR/Jahr ohne Nachweis</li>
              <li><strong>Telefon-/Internetkosten:</strong> Beruflicher Anteil (pauschal 20%, max. 20 EUR/Monat)</li>
            </ul>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Praxis-Tipp:</strong> Sammeln Sie konsequent alle beruflichen
              Belege. Laut{' '}
              <a href="https://www.gesetze-im-internet.de/estg/" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">
                §9 EStG
              </a>{' '}
              sind alle beruflich veranlassten Aufwendungen absetzbar. Jeder Euro über
              1.000 EUR spart Ihnen je nach Grenzsteuersatz 25-42 Cent Steuern.
              <br />
              <strong>Ersparnis:</strong> Je nach Werbungskostenhöhe 100-1.000+ EUR/Jahr.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Strategie 10 */}
      <ContentSection
        heading="10. Gehaltsverhandlung mit Netto-Optimierung"
        icon={<TrendingUp className="w-5 h-5" />}
        body="Statt mehr Brutto zu verlangen, können steuerfreie Benefits bei der Gehaltsverhandlung für beide Seiten vorteilhafter sein. Der Arbeitgeber spart Lohnnebenkosten, Sie erhalten mehr Netto."
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bei einer klassischen Gehaltserhöhung von 200 EUR brutto kommen beim
            Arbeitnehmer nur etwa 100-120 EUR netto an -- der Rest geht an Steuern und
            Sozialabgaben. Gleichzeitig zahlt der Arbeitgeber zusätzlich ca. 40 EUR an
            Lohnnebenkosten. Steuerfreie Benefits dagegen kommen zu 100% beim
            Arbeitnehmer an.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Besonders attraktive Optionen für die Gehaltsverhandlung:
          </p>
          <div className="bg-muted rounded-lg p-4">
            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
              <li><strong>Firmenwagen (E-Auto):</strong> Nur 0,25% des Listenpreises als geldwerter Vorteil (statt 1% bei Verbrennern). Nutzen Sie unseren <a href="/rechner/firmenwagenrechner/" className="text-[#DD0000] hover:underline">Firmenwagenrechner</a>.</li>
              <li><strong>Kita-Zuschuss:</strong> Komplett steuer- und sozialabgabenfrei, keine Obergrenze</li>
              <li><strong>Essenszuschuss:</strong> Bis zu 7,23 EUR/Arbeitstag steuerbegünstigt</li>
              <li><strong>Erholungsbeihilfe:</strong> 156 EUR/Jahr für Arbeitnehmer + 104 EUR für Partner + 52 EUR pro Kind, pauschal mit 25% versteuert</li>
              <li><strong>Sachbezüge:</strong> 50 EUR/Monat steuerfrei (siehe Strategie 4)</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4">
            <p className="text-sm text-green-900 dark:text-green-100">
              <strong>Praxis-Tipp:</strong> Bereiten Sie für Ihre Gehaltsverhandlung eine
              Vergleichsrechnung vor: Zeigen Sie Ihrem Arbeitgeber, dass 200 EUR in
              steuerfreien Benefits für beide Seiten besser sind als 200 EUR mehr Brutto.
              <br />
              <strong>Ersparnis:</strong> Bei geschickter Kombination 200-400 EUR/Monat
              mehr Netto im Vergleich zur reinen Bruttoerhöhung.
            </p>
          </div>
        </div>
      </ContentSection>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/ratgeber/mehr-netto-vom-brutto"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
