/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Kirchensteuer - Definition & Berechnung 2026",
  description:
    "Was ist die Kirchensteuer? Wer muss sie zahlen und wie wird sie berechnet? Alle Informationen zur Kirchensteuer 2026 in Deutschland.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/kirchensteuer/",
  },
  openGraph: {
    title: "Kirchensteuer - Definition & Berechnung 2026",
    description:
      "Was ist die Kirchensteuer? Wer muss sie zahlen und wie wird sie berechnet? Alle Informationen zur Kirchensteuer 2026 in Deutschland.",
    url: "https://gehaltly.de/lexikon/kirchensteuer/",
    siteName: "gehaltly.de",
    type: "article",
  },
};

export default function KirchensteuerPage() {
  const content = (
    <>
      <h2>Was ist die Kirchensteuer?</h2>
      <p>
        Die Kirchensteuer ist eine Steuer, die Mitglieder einer steuererhebenden Religionsgemeinschaft in Deutschland zahlen. Sie wird vom Staat im Auftrag der Kirchen eingezogen und direkt an diese weitergeleitet.
      </p>

      <h2>Wer muss Kirchensteuer zahlen?</h2>
      <p>
        Kirchensteuerpflichtig sind alle Mitglieder folgender Religionsgemeinschaften:
      </p>
      <ul>
        <li>Römisch-katholische Kirche</li>
        <li>Evangelische Kirche (EKD und Landeskirchen)</li>
        <li>Altkatholische Kirche</li>
        <li>Israelitische Kultusgemeinden (Jüdische Gemeinden)</li>
        <li>Freireligiöse Gemeinden</li>
      </ul>

      <h2>Wie hoch ist die Kirchensteuer?</h2>
      <p>
        Die Kirchensteuer beträgt in Deutschland:
      </p>
      <ul>
        <li><strong>9% der Lohnsteuer</strong> in den meisten Bundesländern</li>
        <li><strong>8% der Lohnsteuer</strong> in Bayern und Baden-Württemberg</li>
      </ul>
      <p>
        Die Kirchensteuer wird prozentual von der berechneten Lohnsteuer erhoben, nicht vom Bruttoeinkommen.
      </p>

      <h2>Beispielrechnung Kirchensteuer</h2>
      <p>
        Bei einem monatlichen Bruttogehalt von 3.500 € und einer Lohnsteuer von 450 € beträgt die Kirchensteuer:
      </p>
      <ul>
        <li>In Bayern/Baden-Württemberg: 450 € × 8% = <strong>36 €</strong></li>
        <li>In anderen Bundesländern: 450 € × 9% = <strong>40,50 €</strong></li>
      </ul>

      <h2>Kirchensteuer als Sonderausgabe</h2>
      <p>
        Die gezahlte Kirchensteuer kann in der Steuererklärung als Sonderausgabe geltend gemacht werden. Dadurch reduziert sich das zu versteuernde Einkommen im Folgejahr, was zu einer teilweisen Erstattung führt.
      </p>

      <h2>Kirchenaustritt und Kirchensteuer</h2>
      <p>
        Wer aus der Kirche austritt, muss ab dem Folgemonat keine Kirchensteuer mehr zahlen. Der Austritt erfolgt beim zuständigen Standesamt oder Amtsgericht und kostet je nach Bundesland zwischen 0 € und 60 €.
      </p>

      <h2>Besondere Kirchensteuer</h2>
      <p>
        Bei Kapitaleinkünften (z.B. Zinsen, Dividenden) wird eine <strong>Kirchensteuer auf die Kapitalertragsteuer</strong> (Abgeltungsteuer) erhoben. Diese beträgt ebenfalls 8% bzw. 9% der Kapitalertragsteuer und wird direkt von der Bank einbehalten, wenn ein Sperrvermerk beim Bundeszentralamt für Steuern hinterlegt ist.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wer zahlt keine Kirchensteuer?",
      answer:
        "Keine Kirchensteuer zahlen Personen, die keiner steuererhebenden Religionsgemeinschaft angehören, Mitglieder nicht-steuererhebender Religionsgemeinschaften (z.B. Muslime, Buddhisten, Zeugen Jehovas) sowie Personen, die aus der Kirche ausgetreten sind.",
    },
    {
      question: "Wird die Kirchensteuer vom Brutto oder Netto berechnet?",
      answer:
        "Die Kirchensteuer wird weder vom Brutto noch vom Netto berechnet, sondern von der Lohnsteuer. Sie beträgt 8% (Bayern, Baden-Württemberg) bzw. 9% (andere Bundesländer) der berechneten Lohnsteuer.",
    },
    {
      question: "Kann ich die Kirchensteuer zurückbekommen?",
      answer:
        "Ja, die Kirchensteuer kann als Sonderausgabe in der Steuererklärung angegeben werden. Dadurch reduziert sich das zu versteuernde Einkommen, was zu einer teilweisen Erstattung führen kann.",
    },
    {
      question: "Was passiert, wenn ich die Kirchensteuer nicht zahle?",
      answer:
        "Die Kirchensteuer ist eine gesetzliche Steuer in Deutschland. Wer sie nicht zahlt, muss mit Mahnungen, Säumniszuschlägen und im Extremfall mit Vollstreckungsmaßnahmen des Finanzamts rechnen. Die einzige legale Möglichkeit, die Kirchensteuer nicht zu zahlen, ist der Kirchenaustritt.",
    },
    {
      question: "Gibt es eine Kappungsgrenze bei der Kirchensteuer?",
      answer:
        "Ja, in einigen Bundesländern gibt es eine Kappungsgrenze (auch Kirchensteuerbegrenzung genannt). Übersteigt die Kirchensteuer einen bestimmten Prozentsatz des zu versteuernden Einkommens (meist 2,75% bis 4%), wird sie auf diesen Betrag begrenzt. Dies gilt jedoch nur für sehr hohe Einkommen.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/lohnsteuer", title: "Lohnsteuer" },
    { href: "/lexikon/solidaritaetszuschlag", title: "Solidaritätszuschlag" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Kirchensteuer"
      description="Die Kirchensteuer ist eine Steuer für Mitglieder steuererhebender Religionsgemeinschaften in Deutschland."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
