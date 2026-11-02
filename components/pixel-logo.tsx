interface PixelLogoProps {
  size?: number;
  className?: string;
}

/**
 * The family pixel grid: 3x3 cells, cells four and eight (1-indexed)
 * transparent, all other cells brand green and fully rounded.
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
        return <rect key={i} x={x} y={y} width={28} height={28} rx={14} fill="currentColor" />;
      })}
    </svg>
  );
}
