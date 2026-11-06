export type ProjectStatus = "live" | "in-research" | "planned";

export interface Project {
  name: string;
  status: ProjectStatus;
  /** Only set for live projects; placeholders carry no URL and render no link. */
  url?: string;
  /**
   * Optional visual at the top of the live tile, as a path under public/
   * (e.g. "/images/project-electric-fleet.jpg"). If the asset is not
   * committed, the tile falls back to the color-only layout.
   */
  screenshot?: string;
  /** Alt text for the visual; describes the image shown (photos and
   * screenshots differ), with a screenshot-based fallback if omitted. */
  screenshotAlt?: string;
  /**
   * Decorative motif filling the 16:10 visual slot of a placeholder tile,
   * suggesting the project's subject without becoming an illustration.
   */
  motif?: "grid" | "housing";
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
    screenshot: "/images/project-electric-fleet.jpg",
    screenshotAlt: "Electric vehicle charging cable plugged into a car",
    description:
      "How electric the Dutch vehicle fleet really is, charted question by question from the RDW open register of vehicles.",
  },
  {
    name: "Dutch Courtroom Explorer",
    status: "live",
    url: "https://justice.pixelate.nl",
    screenshot: "/images/project-courtroom.jpg",
    screenshotAlt: "Black and white photograph of an empty prison cell",
    description:
      "What the Dutch courts rule on, charted question by question from the open data of the Dutch judiciary.",
  },
  {
    name: "Green Grid Atlas",
    status: "in-research",
    motif: "grid",
    description:
      "The Dutch and European electricity grid on open grid data: where power flows, and where the grid strains.",
  },
  {
    name: "Housing and Energy Transition Explorer",
    status: "planned",
    motif: "housing",
    description:
      "The Dutch housing stock and its energy transition, built on open government data.",
  },
];
