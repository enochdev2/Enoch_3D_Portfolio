export const categories = [
  "All",
  "Character",
  "Product Visualization",
  "Hard Surface",
  "Simulation",
  "Material & Lighting",
] as const;

export type Category = (typeof categories)[number];
