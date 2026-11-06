import { Drawer } from "@/components/drawer";

/**
 * The photo credits drawer, seated in the family footer's colophon
 * extra slot. A server component: the credit list renders into the
 * drawer body at build time, so it ships in the static HTML even
 * while the drawer is closed (hidden plus inert, still indexable).
 * Every photo on this site is self-hosted; nothing is loaded from
 * Unsplash at page view.
 */
export function PhotoCreditsDrawer() {
  return (
    <Drawer label="Photo credits" title="Photo credits">
      <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
        <li className="text-xs">
          Photo by{" "}
          <a
            className="underline underline-offset-2 hover:text-foreground"
            href="https://unsplash.com/@jonakoh"
          >
            jonakoh _
          </a>{" "}
          on{" "}
          <a
            className="underline underline-offset-2 hover:text-foreground"
            href="https://unsplash.com/photos/abstract-blue-wave-pattern-made-of-dots-NPDRGf0w1lw"
          >
            Unsplash
          </a>
          .
        </li>
        <li className="text-xs">
          Photo by{" "}
          <a
            className="underline underline-offset-2 hover:text-foreground"
            href="https://unsplash.com/@chuttersnap"
          >
            CHUTTERSNAP
          </a>{" "}
          on{" "}
          <a
            className="underline underline-offset-2 hover:text-foreground"
            href="https://unsplash.com/photos/electric-vehicle-charging-cable-plugged-into-car-xJLsHl0hIik"
          >
            Unsplash
          </a>
          .
        </li>
        <li className="text-xs">
          Photo by{" "}
          <a
            className="underline underline-offset-2 hover:text-foreground"
            href="https://unsplash.com/@emilianobar"
          >
            Emiliano Bar
          </a>{" "}
          on{" "}
          <a
            className="underline underline-offset-2 hover:text-foreground"
            href="https://unsplash.com/photos/empty-room-PaKHbtTDqt0"
          >
            Unsplash
          </a>
          .
        </li>
      </ul>
    </Drawer>
  );
}
