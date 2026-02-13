export const TAX_2026 = {
  grundfreibetrag: 12_348,
  grundfreibetragVerheiratet: 24_696,
  kinderfreibetrag: 9_756,

  // Einkommensteuer Zonen (Jahresbetrag)
  zone2Start: 12_349,
  zone2End: 17_005,
  zone3Start: 17_006,
  zone3End: 66_760,
  zone4Start: 66_761,
  zone4End: 277_825,
  zone5Start: 277_826,

  // Solidaritatszuschlag
  soliSatz: 0.055,
  soliFreigrenze: 18_130,
  soliFreigrenzeVerheiratet: 36_260,
  soliMilderungszone: 0.119, // 11.9% Milderungszone

  // Sozialversicherung (Gesamtsatz)
  rvSatz: 0.186,
  alvSatz: 0.026,
  kvSatz: 0.146,
  kvZusatzbeitragDurchschnitt: 0.029,
  pvSatz: 0.036,
  pvKinderlosZuschlag: 0.006,

  // Pflegeversicherung Abschlage pro Kind unter 25
  pvAbschlagKind: 0.0025,
  pvMaxAbschlag: 5, // max 5 Kinder Abschlag

  // Sachsen Sonderregel Pflegeversicherung
  pvSachsenAN: 0.022,
  pvSachsenAG: 0.014,

  // Beitragsbemessungsgrenzen (monatlich)
  bbgKvPv: 5_812.50,
  bbgRvAlv: 8_450,

  // Versicherungspflichtgrenze
  versicherungspflichtgrenze: 77_400,

  // Minijob / Midijob
  minijobGrenze: 556,
  midijobGrenze: 2_000,

  // Midijob Gleitzone Faktor
  midijobFaktor: 0.6846,
} as const;
