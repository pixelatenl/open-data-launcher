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

function LiveTile({ project }: { project: Project }) {
  const screenshot =
    project.screenshot && hasAsset(project.screenshot) ? project.screenshot : null;
  return (
    <li>
      <a
        href={project.url}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {screenshot ? (
          <img
            src={screenshot}
            alt={`Screenshot of ${project.name}`}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full border-b border-border object-cover"
          />
        ) : null}
        <div className="flex flex-1 flex-col gap-3 p-6">
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
  return (
    <li>
      {/* Placeholder: semantic article, deliberately no anchor */}
      <article
        aria-label={`${project.name} (${projectStatusLabel[project.status]})`}
        className="flex h-full flex-col gap-3 rounded-xl border border-dashed border-border bg-muted/50 p-6 text-muted-foreground"
      >
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
      <div className="flex h-full flex-col justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/30 p-6 text-muted-foreground">
        <h3 className="text-lg font-semibold">More to come</h3>
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
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      <h2 id="projects-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        The projects
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
        Each project charts one public dataset, one question at a time. Live projects open
        straight from their tile; the rest are still in research.
      </p>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Across the projects, AI explains what the charts show — always labelled experimental,
        with every figure computed from the official source.
      </p>
      <ul className="mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) =>
          project.status === "live" && project.url ? (
            <LiveTile key={project.name} project={project} />
          ) : (
            <PlaceholderTile key={project.name} project={project} />
          ),
        )}
        <GhostTile />
      </ul>
    </section>
  );
}
