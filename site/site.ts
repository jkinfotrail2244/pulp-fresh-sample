import type { SiteMeta, Theme } from "@/lib/site";

// Pulp Fresh · Day 17 · "Market Crate" (see site/DESIGN.md).

export const meta: SiteMeta = {
  name: "Pulp Fresh",
  title: "Pulp Fresh · Cold-pressed at sunrise",
  description: "Cold-pressed juice, pressed every morning from market-fresh fruit. Flavours, mix your own, cleanses. Concept website.",
  loaderText: "Pulp Fresh",
  // The site draws its own I34 drop-and-splash loader (site/components/SplashLoader.tsx).
  loader: false,
  cursor: true,
  record: { duration: 36 },
};

export const theme: Theme = {
  bg: "#FBF6EC",
  surface: "#EFE2C8",
  text: "#1C1A17",
  muted: "#6A6052",
  accent: "#E8541E",
  accentText: "#FFFFFF",
  line: "#D9CBB0",
  fontDisplay: "'Barlow Condensed', 'Arial Narrow', sans-serif",
  fontBody: "'Barlow', system-ui, sans-serif",
  radius: 6,
  uppercaseHeadings: true,
};
