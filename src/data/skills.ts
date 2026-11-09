export interface Skill {
  title: string;
  description: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    title: "Character development",
    description:
      "Developing stylized characters with clear silhouettes, expressive proportions, and production-ready foundations.",
    items: ["Modeling", "Sculpting", "Retopology", "Rigging & skinning"],
  },
  {
    title: "Product visualization",
    description:
      "Presenting products through considered modeling, surface treatment, lighting, and visual composition.",
    items: ["Product modeling", "Materials", "Lighting", "Rendering"],
  },
  {
    title: "Animation & motion",
    description:
      "Using movement and camera work to give characters, products, and visual ideas a stronger sense of life.",
    items: ["Character animation", "Product animation", "Camera animation"],
  },
  {
    title: "Simulation & effects",
    description:
      "Exploring simulated motion and visual effects to add physical behavior and detail to a scene.",
    items: ["Cloth simulation", "Rigid-body studies", "Fluid & particle studies"],
  },
];

export const software = ["Blender"];
