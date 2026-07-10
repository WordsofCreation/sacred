export const genesisOneOneWords = [
  { order: 1, hebrew: 'בְּרֵאשִׁית', translation: 'In the beginning', slug: 'bereshit', available: true },
  { order: 2, hebrew: 'בָּרָא', translation: 'He created', slug: 'bara', available: true },
  { order: 3, hebrew: 'אֱלֹהִים', translation: 'God', slug: 'elohim', available: true },
  { order: 4, hebrew: 'אֵת', translation: 'Direct object marker / Aleph-Tav', slug: 'et', available: true },
  { order: 5, hebrew: 'הַשָּׁמַיִם', translation: 'The heavens', slug: 'hashamayim', available: true },
  { order: 6, hebrew: 'וְאֵת', translation: 'And the direct object marker / And Aleph-Tav', slug: 'veet', available: true },
  { order: 7, hebrew: 'הָאָרֶץ', translation: 'The earth', slug: 'haaretz', available: true },
];

export const genesisOneTwoWords = [
  { order: 1, hebrew: 'וְהָאָרֶץ', translation: 'And the earth', slug: 'vehaaretz', available: true },
  { order: 2, hebrew: 'הָיְתָה', translation: 'Was / became', slug: 'hayetah', available: true },
  { order: 3, hebrew: 'תֹהוּ', translation: 'Formless / waste', slug: 'tohu', available: true },
  { order: 4, hebrew: 'וָבֹהוּ', translation: 'And void / empty', slug: 'vavohu', available: true },
  { order: 5, hebrew: 'וְחֹשֶׁךְ', translation: 'And darkness', slug: 'vechoshekh', available: true },
  { order: 6, hebrew: 'עַל', translation: 'Upon / over', slug: 'al', available: true },
  { order: 7, hebrew: 'פְּנֵי', translation: 'Face / surface of', slug: 'penei', available: true },
  { order: 8, hebrew: 'תְהוֹם', translation: 'The deep', slug: 'tehom', available: true },
  { order: 9, hebrew: 'וְרוּחַ', translation: 'And Spirit / wind / breath', slug: 'veruach', available: true },
  { order: 10, hebrew: 'אֱלֹהִים', translation: 'God', slug: 'elohim', available: true },
  { order: 11, hebrew: 'מְרַחֶפֶת', translation: 'Hovering / brooding', slug: 'merachefet', available: true },
  { order: 12, hebrew: 'עַל', translation: 'Upon / over', slug: 'al', available: true },
  { order: 13, hebrew: 'פְּנֵי', translation: 'Face / surface of', slug: 'penei', available: true },
  { order: 14, hebrew: 'הַמָּיִם', translation: 'The waters', slug: 'hamayim', available: true },
];

