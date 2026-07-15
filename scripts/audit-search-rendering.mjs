import assert from 'node:assert/strict';
import { safeParseInteger } from '../src/data/hebrewBible/utils.js';
import { createHebrewBibleDataLayer } from '../src/data/hebrewBible/index.js';
import { createEnglishBibleDataLayer } from '../src/data/englishBible/index.js';
import { buildSearchIndex } from '../src/search/hebrewBible/index.js';
import { searchHebrewText } from '../src/search/hebrewBible/searchIndex.js';

assert.equal(safeParseInteger('1-kings'), null);
assert.equal(safeParseInteger('10'), 10);

const requestedUrls = [];
const tanakhBooks = [
  {
    slug: '1-kings',
    book: '1 Kings',
    bookEnglish: '1 Kings',
    bookHebrew: 'מלכים א׳',
    canonicalOrder: 10,
    remoteRef: 'I Kings',
  },
];

function jsonResponse(payload) {
  return {
    ok: true,
    status: 200,
    statusText: 'OK',
    async json() {
      return payload;
    },
  };
}

async function fetchFn(url) {
  const value = String(url);
  requestedUrls.push(value);

  if (value.endsWith('reference/hebrew-bible/processed/books.json')) {
    return jsonResponse(tanakhBooks);
  }

  if (value.endsWith('reference/english-bible/processed/books.json')) {
    return jsonResponse(tanakhBooks);
  }

  if (value.endsWith('reference/hebrew-bible/processed/books/1-kings.json')) {
    return jsonResponse({
      chapters: {
        1: [
          {
            bookSlug: '1-kings',
            bookEnglish: '1 Kings',
            bookHebrew: 'מלכים א׳',
            chapter: 1,
            verse: 1,
            hebrew: 'וְהַמֶּלֶךְ דָּוִד זָקֵן בָּא בַּיָּמִים',
          },
        ],
      },
    });
  }

  if (value.endsWith('reference/english-bible/processed/books/1-kings.json')) {
    return jsonResponse({
      chapters: {
        1: [
          {
            bookSlug: '1-kings',
            bookEnglish: '1 Kings',
            bookHebrew: 'מלכים א׳',
            chapter: 1,
            verse: 1,
            english: 'Now king David was old and stricken in years.',
            text: 'Now king David was old and stricken in years.',
          },
        ],
      },
    });
  }

  if (value.includes('/api/texts/I%20Kings?lang=he')) {
    return jsonResponse({ he: [['וְהַמֶּלֶךְ דָּוִד זָקֵן בָּא בַּיָּמִים']] });
  }

  if (value.includes('/api/texts/I%20Kings?lang=en')) {
    return jsonResponse({ text: [['Now king David was old and stricken in years.']] });
  }

  throw new Error(`Unexpected URL during audit: ${value}`);
}

const hebrewLayer = createHebrewBibleDataLayer({ fetchFn, basePath: '', enableRemoteFallback: true });
const englishLayer = createEnglishBibleDataLayer({ fetchFn, basePath: '', enableRemoteFallback: true });

const hebrewVerses = await hebrewLayer.getVerses('1-kings', 1);
const englishVerses = await englishLayer.getChapterVerses('1-kings', 1);

assert.equal(hebrewVerses[0]?.bookEnglish, '1 Kings');
assert.equal(hebrewVerses[0]?.hebrew, 'וְהַמֶּלֶךְ דָּוִד זָקֵן בָּא בַּיָּמִים');
assert.equal(englishVerses[0]?.bookEnglish, '1 Kings');
assert.equal(englishVerses[0]?.english, 'Now king David was old and stricken in years.');

const index = buildSearchIndex(hebrewVerses.map((verse) => ({ ...verse, bookSlug: '1-kings' }))); 
const matches = searchHebrewText(index, 'דוד');
assert.equal(matches.length, 1);
assert.equal(matches[0].bookSlug, '1-kings');
assert.equal(matches[0].text, 'וְהַמֶּלֶךְ דָּוִד זָקֵן בָּא בַּיָּמִים');

assert(!requestedUrls.some((url) => url.includes('/api/texts/1%20Kings')), 'Numbered Sefaria refs must not use Arabic numerals.');
console.log('search rendering audit ok');
