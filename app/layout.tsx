import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { themeInitScript } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL("https://opendata.pixelate.nl"),
  title: {
    default: "Open Data Project — The stories hiding in public data.",
    template: "%s · Open Data Project",
  },
  description:
    "The family hub for Pixelate's Open Data Project: public data, charted one question at a time. Live projects, research, and the stories hiding in public data.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://opendata.pixelate.nl",
    siteName: "Open Data Project",
    locale: "en",
    title: "Open Data Project — The stories hiding in public data.",
    description:
      "Public data, charted one question at a time. Built by Pixelate.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Open Data Project pixel grid logo on a dark teal gradient",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Data Project — The stories hiding in public data.",
    description: "Public data, charted one question at a time. Built by Pixelate.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EAF6F9" },
    { media: "(prefers-color-scheme: dark)", color: "#0F353D" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-depth text-foreground antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
