export interface Service {
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export const services: Service[] = [
  {
    title: "Film & Character",
    description:
      "Developing stylized characters with expressive forms and clear visual identities for animation and storytelling.",
    items: [
      "Character Modeling",
      "Character Design",
      "Character Rigging",
      "Cartoon Characters",
    ],
    icon: "character",
  },

  {
    title: "Commercial & Product",
    description:
      "Turning product concepts into considered 3D visuals through modeling, materials, lighting, and commercial composition.",
    items: [
      "Product Modeling",
      "Product Visualization",
      "Product Animation",
      "Advertising Visuals",
    ],
    icon: "product",
  },

  {
    title: "Animation & Storytelling",
    description:
      "Giving characters and products a sense of life through movement, camera work, timing, and visual storytelling.",
    items: [
      "Character Animation",
      "Product Animation",
      "Camera Animation",
      "Visual Storytelling",
    ],
    icon: "animation",
  },

  {
    title: "3D Assets & FX",
    description:
      "Creating supporting 3D assets and simulation studies that add detail, physical behavior, and depth to a scene.",
    items: [
      "Hard Surface Assets",
      "Environment Assets",
      "Cloth & Rigid Body",
      "Fluid & Particle FX",
    ],
    icon: "simulation",
  },
];
