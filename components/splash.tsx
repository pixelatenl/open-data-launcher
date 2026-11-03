import { ChevronDown } from "lucide-react";
import { PixelLogo } from "@/components/pixel-logo";
import { ThemeSwitcher } from "@/components/theme-switcher";

/**
 * Full-viewport splash. The launcher is the one family page without a
 * header: the splash carries the brand on its own. The theme switcher
 * floats over the splash (absolute, so it scrolls away with the page),
 * and the arrow anchors down to the product tiles.
 */
const description = [
  "Public institutions collect this data with public money, so it deserves to be seen — every figure on these sites can be verified by anyone through the same official source.",
  "Open data holds stories that portal spreadsheets never tell. Once the numbers are public, the questions start — and the charts follow.",
];

export function Splash() {
  return (
    <section
      aria-labelledby="splash-title"
      className="splash relative flex min-h-svh flex-col overflow-hidden"
    >
      <div className="splash-photo" aria-hidden="true" />
      <div className="splash-wash" aria-hidden="true" />
      <div className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6">
        <ThemeSwitcher />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-10 px-4 pb-28 pt-24 sm:px-6 md:flex-row md:gap-16 md:py-28">
        <PixelLogo
          size={112}
          className="shrink-0 text-primary drop-shadow-[0_0_36px_rgba(72,185,209,0.45)]"
        />
        <div className="splash-glass w-full max-w-2xl rounded-2xl p-7 sm:p-10">
          <h1
            id="splash-title"
            className="text-4xl font-bold tracking-tight text-balance sm:text-6xl"
          >
            Open Data Project
          </h1>
          <p className="mt-5 text-2xl font-medium tracking-tight text-balance sm:text-3xl">
            The <span className="text-accent">stories</span> hiding in public data.
          </p>
          <div className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#products"
        aria-label="Scroll to the products"
        className="absolute bottom-6 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <ChevronDown
          size={20}
          aria-hidden="true"
          className="motion-safe:animate-splash-bob"
        />
      </a>
    </section>
  );
}
