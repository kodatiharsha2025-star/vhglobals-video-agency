import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Server entry, used only at build time by scripts/prerender.mjs.
 *
 * This exists so the production index.html ships with the page content already
 * in the HTML instead of an empty <div id="root">. Search crawlers and AI
 * retrieval agents that do not execute JavaScript previously received no
 * content at all from this site.
 *
 * The client still mounts with createRoot (not hydrateRoot), so React replaces
 * this markup on mount exactly as it does today. Nothing about runtime
 * behaviour changes; the prerendered markup is a static snapshot for crawlers,
 * and a faster first paint for visitors.
 */
export function render(): string {
  return renderToString(<App />);
}
