/* ==========================================================================
   FRENCH COURSE — swapped into window.MISSION when French is chosen on the
   menu. Built from mission-de.js; only the language parts live here. The map,
   units, prices and bot all come from mission-content.js.

   Same shape as the Hebrew data. The field names stay `he` / `nq` (they mean
   "the target-language text"); for French `nq` is simply the same as `he`.

   Grammar the generator relies on:
     subjects  – with a capitalised article ("Le soldat", "La jeep",
                 "L'avion")
     rels      – carry the verb ("est à côté de", "est derrière")
     objects   – follow a rel directly, so they are all feminine (la / l')
                 nouns: "de" + "le" would have to become "du", and the
                 generator joins words with plain spaces. Masculine nouns
                 such as "le pont" appear only in the hand-written references.
     places    – carry the verb and the "in" ("est au nord", "est dans la
                 forêt"); `prep` is that front part, `stem` the noun
   words      – what each single word means, shown when a word is hinted
                 (keys are lower case, elided words keep their apostrophe:
                 "l'avion")
   ========================================================================== */

(window.LANTERN_COURSES = window.LANTERN_COURSES || {}).fr = {

  name: "French", native: "Français", dir: "ltr",   // shown in the menu's language list; dir = text direction

  briefing: [
    "Two countries share a continent: Valdora, the enemy, in the west, and Arden, yours, in the east. Each has two houses. Lose both houses and you lose the match.",
    "First you place your own houses, towers, bridge and trade route. Then the match begins: every French radio message you translate earns Intel, and some of them say where the enemy houses are.",
    "Spend Intel on scout teams, tanks, long-range missiles, airstrikes against the tanks that land in your country, and interceptors against incoming missiles. The enemy does the same, without waiting for you."
  ],

  vocab: {
    truck:   { he: "le camion",   plain: "camion",  en: "truck",   target: true,  note: "Masculine: le camion." },
    house:   { he: "la maison",   plain: "maison",  en: "house",   target: true,  note: "Feminine: la maison. dans la maison = in the house. à côté de la maison = next to the house." },
    bridge:  { he: "le pont",     plain: "pont",    en: "bridge",  target: true,  note: "Masculine: le pont. de + le pont becomes du pont: à côté du pont = next to the bridge." },
    near:    { he: "à côté de",   plain: "côté",    en: "next to", target: true,  note: "Stands before the landmark. de + le becomes du; de la and de l' stay as they are." },
    north:   { he: "le nord",     plain: "nord",    en: "north",   target: true,  note: "au nord = in the north. au nord de = north of." },
    south:   { he: "le sud",      plain: "sud",     en: "south",   target: true,  note: "au sud = in the south. au sud de = south of." },
    tower:   { he: "la tour",     plain: "tour",    en: "tower",   target: true,  note: "Feminine: la tour. à côté de la tour = next to the tower." },
    soldier: { he: "le soldat",   plain: "soldat",  en: "soldier", target: false, note: "Masculine: le soldat." },
    jeep:    { he: "la jeep",     plain: "jeep",    en: "jeep",    target: false, note: "Feminine: la jeep." },
    port:    { he: "le port",     plain: "port",    en: "port",    target: false, note: "au port = in the port." },
    not:     { he: "ne … pas",    plain: "pas",     en: "not",     target: false, note: "Wraps the verb: n'est pas = is not. n' is ne before a vowel." },
    and:     { he: "et",          plain: "et",      en: "and",     target: false, note: "Joins two things: le soldat et la jeep." },
    also:    { he: "aussi",       plain: "aussi",   en: "also",    target: false, note: "le pont est aussi vieux = the bridge is also old." },
    /* words the radio uses that are NOT in the reference binder (ref: false) */
    tank:       { he: "le char",          plain: "char",        en: "tank",        ref: false, note: "Masculine: le char." },
    plane:      { he: "l'avion",          plain: "avion",       en: "plane",       ref: false, note: "Masculine: l'avion (le before a vowel becomes l')." },
    helicopter: { he: "l'hélicoptère",    plain: "hélicoptère", en: "helicopter",  ref: false, note: "Masculine: l'hélicoptère." },
    officer:    { he: "l'officier",       plain: "officier",    en: "officer",     ref: false, note: "Masculine: l'officier." },
    commander:  { he: "le commandant",    plain: "commandant",  en: "commander",   ref: false, note: "Masculine: le commandant." },
    boat:       { he: "le bateau",        plain: "bateau",      en: "boat",        ref: false, note: "Masculine: le bateau." },
    village:    { he: "le village",       plain: "village",     en: "village",     ref: false, note: "dans le village = in the village." },
    city:       { he: "la ville",         plain: "ville",       en: "city",        ref: false, note: "en ville = in the city. à côté de la ville = next to the city." },
    forest:     { he: "la forêt",         plain: "forêt",       en: "forest",      ref: false, note: "dans la forêt = in the forest." },
    road:       { he: "la route",         plain: "route",       en: "road",        ref: false, note: "Feminine: à côté de la route = next to the road." },
    river:      { he: "la rivière",       plain: "rivière",     en: "river",       ref: false, note: "Feminine: à côté de la rivière = next to the river." },
    east:       { he: "l'est",            plain: "est",         en: "east",        ref: false, note: "à l'est = in the east. Not to be confused with est = is." },
    west:       { he: "l'ouest",          plain: "ouest",       en: "west",        ref: false, note: "à l'ouest = in the west." },
    behind:     { he: "derrière",         plain: "derrière",    en: "behind",      ref: false, note: "derrière la tour = behind the tower." },
    opposite:   { he: "en face de",       plain: "face",        en: "opposite",    ref: false, note: "en face de la tour = opposite the tower." },
    front:      { he: "devant",           plain: "devant",      en: "in front of", ref: false, note: "devant la tour = in front of the tower." },
    the:     { he: "le / la / l'",  plain: "le",   en: "the", target: false, note: "le (masc.), la (fem.), l' before a vowel. After de: du (= de le), de la, de l'." },
    in:      { he: "au / dans",     plain: "dans", en: "in",  target: false, note: "au = à le: au nord, au port. dans = inside: dans la maison. en ville = in the city." },
    of:      { he: "de / du",       plain: "de",   en: "of / from", target: false, note: "au nord de la tour = north of the tower. du = de le: à côté du pont." }
  },

  referenceOnlyWords: [
    { plain: "vide",        en: "empty" },
    { plain: "haut / haute", en: "tall / high" },
    { plain: "le camp",     en: "camp" },
    { plain: "vieux / vieille", en: "old" },
    { plain: "au nord de",  en: "north of" },
    { plain: "au sud de",   en: "south of" }
  ],

  references: {
    r1: { kind: "FIELD REPORT", title: "Field Report 14", file: "FR-14",
          lines: [ { id: "r1a", he: "Le soldat est à côté du pont.", en: "The soldier is next to the bridge." } ] },
    r2: { kind: "PATROL LOG", title: "Patrol Log, Night Shift", file: "PL-03",
          lines: [ { id: "r2a", he: "Le soldat est dans la maison.", en: "The soldier is in the house." } ] },
    r3: { kind: "MOTOR POOL MEMO", title: "Motor Pool Memo", file: "MP-22",
          lines: [ { id: "r3a", he: "Le camion est vide.", en: "The truck is empty." },
                   { id: "r3b", he: "La tour est haute.",  en: "The tower is tall." } ] },
    r4: { kind: "SURVEY NOTES", title: "Survey Notes, Grid West", file: "SV-07",
          lines: [ { id: "r4a", he: "Le soldat est au nord de la tour.", en: "The soldier is north of the tower." },
                   { id: "r4b", he: "La jeep est au sud de la tour.",    en: "The jeep is south of the tower." } ] },
    r5: { kind: "SECTOR ATLAS", title: "Sector Atlas, p. 2", file: "AT-02",
          lines: [ { id: "r5a", he: "Le camp est au nord.", en: "The camp is in the north." },
                   { id: "r5b", he: "Le port est au sud.",  en: "The port is in the south." } ] },
    r6: { kind: "SENTRY NOTE", title: "Sentry Note", file: "SN-11",
          lines: [ { id: "r6a", he: "La jeep est à côté du pont.", en: "The jeep is next to the bridge." } ] },
    r7: { kind: "DEPOT LIST", title: "Depot List", file: "DL-40",
          lines: [ { id: "r7a", he: "Le pont est vieux.",         en: "The bridge is old." },
                   { id: "r7b", he: "Le soldat est dans la tour.", en: "The soldier is in the tower." } ] },
    r8: { kind: "SIGNALS LOG", title: "Signals Log", file: "SG-05",
          lines: [ { id: "r8a", he: "Le soldat n'est pas dans la maison.", en: "The soldier is not in the house." },
                   { id: "r8b", he: "Le soldat et la jeep sont au port.", en: "The soldier and the jeep are in the port." } ] },
    r9: { kind: "QUARTERMASTER NOTE", title: "Quartermaster Note", file: "QM-18",
          lines: [ { id: "r9a", he: "La jeep est vide.", en: "The jeep is empty." },
                   { id: "r9b", he: "La jeep est vieille, et le pont est aussi vieux.", en: "The jeep is old, and the bridge is also old." } ] }
  },

  lexicon: {
    subjects: [
      { id: "soldier",    he: "Le soldat",       en: "soldier" },
      { id: "jeep",       he: "La jeep",         en: "jeep" },
      { id: "truck",      he: "Le camion",       en: "truck" },
      { id: "tank",       he: "Le char",         en: "tank",       fresh: true },
      { id: "plane",      he: "L'avion",         en: "plane",      fresh: true },
      { id: "helicopter", he: "L'hélicoptère",   en: "helicopter", fresh: true },
      { id: "officer",    he: "L'officier",      en: "officer",    fresh: true },
      { id: "commander",  he: "Le commandant",   en: "commander",  fresh: true },
      { id: "boat",       he: "Le bateau",       en: "boat",       fresh: true }
    ],
    objectives: [
      { id: "house", he: "La maison", en: "house" },
      { id: "tower", he: "La tour",   en: "tower" }
    ],
    places: [
      { id: "north",   he: "est au nord",          prep: "est au",      stem: "nord",    en: "north" },
      { id: "south",   he: "est au sud",           prep: "est au",      stem: "sud",     en: "south" },
      { id: "camp",    he: "est dans le camp",     prep: "est dans le", stem: "camp",    en: "camp" },
      { id: "port",    he: "est au port",          prep: "est au",      stem: "port",    en: "port" },
      { id: "house",   he: "est dans la maison",   prep: "est dans la", stem: "maison",  en: "house" },
      { id: "east",    he: "est à l'est",          prep: "est à",       stem: "l'est",   en: "east",    fresh: true },
      { id: "west",    he: "est à l'ouest",        prep: "est à",       stem: "l'ouest", en: "west",    fresh: true },
      { id: "village", he: "est dans le village",  prep: "est dans le", stem: "village", en: "village", fresh: true },
      { id: "city",    he: "est en ville",         prep: "est en",      stem: "ville",   en: "city",    fresh: true },
      { id: "forest",  he: "est dans la forêt",    prep: "est dans la", stem: "forêt",   en: "forest",  fresh: true }
    ],
    rels: [
      { id: "near",     he: "est à côté de", en: "is next to" },
      { id: "behind",   he: "est derrière",  en: "is behind",      fresh: true },
      { id: "opposite", he: "est en face de", en: "is opposite",   fresh: true },
      { id: "front",    he: "est devant",    en: "is in front of", fresh: true }
    ],
    objects: [   // feminine only, so "de" never has to contract (see the note at the top)
      { id: "house",   he: "la maison",  en: "house" },
      { id: "tower",   he: "la tour",    en: "tower" },
      { id: "city",    he: "la ville",   en: "city",    fresh: true },
      { id: "forest",  he: "la forêt",   en: "forest",  fresh: true },
      { id: "road",    he: "la route",   en: "road",    fresh: true },
      { id: "river",   he: "la rivière", en: "river",   fresh: true }
    ]
  },

  /* single-word meanings for the Hint (lower case, no punctuation) */
  words: {
    "le": "the", "la": "the", "l'": "the", "les": "the", "du": "of the (de + le)", "de": "of",
    "est": "is", "sont": "are", "au": "in the / at the (à + le)", "à": "at / in", "dans": "in", "en": "in",
    "côté": "side (à côté de = next to)", "face": "face (en face de = opposite)", "derrière": "behind", "devant": "in front of",
    "soldat": "soldier", "jeep": "jeep", "camion": "truck", "char": "tank", "l'avion": "the plane",
    "l'hélicoptère": "the helicopter", "l'officier": "the officer", "commandant": "commander", "bateau": "boat",
    "maison": "house", "tour": "tower", "pont": "bridge", "camp": "camp", "port": "port",
    "village": "village", "ville": "city", "forêt": "forest", "route": "road", "rivière": "river",
    "nord": "north", "sud": "south", "l'est": "the east", "l'ouest": "the west"
  },

  /* small labels that are written in the course language */
  stamps: { decoded: "déchiffré", destroyed: "détruit", lantern: "Lanterne" },

  /* the word packs: the course above is the default pack ("packName"); each entry in `packs` (added below) replaces its
     vocab, references, words and briefing, and brings `lines`, ready-made sentences the radio picks from */
  packName: "Field radio: places",
  packs: {}
};

