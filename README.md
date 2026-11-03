# open-data-launcher

The launcher site for Pixelate's **Open Data Project**, live at
<https://opendata.pixelate.nl>. It is the family hub: a landing page about open data
itself that points to each product site (e.g. the Dutch Fleet Electrification Explorer at
<https://fleet.pixelate.nl>), while every product site links back through the shared
family header.

## Stack

- Next.js (App Router) with `output: 'export'` — fully static, exported to `out/`.
- React 19, TypeScript, Tailwind CSS v4 with shadcn/ui token conventions
  (CSS custom properties on `:root` and `.dark` in `app/globals.css`).
- `lucide-react` for icons only. No chart libraries, no other runtime dependencies,
  no runtime API calls.

## Develop

```sh
npm ci
npm run dev     # local dev server
npm run build   # static export to out/
```

Node 22 (see `.github/workflows/build.yml`).

## Deploy pattern

`.github/workflows/build.yml` runs `npm ci && npm run build` on every push and pull
request. Only on a **push to `main`** does the publish step run: the static export in
`out/` is published to the **`deploy` branch** (GitHub Pages, `peaceiris/actions-gh-pages`,
force-orphan). Pull requests build and upload the artifact but never publish. The site is
served from the `deploy` branch at <https://opendata.pixelate.nl>.

## Structure

- `app/` — App Router entry: `layout.tsx` (metadata, theme bootstrap), `page.tsx`
  (sections + JSON-LD), `robots.ts`, `sitemap.ts`, `icon.png`, `apple-icon.png`.
- `components/` — family footer, pixel grid logo, theme switcher, the full-viewport
  splash (headerless launcher), and the page sections (products, workbench spotlight).
- `lib/products.ts` — the typed product array. **Adding a product is a one-entry
  change** there; entries with status `live` render as clickable tiles, the rest as
  non-linked placeholders.
- `public/og-image.png` — Open Graph image (1200x630, pixel grid on the brand gradient;
  generated as a static PNG because OG consumers need raster images).

## Theming

Class strategy (`dark` on `<html>`), choice persisted in `localStorage`, defaulting to
the operating system preference (dark when the OS has no light preference). An inline
script in `<head>` applies the class before first paint, so there is no flash of the
wrong theme. Both themes ship; the splash photo layer drops its tint filter and the
scroll-arrow bobbing stops under `prefers-reduced-motion`.
