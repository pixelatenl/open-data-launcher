import { Hero } from "@/components/hero";
import { WhyOpenData } from "@/components/why-open-data";
import { AiInsight } from "@/components/ai-insight";
import { ProductsSection } from "@/components/products-section";
import { Spotlight } from "@/components/spotlight";

export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Open Data Project",
  url: "https://opendata.pixelate.nl",
  description:
    "The family hub for Pixelate's Open Data Project: public data, charted one question at a time.",
  inLanguage: "en",
  creator: {
    "@type": "Organization",
    name: "Pixelate BV",
    url: "https://pixelate.nl",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyOpenData />
      <AiInsight />
      <ProductsSection />
      <Spotlight />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
