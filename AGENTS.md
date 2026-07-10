# Sacred Agent Instructions

These instructions apply to the entire repository.

## Site Principles

- Preserve Sacred as a calm, careful Hebrew Bible study site.
- Keep the existing static-site architecture: plain HTML entry points, shared CSS, shared JavaScript modules, and data-driven rendering.
- Treat Hebrew text as primary. Preserve vowel points, cantillation/maqaf characters when already present, right-to-left rendering, and stable book/chapter/verse references.
- Never wrap imports in `try`/`catch` blocks.

## Words Section Expansion Workflow

When the user says something like **"continue to build the words section"**, run the workflow in `docs/agents/words-section-agents.md` before editing. The expected output is both:

1. a verse section on `words/index.html`, matching the existing Genesis section format; and
2. individual word study pages for every word in that verse, backed by complete `src/data/wordStudies.js` entries.

Use the same page format already established by the Words section:

- `words/index.html` owns the visible verse cards and word-path containers.
- `assets/js/words.js` imports verse word arrays, renders word paths, and renders every detail page from data.
- `src/data/wordStudies.js` owns verse word arrays and detailed word-study objects.
- `words/<slug>/index.html` should stay a minimal static shell with `data-word-slug="<slug>"` and should rely on the shared renderer.
- `sitemap.xml` must include every new public word URL.

## Required Virtual Agents for Words Work

Use these roles as a checklist. If the runtime supports sub-agents and the user asks to create/use agents, delegate the bounded checks in parallel; otherwise perform the same responsibilities yourself.

1. **Verse Builder Agent** — identifies the next verse, adds its section to `words/index.html`, creates the verse word array, and wires rendering in `assets/js/words.js`.
2. **Word Page Agent** — creates `words/<slug>/index.html` shells and complete word-study data entries for each word.
3. **SEO + Structured Data Agent** — validates metadata, canonical URLs, JSON-LD, sitemap entries, internal links, accessible headings, and search-friendly content for human search engines and AI answer engines.
4. **Quality Agent** — checks links, duplicate slugs, verse order, RTL Hebrew rendering, valid module imports, and local static-server behavior when practical.

## SEO and Structured Data Requirements

For any new or changed public page:

- Use a specific `<title>` and concise meta description.
- Add a canonical URL using the deployed base URL already used by the sitemap unless the project owner changes it.
- Keep sitemap and robots sitemap host aligned.
- Prefer JSON-LD that is accurate and conservative. Do not invent authorship, publication dates, reviews, ratings, or organization facts.
- For word detail pages, prefer `DefinedTerm` plus `WebPage`/`LearningResource` style structured data when adding JSON-LD.
- For verse landing sections, ensure visible text includes the reference, Hebrew verse, and navigable links to every available word page.
- Maintain crawlable static links; do not hide all navigation behind runtime-only data if a simple static link can be present.

## Validation Before Commit

Before committing Words work, run the most relevant available checks, at minimum:

- `git status --short`
- a syntax/module check such as `node --check assets/js/words.js` when Node is available
- a data import check such as `node -e "import('./src/data/wordStudies.js').then(() => console.log('wordStudies import ok'))"` when Node supports ESM
- inspect changed public HTML for malformed tags or broken relative paths

Commit changes on the current branch after validation.
