export const genesisOneOneWords = [
  { order: 1, hebrew: 'בְּרֵאשִׁית', translation: 'In the beginning', slug: 'bereshit', available: true },
  { order: 2, hebrew: 'בָּרָא', translation: 'He created', available: false },
  { order: 3, hebrew: 'אֱלֹהִים', translation: 'God', available: false },
  { order: 4, hebrew: 'אֵת', translation: 'Direct object marker / Aleph-Tav', available: false },
  { order: 5, hebrew: 'הַשָּׁמַיִם', translation: 'The heavens', available: false },
  { order: 6, hebrew: 'וְאֵת', translation: 'And the direct object marker / And Aleph-Tav', available: false },
  { order: 7, hebrew: 'הָאָרֶץ', translation: 'The earth', available: false },
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
];

export function getWordStudy(slug) {
  return wordStudies.find((study) => study.slug === slug);
}
