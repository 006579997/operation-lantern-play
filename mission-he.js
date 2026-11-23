/* ==========================================================================
   HEBREW WORD PACKS. Hebrew's own course (places and positions) is built into
   mission-content.js; this file only adds packs to it, chosen in the menu's
   "Word pack" dropdown.

   Pack: the 31 most common words. Every radio message is a whole Hebrew
   sentence built below from these words, split into the three English pieces
   the player puts in order ("The dog" · "is" · "big"). Sentences are written
   with vowel points (`nq`); `he` is the same text without them, which is what
   the hints and the binder look-ups use.

   Grammar the builder relies on:
     - Present-tense verbs agree with the subject's gender (רוֹאֶה / רוֹאָה);
       אֲנִי takes the masculine form here.
     - "is / am / are" has no word in the present: הַכֶּלֶב גָּדוֹל = the dog is big.
       לִהְיוֹת shows up in the past: הָיָה, הָיְתָה, הָיִיתִי, הָיִיתָ, הָיִית.
     - Objects of verbs are indefinite (רוֹאֶה כֶּלֶב = sees a dog): a definite
       object would need אֶת, spelled like אַתְּ "you (f)".
     - "goes to the house" uses the prefix לַ־ (לַבַּיִת), the one form outside
       the 31 words.
   ========================================================================== */

