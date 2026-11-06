import { existsSync } from "node:fs";
import path from "node:path";
import { ArrowUpRight, FlaskConical } from "lucide-react";

/**
 * The workbench coda photo, Roland's own asset (already used on
 * pixelate.nl), self-hosted per the family rule: never loaded from
 * another domain at page view, and no photographer credit.
 */
const codaPhoto = "/images/home-energy-flow.jpg";

/**
 * Static export: resolve the coda photo against public/ at build time,
 * so a missing asset degrades to the plain card layout instead of
 * rendering a broken image (mirror of the tile screenshot fallback).
 */
function hasAsset(src: string): boolean {
  try {
    return existsSync(path.join(process.cwd(), "public", src.replace(/^\/+/, "")));
  } catch {
    return false;
  }
}

export function Spotlight() {
  return (
    <section
      aria-labelledby="spotlight-title"
      className="mx-auto max-w-[1536px] px-4 py-20 sm:px-6 sm:py-section"
    >
      {hasAsset(codaPhoto) ? (
        /*
          The coda: deliberately different from the tile grid. A full-bleed
          photo inside the section container, with the kicker chip,
          headline, copy and link stacked at the bottom over a themed scrim,
          the same composition as the closing codas on the product sites.
          The photo and overlay layers are decorative and aria-hidden. The
          whole card stays one link, as before.
        */
        <a
          href="https://github.com/pixelatenl/home-energy-dashboard"
          className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-2xl border border-border shadow-sm transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:min-h-[34rem] lg:min-h-[70vh]"
        >
          <div
            aria-hidden="true"
            className="workbench-coda-photo absolute inset-0 bg-cover"
            style={{ backgroundImage: `url("${codaPhoto}")` }}
          />
          <div aria-hidden="true" className="workbench-coda-overlay absolute inset-0" />
          <div className="relative flex flex-col gap-5 p-6 sm:gap-6 sm:p-10 lg:p-12">
            <p className="self-start rounded-full bg-primary px-3 py-1 text-sm font-medium tracking-wide text-primary-foreground uppercase">
              From the workbench
            </p>
            <h2
              id="spotlight-title"
              className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Home Energy Dashboard
            </h2>
            <p className="max-w-3xl text-base leading-relaxed sm:text-lg">
              A self-built home energy dashboard, not an open data project, but it follows the
              same discipline as everything in this family: the server computes from the official
              data, and the model only narrates what the numbers mean.
            </p>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              github.com/pixelatenl/home-energy-dashboard
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </p>
          </div>
        </a>
      ) : (
        <a
          href="https://github.com/pixelatenl/home-energy-dashboard"
          className="group block rounded-2xl border border-border bg-[linear-gradient(135deg,color-mix(in_srgb,var(--primary)_22%,var(--card))_0%,var(--card)_45%,var(--depth)_100%)] p-8 shadow-sm transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:p-10"
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <FlaskConical size={16} aria-hidden="true" />
            From the workbench
          </p>
          <h2 id="spotlight-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Home Energy Dashboard
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            A self-built home energy dashboard, not an open data project, but it follows the
            same discipline as everything in this family: the server computes from the official
            data, and the model only narrates what the numbers mean.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
            github.com/pixelatenl/home-energy-dashboard
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </p>
        </a>
      )}
    </section>
  );
}
