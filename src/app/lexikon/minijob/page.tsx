/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Minijob - 556€ Grenze, Steuern & Sozialabgaben 2026",
  description:
    "Alles zum Minijob 2026: 556€ Verdienstgrenze, Pauschalbeiträge für Arbeitgeber, Steuerfreiheit für Arbeitnehmer, Rentenversicherungspflicht mit Opt-out.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/minijob/",
  },
};

export default function MinijobPage() {
  const content = (
    <>
      <h2>Was ist ein Minijob?</h2>
      <p>
        Ein Minijob (auch geringfügige Beschäftigung genannt) ist eine Beschäftigungsform, bei der das monatliche Arbeitsentgelt regelmäßig 556 € nicht übersteigt. Minijobs sind für Arbeitnehmer steuer- und sozialabgabenfrei (mit Ausnahme der Rentenversicherung), während der Arbeitgeber Pauschalbeiträge zahlt.
      </p>

      <h2>Verdienstgrenze beim Minijob 2026</h2>
      <p>
        Die Minijob-Grenze orientiert sich an der Entwicklung des Mindestlohns und beträgt 2026:
      </p>
      <ul>
        <li><strong>556 € pro Monat</strong> maximales regelmäßiges Arbeitsentgelt</li>
        <li>Bei 10 Stunden pro Woche: ca. 556 € bei 13,50 € Mindestlohn</li>
        <li>Die Grenze wird jährlich an den gesetzlichen Mindestlohn angepasst</li>
        <li>Gelegentliche Überschreitungen sind erlaubt, wenn im Jahresdurchschnitt 556 € nicht überschritten werden</li>
      </ul>

      <h2>Steuern und Abgaben für Arbeitnehmer</h2>
      <p>
        Für Minijobber gelten besondere Regelungen bei Steuern und Sozialabgaben:
      </p>
      <ul>
        <li><strong>Lohnsteuer:</strong> Keine Lohnsteuer für den Arbeitnehmer (wird pauschal vom Arbeitgeber gezahlt)</li>
        <li><strong>Krankenversicherung:</strong> Keine Beiträge erforderlich (über Familienversicherung oder eigene Versicherung)</li>
        <li><strong>Pflegeversicherung:</strong> Keine Beiträge</li>
        <li><strong>Arbeitslosenversicherung:</strong> Keine Beiträge, daher auch kein Anspruch auf Arbeitslosengeld</li>
        <li><strong>Rentenversicherung:</strong> Versicherungspflicht mit Opt-out-Möglichkeit (siehe unten)</li>
      </ul>

      <h2>Rentenversicherungspflicht im Minijob</h2>
      <p>
        Seit 2013 besteht auch für Minijobber eine Rentenversicherungspflicht:
      </p>
      <ul>
        <li>Arbeitgeber zahlt pauschal: <strong>15%</strong> zur Rentenversicherung</li>
        <li>Arbeitnehmer zahlt Differenz zum vollen Satz: <strong>3,6%</strong> (18,6% - 15%)</li>
        <li>Bei 556 € Verdienst: Arbeitnehmerbeitrag ca. <strong>20 € pro Monat</strong></li>
        <li><strong>Opt-out möglich:</strong> Sie können sich von der Rentenversicherungspflicht befreien lassen</li>
        <li>Bei Befreiung: Keine Beiträge, aber auch keine Rentenansprüche aus dem Minijob</li>
      </ul>
      <p>
        <strong>Vorteil bei Einzahlung:</strong> Volle Rentenansprüche, Wartezeiten werden erfüllt, Anspruch auf Erwerbsminderungsrente.
      </p>

      <h2>Kosten für den Arbeitgeber</h2>
      <p>
        Der Arbeitgeber zahlt bei einem Minijob Pauschalbeiträge:
      </p>
      <ul>
        <li><strong>Rentenversicherung:</strong> 15% des Verdienstes</li>
        <li><strong>Krankenversicherung:</strong> 13% des Verdienstes</li>
        <li><strong>Pauschale Lohnsteuer:</strong> 2% des Verdienstes (optional, alternativ individuelle Lohnsteuer)</li>
        <li><strong>Umlage U1:</strong> ca. 1% (Krankheitskosten)</li>
        <li><strong>Umlage U2:</strong> ca. 0,4% (Mutterschaftskosten)</li>
        <li><strong>Insolvenzgeldumlage:</strong> 0,06%</li>
        <li><strong>Gesamt: ca. 31,5%</strong> zusätzlich zum Bruttolohn</li>
      </ul>
      <p>
        <strong>Beispiel bei 556 € Minijob:</strong> Der Arbeitgeber zahlt ca. 175 € Pauschalbeiträge, Gesamtkosten also ca. 731 €.
      </p>

      <h2>Mehrere Minijobs gleichzeitig</h2>
      <p>
        Bei mehreren Minijobs gibt es wichtige Regelungen:
      </p>
      <ul>
        <li>Die Verdienste aus allen Minijobs werden zusammengezählt</li>
        <li>Nur der erste Minijob bleibt steuer- und abgabenfrei</li>
        <li>Ab dem zweiten Minijob: Volle Sozialversicherungspflicht, wenn insgesamt über 556 €</li>
        <li>Ein Hauptjob zählt nicht mit - zusätzlich zum Hauptjob ist ein 556-€-Minijob möglich</li>
      </ul>

      <h2>Minijob im Privathaushalt</h2>
      <p>
        Für Minijobs in Privathaushalten (z.B. Putzhilfe, Gartenpflege) gelten reduzierte Abgaben:
      </p>
      <ul>
        <li><strong>Rentenversicherung:</strong> 5% (statt 15%)</li>
        <li><strong>Krankenversicherung:</strong> 5% (statt 13%)</li>
        <li><strong>Umlage U1:</strong> 0,9%</li>
        <li><strong>Gesamt nur ca. 14,6%</strong> Arbeitgeberabgaben</li>
        <li>Vereinfachtes Haushaltsscheckverfahren über Minijob-Zentrale</li>
        <li>Steuerbonus: 20% der Kosten (max. 510 € pro Jahr) absetzbar</li>
      </ul>

      <h2>Urlaubsanspruch und Kündigungsschutz</h2>
      <p>
        Minijobber haben die gleichen arbeitsrechtlichen Ansprüche wie Vollzeitbeschäftigte:
      </p>
      <ul>
        <li>Gesetzlicher Urlaubsanspruch (mindestens 24 Werktage bei 6-Tage-Woche)</li>
        <li>Lohnfortzahlung im Krankheitsfall (nach 4 Wochen Betriebszugehörigkeit)</li>
        <li>Kündigungsschutz nach dem Kündigungsschutzgesetz (in Betrieben mit mehr als 10 Mitarbeitern)</li>
        <li>Anspruch auf Entgeltfortzahlung an Feiertagen</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Muss ich als Minijobber Steuern zahlen?",
      answer:
        "Nein, als Minijobber zahlen Sie keine Steuern. Der Arbeitgeber kann optional eine pauschale Lohnsteuer von 2% zahlen. Für Sie als Arbeitnehmer ist der Minijob steuerfrei und erscheint nicht in Ihrer Steuererklärung.",
    },
    {
      question: "Sollte ich in die Rentenversicherung einzahlen oder mich befreien lassen?",
      answer:
        "Einzahlen lohnt sich meist: Für ca. 20 € monatlich erwerben Sie volle Rentenansprüche, erfüllen Wartezeiten schneller und haben Anspruch auf Erwerbsminderungsrente. Die Befreiung ist nur sinnvoll, wenn Sie bereits anderweitig rentenversichert sind oder das Geld dringend benötigen.",
    },
    {
      question: "Kann ich einen Minijob neben meinem Hauptjob ausüben?",
      answer:
        "Ja, zusätzlich zu einem sozialversicherungspflichtigen Hauptjob können Sie einen steuerfreien Minijob bis 556 € ausüben. Wichtig: Der Arbeitgeber des Hauptjobs muss nicht informiert werden, es sei denn, es besteht ein Konkurrenzverbot im Arbeitsvertrag.",
    },
    {
      question: "Was passiert, wenn ich die 556 € Grenze überschreite?",
      answer:
        "Gelegentliche Überschreitungen sind erlaubt, solange im Jahresdurchschnitt (6.672 € pro Jahr) die Grenze nicht überschritten wird. Bei dauerhafter Überschreitung wird der Job sozialversicherungspflichtig und kann zum Midijob werden (Gleitzone 556-2.000 €).",
    },
    {
      question: "Habe ich als Minijobber Anspruch auf Urlaubsgeld und Weihnachtsgeld?",
      answer:
        "Das hängt vom Arbeitsvertrag und eventuellen Tarifverträgen ab. Es besteht kein gesetzlicher Anspruch auf Urlaubs- oder Weihnachtsgeld, aber viele Arbeitgeber zahlen dies freiwillig. Wichtig: Sonderzahlungen werden auf die 556-€-Grenze angerechnet.",
    },
    {
      question: "Kann ich mit einem Minijob krankenversichert bleiben?",
      answer:
        "Der Minijob selbst bietet keine Krankenversicherung. Sie müssen anderweitig versichert sein: über die Familienversicherung (bei Ehepartnern), freiwillig gesetzlich oder privat. Ohne anderweitige Versicherung müssen Sie sich freiwillig gesetzlich versichern (ca. 200 € monatlich Mindestbeitrag).",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/midijob", title: "Midijob" },
    { href: "/lexikon/rentenversicherung", title: "Rentenversicherung" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Minijob"
      description="Ein Minijob ist eine geringfügige Beschäftigung mit maximal 556 € monatlichem Verdienst, die für Arbeitnehmer steuer- und weitgehend sozialabgabenfrei ist."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
