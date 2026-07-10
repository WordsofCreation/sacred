# Words Section Agent Workflow

This document turns the Words section into a repeatable multi-agent workflow. Use it whenever the project prompt says **"continue to build the words section"** or asks to add more verse-by-verse Hebrew word studies.

## Current Architecture Snapshot

The Words section is intentionally data-driven and static-site friendly.

| Concern | File / Pattern |
| --- | --- |
| Words landing page | `words/index.html` contains the hero and one `<section class="card genesis-word-section">` per verse. |
| Word-path rendering | `assets/js/words.js` imports verse arrays and calls `renderWordPath('<container-id>', verseArray)`. |
| Word study content | `src/data/wordStudies.js` exports verse word arrays plus the `wordStudies` collection used by every detail page. |
| Detail page shell | `words/<slug>/index.html` is a minimal HTML page with `data-page="words"`, `data-words-page="detail"`, and `data-word-slug="<slug>"`. |
| Shared boot | `scripts/page-loader.js` loads `assets/js/words.js` on any page with `data-page="words"`. |
| Discovery | `sitemap.xml` lists each public word URL. |

## Orchestrator Checklist

Before editing, the orchestrator should identify the target verse and create a short plan assigning these virtual agents:

1. **Verse Builder Agent**
2. **Word Page Agent**
3. **SEO + Structured Data Agent**
4. **Quality Agent**

When sub-agents are available, run independent analysis in parallel. Keep code edits coordinated so two agents do not modify the same file at the same time unless one is only reporting.

## Agent 1: Verse Builder Agent

Goal: add the next verse section while preserving the existing format.

Responsibilities:

- Identify the exact verse reference and Hebrew text.
- Add a new `section.card.genesis-word-section` to `words/index.html` with:
  - unique `aria-labelledby` id;
  - `<h3>` containing the reference;
  - `<p class="hebrew-verse" dir="rtl">...Hebrew verse...</p>`;
  - a unique `.word-path` container id;
  - an `aria-label` naming the verse word path.
- In `src/data/wordStudies.js`, add a new exported array using the established naming pattern, for example `genesisOneFourWords`.
- Each word object must include:
  - `order` in verse order;
  - exact `hebrew` form as displayed in the verse;
  - concise English `translation`;
  - stable lowercase kebab-case `slug`;
  - `available: true` only when a complete detail page and data entry exist.
- In `assets/js/words.js`:
  - import the new verse array;
  - call `renderWordPath()` with the new container id and array.

Acceptance criteria:

- The landing page visually follows Genesis 1:1–1:3.
- Every available word card links to `words/<slug>/`.
- Shared words that already have a page, such as `elohim`, reuse the existing slug instead of creating duplicates.

## Agent 2: Word Page Agent

Goal: build complete individual word pages for every new available word.

Responsibilities:

- Create `words/<slug>/index.html` for each new slug using the existing detail-page shell format.
- Add a matching `wordStudies` object in `src/data/wordStudies.js` for each slug.
- Keep the schema consistent with existing entries. Include, where applicable:
  - `slug`
  - `hebrew`
  - `transliteration`
  - `pronunciation`
  - `passage`
  - `basicTranslation`
  - `literalSense`
  - `root`
  - `rootTransliteration`
  - `rootMeaning`
  - `grammar`
  - `spiritualTheme`
  - `relatedVerses`
  - `breakdown`
  - `rootMeanings`
  - `biblicalUsage`
  - `occurrences`
  - `spiritualThemes`
  - `rootStudyNote`
  - `grammarNotes`
  - `usageNote`
  - `spiritualIntro`
  - `messiahConnections`
  - `messiahReflection`
  - `meditationIntro`
  - `reflectionQuestions`
- Keep tone aligned with current pages: careful grammar, devotional reflection, Messiah reflection for Christian readers, and mystical/symbolic meditation clearly framed as contemplative rather than strict grammar.
- Do not overclaim uncertain Hebrew grammar. If uncertain, phrase cautiously.

Acceptance criteria:

