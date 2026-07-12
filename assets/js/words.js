import { genesisOneOneWords, genesisOneTwoWords, genesisOneThreeWords, genesisOneFourWords, genesisOneFiveWords, genesisOneSixWords, getWordStudy } from '../../src/data/wordStudies.js';
import { createHebrewBibleDataLayer } from '../../src/data/hebrewBible/index.js';
import { buildSearchIndex, runSearchQuery } from '../../src/search/hebrewBible/index.js';

const WORD_SEARCH_PAGE_SIZE = 10;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderWordPath(pathId = 'word-path', words = genesisOneOneWords) {
  const path = document.getElementById(pathId);
  if (!path) return;

  words.forEach((word) => {
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

function getOccurrenceUrl(occurrence) {
  const params = new URLSearchParams({
    book: occurrence.book,
    chapter: String(occurrence.chapter),
    verse: String(occurrence.verse),
    word: occurrence.form,
    occurrence: String(occurrence.occurrence || 1),
  });

  return `../../hebrew-bible/?${params.toString()}`;
}

function formatResultReference(result) {
  return `${result.bookEnglish || result.bookSlug} ${result.chapter}:${result.verse}`;
}

function getSearchResultUrl(result, query) {
  const params = new URLSearchParams({
    book: String(result.bookSlug || ''),
    chapter: String(result.chapter || ''),
    verse: String(result.verse || ''),
  });

  if (query) {
    params.set('word', query);
  }

  return `../../hebrew-bible/?${params.toString()}`;
}

function getBookLabel(book) {
  return book.bookEnglish || book.book || book.slug;
}

function renderWordSearchResults(listElement, results = [], query = '') {
  listElement.innerHTML = '';

  if (!results.length) {
    return;
  }

  results.forEach((result) => {
    const item = el('li', 'word-search-result-item');
    const link = el('a', 'word-search-result-link');
    link.href = getSearchResultUrl(result, query);
    link.append(el('span', 'word-occurrence-reference', formatResultReference(result)));

    const text = el('span', 'word-search-result-text', result.text);
    text.dir = 'rtl';
    text.lang = 'he';
    link.append(text);
    item.append(link);
    listElement.append(item);
  });
}

function createWordSearchSection(study) {
  const section = studySection('Search Verse Text', [], 'linguistic-section word-search-section');
  const form = el('form', 'word-search-form');
  const label = el('label', null, 'Search verse text');
  label.setAttribute('for', 'word-search-input');

  const searchRow = el('div', 'word-search-row');
  const input = document.createElement('input');
  input.id = 'word-search-input';
  input.name = 'search';
  input.type = 'search';
  input.autocomplete = 'off';
  input.placeholder = 'Enter a Hebrew phrase or reference';
  input.value = study.hebrew;

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Search';
  searchRow.append(input, button);

  const scopeRow = el('div', 'word-search-row word-search-row--meta');
  const scopeLabel = el('label', null, 'Book');
  scopeLabel.setAttribute('for', 'word-search-book');
  const bookSelect = document.createElement('select');
  bookSelect.id = 'word-search-book';
  bookSelect.name = 'book';
  const option = document.createElement('option');
  option.value = 'all';
  option.textContent = 'All books';
  bookSelect.append(option);
  scopeRow.append(scopeLabel, bookSelect);

  form.append(label, searchRow, scopeRow);

  const summary = el('p', 'word-search-summary', `Searching all books for “${study.hebrew}”…`);
  const pagination = el('div', 'word-search-pagination');
  pagination.hidden = true;
  const previousButton = document.createElement('button');
  previousButton.type = 'button';
  previousButton.textContent = 'Previous';
  const pageStatus = el('p', 'word-search-page-status');
  pageStatus.setAttribute('aria-live', 'polite');
  const nextButton = document.createElement('button');
  nextButton.type = 'button';
  nextButton.textContent = 'Next';
  pagination.append(previousButton, pageStatus, nextButton);
  const results = el('ul', 'word-search-results');

  section.append(form, summary, pagination, results);
  return { section, input, bookSelect, summary, pagination, previousButton, nextButton, pageStatus, results, form };
}

function populateWordSearchBooks(select, books = []) {
  books.forEach((book) => {
    const option = document.createElement('option');
    option.value = book.slug;
    option.textContent = getBookLabel(book);
    select.append(option);
  });
}

function getSelectedBook(books = [], selectedSlug = 'all') {
  if (!selectedSlug || selectedSlug === 'all') {
    return null;
  }

  return books.find((book) => book.slug === selectedSlug) || null;
}

function getWordSearchScopeLabel(book) {
  return book ? getBookLabel(book) : 'all books';
}

function renderWordSearchPagination(controls, totalResults, currentPage) {
  const totalPages = Math.max(1, Math.ceil(totalResults / WORD_SEARCH_PAGE_SIZE));

  if (!totalResults || totalResults <= WORD_SEARCH_PAGE_SIZE) {
    controls.pagination.hidden = true;
    controls.previousButton.disabled = true;
    controls.nextButton.disabled = true;
    controls.pageStatus.textContent = '';
    return;
  }

  controls.pagination.hidden = false;
  controls.previousButton.disabled = currentPage <= 1;
  controls.nextButton.disabled = currentPage >= totalPages;
  controls.pageStatus.textContent = `Page ${currentPage} of ${totalPages}`;
}

function renderWordSearchPage(controls, state) {
  const totalResults = state.results.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / WORD_SEARCH_PAGE_SIZE));
  state.currentPage = Math.min(Math.max(1, state.currentPage), totalPages);
  const start = (state.currentPage - 1) * WORD_SEARCH_PAGE_SIZE;
  const pageResults = state.results.slice(start, start + WORD_SEARCH_PAGE_SIZE);

  renderWordSearchResults(controls.results, pageResults, state.query);
  renderWordSearchPagination(controls, totalResults, state.currentPage);
}

function updateWordSearchSummary(summary, { query, totalResults, scopeLabel }) {
  summary.textContent = totalResults
    ? `${totalResults} occurrence${totalResults === 1 ? '' : 's'} for “${query}” in ${scopeLabel}. Showing ${WORD_SEARCH_PAGE_SIZE} per page.`
    : `No occurrences found for “${query}” in ${scopeLabel}.`;
}

async function loadWordSearchResults(study, controls) {
  try {
    const dataLayer = createHebrewBibleDataLayer({ basePath: '../..' });
    const [books, verses] = await Promise.all([dataLayer.getAllBooks(), dataLayer.getAllVerses()]);
    populateWordSearchBooks(controls.bookSelect, books);
    const searchIndex = buildSearchIndex(verses);
    const state = {
      query: study.hebrew,
      results: [],
      currentPage: 1,
    };

    const runSearch = () => {
      const query = controls.input.value.trim() || study.hebrew;
      const selectedBook = getSelectedBook(books, controls.bookSelect.value);
      const searchPayload = runSearchQuery({
        query,
        books,
        searchIndex,
        options: {
          searchScope: selectedBook ? 'current' : 'all',
          selectedBookSlug: selectedBook?.slug || null,
        },
      });

      state.query = query;
      state.results = searchPayload.textResults;
      state.currentPage = 1;
      updateWordSearchSummary(controls.summary, {
        query,
        totalResults: state.results.length,
        scopeLabel: getWordSearchScopeLabel(selectedBook),
      });
      renderWordSearchPage(controls, state);
    };

    controls.form.addEventListener('submit', (event) => {
      event.preventDefault();
      runSearch();
    });
    controls.bookSelect.addEventListener('change', runSearch);
    controls.previousButton.addEventListener('click', () => {
      state.currentPage -= 1;
      renderWordSearchPage(controls, state);
    });
    controls.nextButton.addEventListener('click', () => {
      state.currentPage += 1;
      renderWordSearchPage(controls, state);
    });

    runSearch();
  } catch (error) {
    const fallback = study.occurrences || [];
    controls.summary.textContent = fallback.length
      ? `${fallback.length} curated occurrence${fallback.length === 1 ? '' : 's'} for “${study.hebrew}”.`
      : 'Unable to load occurrence search results right now.';
    controls.results.innerHTML = '';
    controls.pagination.hidden = true;
    fallback.slice(0, WORD_SEARCH_PAGE_SIZE).forEach((occurrence) => {
      const item = el('li', 'word-search-result-item');
      const link = el('a', 'word-search-result-link');
      link.href = getOccurrenceUrl(occurrence);
      link.append(el('span', 'word-occurrence-reference', occurrence.reference));
      const text = el('span', 'word-search-result-text', occurrence.context);
      text.dir = 'rtl';
      text.lang = 'he';
      link.append(text);
      item.append(link);
      controls.results.append(item);
    });
  }
}

function occurrenceList(occurrences = []) {
  const listElement = el('ol', 'word-occurrence-list');

  occurrences.forEach((occurrence) => {
    const item = el('li', 'word-occurrence-item');
    const link = el('a', 'word-occurrence-link');
    link.href = getOccurrenceUrl(occurrence);
    link.append(el('span', 'word-occurrence-reference', occurrence.reference));
    link.append(el('span', 'word-occurrence-form', occurrence.form));
    link.append(el('span', 'word-occurrence-context', occurrence.context));
    item.append(link);

    if (occurrence.note) {
      item.append(el('p', 'word-occurrence-note', occurrence.note));
    }

    listElement.append(item);
  });

  return listElement;
}

async function renderDetail() {
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
    el('p', null, study.rootStudyNote || 'The idea of “beginning” in Hebrew is connected to headship, firstness, and source. The beginning is not merely the first moment in a sequence; it can also carry the idea of the head, the origin, or the source from which something proceeds.'),
  ], 'linguistic-section'));

  root.append(studySection('Grammar Notes', [list(study.grammarNotes || [
    'בְּ is a prefix often translated as “in,” “at,” “with,” or “by,” depending on context.',
    'רֵאשִׁית is a feminine noun meaning beginning, first, firstfruits, or chief part.',
    'The phrase can be rendered “In the beginning,” though the Hebrew also invites deeper reflection on origin, firstness, and source.',
  ])], 'linguistic-section'));

  const usage = study.biblicalUsage.map((item) => `${item.form} — ${item.sense}`);
  root.append(studySection('Biblical Usage', [list(usage), el('p', null, study.usageNote || 'This page is the first step in tracing the word family through Scripture.')], 'linguistic-section'));

  const wordSearch = createWordSearchSection(study);
  root.append(wordSearch.section);
  await loadWordSearchResults(study, wordSearch);

  if (study.occurrences?.length) {
    root.append(studySection('Occurrences in the Main Text', [
      occurrenceList(study.occurrences),
      el('p', null, 'Each occurrence opens the reader at the verse where this exact use appears and highlights the word in the Hebrew text.'),
    ], 'linguistic-section word-occurrences-section'));
  }

  root.append(studySection('Spiritual Considerations', [
    ...(study.spiritualIntro || [
      'בְּרֵאשִׁית does not merely tell us when creation began. It invites us to consider source, origin, purpose, and divine order.',
      'The first word of Scripture opens with a movement from hiddenness into revelation. Before heavens and earth are named, the text begins with beginning itself. The word becomes a doorway into the mystery of creation: everything visible has an unseen source.',
    ]).map((paragraph) => el('p', null, paragraph)),
    list(study.spiritualThemes),
  ], 'reflection-section'));

  root.append(studySection('Messiah Reflection', [
    list(study.messiahConnections || ['John 1:1 — “In the beginning was the Word…”', 'Colossians 1:16 — All things were created through Him and for Him.', 'Revelation 22:13 — “I am the Alpha and the Omega, the first and the last, the beginning and the end.”']),
    el('p', null, study.messiahReflection || 'For Christian readers, בְּרֵאשִׁית can be contemplated alongside the New Testament presentation of the Messiah as present in the beginning, the agent of creation, and the one in whom all things hold together.'),
  ], 'reflection-section messiah-section'));

  root.append(studySection('Mystical / Symbolic Meditation', (study.meditationIntro || [
    'This meditation is offered as contemplative reflection rather than strict grammar.',
    'The first word of Scripture can be contemplated as a threshold. It stands before the creation account like a gate. Before light is spoken, before the heavens and earth are formed, the text begins with a word of origin.',
    'בְּרֵאשִׁית can be approached as the opening chamber of the biblical story: source, firstness, hidden wisdom, divine intention, and the seed of creation.',
  ]).map((paragraph) => el('p', null, paragraph)), 'meditation-section'));

  root.append(studySection('Reflection Questions', [list(study.reflectionQuestions, 'reflection-questions')], 'reflection-section'));
}

renderWordPath('word-path', genesisOneOneWords);
renderWordPath('word-path-genesis-1-2', genesisOneTwoWords);
renderWordPath('word-path-genesis-1-3', genesisOneThreeWords);
renderWordPath('word-path-genesis-1-4', genesisOneFourWords);
renderWordPath('word-path-genesis-1-5', genesisOneFiveWords);
renderWordPath('word-path-genesis-1-6', genesisOneSixWords);
renderDetail();
