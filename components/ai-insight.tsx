import { Sparkles } from "lucide-react";
import { Chip } from "@/components/chip";

export function AiInsight() {
  return (
    <section
      aria-labelledby="ai-title"
      className="border-y border-border bg-muted/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="ai-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          AI adds the context
        </h2>
        <p className="mt-6 max-w-3xl leading-relaxed">
          Across the projects in this family, AI (Mistral) provides context on the data and
          the charts: what a figure means, why it moves, and what to look at next. The numbers
          themselves are always computed from the official open sources — the model only
          narrates.
        </p>

        <figure className="mt-10 max-w-3xl rounded-xl border border-border bg-card p-6">
          <figcaption className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 font-semibold">
              <Sparkles size={16} aria-hidden="true" className="text-primary" />
              AI insight
            </span>
            <Chip tone="accent">Experimental</Chip>
          </figcaption>
          <p className="mt-3 text-sm text-muted-foreground">
            Figures are computed from the official source; only the explanation is
            AI-generated.
          </p>
          <blockquote className="mt-4 text-[0.95rem] leading-relaxed">
            In the Dutch fleet, battery-electric cars have grown from a rounding error to a
            visible share of new registrations, and the mix differs sharply by province. The
            RDW register shows the steepest shift in urban municipalities, where public
            charging is densest. Diesel keeps declining, but vans and older passenger cars
            are the long tail that will decide how quickly the last litres disappear.
          </blockquote>
        </figure>

        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          This pattern is rolling out across the family of products, similar to the Home
          Energy Dashboard.
        </p>
      </div>
    </section>
  );
}
