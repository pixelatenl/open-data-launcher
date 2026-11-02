import { PixelLogo } from "@/components/pixel-logo";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero relative overflow-hidden">
      <div className="hero-aurora" aria-hidden="true">
        <span className="hero-blob hero-blob-primary" />
        <span className="hero-blob hero-blob-depth" />
        <span className="hero-blob hero-blob-accent" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-24 text-center sm:px-6 sm:pb-36 sm:pt-32">
        <PixelLogo size={96} className="mx-auto text-primary drop-shadow-[0_0_36px_rgba(72,185,209,0.45)]" />
        <h1
          id="hero-title"
          className="mt-8 text-5xl font-bold tracking-tight text-balance sm:text-7xl"
        >
          Open Data Project
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-2xl font-medium tracking-tight text-balance sm:text-3xl">
          The <span className="text-accent">stories</span> hiding in public data.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
          Public data, charted one question at a time. Built by Pixelate.
        </p>
      </div>
    </section>
  );
}