export const wordStudies = [
  {
    slug: 'bereshit',
    hebrew: 'בְּרֵאשִׁית',
    transliteration: 'B’reshit / Bereshit',
    pronunciation: 'beh-ray-SHEET',
    passage: 'Genesis 1:1',
    basicTranslation: 'In the beginning',
    literalSense: 'In beginning / At the beginning / In the first',
    root: 'ראשׁ',
    rootTransliteration: 'rosh',
    rootMeaning: 'head, first, chief, beginning, source',
    grammar: 'The word combines the prefix בְּ with רֵאשִׁית.',
    spiritualTheme: 'The beginning is not only the start of time, but the source, head, and seed-pattern of creation.',
    relatedVerses: ['Genesis 1:1', 'John 1:1', 'Colossians 1:16', 'Revelation 22:13'],
    breakdown: [
      {
        part: 'בְּ־',
        meaning: 'in / with / by / at',
        function: 'Hebrew prepositional prefix attached directly to the word.',
      },
      {
        part: 'רֵאשִׁית',
        meaning: 'beginning, first, firstfruits, chief part, origin',
        connectedIdea: 'what is first, what is chief, what stands at the head.',
      },
    ],
    rootMeanings: ['head', 'top', 'beginning', 'first', 'chief', 'source', 'leader'],
    biblicalUsage: [
      { form: 'רֹאשׁ', sense: 'head, top, chief, leader' },
      { form: 'רֵאשִׁית', sense: 'beginning, first, firstfruits, choicest part' },
      { form: 'בְּרֵאשִׁית', sense: 'the opening word of Genesis' },
    ],
    occurrences: [
      {
        form: 'בְּרֵאשִׁית',
        reference: 'Genesis 1:1',
        book: 'genesis',
        chapter: 1,
        verse: 1,
        occurrence: 1,
        context: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים',
        note: 'The first word of the main Hebrew text.',
      },
    ],
    spiritualThemes: [
      'God precedes the beginning.',
      'Creation begins with order, not accident.',
      'The beginning contains the seed-pattern of what follows.',
      'The first word invites the reader to seek the source behind all things.',
      'The visible world comes forth from divine intention.',
    ],
    reflectionQuestions: [
      'What does it mean that Scripture begins with “beginning” before describing the created world?',
      'How does the idea of “head” or “source” deepen the meaning of beginning?',
      'What does this word reveal about divine order?',
      'Where do I seek the source behind what I see?',
      'How does John 1:1 reshape the way I contemplate Genesis 1:1?',
    ],
  },

  {
    slug: 'bara',
    hebrew: 'בָּרָא',
    transliteration: 'Bara',
    pronunciation: 'bah-RAH',
    passage: 'Genesis 1:1',
    basicTranslation: 'He created',
    literalSense: 'Created / brought into being / shaped by divine act',
    root: 'ברא',
    rootTransliteration: 'bara',
    rootMeaning: 'to create, form, bring into being, initiate something new',
    grammar: 'בָּרָא is a Qal perfect verb, third person masculine singular. In Genesis 1:1 it names the completed divine act: “He created.”',
    spiritualTheme: 'Creation begins as a sovereign act of God, bringing ordered reality into being by divine will.',
    relatedVerses: ['Genesis 1:1', 'Genesis 1:21', 'Genesis 1:27', 'Isaiah 43:1', 'Psalm 51:10', '2 Corinthians 5:17'],
    breakdown: [
      {
        part: 'בָּ',
        meaning: 'bet with qamats vowel sound',
        function: 'The opening consonant and vowel of the verb root as it appears in the Qal perfect form.',
      },
      {
        part: 'רָ',
        meaning: 'resh with qamats vowel sound',
        function: 'The middle root consonant carrying the verb form forward.',
      },
      {
        part: 'א',
        meaning: 'aleph, the final root letter',
        connectedIdea: 'The silent final letter closes the root and marks the word as ברא rather than a related sound pattern.',
      },
    ],
    rootMeanings: ['create', 'bring into being', 'form', 'fashion', 'initiate', 'make new', 'establish by divine act'],
    biblicalUsage: [
      { form: 'בָּרָא', sense: 'he created; used in Genesis 1:1 for God’s creation of the heavens and earth' },
      { form: 'וַיִּבְרָא', sense: 'and he created; repeated in Genesis 1 for living creatures and humankind' },
      { form: 'בְּרָא', sense: 'create; used in prayer and prophetic language for divine renewal and restoration' },
    ],
    occurrences: [
      {
        form: 'בָּרָא',
        reference: 'Genesis 1:1',
        book: 'genesis',
        chapter: 1,
        verse: 1,
        occurrence: 1,
        context: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים',
        note: 'The verb in the opening sentence of the main Hebrew text.',
      },
    ],
    spiritualThemes: [
      'God is the subject of the first verb in Scripture.',
      'Creation is presented as intentional, not accidental.',
      'The Creator is distinct from creation and sovereign over it.',
      'The same God who creates the heavens and earth can create a clean heart and a renewed people.',
      'בָּרָא invites trust in God’s power to begin what did not previously exist.',
    ],
    rootStudyNote: 'The verb ברא is especially associated with God’s creative action in Scripture. It can point to cosmic creation, the creation of humanity, or the renewal of a person or people by divine grace.',
    grammarNotes: [
      'בָּרָא is a verb, not a noun; it is the action word of Genesis 1:1.',
      'The form is Qal perfect, third person masculine singular: “he created.”',
      'In Genesis 1:1 the subject follows the verb: בָּרָא אֱלֹהִים — “created God,” meaning “God created.”',
      'Hebrew narrative often places the verb before the subject, so the verse immediately presents divine action.',
    ],
    usageNote: 'This word opens the Bible’s first act: God creates. Later uses broaden the meditation from cosmic beginnings to life, humanity, restoration, and inner renewal.',
    spiritualIntro: [
      'בָּרָא is the first verb of Scripture. After the opening word locates us “in the beginning,” this word reveals what happens there: God creates.',
      'The word turns contemplation into action. The beginning is not empty; it is filled with divine initiative. Before any creature acts, God acts.',
    ],
    messiahConnections: [
      'John 1:3 — All things came into being through the Word.',
      'Colossians 1:16 — All things were created through Him and for Him.',
      '2 Corinthians 5:17 — In Messiah there is new creation.',
      'Revelation 21:5 — “Behold, I am making all things new.”',
    ],
    messiahReflection: 'For Christian readers, בָּרָא can be contemplated alongside the New Testament witness that creation comes through the Word and that redemption is described as new creation. The Creator who brings forth heavens and earth also brings forth a renewed humanity in Messiah.',
    meditationIntro: [
      'This meditation is offered as contemplative reflection rather than strict grammar.',
      'בָּרָא can be approached as the sacred movement from divine intention into created reality. The word stands at the threshold where the unseen will of God becomes the ordered world.',
      'It invites meditation on the God who can begin, form, renew, and make new—not only at the cosmic scale, but also within the heart.',
    ],
    reflectionQuestions: [
      'What does it mean that the first action in Scripture belongs to God?',
      'How does בָּרָא shape the way I understand creation as intentional?',
      'Where do I need to trust God as Creator rather than only as helper or repairer?',
      'How does Psalm 51:10 deepen the meaning of divine creation within the heart?',
      'How does the idea of new creation in Messiah connect Genesis 1:1 to redemption?',
    ],
  },

  {
    slug: 'elohim',
    hebrew: 'אֱלֹהִים',
    transliteration: 'Elohim',
    pronunciation: 'eh-loh-HEEM',
    passage: 'Genesis 1:1',
    basicTranslation: 'God',
    literalSense: 'God / gods / mighty ones, according to context',
    root: 'אלה / אל',
    rootTransliteration: 'eloah / el',
    rootMeaning: 'God, deity, mighty one, strength, power',
    grammar: 'אֱלֹהִים is a masculine plural-form noun. In Genesis 1:1 it takes the singular verb בָּרָא, so the phrase identifies the one God as the Creator: “God created.”',
    spiritualTheme: 'The Creator named in the opening sentence is אֱלֹהִים: the mighty God whose power orders creation and whose majesty stands before all things.',
    relatedVerses: ['Genesis 1:1', 'Genesis 1:26', 'Deuteronomy 6:4', 'Psalm 82:1', 'Isaiah 45:18', 'John 1:1'],
    breakdown: [
      {
        part: 'אֱ',
        meaning: 'aleph with reduced vowel sound',
        function: 'The opening letter begins the divine title and carries the word into its first syllable.',
      },
      {
        part: 'לֹה',
        meaning: 'lamed-he sequence within the אלה word family',
        function: 'The central sound connects the word with the language of deity, might, and divine identity.',
      },
      {
        part: 'ִים',
        meaning: 'masculine plural ending',
        connectedIdea: 'Although the form is plural, Genesis 1:1 pairs it with a singular verb when speaking of the one Creator God.',
      },
    ],
    rootMeanings: ['God', 'deity', 'mighty one', 'strength', 'power', 'authority', 'judge'],
    biblicalUsage: [
      { form: 'אֱלֹהִים', sense: 'God; the divine title used for the Creator in Genesis 1:1' },
      { form: 'אֵל', sense: 'God, mighty one, strength; a shorter related divine title' },
      { form: 'אֱלוֹהַּ', sense: 'God; a singular form associated with the same word family' },
      { form: 'אֱלֹהִים', sense: 'gods, heavenly beings, or judges in some contexts; meaning is determined by grammar and setting' },
    ],
    occurrences: [
      {
        form: 'אֱלֹהִים',
        reference: 'Genesis 1:1',
        book: 'genesis',
        chapter: 1,
        verse: 1,
        occurrence: 1,
        context: 'בָּרָא אֱלֹהִים אֵת',
        note: 'The subject of the first verb in the main Hebrew text: God created.',
      },
    ],
    spiritualThemes: [
      'God is named before the heavens and the earth are described.',
      'The first subject of Scripture is not creation itself, but the Creator.',
      'The plural form with a singular verb invites reverent attention to divine majesty and unity.',
      'אֱלֹהִים reveals creation as the work of supreme power, wisdom, and authority.',
      'The God who creates also speaks, sees, separates, blesses, and names throughout Genesis 1.',
    ],
    rootStudyNote: 'אֱלֹהִים belongs to the biblical vocabulary of deity, power, and authority. The same form can be used differently across Scripture, but in Genesis 1:1 the singular verb בָּרָא makes the sense clear: the one God is the Creator.',
    grammarNotes: [
      'אֱלֹהִים has the form of a masculine plural noun because of the ִים ending.',
      'In Genesis 1:1 it is paired with the singular verb בָּרָא, “he created,” not a plural verb.',
      'Hebrew can use plural forms in divine titles or titles of majesty, while the surrounding grammar identifies whether the meaning is singular or plural.',
      'The word follows the verb in Genesis 1:1: בָּרָא אֱלֹהִים — “God created.”',
    ],
    usageNote: 'אֱלֹהִים is one of the most important divine titles in the Hebrew Bible. Genesis 1 uses it repeatedly to present God as Creator, speaker, orderer, judge, and blesser of the created world.',
    spiritualIntro: [
      'אֱלֹהִים is the first explicit name-title for God in Scripture. After “In the beginning” and “created,” the text reveals the subject of the act: God.',
      'The word gathers together majesty, power, authority, and divine presence. Creation does not arise from impersonal force; it comes from אֱלֹהִים, the living God who wills and orders all things.',
    ],
    messiahConnections: [
      'John 1:1 — The Word was with God, and the Word was God.',
      'John 1:3 — All things came into being through the Word.',
      'Colossians 1:15–17 — All things were created through Him and for Him.',
      'Hebrews 1:2–3 — God made the ages through the Son, who upholds all things.',
    ],
    messiahReflection: 'For Christian readers, אֱלֹהִים in Genesis 1:1 can be contemplated alongside the New Testament witness that the Word is with God and is God, and that all things are created through the Son. The Creator named at the beginning is not distant from redemption; creation and new creation meet in Messiah.',
    meditationIntro: [
      'This meditation is offered as contemplative reflection rather than strict grammar.',
      'אֱלֹהִים stands in the verse as the hidden source now named. The action of creation is not anonymous; the Creator steps into the sentence as the one whose majesty precedes all worlds.',
      'The plural shape of the word and the singular action of the verb invite contemplation of fullness and unity: abundant divine majesty expressed through one sovereign will.',
    ],
    reflectionQuestions: [
      'What changes when I read Genesis 1:1 with God, not creation, as the true center of the sentence?',
      'How does the singular verb with אֱלֹהִים shape the way I contemplate divine unity and majesty?',
      'Where do I need to remember that creation is governed by God’s authority rather than by chaos?',
      'How does Genesis 1 reveal God through action before any extended explanation?',
      'How do John 1 and Colossians 1 deepen the way I read אֱלֹהִים in the beginning?',
    ],
  },


  {
    slug: 'et',
    hebrew: 'אֵת',
    transliteration: 'Et',
    pronunciation: 'ayt',
    passage: 'Genesis 1:1',
    basicTranslation: 'Direct object marker / Aleph-Tav',
    literalSense: 'Marker pointing to the definite object of the verb',
    root: 'את',
    rootTransliteration: 'et',
    rootMeaning: 'with, near, beside; also the untranslatable direct object marker in Hebrew grammar',
    grammar: 'אֵת is the Hebrew definite direct object marker. It is not usually translated into English, but in Genesis 1:1 it marks הַשָּׁמַיִם, “the heavens,” as the object of בָּרָא, “created.”',
    spiritualTheme: 'The silent marker points toward what God creates, inviting attention to the whole span of creation under divine action.',
    relatedVerses: ['Genesis 1:1', 'Genesis 4:1', 'Exodus 20:12', 'Deuteronomy 6:5', 'John 1:3', 'Revelation 22:13'],
    breakdown: [
      {
        part: 'א',
        meaning: 'aleph, the first Hebrew letter',
        function: 'Begins the marker and invites later symbolic reflection on firstness and source.',
      },
      {
        part: 'ת',
        meaning: 'tav, the final Hebrew letter',
        connectedIdea: 'Completes the marker with the last letter, making אֵת a natural place for Aleph-Tav meditation.',
      },
    ],
    rootMeanings: ['direct object marker', 'with', 'near', 'beside', 'from aleph to tav', 'the marked object', 'that which receives the action'],
    biblicalUsage: [
      { form: 'אֵת', sense: 'definite direct object marker; usually untranslated in English' },
      { form: 'אֶת־', sense: 'the same marker joined by maqqef to the following word' },
      { form: 'אִתִּי / אִתְּךָ', sense: 'related “with” forms from the את word family' },
    ],
    occurrences: [
      {
        form: 'אֵת',
        reference: 'Genesis 1:1',
        book: 'genesis',
        chapter: 1,
        verse: 1,
        occurrence: 1,
        context: 'אֱלֹהִים אֵת הַשָּׁמַיִם',
        note: 'The first אֵת marks “the heavens” as the first named object of God’s creative act.',
      },
    ],
    spiritualThemes: [
      'Some of the most important Hebrew words are structurally present even when they are not translated.',
      'אֵת points away from itself and toward the object acted upon.',
      'The Aleph-Tav shape invites contemplation of beginning and completion.',
      'The heavens are not independent; they are marked as the object of God’s creating.',
      'The word teaches careful attention to what Scripture says and how it says it.',
    ],
    rootStudyNote: 'As a grammar marker, אֵת does not behave like an ordinary noun or verb. Its importance is syntactic: it identifies a definite object. Its two-letter form also invites traditional and contemplative meditation because it contains the first and last letters of the Hebrew alphabet.',
    grammarNotes: [
      'אֵת is usually left untranslated because English word order often shows the object without a marker.',
      'It normally appears before a definite direct object.',
      'In Genesis 1:1, אֵת points to הַשָּׁמַיִם, “the heavens.”',
      'The second object in the verse is introduced by וְאֵת, “and אֵת,” before הָאָרֶץ, “the earth.”',
    ],
    usageNote: 'Because אֵת is frequent and often untranslated, learning it helps readers see the underlying structure of Hebrew sentences. It is a signpost showing where the action of the verb lands.',
    spiritualIntro: [
      'אֵת is quiet in translation but visible in Hebrew. It stands between the Creator and the heavens, marking the first object named in the biblical account.',
      'The word trains the reader to notice what is hidden by translation: Hebrew often carries meaning not only through dictionary definitions, but also through structure, placement, and sacred attention.',
    ],
    messiahConnections: [
      'John 1:3 — All things came into being through the Word.',
      'Colossians 1:16 — All things in heaven and on earth were created through Him and for Him.',
      'Revelation 1:8 — The Lord is named Alpha and Omega.',
      'Revelation 22:13 — The first and the last, the beginning and the end.',
    ],
    messiahReflection: 'For Christian readers, the Aleph-Tav shape of אֵת naturally resonates with New Testament language of first and last. This is offered as theological meditation rather than the grammatical meaning of the Hebrew marker itself.',
    meditationIntro: [
      'This meditation is offered as contemplative reflection rather than strict grammar.',
      'אֵת gathers the first and last Hebrew letters into one small sign. Grammatically it points to the object; symbolically it can invite prayerful reflection on the fullness of creation held between beginning and completion.',
      'The marker does not draw attention to itself for long. It teaches a sacred discipline: to become a sign that points toward the work of God.',
    ],
    reflectionQuestions: [
      'What changes when I notice a word that English translation often leaves silent?',
      'How does אֵת help me see the heavens as the direct object of God’s creating?',
      'Where do I need to pay attention to small details that carry large meaning?',
      'How can Aleph-Tav meditation be held reverently without confusing symbol with grammar?',
      'What might it mean to become a signpost pointing toward God’s work?',
    ],
  },

  {
    slug: 'hashamayim',
    hebrew: 'הַשָּׁמַיִם',
    transliteration: 'HaShamayim',
    pronunciation: 'hah-shah-MAH-yeem',
    passage: 'Genesis 1:1',
    basicTranslation: 'The heavens',
    literalSense: 'The skies / the heavens / the heavenly realm',
    root: 'שׁמים',
    rootTransliteration: 'shamayim',
    rootMeaning: 'heavens, sky, lofty realm above',
    grammar: 'הַשָּׁמַיִם combines the definite article הַ with שָּׁמַיִם, a plural or dual-form noun meaning heavens or sky. In Genesis 1:1 it is the first named object of God’s creative act.',
    spiritualTheme: 'The heavens represent the height, expanse, and ordered realm above, created by God and not divine in themselves.',
    relatedVerses: ['Genesis 1:1', 'Genesis 1:8', 'Psalm 19:1', 'Isaiah 66:1', 'Matthew 6:9', 'Colossians 1:16'],
    breakdown: [
      { part: 'הַ־', meaning: 'the', function: 'Definite article attached to the noun.' },
      { part: 'שָּׁמַיִם', meaning: 'heavens, sky, lofty expanse', connectedIdea: 'The visible sky and the wider heavenly realm named as creation.' },
    ],
    rootMeanings: ['heavens', 'sky', 'height', 'upper realm', 'expanse', 'created heavens', 'dwelling imagery'],
    biblicalUsage: [
      { form: 'שָׁמַיִם', sense: 'heavens or sky, depending on context' },
      { form: 'הַשָּׁמַיִם', sense: 'the heavens; the definite heavenly expanse or realm' },
      { form: 'שְׁמֵי הַשָּׁמַיִם', sense: 'heaven of heavens; an intensified expression of the highest heavens' },
    ],
    occurrences: [
      { form: 'הַשָּׁמַיִם', reference: 'Genesis 1:1', book: 'genesis', chapter: 1, verse: 1, occurrence: 1, context: 'אֵת הַשָּׁמַיִם וְאֵת', note: 'The first created realm named in the opening verse.' },
    ],
    spiritualThemes: [
      'The heavens declare God’s glory but are not themselves God.',
      'The highest realm named by Scripture is still created by God.',
      'Genesis begins with a total vision: heaven and earth together.',
      'The heavens invite awe, humility, and worship.',
      'The Creator is beyond what is above and present to what is below.',
    ],
    rootStudyNote: 'שָׁמַיִם is a common biblical word for the sky or heavens. It can refer to the visible expanse above, the realm associated with God’s throne, or the whole upper register of creation depending on context.',
    grammarNotes: [
      'The initial הַ is the definite article, “the.”',
      'שָׁמַיִם has a plural or dual-like form and is commonly translated “heavens.”',
      'In Genesis 1:1 it is governed by the direct object marker אֵת.',
      'Together with הָאָרֶץ, it forms the merism “the heavens and the earth,” meaning the total created order.',
    ],
    usageNote: 'The Bible speaks of the heavens as sky, realm of worship, seat of divine rule, and witness to God’s glory. Genesis 1:1 establishes all of this as creation rather than creator.',
    spiritualIntro: [
      'הַשָּׁמַיִם lifts the reader’s eyes upward. After God is named, the first object of creation is the heavens—the vast height above human reach.',
      'Yet the verse does not worship the heavens. It places them under the creative act of God. Awe becomes rightly ordered when the heavens lead the heart back to their Maker.',
    ],
    messiahConnections: [
      'Matthew 6:9 — “Our Father in heaven” places prayer before the heavenly Father.',
      'John 3:13 — The Son of Man is associated with heaven in John’s witness.',
      'Colossians 1:16 — Things in heaven and on earth are created through and for Messiah.',
      'Ephesians 1:10 — All things in heaven and on earth are summed up in Messiah.',
    ],
    messiahReflection: 'For Christian readers, הַשָּׁמַיִם can be read with the confession that heavenly and earthly things are created through Messiah and reconciled under Him.',
    meditationIntro: [
      'This meditation is offered as contemplative reflection rather than strict grammar.',
      'The heavens can symbolize height, transcendence, glory, and mystery. In Genesis 1:1, even that height is not ultimate; it is created.',
      'Contemplating הַשָּׁמַיִם invites the soul to awe without idolatry: to lift the eyes, then lift the heart beyond the heavens to God.',
    ],
    reflectionQuestions: [
      'How does Genesis 1:1 shape the way I experience awe before the sky and stars?',
      'What does it mean that even the highest heavens are created?',
      'How does “heavens and earth” help me see creation as a whole?',
      'Where do I confuse a sign of glory with the source of glory?',
      'How do New Testament heaven-and-earth passages deepen this word for me?',
    ],
  },

  {
    slug: 'veet',
    hebrew: 'וְאֵת',
    transliteration: 'Ve’et',
    pronunciation: 'veh-AYT',
    passage: 'Genesis 1:1',
    basicTranslation: 'And the direct object marker / And Aleph-Tav',
    literalSense: 'And [marker of the definite direct object]',
    root: 'ו + את',
    rootTransliteration: 'vav + et',
    rootMeaning: 'and / connection + direct object marker',
    grammar: 'וְאֵת combines the conjunction וְ, “and,” with אֵת, the definite direct object marker. In Genesis 1:1 it introduces הָאָרֶץ, “the earth,” as the second named object of God’s creative act.',
    spiritualTheme: 'The word joins heaven and earth under one creative act, binding the upper and lower realms in the same sentence of divine origin.',
    relatedVerses: ['Genesis 1:1', 'Genesis 2:1', 'Exodus 20:11', 'Psalm 115:15', 'Acts 17:24', 'Colossians 1:16'],
    breakdown: [
      { part: 'וְ־', meaning: 'and', function: 'Conjunction prefix that joins words, phrases, and movements in Hebrew.' },
      { part: 'אֵת', meaning: 'direct object marker / Aleph-Tav', connectedIdea: 'Marks the following definite object, הָאָרֶץ, as receiving the creative action.' },
    ],
    rootMeanings: ['and', 'connection', 'joining', 'direct object marker', 'marked object', 'heaven and earth together'],
    biblicalUsage: [
      { form: 'וְ', sense: 'and; the common Hebrew conjunction prefix' },
      { form: 'אֵת', sense: 'definite direct object marker' },
      { form: 'וְאֵת', sense: 'and the direct object marker; used to introduce an additional definite object' },
    ],
    occurrences: [
      { form: 'וְאֵת', reference: 'Genesis 1:1', book: 'genesis', chapter: 1, verse: 1, occurrence: 1, context: 'הַשָּׁמַיִם וְאֵת הָאָרֶץ', note: 'The conjunction and marker introduce the earth after the heavens.' },
    ],
    spiritualThemes: [
      'God creates in ordered relationship, not isolated fragments.',
      'The conjunction joins the heavens and the earth in one created whole.',
      'The earth is not an afterthought; it is named with its own marker.',
      'Connection is part of the grammar of creation.',
      'The same creative will encompasses what is above and what is below.',
    ],
    rootStudyNote: 'וְאֵת is a compound of two common Hebrew elements: the conjunction וְ and the direct object marker אֵת. Its importance in Genesis 1:1 is relational: it joins the second object to the first and keeps both under the verb “created.”',
    grammarNotes: [
      'וְ is the standard Hebrew conjunction, often translated “and.”',
      'אֵת marks a definite direct object and is usually untranslated by itself.',
      'וְאֵת introduces הָאָרֶץ as the second object of בָּרָא.',
      'The phrase אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ forms a balanced pair: the heavens and the earth.',
    ],
    usageNote: 'This small word keeps the verse from naming only heaven. It carries the movement downward and completes the paired expression by adding earth to heaven.',
    spiritualIntro: [
      'וְאֵת is a joining word. It links what has already been named with what is about to be named, carrying the creative action from the heavens to the earth.',
      'The word teaches that creation is relationally ordered. The heavens and the earth belong together as one totality brought forth by God.',
    ],
    messiahConnections: [
      'Colossians 1:16 — Things in heaven and on earth are created through and for Messiah.',
      'Ephesians 1:10 — God’s purpose is to sum up all things in Messiah, things in heaven and things on earth.',
      'Philippians 2:10 — Every knee bows in heaven, on earth, and under the earth.',
      'Revelation 21:1 — A new heaven and a new earth are seen in the final vision.',
    ],
    messiahReflection: 'For Christian readers, וְאֵת can be contemplated as a grammatical joining that resonates with the larger biblical hope: heaven and earth reconciled and renewed under Messiah.',
    meditationIntro: [
      'This meditation is offered as contemplative reflection rather than strict grammar.',
      'The vav is a hook, a connector. Joined to אֵת, it becomes a small bridge between the heavens and the earth.',
      'Meditating on וְאֵת invites prayer over holy connection: what is above and below, unseen and seen, worship and daily life, all held together by God’s creative word.',
    ],
    reflectionQuestions: [
      'What does this joining word reveal about the unity of creation?',
      'How does וְאֵת keep the earth connected to the heavens in the verse?',
      'Where do I need to recover holy connection rather than fragmentation?',
      'How does the Bible’s heaven-and-earth language point toward renewal?',
      'What does it mean to live on earth in relation to heaven?',
    ],
  },

  {
    slug: 'haaretz',
    hebrew: 'הָאָרֶץ',
    transliteration: 'Ha’aretz',
    pronunciation: 'hah-AH-rets',
    passage: 'Genesis 1:1',
    basicTranslation: 'The earth',
    literalSense: 'The land / the earth / the ground realm',
    root: 'ארץ',
    rootTransliteration: 'eretz',
    rootMeaning: 'earth, land, ground, territory, inhabited world',
    grammar: 'הָאָרֶץ combines the definite article הָ with אָרֶץ, a feminine noun meaning earth or land. In Genesis 1:1 it is the second named object of God’s creative act.',
    spiritualTheme: 'The earth is the grounded realm of creaturely life, made by God and joined to the heavens in the total created order.',
    relatedVerses: ['Genesis 1:1', 'Genesis 1:10', 'Psalm 24:1', 'Isaiah 45:18', 'Matthew 5:5', 'Revelation 21:1'],
    breakdown: [
      { part: 'הָ־', meaning: 'the', function: 'Definite article before the guttural aleph, pronounced with a qamats vowel.' },
      { part: 'אָרֶץ', meaning: 'earth, land, ground, territory', connectedIdea: 'The lower realm, the land, and the world of embodied life.' },
    ],
    rootMeanings: ['earth', 'land', 'ground', 'territory', 'country', 'world', 'realm below'],
    biblicalUsage: [
      { form: 'אֶרֶץ / אָרֶץ', sense: 'earth, land, country, ground, depending on context' },
      { form: 'הָאָרֶץ', sense: 'the earth or the land' },
      { form: 'אֶרֶץ יִשְׂרָאֵל', sense: 'the land of Israel' },
    ],
    occurrences: [
      { form: 'הָאָרֶץ', reference: 'Genesis 1:1', book: 'genesis', chapter: 1, verse: 1, occurrence: 1, context: 'וְאֵת הָאָרֶץ', note: 'The final word of Genesis 1:1 completes the heaven-and-earth pair.' },
    ],
    spiritualThemes: [
      'The earth belongs to God because God created it.',
      'Embodied life and material creation are part of the sacred story from the first verse.',
      'Heaven and earth together name the fullness of creation.',
      'The final word of the opening verse lands the reader in the world where obedience, blessing, exile, and restoration unfold.',
      'The earth is not disposable; it is created, claimed, and destined for renewal.',
    ],
    rootStudyNote: 'אֶרֶץ can mean the whole earth, a particular land, a territory, or the ground realm in contrast with heaven. Context determines whether the emphasis is cosmic, geographic, covenantal, or practical.',
    grammarNotes: [
      'הָ is the definite article “the,” shaped by the following aleph.',
      'אָרֶץ is a feminine noun that can mean earth, land, country, or ground.',
      'In Genesis 1:1 it is governed by וְאֵת as the second definite object of “created.”',
      'As the last word of the verse, הָאָרֶץ completes the expression “the heavens and the earth.”',
    ],
    usageNote: 'The word אֶרֶץ becomes one of the Bible’s great theological words: earth as creation, land as inheritance, ground as human place, and world as the theater of God’s purposes.',
    spiritualIntro: [
      'הָאָרֶץ brings the opening verse down to the ground. The sentence that begins with “in the beginning” and names the heavens ends with the earth.',
      'This final word matters: the material world is not outside the sacred. It is created by God and becomes the place where the story of humanity, covenant, worship, and redemption unfolds.',
    ],
    messiahConnections: [
      'Matthew 5:5 — The meek shall inherit the earth.',
      'Romans 8:19–21 — Creation waits for liberation from bondage to decay.',
      'Colossians 1:16–20 — Things on earth are created and reconciled through Messiah.',
      'Revelation 21:1 — John sees a new heaven and a new earth.',
    ],
    messiahReflection: 'For Christian readers, הָאָרֶץ points toward the hope that the earth God created is also the earth God will renew. Redemption is not escape from creation, but the healing and fulfillment of God’s world in Messiah.',
    meditationIntro: [
      'This meditation is offered as contemplative reflection rather than strict grammar.',
      'הָאָרֶץ is the landing place of the verse. It invites contemplation of soil, body, place, responsibility, and blessing.',
      'To meditate on the earth as created is to receive the material world with reverence: not as ultimate, but as gift; not as ownerless, but as belonging to God.',
    ],
    reflectionQuestions: [
      'How does Genesis 1:1 shape the way I value the material world?',
      'What does it mean that the opening verse ends with the earth?',
      'Where do I need to practice reverence for place, body, and creation?',
      'How does the land/earth meaning of אֶרֶץ open later biblical themes?',
      'How does the promise of new earth reshape my hope?',
    ],
  },


  {
    slug: 'vehaaretz', hebrew: 'וְהָאָרֶץ', transliteration: 'Veha’aretz', pronunciation: 'veh-ha-AH-retz', passage: 'Genesis 1:2', basicTranslation: 'And the earth', literalSense: 'And the earth / and the land', root: 'ארץ', rootTransliteration: 'eretz', rootMeaning: 'earth, land, ground, territory', grammar: 'וְהָאָרֶץ joins the conjunction וְ (“and”) to הָאָרֶץ (“the earth”). Genesis 1:2 resumes the earth named at the end of Genesis 1:1.', spiritualTheme: 'The created earth now becomes the focus of God’s ordering work.', relatedVerses: ['Genesis 1:1', 'Genesis 1:2', 'Genesis 1:10', 'Psalm 24:1'], breakdown: [{ part: 'וְ־', meaning: 'and / now', function: 'Conjunction connecting verse 2 to the opening statement.' }, { part: 'הָאָרֶץ', meaning: 'the earth / the land', connectedIdea: 'The created realm that will be shaped for life.' }], rootMeanings: ['earth', 'land', 'ground', 'territory', 'world'], biblicalUsage: [{ form: 'אֶרֶץ', sense: 'earth, land, or ground' }, { form: 'הָאָרֶץ', sense: 'the earth or the land' }, { form: 'וְהָאָרֶץ', sense: 'and the earth' }], occurrences: [{ form: 'וְהָאָרֶץ', reference: 'Genesis 1:2', book: 'genesis', chapter: 1, verse: 2, occurrence: 1, context: 'וְהָאָרֶץ הָיְתָה תֹהוּ', note: 'The first word of Genesis 1:2 shifts attention to the earth.' }], spiritualThemes: ['God’s creation is about to be ordered for life.', 'The earth is not abandoned in its unformed state.', 'The story moves from cosmic creation to God’s patient forming of a habitable world.'], rootStudyNote: 'This form carries forward the same earth/land word from Genesis 1:1, now with the conjunction that begins the verse.', grammarNotes: ['וְ is the common Hebrew conjunction.', 'הָ marks the noun as definite: “the earth.”', 'The word opens a clause that describes the condition of the earth before the creative commands that follow.'], usageNote: 'Genesis 1:2 focuses on the earth as the realm that God will order, fill, and bless.', spiritualIntro: ['וְהָאָרֶץ begins the next movement of the creation account.', 'The verse does not leave the earth as a concept; it shows the earth awaiting divine ordering.'], messiahConnections: ['Romans 8:19–21 — Creation waits for liberation.', 'Colossians 1:16–20 — Earthly things are created and reconciled through Messiah.', 'Revelation 21:1 — A new heaven and a new earth.'], messiahReflection: 'For Christian readers, the earth that begins unformed and waiting points toward the larger hope of creation brought to fullness in Messiah.', meditationIntro: ['This meditation is offered as contemplative reflection rather than strict grammar.', 'וְהָאָרֶץ can be contemplated as the created realm awaiting formation, light, and blessing.'], reflectionQuestions: ['What does it mean that God attends to the earth in its unformed condition?', 'Where do I need to trust God’s ordering work?', 'How does this word connect Genesis 1:1 and Genesis 1:2?']
  },
  {
    slug: 'hayetah', hebrew: 'הָיְתָה', transliteration: 'Hayetah', pronunciation: 'hai-teh-TAH', passage: 'Genesis 1:2', basicTranslation: 'Was / became', literalSense: 'Was / existed / became', root: 'היה', rootTransliteration: 'hayah', rootMeaning: 'to be, become, happen', grammar: 'הָיְתָה is the Qal perfect third feminine singular form of היה, agreeing with הָאָרֶץ.', spiritualTheme: 'Genesis 1:2 presents the unformed world under God’s attentive presence, moving toward light, order, and life.', relatedVerses: ['Genesis 1:2', 'Genesis 1:3', 'Psalm 104:30', 'John 1:1–5'], breakdown: [{ part: 'הָיְתָה', meaning: 'Was / became', function: 'The word contributes to the description of the earth before the first divine command of light.' }], rootMeanings: ['to be, become, happen', 'creation context', 'ordering movement'], biblicalUsage: [{ form: 'הָיְתָה', sense: 'Was / existed / became' }, { form: 'היה', sense: 'to be, become, happen' }], occurrences: [{ form: 'הָיְתָה', reference: 'Genesis 1:2', book: 'genesis', chapter: 1, verse: 2, occurrence: 1, context: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם', note: 'A word in the descriptive opening of Genesis 1:2.' }], spiritualThemes: ['God is present before visible order appears.', 'The verse names condition honestly while moving toward divine speech.', 'Creation is shaped through patient ordering, separating, filling, and blessing.'], rootStudyNote: 'This study introduces the word as it appears in Genesis 1:2 and invites further tracing through Scripture.', grammarNotes: ['This word appears in Genesis 1:2 within the description of the earth before the command “Let there be light.”', 'Its exact nuance is shaped by the surrounding words and by the movement from formlessness toward order.', 'The word study search below can be used to find additional occurrences in the available Hebrew text.'], usageNote: 'In Genesis 1:2, הָיְתָה belongs to the threshold scene before the first spoken creative command.', spiritualIntro: ['הָיְתָה is part of the second verse’s meditation on creation before visible light.', 'The word helps describe the scene over which God’s Spirit moves and into which God will speak.'], messiahConnections: ['John 1:4–5 — Life and light shine in the darkness.', 'Colossians 1:16–17 — All things hold together in Messiah.', '2 Corinthians 4:6 — God shines light in hearts as at creation.'], messiahReflection: 'For Christian readers, Genesis 1:2 can be contemplated with the New Testament theme of divine light entering darkness and new creation emerging by God’s word.', meditationIntro: ['This meditation is offered as contemplative reflection rather than strict grammar.', 'הָיְתָה invites contemplation of the threshold between unformed potential and God’s ordering word.'], reflectionQuestions: ['What does this word reveal about the world before visible order?', 'Where do I recognize a need for God’s hovering presence and creative word?', 'How does Genesis 1:2 prepare the way for “Let there be light”?']
  },
  {
    slug: 'tohu', hebrew: 'תֹהוּ', transliteration: 'Tohu', pronunciation: 'TOH-hoo', passage: 'Genesis 1:2', basicTranslation: 'Formless / waste', literalSense: 'formlessness, wasteland, emptiness', root: 'תהו', rootTransliteration: 'tohu', rootMeaning: 'formlessness, waste, emptiness', grammar: 'תֹהוּ is a noun describing an unformed, uninhabitable, or waste condition.', spiritualTheme: 'Genesis 1:2 presents the unformed world under God’s attentive presence, moving toward light, order, and life.', relatedVerses: ['Genesis 1:2', 'Genesis 1:3', 'Psalm 104:30', 'John 1:1–5'], breakdown: [{ part: 'תֹהוּ', meaning: 'Formless / waste', function: 'The word contributes to the description of the earth before the first divine command of light.' }], rootMeanings: ['formlessness, waste, emptiness', 'creation context', 'ordering movement'], biblicalUsage: [{ form: 'תֹהוּ', sense: 'formlessness, wasteland, emptiness' }, { form: 'תהו', sense: 'formlessness, waste, emptiness' }], occurrences: [{ form: 'תֹהוּ', reference: 'Genesis 1:2', book: 'genesis', chapter: 1, verse: 2, occurrence: 1, context: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם', note: 'A word in the descriptive opening of Genesis 1:2.' }], spiritualThemes: ['God is present before visible order appears.', 'The verse names condition honestly while moving toward divine speech.', 'Creation is shaped through patient ordering, separating, filling, and blessing.'], rootStudyNote: 'This study introduces the word as it appears in Genesis 1:2 and invites further tracing through Scripture.', grammarNotes: ['This word appears in Genesis 1:2 within the description of the earth before the command “Let there be light.”', 'Its exact nuance is shaped by the surrounding words and by the movement from formlessness toward order.', 'The word study search below can be used to find additional occurrences in the available Hebrew text.'], usageNote: 'In Genesis 1:2, תֹהוּ belongs to the threshold scene before the first spoken creative command.', spiritualIntro: ['תֹהוּ is part of the second verse’s meditation on creation before visible light.', 'The word helps describe the scene over which God’s Spirit moves and into which God will speak.'], messiahConnections: ['John 1:4–5 — Life and light shine in the darkness.', 'Colossians 1:16–17 — All things hold together in Messiah.', '2 Corinthians 4:6 — God shines light in hearts as at creation.'], messiahReflection: 'For Christian readers, Genesis 1:2 can be contemplated with the New Testament theme of divine light entering darkness and new creation emerging by God’s word.', meditationIntro: ['This meditation is offered as contemplative reflection rather than strict grammar.', 'תֹהוּ invites contemplation of the threshold between unformed potential and God’s ordering word.'], reflectionQuestions: ['What does this word reveal about the world before visible order?', 'Where do I recognize a need for God’s hovering presence and creative word?', 'How does Genesis 1:2 prepare the way for “Let there be light”?']
  },
  {
    slug: 'vavohu', hebrew: 'וָבֹהוּ', transliteration: 'Vavohu', pronunciation: 'vah-VOH-hoo', passage: 'Genesis 1:2', basicTranslation: 'And void', literalSense: 'and emptiness / and void', root: 'בהו', rootTransliteration: 'bohu', rootMeaning: 'emptiness, void', grammar: 'וָבֹהוּ joins וָ (“and”) to בֹהוּ, a rare noun paired with תֹהוּ.', spiritualTheme: 'Genesis 1:2 presents the unformed world under God’s attentive presence, moving toward light, order, and life.', relatedVerses: ['Genesis 1:2', 'Genesis 1:3', 'Psalm 104:30', 'John 1:1–5'], breakdown: [{ part: 'וָבֹהוּ', meaning: 'And void', function: 'The word contributes to the description of the earth before the first divine command of light.' }], rootMeanings: ['emptiness, void', 'creation context', 'ordering movement'], biblicalUsage: [{ form: 'וָבֹהוּ', sense: 'and emptiness / and void' }, { form: 'בהו', sense: 'emptiness, void' }], occurrences: [{ form: 'וָבֹהוּ', reference: 'Genesis 1:2', book: 'genesis', chapter: 1, verse: 2, occurrence: 1, context: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם', note: 'A word in the descriptive opening of Genesis 1:2.' }], spiritualThemes: ['God is present before visible order appears.', 'The verse names condition honestly while moving toward divine speech.', 'Creation is shaped through patient ordering, separating, filling, and blessing.'], rootStudyNote: 'This study introduces the word as it appears in Genesis 1:2 and invites further tracing through Scripture.', grammarNotes: ['This word appears in Genesis 1:2 within the description of the earth before the command “Let there be light.”', 'Its exact nuance is shaped by the surrounding words and by the movement from formlessness toward order.', 'The word study search below can be used to find additional occurrences in the available Hebrew text.'], usageNote: 'In Genesis 1:2, וָבֹהוּ belongs to the threshold scene before the first spoken creative command.', spiritualIntro: ['וָבֹהוּ is part of the second verse’s meditation on creation before visible light.', 'The word helps describe the scene over which God’s Spirit moves and into which God will speak.'], messiahConnections: ['John 1:4–5 — Life and light shine in the darkness.', 'Colossians 1:16–17 — All things hold together in Messiah.', '2 Corinthians 4:6 — God shines light in hearts as at creation.'], messiahReflection: 'For Christian readers, Genesis 1:2 can be contemplated with the New Testament theme of divine light entering darkness and new creation emerging by God’s word.', meditationIntro: ['This meditation is offered as contemplative reflection rather than strict grammar.', 'וָבֹהוּ invites contemplation of the threshold between unformed potential and God’s ordering word.'], reflectionQuestions: ['What does this word reveal about the world before visible order?', 'Where do I recognize a need for God’s hovering presence and creative word?', 'How does Genesis 1:2 prepare the way for “Let there be light”?']
  },
  {
    slug: 'vechoshekh', hebrew: 'וְחֹשֶׁךְ', transliteration: 'Vechoshekh', pronunciation: 'veh-KHOH-shekh', passage: 'Genesis 1:2', basicTranslation: 'And darkness', literalSense: 'and darkness', root: 'חשך', rootTransliteration: 'choshekh', rootMeaning: 'darkness, obscurity', grammar: 'וְחֹשֶׁךְ joins the conjunction to the noun for darkness.', spiritualTheme: 'Genesis 1:2 presents the unformed world under God’s attentive presence, moving toward light, order, and life.', relatedVerses: ['Genesis 1:2', 'Genesis 1:3', 'Psalm 104:30', 'John 1:1–5'], breakdown: [{ part: 'וְחֹשֶׁךְ', meaning: 'And darkness', function: 'The word contributes to the description of the earth before the first divine command of light.' }], rootMeanings: ['darkness, obscurity', 'creation context', 'ordering movement'], biblicalUsage: [{ form: 'וְחֹשֶׁךְ', sense: 'and darkness' }, { form: 'חשך', sense: 'darkness, obscurity' }], occurrences: [{ form: 'וְחֹשֶׁךְ', reference: 'Genesis 1:2', book: 'genesis', chapter: 1, verse: 2, occurrence: 1, context: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם', note: 'A word in the descriptive opening of Genesis 1:2.' }], spiritualThemes: ['God is present before visible order appears.', 'The verse names condition honestly while moving toward divine speech.', 'Creation is shaped through patient ordering, separating, filling, and blessing.'], rootStudyNote: 'This study introduces the word as it appears in Genesis 1:2 and invites further tracing through Scripture.', grammarNotes: ['This word appears in Genesis 1:2 within the description of the earth before the command “Let there be light.”', 'Its exact nuance is shaped by the surrounding words and by the movement from formlessness toward order.', 'The word study search below can be used to find additional occurrences in the available Hebrew text.'], usageNote: 'In Genesis 1:2, וְחֹשֶׁךְ belongs to the threshold scene before the first spoken creative command.', spiritualIntro: ['וְחֹשֶׁךְ is part of the second verse’s meditation on creation before visible light.', 'The word helps describe the scene over which God’s Spirit moves and into which God will speak.'], messiahConnections: ['John 1:4–5 — Life and light shine in the darkness.', 'Colossians 1:16–17 — All things hold together in Messiah.', '2 Corinthians 4:6 — God shines light in hearts as at creation.'], messiahReflection: 'For Christian readers, Genesis 1:2 can be contemplated with the New Testament theme of divine light entering darkness and new creation emerging by God’s word.', meditationIntro: ['This meditation is offered as contemplative reflection rather than strict grammar.', 'וְחֹשֶׁךְ invites contemplation of the threshold between unformed potential and God’s ordering word.'], reflectionQuestions: ['What does this word reveal about the world before visible order?', 'Where do I recognize a need for God’s hovering presence and creative word?', 'How does Genesis 1:2 prepare the way for “Let there be light”?']
  },
  {
    slug: 'al', hebrew: 'עַל', transliteration: 'Al', pronunciation: 'ahl', passage: 'Genesis 1:2', basicTranslation: 'Upon / over', literalSense: 'upon, over, above, concerning', root: 'על', rootTransliteration: 'al', rootMeaning: 'over, upon, against, concerning', grammar: 'עַל is a common Hebrew preposition of position, relation, or direction.', spiritualTheme: 'Genesis 1:2 presents the unformed world under God’s attentive presence, moving toward light, order, and life.', relatedVerses: ['Genesis 1:2', 'Genesis 1:3', 'Psalm 104:30', 'John 1:1–5'], breakdown: [{ part: 'עַל', meaning: 'Upon / over', function: 'The word contributes to the description of the earth before the first divine command of light.' }], rootMeanings: ['over, upon, against, concerning', 'creation context', 'ordering movement'], biblicalUsage: [{ form: 'עַל', sense: 'upon, over, above, concerning' }, { form: 'על', sense: 'over, upon, against, concerning' }], occurrences: [{ form: 'עַל', reference: 'Genesis 1:2', book: 'genesis', chapter: 1, verse: 2, occurrence: 1, context: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם', note: 'A word in the descriptive opening of Genesis 1:2.' }], spiritualThemes: ['God is present before visible order appears.', 'The verse names condition honestly while moving toward divine speech.', 'Creation is shaped through patient ordering, separating, filling, and blessing.'], rootStudyNote: 'This study introduces the word as it appears in Genesis 1:2 and invites further tracing through Scripture.', grammarNotes: ['This word appears in Genesis 1:2 within the description of the earth before the command “Let there be light.”', 'Its exact nuance is shaped by the surrounding words and by the movement from formlessness toward order.', 'The word study search below can be used to find additional occurrences in the available Hebrew text.'], usageNote: 'In Genesis 1:2, עַל belongs to the threshold scene before the first spoken creative command.', spiritualIntro: ['עַל is part of the second verse’s meditation on creation before visible light.', 'The word helps describe the scene over which God’s Spirit moves and into which God will speak.'], messiahConnections: ['John 1:4–5 — Life and light shine in the darkness.', 'Colossians 1:16–17 — All things hold together in Messiah.', '2 Corinthians 4:6 — God shines light in hearts as at creation.'], messiahReflection: 'For Christian readers, Genesis 1:2 can be contemplated with the New Testament theme of divine light entering darkness and new creation emerging by God’s word.', meditationIntro: ['This meditation is offered as contemplative reflection rather than strict grammar.', 'עַל invites contemplation of the threshold between unformed potential and God’s ordering word.'], reflectionQuestions: ['What does this word reveal about the world before visible order?', 'Where do I recognize a need for God’s hovering presence and creative word?', 'How does Genesis 1:2 prepare the way for “Let there be light”?']
  },
  {
    slug: 'penei', hebrew: 'פְּנֵי', transliteration: 'Penei', pronunciation: 'peh-NAY', passage: 'Genesis 1:2', basicTranslation: 'Face / surface of', literalSense: 'face of / surface of / presence of', root: 'פנה / פנים', rootTransliteration: 'panim', rootMeaning: 'face, surface, presence', grammar: 'פְּנֵי is the construct form of פָּנִים, linking “face/surface” to the following noun.', spiritualTheme: 'Genesis 1:2 presents the unformed world under God’s attentive presence, moving toward light, order, and life.', relatedVerses: ['Genesis 1:2', 'Genesis 1:3', 'Psalm 104:30', 'John 1:1–5'], breakdown: [{ part: 'פְּנֵי', meaning: 'Face / surface of', function: 'The word contributes to the description of the earth before the first divine command of light.' }], rootMeanings: ['face, surface, presence', 'creation context', 'ordering movement'], biblicalUsage: [{ form: 'פְּנֵי', sense: 'face of / surface of / presence of' }, { form: 'פנה / פנים', sense: 'face, surface, presence' }], occurrences: [{ form: 'פְּנֵי', reference: 'Genesis 1:2', book: 'genesis', chapter: 1, verse: 2, occurrence: 1, context: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם', note: 'A word in the descriptive opening of Genesis 1:2.' }], spiritualThemes: ['God is present before visible order appears.', 'The verse names condition honestly while moving toward divine speech.', 'Creation is shaped through patient ordering, separating, filling, and blessing.'], rootStudyNote: 'This study introduces the word as it appears in Genesis 1:2 and invites further tracing through Scripture.', grammarNotes: ['This word appears in Genesis 1:2 within the description of the earth before the command “Let there be light.”', 'Its exact nuance is shaped by the surrounding words and by the movement from formlessness toward order.', 'The word study search below can be used to find additional occurrences in the available Hebrew text.'], usageNote: 'In Genesis 1:2, פְּנֵי belongs to the threshold scene before the first spoken creative command.', spiritualIntro: ['פְּנֵי is part of the second verse’s meditation on creation before visible light.', 'The word helps describe the scene over which God’s Spirit moves and into which God will speak.'], messiahConnections: ['John 1:4–5 — Life and light shine in the darkness.', 'Colossians 1:16–17 — All things hold together in Messiah.', '2 Corinthians 4:6 — God shines light in hearts as at creation.'], messiahReflection: 'For Christian readers, Genesis 1:2 can be contemplated with the New Testament theme of divine light entering darkness and new creation emerging by God’s word.', meditationIntro: ['This meditation is offered as contemplative reflection rather than strict grammar.', 'פְּנֵי invites contemplation of the threshold between unformed potential and God’s ordering word.'], reflectionQuestions: ['What does this word reveal about the world before visible order?', 'Where do I recognize a need for God’s hovering presence and creative word?', 'How does Genesis 1:2 prepare the way for “Let there be light”?']
  },
  {
    slug: 'tehom', hebrew: 'תְהוֹם', transliteration: 'Tehom', pronunciation: 'teh-HOME', passage: 'Genesis 1:2', basicTranslation: 'The deep', literalSense: 'deep, abyss, watery depth', root: 'תהום', rootTransliteration: 'tehom', rootMeaning: 'deep, abyss, primeval waters', grammar: 'תְהוֹם names the deep waters over whose surface darkness is described.', spiritualTheme: 'Genesis 1:2 presents the unformed world under God’s attentive presence, moving toward light, order, and life.', relatedVerses: ['Genesis 1:2', 'Genesis 1:3', 'Psalm 104:30', 'John 1:1–5'], breakdown: [{ part: 'תְהוֹם', meaning: 'The deep', function: 'The word contributes to the description of the earth before the first divine command of light.' }], rootMeanings: ['deep, abyss, primeval waters', 'creation context', 'ordering movement'], biblicalUsage: [{ form: 'תְהוֹם', sense: 'deep, abyss, watery depth' }, { form: 'תהום', sense: 'deep, abyss, primeval waters' }], occurrences: [{ form: 'תְהוֹם', reference: 'Genesis 1:2', book: 'genesis', chapter: 1, verse: 2, occurrence: 1, context: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם', note: 'A word in the descriptive opening of Genesis 1:2.' }], spiritualThemes: ['God is present before visible order appears.', 'The verse names condition honestly while moving toward divine speech.', 'Creation is shaped through patient ordering, separating, filling, and blessing.'], rootStudyNote: 'This study introduces the word as it appears in Genesis 1:2 and invites further tracing through Scripture.', grammarNotes: ['This word appears in Genesis 1:2 within the description of the earth before the command “Let there be light.”', 'Its exact nuance is shaped by the surrounding words and by the movement from formlessness toward order.', 'The word study search below can be used to find additional occurrences in the available Hebrew text.'], usageNote: 'In Genesis 1:2, תְהוֹם belongs to the threshold scene before the first spoken creative command.', spiritualIntro: ['תְהוֹם is part of the second verse’s meditation on creation before visible light.', 'The word helps describe the scene over which God’s Spirit moves and into which God will speak.'], messiahConnections: ['John 1:4–5 — Life and light shine in the darkness.', 'Colossians 1:16–17 — All things hold together in Messiah.', '2 Corinthians 4:6 — God shines light in hearts as at creation.'], messiahReflection: 'For Christian readers, Genesis 1:2 can be contemplated with the New Testament theme of divine light entering darkness and new creation emerging by God’s word.', meditationIntro: ['This meditation is offered as contemplative reflection rather than strict grammar.', 'תְהוֹם invites contemplation of the threshold between unformed potential and God’s ordering word.'], reflectionQuestions: ['What does this word reveal about the world before visible order?', 'Where do I recognize a need for God’s hovering presence and creative word?', 'How does Genesis 1:2 prepare the way for “Let there be light”?']
  },
  {
    slug: 'veruach', hebrew: 'וְרוּחַ', transliteration: 'Veruach', pronunciation: 'veh-ROO-akh', passage: 'Genesis 1:2', basicTranslation: 'And Spirit / wind / breath', literalSense: 'and spirit, wind, or breath', root: 'רוח', rootTransliteration: 'ruach', rootMeaning: 'spirit, wind, breath', grammar: 'וְרוּחַ joins the conjunction to a noun that can mean spirit, wind, or breath.', spiritualTheme: 'Genesis 1:2 presents the unformed world under God’s attentive presence, moving toward light, order, and life.', relatedVerses: ['Genesis 1:2', 'Genesis 1:3', 'Psalm 104:30', 'John 1:1–5'], breakdown: [{ part: 'וְרוּחַ', meaning: 'And Spirit / wind / breath', function: 'The word contributes to the description of the earth before the first divine command of light.' }], rootMeanings: ['spirit, wind, breath', 'creation context', 'ordering movement'], biblicalUsage: [{ form: 'וְרוּחַ', sense: 'and spirit, wind, or breath' }, { form: 'רוח', sense: 'spirit, wind, breath' }], occurrences: [{ form: 'וְרוּחַ', reference: 'Genesis 1:2', book: 'genesis', chapter: 1, verse: 2, occurrence: 1, context: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם', note: 'A word in the descriptive opening of Genesis 1:2.' }], spiritualThemes: ['God is present before visible order appears.', 'The verse names condition honestly while moving toward divine speech.', 'Creation is shaped through patient ordering, separating, filling, and blessing.'], rootStudyNote: 'This study introduces the word as it appears in Genesis 1:2 and invites further tracing through Scripture.', grammarNotes: ['This word appears in Genesis 1:2 within the description of the earth before the command “Let there be light.”', 'Its exact nuance is shaped by the surrounding words and by the movement from formlessness toward order.', 'The word study search below can be used to find additional occurrences in the available Hebrew text.'], usageNote: 'In Genesis 1:2, וְרוּחַ belongs to the threshold scene before the first spoken creative command.', spiritualIntro: ['וְרוּחַ is part of the second verse’s meditation on creation before visible light.', 'The word helps describe the scene over which God’s Spirit moves and into which God will speak.'], messiahConnections: ['John 1:4–5 — Life and light shine in the darkness.', 'Colossians 1:16–17 — All things hold together in Messiah.', '2 Corinthians 4:6 — God shines light in hearts as at creation.'], messiahReflection: 'For Christian readers, Genesis 1:2 can be contemplated with the New Testament theme of divine light entering darkness and new creation emerging by God’s word.', meditationIntro: ['This meditation is offered as contemplative reflection rather than strict grammar.', 'וְרוּחַ invites contemplation of the threshold between unformed potential and God’s ordering word.'], reflectionQuestions: ['What does this word reveal about the world before visible order?', 'Where do I recognize a need for God’s hovering presence and creative word?', 'How does Genesis 1:2 prepare the way for “Let there be light”?']
  },
  {
    slug: 'merachefet', hebrew: 'מְרַחֶפֶת', transliteration: 'Merachefet', pronunciation: 'meh-rah-KHEH-fet', passage: 'Genesis 1:2', basicTranslation: 'Hovering', literalSense: 'hovering, fluttering, brooding', root: 'רחף', rootTransliteration: 'rachaf', rootMeaning: 'hover, flutter, tremble', grammar: 'מְרַחֶפֶת is a feminine singular participle describing the activity of רוּחַ אֱלֹהִים.', spiritualTheme: 'Genesis 1:2 presents the unformed world under God’s attentive presence, moving toward light, order, and life.', relatedVerses: ['Genesis 1:2', 'Genesis 1:3', 'Psalm 104:30', 'John 1:1–5'], breakdown: [{ part: 'מְרַחֶפֶת', meaning: 'Hovering', function: 'The word contributes to the description of the earth before the first divine command of light.' }], rootMeanings: ['hover, flutter, tremble', 'creation context', 'ordering movement'], biblicalUsage: [{ form: 'מְרַחֶפֶת', sense: 'hovering, fluttering, brooding' }, { form: 'רחף', sense: 'hover, flutter, tremble' }], occurrences: [{ form: 'מְרַחֶפֶת', reference: 'Genesis 1:2', book: 'genesis', chapter: 1, verse: 2, occurrence: 1, context: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם', note: 'A word in the descriptive opening of Genesis 1:2.' }], spiritualThemes: ['God is present before visible order appears.', 'The verse names condition honestly while moving toward divine speech.', 'Creation is shaped through patient ordering, separating, filling, and blessing.'], rootStudyNote: 'This study introduces the word as it appears in Genesis 1:2 and invites further tracing through Scripture.', grammarNotes: ['This word appears in Genesis 1:2 within the description of the earth before the command “Let there be light.”', 'Its exact nuance is shaped by the surrounding words and by the movement from formlessness toward order.', 'The word study search below can be used to find additional occurrences in the available Hebrew text.'], usageNote: 'In Genesis 1:2, מְרַחֶפֶת belongs to the threshold scene before the first spoken creative command.', spiritualIntro: ['מְרַחֶפֶת is part of the second verse’s meditation on creation before visible light.', 'The word helps describe the scene over which God’s Spirit moves and into which God will speak.'], messiahConnections: ['John 1:4–5 — Life and light shine in the darkness.', 'Colossians 1:16–17 — All things hold together in Messiah.', '2 Corinthians 4:6 — God shines light in hearts as at creation.'], messiahReflection: 'For Christian readers, Genesis 1:2 can be contemplated with the New Testament theme of divine light entering darkness and new creation emerging by God’s word.', meditationIntro: ['This meditation is offered as contemplative reflection rather than strict grammar.', 'מְרַחֶפֶת invites contemplation of the threshold between unformed potential and God’s ordering word.'], reflectionQuestions: ['What does this word reveal about the world before visible order?', 'Where do I recognize a need for God’s hovering presence and creative word?', 'How does Genesis 1:2 prepare the way for “Let there be light”?']
  },
  {
    slug: 'hamayim', hebrew: 'הַמָּיִם', transliteration: 'Hamayim', pronunciation: 'hah-MAH-yeem', passage: 'Genesis 1:2', basicTranslation: 'The waters', literalSense: 'the waters', root: 'מים', rootTransliteration: 'mayim', rootMeaning: 'water, waters', grammar: 'הַמָּיִם combines the definite article with מַיִם, the Hebrew word for waters.', spiritualTheme: 'Genesis 1:2 presents the unformed world under God’s attentive presence, moving toward light, order, and life.', relatedVerses: ['Genesis 1:2', 'Genesis 1:3', 'Psalm 104:30', 'John 1:1–5'], breakdown: [{ part: 'הַמָּיִם', meaning: 'The waters', function: 'The word contributes to the description of the earth before the first divine command of light.' }], rootMeanings: ['water, waters', 'creation context', 'ordering movement'], biblicalUsage: [{ form: 'הַמָּיִם', sense: 'the waters' }, { form: 'מים', sense: 'water, waters' }], occurrences: [{ form: 'הַמָּיִם', reference: 'Genesis 1:2', book: 'genesis', chapter: 1, verse: 2, occurrence: 1, context: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם', note: 'A word in the descriptive opening of Genesis 1:2.' }], spiritualThemes: ['God is present before visible order appears.', 'The verse names condition honestly while moving toward divine speech.', 'Creation is shaped through patient ordering, separating, filling, and blessing.'], rootStudyNote: 'This study introduces the word as it appears in Genesis 1:2 and invites further tracing through Scripture.', grammarNotes: ['This word appears in Genesis 1:2 within the description of the earth before the command “Let there be light.”', 'Its exact nuance is shaped by the surrounding words and by the movement from formlessness toward order.', 'The word study search below can be used to find additional occurrences in the available Hebrew text.'], usageNote: 'In Genesis 1:2, הַמָּיִם belongs to the threshold scene before the first spoken creative command.', spiritualIntro: ['הַמָּיִם is part of the second verse’s meditation on creation before visible light.', 'The word helps describe the scene over which God’s Spirit moves and into which God will speak.'], messiahConnections: ['John 1:4–5 — Life and light shine in the darkness.', 'Colossians 1:16–17 — All things hold together in Messiah.', '2 Corinthians 4:6 — God shines light in hearts as at creation.'], messiahReflection: 'For Christian readers, Genesis 1:2 can be contemplated with the New Testament theme of divine light entering darkness and new creation emerging by God’s word.', meditationIntro: ['This meditation is offered as contemplative reflection rather than strict grammar.', 'הַמָּיִם invites contemplation of the threshold between unformed potential and God’s ordering word.'], reflectionQuestions: ['What does this word reveal about the world before visible order?', 'Where do I recognize a need for God’s hovering presence and creative word?', 'How does Genesis 1:2 prepare the way for “Let there be light”?']
  },
];

export function getWordStudy(slug) {
  return wordStudies.find((study) => study.slug === slug);
}