(function () {
  const C = window.LANTERN_COURSES = window.LANTERN_COURSES || {};
  C.he = C.he || { name: "Hebrew", native: "עִבְרִית", dir: "rtl", builtIn: true, stamps: { decoded: "פוענח", destroyed: "הֻשְׁמַד", lantern: "פָּנָס" } };
  C.he.packName = "Field radio: places";
  C.he.packs = C.he.packs || {};

  // pointed text → plain modern spelling (the hints, binder look-ups and lead matching use this)
  const plainWord = w => w.replace(/[֑-ֽֿ-ׇ]/g, "").replace(/אשה$/, "אישה").replace(/^היתה$/, "הייתה");
  const plain = s => s.split(" ").map(plainWord).join(" ");

  /* ---- the 31 words: the field notebook lists them, the binder teaches them ---- */
  const W = {
    ani:     ["אֲנִי", "I", "Verbs after it here take the masculine form: אֲנִי רוֹאֶה. A woman says אֲנִי רוֹאָה."],
    ata:     ["אַתָּה", "you (masculine)", "Talking to a man or boy."],
    at:      ["אַתְּ", "you (feminine)", "Talking to a woman or girl."],
    hu:      ["הוּא", "he", "Also it, for a masculine thing."],
    hi:      ["הִיא", "she", "Also it, for a feminine thing."],
    lihyot:  ["לִהְיוֹת", "to be", "No word for is in the present: הַכֶּלֶב גָּדוֹל = the dog is big. Past: הָיָה (he was), הָיְתָה (she was), הָיִיתִי (I was), הָיִיתָ / הָיִית (you were)."],
    yesh:    ["יֵשׁ", "there is / have", "יֵשׁ כֶּלֶב בַּבַּיִת = there is a dog in the house."],
    lalechet:["לָלֶכֶת", "to go", "הוֹלֵךְ (m.) / הוֹלֶכֶת (f.). Where to: לַ־ in front: לַבַּיִת = to the house."],
    leehov:  ["לֶאֱהוֹב", "to like / love", "אוֹהֵב (m.) / אוֹהֶבֶת (f.)."],
    lirot:   ["לִרְאוֹת", "to see", "רוֹאֶה (m.) / רוֹאָה (f.)."],
    lirtsot: ["לִרְצוֹת", "to want", "רוֹצֶה (m.) / רוֹצָה (f.)."],
    leechol: ["לֶאֱכוֹל", "to eat", "אוֹכֵל (m.) / אוֹכֶלֶת (f.)."],
    laasot:  ["לַעֲשׂוֹת", "to do / make", "עוֹשֶׂה (m.) / עוֹשָׂה (f.)."],
    chatul:  ["חָתוּל", "cat", "Masculine. הֶחָתוּל = the cat."],
    kelev:   ["כֶּלֶב", "dog", "Masculine. הַכֶּלֶב = the dog."],
    ish:     ["אִישׁ", "man", "Masculine. הָאִישׁ = the man."],
    isha:    ["אִשָּׁה", "woman", "Feminine. הָאִשָּׁה = the woman."],
    bayit:   ["בַּיִת", "house", "Masculine. בַּבַּיִת = in the house."],
    sefer:   ["סֵפֶר", "book", "Masculine. הַסֵּפֶר = the book."],
    mayim:   ["מַיִם", "water", "Plural in form: מַיִם."],
    lechem:  ["לֶחֶם", "bread", "Masculine. הַלֶּחֶם = the bread."],
    ha:      ["ה־", "the", "Attached to the front of a noun: ה + כֶּלֶב → הַכֶּלֶב."],
    ze:      ["זֶה", "this (masculine)", "זֶה כֶּלֶב = this is a dog. After a noun: הַכֶּלֶב הַזֶּה = this dog."],
    zot:     ["זֹאת", "this (feminine)", "זֹאת אִשָּׁה = this is a woman. הָאִשָּׁה הַזֹּאת = this woman."],
    echad:   ["אֶחָד", "one (masculine)", "Comes after the noun: כֶּלֶב אֶחָד = one dog."],
    gadol:   ["גָּדוֹל", "big / tall", "Feminine: גְּדוֹלָה. After the noun: כֶּלֶב גָּדוֹל = a big dog."],
    katan:   ["קָטָן", "small", "Feminine: קְטַנָּה. חָתוּל קָטָן = a small cat."],
    tov:     ["טוֹב", "good", "Feminine: טוֹבָה. סֵפֶר טוֹב = a good book."],
    ve:      ["ו־", "and", "Attached to the next word: וְכֶלֶב, וּמַיִם."],
    be:      ["ב־", "in", "Attached: ב + הַבַּיִת → בַּבַּיִת = in the house."],
    lo:      ["לֹא", "not", "Before the word it denies: הַכֶּלֶב לֹא גָּדוֹל = the dog is not big."]
  };
  const vocab = {}; Object.keys(W).forEach(id => { vocab[id] = { he: W[id][0], plain: plainWord(W[id][0]), en: W[id][1], target: true, note: W[id][2] }; });

  /* ---- who can be in a sentence. p = person; g = gender; kind: who (people), pet (animals), thing ---- */
  const S = (v, en, p, g, kind, uses, ex) => Object.assign({ v, en, p, g, kind, uses }, ex || {});
  const SUBJ = [
    S("אֲנִי", "I", 1, "m", "who", ["ani"]), S("אַתָּה", "You", 2, "m", "who", ["ata"]), S("אַתְּ", "You", 2, "f", "who", ["at"]),
    S("הוּא", "He", 3, "m", "who", ["hu"]), S("הִיא", "She", 3, "f", "who", ["hi"]),
    S("הָאִישׁ", "The man", 3, "m", "who", ["ha", "ish"]), S("הָאִשָּׁה", "The woman", 3, "f", "who", ["ha", "isha"]),
    S("הָאִישׁ הַזֶּה", "This man", 3, "m", "who", ["ha", "ish", "ze"]), S("הָאִשָּׁה הַזֹּאת", "This woman", 3, "f", "who", ["ha", "isha", "zot"]),
    S("אִישׁ אֶחָד", "One man", 3, "m", "who", ["ish", "echad"]),
    S("הֶחָתוּל", "The cat", 3, "m", "pet", ["ha", "chatul"]), S("הַכֶּלֶב", "The dog", 3, "m", "pet", ["ha", "kelev"]),
    S("הֶחָתוּל הַזֶּה", "This cat", 3, "m", "pet", ["ha", "chatul", "ze"]), S("הַכֶּלֶב הַזֶּה", "This dog", 3, "m", "pet", ["ha", "kelev", "ze"]),
    S("הַבַּיִת", "The house", 3, "m", "thing", ["ha", "bayit"], { adj: ["gadol", "katan"] }),
    S("הַבַּיִת הַזֶּה", "This house", 3, "m", "thing", ["ha", "bayit", "ze"], { adj: ["gadol", "katan"] }),
    S("הַסֵּפֶר", "The book", 3, "m", "thing", ["ha", "sefer"], { adj: ["gadol", "katan", "tov"], inside: true }),
    S("הַסֵּפֶר הַזֶּה", "This book", 3, "m", "thing", ["ha", "sefer", "ze"], { adj: ["gadol", "katan", "tov"], inside: true }),
    S("הַלֶּחֶם", "The bread", 3, "m", "thing", ["ha", "lechem"], { adj: ["tov"], inside: true })
  ];
  const ADJ = { gadol: ["גָּדוֹל", "גְּדוֹלָה", "big"], katan: ["קָטָן", "קְטַנָּה", "small"], tov: ["טוֹב", "טוֹבָה", "good"] };

  /* ---- what verbs take (indefinite objects) ---- */
  const O = (v, en, uses) => ({ v, en, uses });
  const N = {
    cat: O("חָתוּל", "a cat", ["chatul"]), dog: O("כֶּלֶב", "a dog", ["kelev"]), book: O("סֵפֶר", "a book", ["sefer"]), house: O("בַּיִת", "a house", ["bayit"]),
    man: O("אִישׁ", "a man", ["ish"]), woman: O("אִשָּׁה", "a woman", ["isha"]), bread: O("לֶחֶם", "bread", ["lechem"]), water: O("מַיִם", "water", ["mayim"]),
    bigDog: O("כֶּלֶב גָּדוֹל", "a big dog", ["kelev", "gadol"]), smallCat: O("חָתוּל קָטָן", "a small cat", ["chatul", "katan"]),
    goodBook: O("סֵפֶר טוֹב", "a good book", ["sefer", "tov"]), bigHouse: O("בַּיִת גָּדוֹל", "a big house", ["bayit", "gadol"]),
    smallHouse: O("בַּיִת קָטָן", "a small house", ["bayit", "katan"]), goodBread: O("לֶחֶם טוֹב", "good bread", ["lechem", "tov"]),
    oneDog: O("כֶּלֶב אֶחָד", "one dog", ["kelev", "echad"]), oneBook: O("סֵפֶר אֶחָד", "one book", ["sefer", "echad"]),
    catDog: O("חָתוּל וְכֶלֶב", "a cat and a dog", ["chatul", "ve", "kelev"]), breadWater: O("לֶחֶם וּמַיִם", "bread and water", ["lechem", "ve", "mayim"]),
    goodMan: O("אִישׁ טוֹב", "a good man", ["ish", "tov"]), goodWoman: O("אִשָּׁה טוֹבָה", "a good woman", ["isha", "tov"])
  };
  const pickN = keys => keys.map(k => N[k]);
  const V = [   // m / f forms; English by person 1, 2, 3; `by` = who may do it; `obj` = what it takes (pets get a shorter list)
    { id: "lirot", m: "רוֹאֶה", f: "רוֹאָה", en: ["see", "see", "sees"], neg: ["do not see", "do not see", "does not see"], by: ["who", "pet"],
      obj: pickN(["cat", "dog", "book", "house", "man", "woman", "bigDog", "smallCat", "bigHouse", "smallHouse", "oneDog", "catDog"]) },
    { id: "lirtsot", m: "רוֹצֶה", f: "רוֹצָה", en: ["want", "want", "wants"], neg: ["do not want", "do not want", "does not want"], by: ["who", "pet"],
      obj: pickN(["cat", "dog", "book", "house", "bread", "water", "bigDog", "smallCat", "goodBook", "bigHouse", "smallHouse", "oneBook", "breadWater"]), pet: pickN(["bread", "water", "breadWater"]) },
    { id: "leehov", m: "אוֹהֵב", f: "אוֹהֶבֶת", en: ["like", "like", "likes"], neg: ["do not like", "do not like", "does not like"], by: ["who", "pet"],
      obj: pickN(["bread", "water", "goodBread", "breadWater"]) },
    { id: "leechol", m: "אוֹכֵל", f: "אוֹכֶלֶת", en: ["eat", "eat", "eats"], neg: ["do not eat", "do not eat", "does not eat"], by: ["who", "pet"],
      obj: pickN(["bread", "goodBread"]) },
    { id: "laasot", m: "עוֹשֶׂה", f: "עוֹשָׂה", en: ["make", "make", "makes"], by: ["who"], obj: pickN(["bread", "goodBread"]) },
    { id: "lalechet", m: "הוֹלֵךְ", f: "הוֹלֶכֶת", en: ["go", "go", "goes"], by: ["who", "pet"], obj: [O("לַבַּיִת", "to the house", ["bayit"])] }
  ];
  const IS = ["am", "are", "is"], ISNT = ["am not", "are not", "is not"], ISIN = ["am in", "are in", "is in"], ISNTIN = ["am not in", "are not in", "is not in"];
  const WAS = ["was", "were", "was"], WASIN = ["was in", "were in", "was in"];
  const past = s => s.p === 1 ? "הָיִיתִי" : s.p === 2 ? (s.g === "f" ? "הָיִית" : "הָיִיתָ") : (s.g === "f" ? "הָיְתָה" : "הָיָה");

  /* ---- build every sentence ---- */
  const lines = [], seen = new Set();
  const NOWORD = "(no word)";
  // a = subject, b = middle (may be ""), c = rest; en = the three English pieces; gl = what the feedback shows for the middle
  function add(a, b, c, en, uses, glMid) {
    const nq = [a.v, b, c].filter(Boolean).join(" ") + ".";
    if (seen.has(nq)) return; seen.add(nq);
    lines.push({ he: plain(nq.slice(0, -1)) + ".", nq, en, uses: [...new Set(uses)],
      gloss: [{ he: a.v, en: a.en, ids: a.uses.slice() }, { he: b || NOWORD, en: glMid || en[1] }, { he: c, en: en[2] }] });   // ids: the words the subject part tests (spaced repetition shares the rest out)
  }
  SUBJ.forEach(s => {
    const i = s.p - 1, f = s.g === "f";
    if (s.kind !== "thing") V.forEach(v => {
      if (!v.by.includes(s.kind)) return;
      const objs = s.kind === "pet" && v.pet ? v.pet : v.obj, vb = f ? v.f : v.m;
      objs.forEach(o => {
        add(s, vb, o.v, [s.en, v.en[i], o.en], s.uses.concat(v.id, o.uses));
        if (v.neg) add(s, "לֹא " + vb, o.v, [s.en, v.neg[i], o.en], s.uses.concat("lo", v.id, o.uses));
      });
    });
    const adjs = s.kind === "thing" ? s.adj : ["gadol", "katan", "tov"];
    adjs.forEach(k => {
      const a = ADJ[k], w = f ? a[1] : a[0];
      add(s, "", w, [s.en, IS[i], a[2]], s.uses.concat(k), "is (no word in Hebrew)");
      add(s, "לֹא", w, [s.en, ISNT[i], a[2]], s.uses.concat("lo", k), "not");
      add(s, past(s), w, [s.en, WAS[i], a[2]], s.uses.concat("lihyot", k));
    });
    if (s.kind !== "thing" || s.inside) {
      add(s, "", "בַּבַּיִת", [s.en, ISIN[i], "the house"], s.uses.concat("be", "bayit"), "is (no word in Hebrew)");
      add(s, "לֹא", "בַּבַּיִת", [s.en, ISNTIN[i], "the house"], s.uses.concat("lo", "be", "bayit"), "not");
      add(s, past(s), "בַּבַּיִת", [s.en, WASIN[i], "the house"], s.uses.concat("lihyot", "be", "bayit"));
    }
  });
  // there is …  in the house
  const YESH = { v: "יֵשׁ", en: "There is", uses: ["yesh"] };
  ["cat", "dog", "book", "bread", "water", "man", "woman", "bigDog", "smallCat", "goodBook", "oneDog", "catDog", "breadWater"].forEach(k => {
    const o = N[k];
    add(YESH, o.v, "בַּבַּיִת", ["There is", o.en, "in the house"], ["yesh", "be", "bayit"].concat(o.uses), o.en);
  });
  // this is …  /  this is not …
  const ZE = { v: "זֶה", en: "This", uses: ["ze"] }, ZOT = { v: "זֹאת", en: "This", uses: ["zot"] };
  ["cat", "dog", "book", "house", "man", "bread", "bigDog", "smallCat", "goodBook", "bigHouse", "smallHouse", "goodBread", "goodMan"].forEach(k => {
    const o = N[k];
    add(ZE, "", o.v, ["This", "is", o.en], ["ze"].concat(o.uses), "is (no word in Hebrew)");
    add(ZE, "לֹא", o.v, ["This", "is not", o.en], ["ze", "lo"].concat(o.uses), "not");
  });
  ["woman", "goodWoman"].forEach(k => {
    const o = N[k];
    add(ZOT, "", o.v, ["This", "is", o.en], ["zot"].concat(o.uses), "is (no word in Hebrew)");
    add(ZOT, "לֹא", o.v, ["This", "is not", o.en], ["zot", "lo"].concat(o.uses), "not");
  });

  /* ---- one meaning per written word, for the Hint (plain spelling, no vowel points) ---- */
  const words = {
    "אני": "I", "אתה": "you (m.)", "את": "you (f.)", "הוא": "he", "היא": "she",
    "האיש": "the man", "האישה": "the woman", "החתול": "the cat", "הכלב": "the dog", "הבית": "the house", "הספר": "the book", "הלחם": "the bread",
    "הזה": "this (after a masculine noun)", "הזאת": "this (after a feminine noun)", "זה": "this (masc.)", "זאת": "this (fem.)",
    "איש": "man", "אישה": "woman", "חתול": "cat", "כלב": "dog", "בית": "house", "ספר": "book", "מים": "water", "לחם": "bread",
    "אחד": "one", "גדול": "big", "גדולה": "big (fem.)", "קטן": "small", "קטנה": "small (fem.)", "טוב": "good", "טובה": "good (fem.)",
    "רואה": "see / sees (לראות)", "רוצה": "want / wants (לרצות)", "אוהב": "like / likes (לאהוב, masc.)", "אוהבת": "likes (לאהוב, fem.)",
    "אוכל": "eat / eats (לאכול, masc.)", "אוכלת": "eats (לאכול, fem.)", "עושה": "make / makes (לעשות)",
    "הולך": "go / goes (ללכת, masc.)", "הולכת": "goes (ללכת, fem.)",
    "הייתי": "I was (להיות)", "היית": "you were (להיות)", "היה": "was (להיות, masc.)", "הייתה": "was (להיות, fem.)",
    "יש": "there is", "לא": "not", "בבית": "in the house (ב + הבית)", "לבית": "to the house (ל + הבית)",
    "וכלב": "and a dog (ו + כלב)", "ומים": "and water (ו + מים)"
  };

  /* ---- the binder: r1–r6 between them use all 31 words (the easier settings show only those six) ---- */
  const R = (kind, title, file, l) => ({ kind, title, file, lines: l.map((x, i) => ({ id: file + "-" + i, he: plain(x[0].replace(/\.$/, "")) + ".", nq: x[0], en: x[1] })) });
  C.he.packs.common = {
    name: "31 most common words",
    briefing: [
      "Two countries share a continent: Valdora, the enemy, in the west, and Arden, yours, in the east. Each has two houses. Lose both houses and you lose the match.",
      "First you place your own houses, towers, bridge and trade route. Then the match begins: every Hebrew radio message you translate earns Intel. The messages use the most common Hebrew words, so finding the enemy houses is up to your scout teams.",
      "Spend Intel on scout teams, tanks, long-range missiles, airstrikes against the tanks that land in your country, and interceptors against incoming missiles. The enemy does the same, without waiting for you."
    ],
    vocab, words, referenceOnlyWords: [], lines,
    references: {
      r1: R("FIELD REPORT", "Field Report 14", "FR-14", [["אֲנִי רוֹאֶה חָתוּל וְכֶלֶב.", "I see a cat and a dog."], ["אַתָּה רוֹצֶה סֵפֶר.", "You want a book."]]),
      r2: R("PATROL LOG", "Patrol Log, Night Shift", "PL-03", [["הוּא אוֹכֵל לֶחֶם.", "He eats bread."], ["הִיא אוֹהֶבֶת מַיִם.", "She likes water."]]),
      r3: R("MOTOR POOL MEMO", "Motor Pool Memo", "MP-22", [["הָאִישׁ הוֹלֵךְ לַבַּיִת.", "The man goes to the house."], ["אַתְּ עוֹשָׂה לֶחֶם.", "You make bread."]]),
      r4: R("SURVEY NOTES", "Survey Notes, Grid West", "SV-07", [["הַכֶּלֶב גָּדוֹל.", "The dog is big."], ["הֶחָתוּל לֹא קָטָן.", "The cat is not small."]]),
      r5: R("SECTOR ATLAS", "Sector Atlas, p. 2", "AT-02", [["זֶה סֵפֶר טוֹב.", "This is a good book."], ["זֹאת אִשָּׁה.", "This is a woman."]]),
      r6: R("SENTRY NOTE", "Sentry Note", "SN-11", [["יֵשׁ כֶּלֶב אֶחָד בַּבַּיִת.", "There is one dog in the house."], ["הָאִשָּׁה הָיְתָה בַּבַּיִת.", "The woman was in the house."]]),
      r7: R("DEPOT LIST", "Depot List", "DL-40", [["הַבַּיִת קָטָן.", "The house is small."], ["אֲנִי לֹא בַּבַּיִת.", "I am not in the house."]]),
      r8: R("SIGNALS LOG", "Signals Log", "SG-05", [["הַלֶּחֶם טוֹב.", "The bread is good."], ["הִיא רוֹאָה אִישׁ.", "She sees a man."]]),
      r9: R("QUARTERMASTER NOTE", "Quartermaster Note", "QM-18", [["הוּא הָיָה גָּדוֹל.", "He was big."], ["יֵשׁ לֶחֶם וּמַיִם בַּבַּיִת.", "There is bread and water in the house."]])
    }
  };
})();
