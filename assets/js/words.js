import { genesisOneOneWords, getWordStudy } from '../../src/data/wordStudies.js';

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderWordPath() {
  const path = document.getElementById('word-path');
  if (!path) return;

  genesisOneOneWords.forEach((word) => {
    const card = word.available ? document.createElement('a') : document.createElement('article');
    card.className = `word-path-card${word.available ? ' is-available' : ' is-locked'}`;
    if (word.available) card.href = `${word.slug}/`;
    card.append(el('span', 'word-order', String(word.order).padStart(2, '0')));
    card.append(el('span', 'word-hebrew', word.hebrew));
    card.append(el('span', 'word-translation', word.translation));
    card.append(el('span', 'word-status', word.available ? 'Open study' : 'Coming Soon'));
    path.append(card);
  });
}

function definitionGrid(items) {
  const dl = el('dl', 'word-glance-grid');
  items.forEach(([label, value]) => {
    dl.append(el('dt', null, label));
    dl.append(el('dd', null, value));
  });
  return dl;
}

function studySection(title, bodyNodes, extraClass = '') {
  const section = el('section', `card word-study-section ${extraClass}`.trim());
  section.append(el('p', 'kicker', 'Word Study'));
  section.append(el('h3', null, title));
  bodyNodes.forEach((node) => section.append(node));
  return section;
}

function list(items, className = '') {
  const ul = el('ul', className);
  items.forEach((item) => ul.append(el('li', null, item)));
  return ul;
}

function renderDetail() {
  const root = document.getElementById('word-study-root');
  if (!root) return;
  const study = getWordStudy(document.body.dataset.wordSlug);
  if (!study) {
    root.append(el('section', 'card', 'Word study not found.'));
    return;
  }

  const hero = el('section', 'words-hero word-detail-hero card');
  hero.append(el('p', 'kicker', study.passage));
  hero.append(el('h2', 'hero-hebrew', study.hebrew));
  hero.append(el('p', 'words-subtitle', study.transliteration));
  hero.append(el('p', 'hero-translation', `“${study.basicTranslation}”`));
  root.append(hero);

  root.append(studySection('Word at a Glance', [definitionGrid([
    ['Hebrew', study.hebrew],
    ['Transliteration', study.transliteration],
    ['Pronunciation', study.pronunciation],
    ['Passage', study.passage],
    ['Basic meaning', study.basicTranslation],
    ['Literal sense', study.literalSense],
    ['Root', study.root],
    ['Root meaning', study.rootMeaning],
  ])], 'word-glance'));

  const breakdown = el('div', 'breakdown-grid');
  study.breakdown.forEach((part) => {
    const card = el('article', 'breakdown-card');
    card.append(el('h4', 'breakdown-hebrew', part.part));
    card.append(el('p', null, `Meaning: ${part.meaning}.`));
    card.append(el('p', null, part.function ? `Function: ${part.function}` : `Connected idea: ${part.connectedIdea}`));
    breakdown.append(card);
  });
  root.append(studySection('Hebrew Breakdown', [breakdown, el('p', null, study.grammar)], 'linguistic-section'));

  root.append(studySection('Root Study', [
    el('p', 'root-display', `${study.root} · ${study.rootTransliteration}`),
    list(study.rootMeanings, 'pill-list'),
    el('p', null, 'The idea of “beginning” in Hebrew is connected to headship, firstness, and source. The beginning is not merely the first moment in a sequence; it can also carry the idea of the head, the origin, or the source from which something proceeds.'),
  ], 'linguistic-section'));

  root.append(studySection('Grammar Notes', [list([
    'בְּ is a prefix often translated as “in,” “at,” “with,” or “by,” depending on context.',
    'רֵאשִׁית is a feminine noun meaning beginning, first, firstfruits, or chief part.',
    'The phrase can be rendered “In the beginning,” though the Hebrew also invites deeper reflection on origin, firstness, and source.',
  ])], 'linguistic-section'));

  const usage = study.biblicalUsage.map((item) => `${item.form} — ${item.sense}`);
  root.append(studySection('Biblical Usage', [list(usage), el('p', null, 'This page is the first step in tracing the word family through Scripture.')], 'linguistic-section'));

  root.append(studySection('Spiritual Considerations', [
    el('p', null, 'בְּרֵאשִׁית does not merely tell us when creation began. It invites us to consider source, origin, purpose, and divine order.'),
    el('p', null, 'The first word of Scripture opens with a movement from hiddenness into revelation. Before heavens and earth are named, the text begins with beginning itself. The word becomes a doorway into the mystery of creation: everything visible has an unseen source.'),
    list(study.spiritualThemes),
  ], 'reflection-section'));

  root.append(studySection('Messiah Reflection', [
    list(['John 1:1 — “In the beginning was the Word…”', 'Colossians 1:16 — All things were created through Him and for Him.', 'Revelation 22:13 — “I am the Alpha and the Omega, the first and the last, the beginning and the end.”']),
    el('p', null, 'For Christian readers, בְּרֵאשִׁית can be contemplated alongside the New Testament presentation of the Messiah as present in the beginning, the agent of creation, and the one in whom all things hold together.'),
  ], 'reflection-section messiah-section'));

  root.append(studySection('Mystical / Symbolic Meditation', [
    el('p', null, 'This meditation is offered as contemplative reflection rather than strict grammar.'),
    el('p', null, 'The first word of Scripture can be contemplated as a threshold. It stands before the creation account like a gate. Before light is spoken, before the heavens and earth are formed, the text begins with a word of origin.'),
    el('p', null, 'בְּרֵאשִׁית can be approached as the opening chamber of the biblical story: source, firstness, hidden wisdom, divine intention, and the seed of creation.'),
  ], 'meditation-section'));

  root.append(studySection('Reflection Questions', [list(study.reflectionQuestions, 'reflection-questions')], 'reflection-section'));
}

renderWordPath();
renderDetail();
