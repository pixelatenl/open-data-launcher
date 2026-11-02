import { PixelLogo } from "@/components/pixel-logo";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <PixelLogo size={32} className="shrink-0 text-primary" />
          <span className="truncate text-lg font-semibold tracking-tight">
            Open Data Project
          </span>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
