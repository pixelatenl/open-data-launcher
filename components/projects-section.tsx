import { existsSync } from "node:fs";
import path from "node:path";
import { ArrowUpRight, Lock } from "lucide-react";
import { Chip } from "@/components/chip";
import { projects, projectStatusLabel, type Project } from "@/lib/projects";

/**
 * Static export: resolve a screenshot path against public/ at build time,
 * so a missing asset degrades to the color-only tile instead of rendering
 * a broken image.
 */
function hasAsset(src: string): boolean {
  try {
    return existsSync(path.join(process.cwd(), "public", src.replace(/^\/+/, "")));
  } catch {
    return false;
  }
}

function DrivetrainMotif() {
  // Mini drivetrain bar echoing the fleet explorer: share of the Dutch fleet
  // that is battery-electric, as one calm stacked bar.
  return (
    <div
      aria-hidden="true"
      className="mt-auto flex h-2 w-full overflow-hidden rounded-full bg-muted pt-0"
    >
      <span className="h-full w-[13%] rounded-full bg-primary" />
      <span className="h-full w-[22%] bg-secondary" />
    </div>
  );
}

/**
 * Placeholder motifs: abstract, decorative suggestions of the project's
 * subject, in theme tokens, muted enough to stay a texture rather than an
 * illustration. The wrapping slot is aria-hidden, so no alt text.
 */
function GridAtlasMotif() {
  // A faint grid with a few flow lines and nodes: an electricity grid.
  return (
    <svg
      viewBox="0 0 160 100"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full text-primary/30"
      fill="none"
    >
      <path
        d="M30 0v100M70 0v100M110 0v100M150 0v100M10 25h140M10 55h140M10 85h140"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <path d="M0 70h44l38-38h78" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 40h58l42 32h60" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <g fill="currentColor">
        <circle cx="44" cy="70" r="2.5" />
        <circle cx="82" cy="32" r="2.5" />
        <circle cx="100" cy="72" r="2.5" />
        <circle cx="126" cy="40" r="2.5" />
      </g>
    </svg>
  );
}

function HousingStockMotif() {
  // A minimal skyline of ascending bars, one wearing a roof: a housing stock.
  return (
    <svg
      viewBox="0 0 160 100"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full text-primary/25"
    >
      <g fill="currentColor">
        <rect x="24" y="64" width="14" height="24" rx="1.5" />
        <rect x="46" y="50" width="14" height="38" rx="1.5" />
        <rect x="68" y="60" width="14" height="28" rx="1.5" />
        <rect x="90" y="38" width="14" height="50" rx="1.5" />
        <rect x="112" y="54" width="14" height="34" rx="1.5" />
        <rect x="134" y="68" width="14" height="20" rx="1.5" />
        <path d="M86 38l11-12 11 12z" />
      </g>
      <path d="M16 88h140" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const placeholderMotifs = {
  grid: GridAtlasMotif,
  housing: HousingStockMotif,
} as const;

function LiveTile({ project }: { project: Project }) {
  const screenshot =
    project.screenshot && hasAsset(project.screenshot) ? project.screenshot : null;
  return (
    <li>
      <a
        href={project.url}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-[border-color,box-shadow] hover:border-primary hover:shadow-[var(--tile-glow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:shadow-[var(--tile-glow)]"
      >
        {screenshot ? (
          <div className="relative aspect-[16/10] w-full border-b border-border">
            <img
              src={screenshot}
              alt={project.screenshotAlt ?? `Screenshot of ${project.name}`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* subtle brand gradient so the photo blends into the tile surface */}
            <div aria-hidden="true" className="tile-visual-fade absolute inset-0" />
          </div>
        ) : null}
        <div className="flex flex-1 flex-col gap-3 p-card">
          <div className="flex items-center justify-between gap-2">
            <Chip tone="accent">{projectStatusLabel[project.status]}</Chip>
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            />
          </div>
          <h3 className="text-lg font-semibold leading-snug">{project.name}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          {!screenshot && <DrivetrainMotif />}
        </div>
      </a>
    </li>
  );
}

function PlaceholderTile({ project }: { project: Project }) {
  const Motif = project.motif ? placeholderMotifs[project.motif] : null;
  return (
    <li>
      {/* Placeholder: semantic article, deliberately no anchor */}
      <article
        aria-label={`${project.name} (${projectStatusLabel[project.status]})`}
        className="flex h-full flex-col gap-3 rounded-xl border border-dashed border-border bg-muted/50 p-card text-muted-foreground"
      >
        {Motif ? (
          <div
            aria-hidden="true"
            className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted/40"
          >
            <Motif />
          </div>
        ) : null}
        <div className="flex items-center justify-between gap-2">
          <Chip tone="muted">{projectStatusLabel[project.status]}</Chip>
          <Lock size={16} aria-hidden="true" className="text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold leading-snug">{project.name}</h3>
        <p className="text-sm leading-relaxed">{project.description}</p>
      </article>
    </li>
  );
}

function GhostTile() {
  return (
    <li>
      <div className="flex h-full flex-col justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/30 p-card text-muted-foreground">
        <h3 className="text-lg font-semibold leading-snug">More to come</h3>
        <p className="text-sm leading-relaxed">New projects are always in research.</p>
      </div>
    </li>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="projects-glow mx-auto max-w-[1536px] px-4 py-20 sm:px-6 sm:py-section"
    >
      <h2 id="projects-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        The projects
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
        Each project charts one public dataset, one question at a time. Live projects open
        straight from their tile; the rest are still in research.
      </p>
      <ul className="mt-block grid list-none gap-grid p-0 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) =>
          project.status === "live" && project.url ? (
            <LiveTile key={project.name} project={project} />
          ) : (
            <PlaceholderTile key={project.name} project={project} />
          ),
        )}
        <GhostTile />
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        Across the projects, AI explains what the charts show, always labelled experimental,
        with every figure computed from the official source.
      </p>
    </section>
  );
}
