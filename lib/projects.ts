export type ProjectStatus = "live" | "in-research" | "planned";

export interface Project {
  name: string;
  status: ProjectStatus;
  /** Only set for live projects; placeholders carry no URL and render no link. */
  url?: string;
  /**
   * Optional screenshot of the project, as a path under public/ (e.g.
   * "/images/fleet.png"), rendered as the visual top of the tile. If the
   * asset is not committed, the tile falls back to the color-only layout.
   */
  screenshot?: string;
  description: string;
}

export const projectStatusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  "in-research": "In research",
  planned: "Planned",
};

/**
 * The project family. Adding a project is a one-entry change here.
 * Only entries with status "live" (and a url) render as clickable tiles.
 */
export const projects: Project[] = [
  {
    name: "Dutch Fleet Electrification Explorer",
    status: "live",
    url: "https://fleet.pixelate.nl",
    screenshot: "/images/fleet.png",
    description:
      "How electric the Dutch vehicle fleet really is, charted question by question from the RDW open register of vehicles.",
  },
  {
    name: "Green Grid Atlas",
    status: "in-research",
    description:
      "The Dutch and European electricity grid on open grid data: where power flows, and where the grid strains.",
  },
  {
    name: "Housing and Energy Transition Explorer",
    status: "planned",
    description:
      "The Dutch housing stock and its energy transition, built on open government data.",
  },
];
