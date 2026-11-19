import { renderToString } from 'react-dom/server';
import Root from './Root';

/**
 * Server entry, used only at build time by scripts/prerender.mjs.
 *
 * This exists so the production HTML ships with the page content already in it
 * instead of an empty <div id="root">. Search crawlers and AI retrieval agents
 * that do not execute JavaScript previously received no content at all from
 * this site.
 *
 * The client still mounts with createRoot (not hydrateRoot), so React replaces
 * this markup on mount exactly as it did before. Nothing about runtime
 * behaviour changes; the prerendered markup is a static snapshot for crawlers,
 * and a faster first paint for visitors.
 */
export function render(path: string): string {
  return renderToString(<Root path={path} />);
}

/**
 * Re-exported so scripts/prerender.mjs builds each page's head and schema from
 * the same data the components render, rather than a second hand-maintained copy.
 */
export { NICHE_PAGES } from './data/niches';
export { SHOWCASE_DATA } from './data/showcases';
export { SERVICES_LIST } from './components/Services';
export { COMPARE_PAGE } from './pages/ComparePage';
