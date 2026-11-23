/* ==========================================================================
   MISSION CONTENT — edit this file to change the demo.
   --------------------------------------------------------------------------
   The truck is PARKED for the whole mission. One long Hebrew field report
   says where; most of the report is routine chatter. The player picks the
   few key words (WORD DETECTIVE). While they work, short enemy transmissions
   break in and must be rebuilt in English from tiles (SENTENCE BUILDER).

   Sections:
     1. meta           – title, briefing text
     2. vocab          – every Hebrew word/prefix the mission uses
     3. map            – map sites (positions in a 120 x 80 grid)
     4. references     – reference documents (Hebrew + English)
     5b. ops           – the map game: currency, payouts, actions, sectors
     5c. home          – your own country, the placement round, the enemy bot
     5. investigation  – the report (per difficulty), key concepts, hints,
                         tutorial, timed transmissions, false-report order
     6. finalPlot      – the last map decision and its feedback

   Hebrew tips:
     - Write Hebrew normally; the page handles right-to-left display.
     - `he` is the plain spelling, `nq` the same text with vowel points.
       Both must have the same number of words, in the same order.
     - Use the Hebrew maqaf "־" for prefix notation (e.g. "ל־").
     - Use the geresh "׳" in ג׳יפ.
   ========================================================================== */

