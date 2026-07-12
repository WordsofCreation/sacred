import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const canonicalBase = 'https://northwestchefs.github.io/sacred/';
const skipDirs = new Set(['.git', 'node_modules']);
const warnings = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

function rel(file) {
  return path.relative(root, file).split(path.sep).join('/');
}

function publicUrlForHtml(relativePath) {
  if (relativePath === 'index.html') return canonicalBase;
  if (relativePath.endsWith('/index.html')) return canonicalBase + relativePath.slice(0, -'index.html'.length);
  return canonicalBase + relativePath;
}

function getTag(content, regex) {
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

const files = await walk(root);
const htmlFiles = files.filter((file) => file.endsWith('.html')).map(rel);
const exemptHtml = (relativePath) => relativePath.startsWith('components/') || relativePath.startsWith('google') || relativePath.startsWith('Bing');

for (const relativePath of htmlFiles) {
  const content = await readFile(path.join(root, relativePath), 'utf8');
  const title = getTag(content, /<title>([^<]+)<\/title>/i);
  const description = getTag(content, /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const canonical = getTag(content, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);

  if (exemptHtml(relativePath)) continue;
  if (!title || title.toLowerCase() === 'sacred') warnings.push(`${relativePath}: missing specific title`);
  if (!description) warnings.push(`${relativePath}: missing meta description`);
  if (!canonical) warnings.push(`${relativePath}: missing canonical link`);
  if (canonical && canonical.startsWith('https://') && !canonical.startsWith(canonicalBase)) warnings.push(`${relativePath}: canonical host differs from ${canonicalBase}`);
}

const robots = await readFile(path.join(root, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${canonicalBase}sitemap.xml`)) {
  warnings.push('robots.txt: sitemap URL is missing or not aligned with canonical base');
}

const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
for (const url of sitemapUrls) {
  if (!url.startsWith(canonicalBase)) warnings.push(`sitemap.xml: URL host differs from canonical base: ${url}`);
}

try {
  const llmsInfo = await stat(path.join(root, 'llms.txt'));
  if (!llmsInfo.isFile()) warnings.push('llms.txt: exists but is not a file');
} catch {
  warnings.push('llms.txt: missing AI discovery guide');
}

if (warnings.length) {
  console.log(`SEO audit completed with ${warnings.length} warning(s):`);
  for (const warning of warnings) console.log(`- ${warning}`);
  process.exitCode = 1;
} else {
  console.log(`SEO audit passed for ${htmlFiles.length} HTML file(s), robots.txt, sitemap.xml, and llms.txt.`);
}
