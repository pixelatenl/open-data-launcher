import { ArrowUpRight, Lock } from "lucide-react";
import { Chip } from "@/components/chip";
import { products, productStatusLabel, type Product } from "@/lib/products";

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

function LiveTile({ product }: { product: Product }) {
  return (
    <li>
      <a
        href={product.url}
        className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <div className="flex items-center justify-between gap-2">
          <Chip tone="accent">{productStatusLabel[product.status]}</Chip>
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>
        <h3 className="text-lg font-semibold leading-snug">{product.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <DrivetrainMotif />
      </a>
    </li>
  );
}

function PlaceholderTile({ product }: { product: Product }) {
  return (
    <li>
      {/* Placeholder: semantic article, deliberately no anchor */}
      <article
        aria-label={`${product.name} (${productStatusLabel[product.status]})`}
        className="flex h-full flex-col gap-3 rounded-xl border border-dashed border-border bg-muted/50 p-6 text-muted-foreground"
      >
        <div className="flex items-center justify-between gap-2">
          <Chip tone="muted">{productStatusLabel[product.status]}</Chip>
          <Lock size={16} aria-hidden="true" className="text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold leading-snug">{product.name}</h3>
        <p className="text-sm leading-relaxed">{product.description}</p>
      </article>
    </li>
  );
}

function GhostTile() {
  return (
    <li>
      <div className="flex h-full flex-col justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/30 p-6 text-muted-foreground">
        <h3 className="text-lg font-semibold">More to come</h3>
        <p className="text-sm leading-relaxed">New products are always in research.</p>
      </div>
    </li>
  );
}

export function ProductsSection() {
  return (
    <section
      aria-labelledby="products-title"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      <h2 id="products-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        The products
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
        Each product charts one public dataset, one question at a time. Live products open
        straight from their tile; the rest are still in research.
      </p>
      <ul className="mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) =>
          product.status === "live" && product.url ? (
            <LiveTile key={product.name} product={product} />
          ) : (
            <PlaceholderTile key={product.name} product={product} />
          ),
        )}
        <GhostTile />
      </ul>
    </section>
  );
}
