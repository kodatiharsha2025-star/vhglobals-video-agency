/**
 * Build-time prerender step.
 *
 * Runs after the client and SSR builds. Produces one static HTML file per
 * route, each with its own <title>, meta description, canonical, social tags
 * and JSON-LD, and with the page content already rendered into it.
 *
 * Why this matters: most AI retrieval crawlers, and any crawler that does not
 * execute JavaScript, were receiving head tags and an empty div from this site.
 * Nothing on the page was readable to them.
 *
 * Output:
 *   dist/index.html                           homepage
 *   dist/<niche-slug>/index.html              one per niche
 *
 * Fails the build loudly rather than silently shipping an empty page.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const indexPath = join(dist, 'index.html');
const ssrEntry = join(root, 'dist-ssr', 'entry-server.js');

const ORIGIN = 'https://video.vhglobals.com';
const ORG = 'https://www.vhglobals.com/#organization';
const MOUNT = '<div id="root"></div>';
const MIN_CHARS = 2000;

if (!existsSync(indexPath)) {
  throw new Error('prerender: dist/index.html not found. Run the client build first.');
}
if (!existsSync(ssrEntry)) {
  throw new Error('prerender: dist-ssr/entry-server.js not found. Run the SSR build first.');
}

const mod = await import(pathToFileURL(ssrEntry).href);
const { render, NICHE_PAGES, SHOWCASE_DATA, SERVICES_LIST, COMPARE_PAGE } = mod;

const template = readFileSync(indexPath, 'utf-8');
if (!template.includes(MOUNT)) {
  throw new Error(`prerender: could not find ${MOUNT} in dist/index.html.`);
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Replace the content of a meta/title/link tag already present in the template. */
function setTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: head tag not found, cannot set it: ${pattern}`);
  }
  return html.replace(pattern, replacement);
}

function nicheJsonLd(page) {
  const service = SERVICES_LIST.find((s) => s.id === page.nicheId);
  const videos = SHOWCASE_DATA[page.nicheId] ?? [];
  const url = `${ORIGIN}/${page.slug}`;

  const graph = [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: service ? service.title : page.h1,
      serviceType: page.h1,
      url,
      description: page.intro,
      provider: { '@id': ORG },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'India' },
      ],
      availableLanguage: ['English'],
      ...(service
        ? {
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: `${service.title} capabilities`,
              itemListElement: service.features.map((f) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: f },
              })),
            },
          }
        : {}),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Video editing', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: page.navLabel, item: url },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.metaDescription,
      isPartOf: { '@id': `${ORIGIN}/#website` },
      about: { '@id': `${url}#service` },
      breadcrumb: { '@id': `${url}#breadcrumbs` },
    },
  ];

  if (videos.length) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#showcase`,
      name: `${page.navLabel} showcase`,
      numberOfItems: videos.length,
      itemListElement: videos.map((v, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'VideoObject',
          name: v.title,
          description: v.description,
          thumbnailUrl: v.fallbackPoster,
          contentUrl: v.videoSrc,
          embedUrl: `${url}#showcase`,
          isFamilyFriendly: true,
          genre: v.nicheLabel,
          creator: { '@id': ORG },
          publisher: { '@id': ORG },
        },
      })),
    });
  }

  const body = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)
    .split('\n')
    .map((l) => '    ' + l)
    .join('\n');

  return `    <script type="application/ld+json">\n${body}\n    </script>`;
}

function writePage(relDir, html, label) {
  const outDir = relDir ? join(dist, relDir) : dist;
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
  console.log(`prerender: ${label.padEnd(32)} -> ${relDir ? relDir + '/' : ''}index.html`);
}

// ---- homepage -------------------------------------------------------------
const homeHtml = render('/');
if (!homeHtml || homeHtml.length < MIN_CHARS) {
  throw new Error(`prerender: homepage render too short (${homeHtml ? homeHtml.length : 0} chars).`);
}
writePage('', template.replace(MOUNT, `<div id="root">${homeHtml}</div>`), 'homepage');

// ---- niche pages ----------------------------------------------------------
const LD_BLOCK = /[ \t]*<script type="application\/ld\+json">[\s\S]*?<\/script>/;
if (!LD_BLOCK.test(template)) {
  throw new Error('prerender: no ld+json block in template to swap per page.');
}

/** Build one static page: swap every head field, swap the schema, inject the body. */
function buildPage(page, jsonLd) {
  const url = `${ORIGIN}/${page.slug}`;
  const rendered = render(`/${page.slug}`);

  if (!rendered || rendered.length < MIN_CHARS) {
    throw new Error(`prerender: ${page.slug} render too short (${rendered ? rendered.length : 0} chars).`);
  }

  let html = template;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`);
  html = setTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);
  html = setTag(
    html,
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${esc(page.metaDescription)}" />`
  );
  html = setTag(
    html,
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${esc(page.title)}" />`
  );
  html = setTag(
    html,
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${esc(page.metaDescription)}" />`
  );
  html = setTag(
    html,
    /<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = setTag(
    html,
    /<meta name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${esc(page.title)}" />`
  );
  html = setTag(
    html,
    /<meta name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${esc(page.metaDescription)}" />`
  );
  html = html.replace(LD_BLOCK, jsonLd);
  html = html.replace(MOUNT, `<div id="root">${rendered}</div>`);

  writePage(page.slug, html, page.navLabel);
}

for (const page of NICHE_PAGES) {
  buildPage(page, nicheJsonLd(page));
}

// ---- comparison guide -----------------------------------------------------
{
  const url = `${ORIGIN}/${COMPARE_PAGE.slug}`;
  const graph = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: COMPARE_PAGE.title,
      description: COMPARE_PAGE.metaDescription,
      isPartOf: { '@id': `${ORIGIN}/#website` },
      about: { '@id': `${ORIGIN}/#business` },
      breadcrumb: { '@id': `${url}#breadcrumbs` },
      publisher: { '@id': ORG },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Video editing', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: COMPARE_PAGE.navLabel, item: url },
      ],
    },
  ];
  const body = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)
    .split('\n').map((l) => '    ' + l).join('\n');
  buildPage(COMPARE_PAGE, `    <script type="application/ld+json">\n${body}\n    </script>`);
}

// The SSR bundle is a build artefact only; it must not be deployed.
rmSync(join(root, 'dist-ssr'), { recursive: true, force: true });

console.log(`prerender: ${NICHE_PAGES.length + 2} pages written`);
