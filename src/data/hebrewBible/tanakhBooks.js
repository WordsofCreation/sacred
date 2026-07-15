import { normalizeSlug } from './utils.js';

const SEFARIA_REMOTE_REFS = Object.freeze({
  '1 Samuel': 'I Samuel',
  '2 Samuel': 'II Samuel',
  '1 Kings': 'I Kings',
  '2 Kings': 'II Kings',
  '1 Chronicles': 'I Chronicles',
  '2 Chronicles': 'II Chronicles',
});

function getSefariaRemoteRef(bookEnglish) {
  return SEFARIA_REMOTE_REFS[bookEnglish] || bookEnglish;
}

const TANAKH_BOOKS = Object.freeze([
  ['Genesis', 'בראשית'],
  ['Exodus', 'שמות'],
  ['Leviticus', 'ויקרא'],
  ['Numbers', 'במדבר'],
  ['Deuteronomy', 'דברים'],
  ['Joshua', 'יהושע'],
  ['Judges', 'שופטים'],
  ['1 Samuel', 'שמואל א׳'],
  ['2 Samuel', 'שמואל ב׳'],
  ['1 Kings', 'מלכים א׳'],
  ['2 Kings', 'מלכים ב׳'],
  ['Isaiah', 'ישעיהו'],
  ['Jeremiah', 'ירמיהו'],
  ['Ezekiel', 'יחזקאל'],
  ['Hosea', 'הושע'],
  ['Joel', 'יואל'],
  ['Amos', 'עמוס'],
  ['Obadiah', 'עובדיה'],
  ['Jonah', 'יונה'],
  ['Micah', 'מיכה'],
  ['Nahum', 'נחום'],
  ['Habakkuk', 'חבקוק'],
  ['Zephaniah', 'צפניה'],
  ['Haggai', 'חגי'],
  ['Zechariah', 'זכריה'],
  ['Malachi', 'מלאכי'],
  ['Psalms', 'תהילים'],
  ['Proverbs', 'משלי'],
  ['Job', 'איוב'],
  ['Song of Songs', 'שיר השירים'],
  ['Ruth', 'רות'],
  ['Lamentations', 'איכה'],
  ['Ecclesiastes', 'קהלת'],
  ['Esther', 'אסתר'],
  ['Daniel', 'דניאל'],
  ['Ezra', 'עזרא'],
  ['Nehemiah', 'נחמיה'],
  ['1 Chronicles', 'דברי הימים א׳'],
  ['2 Chronicles', 'דברי הימים ב׳'],
]);

function buildTanakhBookCatalog() {
  return TANAKH_BOOKS.map(([bookEnglish, bookHebrew], index) => ({
    id: normalizeSlug(bookEnglish),
    slug: normalizeSlug(bookEnglish),
    book: bookEnglish,
    bookEnglish,
    bookHebrew,
    canonicalOrder: index + 1,
    aliases: [bookEnglish, bookHebrew],
    remoteRef: getSefariaRemoteRef(bookEnglish),
    chapterCount: null,
    verseCount: null,
  }));
}

export {
  buildTanakhBookCatalog,
  getSefariaRemoteRef,
};
