const paragraphs = [
  "Public institutions collect this data with public money, so I believe it deserves to be seen — not locked away behind portals, but out in the open where anyone can look at it.",
  "Every figure on these sites can be checked by anyone through the same official source. If a chart claims something, you can trace it back and verify it yourself.",
  "Open data holds stories that portal spreadsheets never tell. Once the numbers are public, the questions start — and the charts follow.",
];

export function WhyOpenData() {
  return (
    <section aria-labelledby="why-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <h2 id="why-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Why open data
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {paragraphs.map((text) => (
          <p
            key={text.slice(0, 24)}
            className="rounded-xl border border-border bg-card p-6 text-[0.95rem] leading-relaxed text-card-foreground"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
