export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-depth">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 sm:px-6">
        <p className="text-sm">
          <span className="font-semibold">Open Data Project</span> — built by{" "}
          <a
            href="https://pixelate.nl"
            className="font-medium underline decoration-primary/60 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Pixelate BV
          </a>
          .
        </p>
        <p className="text-sm text-muted-foreground">
          Every figure on this site is computed from official open data sources and can be
          verified through the same source.
        </p>
      </div>
    </footer>
  );
}
