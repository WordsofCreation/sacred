import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const ROOT = process.cwd();
const SOURCES = [
  ['Hebrew', 'reference/hebrew-bible/processed/verses.json'],
  ['English', 'reference/english-bible/processed/verses.json'],
];

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), 'utf8'));
}

function verseKey(verse) {
  return `${verse.bookSlug}|${Number(verse.chapter)}|${Number(verse.verse)}`;
}

function describeKey(key) {
  const [bookSlug, chapter, verse] = key.split('|');
  return `${bookSlug} ${chapter}:${verse}`;
}

function buildKeyMap(label, verses) {
  const map = new Map();
  const duplicates = [];

  for (const verse of verses) {
    const key = verseKey(verse);
    if (map.has(key)) {
      duplicates.push(key);
    }
    map.set(key, verse);
  }

  assert.equal(duplicates.length, 0, `${label} duplicate verse keys: ${duplicates.map(describeKey).join(', ')}`);
  return map;
}

const [[, hebrewPath], [, englishPath]] = SOURCES;
const hebrewVerses = readJson(hebrewPath);
const englishVerses = readJson(englishPath);
const hebrewByKey = buildKeyMap('Hebrew', hebrewVerses);
const englishByKey = buildKeyMap('English', englishVerses);

const hebrewKeys = new Set(hebrewByKey.keys());
const englishKeys = new Set(englishByKey.keys());
const sharedKeys = [...hebrewKeys].filter((key) => englishKeys.has(key)).sort();
const hebrewOnly = [...hebrewKeys].filter((key) => !englishKeys.has(key)).sort();
const englishOnly = [...englishKeys].filter((key) => !hebrewKeys.has(key)).sort();

for (const key of sharedKeys) {
  const hebrew = hebrewByKey.get(key);
  const english = englishByKey.get(key);
  assert.equal(hebrew.bookSlug, english.bookSlug, `Book slug mismatch for ${describeKey(key)}`);
  assert.equal(Number(hebrew.chapter), Number(english.chapter), `Chapter mismatch for ${describeKey(key)}`);
  assert.equal(Number(hebrew.verse), Number(english.verse), `Verse mismatch for ${describeKey(key)}`);
}

console.log(`Hebrew verses: ${hebrewVerses.length}`);
console.log(`English verses: ${englishVerses.length}`);
console.log(`Shared keys: ${sharedKeys.length}${sharedKeys.length ? ` (${sharedKeys.map(describeKey).join(', ')})` : ''}`);
console.log(`Hebrew-only keys: ${hebrewOnly.length}${hebrewOnly.length ? ` (${hebrewOnly.map(describeKey).join(', ')})` : ''}`);
console.log(`English-only keys: ${englishOnly.length}${englishOnly.length ? ` (${englishOnly.map(describeKey).join(', ')})` : ''}`);
console.log('bible key alignment audit ok');
