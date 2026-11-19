import App from './App';
import NichePage from './pages/NichePage';
import { NICHE_BY_SLUG } from './data/niches';

/**
 * Path-based page selection.
 *
 * Deliberately not a client-side router. Every route is prerendered to its own
 * static HTML file at build time and all internal links are plain anchors, so
 * navigation is a normal page load that serves fully-rendered HTML from the
 * CDN. That removes a dependency, keeps each page independently cacheable, and
 * means a crawler and a visitor receive exactly the same thing.
 *
 * Unknown paths fall through to the homepage, which matches how the single-page
 * build behaved before and avoids a hard failure on a mistyped URL.
 */
export default function Root({ path }: { path: string }) {
  const slug = path.replace(/^\/+/, '').replace(/\/+$/, '');
  const page = NICHE_BY_SLUG[slug];

  return page ? <NichePage page={page} /> : <App />;
}
