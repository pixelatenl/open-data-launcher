import type { ReactNode } from "react";

interface ChipProps {
  tone?: "accent" | "primary" | "muted";
  children: ReactNode;
}

/** Small status chip. Accent tone is reserved for one meaningful marker per section. */
export function Chip({ tone = "muted", children }: ChipProps) {
  const tones = {
    accent: "bg-accent text-accent-foreground",
    primary: "bg-primary text-primary-foreground",
    muted: "bg-muted text-muted-foreground",
  } as const;
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
