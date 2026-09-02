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
      "Creating stylized characters and visual worlds designed for animation, storytelling, and memorable experiences.",
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
      "Transforming products and ideas into high-impact 3D visuals that communicate value, capture attention, and support marketing.",
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
      "Bringing characters, products, and concepts to life through purposeful motion, cinematic composition, and visual storytelling.",
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
      "Building supporting assets and visual effects that add depth, realism, and production value to creative projects.",
    items: [
      "Hard Surface Assets",
      "Environment Assets",
      "Cloth & Rigid Body",
      "Fluid & Particle FX",
    ],
    icon: "simulation",
  },
];

export const software = [
  "Blender",
  "Substance 3D Painter",
  "Photoshop",
  "Unreal Engine",
];