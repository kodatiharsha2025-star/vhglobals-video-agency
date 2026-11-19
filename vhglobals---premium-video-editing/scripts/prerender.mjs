/**
 * Build-time prerender step.
 *
 * Runs after the client and SSR builds. Renders <App /> to an HTML string and
 * injects it into dist/index.html inside <div id="root">, so the deployed page
 * contains its own content rather than an empty mount point.
 *
 * Why this matters: most AI retrieval crawlers, and any crawler that does not
 * execute JavaScript, were receiving head tags and an empty div from this site.
 * Nothing on the page was readable to them.
 *
 * Fails the build loudly rather than silently shipping an empty page.
 */
import { readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = join(root, 'dist', 'index.html');
const ssrEntry = join(root, 'dist-ssr', 'entry-server.js');

const MOUNT = '<div id="root"></div>';

if (!existsSync(indexPath)) {
  throw new Error('prerender: dist/index.html not found. Run the client build first.');
}
if (!existsSync(ssrEntry)) {
  throw new Error('prerender: dist-ssr/entry-server.js not found. Run the SSR build first.');
}

const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

if (!appHtml || appHtml.length < 2000) {
  throw new Error(
    `prerender: rendered output is suspiciously short (${appHtml ? appHtml.length : 0} chars). ` +
    'Refusing to ship a near-empty page.'
  );
}

const html = readFileSync(indexPath, 'utf-8');

if (!html.includes(MOUNT)) {
  throw new Error(`prerender: could not find ${MOUNT} in dist/index.html.`);
}

writeFileSync(
  indexPath,
  html.replace(MOUNT, `<div id="root">${appHtml}</div>`),
  'utf-8'
);

// The SSR bundle is a build artefact only; it must not be deployed.
rmSync(join(root, 'dist-ssr'), { recursive: true, force: true });

const kb = (appHtml.length / 1024).toFixed(1);
console.log(`prerender: injected ${kb} kB of rendered HTML into dist/index.html`);
