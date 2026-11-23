/* ==========================================================================
   GERMAN COURSE — swapped into window.MISSION when German is chosen on the
   menu. To add another language, copy this file (e.g. mission-es.js), change
   the key on the first line (.de → .es) and the texts, and add one
   <script src="mission-es.js"></script> line after this file's in index.html. Only the language parts live here; the map, units, prices and bot
   all come from mission-content.js.

   Same shape as the Hebrew data. The field names stay `he` / `nq` (they mean
   "the target-language text"); for German `nq` is simply the same as `he`.

   Grammar the generator relies on:
     subjects  – nominative, capitalised article ("Der Soldat")
     rels      – carry the verb ("ist neben"); every one takes the dative
     objects   – dative, because they follow a location word ("dem Turm",
                 "der Brücke")
     places    – carry the verb and the "in" ("ist im Norden", "ist in der
                 Stadt"); `prep` is that front part, `stem` the bare noun
   words      – what each single word means, shown when a word is hinted
   ========================================================================== */

(window.LANTERN_COURSES = window.LANTERN_COURSES || {}).de = {

  name: "German", native: "Deutsch", dir: "ltr",   // shown in the menu's language list; dir = text direction

  briefing: [
    "Two countries share a continent: Valdora, the enemy, in the west, and Arden, yours, in the east. Each has two houses. Lose both houses and you lose the match.",
    "First you place your own houses, towers, bridge and trade route. Then the match begins: every German radio message you translate earns Intel, and some of them say where the enemy houses are.",
    "Spend Intel on scout teams, tanks, long-range missiles, airstrikes against the tanks that land in your country, and interceptors against incoming missiles. The enemy does the same, without waiting for you."
  ],

  vocab: {
    truck:   { he: "der Lastwagen", plain: "Lastwagen", en: "truck",   target: true,  note: "Masculine: der Lastwagen. After a location word: dem Lastwagen." },
    house:   { he: "das Haus",      plain: "Haus",      en: "house",   target: true,  note: "Neuter: das Haus. im Haus = in the house. neben dem Haus = next to the house." },
    bridge:  { he: "die Brücke",    plain: "Brücke",    en: "bridge",  target: true,  note: "Feminine: die Brücke. neben der Brücke = next to the bridge." },
    near:    { he: "neben",         plain: "neben",     en: "next to", target: true,  note: "Stands before the landmark. The landmark then takes dem (m./n.) or der (f.)." },
    north:   { he: "der Norden",    plain: "Norden",    en: "north",   target: true,  note: "im Norden = in the north. nördlich = north of." },
    south:   { he: "der Süden",     plain: "Süden",     en: "south",   target: true,  note: "im Süden = in the south. südlich = south of." },
    tower:   { he: "der Turm",      plain: "Turm",      en: "tower",   target: true,  note: "Masculine: der Turm. neben dem Turm = next to the tower." },
    soldier: { he: "der Soldat",    plain: "Soldat",    en: "soldier", target: false, note: "Masculine: der Soldat." },
    jeep:    { he: "der Jeep",      plain: "Jeep",      en: "jeep",    target: false, note: "Masculine: der Jeep." },
    port:    { he: "der Hafen",     plain: "Hafen",     en: "port",    target: false, note: "im Hafen = in the port." },
    not:     { he: "nicht",         plain: "nicht",     en: "not",     target: false, note: "Comes before what it denies: nicht im Haus = not in the house." },
    and:     { he: "und",           plain: "und",       en: "and",     target: false, note: "Joins two things: der Soldat und der Jeep." },
    also:    { he: "auch",          plain: "auch",      en: "also",    target: false, note: "die Brücke ist auch alt = the bridge is also old." },
    /* words the radio uses that are NOT in the reference binder (ref: false) */
    tank:       { he: "der Panzer",      plain: "Panzer",      en: "tank",        ref: false, note: "Masculine: der Panzer." },
    plane:      { he: "das Flugzeug",    plain: "Flugzeug",    en: "plane",       ref: false, note: "Neuter: das Flugzeug." },
    helicopter: { he: "der Hubschrauber", plain: "Hubschrauber", en: "helicopter", ref: false, note: "Masculine: der Hubschrauber." },
    officer:    { he: "der Offizier",    plain: "Offizier",    en: "officer",     ref: false, note: "Masculine: der Offizier." },
    commander:  { he: "der Kommandant",  plain: "Kommandant",  en: "commander",   ref: false, note: "Masculine: der Kommandant." },
    boat:       { he: "das Boot",        plain: "Boot",        en: "boat",        ref: false, note: "Neuter: das Boot." },
    village:    { he: "das Dorf",        plain: "Dorf",        en: "village",     ref: false, note: "im Dorf = in the village." },
    city:       { he: "die Stadt",       plain: "Stadt",       en: "city",        ref: false, note: "Feminine: in der Stadt = in the city." },
    forest:     { he: "der Wald",        plain: "Wald",        en: "forest",      ref: false, note: "im Wald = in the forest." },
    road:       { he: "die Straße",      plain: "Straße",      en: "road",        ref: false, note: "Feminine: neben der Straße = next to the road." },
    river:      { he: "der Fluss",       plain: "Fluss",       en: "river",       ref: false, note: "Masculine: neben dem Fluss = next to the river." },
    east:       { he: "der Osten",       plain: "Osten",       en: "east",        ref: false, note: "im Osten = in the east." },
    west:       { he: "der Westen",      plain: "Westen",      en: "west",        ref: false, note: "im Westen = in the west." },
    behind:     { he: "hinter",          plain: "hinter",      en: "behind",      ref: false, note: "hinter dem Turm = behind the tower." },
    opposite:   { he: "gegenüber",       plain: "gegenüber",   en: "opposite",    ref: false, note: "gegenüber dem Turm = opposite the tower." },
    front:      { he: "vor",             plain: "vor",         en: "in front of", ref: false, note: "vor dem Turm = in front of the tower." },
    the:     { he: "der / die / das", plain: "der", en: "the", target: false, note: "der (masc.), die (fem.), das (neut.). After a location word: dem (masc./neut.), der (fem.)." },
    in:      { he: "im / in der",     plain: "im",  en: "in",  target: false, note: "im = in dem (masc./neut.): im Hafen. Feminine: in der Stadt." },
    of:      { he: "vom",             plain: "vom", en: "of / from", target: false, note: "vom = von dem: nördlich vom Turm = north of the tower." }
  },

  referenceOnlyWords: [
    { plain: "leer",    en: "empty" },
    { plain: "hoch",    en: "tall / high" },
    { plain: "das Lager", en: "camp" },
    { plain: "alt",     en: "old" },
    { plain: "nördlich", en: "north of" },
    { plain: "südlich", en: "south of" }
  ],

  references: {
    r1: { kind: "FIELD REPORT", title: "Field Report 14", file: "FR-14",
          lines: [ { id: "r1a", he: "Der Soldat ist neben der Brücke.", en: "The soldier is next to the bridge." } ] },
    r2: { kind: "PATROL LOG", title: "Patrol Log, Night Shift", file: "PL-03",
          lines: [ { id: "r2a", he: "Der Soldat ist im Haus.", en: "The soldier is in the house." } ] },
    r3: { kind: "MOTOR POOL MEMO", title: "Motor Pool Memo", file: "MP-22",
          lines: [ { id: "r3a", he: "Der Lastwagen ist leer.", en: "The truck is empty." },
                   { id: "r3b", he: "Der Turm ist hoch.",      en: "The tower is tall." } ] },
    r4: { kind: "SURVEY NOTES", title: "Survey Notes, Grid West", file: "SV-07",
          lines: [ { id: "r4a", he: "Der Soldat ist nördlich vom Turm.", en: "The soldier is north of the tower." },
                   { id: "r4b", he: "Der Jeep ist südlich vom Turm.",    en: "The jeep is south of the tower." } ] },
    r5: { kind: "SECTOR ATLAS", title: "Sector Atlas, p. 2", file: "AT-02",
          lines: [ { id: "r5a", he: "Das Lager ist im Norden.", en: "The camp is in the north." },
                   { id: "r5b", he: "Der Hafen ist im Süden.",  en: "The port is in the south." } ] },
    r6: { kind: "SENTRY NOTE", title: "Sentry Note", file: "SN-11",
          lines: [ { id: "r6a", he: "Der Jeep ist neben der Brücke.", en: "The jeep is next to the bridge." } ] },
    r7: { kind: "DEPOT LIST", title: "Depot List", file: "DL-40",
          lines: [ { id: "r7a", he: "Die Brücke ist alt.",    en: "The bridge is old." },
                   { id: "r7b", he: "Der Soldat ist im Turm.", en: "The soldier is in the tower." } ] },
    r8: { kind: "SIGNALS LOG", title: "Signals Log", file: "SG-05",
          lines: [ { id: "r8a", he: "Der Soldat ist nicht im Haus.", en: "The soldier is not in the house." },
                   { id: "r8b", he: "Der Soldat und der Jeep sind im Hafen.", en: "The soldier and the jeep are in the port." } ] },
    r9: { kind: "QUARTERMASTER NOTE", title: "Quartermaster Note", file: "QM-18",
          lines: [ { id: "r9a", he: "Der Jeep ist leer.", en: "The jeep is empty." },
                   { id: "r9b", he: "Der Jeep ist alt, und die Brücke ist auch alt.", en: "The jeep is old, and the bridge is also old." } ] }
  },

  lexicon: {
    subjects: [
      { id: "soldier",    he: "Der Soldat",       en: "soldier" },
      { id: "jeep",       he: "Der Jeep",         en: "jeep" },
      { id: "truck",      he: "Der Lastwagen",    en: "truck" },
      { id: "tank",       he: "Der Panzer",       en: "tank",       fresh: true },
      { id: "plane",      he: "Das Flugzeug",     en: "plane",      fresh: true },
      { id: "helicopter", he: "Der Hubschrauber", en: "helicopter", fresh: true },
      { id: "officer",    he: "Der Offizier",     en: "officer",    fresh: true },
      { id: "commander",  he: "Der Kommandant",   en: "commander",  fresh: true },
      { id: "boat",       he: "Das Boot",         en: "boat",       fresh: true }
    ],
    objectives: [
      { id: "house", he: "Das Haus",  en: "house" },
      { id: "tower", he: "Der Turm",  en: "tower" }
    ],
    places: [
      { id: "north",   he: "ist im Norden",     prep: "ist im",     stem: "Norden", en: "north" },
      { id: "south",   he: "ist im Süden",      prep: "ist im",     stem: "Süden",  en: "south" },
      { id: "camp",    he: "ist im Lager",      prep: "ist im",     stem: "Lager",  en: "camp" },
      { id: "port",    he: "ist im Hafen",      prep: "ist im",     stem: "Hafen",  en: "port" },
      { id: "house",   he: "ist im Haus",       prep: "ist im",     stem: "Haus",   en: "house" },
      { id: "east",    he: "ist im Osten",      prep: "ist im",     stem: "Osten",  en: "east",    fresh: true },
      { id: "west",    he: "ist im Westen",     prep: "ist im",     stem: "Westen", en: "west",    fresh: true },
      { id: "village", he: "ist im Dorf",       prep: "ist im",     stem: "Dorf",   en: "village", fresh: true },
      { id: "city",    he: "ist in der Stadt",  prep: "ist in der", stem: "Stadt",  en: "city",    fresh: true },
      { id: "forest",  he: "ist im Wald",       prep: "ist im",     stem: "Wald",   en: "forest",  fresh: true }
    ],
    rels: [
      { id: "near",     he: "ist neben",     en: "is next to" },
      { id: "behind",   he: "ist hinter",    en: "is behind",      fresh: true },
      { id: "opposite", he: "ist gegenüber", en: "is opposite",    fresh: true },
      { id: "front",    he: "ist vor",       en: "is in front of", fresh: true }
    ],
    objects: [
      { id: "house",   he: "dem Haus",   en: "house" },
      { id: "tower",   he: "dem Turm",   en: "tower" },
      { id: "bridge",  he: "der Brücke", en: "bridge" },
      { id: "camp",    he: "dem Lager",  en: "camp" },
      { id: "port",    he: "dem Hafen",  en: "port" },
      { id: "village", he: "dem Dorf",   en: "village", fresh: true },
      { id: "city",    he: "der Stadt",  en: "city",    fresh: true },
      { id: "forest",  he: "dem Wald",   en: "forest",  fresh: true },
      { id: "road",    he: "der Straße", en: "road",    fresh: true },
      { id: "river",   he: "dem Fluss",  en: "river",   fresh: true }
    ]
  },

  /* single-word meanings for the Hint (lower case, no punctuation) */
  words: {
    "der": "the", "die": "the", "das": "the", "dem": "the (after a location word)",
    "ist": "is", "im": "in the", "in": "in",
    "neben": "next to", "hinter": "behind", "gegenüber": "opposite", "vor": "in front of",
    "soldat": "soldier", "jeep": "jeep", "lastwagen": "truck", "panzer": "tank", "flugzeug": "plane",
    "hubschrauber": "helicopter", "offizier": "officer", "kommandant": "commander", "boot": "boat",
    "haus": "house", "turm": "tower", "brücke": "bridge", "lager": "camp", "hafen": "port",
    "dorf": "village", "stadt": "city", "wald": "forest", "straße": "road", "fluss": "river",
    "norden": "north", "süden": "south", "osten": "east", "westen": "west"
  },

  /* small labels that are written in the course language */
  stamps: { decoded: "entschlüsselt", destroyed: "vernichtet", lantern: "Laterne" }
};