- `getWordStudy('<slug>')` resolves for every new detail page.
- Detail pages render via the shared renderer without bespoke HTML content.
- Occurrence links open the reader with correct `book`, `chapter`, `verse`, `word`, and `occurrence` query params.

## Agent 3: SEO + Structured Data Agent

Goal: make new Words content excellent for traditional search engines and AI answer engines.

Responsibilities:

### Page Metadata

- Ensure each public page has:
  - unique `<title>`;
  - descriptive `<meta name="description">` around 140–165 characters when practical;
  - `<link rel="canonical">` matching the sitemap URL;
  - sensible Open Graph tags when adding social metadata (`og:title`, `og:description`, `og:type`, `og:url`).

### JSON-LD

Use accurate, conservative schema. Recommended pattern for word detail pages:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://northwestchefs.github.io/sacred/words/example/#webpage",
      "url": "https://northwestchefs.github.io/sacred/words/example/",
      "name": "Hebrew word study title",
      "description": "Short human-readable summary.",
      "isPartOf": { "@id": "https://northwestchefs.github.io/sacred/words/#collection" },
      "about": { "@id": "https://northwestchefs.github.io/sacred/words/example/#term" },
      "inLanguage": "en"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://northwestchefs.github.io/sacred/words/example/#term",
      "name": "Hebrew form",
      "termCode": "example-slug",
      "description": "Concise definition and verse context.",
      "inDefinedTermSet": { "@id": "https://northwestchefs.github.io/sacred/words/#word-library" }
    }
  ]
}
```

Recommended pattern for the Words landing page:

- `CollectionPage` or `ItemList` for the word library.
- `hasPart` or `itemListElement` entries for verse/word URLs that are actually published.

Rules:

- Do not add fake ratings, reviews, publication dates, author biographies, or medical/legal claims.
- Keep JSON-LD synchronized with visible page content.
- Validate JSON syntax after editing.

### Crawl and AI Search Friendliness

- Keep static `<a href="...">` links available for important pages whenever possible.
- Make headings explicit: reference, Hebrew word, transliteration, and basic meaning should be visible in rendered content.
- Keep descriptions answer-friendly: include the Hebrew form, transliteration, verse reference, and basic meaning.
- Add every new word URL to `sitemap.xml` with a stable canonical host.
- Keep `robots.txt` sitemap host aligned with `sitemap.xml`.

Acceptance criteria:

- Every new page has a title, meta description, canonical URL, and valid structured data if structured data is being added in that change.
- Sitemap includes every new public URL exactly once.
- No structured data contradicts visible page content.

## Agent 4: Quality Agent

Goal: catch regressions before commit.

Responsibilities:

- Check duplicate slugs and duplicate sitemap URLs.
- Check every `available: true` word has a `words/<slug>/index.html` shell and a matching `wordStudies` entry.
- Check every new detail shell uses the correct relative stylesheet and script paths:
  - `../../assets/css/styles.css?...`
  - `../../scripts/page-loader.js?...`
- Check every new landing card has a unique container id and matching `renderWordPath()` call.
- Run available commands:
  - `git status --short`
  - `node --check assets/js/words.js`
  - `node -e "import('./src/data/wordStudies.js').then(() => console.log('wordStudies import ok'))"`
- If a browser/static server is practical, spot-check the Words landing page and at least one new detail page.

Acceptance criteria:

- No broken imports.
- No missing word pages for available slugs.
- No malformed XML in `sitemap.xml`.
- The final commit includes code/data/docs changes together.

## Definition of Done for "Continue Words"

A continuation is complete only when:

- the verse appears on `words/index.html` in the same visual format as previous verses;
- each word in the verse appears as a card in the word path;
- every available word card opens a rendered detail page;
- `src/data/wordStudies.js` contains complete study data for all new pages;
- SEO metadata and structured-data considerations have been applied or intentionally deferred with a clear reason;
- `sitemap.xml` and `robots.txt` are consistent;
- validation commands have been run;
- changes are committed on the current branch.
