import { ArrowUpRight, FlaskConical } from "lucide-react";

export function Spotlight() {
  return (
    <section
      aria-labelledby="spotlight-title"
      className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24"
    >
      <a
        href="https://github.com/pixelatenl/home-energy-dashboard"
        className="group block rounded-2xl border border-border bg-[linear-gradient(135deg,color-mix(in_srgb,var(--primary)_22%,var(--card))_0%,var(--card)_45%,var(--depth)_100%)] p-8 shadow-sm transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:p-10"
      >
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          <FlaskConical size={16} aria-hidden="true" />
          From the workbench
        </p>
        <h2 id="spotlight-title" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Home Energy Dashboard
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          A self-built home energy dashboard, not an open data project — but it follows the
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
    </section>
  );
}
