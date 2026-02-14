/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Steuerklasse 6 - Zweitjob & Nebenjob: Abzüge und Freibeträge 2026",
  description:
    "Steuerklasse 6 gilt für den Zweitjob und Nebenjob. Hohe Steuerabzüge, keine Freibeträge - alle Infos zu Abzügen, Beispielrechnungen und Steuererklärung 2026.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/steuerklasse-6/",
  },
};

export default function Steuerklasse6Page() {
  const content = (
    <>
      <h2>Wer gehört in Steuerklasse 6?</h2>
      <p>
        Die Steuerklasse 6 gilt ausschließlich für zusätzliche Beschäftigungsverhältnisse und wird automatisch zugeordnet:
      </p>
      <ul>
        <li><strong>Zweitjob:</strong> Wenn Sie neben Ihrer Hauptbeschäftigung einen weiteren Job ausüben</li>
        <li><strong>Nebenjob:</strong> Jede zusätzliche sozialversicherungspflichtige Beschäftigung</li>
        <li><strong>Drittjob und weitere Jobs:</strong> Alle weiteren Beschäftigungen nach dem Hauptjob</li>
        <li><strong>Mehrere Arbeitgeber gleichzeitig:</strong> Nur der Hauptarbeitgeber erhält Ihre normale Steuerklasse (1-5)</li>
      </ul>
      <p>
        Wichtig: Steuerklasse 6 gilt nur für sozialversicherungspflichtige Beschäftigungen. Minijobs (bis 556 € in 2026) und selbstständige Tätigkeiten fallen nicht unter Steuerklasse 6.
      </p>
      <p>
        Die Zuordnung erfolgt automatisch: Ihr Hauptarbeitgeber erhält Ihre Lohnsteuerabzugsmerkmale mit Ihrer regulären Steuerklasse (1-5). Alle weiteren Arbeitgeber melden Sie automatisch in Steuerklasse 6 an.
      </p>

      <h2>Abzüge und Freibeträge in Steuerklasse 6</h2>
      <p>
        In der Steuerklasse 6 werden für 2026 keinerlei Freibeträge berücksichtigt:
      </p>
      <ul>
        <li><strong>Grundfreibetrag:</strong> 0 € (wird bereits beim Hauptjob berücksichtigt)</li>
        <li><strong>Arbeitnehmerpauschbetrag:</strong> 0 €</li>
        <li><strong>Sozialausgabenpauschbetrag:</strong> 0 €</li>
        <li><strong>Vorsorgepauschale:</strong> 0 €</li>
        <li><strong>Kinderfreibetrag:</strong> 0 €</li>
        <li><strong>Alle anderen Freibeträge:</strong> 0 €</li>
      </ul>
      <p>
        <strong>Folge der fehlenden Freibeträge:</strong>
      </p>
      <ul>
        <li>Lohnsteuer wird ab dem ersten Euro berechnet</li>
        <li>Sehr hoher Steuersatz von Anfang an (ca. 42% bei höheren Einkommen)</li>
        <li>Zusätzlich Solidaritätszuschlag auf die Lohnsteuer</li>
        <li>Bei Kirchenmitgliedschaft auch Kirchensteuer</li>
      </ul>
      <p>
        Die Sozialversicherungsbeiträge werden jedoch normal berechnet (ca. 20% des Bruttogehalts), wenn die jeweiligen Beitragsbemessungsgrenzen noch nicht durch den Hauptjob erreicht wurden.
      </p>

      <h2>Beispielrechnung Steuerklasse 6</h2>
      <p>
        Bei einem monatlichen Bruttogehalt von 1.500 € im Nebenjob in Steuerklasse 6 (ohne Kirchensteuer):
      </p>
      <ul>
        <li><strong>Bruttogehalt:</strong> 1.500,00 €</li>
        <li><strong>Rentenversicherung (9,3%):</strong> -139,50 €</li>
        <li><strong>Arbeitslosenversicherung (1,3%):</strong> -19,50 €</li>
        <li><strong>Krankenversicherung (7,3% + Zusatzbeitrag ~1,0%):</strong> -124,50 €</li>
        <li><strong>Pflegeversicherung (1,7%):</strong> -25,50 €</li>
        <li><strong>Lohnsteuer:</strong> ca. -530,00 € (ca. 35%)</li>
        <li><strong>Solidaritätszuschlag:</strong> ca. -29,00 €</li>
        <li><strong>Nettogehalt:</strong> ca. 632,00 €</li>
      </ul>
      <p>
        Zum Vergleich: Das gleiche Bruttogehalt würde in anderen Steuerklassen ergeben:
      </p>
      <ul>
        <li><strong>In Steuerklasse 1:</strong> ca. 1.070 € netto (438 € mehr)</li>
        <li><strong>In Steuerklasse 3:</strong> ca. 1.200 € netto (568 € mehr)</li>
        <li><strong>Als Minijob (556 €):</strong> 556 € netto, steuerfrei</li>
      </ul>
      <p>
        Bei einem höheren Nebenverdienst von 2.500 € monatlich:
      </p>
      <ul>
        <li><strong>Lohnsteuer:</strong> ca. -1.050 € (ca. 42%)</li>
        <li><strong>Nettogehalt nach allen Abzügen:</strong> ca. 900 € (nur 36% des Brutto)</li>
      </ul>

      <h2>Vor- und Nachteile der Steuerklasse 6</h2>
      <p>
        <strong>Vorteile:</strong>
      </p>
      <ul>
        <li>Automatische Zuordnung - kein Antrag erforderlich</li>
        <li>Hohe Steuervorauszahlung vermeidet große Nachzahlungen</li>
        <li>Oft Steuererstattung nach Jahresabrechnung</li>
        <li>Transparente Handhabung bei mehreren Jobs</li>
        <li>Regelung ist gesetzlich vorgeschrieben und fair</li>
      </ul>
      <p>
        <strong>Nachteile:</strong>
      </p>
      <ul>
        <li>Extrem hohe monatliche Steuerabzüge (35-45% Lohnsteuer)</li>
        <li>Sehr niedriges Nettoeinkommen aus dem Nebenjob</li>
        <li>Keine Freibeträge werden berücksichtigt</li>
        <li>Pflicht zur Steuererklärung (bei den meisten)</li>
        <li>Zwischenzeitlich weniger verfügbares Geld (bis zur Erstattung)</li>
        <li>Kann demotivierend für Nebenjobs sein</li>
      </ul>

      <h2>Wechsel der Steuerklasse und Alternativen</h2>
      <p>
        <strong>Kann man Steuerklasse 6 vermeiden?</strong>
      </p>
      <p>
        Nein, Steuerklasse 6 ist gesetzlich vorgeschrieben und kann nicht gewechselt werden. Es gibt jedoch Alternativen zum klassischen Zweitjob:
      </p>
      <ul>
        <li><strong>Minijob (bis 556 € in 2026):</strong> Pauschal besteuert, keine Steuerklasse 6, Sie erhalten das volle Brutto</li>
        <li><strong>Midijob (556-2.000 €):</strong> Reduzierte Sozialversicherungsbeiträge, aber ebenfalls Steuerklasse 6</li>
        <li><strong>Selbstständige Nebentätigkeit:</strong> Keine Lohnsteuer, sondern Versteuerung über Einkommensteuererklärung</li>
        <li><strong>Überstunden im Hauptjob:</strong> Werden in Ihrer regulären Steuerklasse versteuert</li>
      </ul>
      <p>
        <strong>Was Sie bei Steuerklasse 6 tun können:</strong>
      </p>
      <ul>
        <li><strong>Hauptjob optimieren:</strong> Prüfen Sie, ob Ihr Hauptjob in der optimalen Steuerklasse ist (bei Verheirateten)</li>
        <li><strong>Freibeträge beantragen:</strong> Sie können beim Finanzamt Freibeträge für den Zweitjob beantragen (z.B. für hohe Werbungskosten)</li>
        <li><strong>Steuererklärung abgeben:</strong> Pflicht bei Steuerklasse 6, führt meist zu Erstattung</li>
        <li><strong>Jobs tauschen:</strong> Wenn möglich, machen Sie den besser bezahlten Job zum Hauptjob</li>
      </ul>
      <p>
        <strong>Freibetrag für Steuerklasse 6 beantragen:</strong>
      </p>
      <p>
        Sie können beim Finanzamt einen Freibetrag für Ihren Zweitjob beantragen, wenn Sie z.B. hohe Fahrtkosten haben:
      </p>
      <ul>
        <li>Formular "Antrag auf Lohnsteuerermäßigung" ausfüllen</li>
        <li>Nachweise für Werbungskosten, Sonderausgaben etc. einreichen</li>
        <li>Freibetrag wird dann monatlich bei der Lohnsteuer berücksichtigt</li>
        <li>Führt zu niedrigeren Abzügen und höherem Netto</li>
      </ul>
      <p>
        <strong>Steuererklärung bei Steuerklasse 6:</strong>
      </p>
      <p>
        Mit Steuerklasse 6 sind Sie in der Regel zur Abgabe einer Steuererklärung verpflichtet. Das ist aber vorteilhaft:
      </p>
      <ul>
        <li>Die zu hoch gezahlte Lohnsteuer wird erstattet</li>
        <li>Werbungskosten, Sonderausgaben und außergewöhnliche Belastungen können geltend gemacht werden</li>
        <li>Der Grundfreibetrag und alle anderen Freibeträge werden bei der Jahresberechnung berücksichtigt</li>
        <li>Oft erhalten Sie mehrere hundert bis tausend Euro zurück</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Warum ist Steuerklasse 6 so teuer?",
      answer:
        "In Steuerklasse 6 werden keine Freibeträge berücksichtigt, da diese bereits beim Hauptjob genutzt werden. Ab dem ersten Euro wird Lohnsteuer berechnet, mit einem sehr hohen Steuersatz (bis zu 42%). Dies ist gesetzlich so vorgesehen, um eine korrekte Versteuerung bei mehreren Jobs zu gewährleisten. Über die Steuererklärung erfolgt dann der Ausgleich.",
    },
    {
      question: "Kann ich Steuerklasse 6 vermeiden oder wechseln?",
      answer:
        "Nein, Steuerklasse 6 ist gesetzlich vorgeschrieben für jeden weiteren Job neben Ihrer Hauptbeschäftigung und kann nicht gewechselt werden. Alternativen sind: Minijob bis 556 € (steuerfrei), selbstständige Nebentätigkeit, oder mehr Überstunden im Hauptjob statt eines Zweitjobs.",
    },
    {
      question: "Bekomme ich die Steuern aus Steuerklasse 6 zurück?",
      answer:
        "In den meisten Fällen ja. Die monatlich abgezogene Lohnsteuer ist meist zu hoch, da die Freibeträge nicht berücksichtigt werden. Bei der Jahressteuererklärung werden alle Einkommen zusammengerechnet und die korrekte Steuer berechnet. Die Differenz wird erstattet. Mit Steuerklasse 6 sind Sie zur Steuererklärung verpflichtet.",
    },
    {
      question: "Lohnt sich ein Zweitjob in Steuerklasse 6 überhaupt?",
      answer:
        "Das hängt von Ihrer Gesamtsituation ab. Monatlich bleibt durch die hohen Abzüge nur etwa 40-60% des Brutto übrig. Über die Steuererklärung erhalten Sie aber einen Teil zurück. Bei niedrigem Gesamteinkommen lohnt sich ein Minijob (bis 556 € steuerfrei) mehr. Bei höherem Einkommen kann sich trotz Steuerklasse 6 ein Zweitjob lohnen.",
    },
    {
      question: "Was ist der Unterschied zwischen Minijob und Steuerklasse 6?",
      answer:
        "Ein Minijob (bis 556 € in 2026) ist pauschal besteuert und sozialversicherungsfrei - Sie erhalten fast das gesamte Brutto als Netto. Bei einem sozialversicherungspflichtigen Zweitjob über 556 € greift automatisch Steuerklasse 6 mit hohen Abzügen. Ein Minijob ist daher oft die bessere Alternative für Nebenjobs.",
    },
    {
      question: "Kann ich bei zwei gleichzeitigen Jobs wählen, welcher der Hauptjob ist?",
      answer:
        "Ja, Sie können selbst entscheiden, welcher Job Ihr Hauptjob ist und in welcher Steuerklasse (1-5) dieser versteuert wird. Sinnvoll ist es, den besser bezahlten Job als Hauptjob zu wählen, da dieser dann in der günstigeren Steuerklasse läuft. Der andere Job wird automatisch mit Steuerklasse 6 versteuert.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/steuerklasse-1", title: "Steuerklasse 1" },
    { href: "/lexikon/steuerklasse-3", title: "Steuerklasse 3" },
    { href: "/lexikon/grundfreibetrag", title: "Grundfreibetrag" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Steuerklasse 6"
      description="Die Steuerklasse 6 gilt für Zweitjobs und Nebenjobs und hat die höchsten Steuerabzüge ohne Freibeträge."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