window.MISSION = {

  /* 1. META ---------------------------------------------------------------- */
  meta: {
    codename: "SIGNALS DESK",
    region: "VALDORA",          // country name shown on the globe and panels
briefing: [
      "Two countries share a continent: Valdora, the enemy, in the west, and Arden, yours, in the east. Each has two houses. Lose both houses and you lose the match.",
      "First you place your own houses, towers, bridge and trade route. Then the match begins: every Hebrew radio message you translate earns Intel, and some of them say where the enemy houses are.",
      "Spend Intel on scout teams, tanks, long-range missiles, airstrikes against the tanks that land in your country, and interceptors against incoming missiles. The enemy does the same, without waiting for you."
    ],
    startTime: "06:00"
  },

  /* 2. VOCAB --------------------------------------------------------------
     target: true  → one of the mission's core words
     note          → shown in the notebook                                   */
  vocab: {
    truck:   { he: "מַשָּׂאִית", plain: "משאית", en: "truck",  target: true, note: "Appears as המשאית, “the truck”." },
    house:   { he: "בַּיִת",    plain: "בית",   en: "house",  target: true, note: "הבית = the house. בבית = in the house." },
    bridge:  { he: "גֶּשֶׁר",    plain: "גשר",   en: "bridge", target: true, note: "לגשר = of / to the bridge." },
    near:    { he: "לְיַד",     plain: "ליד",   en: "near",   target: true, note: "A separate word, placed before the landmark." },
    north:   { he: "צָפוֹן",    plain: "צפון",  en: "north",  target: true, note: "בצפון = in the north. צפונית ל־ = north of." },
    south:   { he: "דָּרוֹם",   plain: "דרום",  en: "south",  target: true, note: "בדרום = in the south. דרומית ל־ = south of." },
    tower:   { he: "מִגְדָּל",   plain: "מגדל",  en: "tower",  target: true, note: "המגדל = the tower." },
    soldier: { he: "חַיָּל",    plain: "חייל",  en: "soldier", target: false, note: "החייל = the soldier." },
    jeep:    { he: "גִּ׳יפּ",    plain: "ג׳יפ",  en: "jeep",   target: false, note: "הג׳יפ = the jeep." },
    port:    { he: "נָמָל",    plain: "נמל",   en: "port",   target: false, note: "בנמל = in the port." },
    not:     { he: "לֹא",      plain: "לא",    en: "not",    target: false, note: "Placed before what it denies: לא בבית = not in the house." },
    and:     { he: "ו־",       plain: "ו־",    en: "and",    target: false, note: "Attached to the front of the next word: ו + הגשר → והגשר." },
    also:    { he: "גַּם",      plain: "גם",    en: "also",   target: false, note: "Often with ו in front: וגם = and also." },
    /* words the radio uses that are NOT in the reference binder (ref: false) */
    tank:       { he: "טַנְק",     plain: "טנק",    en: "tank",        ref: false, note: "הטנק = the tank." },
    plane:      { he: "מָטוֹס",    plain: "מטוס",   en: "plane",       ref: false, note: "המטוס = the plane." },
    helicopter: { he: "מַסּוֹק",    plain: "מסוק",   en: "helicopter",  ref: false, note: "המסוק = the helicopter." },
    officer:    { he: "קָצִין",    plain: "קצין",   en: "officer",     ref: false, note: "הקצין = the officer." },
    commander:  { he: "מְפַקֵּד",   plain: "מפקד",   en: "commander",   ref: false, note: "המפקד = the commander." },
    boat:       { he: "סִירָה",    plain: "סירה",   en: "boat",        ref: false, note: "הסירה = the boat." },
    village:    { he: "כְּפָר",     plain: "כפר",    en: "village",     ref: false, note: "בכפר = in the village." },
    city:       { he: "עִיר",      plain: "עיר",    en: "city",        ref: false, note: "בעיר = in the city." },
    forest:     { he: "יַעַר",     plain: "יער",    en: "forest",      ref: false, note: "ביער = in the forest." },
    road:       { he: "כְּבִישׁ",    plain: "כביש",   en: "road",        ref: false, note: "הכביש = the road." },
    river:      { he: "נָהָר",     plain: "נהר",    en: "river",       ref: false, note: "הנהר = the river." },
    east:       { he: "מִזְרָח",    plain: "מזרח",   en: "east",        ref: false, note: "במזרח = in the east." },
    west:       { he: "מַעֲרָב",    plain: "מערב",   en: "west",        ref: false, note: "במערב = in the west." },
    behind:     { he: "מֵאֲחוֹרֵי",  plain: "מאחורי", en: "behind",      ref: false, note: "A separate word, placed before the landmark." },
    opposite:   { he: "מוּל",      plain: "מול",    en: "opposite",    ref: false, note: "A separate word, placed before the landmark." },
    front:      { he: "לִפְנֵי",    plain: "לפני",   en: "in front of", ref: false, note: "A separate word, placed before the landmark." },
    the:     { he: "ה־",       plain: "ה־",    en: "the",    target: false, note: "Attached to the front of a noun: ה + בית → הבית." },
    in:      { he: "ב־",       plain: "ב־",    en: "in",     target: false, note: "Attached: ב + הבית → בבית (the ה drops out)." },
    of:      { he: "ל־",       plain: "ל־",    en: "to / of", target: false, note: "Attached: ל + הגשר → לגשר (the ה drops out)." }
  },

  /* Words that only appear in references (listed in the debrief). */
  referenceOnlyWords: [
    { plain: "ריק", nq: "רֵיק", en: "empty (ריקה for a feminine noun)" },
    { plain: "גבוה", nq: "גָּבֹהַּ", en: "tall" },
    { plain: "מחנה", nq: "מַחֲנֶה", en: "camp" },
    { plain: "ישן", nq: "יָשָׁן", en: "old" }
  ],

  /* 3. MAP ----------------------------------------------------------------
     The country is drawn on a 120 x 80 grid (x: west→east, y: north→south),
     placed on the globe at globe.lat / globe.lon. 1 grid unit ≈ 0.4°.
     The river winds east–west through the middle (y ≈ 40) and the trade
     route crosses it only at the bridge (60, 40).
     sites: x,y = the ground point of each landmark (bottom-centre of the
       icon; centre for the bridge). sprite: house | tower | bridge.
       where = plain description used in the keyboard site list.
     routes: trade-route lines as lists of [x, y] points. Keep them off the
       river except through the bridge. seed = planet shape.               */
  map: {
    globe: { lat: 18, lon: 42, seed: 11 },
    sites: [
      { id: "house_ne", sprite: "house",  x: 88, y: 20, label: "House",  where: "north bank, east" },
      { id: "tower_n",  sprite: "tower",  x: 104, y: 18, label: "Tower",  where: "north bank, east" },
      { id: "bridge",   sprite: "bridge", x: 60, y: 40, label: "Bridge", where: "river crossing" },
      { id: "house_s",  sprite: "house",  x: 14, y: 72, label: "House",  where: "south bank, west" },
      { id: "tower_s",  sprite: "tower",  x: 30, y: 72, label: "Tower",  where: "south bank, west" }
    ],
    routes: [
      [[-22, 24], [2, 24], [10, 23], [26, 26], [44, 30], [60, 34], [60, 46], [48, 58], [34, 75], [22, 75], [14, 75], [2, 82], [-12, 92]],
      [[60, 34], [72, 27], [88, 23], [104, 21], [120, 16], [140, 10]]
    ],
    routeName: "TRADE ROUTE",
    routeLabelAt: [50, 21]   // where the route's name tag sits
  },

  /* 4. REFERENCES ---------------------------------------------------------
     Short documents. Each line has an id so hints can point at it.
     Every word of the report and the transmissions appears in at least one
     line here, but no line reproduces a key sentence with its translation. */
  references: {
    r1: { kind: "FIELD REPORT", title: "Field Report 14", file: "FR-14",
          lines: [ { id: "r1a", he: "החייל ליד הגשר.", nq: "הַחַיָּל לְיַד הַגֶּשֶׁר.", tr: "ha-chayal leyad ha-gesher", en: "The soldier is near the bridge." } ] },
    r2: { kind: "PATROL LOG", title: "Patrol Log, Night Shift", file: "PL-03",
          lines: [ { id: "r2a", he: "החייל בבית.", nq: "הַחַיָּל בַּבַּיִת.", tr: "ha-chayal ba-bayit", en: "The soldier is in the house." } ] },
    r3: { kind: "MOTOR POOL MEMO", title: "Motor Pool Memo", file: "MP-22",
          lines: [ { id: "r3a", he: "המשאית ריקה.", nq: "הַמַּשָּׂאִית רֵיקָה.", tr: "ha-masa'it reka", en: "The truck is empty." },
                   { id: "r3b", he: "המגדל גבוה.", nq: "הַמִּגְדָּל גָּבֹהַּ.", tr: "ha-migdal gavo'ah",  en: "The tower is tall." } ] },
    r4: { kind: "SURVEY NOTES", title: "Survey Notes, Grid West", file: "SV-07",
          lines: [ { id: "r4a", he: "החייל צפונית למגדל.", nq: "הַחַיָּל צְפוֹנִית לַמִּגְדָּל.", tr: "ha-chayal tsfonit la-migdal", en: "The soldier is north of the tower." },
                   { id: "r4b", he: "הג׳יפ דרומית למגדל.", nq: "הַגִּ׳יפּ דְּרוֹמִית לַמִּגְדָּל.", tr: "ha-jip dromit la-migdal", en: "The jeep is south of the tower." } ] },
    r5: { kind: "SECTOR ATLAS", title: "Sector Atlas, p. 2", file: "AT-02",
          lines: [ { id: "r5a", he: "המחנה בצפון.", nq: "הַמַּחֲנֶה בַּצָּפוֹן.", tr: "ha-machane ba-tsafon", en: "The camp is in the north." },
                   { id: "r5b", he: "הנמל בדרום.", nq: "הַנָּמָל בַּדָּרוֹם.", tr: "ha-namal ba-darom", en: "The port is in the south." } ] },
    r6: { kind: "SENTRY NOTE", title: "Sentry Note", file: "SN-11",
          lines: [ { id: "r6a", he: "הג׳יפ ליד הגשר.", nq: "הַגִּ׳יפּ לְיַד הַגֶּשֶׁר.", tr: "ha-jip leyad ha-gesher", en: "The jeep is near the bridge." } ] },
    r7: { kind: "DEPOT LIST", title: "Depot List", file: "DL-40",
          lines: [ { id: "r7a", he: "הגשר ישן.", nq: "הַגֶּשֶׁר יָשָׁן.", tr: "ha-gesher yashan",  en: "The bridge is old." },
                   { id: "r7b", he: "החייל במגדל.", nq: "הַחַיָּל בַּמִּגְדָּל.", tr: "ha-chayal ba-migdal", en: "The soldier is in the tower." } ] },
    r8: { kind: "SIGNALS LOG", title: "Signals Log", file: "SG-05",
          lines: [ { id: "r8a", he: "החייל לא בבית.", nq: "הַחַיָּל לֹא בַּבַּיִת.", tr: "ha-chayal lo ba-bayit", en: "The soldier is not in the house." },
                   { id: "r8b", he: "החייל והג׳יפ בנמל.", nq: "הַחַיָּל וְהַגִּ׳יפּ בַּנָּמָל.", tr: "ha-chayal ve-ha-jip ba-namal", en: "The soldier and the jeep are in the port." } ] },
    r9: { kind: "QUARTERMASTER NOTE", title: "Quartermaster Note", file: "QM-18",
          lines: [ { id: "r9a", he: "הג׳יפ ריק.", nq: "הַגִּ׳יפּ רֵיק.", tr: "ha-jip rek", en: "The jeep is empty." },
                   { id: "r9b", he: "הג׳יפ ישן, וגם הגשר ישן.", nq: "הַגִּ׳יפּ יָשָׁן, וְגַם הַגֶּשֶׁר יָשָׁן.", tr: "ha-jip yashan, ve-gam ha-gesher yashan", en: "The jeep is old, and the bridge is also old." } ] }
  },

  /* 5. INVESTIGATION ------------------------------------------------------
     To add another mission, copy this block and change the texts.

     refs          – documents in the binder
     timing        – after: seconds between confirming a word and the
                     transmission that follows; max: transmissions per mission
     difficulty    – per level: timer (seconds per transmission), tiles
                     (English tiles offered in Sentence Builder), marks (how
                     much the binder helps with the inspected word: "word"
                     marks it in the lines, "file" only names the files,
                     "none" gives no help)
     concepts      – the ideas a keyword can stand for. A report word counts
                     for a concept when it contains one of its `stems`, so
                     הבית, בבית and והבית all count as "house".
                       kind  – how feedback names the idea without translating
                       vocab – notebook entry written when the analysis is confirmed
                       hint  – optional hint; `line` is flagged in the binder
     stems         – (optional) binder look-up roots for report words whose
                     root cannot be found by removing a prefix
     reports       – one report per difficulty:
                       he / nq   – the report (plain / with vowel points)
                       essential – concept ids the summary must contain
                                   (also the number of keyword slots)
                       refs      – (optional) binder files for this level;
                                   leave out to use every file in `refs`
                       objective – shown above the keyword slots
                       confirmed – shown once the analysis is accepted
     guide         – the walkthrough's worked example: a report word (by its
                     root) that appears in two or more binder lines, the
                     English word those lines share, and the choices offered
     transmissions – the timed Sentence Builder puzzles, in the order they
                     arrive. THIS IS THE GAME: timing.max of them are played.
                       fact – (optional) the lead this message gives about
                              the truck; leave out for routine chatter
                       uses        – vocab ids of its content words
                       answer      – English tiles in the correct order
                       distractors – wrong tiles, most tempting first; each
                                     difficulty takes as many as it needs
                       gloss       – word meanings shown in the feedback
     mapUpdates    – what the map shows once the analysis is confirmed
     transmit      – after the analysis the player sends the enemy a false
                     message on the desk transmitter (see the old format)   */
  investigation: {
    time: "06:10",
    freq: "41.20 MHz",
    refs: ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9"],
    timing: { max: 5 },
    summary: "The truck is near a house. That house is near a tower. The tower is in the north. Now find the spot on the map.",
    difficulty: {
      beginner: { label: "Beginner", timer: 90, tiles: 6, marks: "none" },
      standard: { label: "Standard", timer: 60, tiles: 7, marks: "none" },
      advanced: { label: "Advanced", timer: 40, tiles: 8, marks: "none" }
    },

    concepts: {
      truck:  { vocab: "truck",  kind: "the vehicle", stems: ["משאית"],
                hint: { ref: "r3", line: "r3a", text: "One key word is the vehicle itself. The Motor Pool Memo names it in its first line." } },
      near:   { vocab: "near",   kind: "a position word", stems: ["ליד"],
                hint: { ref: "r1", line: "r1a", text: "One key word is a short position word that stands on its own between two nouns. Field Report 14 uses it." } },
      house:  { vocab: "house",  kind: "a landmark", stems: ["בית"],
                hint: { ref: "r2", line: "r2a", text: "One key word is a landmark. In the Patrol Log it hides inside a longer word, right after a ב." } },
      tower:  { vocab: "tower",  kind: "a second landmark", stems: ["מגדל"],
                hint: { ref: "r3", line: "r3b", text: "Another landmark is described in the second line of the Motor Pool Memo." } },
      north:  { vocab: "north",  kind: "a compass direction", stems: ["צפון"],
                hint: { ref: "r5", line: "r5a", text: "One key word is a compass direction. The Sector Atlas has it with a ב in front; the Survey Notes show a longer form ending in ‑ית." } },
      bridge: { vocab: "bridge", kind: "the point the direction is measured from", stems: ["גשר"],
                hint: { ref: "r1", line: "r1a", text: "The last key word is the landmark the direction is measured from. Field Report 14 ends with it; in the report it has a ל attached." } }
    },
    stems: { "דרומית": "דרום" },

    reports: {
      beginner: {
        he: "הג׳יפ בדרום. המשאית ליד הבית. הבית ליד המגדל. המגדל בצפון.",
        nq: "הַגִּ׳יפּ בַּדָּרוֹם. הַמַּשָּׂאִית לְיַד הַבַּיִת. הַבַּיִת לְיַד הַמִּגְדָּל. הַמִּגְדָּל בַּצָּפוֹן.",
        essential: ["truck", "house", "tower"],
        refs: ["r1", "r2", "r3", "r4", "r5", "r6"],
        objective: "Find 3 key words: the vehicle, and the two landmarks it is parked by.",
        confirmed: "הַמַּשָּׂאִית לְיַד הַבַּיִת = the truck is near the house. הַבַּיִת לְיַד הַמִּגְדָּל = the house is near the tower. הַמִּגְדָּל בַּצָּפוֹן = the tower is in the north."
      },
      standard: {
        he: "הג׳יפ בדרום. המשאית ליד הבית. הבית ליד המגדל. המגדל בצפון.",
        nq: "הַגִּ׳יפּ בַּדָּרוֹם. הַמַּשָּׂאִית לְיַד הַבַּיִת. הַבַּיִת לְיַד הַמִּגְדָּל. הַמִּגְדָּל בַּצָּפוֹן.",
        essential: ["truck", "near", "house", "tower", "north"],
        refs: ["r1", "r2", "r3", "r4", "r5", "r6"],
        objective: "Find the 5 key words: what is parked, and where.",
        confirmed: "הַמַּשָּׂאִית לְיַד הַבַּיִת = the truck is near the house. הַבַּיִת לְיַד הַמִּגְדָּל = the house is near the tower. הַמִּגְדָּל בַּצָּפוֹן = the tower is in the north."
      },
      advanced: {
        he: "הג׳יפ דרומית לגשר. המשאית לא בנמל. המשאית ליד הבית. הבית ליד המגדל. המגדל צפונית לגשר.",
        nq: "הַגִּ׳יפּ דְּרוֹמִית לַגֶּשֶׁר. הַמַּשָּׂאִית לֹא בַּנָּמָל. הַמַּשָּׂאִית לְיַד הַבַּיִת. הַבַּיִת לְיַד הַמִּגְדָּל. הַמִּגְדָּל צְפוֹנִית לַגֶּשֶׁר.",
        essential: ["truck", "near", "house", "tower", "north", "bridge"],
        objective: "Find the 6 key words that pin down where the truck is parked.",
        confirmed: "הַמַּשָּׂאִית לְיַד הַבַּיִת = the truck is near the house. הַבַּיִת לְיַד הַמִּגְדָּל = the house is near the tower. הַמִּגְדָּל צְפוֹנִית לַגֶּשֶׁר = the tower is north of the bridge."
      }
    },

    guide: { stem: "ג׳יפ", answer: "jeep", vocab: "jeep", options: ["near", "jeep", "bridge", "tower"] },

    /* LEXICON — the radio messages are written from these lists, one per round.
       A message is  subject + place  ("the jeep is in the south")  or  subject + relation + object  ("the tank is
       behind the tower"), always three English tiles. fresh: true marks a word that is NOT in the reference binder.
       newFrom, newEvery – when a never-seen word is brought in (always one per message). Words already met come
                    back in later messages and have to be remembered.
       leadChance – how often a message is a true statement about an enemy house or tower instead of chatter
       id         – matches a vocab entry, so a decoded word is written in the notebook
       places     – `he` carries the attached ב ("in"); `stem` is the bare word, shown when a hint is used       */
    lexicon: {
      newFrom: 3,       // the first never-seen word arrives after this many correct decodes ...
      newEvery: 3,      // ... and another one only every this many decodes after that, one word at a time
      leadChance: 0.3,
      subjects: [
        { id: "soldier",    he: "החייל",  nq: "הַחַיָּל",    en: "soldier" },
        { id: "jeep",       he: "הג׳יפ",  nq: "הַגִּ׳יפּ",    en: "jeep" },
        { id: "truck",      he: "המשאית", nq: "הַמַּשָּׂאִית", en: "truck" },
        { id: "tank",       he: "הטנק",   nq: "הַטַּנְק",    en: "tank",       fresh: true },
        { id: "plane",      he: "המטוס",  nq: "הַמָּטוֹס",   en: "plane",      fresh: true },
        { id: "helicopter", he: "המסוק",  nq: "הַמַּסּוֹק",   en: "helicopter", fresh: true },
        { id: "officer",    he: "הקצין",  nq: "הַקָּצִין",   en: "officer",    fresh: true },
        { id: "commander",  he: "המפקד",  nq: "הַמְּפַקֵּד",  en: "commander",  fresh: true },
        { id: "boat",       he: "הסירה",  nq: "הַסִּירָה",   en: "boat",       fresh: true }
      ],
      objectives: [   // only used as the subject of a lead
        { id: "house", he: "הבית",  nq: "הַבַּיִת",   en: "house" },
        { id: "tower", he: "המגדל", nq: "הַמִּגְדָּל", en: "tower" }
      ],
      places: [
        { id: "north",   he: "בצפון", nq: "בַּצָּפוֹן",  stem: "צפון", en: "north" },
        { id: "south",   he: "בדרום", nq: "בַּדָּרוֹם",  stem: "דרום", en: "south" },
        { id: "camp",    he: "במחנה", nq: "בַּמַּחֲנֶה", stem: "מחנה", en: "camp" },
        { id: "port",    he: "בנמל",  nq: "בַּנָּמָל",   stem: "נמל",  en: "port" },
        { id: "house",   he: "בבית",  nq: "בַּבַּיִת",   stem: "בית",  en: "house" },
        { id: "east",    he: "במזרח", nq: "בַּמִּזְרָח",  stem: "מזרח", en: "east",    fresh: true },
        { id: "west",    he: "במערב", nq: "בַּמַּעֲרָב",  stem: "מערב", en: "west",    fresh: true },
        { id: "village", he: "בכפר",  nq: "בַּכְּפָר",   stem: "כפר",  en: "village", fresh: true },
        { id: "city",    he: "בעיר",  nq: "בָּעִיר",    stem: "עיר",  en: "city",    fresh: true },
        { id: "forest",  he: "ביער",  nq: "בַּיַּעַר",   stem: "יער",  en: "forest",  fresh: true }
      ],
      rels: [
        { id: "near",     he: "ליד",    nq: "לְיַד",     en: "is near" },
        { id: "behind",   he: "מאחורי", nq: "מֵאֲחוֹרֵי", en: "is behind",      fresh: true },
        { id: "opposite", he: "מול",    nq: "מוּל",     en: "is opposite",    fresh: true },
        { id: "front",    he: "לפני",   nq: "לִפְנֵי",   en: "is in front of", fresh: true }
      ],
      objects: [
        { id: "house",   he: "הבית",  nq: "הַבַּיִת",   en: "house" },
        { id: "tower",   he: "המגדל", nq: "הַמִּגְדָּל", en: "tower" },
        { id: "bridge",  he: "הגשר",  nq: "הַגֶּשֶׁר",   en: "bridge" },
        { id: "camp",    he: "המחנה", nq: "הַמַּחֲנֶה", en: "camp" },
        { id: "port",    he: "הנמל",  nq: "הַנָּמָל",   en: "port" },
        { id: "village", he: "הכפר",  nq: "הַכְּפָר",   en: "village", fresh: true },
        { id: "city",    he: "העיר",  nq: "הָעִיר",    en: "city",    fresh: true },
        { id: "forest",  he: "היער",  nq: "הַיַּעַר",   en: "forest",  fresh: true },
        { id: "road",    he: "הכביש", nq: "הַכְּבִישׁ",  en: "road",    fresh: true },
        { id: "river",   he: "הנהר",  nq: "הַנָּהָר",   en: "river",   fresh: true }
      ]
    },

    /* the fixed messages below are only used if `lexicon` is removed */
    transmissions: [
      { id: "t1", freq: "39.85 MHz", uses: ["soldier", "near", "tower"],
        he: "החייל ליד המגדל.", nq: "הַחַיָּל לְיַד הַמִּגְדָּל.",
        answer: ["The soldier", "is near", "the tower"],
        distractors: ["The truck", "the bridge", "is in", "the house", "is north of"],
        en: "The soldier is near the tower.",
        gloss: [ { he: "החייל", en: "the soldier" }, { he: "ליד", en: "near" }, { he: "המגדל", en: "the tower" } ] },
      { id: "t2", freq: "41.20 MHz", uses: ["truck", "near", "house"],
        he: "המשאית ליד הבית.", nq: "הַמַּשָּׂאִית לְיַד הַבַּיִת.",
        answer: ["The truck", "is near", "the house"],
        distractors: ["The jeep", "the tower", "is in", "the bridge", "is south of"],
        en: "The truck is near the house.",
        gloss: [ { he: "המשאית", en: "the truck" }, { he: "ליד", en: "near" }, { he: "הבית", en: "the house" } ],
 },
      { id: "t3", freq: "39.85 MHz", uses: ["jeep", "in", "south"],
        he: "הג׳יפ בדרום.", nq: "הַגִּ׳יפּ בַּדָּרוֹם.",
        answer: ["The jeep", "is in", "the south"],
        distractors: ["the north", "The truck", "is near", "the port", "the tower"],
        en: "The jeep is in the south.",
        gloss: [ { he: "הג׳יפ", en: "the jeep" }, { he: "ב־", en: "in" }, { he: "דרום", en: "south" } ] },
      { id: "t4", freq: "41.20 MHz", uses: ["house", "near", "tower"],
        he: "הבית ליד המגדל.", nq: "הַבַּיִת לְיַד הַמִּגְדָּל.",
        answer: ["The house", "is near", "the tower"],
        distractors: ["The truck", "the bridge", "is in", "The soldier", "is north of"],
        en: "The house is near the tower.",
        gloss: [ { he: "הבית", en: "the house" }, { he: "ליד", en: "near" }, { he: "המגדל", en: "the tower" } ],
        fact: "Each enemy house stands by a tower." },
      { id: "t5", freq: "41.20 MHz", uses: ["tower", "in", "north"],
        he: "המגדל בצפון.", nq: "הַמִּגְדָּל בַּצָּפוֹן.",
        answer: ["The tower", "is in", "the north"],
        distractors: ["the south", "The house", "is near", "the port", "The jeep"],
        en: "The tower is in the north.",
        gloss: [ { he: "המגדל", en: "the tower" }, { he: "ב־", en: "in" }, { he: "צפון", en: "north" } ],
        fact: "One enemy tower is in the north." },
      { id: "t6", freq: "39.85 MHz", uses: ["jeep", "near", "house"],
        he: "הג׳יפ ליד הבית.", nq: "הַגִּ׳יפּ לְיַד הַבַּיִת.",
        answer: ["The jeep", "is near", "the house"],
        distractors: ["The truck", "the tower", "is in", "the bridge", "The soldier"],
        en: "The jeep is near the house.",
        gloss: [ { he: "הג׳יפ", en: "the jeep" }, { he: "ליד", en: "near" }, { he: "הבית", en: "the house" } ] },
{ id: "t7", freq: "41.20 MHz", uses: ["house", "in", "north"],
        he: "הבית בצפון.", nq: "הַבַּיִת בַּצָּפוֹן.",
        answer: ["The house", "is in", "the north"],
        distractors: ["the south", "The jeep", "is near", "the port", "The tower"],
        en: "The house is in the north.",
        gloss: [ { he: "הבית", en: "the house" }, { he: "ב־", en: "in" }, { he: "צפון", en: "north" } ],
        fact: "One enemy house is in the north." },
      { id: "t8", freq: "39.85 MHz", uses: ["house", "in", "south"],
        he: "הבית בדרום.", nq: "הַבַּיִת בַּדָּרוֹם.",
        answer: ["The house", "is in", "the south"],
        distractors: ["the north", "The truck", "is near", "the tower", "The jeep"],
        en: "The house is in the south.",
        gloss: [ { he: "הבית", en: "the house" }, { he: "ב־", en: "in" }, { he: "דרום", en: "south" } ],
        fact: "One enemy house is in the south." }
    ],

    mapUpdates: [
      { type: "mark", sites: ["house_nw", "house_ne", "house_s"], text: "3 houses possible" },
      { type: "ring", sites: ["tower_n", "tower_s"], text: "Towers" },
      { type: "zone", zone: "north", text: "North bank" }
    ],

    transmit: {
      order: "Make the enemy think the truck is south of the bridge.",
      answer: ["הַמַּשָּׂאִית", "דְּרוֹמִית", "לַגֶּשֶׁר"],
      bank: ["הַמַּשָּׂאִית", "הַבַּיִת", "לְיַד", "צְפוֹנִית", "דְּרוֹמִית", "לַגֶּשֶׁר"],
      hint: "Three words: the truck, then the direction ending in ‑ית, then the bridge with ל attached."
    }
  },

  /* 5b. OPERATIONS — the map game played between transmissions --------------
     currency – the name of what translations earn
     start    – purse at the start of the mission
     pay      – decoded: a correct translation; fast: bonus for using less
                than half the timer; wrong: the share of the pay lost after
                one wrong answer; lost: paid when a second wrong answer loses
                the message; missed: paid when the timer runs out; tower: added to EVERY later payment
                for each tower the player has uncovered; hint: the share
                of a message's payment lost when a word hint is used on it
     actions  – what the purse buys (label, cost, text on the card)
     sectors  – the unscouted areas. box = [west, north, east, south] on the map grid;
                every map site belongs to the sector its x,y falls in
     hp       – shells an objective takes before it is destroyed
     blast    – how wide an airstrike is
     defense  – the guns of each kind of objective: reach, seconds between
                shots, damage a shot does to a tank (a tank has ops.actions.tank.hp)
     route    – the trade route counts as found when this sector is
                uncovered, and pays a one-time bonus
     target   – the site the truck is hidden at; a drone strike there wins  */
  ops: {
    currency: "Intel",
    start: 0,
    // pay is set against the prices below: a decode buys about half a tank, so a match takes more messages
    // wrong: share of the pay lost after one wrong answer; a second wrong answer loses the message (paid `lost`)
    pay: { decoded: 60, fast: 25, wrong: 0.7, lost: 0, missed: 15, tower: 10, hint: 0.7 },
    actions: {
      scout: { label: "Scout team", cost: 60, text: "Uncovers what is in one sector." },
drone: { label: "Airstrike", cost: 160, text: "Destroys the enemy tanks under the spot you click." },
/* tank: rolls out inside its own country (yours where you click, the bot's beside one of its houses), crosses to the
         other country at `travel` grid units a second, and near its target drives at `speed` toward the nearest
         standing objective. Within `range` it stops and shells it, one shell every `fireEvery` seconds for `damage`
         points, then goes for the next nearest. An enemy tank within `range` comes first: the two stop and shell each
         other the same way. It sights anything within `sight`. It takes `hp` hits from house defences or enemy tanks,
         or one airstrike. */
      tank: { label: "Tank", cost: 130, text: "Fights enemy tanks in range, otherwise goes for the nearest objective.",
              travel: 9, speed: 5, sight: 16, range: 11, fireEvery: 4, damage: 1, hp: 5 },
      /* icbm: flies for `flight` seconds from your country to the spot you click and does `damage` to every objective
         within `radius`. An interceptor shoots it down once it has flown `interceptAt` of the way. */
      icbm: { label: "Missile", cost: 180, text: "Long range. Damages every objective under it.",
              flight: 8, damage: 2, radius: 10, height: 42, interceptAt: 0.7 },
      shield: { label: "Interceptor", cost: 140, text: "Shoots down one incoming missile." }
    },
    hp: { house: 6, tower: 3, bridge: 3, route: 2, wall: 16 },   // how many shells each kind of objective takes (both countries). wall: every country starts with a border wall round it; enemy tanks must break it first, and missiles near the border damage it
    blast: 12,                                            // radius of an airstrike, in grid units
    defense: {                                            // what fires on the closest enemy tank within its range
      house: { range: 14, every: 3.5, damage: 1 },        //   a house: light guns, about 17 seconds to destroy a tank
      tower: { range: 16, every: 1.1, damage: 2 }         //   a tower: guards the area around it, about 3 seconds to destroy a tank
    },
    sectors: [
      { id: "nw", name: "North-west", box: [0, 0, 40, 40] },
      { id: "n",  name: "North",      box: [40, 0, 80, 40] },
      { id: "ne", name: "North-east", box: [80, 0, 121, 40] },
      { id: "sw", name: "South-west", box: [0, 40, 40, 81] },
      { id: "s",  name: "South",      box: [40, 40, 80, 81] },
      { id: "se", name: "South-east", box: [80, 40, 121, 81] }
    ],
    route: { sector: "n", label: "Trade route", bonus: 80 },
    target: "house_ne"
  },

  /* 5c. HOME — your own country, and the enemy that plays against it ---------
     name     – shown on the panels
     offset   – how far east and south of Valdora it lies, in map grid units
                (keep the east part a little over each country's width, about 150, so there is room between them)
     setup    – the text shown during the placement round
     kit      – what you place before the match (kind, label, how many, card text).
                kinds: house | tower | bridge | route. The bridge snaps to the
                river; the trade route runs from its marker to the bridge.
     spacing  – the least distance between two of your objectives
     routePay – Intel a second from a trade route (yours and the enemy's)
                while it is untouched
     bot      – every: seconds between the enemy's own decoded messages, per
                difficulty. It earns the same pay and buys the same scout
                teams, tanks and airstrikes at the same prices.               */
  home: {
    name: "ARDEN",
    offset: [166, 0],   // [east, south]: just east of Valdora, with a little room between the two
setup: [
      "Arden is your country. It lies just east of Valdora, on the same continent.",
      "Place your objectives before the match: choose one, then click your country on the map. The enemy sees none of them until its scouts or tanks find them.",
      "Enemy tanks will come for your houses. If both houses are destroyed, the match is lost."
    ],
    kit: [
      { kind: "house",  label: "House",       count: 2, text: "Fires on tanks that come near. Lose both and you lose." },
      { kind: "tower",  label: "Tower",       count: 2, text: "Guards the area near it. Destroys a tank in about 3 seconds." },
      { kind: "bridge", label: "Bridge",      count: 1, text: "Carries the trade route over the river." },
      { kind: "route",  label: "Trade route", count: 1, text: "Pays 1 Intel every 2 seconds while untouched." }
    ],
    truckText: "Hide it at one of your houses.",
    spacing: 13,
    routePay: 0.5,
    bot: { every: { beginner: 28, standard: 18, advanced: 12 },
           tankEvery: { beginner: 36, standard: 22, advanced: 14 },   // least seconds between two of its tanks
           missileEvery: { beginner: 80, standard: 50, advanced: 32 },   // least seconds between two of its missiles
           shieldEvery: 35,                                              // least seconds between two interceptor purchases
           airEvery: 12, aim: 0.7 }                                    // seconds between its airstrikes; chance one hits your tank
  },

  /* 6. FINAL PLOT ---------------------------------------------------------- */
  finalPlot: {
    time: "07:30",
    instruction: "Tap the spot on the map where the truck is parked.",
    answer: "house_ne",
solution: [
      "הַבַּיִת לְיַד הַמִּגְדָּל — each enemy house stands by a tower.",
      "הַבַּיִת בַּצָּפוֹן, הַבַּיִת בַּדָּרוֹם — one house is in the north, one in the south.",
      "הַמִּגְדָּל בַּצָּפוֹן — one of the towers is in the north."
    ],
    wrong: {
      house_nw: "This house is in the north, but it stands alone. A transmission said הַבַּיִת לְיַד הַמִּגְדָּל, the house is near the tower.",
      house_s:  "This house is near a tower, but it is south of the river. The tower is in the north (צָפוֹן).",
      tower_n:  "Close. The truck is near the house, not at the tower: הַמַּשָּׂאִית לְיַד הַבַּיִת.",
      tower_s:  "This is south of the river, and the truck is beside a house, not a tower.",
      bridge:   "No transmission puts the truck at the bridge. The truck is near a house."
    }
  }
};
