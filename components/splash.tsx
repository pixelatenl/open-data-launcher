import { ChevronDown } from "lucide-react";
import { PixelLogo } from "@/components/pixel-logo";
import { ThemeSwitcher } from "@/components/theme-switcher";

/**
 * Full-viewport splash. The launcher is the one family page without a
 * header: the splash carries the brand on its own. The theme switcher
 * floats over the splash (absolute, so it scrolls away with the page),
 * and the arrow anchors down to the project tiles.
 */
const description =
  "Public institutions collect this data with public money, so it deserves to be seen. Every figure can be verified by anyone, through the same official source. These are the stories that portal spreadsheets never tell.";

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
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-28 pt-24 sm:px-6 sm:py-28">
        <div className="flex items-center gap-6 sm:gap-8">
          <PixelLogo
            size={112}
            className="h-16 w-16 shrink-0 overflow-visible text-primary splash-logo sm:h-28 sm:w-28"
          />
          <div className="splash-intro">
            <h1
              id="splash-title"
              className="text-4xl font-bold tracking-tight text-balance sm:text-6xl"
            >
              Open Data Project
            </h1>
            <p className="mt-4 text-xl font-medium tracking-tight text-balance sm:text-3xl">
              The <span className="text-accent">stories</span> hiding in <span className="text-accent">public data</span>.
            </p>
          </div>
        </div>
        <div className="splash-intro mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-12 sm:text-lg">
          <p>{description}</p>
        </div>
      </div>
      <a
        href="#projects"
        aria-label="Scroll to the projects"
        className="splash-arrow-intro absolute bottom-6 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