/* ==========================================================================
   WORD PACK — 30 most common words. Every radio message is a whole French
   sentence built below from these words, split into the three English pieces
   the player puts in order: subject · verb · rest ("He" · "eats" · "the bread").
   Conjugation, elision (J'aime) and agreement (petite maison) are done here,
   so the sentences are always correct French.
   ========================================================================== */
(function () {
  const W = {   // the 30 words: the field notebook lists them, the binder teaches them
    je:      { he: "je",      en: "I",              note: "Before a vowel it becomes j': j'ai, j'aime." },
    tu:      { he: "tu",      en: "you",            note: "Talking to one person you know." },
    il:      { he: "il",      en: "he",             note: "Also it, for a masculine thing." },
    elle:    { he: "elle",    en: "she",            note: "Also it, for a feminine thing." },
    etre:    { he: "être",    en: "to be",          note: "je suis, tu es, il / elle est. Not: il n'est pas." },
    avoir:   { he: "avoir",   en: "to have",        note: "j'ai, tu as, il / elle a." },
    aller:   { he: "aller",   en: "to go",          note: "je vais, tu vas, il / elle va." },
    aimer:   { he: "aimer",   en: "to like / love", note: "j'aime, tu aimes, il / elle aime." },
    voir:    { he: "voir",    en: "to see",         note: "je vois, tu vois, il / elle voit." },
    vouloir: { he: "vouloir", en: "to want",        note: "je veux, tu veux, il / elle veut." },
    manger:  { he: "manger",  en: "to eat",         note: "je mange, tu manges, il / elle mange." },
    faire:   { he: "faire",   en: "to do / make",   note: "je fais, tu fais, il / elle fait." },
    chat:    { he: "le chat",  en: "cat",   note: "Masculine." },
    chien:   { he: "le chien", en: "dog",   note: "Masculine." },
    homme:   { he: "l'homme",  en: "man",   note: "Masculine. le becomes l' before a vowel or silent h." },
    femme:   { he: "la femme", en: "woman", note: "Feminine." },
    maison:  { he: "la maison", en: "house", note: "Feminine." },
    livre:   { he: "le livre", en: "book",  note: "Masculine." },
    eau:     { he: "l'eau",    en: "water", note: "Feminine. la becomes l' before a vowel." },
    pain:    { he: "le pain",  en: "bread", note: "Masculine." },
    le:      { he: "le",  en: "the (masculine)", note: "l' before a vowel: l'homme." },
    la:      { he: "la",  en: "the (feminine)",  note: "l' before a vowel: l'eau." },
    un:      { he: "un",  en: "a (masculine)",   note: "un chat, un livre." },
    une:     { he: "une", en: "a (feminine)",    note: "une femme, une maison." },
    grand:   { he: "grand",  en: "big / tall", note: "Feminine: grande. Often before the noun: une grande maison." },
    petit:   { he: "petit",  en: "small",      note: "Feminine: petite. Often before the noun: un petit chat." },
    bon:     { he: "bon",    en: "good",       note: "Feminine: bonne. Before the noun: un bon livre." },
    et:      { he: "et",     en: "and",        note: "le chat et le chien." },
    dans:    { he: "dans",   en: "in / into",  note: "dans la maison = in the house." },
    pas:     { he: "pas",    en: "not",        note: "ne … pas around the verb: il n'est pas = he is not." }
  };
  const vocab = {}; Object.keys(W).forEach(id => { vocab[id] = { he: W[id].he, plain: W[id].he.replace(/^(le |la |l')/, ""), en: W[id].en, target: true, note: W[id].note }; });

  // which of the 30 words a French phrase uses (for the field notebook)
  const ID = { je: "je", "j'": "je", tu: "tu", il: "il", elle: "elle", suis: "etre", es: "etre", est: "etre", "n'est": "etre",
    ai: "avoir", as: "avoir", a: "avoir", vais: "aller", vas: "aller", va: "aller", aime: "aimer", aimes: "aimer",
    vois: "voir", voit: "voir", veux: "vouloir", veut: "vouloir", mange: "manger", manges: "manger", fais: "faire", fait: "faire",
    chat: "chat", chien: "chien", homme: "homme", femme: "femme", maison: "maison", livre: "livre", eau: "eau", pain: "pain",
    le: "le", la: "la", un: "un", une: "une", grand: "grand", grande: "grand", petit: "petit", petite: "petit", bon: "bon", bonne: "bon",
    et: "et", dans: "dans", pas: "pas" };
  const usesOf = s => { const out = []; s.toLowerCase().split(/\s+/).forEach(w => {
    let m = /^(l')(.+)$/.exec(w); const add = x => { if (x && !out.includes(x)) out.push(x); };
    if (w === "j'ai" || w === "j'aime") { add("je"); add(ID[w.slice(2)]); return; }
    if (m) { add(m[2] === "homme" ? "le" : "la"); add(ID[m[2]]); return; }
    add(ID[w]); }); return out; };

  // who can do what (p = person 1/2/3; kind: who = people, pet = animals, thing)
  const S = [
    { he: "Je", en: "I", p: 1, kind: "who", g: "m" }, { he: "Tu", en: "You", p: 2, kind: "who", g: "m" },
    { he: "Il", en: "He", p: 3, kind: "who", g: "m" }, { he: "Elle", en: "She", p: 3, kind: "who", g: "f" },
    { he: "L'homme", en: "The man", p: 3, kind: "who", g: "m" }, { he: "La femme", en: "The woman", p: 3, kind: "who", g: "f" },
    { he: "Un homme", en: "A man", p: 3, kind: "who", g: "m" }, { he: "Une femme", en: "A woman", p: 3, kind: "who", g: "f" },
    { he: "Le chat", en: "The cat", p: 3, kind: "pet", g: "m" }, { he: "Le chien", en: "The dog", p: 3, kind: "pet", g: "m" },
    { he: "Un chat", en: "A cat", p: 3, kind: "pet", g: "m" }, { he: "Un chien", en: "A dog", p: 3, kind: "pet", g: "m" },
    { he: "La maison", en: "The house", p: 3, kind: "thing", g: "f", big: true }, { he: "Le livre", en: "The book", p: 3, kind: "thing", g: "m", big: true, good: true },
    { he: "Le pain", en: "The bread", p: 3, kind: "thing", g: "m", good: true }, { he: "L'eau", en: "The water", p: 3, kind: "thing", g: "f", good: true }
  ];
  const O = (he, en) => ({ he, en });
  const ANIMALS = [O("le chat", "the cat"), O("le chien", "the dog"), O("un chat", "a cat"), O("un chien", "a dog"), O("un petit chat", "a small cat"), O("un grand chien", "a big dog")];
  const PEOPLE = [O("l'homme", "the man"), O("la femme", "the woman"), O("un homme", "a man"), O("une femme", "a woman")];
  const HOUSE = [O("la maison", "the house"), O("une maison", "a house"), O("une grande maison", "a big house"), O("une petite maison", "a small house")];
  const V = [   // fr / en by person 1, 2, 3; `by` = who may do it; `obj` = what it may take
    { fr: ["ai", "as", "a"], en: ["have", "have", "has"], by: ["who"],
      obj: [O("un chat", "a cat"), O("un chien", "a dog"), O("un livre", "a book"), O("un bon livre", "a good book"), O("une maison", "a house"),
            O("une grande maison", "a big house"), O("le pain", "the bread"), O("l'eau", "the water"), O("un chat et un chien", "a cat and a dog"), O("le pain et l'eau", "the bread and the water")] },
    { fr: ["aime", "aimes", "aime"], en: ["like", "like", "likes"], by: ["who", "pet"],
      obj: [O("le chat", "the cat"), O("le chien", "the dog"), O("la femme", "the woman"), O("l'homme", "the man"), O("le pain", "the bread"), O("l'eau", "the water"),
            O("la maison", "the house"), O("le livre", "the book"), O("le chat et le chien", "the cat and the dog"), O("le pain et l'eau", "the bread and the water")] },
    { fr: ["vois", "vois", "voit"], en: ["see", "see", "sees"], by: ["who", "pet"],
      obj: ANIMALS.concat(PEOPLE, HOUSE, [O("le livre", "the book"), O("un livre", "a book"), O("l'eau", "the water"), O("le pain", "the bread"), O("l'homme et la femme", "the man and the woman")]) },
    { fr: ["veux", "veux", "veut"], en: ["want", "want", "wants"], by: ["who", "pet"],
      obj: [O("le pain", "the bread"), O("l'eau", "the water"), O("un livre", "a book"), O("un bon livre", "a good book"), O("un chat", "a cat"), O("un chien", "a dog"),
            O("un petit chien", "a small dog"), O("une maison", "a house"), O("une grande maison", "a big house"), O("le pain et l'eau", "the bread and the water")] },
    { fr: ["mange", "manges", "mange"], en: ["eat", "eat", "eats"], by: ["who", "pet"], obj: [O("le pain", "the bread"), O("le bon pain", "the good bread")] },
    { fr: ["fais", "fais", "fait"], en: ["make", "make", "makes"], by: ["who"], obj: [O("le pain", "the bread"), O("le bon pain", "the good bread")] },
    { fr: ["vais dans", "vas dans", "va dans"], en: ["go into", "go into", "goes into"], by: ["who", "pet"], obj: HOUSE }
  ];
  const BE = { fr: ["suis", "es", "est"], en: ["am", "are", "is"] };
  const ADJ = [   // être + adjective: fr masc / fem, en, who may take it
    { m: "grand", f: "grande", en: "big", ok: s => s.kind !== "thing" || s.big },
    { m: "petit", f: "petite", en: "small", ok: s => s.kind !== "thing" || s.big },
    { m: "bon", f: "bonne", en: "good", ok: s => !!s.good }
  ];

  const lines = [], seen = new Set();
  const join = (s, v) => s.he === "Je" && /^[aeiouhé]/.test(v) ? "J'" + v : s.he + " " + v;
  const line = (s, v, ven, o, oen) => {
    const he = join(s, v) + " " + o + ".";
    if (seen.has(he)) return; seen.add(he);
    lines.push({ he, en: [s.en, ven, oen], uses: usesOf(join(s, v) + " " + o),
      gloss: [{ he: s.he === "Je" && /^[aeiouhé]/.test(v) ? "J'" : s.he, en: s.en, ids: usesOf(s.he) }, { he: v, en: ven, ids: usesOf(v) }, { he: o, en: oen, ids: usesOf(o) }] });   // ids: which words each part tests (spaced repetition)
  };
  S.forEach(s => {
    const i = s.p - 1, self = s.he.toLowerCase();
    V.forEach(v => { if (v.by.includes(s.kind)) v.obj.forEach(o => { if (o.he !== self) line(s, v.fr[i], v.en[i], o.he, o.en); }); });
    ADJ.forEach(a => { if (!a.ok(s)) return; const adj = s.g === "f" ? a.f : a.m;
      line(s, BE.fr[i], BE.en[i], adj, a.en);
      if (s.p === 3) line(s, "n'est pas", "is not", adj, a.en); });
    if (s.kind !== "thing" || s.he === "Le livre" || s.he === "Le pain") {
      line(s, BE.fr[i] + " dans", BE.en[i] + " in", "la maison", "the house");
      line(s, BE.fr[i] + " dans", BE.en[i] + " in", "une maison", "a house");
      if (s.p === 3) line(s, "n'est pas dans", "is not in", "la maison", "the house");
    }
  });

  const words = {   // one meaning per word, for the Hint
    "je": "I", "j'ai": "I have", "j'aime": "I like / love", "tu": "you", "il": "he", "elle": "she",
    "suis": "am (être)", "es": "are (être)", "est": "is (être)", "n'est": "is (with pas: is not)", "pas": "not",
    "ai": "have (avoir)", "as": "have (avoir)", "a": "has (avoir)",
    "vais": "go (aller)", "vas": "go (aller)", "va": "goes (aller)",
    "aime": "like / love (aimer)", "aimes": "like / love (aimer)", "vois": "see (voir)", "voit": "sees (voir)",
    "veux": "want (vouloir)", "veut": "wants (vouloir)", "mange": "eat / eats (manger)", "manges": "eat (manger)",
    "fais": "make / do (faire)", "fait": "makes / does (faire)",
    "chat": "cat", "chien": "dog", "homme": "man", "l'homme": "the man", "femme": "woman", "maison": "house",
    "livre": "book", "eau": "water", "l'eau": "the water", "pain": "bread",
    "le": "the (masculine)", "la": "the (feminine)", "un": "a (masculine)", "une": "a (feminine)",
    "grand": "big / tall", "grande": "big / tall (feminine)", "petit": "small", "petite": "small (feminine)",
    "bon": "good", "bonne": "good (feminine)", "et": "and", "dans": "in / into"
  };

  const R = (kind, title, file, l) => ({ kind, title, file, lines: l.map((x, i) => ({ id: file + "-" + i, he: x[0], en: x[1] })) });
  window.LANTERN_COURSES.fr.packs.common = {
    name: "30 most common words",
    briefing: [
      "Two countries share a continent: Valdora, the enemy, in the west, and Arden, yours, in the east. Each has two houses. Lose both houses and you lose the match.",
      "First you place your own houses, towers, bridge and trade route. Then the match begins: every French radio message you translate earns Intel. The messages use the 30 most common French words, so finding the enemy houses is up to your scout teams.",
      "Spend Intel on scout teams, tanks, long-range missiles, airstrikes against the tanks that land in your country, and interceptors against incoming missiles. The enemy does the same, without waiting for you."
    ],
    vocab, words, referenceOnlyWords: [], lines, usesOf,   // usesOf: the vocabulary ids a French phrase or single word uses
    references: {   // r1–r6 between them use all 30 words (the binder shows r1–r6 on the easier settings)
      r1: R("FIELD REPORT", "Field Report 14", "FR-14", [["Je vois le chat et le chien.", "I see the cat and the dog."], ["Tu as un livre.", "You have a book."]]),
      r2: R("PATROL LOG", "Patrol Log, Night Shift", "PL-03", [["Il mange le pain.", "He eats the bread."], ["Elle aime l'eau.", "She likes the water."]]),
      r3: R("MOTOR POOL MEMO", "Motor Pool Memo", "MP-22", [["L'homme va dans la maison.", "The man goes into the house."], ["La femme veut une maison.", "The woman wants a house."]]),
      r4: R("SURVEY NOTES", "Survey Notes, Grid West", "SV-07", [["Le chien est grand.", "The dog is big."], ["Le chat n'est pas petit.", "The cat is not small."]]),
      r5: R("SECTOR ATLAS", "Sector Atlas, p. 2", "AT-02", [["Le pain est bon.", "The bread is good."], ["Elle fait le pain.", "She makes the bread."]]),
      r6: R("SENTRY NOTE", "Sentry Note", "SN-11", [["Je suis dans la maison.", "I am in the house."], ["J'ai un chien.", "I have a dog."]]),
      r7: R("DEPOT LIST", "Depot List", "DL-40", [["Tu es petit.", "You are small."], ["La maison est grande.", "The house is big."]]),
      r8: R("SIGNALS LOG", "Signals Log", "SG-05", [["Il veut l'eau.", "He wants the water."], ["Une femme voit un homme.", "A woman sees a man."]]),
      r9: R("QUARTERMASTER NOTE", "Quartermaster Note", "QM-18", [["J'aime le livre.", "I like the book."], ["L'eau est bonne.", "The water is good."]])
    }
  };
})();
