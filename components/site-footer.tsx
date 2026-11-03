/**
 * The GitHub mark, inlined as a 24x24 currentColor SVG: lucide-react 1.x
 * dropped its brand icons, and adding a dependency for one glyph is not
 * worth it. Decorative only (aria-hidden), the link carries the name.
 */
function GithubMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="mr-1 inline-block fill-current align-[-2px]"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-depth">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 sm:px-6">
        <p className="text-sm">
          <span className="font-semibold">Open Data Project</span>, built by{" "}
          <a
            href="https://pixelate.nl"
            className="font-medium underline decoration-primary/60 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Pixelate BV
          </a>
          .{" "}
          <a
            href="https://github.com/pixelatenl/open-data-launcher"
            className="text-muted-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-foreground hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <GithubMark />
            open-data-launcher on GitHub
          </a>
          .
        </p>
        <p className="text-sm text-muted-foreground">
          Every figure on this site is computed from official open data sources and can be
          verified through the same source.
        </p>
        <p className="text-sm text-muted-foreground">
          Photo by{" "}
          <a
            href="https://unsplash.com/@jonakoh"
            className="underline decoration-primary/60 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            jonakoh _
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/photos/abstract-blue-wave-pattern-made-of-dots-NPDRGf0w1lw"
            className="underline decoration-primary/60 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Unsplash
          </a>
          .
        </p>
        <p className="text-sm text-muted-foreground">
          Photo by{" "}
          <a
            href="https://unsplash.com/@chuttersnap"
            className="underline decoration-primary/60 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            CHUTTERSNAP
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/photos/electric-vehicle-charging-cable-plugged-into-car-xJLsHl0hIik"
            className="underline decoration-primary/60 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Unsplash
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
