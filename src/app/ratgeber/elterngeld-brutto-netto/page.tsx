import { Metadata } from 'next';
import { Baby, Calculator, TrendingUp, Info } from 'lucide-react';
import PageHero from '@/components/content/PageHero';
import ContentSection from '@/components/content/ContentSection';
import FAQSection from '@/components/content/FAQSection';
import RelatedLinks from '@/components/content/RelatedLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Elterngeld: Brutto oder Netto? - Berechnung 2026',
  description: 'Wird Elterngeld vom Brutto oder Netto berechnet? Alle Informationen zur Elterngeld-Berechnung 2026 mit Beispielen und wichtigen Tipps zur Optimierung.',
  keywords: 'elterngeld brutto netto, elterngeld berechnung, elterngeld höhe 2026, basiselterngeld',
  alternates: {
    canonical: 'https://gehaltly.de/ratgeber/elterngeld-brutto-netto/',
  },
  openGraph: {
    title: 'Elterngeld: Brutto oder Netto? - Berechnung 2026',
    description: 'Verstehen Sie, wie Ihr Elterngeld berechnet wird und welche Rolle Brutto und Netto spielen.',
    type: 'article',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function ElterngeldBruttoNettoPage() {
  const faqs = [
    {
      question: 'Wird Elterngeld vom Brutto oder Netto berechnet?',
      answer: 'Elterngeld wird vom Nettoeinkommen berechnet - allerdings nicht vom tatsächlichen Netto auf Ihrer Gehaltsabrechnung, sondern von einem fiktiven Nettoeinkommen. Das Elterngeldnetto wird pauschal ermittelt: Vom Bruttogehalt werden die Sozialversicherungspauschalen (21%) und die individuelle Lohnsteuer (nach Steuerklasse) abgezogen. Von diesem bereinigten Nettoeinkommen erhalten Sie 65-67% als Elterngeld.',
    },
    {
      question: 'Wie hoch ist das Elterngeld 2026?',
      answer: 'Das Basiselterngeld beträgt 65% des pauschalierten Nettoeinkommens für Eltern mit einem Nettoeinkommen über 1.240 EUR. Bei niedrigerem Einkommen steigt die Ersatzrate auf bis zu 67%. Bei Mehrlingsgeburten gibt es einen Mehrlingszuschlag von 300 EUR pro weiterem Kind. Geschwisterbonus von 10% (mindestens 75 EUR) gibt es bei weiteren kleinen Kindern im Haushalt. Minimum: 300 EUR, Maximum: 1.800 EUR monatlich.',
    },
    {
      question: 'Warum sollte man vor Elterngeld die Steuerklasse wechseln?',
      answer: 'Ein Steuerklassenwechsel kann Ihr Elterngeld deutlich erhöhen, da die Lohnsteuer bei der Berechnung abgezogen wird. Wer in Steuerklasse 3 wechselt (niedrigere Lohnsteuer), hat ein höheres Elterngeldnetto und erhält mehr Elterngeld. Der Wechsel muss spätestens 7 Monate vor Beginn des Mutterschutzes erfolgen, um wirksam zu werden. Wichtig: Nach der Geburt erfolgt ein Ausgleich über die Steuererklärung, aber während der Elternzeit haben Sie mehr Liquidität.',
    },
    {
      question: 'Wie lange wird Elterngeld gezahlt?',
      answer: 'Basiselterngeld wird für 12 Monate gezahlt, bei Partnerbeteiligung bis zu 14 Monate. ElterngeldPlus wird für maximal 24 Monate gezahlt (bei halbem Satz). Mit Partnerschaftsbonus können weitere 4 Monate hinzukommen. Die Elternzeit kann bis zu 3 Jahre dauern - Elterngeld wird jedoch nur für den vereinbarten Zeitraum gezahlt. Die 12/14 bzw. 24 Monate können frei innerhalb der ersten 14 Lebensmonate des Kindes aufgeteilt werden.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Elterngeld: Brutto oder Netto? - Berechnung 2026',
    description: 'Ausführlicher Guide zur Elterngeld-Berechnung: Wie Brutto und Netto eine Rolle spielen und wie Sie Ihr Elterngeld optimieren können.',
    author: {
      '@type': 'Organization',
      name: 'gehaltly.de',
    },
    publisher: {
      '@type': 'Organization',
      name: 'gehaltly.de',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gehaltly.de/logo.png',
      },
    },
    datePublished: '2026-01-01',
    dateModified: '2026-02-13',
  };

  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Ratgeber', href: '/ratgeber' },
            { label: 'Elterngeld Brutto Netto' },
          ]}
        />
      </div>

      <PageHero
        title="Elterngeld: Brutto oder Netto? - Berechnung 2026"
        description="Verstehen Sie, wie Ihr Elterngeld berechnet wird. Erfahren Sie, welche Rolle Brutto- und Nettogehalt spielen und wie Sie Ihr Elterngeld optimal gestalten können."
      />

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Eine der häufigsten Fragen werdender Eltern ist: Wird Elterngeld vom Brutto oder vom Netto berechnet? Die Antwort ist nicht ganz einfach, denn das Elterngeld orientiert sich an einem speziell berechneten &quot;Elterngeld-Netto&quot;, das sich vom tatsächlichen Nettoeinkommen auf Ihrer Gehaltsabrechnung unterscheidet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In diesem Guide erklären wir Ihnen ausführlich, wie das Elterngeld 2026 berechnet wird, welche Faktoren eine Rolle spielen und wie Sie Ihr Elterngeld optimieren können.
            </p>
          </div>
        </div>
      </section>

      <ContentSection
        heading="Die Elterngeld-Berechnung: Grundlagen"
        icon={<Baby className="w-5 h-5" />}
        body="Das Elterngeld beträgt in der Regel 65-67% des durchschnittlichen monatlichen Nettoeinkommens der letzten 12 Monate vor der Geburt. Doch dieses &apos;Netto&apos; wird speziell für das Elterngeld berechnet."
      >
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4">
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">So funktioniert die Berechnung:</h3>
            <ol className="text-sm space-y-2 list-decimal list-inside text-blue-900 dark:text-blue-100">
              <li><strong>Ausgangspunkt:</strong> Ihr durchschnittliches Bruttogehalt der letzten 12 Monate (vor der Geburt)</li>
              <li><strong>Abzug Sozialversicherung:</strong> Pauschal 21% für Sozialversicherungsbeiträge</li>
              <li><strong>Abzug Lohnsteuer:</strong> Individuelle Lohnsteuer nach Ihrer Steuerklasse</li>
              <li><strong>Ergebnis:</strong> Ihr &quot;Elterngeld-Netto&quot;</li>
              <li><strong>Elterngeld:</strong> 65-67% vom Elterngeld-Netto</li>
            </ol>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-center">Elterngeld-Formel</h3>
            <div className="bg-white dark:bg-gray-900 rounded p-4 space-y-2 text-sm font-mono">
              <div>Brutto-Durchschnitt (12 Monate)</div>
              <div className="ml-4">- 21% Sozialversicherungspauschale</div>
              <div className="ml-4">- Individuelle Lohnsteuer</div>
              <div className="ml-4 border-t border-gray-300 dark:border-gray-700 pt-2">= Elterngeld-Netto</div>
              <div className="mt-3 pt-3 border-t-2 border-green-600">
                <strong>Elterngeld = Elterngeld-Netto × 65-67%</strong>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Wichtig:</strong> Das Elterngeld-Netto unterscheidet sich vom tatsächlichen Netto auf Ihrer Gehaltsabrechnung, da andere Pauschalen verwendet werden. In der Regel liegt das Elterngeld-Netto etwas höher als Ihr tatsächliches Netto.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Beispielrechnung: Elterngeld berechnen"
        icon={<Calculator className="w-5 h-5" />}
        body="Schauen wir uns ein konkretes Beispiel an, um die Elterngeld-Berechnung zu verdeutlichen. Wir nehmen ein durchschnittliches Bruttogehalt von 3.000 EUR monatlich in Steuerklasse 1."
      >
        <div className="space-y-6">
          <div className="bg-muted rounded-lg p-6">
            <h4 className="font-semibold mb-4">Schritt 1: Elterngeld-Netto ermitteln</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <span>Durchschnittliches Bruttogehalt</span>
                <span className="font-bold">3.000,00 EUR</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>- Sozialversicherungspauschale (21%)</span>
                <span>-630,00 EUR</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>- Lohnsteuer (Steuerklasse 1, pauschal)</span>
                <span>-315,00 EUR</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>- Solidaritätszuschlag</span>
                <span>-0,00 EUR</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>- Kirchensteuer (9%, falls Mitglied)</span>
                <span>-28,35 EUR</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t-2 border-primary">
                <span className="font-bold">Elterngeld-Netto</span>
                <span className="font-bold text-lg text-primary">2.026,65 EUR</span>
              </div>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h4 className="font-semibold mb-4">Schritt 2: Elterngeld berechnen</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <span>Elterngeld-Netto</span>
                <span className="font-bold">2.026,65 EUR</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Ersatzrate (Standardfall)</span>
                <span className="font-medium">65%</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t-2 border-green-600 dark:border-green-400">
                <span className="font-bold text-lg">Monatliches Elterngeld</span>
                <span className="font-bold text-2xl text-green-600 dark:text-green-400">1.317,32 EUR</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Basiselterngeld (12 Monate)</h4>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">15.807,84 EUR</div>
              <p className="text-xs text-blue-800 dark:text-blue-200">1.317,32 EUR × 12 Monate</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">ElterngeldPlus (24 Monate)</h4>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">15.807,84 EUR</div>
              <p className="text-xs text-purple-800 dark:text-purple-200">658,66 EUR × 24 Monate</p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">Vergleich: Elterngeld nach Steuerklasse</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Steuerklasse 1 (ledig):</span>
                <strong className="text-green-700 dark:text-green-300">~1.317 EUR</strong>
              </div>
              <div className="flex justify-between">
                <span>Steuerklasse 3 (verheiratet, günstiger):</span>
                <strong className="text-green-700 dark:text-green-300">~1.520 EUR</strong>
              </div>
              <div className="flex justify-between">
                <span>Steuerklasse 5 (verheiratet, teurer):</span>
                <strong className="text-green-700 dark:text-green-300">~1.070 EUR</strong>
              </div>
            </div>
            <p className="text-xs text-green-800 dark:text-green-200 mt-3">
              * Bei gleichem Bruttogehalt von 3.000 EUR - die Steuerklasse macht einen Unterschied von bis zu 450 EUR/Monat!
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Die Ersatzrate: 65%, 67% oder mehr?"
        icon={<TrendingUp className="w-5 h-5" />}
        body="Die Höhe des Elterngeldes hängt nicht nur vom Einkommen ab, sondern auch von der Ersatzrate. Diese liegt zwischen 65% und 67% und kann durch Zuschläge noch erhöht werden."
      >
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold mb-3">Ersatzraten-Staffelung 2026:</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="font-medium">67% Ersatzrate</div>
                <div className="text-sm text-muted-foreground">
                  Bei Elterngeld-Netto unter 1.240 EUR (z.B. Teilzeit, niedriges Einkommen)
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="font-medium">65-67% Ersatzrate (gleitend)</div>
                <div className="text-sm text-muted-foreground">
                  Bei Elterngeld-Netto zwischen 1.240 EUR und 1.240 EUR - Rate sinkt gleitend
                </div>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <div className="font-medium">65% Ersatzrate</div>
                <div className="text-sm text-muted-foreground">
                  Bei Elterngeld-Netto über 1.240 EUR (Standardfall für Vollzeitbeschäftigte)
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Geschwisterbonus (+10%)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Sie erhalten 10% mehr Elterngeld (mindestens 75 EUR) wenn:
              </p>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Ein weiteres Kind unter 3 Jahren im Haushalt lebt</li>
                <li>Zwei weitere Kinder unter 6 Jahren im Haushalt leben</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Mehrlingszuschlag (+300 EUR)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Bei Mehrlingsgeburten erhalten Sie:
              </p>
              <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                <li>Normales Elterngeld für das erste Kind</li>
                <li>+ 300 EUR für jedes weitere Mehrlingskind</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Beispiel mit Geschwisterbonus:</h4>
            <div className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <div className="flex justify-between">
                <span>Basis-Elterngeld:</span>
                <strong>1.317 EUR</strong>
              </div>
              <div className="flex justify-between">
                <span>+ Geschwisterbonus (10%):</span>
                <strong>+132 EUR</strong>
              </div>
              <div className="flex justify-between pt-2 border-t border-blue-300 font-bold">
                <span>Gesamt:</span>
                <strong>1.449 EUR</strong>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Elterngeld optimieren: Steuerklassenwechsel"
        icon={<Info className="w-5 h-5" />}
        body="Ein rechtzeitiger Steuerklassenwechsel kann Ihr Elterngeld deutlich erhöhen. Da die Lohnsteuer bei der Berechnung abgezogen wird, profitieren Sie von einer günstigeren Steuerklasse."
      >
        <div className="space-y-4">
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">Wichtige Fristen:</h4>
            <ul className="text-sm space-y-2 list-disc list-inside text-amber-900 dark:text-amber-100">
              <li>Der Steuerklassenwechsel muss spätestens <strong>7 Monate vor Beginn des Mutterschutzes</strong> erfolgen</li>
              <li>Bei errechneter Geburt am 15. August beginnt der Mutterschutz am 4. Juli</li>
              <li>Steuerklassenwechsel muss also bis spätestens 4. Dezember des Vorjahres beantragt sein</li>
              <li>Planen Sie rechtzeitig - der Wechsel dauert einige Wochen</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-300 dark:border-green-700 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-green-900 dark:text-green-100">Empfehlung für werdende Mütter:</h4>
              <div className="space-y-2 text-sm text-green-900 dark:text-green-100">
                <p className="font-medium">✓ Wechseln Sie in Steuerklasse 3</p>
                <p>Wenn Sie verheiratet sind und in Elternzeit gehen, profitieren Sie von den niedrigeren Steuerabzügen in Klasse 3.</p>
                <p className="text-xs mt-2 pt-2 border-t border-green-300">
                  <strong>Ihr Partner:</strong> Wechselt vorübergehend in Steuerklasse 5 (höhere Abzüge, aber nur während Ihrer Schwangerschaft).
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">Nach der Elternzeit:</h4>
              <div className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
                <p className="font-medium">✓ Zurückwechseln nicht vergessen</p>
                <p>Nach Ende der Elternzeit sollten Sie wieder in eine für Ihre Situation passende Steuerklasse wechseln (meist 4/4).</p>
                <p className="text-xs mt-2 pt-2 border-t border-blue-300">
                  <strong>Hinweis:</strong> Der zu viel/zu wenig gezahlte Steuerbetrag wird über die Steuererklärung ausgeglichen.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-purple-900 dark:text-purple-100">Rechenbeispiel: Auswirkung Steuerklassenwechsel</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white dark:bg-gray-900 rounded p-3">
                <div className="font-medium mb-2">Situation: 3.000 EUR Brutto, 12 Monate vor Geburt</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Steuerklasse 4 (vorher):</span>
                    <strong className="text-red-600 dark:text-red-400">~1.300 EUR Elterngeld</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Steuerklasse 3 (gewechselt):</span>
                    <strong className="text-green-600 dark:text-green-400">~1.520 EUR Elterngeld</strong>
                  </div>
                  <div className="flex justify-between pt-2 border-t font-bold">
                    <span>Vorteil durch Wechsel:</span>
                    <strong className="text-green-600 dark:text-green-400">+220 EUR/Monat</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Über 12 Monate Elternzeit:</span>
                    <strong className="text-green-600 dark:text-green-400">+2.640 EUR mehr!</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        heading="Basiselterngeld vs. ElterngeldPlus"
        icon={<Calculator className="w-5 h-5" />}
        body="Sie haben die Wahl zwischen Basiselterngeld und ElterngeldPlus. Die richtige Wahl hängt von Ihrer Situation und Ihren Plänen ab."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-blue-300 dark:border-blue-700 rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 text-sm font-bold">
                  B
                </div>
                Basiselterngeld
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Dauer:</strong> 12 Monate (14 mit Partnermonate)
                </div>
                <div>
                  <strong>Höhe:</strong> 65-67% vom Elterngeld-Netto
                </div>
                <div>
                  <strong>Arbeit:</strong> Max. 32 Std./Woche möglich
                </div>
                <div>
                  <strong>Optimal für:</strong> Vollständige Elternzeit ohne Teilzeit
                </div>
              </div>
              <div className="mt-4 bg-blue-50 dark:bg-blue-950/20 rounded p-3 text-xs">
                <strong>Beispiel:</strong> 1.317 EUR × 12 Monate = 15.804 EUR
              </div>
            </div>

            <div className="border-2 border-purple-300 dark:border-purple-700 rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300 text-sm font-bold">
                  P
                </div>
                ElterngeldPlus
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Dauer:</strong> 24 Monate (28 mit Partnerschaftsbonus)
                </div>
                <div>
                  <strong>Höhe:</strong> Maximal 50% vom Basiselterngeld
                </div>
                <div>
                  <strong>Arbeit:</strong> Max. 32 Std./Woche möglich
                </div>
                <div>
                  <strong>Optimal für:</strong> Teilzeitarbeit während Elternzeit
                </div>
              </div>
              <div className="mt-4 bg-purple-50 dark:bg-purple-950/20 rounded p-3 text-xs">
                <strong>Beispiel:</strong> 659 EUR × 24 Monate = 15.816 EUR
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">Partnerschaftsbonus (+4 Monate)</h4>
            <p className="text-sm text-green-900 dark:text-green-100 mb-2">
              Arbeiten beide Eltern gleichzeitig 25-32 Stunden/Woche für mindestens 4 Monate, gibt es 4 zusätzliche ElterngeldPlus-Monate für beide Elternteile.
            </p>
            <p className="text-xs text-green-800 dark:text-green-200">
              <strong>Vorteil:</strong> Längere finanzielle Unterstützung bei flexibler Arbeitszeitgestaltung.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Kombination möglich:</h4>
            <p className="text-sm text-blue-900 dark:text-blue-100">
              Sie können Basiselterngeld und ElterngeldPlus kombinieren. Beispiel: 6 Monate Basiselterngeld + 12 Monate ElterngeldPlus. Ein Basismonat = zwei ElterngeldPlus-Monate.
            </p>
          </div>
        </div>
      </ContentSection>

      <FAQSection faqs={faqs} />

      <RelatedLinks
        currentHref="/ratgeber/elterngeld-brutto-netto"
        count={4}
        title="Weitere hilfreiche Rechner"
      />
    </>
  );
}
