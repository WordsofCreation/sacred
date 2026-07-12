# Sacred SEO and AI Search Agent Organization

This document defines a reusable agent organization for keeping Sacred discoverable in traditional web search and AI answer engines while preserving the site's calm Hebrew Bible study purpose.

## Mission

The SEO organization should improve crawlability, metadata consistency, structured data, and answer-engine readability without adding hype, invented claims, or distracting content. Hebrew text, stable references, source provenance, and readable public pages remain the primary signals.

## Canonical Deployment

- Base URL: `https://northwestchefs.github.io/sacred/`
- Sitemap: `https://northwestchefs.github.io/sacred/sitemap.xml`
- Robots declaration: `robots.txt` must point to the same sitemap host.
- AI discovery guide: `llms.txt` should summarize public entry points, source policy, and high-value study pages.

## Agent Roster

### 1. Orchestrator Agent

Owns the whole SEO run.

- Creates the work plan and assigns checks to the agents below.
- Confirms the canonical base URL before any public metadata changes.
- Prevents duplicate or contradictory recommendations.
- Ensures final changes stay static-site friendly.

### 2. Crawlability Agent

Owns search-engine access.

- Checks `robots.txt` and `sitemap.xml` host alignment.
- Confirms every public page intended for indexing has a crawlable URL.
- Flags sitemap URLs that do not have matching local files.
- Keeps redirects or legacy pages explicit and conservative.

### 3. Metadata Agent

Owns page-level search snippets.

- Checks each public HTML page for a specific `<title>`.
- Checks each indexable public page for a concise meta description.
- Checks each indexable public page for a canonical URL.
- Keeps titles and descriptions human-readable and specific to the page.

### 4. Structured Data Agent

Owns JSON-LD accuracy.

- Validates that structured data does not invent authorship, reviews, ratings, publication dates, or organization facts.
- Prefers `WebSite`, `WebPage`, `LearningResource`, and `DefinedTerm` where the visible content supports those types.
- Ensures JSON-LD URLs match canonical URLs.
- Keeps structured data conservative when source provenance is still being confirmed.

### 5. AI Search Agent

Owns answer-engine readiness.

- Maintains `llms.txt` with concise descriptions of important public URLs.
- Ensures visible text explains what Sacred is, what sources are used, and what is still provisional.
- Promotes stable references such as book, chapter, verse, Hebrew word, transliteration, and slug.
- Avoids keyword stuffing and unsupported claims.

### 6. Internal Link Agent

Owns site navigation and crawl paths.

- Confirms primary navigation links to Home, Read, Study, Words, Mitzvot, and About.
- Confirms word-study landing sections expose crawlable links to individual word pages when practical.
- Flags orphaned public pages that appear in the sitemap but not in navigation or contextual links.

### 7. Quality Agent

Owns validation before commit.

- Runs `git status --short`.
- Runs `node scripts/seo-audit.mjs` when Node is available.
- Runs relevant syntax checks for touched JavaScript.
- Inspects changed HTML for malformed tags and broken relative paths.

## Standard Workflow

1. Run the Orchestrator Agent to define scope and confirm canonical deployment.
2. Run Crawlability, Metadata, Structured Data, AI Search, and Internal Link agents in parallel where tooling allows.
3. Apply changes in small, reviewable batches.
4. Run the Quality Agent checks.
5. Commit the validated changes on the current branch.

## Success Criteria

- `robots.txt`, `sitemap.xml`, canonical links, and JSON-LD use the same deployed host.
- Public indexable pages have unique titles, meta descriptions, and canonical URLs.
- AI crawlers can find a concise project summary in `llms.txt`.
- Structured data matches visible page content and source provenance.
- Static navigation remains crawlable without requiring client-side rendering.
