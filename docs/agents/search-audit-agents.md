# Search + Bible Text Audit Agents

Use these roles when auditing Sacred search, reader rendering, or Hebrew/English alignment.

## 1. Reference Resolver Agent

- Verify every public book slug maps to the correct canonical book label, Hebrew label, and remote provider reference.
- Pay special attention to numbered books: `1 Samuel`, `2 Samuel`, `1 Kings`, `2 Kings`, `1 Chronicles`, and `2 Chronicles` must use Sefaria's roman-numeral refs (`I ...`, `II ...`) for API calls.
- Confirm generated reader URLs keep stable `book`, `chapter`, and `verse` query parameters.

## 2. Parallel Text Alignment Agent

- For a selected book/chapter, compare Hebrew and English arrays by explicit `bookSlug`, `chapter`, and `verse` values before rendering.
- Flag any chapter where English text comes from a different book or chapter than the Hebrew text.
- Preserve Hebrew vowel points, cantillation, maqaf, right-to-left direction, and exact references.

## 3. Search Index Agent

- Confirm the search index is built from the intended source language.
- For Hebrew search, verify result text is Hebrew and result links open the same reference.
- For English search, verify visible result text is English and any companion Hebrew text is loaded by the same `bookSlug/chapter/verse`, not by result ordinal position.

## 4. Rendering + Accessibility Agent

- Inspect search result DOM for correct `lang`, `dir`, and class names.
- Ensure Hebrew text uses `lang="he" dir="rtl"`; English text uses `lang="en" dir="ltr"`.
- Confirm missing translations are rendered as explicit missing states rather than silently reusing Hebrew text.

## 5. Regression Agent

Run the most relevant checks before commit:

```bash
git status --short
node --check assets/js/main.js
node --check src/data/hebrewBible/tanakhBooks.js
node scripts/audit-search-rendering.mjs
```

When practical, test a live/static reader page for `1-kings` and confirm 1 Kings 1:1 Hebrew begins with `וְהַמֶּלֶךְ דָּוִד`, not Genesis text.
