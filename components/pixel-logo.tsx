import type { CSSProperties } from "react";

interface PixelLogoProps {
  size?: number;
  className?: string;
}

/**
 * The family pixel grid: 3x3 cells, cells four and eight (1-indexed)
 * transparent, all other cells brand green and fully rounded.
 *
 * The visible cells play the drop-and-bounce intro on load (see
 * .logo-cell in globals.css, adapted from pixelate.nl's Logo.vue):
 * each cell falls from above its grid position and settles with a
 * bounce, row by row, top-left first. The rects are presentational
 * inside the role="img" svg and are not focusable.
 */
export function PixelLogo({ size = 32, className }: PixelLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      role="img"
      aria-label="Open Data Project pixel grid logo"
      className={className}
    >
      {Array.from({ length: 9 }, (_, i) => {
        if (i === 3 || i === 7) return null;
        const x = (i % 3) * 32 + 4;
        const y = Math.floor(i / 3) * 32 + 4;
        // visible cells in row-major order drop 0.25s apart, 0.4s through 1.9s
        const visibleIndex = i - (i > 3 ? 1 : 0) - (i > 7 ? 1 : 0);
        const delay = 0.4 + visibleIndex * 0.25;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={28}
            height={28}
            rx={14}
            fill="currentColor"
            className="logo-cell"
            style={{ "--logo-cell-delay": `${delay}s` } as CSSProperties}
          />
        );
      })}
    </svg>
  );
}
